import React, { useId } from "react";

function Input({ label, props }) {
  let UnQId = useId();
  return (
    <>
      <div className="relative">
        <input
          type="text"
          id={UnQId}
          className="border-1 text-md peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 font-semibold text-white  focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 indent-4"
          placeholder=""
          {...props}
        />
        <label
          htmlFor={UnQId}
          className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-[#0C134F] px-2 text-sm font-bold tracking-widest text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Floating outlined
        </label>
      </div>
    </>
  );
}

export default Input;
