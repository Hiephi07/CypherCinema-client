import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaRegTrashCan } from "react-icons/fa6";

interface Props {}

const OrderInfo = (props: Props) => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <FaRegTrashCan className="size-3.5 hover:text-[#3c50e0] ml-3"></FaRegTrashCan>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#181a1b] text-[#CFCBC4] rounded-[8px] border-0">
          <AlertDialogHeader>
            <AlertDialogTitle>Xóa</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc chắn muốn xóa?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className=" hover:opacity-70 rounded-[8px] ">
              Hủy
            </AlertDialogCancel>
            <AlertDialogAction className="bg-red-700 hover:bg-red-800 rounded-[8px]">
              Tiếp tục
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default OrderInfo;
