import { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Loader from '../../Loader';

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get('/api/v1/auth/user-auth', {
                    headers: {
                        Authorization: auth?.token,
                    },
                });

                setOk(res.data.ok); // Simplified setting of ok state

            } catch (error) {
                // Handle error, e.g., set an error state
                console.error('Error checking authentication:', error);
            }
        };

        if (auth?.token) {
            authCheck();
        }

    }, [auth?.token]);

    return ok ? <Outlet /> : <Loader />;
}
