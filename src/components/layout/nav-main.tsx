"use client";

import { type Icon } from "@tabler/icons-react";
import Link from "next/link";

import { CloudLightning } from "lucide-react";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export type Route = {
  title: string;
  url?: string;
  icon?: Icon;
  items?: Route[];
};

export type UserInfo = {
  role: "admin" | "user";
};

type NavMainProps = {
  items: Route[];
  userInfo: UserInfo;
};

export function NavMain({ items, userInfo }: NavMainProps) {
  console.log(userInfo);
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-3">
        {items.map((group) => (
          <div key={group.title}>
            {/* Section title */}
            {!group.url && (
              <span className="px-2 text-xs font-semibold text-muted-foreground">
                {group.title}
              </span>
            )}

            <SidebarMenu>
              {group.items?.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url!}>
                      {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>
        ))}
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
