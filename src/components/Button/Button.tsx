import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'floating' | 'standard';
    tooltip?: string;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'standard',
    className = '',
    tooltip,
    children,
    ...props
}) => {
    return (
        <button
            className={`custom-button ${variant} ${className}`}
            data-tooltip={tooltip}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
