"use client";

import useSidebarStore from "@/store/sidebar-store";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Movie",
      path: "/movie?filter=now_playing&page=1",
    },
    {
      name: "Tv",
      path: "/tv?filter=airing_today&page=1",
    },
    {
      name: "Favorites",
      path: "/favorites",
    },
    {
      name: "Watchlist",
      path: "/Watchlist",
    },
  ];

  console.log("/movie?filter=now_playing".split("?")[0]);

  const { isOpen } = useSidebarStore();
  const user = false;

  return (
    <aside
      className={`lg:w-[200px] ${
        isOpen ? "translate-x-0" : "lg:translate-x-0 -translate-x-[500px]"
      } duration-100 ease-in-out fixed inset-0 bg-gray-50 dark:bg-[#03001C] mt-16 py-5 flex flex-col px-10 z-50`}
    >
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={`${
            pathname ===
            `${link.path.includes("?") ? link.path.split("?")[0] : link.path}`
              ? "font-semibold bg-gray-300 dark:bg-gray-800"
              : ""
          } py-2 px-3 rounded-md`}
        >
          {link.name}
        </Link>
      ))}
      <div className='mt-auto'>
        {user ? (
          <img src='' alt='' />
        ) : (
          <button className='w-full py-2 bg-red-600 text-white rounded-md'>
            Sign In
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
