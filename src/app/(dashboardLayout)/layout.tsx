import { AppSidebar } from "@/src/components/layout/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/src/components/ui/sidebar";
import { Roles } from "@/src/constants/roles";
import { userService } from "@/src/service/user.service";

export default async function DashboardLayout({
  admin,
  user,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const { data } = await userService.getSession();

  console.log("dahsboard Layout", data.user.role);

  const userInfo = {
    role: data.user.role,
  };

  return (
    <SidebarProvider>
      <AppSidebar user={userInfo} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" /> 
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {userInfo.role === Roles.admin ? admin : user}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
