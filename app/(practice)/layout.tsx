import Link from "next/link";
import React from "react";

export default function Practicelayout({
  children,
  marcketingSlot,
  salesSlot,
  userSlot,
}: {
  children: React.ReactNode;
  marcketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
  userSlot: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex gap-10 m-8">
        <Link className="hover:underline " href={"/development"}>
          Development
        </Link>
        <Link className="hover:underline " href={"/marcketing"}>
          Marcketing
        </Link>
        <Link className="hover:underline " href={"/marcketing/settings"}>
          Settings
        </Link>
        <Link className="hover:underline " href={"/sales"}>
          Sales
        </Link>
        <Link className="hover:underline " href={"/user"}>
          User
        </Link>
      </nav>

      <div className="flex gap-10 mb-10">
        {marcketingSlot}
        {salesSlot}
        {userSlot}
      </div>
      <div>{children}</div>
    </div>
  );
}
