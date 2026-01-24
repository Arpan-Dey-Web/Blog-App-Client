import { error } from "console";
import { env } from "../env";

const API_URL = env.API_URL

export const blogService = {
    getBlogPosts: async function () {
        try {
            const res = await fetch(`${API_URL}/posts`
               , {
                   // cache :"no-store"  //dynamic korbe protibar reload a data fetch kore niye asbe 
                   next:{revalidate : 60} //ISR -> follow korbe 
                }
            )
            const data = await res.json()

            //  this is and example
            //  if (data.sucess) {
            //     return
            // }
            return {
                data, error: null
            }
        } catch (error) {
            return { data: null, error: { message: "something went wrong" } }
        }
    }
}