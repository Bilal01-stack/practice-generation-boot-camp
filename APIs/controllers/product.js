const product = require("../models/product")

const addProduct = async(req,res)=>{
    try{
        const {name} = req.body
        const product = new Product({
            name,
        })
        await Product.save()
    }catch(error){
   res.status(500).Json({error:error.message})
    }
}
module.exports = addProduct