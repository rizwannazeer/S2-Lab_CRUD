var mongoose=require("mongoose");

const mySchema= mongoose.Schema({
    name: String,
    id: String,
    duration: String,
    fee: String,

})

const myModel=mongoose.model("course",mySchema);
module.exports=myModel;

