"use client";

import React, { useState } from "react";

export default function TopNavigation() {
    const [visible, setVisible] = useState();

    return (
        <nav className=" absolute top-0 left-0 right-0">
            <div className="flex justify-between w-full max-w-screen-xl mx-auto p-5">
                <h1 className="font-black text-xl">JMS.</h1>

                <div className="relative">
                    <div className="relative flex flex-col gap-y-2 items-end">
                        <div className="w-10 h-0.5 bg-black"></div>
                        <div className="w-7 h-0.5 bg-black"></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
