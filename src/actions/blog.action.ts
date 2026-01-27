"use server"
import { updateTag } from "next/cache"
import { BlogData, blogService } from "../service/blog.service"

export const getBlogs = async () => {
    return await blogService.getBlogPosts()
}




export const createBlogPost = async (data: BlogData) => {
    const res = await blogService.createBlogPost(data)
    updateTag("blogPosts")
    return res
} 