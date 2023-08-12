import React from "react";
import Container from "./Container";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { LuLinkedin } from "react-icons/lu";

const SOCIALS = [
    {
        title: "Instagram",
    },
    {
        title: "Twitter",
    },
    {
        title: "LinkedIn",
    },
    {
        title: "GitHub",
    },
    {
        title: "Dribbble",
    },
    {
        title: "BeHance",
    },
];

const CONTACTS = [
    {
        title: "+639171184929",
    },
    {
        title: "johnmandysamonte@gmail.com",
    },
];

export default function Footer() {
    return (
        <footer className="w-full">
            <Container className="flex flex-col items-center border-t border-slate-400 pt-20 pb-10">
                <h1 className="text-4xl font-bold mb-2">Let's create something great!</h1>
                <h6 className="text-lg w-full max-w-2xl text-center mb-10">
                    Feel free to connect, I would love to hear from you. Whether it's a project, a job opportunity, a
                    question, or even just a conversation, hit me up!
                </h6>

                <div className="flex justify-around w-full max-w-4xl mb-20">
                    <div className="flex items-center justify-center text-sm gap-x-2 text-blue-500">
                        <HiOutlinePhone />
                        +639171184929
                    </div>
                    <a
                        href="mailto:johnmandysamonte@gmail.com"
                        className="flex items-center justify-center text-sm gap-x-2 text-blue-500"
                    >
                        <HiOutlineMail />
                        johnmandysamonte@gmail.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/john-mandy-samonte"
                        target="_blank"
                        className="flex items-center justify-center text-sm gap-x-2 text-blue-500"
                    >
                        <LuLinkedin />
                        LinkedIn
                    </a>
                </div>

                <span className="text-sm text-slate-400">Design and created by John Mandy Samonte</span>
            </Container>
        </footer>
    );
}
