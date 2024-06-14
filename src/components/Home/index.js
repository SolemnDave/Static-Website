import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['D', 'a', 'v', 'i', 'd']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  // Counter state
  const [counter, setCounter] = useState('...')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    async function updateCounter() {
      try {
        console.log('Fetching data from:', process.env.REACT_APP_API_URL)
        const response = await fetch(process.env.REACT_APP_API_URL)

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }

        const data = await response.json()
        console.log('Fetched data:', data)
        setCounter(data.views)
      } catch (error) {
        console.error('Error fetching view counter:', error)
        setCounter('Error')
      }
    }

    updateCounter()

    return () => clearTimeout(timer) // Cleanup the timer
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="background"></div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Hello,</span>
            <span className={'{letterClass} _13'}> </span>
            <br />
            <span className={letterClass}>I'm </span>
            <span className={'{letterClass} _14'}> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <span className={'{letterClass} _20'}> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Debugging The World, One line at a time.</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME{' '}
          </Link>{' '}
          <a
            href="/DavidsCloudResume.pdf"
            className="flat-button resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <div className="view-counter">Views: {counter}</div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
