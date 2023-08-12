import Container from "@/components/Container";
import React from "react";

import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoSass, BiLogoMongodb } from "react-icons/bi";
import { SiNextdotjs, SiRedux, SiTailwindcss, SiNpm, SiExpress } from "react-icons/si";
import { SecondaryButton } from "@/components/Button";

const icons = {
    html: <AiFillHtml5 color="#E34C26" />,
    css: <BiLogoCss3 color="#264de4" />,
    react: <FaReact color="#61DBFB" />,
    next: <SiNextdotjs />,
    redux: <SiRedux color="#764abc" />,
    tailwindcss: <SiTailwindcss color="#3abef8" />,
    scss: <BiLogoSass color="#CD6799" />,
    npm: <SiNpm color="#CC3534" />,
    node: <FaNodeJs color="#3C873A" />,
    express: <SiExpress color="#b2b5b9" />,
    mongodb: <BiLogoMongodb color="#0fa54d" />,
    figma: <FaFigma />,
};

export default function About() {
    return (
        <div className="px-10 w-full">
            <div className="w-full bg-black text-white rounded-2xl">
                <Container className="py-20 grid grid-cols-12 gap-20">
                    <div className="bg-gray-100 col-span-5 w-full h-full min-h-96 rounded-2xl"></div>

                    <div className="col-span-7 flex flex-col justify-center">
                        <span className="text-4xl mb-5 font-black py-5">About Me</span>
                        <p className="mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet, magna in
                            egestas dictum, lorem nibh blandit lorem, euismod lobortis metus ex nec leo. Vivamus ac
                            porta arcu. Integer ante lorem, suscipit accumsan purus et, tempus egestas lectus. Cras
                            gravida felis sit amet leo tincidunt ornare.
                        </p>

                        <span className="mb-5 font-bold">Tech Stack</span>
                        <div className="flex flex-wrap gap-5 mb-16">
                            {Object.keys(icons).map((key) => (
                                <div
                                    key={key}
                                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-2xl"
                                >
                                    {icons[key]}
                                </div>
                            ))}
                        </div>
                        <SecondaryButton className="mr-auto mt-5">Download my CV</SecondaryButton>
                    </div>
                </Container>
            </div>
        </div>
    );
}
