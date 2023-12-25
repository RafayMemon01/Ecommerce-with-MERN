import express from 'express';
import colors  from 'colors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors'
import connectDB from './config/db.mjs';
import authRoutes from './routes/auth.mjs';
import categoryRoute from './routes/categoryRoute.mjs'
import productRoute from './routes/productRoute.mjs'

dotenv.config();

// DB connection
connectDB()


const app = express();

// middleware functions here
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/product', productRoute);


app.get('/', (req, res) => {
    res.send('API is running');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.MODE_DEV} mode on port ${PORT}`.yellow.bold);

})