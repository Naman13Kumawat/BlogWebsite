import Blog from "../models/Blog.js"

export const createBlog = async (req, res, next) => {
    try{
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.status(200).json(newBlog);
    } catch(err){
        next(err);
    }
}

export const getBlog =  async (req, res, next) => {
    try{
        const blog = await Blog.findById(req.params.blogId);
        res.status(200).json(blog);
    } catch(err){
        next(err);
    }
}

export const getBlogs = async (req, res, next) => {
    try{
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch(err){
        next(err);
    }
}

export const updateBlog = async (req, res, next) => {
    try{
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.blogId, {$set: req.body}, {new: true});
        res.status(200).json(updatedBlog);
    }catch(err){
        next(err);
    }
}

export const deleteBlog = async (req, res, next) => {
    try{
        await Blog.findByIdAndDelete(req.params.blogId);
        res.status(200).json("Blog has been deleted!");
    }catch(err){
        next(err);
    }
}

