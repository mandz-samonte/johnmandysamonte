import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import Container from "./Container";
import { PrimaryButton, SecondaryButton } from "./Button";

import { RxExternalLink } from "react-icons/rx";
import { AiOutlineInfoCircle } from "react-icons/ai";

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
        <Container
            href={`/works/${slug}`}
            className="rounded-2xl bg-slate-100 grid grid-cols-12 p-10 hover:bg-slate-200 transition-all duration-300 hover:shadow-lg outline outline-slate-200/0 outline-8 hover:outline-slate-100"
        >
            <div className="p-5 flex flex-col pr-20 col-span-5">
                <div className="flex items-center gap-x-3 mb-2">
                    <h6 className="font-semibold text-xl">{title}</h6>{" "}
                    {status && <span className="text-xs text-white px-2 py-1.5 bg-slate-400 rounded-lg">{status}</span>}
                </div>
                <span className="italic text-xs text-slate-900">{categories?.join(" | ")}</span>

                <p className="font-medium text-sm my-5">{description}</p>

                <div className="flex items-center gap-2 text-xs flex-wrap text-slate-600">
                    {stack.map((item) => (
                        <span key={item?.toLowerCase()}>#{item},</span>
                    ))}
                </div>

                <div className="flex gap-x-5 mt-10">
                    <PrimaryButton>
                        Live Demo <RxExternalLink />
                    </PrimaryButton>
                    <PrimaryButton>
                        Learn More <AiOutlineInfoCircle />{" "}
                    </PrimaryButton>
                </div>
            </div>

            <div className="col-span-7">
                {img ? <Image alt="" /> : <div className="w-full bg-slate-700 h-72"></div>}
            </div>
        </Container>
    );
}
