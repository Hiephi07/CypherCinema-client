import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { MdLibraryAdd } from "react-icons/md";
import { TfiPencil } from "react-icons/tfi";
interface Props {
  isAdd: boolean;
}

const FormTicket = ({ isAdd }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInteractOutside = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          {" "}
          {isAdd ? (
            <MdLibraryAdd className="text-[#fff] size-8 hover:text-[#3c50e0]" />
          ) : (
            <TfiPencil className="size-4 hover:text-[#3c50e0]" />
          )}
        </SheetTrigger>
        <SheetContent
          onInteractOutside={handleInteractOutside}
          side={"top"}
          className="bg-[#181a1b] mt-[6%] right-36 left-36 rounded-[12px] border-0 overflow-y-auto max-h-[560px] "
        >
          <SheetHeader>
            <SheetTitle className="font-black text-[#CFCBC4] mb-4">
              {isAdd ? "Thêm mới" : "Cập nhật"}
            </SheetTitle>
            <SheetDescription asChild>
              <form action="">
                <div className="mb-6">
                  <label
                    htmlFor=""
                    className="w-full inline-block text-[16px] text-[#CFCBC4] mb-3"
                  >
                    Tên rạp chiếu
                  </label>
                  <input
                    type="text"
                    className="w-full inline-block text-[#9ba2ae] text-[16px] p-2 border-[1px] border-solid border-[#302c27] rounded-[6px] bg-[#181a1b] focus:outline-0 focus:border-[#172693]"
                    placeholder="Nhập tên rạp"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor=""
                    className="w-full inline-block text-[16px] text-[#CFCBC4] mb-3"
                  >
                    Thành phố
                  </label>
                  <input
                    type="text"
                    className="w-full inline-block text-[#9ba2ae] text-[16px] p-2 border-[1px] border-solid border-[#302c27] rounded-[6px] bg-[#181a1b] focus:outline-0 focus:border-[#172693]"
                    placeholder="Nhập thành phố"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor=""
                    className="w-full inline-block text-[16px] text-[#CFCBC4] mb-3"
                  >
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    className="w-full inline-block text-[#9ba2ae] text-[16px] p-2 border-[1px] border-solid border-[#302c27] rounded-[6px] bg-[#181a1b] focus:outline-0 focus:border-[#172693]"
                    placeholder="Nhập địa chỉ"
                  />
                </div>
                <div className="mb-6 grid grid-cols-2 gap-x-10">
                  <div className="">
                    <label
                      htmlFor=""
                      className="w-[100%] block text-[16px] text-[#CFCBC4] mb-3"
                    >
                      Điện thoại
                    </label>
                    <input
                      type="text"
                      className="w-[100%] block text-[#9ba2ae] text-[16px] p-2 border-[1px] border-solid border-[#302c27] rounded-[6px] bg-[#181a1b] focus:outline-0 focus:border-[#172693]"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor=""
                      className="w-[100%] block text-[16px] text-[#CFCBC4] mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-[100%] block text-[#9ba2ae] text-[16px] p-2 border-[1px] border-solid border-[#302c27] rounded-[6px] bg-[#181a1b] focus:outline-0 focus:border-[#172693]"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor=""
                    className="w-full inline-block text-[16px] text-[#CFCBC4] mb-3"
                  >
                    Ảnh đại diện
                  </label>
                  <input
                    type="file"
                    className="w-full inline-block text-[#9ba2ae] text-[16px] p-2 border-[1px] border-solid border-[#302c27] rounded-[6px] bg-[#181a1b] focus:outline-0 focus:border-[#172693]"
                    placeholder="Nhập thành phố"
                  />
                </div>
                <div className="mb-6">
                  <button className="bg-blue-600 text-[#fff] text-[16px] font-semibold px-4 py-1.5 rounded-[6px] hover:opacity-90">
                    Thêm
                  </button>
                </div>
              </form>
            </SheetDescription>
          </SheetHeader>
          <SheetClose
            className="fill-#fff z-40 hover:transition-colors hover:duration-200 hover:ease-in-out absolute top-2.5 right-2.5 hover:text-#72be43"
            asChild
            onClick={() => handleClose()}
          >
            <button type="submit">
              <IoIosClose className="size-7 fill-white hover:fill-red-700" />
            </button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FormTicket;
