import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
    container = true,
    className,
    children,
    ...props
}) => {
    return (
        <section
            className={cn(
                "py-16 md:py-24",
                className
            )}
            {...props}
        >
            {container ? (
                <div className="container mx-auto px-4 md:px-6">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};

export default Section;
