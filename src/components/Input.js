import React from "react";
import classNames from "classnames";

function InputWrapper({ id, label, children, className, labelClassName }) {
    return (
        <label
            htmlFor={id}
            className={classNames("flex flex-col", className)}
        >
            <span className={classNames("mb-1 font-medium", labelClassName)}>{label}</span>
            {children}
        </label>
    );
}

export function Input({ id, label, className, labelClassName, rootClassName, ...props }) {
    return (
        <InputWrapper
            id={id}
            label={label}
            className={className}
            labelClassName={labelClassName}
        >
            <input
                id={id}
                className="bg-white border-black px-5 py-3 outline-none"
                {...props}
            />
        </InputWrapper>
    );
}

export function TextArea({ id, label, className, labelClassName, inputClassName, ...props }) {
    return (
        <InputWrapper
            id={id}
            label={label}
            className={className}
            labelClassName={labelClassName}
        >
            <textarea
                id={id}
                className="bg-white border-black px-5 py-3 outline-none"
                {...props}
            />
        </InputWrapper>
    );
}
