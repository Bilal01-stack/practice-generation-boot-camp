const Todo = require('../models/user');
//for sigup and signin
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const createData = async (req, res) => {
  try {
    const todo = new Todo({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    await todo.save(); // corrected from await todo.save
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAlldata = async (req, res) => {
  try {
    const gettodos = await Todo.find({});
    res.json(gettodos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async(req,res)=>{
try{
  const dataById = await Todo.findById(req.params.id)
  res.json(dataById)
}catch(error){
    res.status(500).json({error:error.message})
}
}

const updateById = async (req,res)=>{
  try{
const id = req.params.id;
const updatedData = req.body;
const options = { new: true };
const result = await Todo.findByIdAndUpdate(id, updatedData, options)
res.send(result)
  }catch(error){
   res.status(400).json({message:error.message})
  }
}

const deleteById = async(req,res) => {
 try{
  const id = req.params.id;
  const data = await Todo.findByIdAndDelete(id)
  res.send(`Document with ${data.name} has been deleted..`)
 }catch(error){
  res.status(400).json({message:error.message})
 }
}


//signup and signin

//creating signup api 

const signup= async(req,res)=>{
  try{
   const {name, email, password} = req.body
   const hashpassword = await bcrypt.hash(password,10)
   const login = new Todo ({name, email, password:hashpassword})
   await login.save();
   res.status(201).json({message: "user created"})
  }catch(error){
    res.status(500).json({message:error.message})
  }
}

const signin = async(req,res)=>{
  try{
const {email,password} = req.body
const user =await  Todo.findOne({email})
if(user && await bcrypt.compare(password, user.password)){
  const token = jwt.sign({userId:user.id, email: user.email},process.env.PRIVATE_KEY, {expiresIn:"1hr"})
  res.status(200).json({  token: token });
}else{
  res.status(401).json({error:"invalid credentials"})
}
  }catch(error){
    res.status(500).json({message:error.message})
    const user = await Todo.findOne(email)
  }
}



module.exports = {
  createData,
  getAlldata,
  getById,
  updateById,
  deleteById,
  signup,
  signin
};
