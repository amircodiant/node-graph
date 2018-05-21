import mongoose from 'mongoose';

var schema = new mongoose.Schema({
  studentNo: {
    type: String,
    required: true,
    index:true,
    unique:true
  },
  firtName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum:['male','female']
  }
});

export default mongoose.model('Student', schema);