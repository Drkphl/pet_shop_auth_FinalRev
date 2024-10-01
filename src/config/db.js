import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/PetShop'
            // `mongoose.connect('mongodb+srv://<DB_USER>:<PASSWORD>i@<CLUSTER_NAME>/<COLLECTION_NAME>');`
        );
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);
    }
};

connectDB();

export default mongoose;
