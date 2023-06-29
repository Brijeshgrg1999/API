const mongoose = require('mongoose');
//s
const formSchema  = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  number : {
    type: Number,
    required: true
  }



});

const formModel= mongoose.model('Form', formSchema);
module.exports = formModel ; 