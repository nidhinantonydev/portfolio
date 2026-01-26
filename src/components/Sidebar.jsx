import React from 'react';
import './Sidebar.css';
import profileImg from '../assets/images/profile.jpg';
import cvFile from '../assets/Nidhin_Seban_Antony.pdf';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-card">
        <div className="header">
          <h1 className="name">Nidhin</h1>
          <span className="role">Full Stack Developer &<br />Vibe Coder</span>
        </div>

        <div className="profile-img">
          <img src={profileImg} alt="Nidhin Seban Antony" />
        </div>

        <div className="info">
          <h1 className="name">Nidhin Seban Antony</h1>
          <p className="email">nidhinsebanantony@gmail.com</p>
          <p className="email">+1(437)679-0059</p>
          <p className="location">Base in Toronto, ON</p>
        </div>

        <div className="footer">
          <p className="copyright">© 2026 Nidhin. All Rights Reserved</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/nidhin-seban-antony-61785314b/" target="_blank" rel="noreferrer">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://github.com/nidhinantonydev" target="_blank" rel="noreferrer">
              <i className="ri-github-fill"></i>
            </a>
          </div>
        </div>

        <a href={cvFile} target="_blank" rel="noreferrer" className="hire-btn">
          <i className="ri-download-line"></i> GET MY CV
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
