import { TQueryObj } from "../../types/TQuerObj";
import { getQuery } from "../../utils/getQuery";
import TCourse from "./course.interface";
import { Course } from "./course.model"

const createCourseIntoDB = async (payload: TCourse): Promise<TCourse> => {
    const result = await Course.create(payload);
    return result
}

const getAllCourseFromDB = async (query: TQueryObj): Promise<TCourse[]> => {
    const result = await getQuery(Course.find(), query)
    return result
}
export const courseService = {
    createCourseIntoDB,
    getAllCourseFromDB
}