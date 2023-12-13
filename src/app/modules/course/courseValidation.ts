import { z } from 'zod'
const createTagsValidationSchema = z.object({
    name: z.string({
        invalid_type_error: 'categoryId must be String',
        required_error: 'categoryId must be required'
    }),
    isDeleted: z.boolean(),

})
const createDetailsValidationSchema = z.object({
    level: z.string({
        invalid_type_error: 'level must be String',
        required_error: 'level must be required'
    }),
    description: z.string({
        invalid_type_error: 'description must be String',
        required_error: 'description must be required'
    })
})

const createCourseValidationSchema = z.object({
    title: z.string({
        invalid_type_error: 'title must be String',
        required_error: 'title must be required'
    }),
    instructor: z.string({
        invalid_type_error: 'instructor must be String',
        required_error: 'instructor must be required'
    }),
    categoryId: z.string(),
    price: z.number(),
    tags: z.array(createTagsValidationSchema),
    startDate: z.string({
        invalid_type_error: 'startDate must be String',
        required_error: 'startDate must be required'
    }),
    endDate: z.string({
        invalid_type_error: 'endDate must be String',
        required_error: 'endDate must be required'
    }),
    language: z.string({
        invalid_type_error: 'language must be String',
        required_error: 'language must be required'
    }),
    provider: z.string({
        invalid_type_error: 'provider must be String',
        required_error: 'provider must be required'
    }),
    details: createDetailsValidationSchema

})
export const courseValidationSchema = {
    createCourseValidationSchema
}