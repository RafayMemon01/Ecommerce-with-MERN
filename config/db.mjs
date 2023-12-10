import mongoose from 'mongoose';
import colors  from 'colors';

const connectDB = async () => {
    try {
        // connect DB wit mongoose
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`MongoDB Connected: ${conn.connection.host}`.magenta.underline);
        

    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}
export default connectDB;