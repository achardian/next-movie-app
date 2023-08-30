"use client";

import useSidebarStore from "@/store/sidebar-store";
import { Sidebar } from "..";

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`flex h-full relative mt-16 ${
        isOpen ? "ml-0 lg:ml-[200px]" : "ml-[200px] lg:ml-0"
      }`}
    >
      <Sidebar />
      {children}
    </div>
  );
};

export default SidebarProvider;
