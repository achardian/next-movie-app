"use client";

import useAuthModal from "@/store/auth-modal-store";
import { signIn } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";

const AuthModal = () => {
  const { isOpen, setIsOpen } = useAuthModal();
  const { theme } = useTheme();

  return (
    <div
      className={`fixed inset-0 bg-black/40 p-5 z-[100] ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center`}
      onClick={() => setIsOpen(false)}
    >
      <div className='relative w-2/5 bg-white dark:bg-black py-5 px-6 rounded-lg flex flex-col items-center justify-center gap-3'>
        <h1 className='font-bold text-3xl'>Welcome to Watch Me</h1>
        <p className='italic mb-10'>Search milions of movies and tv shows</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            signIn("google");
          }}
          className='w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-full'
        >
          <Image
            src='/icons8-google.svg'
            width={20}
            height={20}
            alt='google icon'
          />
          Sign In With Google
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className='absolute -top-3 -right-3 bg-gray-100 dark:bg-gray-900 p-3 rounded-full'
        >
          {theme === "dark" ? (
            <Image src='/close-dark.png' alt='close' width={20} height={20} />
          ) : (
            <Image src='/close-light.png' alt='close' width={20} height={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
