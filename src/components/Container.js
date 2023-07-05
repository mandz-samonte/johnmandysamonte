import classNames from "classnames";
import React from "react";

export default function Container({ children, className }) {
    return <section className={classNames("w-full max-w-screen-xl mx-auto", className)}>{children}</section>;
}
