import React from "react";

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
        <footer className="bg-black w-full py-10">
            <div className="grid md:grid-rows-2 md:grid-cols-3 md:grid-flow-col text-white w-full max-w-screen-xl mx-auto gap-5">
                <h1 className="font-black text-center text-2xl md:text-left md:row-span-2 p-5 md:text-4xl">JMS.</h1>

                <div className="flex flex-col items-center md:items-start md:col-span-2">
                    <h6 className="mb-2 font-semibold">Socials</h6>
                    <div className="flex flex-wrap justify-center md:justify-start gap-5">
                        {SOCIALS.map((social) => (
                            <div
                                key={social.title?.toLowerCase()}
                                className="flex items-center gap-x-3"
                            >
                                <div className="bg-white rounded-full h-10 w-10"></div>
                                <span className="hidden md:block">{social.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start md:col-span-2">
                    <h6 className="mb-5 font-semibold">Contacts</h6>
                    <div className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-5">
                        {CONTACTS.map((social) => (
                            <div
                                key={social.title?.toLowerCase()}
                                className="flex items-center gap-x-3"
                            >
                                <div className="bg-white rounded-full h-10 w-10 hidden md:block"></div>
                                <span className="text-sm md:text-base">{social.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
