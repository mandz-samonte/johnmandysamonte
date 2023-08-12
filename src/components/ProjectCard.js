import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";

export default function ProjectCard({
    img,
    status = "",
    title = "",
    categories = [],
    description = "",
    stack = [],
    slug = "",
    demoLink = "",
}) {
    return (
        <Link
            href={`/works/${slug}`}
            className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
            {img ? <Image alt="" /> : <div className="w-full bg-slate-700 h-72"></div>}

            <div className="p-5 flex flex-col pr-20 pb-10">
                <div className="flex items-center gap-x-3 mb-2">
                    <h6 className="font-semibold text-lg">{title}</h6>{" "}
                    {status && (
                        <span className="text-xs text-slate-600 px-2 py-1.5 bg-slate-200 rounded-lg">{status}</span>
                    )}
                </div>
                <span className="italic text-xs text-slate-900">{categories?.join(" | ")}</span>

                <p className="font-medium text-sm my-5">{description}</p>

                <div className="flex items-center gap-2 text-xs flex-wrap text-slate-400">
                    {stack.map((item) => (
                        <span key={item?.toLowerCase()}>#{item},</span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
