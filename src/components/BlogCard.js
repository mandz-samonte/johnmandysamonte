import React from "react";
import Image from "next/image";

export default function BlogCard({ img, title = "", categories = [], date = "", description = "" }) {
    return (
        <div className="flex flex-col items-center lg:flex-row bg-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            {img ? <Image alt="" /> : <div className="bg-slate-700 h-52 w-full lg:h-full lg:w-2/5 flex-shrink-0"></div>}
            <div className="w-full flex flex-col p-5">
                <h3 className="font-semibold">{title}</h3>
                <span className="text-xs">{date}</span>

                <p className="my-5 font-medium">{description}</p>

                <span className="text-xs italic">{categories?.join(", ")}</span>
            </div>
        </div>
    );
}
