import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <main className="main-content">
            {/* SECTION: HOME/HERO */}
            <section id="home" className="section hero">
                <div className="section-label">
                    <i className="ri-home-line"></i> INTRODUCE
                </div>
                <h2 className="hero-title">
                    Say Hi from <span className="highlight">Nidhin</span>,<br />
                    Full Stack Developer and Vibe Coder
                </h2>
                <p className="hero-subtitle">
                    I design and code beautifully simple things and I love what I do. Just simple like that!
                </p>

                {/* <div className="projects-indicator">
                    <div className="spinning-text">
                        <svg viewBox="0 0 100 100" width="150" height="150">
                            <defs>
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text>
                                <textPath xlinkHref="#circlePath">
                                    MY PROJECTS • MY PROJECTS • MY PROJECTS •
                                </textPath>
                            </text>
                        </svg>
                        <i className="ri-arrow-down-line center-arrow"></i>
                    </div>
                </div> */}

                <div className="stats">
                    <div className="stat-item">
                        <span className="number">3+</span>
                        <span className="label">YEARS OF<br />EXPERIENCE</span>
                    </div>
                    <div className="stat-item">
                        <span className="number">10+</span>
                        <span className="label">PROJECTS<br />COMPLETED</span>
                    </div>
                </div>
            </section>

            {/* SECTION: ABOUT */}
            <section id="about" className="section about">
                <div className="section-label">
                    <i className="ri-user-line"></i> ABOUT
                </div>
                <h3 className="section-title">
                    I turn complex challenges into <span className="highlight">simple, high-performing</span> solutions.
                </h3>
                <p className="description">
                    I’m a passionate Software Developer with over 3 years of experience building and deploying scalable web applications using React.js, Node.js, and modern cloud technologies.
                    <br /><br />
                    Skilled across the full stack, I work with technologies like JavaScript, TypeScript, React, Redux, Node.js, Express.js, MongoDB, and Firebase, and leverage AWS, Docker, and Kubernetes for cloud deployment and CI/CD automation. I’m driven by continuous learning, clean code, and building applications that scale seamlessly in the cloud.
                </p>
            </section>

            {/* SECTION: EXPERIENCE */}
            <section id="experience" className="section experience">
                <div className="section-label">
                    <i className="ri-briefcase-line"></i> EXPERIENCE
                </div>
                <h3 className="section-title">
                    Education & <span className="highlight">Experience</span>
                </h3>

                <div className="timeline">
                    <div className="timeline-item">
                        <span className="date">Jan 2022 - Sept 2023</span>
                        <h4 className="title">React Developer</h4>
                        <span className="company">Zartek Technologies</span>
                        <ul className="details">
                            <li>Crafted entire web apps using React & deployed to cloud.</li>
                            <li>Collaborated with client relationship managers.</li>
                            <li>Mastered cloud deployments (Docker & Kubernetes).</li>
                        </ul>
                    </div>

                    <div className="timeline-item">
                        <span className="date">Dec 2020 - Dec 2021</span>
                        <h4 className="title">Full Stack Developer</h4>
                        <span className="company">DAT TECH LAB</span>
                        <ul className="details">
                            <li>Created reusable React components & RESTful APIs.</li>
                            <li>Recognized in the SDLC for project management.</li>
                            <li>Mentored junior developers.</li>
                        </ul>
                    </div>

                    <div className="timeline-item">
                        <span className="date">Aug 2019 - Nov 2020</span>
                        <h4 className="title">Junior Software Developer</h4>
                        <span className="company">Agilecrew</span>
                        <ul className="details">
                            <li>Collaborated on React applications and bug fixes.</li>
                            <li>Focused on technical writing & documentation.</li>
                            <li>Embraced agile development methodologies.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION: PROJECTS */}
            {/* <section id="projects" className="section projects">
                <div className="section-label">
                    <i className="ri-stack-line"></i> PROJECTS
                </div>
                <h3 className="section-title">
                    Featured <span className="highlight">Projects</span>
                </h3>

                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-img">
                            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop" alt="Tonico Smiles" />
                        </div>
                        <div className="project-info">
                            <h4 className="title">Tonico Smiles</h4>
                            <p>E-commerce platform for groceries.</p>
                            <div className="tags">
                                <span>React.js</span> <span>Redux</span> <span>Firebase</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-img">
                            <img src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=600&auto=format&fit=crop" alt="Shopio" />
                        </div>
                        <div className="project-info">
                            <h4 className="title">Shopio</h4>
                            <p>Inventory management application with forecasting.</p>
                            <div className="tags">
                                <span>Node.js</span> <span>React</span> <span>MUI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* SECTION: SKILLS */}
            <section id="skills" className="section skills">
                <div className="section-label">
                    <i className="ri-tools-line"></i> SKILLS
                </div>
                <h3 className="section-title">
                    Tools <span className="highlight">of My Expertise</span>
                </h3>

                <div className="skills-grid">
                    {[
                        { name: 'React', icon: 'ri-reactjs-line' },
                        { name: 'Node.js', icon: 'ri-nodejs-line' },
                        { name: 'JavaScript', icon: 'ri-javascript-line' },
                        { name: 'TypeScript', icon: 'ri-code-s-slash-line' },
                        { name: 'Docker', icon: <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" style={{ marginTop: '15px' }} viewBox="0 0 16 16"><path fill="none" stroke="#20c77a" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5H11l.75-.5a5.35 5.35 0 0 1 0-3.5c1 .6 1 1.88 1.74 2c.77-.09 1.23.01 2 .52c0 0-.97 1.77-2.5 1.98c-1.93 3.65-4.5 5.5-6.98 5.5C0 14.5.5 8.5.5 8.5m1 0v-2m0 0h8m-6 2v-4m0 0h4m-2-2h2m-2 6v-6m2 6v-6m2 6v-2" stroke-width="1" /></svg> },
                        { name: 'AWS', icon: 'ri-cloud-line' },
                        { name: 'Firebase', icon: 'ri-fire-line' },
                        { name: 'MongoDB', icon: 'ri-database-2-line' }
                    ].map(skill => (
                        <div key={skill.name} className="skill-item">
                            {typeof skill.icon === 'string' ? (
                                <i className={skill.icon}></i>
                            ) : (
                                skill.icon
                            )}
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION: CONTACT */}
            <section id="contact" className="section contact">
                <div className="section-label">
                    <i className="ri-mail-line"></i> CONTACT
                </div>
                <h3 className="section-title">
                    Let's Work <span className="highlight">Together!</span>
                </h3>

                <h4 className="contact-email">nidhinsebanantony@gmail.com</h4>

                <div className="contact-info-grid">
                    <div className="info-item">
                        <span className="label">LOCATION</span>
                        <p>Toronto, ON, Canada</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;
