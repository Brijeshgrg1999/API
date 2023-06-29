const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./user') ; 
const Form = require('./Form') ; 
const bodyParser = require('body-parser') ; 

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

app.use(cors());
app.use(bodyParser.json()) ; 
app.get('/f', (req, res) => {
  res.send('Hello');
});




app.post('/join' , async(req , res)=>{
  const {name , email , number } = req.body ; 
  try {
    const formData = await Form.create({
      name , email , number 
    })
    res.json({
      message: "enroll is sent " , formData 
    })
    
  } catch (error) {
    console.error(error) ; 
        res.status(500).json({
            message:"error found"  
        })
  }

})

app.post('/collab' , async  (req , res)=>{
    try{
        const { name , email , message } = req.body ; 
        const user = await User.create({
            name , email , message 

        }); 
        res.status(201).json({
            message :"users created succed" , user 
        });
    }catch(err)
    {
        console.error(err) ; 
        res.status(500).json({
            message:"error found"  
        })
    }

})

app.listen(process.env.PORT || 8000 , () => {
  console.log('Server started');
});