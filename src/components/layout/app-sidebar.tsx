"use client";

import * as React from "react";

import { Route } from "@/src/types";
import { adminRoutes } from "@/src/routes/adminRoutes";
import { userRoutes } from "@/src/routes/userRoutes";
import { Sidebar, SidebarContent, SidebarFooter } from "../ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

type UserInfo = {
  role: "admin" | "user";
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  userInfo: UserInfo;
};

const data = {
  user: {
    name: "Arpan Dey",
    email: "arpandey.web@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function AppSidebar({ userInfo, ...props }: AppSidebarProps) {
  const routes: Route[] = userInfo.role === "admin" ? adminRoutes : userRoutes;

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarContent>
        <NavMain items={routes} userInfo={userInfo} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
