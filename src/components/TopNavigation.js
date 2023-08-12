"use client";

import Link from "next/link";
import React, { useState } from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Button";
import classNames from "classnames";
import { usePathname } from "next/navigation";

function BurgerNav() {
    return (
        <div className="relative">
            <div className="relative flex flex-col gap-y-2 items-end">
                <div className="w-10 h-0.5 bg-black"></div>
                <div className="w-7 h-0.5 bg-black"></div>
            </div>
        </div>
    );
}

function NavLink({ className, children, href = "", ...props }) {
    const currentRoute = usePathname();
    const rootClassName = classNames(
        "px-5 py-3 rounded-lg hover:text-primary transition-all duration-300 font-semibold",
        {
            "text-primary hover:!text-primary-400": currentRoute === href,
        }
    );

    return (
        <Link
            className={rootClassName}
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
}

export default function TopNavigation() {
    const [visible, setVisible] = useState();

    return (
        <nav className=" absolute top-0 left-0 right-0">
            <div className="flex w-full max-w-screen-xl mx-auto p-5 gap-x-10">
                <Link
                    href="/"
                    className="font-black text-xl mr-auto"
                >
                    JMS.
                </Link>

                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <PrimaryButton>Contact</PrimaryButton>
            </div>
        </nav>
    );
}
