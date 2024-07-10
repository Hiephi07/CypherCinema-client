import { Iuser } from "@/_interfaces/IUser";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TfiPencil } from "react-icons/tfi";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

const packageData: Iuser[] = [
  {
    id: 1,
    email: "trungduc2807@gmail.com",
    password: "12345678",
    fullname: "nguyễn trung đức",
    phone_number: "0352359190",
    birthday: "2001-01-02",
    gender_id: 1,
    city_id: 14,
  },
  {
    id: 2,
    email: "maichi1@gmail.com",
    password: "12345678",
    fullname: "phạm mai chi",
    phone_number: "0352359199",
    birthday: "2001-07-02",
    gender_id: 1,
    city_id: 24,
  },
  {
    id: 2,
    email: "maichi1@gmail.com",
    password: "12345678",
    fullname: "phạm mai chi",
    phone_number: "0352359199",
    birthday: "2001-07-02",
    gender_id: 1,
    city_id: 24,
  },
  {
    id: 3,
    email: "tunganh@gmail.com",
    password: "12345678",
    fullname: "pham tung anh",
    phone_number: "0352359199",
    birthday: "2001-07-02",
    gender_id: 1,
    city_id: 24,
  },
];

const UserList = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke  bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 ">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-4">
                  Email
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Họ*tên
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Sđt
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Ngày sinh
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-4 dark:border-strokedark xl:pl-4">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.email}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-4 dark:border-strokedark xl:pl-4">
                    <p className="text-sm">{packageItem.fullname}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.phone_number}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.birthday}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button className="hover:text-primary">
                       
                        <Sheet>
                        <SheetTrigger> <MdOutlineRemoveRedEye className="size-4 hover:text-[#3c50e0]"/></SheetTrigger>
                        <SheetContent side={"top"} className="bg-slate-500 mt-[10%] right-36 left-36 rounded-[6px] border-0">
                            <SheetHeader>
                            <SheetTitle className="font-black">Chi tiết người dùng</SheetTitle>
                            <SheetDescription>
                                
                            </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                        </Sheet>
                      </button>
                      <button className="hover:text-primary">
                        <TfiPencil className="size-4 hover:text-[#3c50e0]"></TfiPencil>
                      </button>
                      <button className="hover:text-primary">
                        <FaRegTrashCan className="size-3.5 hover:text-[#3c50e0]"></FaRegTrashCan>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tbody>
              {packageData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-4 dark:border-strokedark xl:pl-4">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.email}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-4 dark:border-strokedark xl:pl-4">
                    <p className="text-sm">{packageItem.fullname}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.phone_number}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.birthday}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button className="hover:text-primary">
                       
                        <Sheet>
                        <SheetTrigger> <MdOutlineRemoveRedEye className="size-4 hover:text-[#3c50e0]"/></SheetTrigger>
                        <SheetContent side={"top"} className="bg-slate-500 mt-[10%] right-36 left-36 rounded-[6px] border-0">
                            <SheetHeader>
                            <SheetTitle className="font-black">Chi tiết người dùng</SheetTitle>
                            <SheetDescription>
                                
                            </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                        </Sheet>
                      </button>
                      <button className="hover:text-primary">
                        <TfiPencil className="size-4 hover:text-[#3c50e0]"></TfiPencil>
                      </button>
                      <button className="hover:text-primary">
                        <FaRegTrashCan className="size-3.5 hover:text-[#3c50e0]"></FaRegTrashCan>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tbody>
              {packageData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-4 dark:border-strokedark xl:pl-4">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.email}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-4 dark:border-strokedark xl:pl-4">
                    <p className="text-sm">{packageItem.fullname}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.phone_number}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.birthday}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button className="hover:text-primary">
                        <Sheet>
                        <SheetTrigger> <MdOutlineRemoveRedEye className="size-4 hover:text-[#3c50e0]"/></SheetTrigger>
                        <SheetContent side={"top"} className="bg-slate-500 mt-[10%] right-36 left-36 rounded-[6px] border-0">
                            <SheetHeader>
                            <SheetTitle className="font-black">Chi tiết người dùng</SheetTitle>
                            <SheetDescription>
                                
                            </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                        </Sheet>
                      </button>
                      <button className="hover:text-primary">
                        <TfiPencil className="size-4 hover:text-[#3c50e0]"></TfiPencil>
                      </button>
                      <button className="hover:text-primary">
                        <FaRegTrashCan className="size-3.5 hover:text-[#3c50e0]"></FaRegTrashCan>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
