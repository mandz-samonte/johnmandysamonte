import React from "react";
import Link from "next/link";
import classNames from "classnames";

export function PrimaryButton({ className, children, ...props }) {
    const rootClassName = classNames(
        "bg-primary text-white hover:bg-primary-400 outline outline-4 outline-primary-200/0 hover:outline-primary-200",
        className
    );

    return (
        <Button
            className={rootClassName}
            {...props}
        >
            {children}
        </Button>
    );
}

export function SecondaryButton({ className, children, ...props }) {
    const rootClassName = classNames("bg-white text-primary hover:bg-primary hover:text-white", className);

    return (
        <Button
            className={rootClassName}
            {...props}
        >
            {children}
        </Button>
    );
}

export function TertiaryButton({ className, children, ...props }) {
    const rootClassName = classNames("text-primary hover:text-primary-400", className);

    return (
        <Button
            className={rootClassName}
            {...props}
        >
            {children}
        </Button>
    );
}

export default function Button({ to, href, className, children }) {
    const rootClassName = classNames(
        "px-8 py-3 rounded-lg font-semibold min-w-[8rem] transition-all duration-300 gap-x-2 flex items-center whitespace-nowrap",
        className
    );

    if (to)
        return (
            <Link
                href={to}
                className={rootClassName}
            >
                {children}
            </Link>
        );

    if (href)
        return (
            <a
                href={href}
                className={rootClassName}
            >
                {children}
            </a>
        );

    return <button className={rootClassName}>{children}</button>;
}
