import { Router } from "express";

import StudentController from "../controller/studentController";

const router = Router()

router.get('/',StudentController.getAllStudents);
router.post('/addStudent',StudentController.createStudent);
router.get('/:email',StudentController.getStudentById)
router.patch('/update/:email',StudentController.updateStudent)
router.delete('/delete/:email',StudentController.deleteStudent)
//hello shikhil im going for an purcase




export default router