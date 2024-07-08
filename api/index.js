import express from 'express';
<<<<<<< HEAD
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
    }).catch((err) =>{
        console.log(err);
});
=======
>>>>>>> eaa371323e465f9f61d855cca2f19119574b4a19

const app = express();

app.listen(3000, () =>{
<<<<<<< HEAD
    console.log('Server is running on port 3000');
    }
);


=======
    console.log('Server is running on port 3000!!!');
    }
);
>>>>>>> eaa371323e465f9f61d855cca2f19119574b4a19
