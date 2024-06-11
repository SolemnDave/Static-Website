import React, { useState, useEffect } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import CCP from '../../assets/images/AWS-CCP.png'
import SOA from '../../assets/images/AWS-SOA.png'
import SYS from '../../assets/images/AWS-SYSOP.png'
import DOA from '../../assets/images/AWS-DOA.png'

const Certificate = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const Details = ({ cert, certdetail, link, children }) => {
    // Notice 'children' is added here
    return (
      <li>
        <h3>{cert}&nbsp;</h3>
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {certdetail}
          </a>
        </p>
        {children}
      </li>
    )
  }

  return (
    <>
      <div className="container certificate-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Certificates'.split('')}
            idx={15}
          />
        </h1>

        <div className="details-container relative flex flex-wrap">
          <Details link="https://www.credly.com/badges/72574f20-da2d-4510-839d-b14205e1daeb">
            <a
              href="https://www.credly.com/badges/72574f20-da2d-4510-839d-b14205e1daeb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CCP} alt="Certified Cloud Practitioner" />
            </a>
          </Details>
          <Details link="https://www.credly.com/badges/4ca3f857-10a1-4004-afaa-7f6b43b0962e">
            <a
              href="https://www.credly.com/badges/4ca3f857-10a1-4004-afaa-7f6b43b0962e"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={SOA} alt="Solutions Archietect" />
            </a>
          </Details>
          <Details link="https://www.credly.com/badges/1895df7e-807e-435e-8f63-b88e5254f985">
            <a
              href="https://www.credly.com/badges/1895df7e-807e-435e-8f63-b88e5254f985"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={SYS} alt="Solutions Archietect" />
            </a>
          </Details>
          <Details link="https://www.credly.com/badges/1895df7e-807e-435e-8f63-b88e5254f985">
            <a
              href="https://www.credly.com/badges/1895df7e-807e-435e-8f63-b88e5254f985"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={DOA} alt="Solutions Archietect" />
            </a>
          </Details>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Certificate
