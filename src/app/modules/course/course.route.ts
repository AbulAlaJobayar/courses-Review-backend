import express from "express"
import validateRequest from "../../middleware/validateRequest";
import { courseValidationSchema } from "./courseValidation";
import { courseController } from "./course.controller";


const router= express.Router()
router.post('/course',validateRequest(courseValidationSchema.createCourseValidationSchema),courseController.createCourse,);
export const courseRoute=router