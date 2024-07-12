import { useState } from 'react';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { IoIosClose } from "react-icons/io";
import { MdLibraryAdd } from "react-icons/md";
import { TfiPencil } from "react-icons/tfi";
import Select from 'react-select';


interface Props {
    isAdd : boolean
}

interface Props {
    
}

const FormShowTime = ({isAdd}: Props) => {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    
    const customStyle = {
      control: (provided: any, state: any) => ({
        ...provided,
        color: '#9ba2ae',
        boxShadow: 'none',
        backgroundColor: '#181a1b',
        outline: 'none',
        borderColor: state.isFocused ? '#172693' : '#302c27',
        '&:hover': {
          borderColor: state.isFocused ? '#172693' : '#ced4da',
        }
      }),
      option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor:  state.isSelected ? '#007bcc': '#181a1b',
        color: state.isSelected ? '#fff' : '#fff',
        
        '&:hover': {
          backgroundColor: '#888888',
        },
      }),
      valueContainer: (provided: any) => ({
        ...provided,
        padding: '8px', // Sửa mặc định padding của value container của select
      }),
      input: (provided: any) => ({
        ...provided,
        color: '#9ba2ae',
        margin: '0', // Bỏ margin của input
        padding: '0', // Bỏ padding của input của select
      }),
      dropdownIndicator: (provided: any) => ({
        ...provided,
        padding: '0 8px 0 8px', // Bỏ padding của nút down của select
      }),
      menu: (provided: any) => ({
        ...provided,
        padding: '4px 0', 
        backgroundColor: '#181a1b', // Thay đổi màu nền của menu của option
      }),
      singleValue: (provided: any) => ({
        ...provided,
        color: '#9ba2ae',
      }),
      multiValue: (provider: any) => ({
        ...provider,
        color: '#fff',
        background: '#262a2b'
      })
      ,
      multiValueLabel: (provided: any) => ({
        ...provided,
        color: '#fff', // Thay đổi màu chữ của label thẻ đã chọn
      }),
    }

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleInteractOutside = (event: any) => {
        event.prevenDefault()
    }
    return (
        <>
         <div className="">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger >
          {" "}
          {isAdd ? <MdLibraryAdd className="text-[#fff] size-8 hover:text-[#3c50e0]" /> :<TfiPencil className="size-4 hover:text-[#3c50e0]"/>}
        </SheetTrigger>
        <SheetContent onInteractOutside={handleInteractOutside}
          side={"top"}
          className="bg-[#181a1b] mt-[6%] right-36 left-36 rounded-[12px] border-0 overflow-y-auto max-h-[560px] "
        >
          <SheetHeader>
            <SheetTitle className="font-black text-[#CFCBC4] mb-4">{isAdd ? 'Thêm mới' : 'Cập nhật'}</SheetTitle>
            <SheetDescription asChild>
                <form action="">
                    <div className="mb-6">
                        <label htmlFor="" className="w-full inline-block text-[16px] text-[#CFCBC4] mb-3">Rạp chiếu</label>
                        <Select
                                className="basic-single text-[16px]"
                                classNamePrefix="select"
                                isClearable={isClearable}
                                isSearchable={isSearchable}
                                options={options}
                                styles={customStyle}
                                placeholder="Vui lòng chọn..."
                              />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="" className="w-full inline-block text-[16px] text-[#CFCBC4] mb-3">Ngày chiếu</label>
                        <input type="text" className="w-full inline-block text-[#9ba2ae] text-[16px] p-2 border-[1px] border-solid border-[#302c27] rounded-[6px] bg-[#181a1b] hover:border-[#ced4da] focus:outline-0 focus:border-[#172693]" placeholder="Nhập ngày chiếu"/>
                    </div>
                    <div className="mb-6 grid grid-cols-2 gap-x-10">
                        <div className="">
                            <label htmlFor="" className="w-[100%] block text-[16px] text-[#CFCBC4] mb-3">Bắt đầu</label>
                            <input type="text" className="w-[100%] block text-[#9ba2ae] text-[16px] p-2 border-[1px] border-solid border-[#302c27] rounded-[6px] bg-[#181a1b] hover:border-[#ced4da] focus:outline-0 focus:border-[#172693]" placeholder="Nhập thời gian vd: 13:30"/>
                            </div>
                        <div className="">
                            <label htmlFor="" className="w-[100%] block text-[16px] text-[#CFCBC4] mb-3">Kết thúc</label>
                            <input type="text" className="w-[100%] block text-[#9ba2ae] text-[16px] p-2 border-[1px] border-solid border-[#302c27] rounded-[6px] bg-[#181a1b] hover:border-[#ced4da] focus:outline-0 focus:border-[#172693]" placeholder="Nhập thời gian vd: 15:30"/>
                        </div>
                    </div>
                    <div className="mb-6 grid grid-cols-2 gap-x-10">
                        <div className="">
                            <label htmlFor="" className="w-[100%] block text-[16px] text-[#CFCBC4] mb-3">Tên phim</label>
                            <Select
                                className="basic-single text-[16px]"
                                classNamePrefix="select"
                                isClearable={isClearable}
                                isSearchable={isSearchable}
                                options={options}
                                styles={customStyle}
                                placeholder="Vui lòng chọn..."
                              />
                            </div>
                        <div className="">
                            <label htmlFor="" className="w-[100%] block text-[16px] text-[#CFCBC4] mb-3">Phòng chiếu</label>
                            <Select
                                    className="basic-multi-select text-[16px]"
                                    classNamePrefix="select"
                                    isMulti
                                    isClearable={isClearable}
                                    isSearchable={isSearchable}
                                    options={options}
                                    styles={customStyle}
                                    placeholder="Vui lòng chọn..."
                                />
                        </div>
                    </div>
                    <div className="mb-6">
                        <button className="bg-blue-600 text-[#fff] text-[16px] font-semibold px-4 py-1.5 rounded-[6px] hover:opacity-90">Thêm</button>
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
        </>
    )
}

export default FormShowTime
