import React from "react";

const OrderDetails = () => {
  return (
    <div className="relative overflow-x-auto mt-[200px]">
      <h1 className="text-white">
        Mã đơn hàng <span className="text-red-500">#13123231</span>
      </h1>
      <div className="flex flex-row gap-[40px] items-start">
        <table className="w-[900px] text-sm text-left rtl:text-right rounded-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tóm tắt Order
              </th>
              <th scope="col" className="text-yellow-500 px-6 py-3">
                Chưa thanh toán
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
            </tr> */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tên Phim
              </th>
              <td className="px-6 py-4">Attack On Titan</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Suất chiếu
              </th>
              <td className="px-6 py-4"> 20:00</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Phòng - Rạp chiếu
              </th>
              <td className="px-6 py-4">Cinema - 3 </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Ngày đặt
              </th>
              <td className="px-6 py-4"> 04 - 05 - 2023 </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col gap-[20px]">
          <table className="w-[300px]   text-sm text-left rtl:text-right  rounded-[4px] text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ghế
                </th>
                <th scope="col" className="text-black px-6 py-3">
                  {" "}
                  200000.đ
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Loại ghế
                </th>
                <td className="px-6 py-4"> Đơn </td>
              </tr> */}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Voucher
                </th>
                <td className="px-6 py-4"> abc123 </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Giảm giá
                </th>
                <td className="px-6 py-4"> 40000.đ </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                ></th>
                <td className="px-6 py-4 text-yellow-500"> 160000.đ </td>
              </tr>
            </tbody>
          </table>
          <table className="w-[300px]   text-sm text-left rtl:text-right  rounded-[4px] text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Tổng tiền
                </th>
                <th scope="col" className="text-black px-6 py-3">
                  {" "}
                  200000.đ
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
      <table className="w-[900px] text-sm text-left rtl:text-right mt-[40px] rounded-[4px] text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Khách hàng
            </th>
            <th scope="col" className="text-yellow-500 px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
          </tr> */}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Tên khách hàng
            </th>
            <td className="px-6 py-4"> Nguyễn Thị A </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Điện thoại
            </th>
            <td className="px-6 py-4"> 0123456789</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Email
            </th>
            <td className="px-6 py-4"> example@mail.com </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Trạng thái
            </th>
            <td className="px-6 py-4"> State </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
