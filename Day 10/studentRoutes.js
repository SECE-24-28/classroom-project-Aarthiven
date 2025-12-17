const express=require ("express")
const {createStudent}=require("../controllers/studentController") //folder and file location
const router=express.Router()
router.post("/",createStudent)
module.exports=router;