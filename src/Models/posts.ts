//importing modules
import  {Schema, model,} from 'mongoose'
import Joi from 'joi'

//validation schema
export const PostschemaValidate = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    subcategory: Joi.string().required(),
    image: Joi.string().required(),
    count: Joi.number().required(),
})

//creating an interface 
interface IPosts {
    title: string,
    description: string,
    price: number,
    category: string,
    subcategory: string,
    image: string,
    count: string
}

//Postschema
const postSchema = new Schema<IPosts>({
    title: {
        type: String,
        
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    count: {
        type: String,
        required: true,
    }
})

//creating a model
 export const Post = model<IPosts>('Post', postSchema )