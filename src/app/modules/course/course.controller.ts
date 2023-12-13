import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

import { sendResponse } from "../../utils/sendResponse";
import { courseService } from "./course.service";
//import { courseValidationSchema } from "./courseValidation";

const createCourse = catchAsync(async (req, res) => {
  const body = req.body
  //const zodValidation= courseValidationSchema.createCourseValidationSchema.parse(body)
  //console.log(zodValidation)
  const result =await courseService.createCourseIntoDB(body)
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course created Successfully',
    data: result
  })
})
export const courseController={
  createCourse,
}