import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

import { sendResponse } from "../../utils/sendResponse";
import { courseService } from "./course.service";

const createCourse = catchAsync(async (req, res) => {
  const body = req.body

  const result = await courseService.createCourseIntoDB(body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category created successfully',
    data: result
  })
});
const getAllCourseFromDB = catchAsync(async (req, res) => {
  const result = await courseService.getAllCourseFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved successfully',
    data: result
  })
})
export const courseController = {
  createCourse,
  getAllCourseFromDB
}