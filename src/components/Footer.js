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
        <footer className="w-full p-10">
            <div className="w-full bg-black rounded-2xl">
                <Container className="flex flex-col items-center pt-20 pb-10 text-white">
                    <h1 className="text-6xl font-bold mb-2">Let's create something great!</h1>
                    <h6 className="text-lg w-full max-w-2xl text-center mb-10">
                        Feel free to connect, I would love to hear from you. Whether it's a project, a job opportunity,
                        a question, or even just a conversation, hit me up!
                    </h6>

                    <div className="flex justify-around w-full max-w-6xl mb-20">
                        <div className="flex items-center justify-center text-sm gap-x-5">
                            <div className="bg-white rounded-xl w-12 h-12 flex items-center justify-center text-black">
                                <HiOutlinePhone />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold mb-1">Phone</span>
                                <span>+639171184929</span>
                            </div>
                        </div>
                        <a
                            href="mailto:johnmandysamonte@gmail.com"
                            className="flex items-center justify-center text-sm gap-x-5"
                        >
                            <div className="bg-white rounded-xl w-12 h-12 flex items-center justify-center text-black">
                                <HiOutlineMail />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold mb-1">Email</span>
                                <span>johnmandysamonte@gmail.com</span>
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/john-mandy-samonte"
                            className="flex items-center justify-center text-sm gap-x-5"
                        >
                            <div className="bg-white rounded-xl w-12 h-12 flex items-center justify-center text-black">
                                <LuLinkedin />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold mb-1">LinkedIn</span>
                                <span>linkedin.com/in/john-mandy-samonte</span>
                            </div>
                        </a>
                    </div>

                    <span className="text-sm text-slate-400">Design and created by John Mandy Samonte</span>
                </Container>
            </div>
        </footer>
    );
}
