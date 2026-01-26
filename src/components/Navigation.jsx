import React from 'react';
import './Navigation.css';

const Navigation = () => {
    const navItems = [
        { icon: 'ri-home-line', id: 'home', label: 'Home' },
        { icon: 'ri-user-line', id: 'about', label: 'About' },
        { icon: 'ri-briefcase-line', id: 'experience', label: 'Experience' },
        // { icon: 'ri-stack-line', id: 'projects', label: 'Projects' },
        { icon: 'ri-tools-line', id: 'skills', label: 'Skills' },
        { icon: 'ri-mail-line', id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className="navigation">
            <ul className="nav-list">
                {navItems.map((item) => (
                    <li key={item.id} className="nav-item">
                        <a href={`#${item.id}`} className="nav-link" aria-label={item.label}>
                            <i className={item.icon}></i>
                            <span className="tooltip">{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
