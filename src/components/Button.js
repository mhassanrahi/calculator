import React from 'react'

export const Button = ({
    onClick,
    value,
    className
}) =>
(
    <button
        onClick={onClick}
        className={className}
    >
        {value}
    </button>
)
