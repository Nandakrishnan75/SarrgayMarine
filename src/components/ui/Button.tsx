import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps & HTMLMotionProps<"button">>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const variants = {
            primary: 'bg-navy text-white hover:bg-navy-light font-bold border border-white/10 shadow-md hover:shadow-lg',
            secondary: 'bg-slate-100 text-navy hover:bg-slate-200 font-bold border border-slate-200',
            outline: 'border-2 border-navy/30 text-navy hover:bg-navy hover:text-white backdrop-blur-sm',
            ghost: 'text-muted-foreground hover:text-navy hover:bg-slate-100',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    'inline-flex items-center justify-center rounded-none transition-all duration-500 cursor-pointer',
                    'uppercase tracking-wider font-display',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';
