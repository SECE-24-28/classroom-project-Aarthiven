const express=require ("express")
const {createStudent, getallstudent ,getbyid ,deletebyid,updatestudent}=require("../controllers/studentController") //folder and file location
const router=express.Router()
router.post("/",createStudent)
router.get("/",getallstudent)
router.get("/:a",getbyid)
router.delete("/:b",deletebyid)
router.put("/:p",updatestudent)
module.exports=router;