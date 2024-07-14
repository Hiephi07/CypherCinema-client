import React from "react";

const Ticket = () => {
  return (
    <>
      <section className="bg-dark dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new one
          </h2>
          <form action="#">
            <div className="grid gap-4 relative sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2 flex flex-row gap-4 relative  items-center ">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white dark:text-white w-[60px]"
                >
                  3D
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="40000"
                  required
                />
                <span className="absolute right-2 text-gray-500 "> đ </span>
              </div>
              <div className="sm:col-span-2 flex flex-row gap-4 relative items-center ">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white dark:text-white w-[60px]"
                >
                  4D
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="40000"
                  required
                />
                <span className="absolute right-2 text-gray-500 "> đ </span>
              </div>
              <div className="sm:col-span-2 flex flex-row gap-4 relative items-center ">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white dark:text-white w-[60px]"
                >
                  IMAX
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="40000"
                  required
                />
                <span className="absolute right-2 text-gray-500 "> đ </span>
              </div>
              <div className="sm:col-span-2 relative  flex flex-row gap-4 relative items-center ">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white dark:text-white w-[60px]"
                >
                  VIP
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="40000"
                  required
                />
                <span className="absolute right-2 text-gray-500 "> đ </span>
              </div>
              <div className="sm:col-span-2 flex flex-row gap-4 relative items-center ">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white dark:text-white w-[60px]"
                >
                  Couple
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  placeholder:ml-[10px] dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="40000"
                  required
                />
                <span className="absolute right-2 text-gray-500 "> đ </span>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-[4px] focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Ticket;
