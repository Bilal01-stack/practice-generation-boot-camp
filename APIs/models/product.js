const mongoose =  require ('mogoose')
const product = new mongoose.schema({
    
    name:{
        type: String,
        require:true
    },
})

const Product = mongoose.model('Product', product)
module.exports = Product