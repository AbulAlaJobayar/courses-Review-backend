/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { TQueryObj } from "../../types/TQuerObj";
import { getQuery } from "../../utils/getQuery";
import TCourse from "./course.interface";
import { Course } from "./course.model"
import { Review } from "../review/review.model";

const createCourseIntoDB = async (payload: TCourse): Promise<TCourse> => {
    const result = await Course.create(payload);
    return result
}

const getAllCourseFromDB = async (query: TQueryObj): Promise<TCourse[]> => {
    const result = await getQuery(Course.find(), query)
    return result
}
const updateCourseIntoDB = async (id:string,payload:Partial<TCourse>)=> {
    const {tags,details,...remainingCourse}=payload
    const updatedModifiedData:Record<string,unknown>={
        ...remainingCourse
    
    }
    if(tags?.length){
        tags.forEach((tag)=>{
          for(const [key,value] of Object.entries(tag)){
            updatedModifiedData[`tag.${key}`]=value
          }   
        })
    }
    if(details && Object.keys(details).length){
        for(const [key,value] of Object.entries(details)){
            updatedModifiedData[`details.${key}`]=value
          }   
    }

    const result = await Course.findByIdAndUpdate(id,updatedModifiedData,{new:true,runValidators:true})
    return result
}
const getCourseByReviewFromDB = async (id:string)=> {
    const session=await mongoose.startSession()
    try{
        session.startTransaction()
        
        const course = await Course.findById(id).session(session)
        if(!course){
            await session.abortTransaction()
            session.endSession()
            throw new Error('Course not Found')
        }
        const review= await Review.find({courseId:id}).session(session)

        await session.commitTransaction();
        session.endSession()
        return {course,review}
        
    }catch(err:any){
        await session.abortTransaction()
        session.endSession()
        throw new Error(err )
    }
    
   
}
const getBestCourseByReviewFromDB = async () => {
    const aggregationR=await Review.aggregate([
        {
            $group:{
                _id:'$courseId',
                averageRating:{$avg:'$rating'},
                reviewCount:{$sum:1}
            }
        },
        {
            $sort:{averageRating:-1,reviewCount:-1}
        },{$limit:1}
    ])
    const bestCourseID=aggregationR[0]._id
    const bestCourse = await Course.findById(bestCourseID);

    return {
        course: bestCourse,
        averageRating: aggregationR[0].averageRating,
        reviewCount: aggregationR[0].reviewCount,
    }
}
export const courseService = {
    createCourseIntoDB,
    getAllCourseFromDB,
    updateCourseIntoDB,
    getCourseByReviewFromDB,
    getBestCourseByReviewFromDB
}