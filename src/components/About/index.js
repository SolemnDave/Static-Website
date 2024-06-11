import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import {
  faAws,
  faCss3,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer) // Cleanup the timer
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a dedicated Software engineer with a passion for crafting
            robust web solutions. With experience in both front-end and back-end
            development, I thrive on creating seamless user experiences.
          </p>
          <p>
            Utilizing HTML, CSS, and JavaScript, I craft responsive and dynamic
            user interfaces, while Python and JavaScript power the underlying
            functionality.
          </p>
          <p>
            My proficiency in Amazon Web Services enables me to architect and
            deploy scalable and secure cloud-based solutions to tackle complex
            challenges.
          </p>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>REST</li>
            <li>SQL</li>
          </ul>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#646464" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#1E3054" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
