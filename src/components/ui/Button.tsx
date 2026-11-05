import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'outline-white' | 'white' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps & HTMLMotionProps<"button">>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const variants = {
            primary: 'bg-navy text-white hover:bg-navy-light border border-white/10 shadow-lg shadow-navy/20 hover:border-white/20',
            secondary: 'bg-slate-100 text-navy hover:bg-slate-200 border border-slate-200 shadow-sm',
            outline: 'border-2 border-navy/30 bg-transparent text-navy hover:bg-navy hover:text-white backdrop-blur-sm',
            'outline-white': 'border border-white/30 bg-white/5 text-white hover:bg-white hover:text-navy backdrop-blur-md',
            white: 'bg-white text-navy hover:bg-slate-100 shadow-xl border-none',
            ghost: 'text-muted-foreground hover:text-navy hover:bg-slate-100',
        };

        const sizes = {
            sm: 'px-4 py-2 text-xs',
            md: 'px-6 py-3 text-sm',
            lg: 'px-8 py-4 text-base',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className={cn(
                    'inline-flex items-center justify-center rounded-none transition-all duration-300 cursor-pointer font-heading font-semibold tracking-wider uppercase',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
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
