'use client'
import React, { HTMLAttributes } from 'react';
import './headerlink.css';

interface HeaderlinkProps extends HTMLAttributes<HTMLElement> {
    URL?: string;
    LinkName?: string;
}

export const Headerlink = ({ URL, LinkName }: HeaderlinkProps) => (
    <>
        {LinkName && (
            <header>
                <a className='nav-link' href={URL}>{LinkName}</a>
            </header>
        )}
    </> 
);
    

Headerlink.displayName = 'Headerlink'
