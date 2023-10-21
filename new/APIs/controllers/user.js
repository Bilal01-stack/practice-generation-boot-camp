const Todo = require('../models/user');

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

const updateById = async ()=>{
  
}

module.exports = {
  createData,
  getAlldata,
  getById
};
