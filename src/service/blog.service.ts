

import { cookies } from "next/headers";
import { env } from "../env";

const API_URL = env.API_URL

// No Dynamic and No {cache:"no-store"} : SSG --> Static Page
// {cache:"no-store"}--> : SSR --> Dynamic Page
// next: {revalidate :10 } : ISR -> Mix between static and dynamic Page 


interface GetBlogsParams {
    isFeatured?: boolean,
    search?: string
}

interface ServiceOptions {
    cache?: RequestCache,
    revalidate?: number
}

export interface BlogData {
    title: string,
    content: string,
    tags?: string[]
}

export const blogService = {
    getBlogPosts: async function (
        params?: GetBlogsParams,
        options?: ServiceOptions) {
        try {

            const url = new URL(`${API_URL}/posts`)

            url.searchParams.append("key", "value")

            // console.log(Object.entries(params));
            if (params) {

                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== "") {
                        url.searchParams.append(key, value)
                    }
                })
            }

            const config: RequestInit = {}

            if (options?.cache) {
                config.cache = options.cache
            }
            if (options?.revalidate) {
                config.next = { revalidate: options.revalidate }
            }

            config.next = { ...config, tags: ["blogPosts"] }

            // console.log(url.toString(), config);

            // , {
            // cache :"no-store"  //dynamic korbe protibar reload a data fetch kore niye asbe
            //     next: { revalidate: 60 } //ISR -> follow korbe
            // }
            const res = await fetch(url.toString(), config)

            // const res = await fetch(url.toString(), {
            //     next ;{
            //         tags:["blogPosts"]
            //     }
            // })
            const data = await res.json()

            //  this is and example
            //  if (data.sucess) {
            //     return
            // }

            return {
                data, error: null
            }
        } catch (error) {
            console.log(error);
            return { data: null, error: { message: "something went wrong" } }
        }
    },
    getBlogByid: async function (id: string) {
        try {
            const res = await fetch(`${API_URL}/posts/${id}`)
            const data = await res.json()
            return { data }
        } catch (error) {
            console.log(error);
            return { data: null, error: error }
        }
    },

    createBlogPost: async function (blogData: BlogData) {
        try {
            const cookieStore = await cookies();
            const res = await fetch(`${API_URL}/posts`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Cookie: cookieStore.toString(),
                },
                body: JSON.stringify(blogData),
            });
            const data = await res.json()
            if (data.error) {
                return {
                    data: null,
                    error: { message: data.error || " Error Post not Created" }
                }
            }
            return { data: data, error: null }
        } catch (error) {
            return { data: null, message: 'Something went wrong' }
        }
    }

}


