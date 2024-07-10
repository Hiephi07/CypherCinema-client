import { path_Sidebar } from "@/_constant/admin";
import { Link } from "react-router-dom";

interface Props {}

const SideBar = (props: Props) => {
  return (
    <>
       <div className="flex h-screen flex-col justify-between border-e bg-[#161d2a] w-[246px] fixed left-0 top-0 bottom-0 border-r-[2px] border-solid border-[#163d71] shadow-lg shadow-[#163d71] z-10">
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
          </ul>
        </div>

      </div>
    </>
  );
};

export default SideBar;
