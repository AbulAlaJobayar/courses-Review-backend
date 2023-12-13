import TCourse from "./course.interface";
import { Course } from "./course.model"

const createCourseIntoDB = async (payload: TCourse): Promise<TCourse> => {
    const result = await Course.create(payload);
    return result
}
export const courseService = {
    createCourseIntoDB
}