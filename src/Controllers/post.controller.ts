//import modules
import { postServices } from '../Services/post.service'
import { Request, Response } from 'express'
import {PostschemaValidate} from '../Models/posts'

class postController {
    //add post controller
    addpost = async (req: Request, res: Response) => {
        //data to be saved in database
        const data = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            subcategory: req.body.subcategory,
            image: req.body.image,
            count: req.body.count
        }
        //validating the request
        const {error, value} = PostschemaValidate.validate(data)

        if(error){
            res.send(error.message)

        }else{
            //call the create post function in the service and pass the data from the request
            const post = await postServices.createPost(value)
            res.status(201).send(post)          
        }
        
    }

    //get all posts
    getPosts = async (req: Request, res: Response) => {
        const posts = await postServices.getPosts()
        res.send(posts)
    }


    //get a single post
    getAPost = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        const post = await postServices.getPost(id)
        res.send(post)
    }

    //update post
    updatePost = async (req: Request, res: Response) => {
        const id = req.params.id
       const post = await postServices.updatePost(id, req.body)  
        res.send(post)
    }


    //delete a post
    deletePost = async (req: Request, res: Response) => {
        const id = req.params.id
        await postServices.deletePost(id)
        res.send('post deleted')
    }

}

//export class
export const PostController = new postController()