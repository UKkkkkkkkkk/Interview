var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/huhuhu")

var UserSchema=new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    age:{type:Number}
})

var UserModel=mongoose.model("User",UserSchema)

UserModel.create([{
    username:"zfpx",
    password:"123456"
},
    {
        username:"zfpx",
        password:"123456"
    }],function(err,docs){
    //console.log(docs);
})

UserModel.find({}, function (err,docs) {
    if(err){
        console.log(err);
    }else{
        console.log(docs);
    }
})
UserModel.update({username:"huhuhuhuh"},{$set:{age:8}}, function (err,docs) {
    if(err){
        console.log(err);
    }else{
        console.log(docs);
    }
})