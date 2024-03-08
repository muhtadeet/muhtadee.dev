import { Typography } from "@material-tailwind/react";
import { Link } from "react-scroll";
import FramerMgBtn from "./FramerMgBtn";

export default function FooterWithLogo() {
  return (
    <footer className="w-full bg-white mt-10 p-12 sm:p-14 z-[999]">
      <div className="flex items-center justify-center gap-y-6 gap-x-64 text-center z-[999]">
        <Link to="home" href="#home" smooth={true} duration={1000} className="z-[999]">
          <b className="text-[#242424] font-ubuntu text-xl z-[999]">Muhtadee Taron</b>
        </Link>

        {/* <ul className="flex flex-row flex-wrap items-center gap-y-2 gap-x-10">
          <li>
            <Typography
              as="a"
              color="white"
              className="sm:ml-4 transition duration-300 ease-in-out hover:text-blue-gray-400"
            >
              <FramerMgBtn>
                <Link href="https://www.linkedin.com/in/muhtadee-taron-b4253628b/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-linkedin transition ease-in-out hover:stroke-light-blue-600 stroke-[#242424]"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </Link>
              </FramerMgBtn>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              color="white"
              className="transition duration-300 ease-in-out hover:text-blue-gray-400"
            >
              <FramerMgBtn>
                <Link href="https://github.com/muhtadeet">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition ease-in-out hover:stroke-light-blue-600 stroke-[#242424] tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </Link>
              </FramerMgBtn>
            </Typography>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}
