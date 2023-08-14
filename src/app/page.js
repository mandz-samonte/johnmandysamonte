import Image from "next/image";
import Container from "@/components/Container";
import { TECH_STACK } from "@/data";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { Input, TextArea } from "@/components/Input";
import { BiMouse } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import Link from "next/link";
import About from "@/sections/about";
import Works from "@/sections/works";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            {/* HEADER */}
            <Container className="md:h-screen p-5 pb-32 py-40 flex flex-col sm:justify-center">
                <h1 className="font-black text-4xl text-center md:text-6xl lg:text-8xl ">
                    Hi there! I'm John Mandy. A passionate <span className="text-primary">Front-End Developer</span>
                </h1>
                <h3 className="text-slate-500 mt-5 text-center text-sm w-full mx-auto md:text-2xl lg:text-3xl md:max-w-3xl">
                    Focused on building beautiful and intuitive web applications and websites for your business
                </h3>

                <a
                    href="path_to_file"
                    download="proposed_file_name"
                    className="px-5 py-3 bg-blue-600 text-white hover:bg-blue-500 text-sm md:text-base font-bold flex items-center gap-x-2 mx-auto mt-10"
                >
                    Download Resume <AiOutlineDownload size={20} />
                </a>

                <span className="flex items-center text-sm gap-2 mx-auto mt-20 md:mt-32 md:text-lg text-slate-600">
                    <BiMouse
                        size={20}
                        className="animate-bounce hidden md:block"
                    />{" "}
                    <BsArrowDownShort
                        size={20}
                        className="animate-bounce md:hidden"
                    />
                    Scroll down to view my work
                </span>
            </Container>

            <About />

            <Works />

            {/* WORKS */}

            {/* ABOUT ME */}

            {/* BLOGS */}
            {/* <Container className="px-5 py-20 flex flex-col">
                <h3 className="font-bold text-center text-lg mb-2 md:text-4xl">I write sometimes</h3>
                <h6 className="text-slate-500 text-center text-xs md:text-base max-w-xl mx-auto">
                    I write about dev, ui and ux design, productivity, marketing, tech, and life
                </h6>

                <div className="grid sm:grid-cols-2 gap-5 mt-5 md:mt-10">
                    <BlogCard
                        title="Sample Blog"
                        date="June 24, 2023"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                        categories={["UI/UX Design"]}
                    />
                    <BlogCard
                        title="Sample Blog"
                        date="June 24, 2023"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                        categories={["UI/UX Design"]}
                    />
                    <BlogCard
                        title="Sample Blog"
                        date="June 24, 2023"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                        categories={["UI/UX Design"]}
                    />
                    <BlogCard
                        title="Sample Blog"
                        date="June 24, 2023"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                        categories={["UI/UX Design"]}
                    />
                </div>
            </Container> */}
        </main>
    );
}
