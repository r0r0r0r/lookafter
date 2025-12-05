import { ReactNode } from 'react';

export interface Metric {
    label: string;
    value: string;
    desc: string;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
    fullDescription: string;
    metrics: Metric[];
}

export interface Project {
    id: number;
    name: string;
    type: string;
    focus: string;
    icon: ReactNode;
    color: string;
    image: string;
    link: string;
    fullDescription: string;
    metrics: Metric[];
}

export interface Country {
    name: string;
    dial: string;
    flag: string;
}

export interface TopNavProps {
    isScrollingDown: boolean;
    setIsHovering: (isHovering: boolean) => void;
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    time: Date;
}
