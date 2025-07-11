"use client";
import { useStore } from "../store/store";
import logo from "../assets/logo.jpg";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { logOut } from "../Functions";

const Nav = () => {
  const { login, user } = useStore();
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0  z-50 bg-gray-950 ">
      <nav
        className="mx-auto flex  items-center justify-between p-6  "
        aria-label="Global"
      >
        <div className="flex ">
          <a href="/" className="-m-1.5">
            <span className="sr-only">Your Company</span>
            <Image className=" " src={logo} alt="logo" 
            width={80}
            />
          </a>
        </div>
        <div className="flex md:hidden flex-end">
          <button
            onClick={() => setOpenMenu(true)}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {/* {login?
    <form className="  none sm:flex items-center mx-10  " role="search">
        <input className="form-control p-2 w-fit focus:outline-none border border-gray-500 rounded-full " type="search" placeholder="Search for products..." aria-label="Search" autoComplete='true'/>
        </form>:null
} */}
        <div className="hidden md:flex lg:gap-x-12">
                            {user?.role==='company'?null:

          <a
            href="/"
            className={`text-sm/6 font-semibold capitalize ${
              pathname == "/"
                ? "border-b-2  border-[var(--main-color)] text-[var(--main-color)]"
                : " hover:bg-[var(--main-color)]  rounded-xl"
            } duration-300 w-24 h-10 flex items-center justify-center  `}
          >
            Home
          </a>
}
          <a
            href="/community"
            className={`text-sm/6 font-semibold capitalize ${
              pathname.startsWith("/community")
                ? "border-b-2 border-[var(--main-color)] text-[var(--main-color)]"
                : " hover:bg-[var(--main-color)]  rounded-xl"
            } duration-300 w-24 h-10 flex items-center justify-center  `}
          >
            Community
          </a>
                            {user?.role==='instructor'?
                            null
                            :
            
          <a
            href="/jobs"
            className={`text-sm/6 font-semibold capitalize ${
              pathname.startsWith("/jobs")
                ? "border-b-2 border-[var(--main-color)] text-[var(--main-color)]"
                : " hover:bg-[var(--main-color)]  rounded-xl"
            } duration-300 w-24 h-10 flex items-center justify-center  `}
          >
            Jobs
          </a>
          }

                  {user?.role==='company'?

          <p
            className={`text-sm/6 font-semibold capitalize ${
              pathname.startsWith("/Applicants")
                ? "border-b-2 border-[var(--main-color)] text-[var(--main-color)]"
                : "  rounded-xl"
            } duration-300 w-24 h-10 flex items-center justify-center  `}
          >
            applicants
          </p>
          :
          <a
            href="/courses"
            className={`text-sm/6 font-semibold capitalize ${
              pathname.startsWith("/courses")
                ? "border-b-2 border-[var(--main-color)] text-[var(--main-color)]"
                : " hover:bg-[var(--main-color)]  rounded-xl"
            } duration-300 w-24 h-10 flex items-center justify-center  `}
          >
            courses
          </a>
          }
             {
                    user?.role==='instructor'?
                       <a
            href="/courses/add"
            className={`text-sm/6 font-semibold capitalize ${
              pathname.startsWith("/courses/add")
                ? "border-b-2 border-[var(--main-color)] text-[var(--main-color)]"
                : " hover:bg-[var(--main-color)]  rounded-xl"
            } duration-300 w-24 h-10 flex items-center justify-center  `}
          >
            add course
          </a>:null
                  }
        </div>

        <div className="relative hidden md:flex items-center lg:justify-end gap-5 ">
          {login ? (
            <>
    
                  {user?.profile_picture ? (
                    <Image
                      src={`http://localhost:8000/${user?.profile_picture}`}
                      width={100}
                      height={100}
                      alt="user"
                      className="rounded-full w-16 h-16"

                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 46 46"
                      fill="none"
                                            className="rounded-full w-8"

                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.875 10.5C12.875 7.84784 13.9286 5.3043 15.8039 3.42893C17.6793 1.55357 20.2228 0.5 22.875 0.5C25.5272 0.5 28.0707 1.55357 29.9461 3.42893C31.8214 5.3043 32.875 7.84784 32.875 10.5C32.875 13.1522 31.8214 15.6957 29.9461 17.5711C28.0707 19.4464 25.5272 20.5 22.875 20.5C20.2228 20.5 17.6793 19.4464 15.8039 17.5711C13.9286 15.6957 12.875 13.1522 12.875 10.5ZM12.875 25.5C9.55979 25.5 6.38037 26.817 4.03617 29.1612C1.69196 31.5054 0.375 34.6848 0.375 38C0.375 39.9891 1.16518 41.8968 2.5717 43.3033C3.97822 44.7098 5.88588 45.5 7.875 45.5H37.875C39.8641 45.5 41.7718 44.7098 43.1783 43.3033C44.5848 41.8968 45.375 39.9891 45.375 38C45.375 34.6848 44.058 31.5054 41.7138 29.1612C39.3696 26.817 36.1902 25.5 32.875 25.5H12.875Z"
                        fill="#626262"
                      />
                    </svg>
                  )}
              <button
                type="button"
                className=" border-btn w-20 flex h-8  justify-center capitalize items-center gap-x-1 text-sm/6 font-semibold "
                aria-expanded="false"
                onClick={() => logOut()}
              >
                log out
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className=" border-btn w-20 flex h-8  justify-center capitalize items-center gap-x-1 text-sm/6 font-semibold "
                aria-expanded="false"
              >
                <a href="/register/login" className="w-full  ">
                  log in
                </a>
              </button>
              <button
                type="button"
                className="border-bg flex  w-20 h-8  capitalize  justify-center items-center gap-x-1 text-sm/6 font-semibold "
                aria-expanded="false"
              >
                <a href="/register/sign" className="w-full  ">
                  sign up
                </a>
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu open state. */}
      {openMenu ? (
        <div className="md:hidden " role="dialog" aria-modal="true">
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-10 " />
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex  items-center justify-end">
              <button
                onClick={() => setOpenMenu(false)}
                type="button"
                className="m-2.5 rounded-md  text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 ">
                  {user?.role==='company'?null:
                  <a
                  href="/"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold capitalize ${
                    pathname == "/"
                    ? "   bg-[var(--main-color)] text-white rounded"
                    : "   rounded-xl"
                    }`}
                    >
                    Home
                  </a>
                  }
                  <a
                    href="/community"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold capitalize ${
                      pathname.startsWith("/community")
                        ? "  bg-[var(--main-color)] text-white rounded"
                        : "text-white "
                    }`}
                  >
                    community
                  </a>
                  <a
                    href="/jobs"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold capitalize ${
                      pathname.startsWith("/jobs")
                        ? "  bg-[var(--main-color)] text-white rounded"
                        : "text-white "
                    }`}
                  >
                    jobs
                  </a>
                  {user.role==='company'?

                  <a
                  href="/courses"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold capitalize ${
                      pathname.startsWith("/courses")
                        ? "  bg-[var(--main-color)]  rounded"
                        : "text-white "
                        }`}
                        >
                    Applicants
                  </a>
                :
                  

                  <a
                  href="/courses"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold capitalize ${
                      pathname.startsWith("/courses")
                        ? "  bg-[var(--main-color)]  rounded"
                        : "text-white "
                        }`}
                        >
                    courses
                  </a>
                  }
                  {
                    user?.role==='instructor'?
                          <a
                    href="/courses"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold capitalize ${
                      pathname.startsWith("/courses")
                        ? "  bg-[var(--main-color)]  rounded"
                        : "text-white "
                    }`}
                  >
                    courses
                  </a>:null
                  }
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold  capitalize "
                  >
                    Log in
                  </a>
                  <a
                    href="/sign"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold  capitalize "
                  >
                    sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Nav;
