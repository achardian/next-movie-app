"use client";

import useSidebarStore from "@/store/sidebar-store";
import { Sidebar } from "..";
import useMounted from "@/hooks/use-mounted";

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSidebarStore();

  const { isMounted } = useMounted();

  if (!isMounted) return null;

  return (
    <div
      className={`flex h-full relative mt-16 ${
        isOpen ? "ml-[200px]" : "lg:ml-[200px] ml-0 "
      }`}
    >
      <Sidebar />
      {children}
    </div>
  );
};

export default SidebarProvider;
