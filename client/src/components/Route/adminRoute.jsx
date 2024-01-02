import { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Loader from '../../Loader';

export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const token = auth?.token;
                const res = await axios.get('/api/v1/auth/admin-check', {
                    headers: {
                        Authorization: token,
                    },
                });

                setOk(res.data.ok);

            } catch (error) {
                console.error('Error checking authentication:', error);
            }
        };

        if (auth?.token) {
            authCheck();
        }

    }, [auth?.token]);

    return ok ? <Outlet /> : <Loader path='' />;
}
