import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className=" h-40 space-x-2 p-3 rounded-xl bg-[#111111] border border-gray-500 flex items-center justify-between shadow-2xl cursor-pointer shadow-black">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-start gap-1">
          <Image
            src={
              "https://images.unsplash.com/photo-1614981226683-97792a0c6bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
            alt="author"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="text-gray-300 text-sm">Author Name</p>
        </div>
        <h1 className="text-base font-semibold">
          The Disturbing Colonial History of Pumpkin Spice
        </h1>
        <p className="text-gray-300 text-sm">Genocide, slavery and spices</p>

        <p className="text-xs text-gray-400">Time • Date</p>
      </div>
      <div className="relative w-[35%] h-full object-contain">
        <Image
          src={
            "https://images.unsplash.com/photo-1614981226683-97792a0c6bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          }
          alt="conetent"
          fill
          className="rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default BlogCard;
