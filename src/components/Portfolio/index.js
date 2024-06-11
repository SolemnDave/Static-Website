import React, { useState, useEffect } from 'react'
import './index.scss'
import { Link, Outlet } from 'react-router-dom'
import Loader from 'react-loaders'

const Portfolio = () => {
  const projects = [
    {
      title: 'Project Blog',
      imgSrc: '/images/ReactLogo.png',
      backImgSrc: '/images/ProjectBlog.png',
      alt: 'Health App',
      demoLink: '/portfolio/projectblog',
    },
    {
      title: 'Project Translate',
      imgSrc: '/images/ReactLogo.png',
      backImgSrc: '/images/projecttranslate.png',
      alt: 'Translation Service Interface',
      demoLink: '/portfolio/projecttranslate',
    },
    {
      title: 'Project Bedrock',
      imgSrc: '/images/ReactLogo.png',
      backImgSrc: '/images/projectbedrock.png',
      alt: 'Mining Operation Software',
      demoLink: '/portfolio/projectbedrock',
    },
    {
      title: 'Project Static',
      imgSrc: '/images/ReactLogo.png',
      backImgSrc: '/images/reactportfolio.png',
      alt: 'Health App',
      demoLink: '/portfolio/projectstatic',
    },
    {
      title: 'In Progression',
      imgSrc: '/images/ReactLogo.png',
      backImgSrc: '/images/WorkingOnIt.jpeg',
      alt: 'Ongoing Project',
    },
  ]

  const [flippingProject, setFlippingProject] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomProjectIndex = Math.floor(Math.random() * projects.length)
      setFlippingProject(randomProjectIndex)
    }, 4000)

    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <>
      <div className="container portfolio-page">
        <ul className="projects-grid">
          {projects.map((project, idx) => (
            <li key={idx} className="project-container">
              <div
                className={`project-flipper ${
                  flippingProject === idx ? 'flipping' : ''
                }`}
              >
                <div className="project-front">
                  <img src={project.imgSrc} alt={project.alt} />
                  <span>{idx + 1}</span>{' '}
                </div>
                <div className="project-back">
                  <img
                    src={project.backImgSrc}
                    alt={`Back of ${project.title}`}
                  />
                  <div className="back-content">
                    <h2>{project.title}</h2>
                    {project.demoLink && (
                      <Link to={project.demoLink}>
                        <button className="view-more-button">View More</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
