const Student=require("../models/Student");
exports.createStudent=async(req,res)=>{
    try{
        const totalcount=await Student.countDocuments({});
        req.body['rollno']=1+totalcount;
        const student=await Student.create(req.body);    
        res.json(student);
    }catch(error){
        res.status(400).send({error: error.message});
    }
}

exports.getallstudent=async(req,res)=>
{
    try{
        
        const student=await Student.find({});    
        res.json(student);
    }catch(error){

        res.status(400).send({error: error.message});
    }
}
exports.getbyid=async(req,res)=>
{
    try{
        
        const student=await Student.findOne({rollno: req.params.a});    
        res.json(student);
    }catch(error){

        res.status(400).send({error: error.message});
    }
}

exports.deletebyid=async(req,res)=>
{
    try
    {
        const student=await Student.findOneAndDelete({rollno: req.params.b});
        if(!student) return res.status(404).json({warn:"student not found"})
        res.json({msg:"student deleted successfully"})
    }
    catch(err)
    {
        res.status(500).json({error:err.message})
    }
}
exports.updatestudent=async(req,res)=>
{
    try
    {
        const student=await Student.findOneAndUpdate({rollno:req.params.p},
            req.body,
            {new:true}
        );
         if(!student) return res.status(404).json({warn:"student not found"})
            res.json(student);
    }
    catch(err)
    {
        res.status(500).json({error:err.message})
    }
}
