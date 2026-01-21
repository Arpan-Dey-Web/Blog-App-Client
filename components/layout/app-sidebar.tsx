"use client";

import * as React from "react";
import { NavMain } from "@/components/layout/nav-main";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { adminRoutes } from "@/app/routes/adminRoutes";
import { userRoutes } from "@/app/routes/userRoutes";
import { Route } from "@/app/types";

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
