import Image from "next/image";
import Container from "@/components/Container";
import { TECH_STACK } from "@/data";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { Input, TextArea } from "@/components/Input";
import { BiMouse } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import getPostMetadata from "@/utils/getPostMetadata";
import Link from "next/link";
import About from "@/sections/about";

export default async function Home() {
    const works = await getPostMetadata("works");

    return (
        <main className="flex min-h-screen flex-col items-center">
            {/* HEADER */}
            <Container className="md:h-screen p-5 pb-32 py-40 flex flex-col sm:justify-center">
                <h1 className="font-black text-4xl text-center md:text-6xl lg:text-7xl ">
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

            {/* TECH STACK */}
            <Container className="p-5 flex flex-col md:py-20">
                <h3 className="font-bold text-center text-2xl md:text-4xl">My Tech Stack</h3>
                <h6 className="text-slate-500 text-center text-xs md:text-lg">Technologies I use in my projects</h6>

                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:gap-y-5 my-10 md:max-w-lg mx-auto">
                    {TECH_STACK.map((tech) => (
                        <div
                            key={tech.title}
                            className="w-10 h-10 rounded-full shadow-md bg-white text-2xl md:text-3xl flex items-center justify-center md:w-14 md:h-14"
                        >
                            {tech.icon}
                        </div>
                    ))}
                </div>
            </Container>

            {/* WORKS */}
            <Container className="p-5 py-20 flex flex-col">
                <h3 className="font-bold text-center text-lg md:text-4xl max-w-lg mx-auto">
                    Projects I did and currently working on
                </h3>
                <h6 className="text-slate-500 text-center text-xs md:text-lg max-w-xl mx-auto">
                    This projects are combinations of working in a company and passion project of mine
                </h6>

                <div className="grid grid-cols-2 my-20">
                    {works?.map((data) => (
                        <ProjectCard
                            key={data.slug}
                            slug={data.slug}
                            {...data}
                        />
                    ))}
                </div>

                <Link
                    href="/works"
                    className="px-5 py-3 bg-primary font-bold text-white mx-auto"
                >
                    View More
                </Link>
            </Container>

            {/* ABOUT ME */}
            <Container className="grid md:grid-cols-2 p-5 md:py-20">
                <div className="w-full bg-slate-700 h-52 md:h-full"></div>
                <div className="flex flex-col items-start p-5 md:p-10">
                    <h3 className="text-blue-400 font-semibold text-lg mb-5 md:text-4xl">About Me</h3>
                    <p className="text-base mb-10 md:text-lg font-medium">
                        Hello, I'm John Mandy Samonte, a Junior Front-End Developer and a passionate multi-disciplinary
                        professional with a unique blend of skills in{" "}
                        <span className="text-blue-400 font-medium">Software Development</span>,{" "}
                        <span className="text-amber-400 font-medium">UI/UX Design</span>, and interest in{" "}
                        <span className="text-green-600 font-medium">Digital Marketing</span>. With the combinations of
                        my interests in development, design, and business, it grants me the ability to create fast and
                        intuitive products for users with business goals in mind.
                    </p>

                    <a
                        href="path_to_file"
                        download="proposed_file_name"
                        className="px-5 py-3 bg-blue-600 text-white hover:bg-blue-500 text-sm md:text-base font-bold flex items-center gap-x-2"
                    >
                        Download Resume <AiOutlineDownload size={20} />
                    </a>
                </div>
            </Container>

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
