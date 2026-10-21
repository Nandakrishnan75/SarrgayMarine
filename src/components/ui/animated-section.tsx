import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    once?: boolean;
}

const getVariants = (direction: string): Variants => {
    const directions = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
        none: {},
    };

    return {
        hidden: {
            opacity: 0,
            ...directions[direction as keyof typeof directions],
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };
};

export const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 1.0,
    once = true,
}: AnimatedSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants(direction)}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export const StaggerContainer = ({
    children,
    className = "",
    staggerDelay = 0.2,
    once = true,
}: StaggerContainerProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.2,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export const StaggerItem = ({
    children,
    className = "",
    direction = "up",
}: StaggerItemProps) => {
    return (
        <motion.div
            variants={getVariants(direction)}
            transition={{
                duration: 1.0,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Text reveal animation
interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export const TextReveal = ({ children, className = "", delay = 0 }: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <span ref={ref} className={`overflow-hidden block ${className}`}>
            <motion.span
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{
                    duration: 1.2,
                    delay,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
            >
                {children}
            </motion.span>
        </span>
    );
};

// Parallax effect
interface ParallaxProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

export const Parallax = ({ children, className = "", speed = 0.5 }: ParallaxProps) => {
    return (
        <motion.div
            className={className}
            initial={{ y: 0 }}
            whileInView={{ y: speed * -50 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
        >
            {children}
        </motion.div>
    );
};
