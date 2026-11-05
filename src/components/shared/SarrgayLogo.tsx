import React from 'react';

interface LogoProps {
    variant?: 'dark' | 'light' | 'auto';
    className?: string;
    showText?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const SarrgayLogo: React.FC<LogoProps> = ({
    variant = 'dark',
    className = '',
    showText = true,
    size = 'md',
}) => {
    const isDark = variant === 'dark';

    const iconSizes = {
        sm: 'h-8 w-8',
        md: 'h-11 w-11',
        lg: 'h-16 w-16',
    };

    const textSizes = {
        sm: {
            brand: 'text-base',
            tag: 'text-[8px] tracking-[0.25em]',
        },
        md: {
            brand: 'text-xl sm:text-2xl',
            tag: 'text-[10px] tracking-[0.28em]',
        },
        lg: {
            brand: 'text-2xl sm:text-3xl',
            tag: 'text-xs tracking-[0.3em]',
        },
    };

    return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
            {/* Vector Naval Engineering Crest */}
            <div className={`relative shrink-0 flex items-center justify-center ${iconSizes[size]}`}>
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                >
                    {/* Outer Hexagonal Shield / Navigational Bezel */}
                    <polygon
                        points="50,4 92,26 92,74 50,96 8,74 8,26"
                        stroke={isDark ? '#0A192F' : '#FFFFFF'}
                        strokeWidth="3"
                        strokeLinejoin="round"
                        className="opacity-20"
                    />

                    {/* Precision Navigational Axis Marks */}
                    <line
                        x1="50"
                        y1="10"
                        x2="50"
                        y2="20"
                        stroke={isDark ? '#0A192F' : '#FFFFFF'}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <line
                        x1="50"
                        y1="80"
                        x2="50"
                        y2="90"
                        stroke={isDark ? '#0A192F' : '#FFFFFF'}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />

                    {/* Left Hydrodynamic Wave / Wing */}
                    <path
                        d="M20 54 C 20 68, 34 78, 50 82 C 40 76, 32 68, 30 52 C 28 36, 42 26, 42 26 C 42 26, 20 38, 20 54 Z"
                        fill={isDark ? '#0A192F' : '#FFFFFF'}
                    />

                    {/* Right Forward-Thrust Wave / Stabilizer */}
                    <path
                        d="M80 46 C 80 32, 66 22, 50 18 C 60 24, 68 32, 70 48 C 72 64, 58 74, 58 74 C 58 74, 80 62, 80 46 Z"
                        fill={isDark ? '#1E293B' : '#E2E8F0'}
                    />

                    {/* Central Sharp Ship's Bow / Keel */}
                    <polygon
                        points="50,16 61,56 50,78 39,56"
                        fill={isDark ? '#0A192F' : '#FFFFFF'}
                    />

                    {/* Central Engineering Diamond / Compass Pivot */}
                    <polygon
                        points="50,38 56,50 50,62 44,50"
                        fill={isDark ? '#FFFFFF' : '#0A192F'}
                    />
                </svg>
            </div>

            {/* Typography Lockup */}
            {showText && (
                <div className="flex flex-col justify-center">
                    <span
                        className={`font-display font-extrabold leading-none tracking-tight transition-colors ${
                            textSizes[size].brand
                        } ${isDark ? 'text-navy' : 'text-white'}`}
                    >
                        SARRGAY
                    </span>
                    <div className="flex items-center gap-1.5 mt-1">
                        <span
                            className={`font-mono font-bold uppercase transition-colors ${
                                textSizes[size].tag
                            } ${isDark ? 'text-slate-500' : 'text-slate-300'}`}
                        >
                            MARINE
                        </span>
                        <span
                            className={`inline-block w-1 h-1 rounded-full ${
                                isDark ? 'bg-navy/40' : 'bg-white/50'
                            }`}
                        />
                        <span
                            className={`hidden sm:inline-block font-mono text-[9px] tracking-wider transition-colors ${
                                isDark ? 'text-slate-400' : 'text-slate-400'
                            }`}
                        >
                            TECHNICAL
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SarrgayLogo;

