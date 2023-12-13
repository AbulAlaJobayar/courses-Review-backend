import { Schema, model } from "mongoose";
import TCourse, { TDetails, TTags } from "./course.interface";
const tagsSchema = new Schema<TTags>({
    name: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true

    }
})
const detailsSchema = new Schema<TDetails>({
    level: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
const courseSchema = new Schema<TCourse>({
    title: {
        type: String,
        required: [true, 'please input title'],
        unique: true
    },
    instructor: {
        type: String,
        required: [true, 'please input instructor name']
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    price:{
        type:Number,
        required: [true, 'please input  price']
    },
    tags: {
        type: [tagsSchema],
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    provider:{
        type: String,
        required: true   
    },
    details:{
        type:detailsSchema,
        required:true
    }
})
export const Course=model<TCourse>('Course',courseSchema)