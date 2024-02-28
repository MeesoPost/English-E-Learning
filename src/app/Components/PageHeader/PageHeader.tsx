import React, { ReactNode } from 'react';
import './PageHeader.css';

interface PageHeaderProps {
    title: string;
    links: { label: string; url: string }[];
    children?: ReactNode;
    className?: string; // Optional className for the header
    linkClassName?: string; // Optional className for links
    buttonClassName?: string; // Optional className for buttons
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, links, children, className, linkClassName }) => {
    return (
        <header className={`page-header ${className || ''}`}> 
            <h1>{title}</h1>
            <nav className='nav' >
                {links.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.url}
                        className={linkClassName} // Apply to links
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
            {children}
        </header>
    );
};

export default PageHeader;
