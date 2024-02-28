import React, { ReactNode } from 'react';
import './PageHeader.css';

interface PageHeaderProps {
    title: string;
    links: { label: string; url: string }[];
    children?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, links, children }) => {
    return (
        <header className='page-header'>
            <h1>{title}</h1>
            <nav className='nav' >
                {links.map((link, index) => (
                    <a key={index} href={link.url}>
                        {link.label}
                    </a>
                ))}
            </nav>
            {children}
        </header>
    );
};

export default PageHeader;