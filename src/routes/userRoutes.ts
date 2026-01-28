
import {
} from "@tabler/icons-react";
import { Route } from "../types";

export const userRoutes: Route[] = [
    {
        title: "Blog Management",
        items: [
            {
                title: "Home",
                url: "/",
            },
            {
                title: "Create Blog",
                url: "/dashboard/create-blog",
            },
            {
                title: "Blog History",
                url: "/dashboard/blog-history",
            },
          
        ],
    },
];