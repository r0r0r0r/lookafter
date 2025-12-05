import React from 'react';
import { Hexagon, Sun, Moon } from 'lucide-react';

interface TopNavProps {
    isScrollingDown: boolean;
    setIsHovering: (isHovering: boolean) => void;
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    time: Date;
}

const TopNav: React.FC<TopNavProps> = ({
    isScrollingDown,
    setIsHovering,
    darkMode,
    setDarkMode,
    time,
}) => {

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-[60] h-16 md:h-20 border-b border-black/5 dark:border-white/10 bg-void/80 dark:bg-graphite/80 backdrop-blur-md flex items-center justify-between px-4 md:px-12 transition-transform duration-500 ease-in-out ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'}`}
        >
            <div className="flex items-center">
                {/* Logo */}
                <div className="flex items-center gap-2" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                    <div className="w-8 h-8 bg-graphite dark:bg-void flex items-center justify-center text-acid dark:text-graphite">
                        <Hexagon size={16} strokeWidth={3} />
                    </div>
                    <span className="font-serif text-lg md:text-xl font-bold tracking-tight">LookAfter.</span>
                </div>
                {/* Divider */}
                <div className="h-6 w-px bg-black/10 dark:bg-white/10 mx-6 hidden md:block"></div>
                {/* OS Badge */}
                <span className="font-mono text-xs text-graphite/40 dark:text-void/40 uppercase tracking-widest hidden md:block">AGENCY_OS v1.0</span>
            </div>

            <div className="flex items-center gap-4">
                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors cursor-none text-graphite dark:text-void"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>

                {/* Right Status */}
                <div className="font-mono text-[10px] md:text-xs text-graphite dark:text-void uppercase tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="hidden md:inline">[MUMBAI, IN • {formatTime(time)}]</span>
                    <span className="md:hidden">[{formatTime(time)}]</span>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
