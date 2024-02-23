import mongoose from 'mongoose';

async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/book_shop_dev');
        console.log("succesfully");
    } catch (error) {
        console.log("err:", error);
    }
}

export default connect