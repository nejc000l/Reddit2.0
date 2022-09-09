import React from "react";

import Image from "next/image";
import { signIn,useSession,signOut} from "next-auth/react";
import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
  SpeakerWaveIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
function Header() {
  const {data:session} = useSession();
  
  return(
    <div className=" sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm ">
      <div className="relative h-20 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            objectFit="contain"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384876.png"
            layout="fill"
          />
        </Link>

      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5 cursor-pointer" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5 lg:hidden cursor-pointer" />
      </div>

      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden></button>
      </form>
      <div className="hidden mx-5 items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerWaveIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>
      
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center border-gray-100 p-2 space-x-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384876.png"
              layout="fill"
              alt=""
            />
          </div>
          <div className="flex-1 text-xs ">
            <p className="truncate">{session.user?.name}</p>
            <p className="text-gray-400">Sign Out </p>

          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray"/>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center border-gray-100 p-2 space-x-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384876.png"
              layout="fill"
              alt=""
            />
          </div>
          <p className="text-gray-400">Sign in</p>
        </div>
      )}
    </div>
  );
}

export default Header;
