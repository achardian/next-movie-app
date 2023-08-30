"use client";

import useMounted from "@/hooks/use-mounted";
import { useTheme } from "next-themes";
import Image from "next/image";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useMounted();

  if (!isMounted) return null;

  return (
    <div>
      {isMounted && theme === "dark" ? (
        <button onClick={() => setTheme("light")} className='toggle-btn'>
          <Image src='/moon.svg' alt='moon' width={20} height={20} />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")} className='toggle-btn'>
          <Image src='/sun.svg' alt='sun' width={20} height={20} />
        </button>
      )}
    </div>
  );
};

export default ModeToggle;
