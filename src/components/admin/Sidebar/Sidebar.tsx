import { path_Sidebar } from "@/_constant/admin";
import React from "react";
import { Link, NavLink } from "react-router-dom";

interface Props {}

const SideBar = (props: Props) => {
  return (
    <>
       <div className="flex h-screen flex-col justify-between border-e bg-[#161d2a] w-[246px] fixed left-0 top-0 bottom-0">
        <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600 ">
            Logo
          </span>
        
          
          <ul className="mt-6 space-y-1">
            <li>
              <Link
                to={`/admin`}
                className="block rounded-lg hover:bg-[#292e3a] text-[#c6d4e2] px-4 py-2 text-[14px] font-semibold"
              >
                Dashboard
              </Link>
            </li>
            {path_Sidebar.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="block rounded-lg hover:bg-[#292e3a] text-[#c6d4e2] px-4 py-2 text-[14px] font-semibold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Teams </span>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Banned Users
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>

      </div>
    </>
  );
};

export default SideBar;
