import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { categoryService } from "./category.service";

const createCategory = catchAsync(async (req, res) => {
  const body = req.body
  const result = await categoryService.createCategoryIntoDB(body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category created Successfully',
    data: result
  })
});
const getAllCategoryFromDB = catchAsync(async (req, res) => {
  const result = await categoryService.getAllCategoryFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrieved successfully',
    data: result
  })
})
export const categoryController = {
    createCategory,
    getAllCategoryFromDB
}