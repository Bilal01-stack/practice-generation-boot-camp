const mongoose =  require ('mogoose')
const quantity = new mongoose.schema({
    prodyctId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        require:true
    },
    vlaue:{
        type: Number,
        require:true
    },
})

const Qunatity = mongoose.model('Quantity', quantity)
module.exports = Qunatity