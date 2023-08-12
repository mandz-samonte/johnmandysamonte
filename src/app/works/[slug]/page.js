import Container from "@/components/Container";
import getPostMetadata, { getPostContent } from "@/utils/getPostMetadata";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { RiNotionFill } from "react-icons/ri";
import { BsCircleFill } from "react-icons/bs";
import Image from "next/image";

export async function generateStaticParams() {
    const works = (await getPostMetadata("works")) || [];
    return works?.map((work) => ({ slug: work.slug }));
}

export default async function Work({ params }) {
    const work = (await getPostContent("works", params.slug)) || {};

    return (
        <Container className="flex flex-col py-40 min-h-screen">
            <h1 className="text-4xl font-bold mb-2">{work.title}</h1>
            <span className="mb-5">{work.categories?.join(" / ")}</span>
            <span className="px-3 py-2 rounded-lg bg-slate-200 text-slate-600 mb-10 mr-auto text-sm flex items-center gap-x-2">
                <BsCircleFill />
                {work.status}
            </span>

            <h3 className="text-2xl font-semibold mb-5">Overview</h3>
            <p className="mb-10">{work.description}</p>

            <div className="grid grid-cols-3 mb-10 gap-x-10">
                <div className="flex flex-col gap-y-5">
                    <h6 className="text-2xl font-semibold">Project Type</h6>
                    <p>{work.type}</p>
                </div>
                <div className="flex flex-col gap-y-5">
                    <h6 className="text-2xl font-semibold">Stack</h6>

                    <div className="flex flex-wrap gap-x-5 gap-y-3">
                        {work.stack?.map((item) => (
                            <span># {item}</span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h6 className="text-2xl font-semibold">Links</h6>
                    {work.demoLink && (
                        <a
                            href={work.demoLink}
                            target="_blank"
                            className="flex items-center gap-x-2 text-blue-400"
                        >
                            Live demo <FiExternalLink />
                        </a>
                    )}
                    {work.codeLink && (
                        <a
                            href={work.codeLink}
                            target="_blank"
                            className="flex items-center gap-x-2 text-blue-400"
                        >
                            Code <FiGithub />
                        </a>
                    )}
                    {work.notionLink && (
                        <a
                            href={work.notionLink}
                            target="_blank"
                            className="flex items-center gap-x-2 text-blue-400"
                        >
                            Notion Link (Future Plan) <RiNotionFill />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="text-2xl font-semibold mb-5">Screen Shots</h3>
            <div className="grid grid-cols-3 gap-5">
                {work.screenshots?.map((url) => (
                    <Image
                        src={url}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="border border-slate-200"
                    />
                ))}
            </div>
        </Container>
    );
}
