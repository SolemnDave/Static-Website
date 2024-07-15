import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/images/DarkSnake.png' // Adjust the path to your logo image

import './index.scss'

function ProjectTranslate() {
  const title = 'Project Translate'
  const titleLetters = Array.from(title)

  function goToNextProject() {
    window.location.href = '/portfolio/projectbedrock'
  }

  function goToPreviousProject() {
    window.location.href = '/portfolio/projectblog'
  }

  const images1 = ['/images/amazontranslate.png', '/images/translate1.png']

  const images2 = ['/images/ProjectTranslateArch.jpg', '/images/translate2.png']

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0)
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0)
  const [showPopup1, setShowPopup1] = useState(true) // Popup state
  const [showPopup2, setShowPopup2] = useState(true)
  useEffect(() => {
    // Image slideshow intervals
    const intervalId1 = setInterval(() => {
      setCurrentImageIndex1((prevIndex) =>
        prevIndex === images1.length - 1 ? 0 : prevIndex + 1
      )
    }, 45000)

    const intervalId2 = setInterval(() => {
      setCurrentImageIndex2((prevIndex) =>
        prevIndex === images2.length - 1 ? 0 : prevIndex + 1
      )
    }, 45000)

    // Popup timeout
    const popupTimer1 = setTimeout(() => {
      setShowPopup1(false)
    }, 15000)

    const popupTimer2 = setTimeout(() => {
      setShowPopup2(false)
    }, 15000)

    // Cleanup function for intervals and timeout
    return () => {
      clearInterval(intervalId1)
      clearInterval(intervalId2)
      clearTimeout(popupTimer1)
      clearTimeout(popupTimer2)
    }
  }, [images1.length, images2.length])

  // Function to advance both image sets to the next image
  const goToNextImages = () => {
    setCurrentImageIndex1((prevIndex) =>
      prevIndex === images1.length - 1 ? 0 : prevIndex + 1
    )
    setCurrentImageIndex2((prevIndex) =>
      prevIndex === images2.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="container projecttranslate-page">
      {showPopup1 && (
        <div className="popup1">Images will change 45 seconds ! </div>
      )}
      {showPopup2 && (
        <div className="popup2">Press the logo to change images !</div>
      )}
      <h1 className="page-title">
        {titleLetters.map((letter, index) => (
          <span key={index} className={`letter letter-${index}`}>
            {letter !== ' ' ? letter : '\u00A0'}{' '}
            {/* Replace space with a non-breaking space */}
          </span>
        ))}
      </h1>
      <div className="image-containers-wrapper">
        <div className="content-container">
          <img
            src={images1[currentImageIndex1]}
            alt="AWS Architecture Visualization"
          />
        </div>
        <div className="content-container">
          <img
            src={images2[currentImageIndex2]}
            alt="Another AWS Architecture Visualization"
          />
        </div>
      </div>
      <button onClick={goToNextImages}>
        <img src={logoImage} alt="Next" />
      </button>
      <div className="text-containers-wrapper">
        <div className="text-container">
          <h2 className="container-title">Description</h2>
          <p className="container-text">
            This project is a web-based translation application hosted on GitHub
            Pages that interacts with a serverless backend on AWS. Users input
            text into the React frontend, which sends API requests to Amazon API
            Gateway. The requests are processed by an AWS Lambda function that
            interfaces with Amazon Translate to perform the translation, and the
            results are displayed back to the user in the web interface.
          </p>
          <p className="container-text">
            I plan on also integrating Amazon Polly to this demo project to
            provide speech to text servoce. The idea is that it will be able to
            read back the translated text to you.
          </p>
        </div>
        <div className="text-container">
          <h2 className="container-title">Architecture</h2>
          <div className="container-text">
            <li>
              The idea is, is that Users will be able to interact with the
              application through a user interface hosted on GitHub Pages. This
              is where my static React app resides, which users can access via a
              GitHub URL.
            </li>
            <li>
              When a user wants to translate text, they input their request into
              the UI. The React app then sends this data to the Amazon API
              Gateway via an API call. This is the entry point for the backend
              services and is responsible for routing the request to the
              appropriate AWS Lambda function.
            </li>
            <li>
              AWS Lambda processes the request. Once triggered by API Gateway,
              the Lambda function executes my application logic. In this case,
              it takes the input text and interacts with Amazon Translate to
              perform the translation.
            </li>
            <li>
              Amazon Translate is the AI service that performs the actual text
              translation. The Lambda function sends the text to Amazon
              Translate, which processes the request and returns the translated
              text.
            </li>
            <li>
              The translated text is then sent back through the chain: from
              Amazon Translate to the Lambda function, then back to the user's
              browser through API Gateway.
            </li>
            <li>
              The user's browser receives the translated text and displays it in
              the UI, completing the user's request.
            </li>
            {/* ... additional list items */}
          </div>
        </div>
        {/* <Loader type="pacman" /> */}
      </div>
      <button
        onClick={goToPreviousProject}
        className="previous-project-button"
      ></button>
      <button
        onClick={goToNextProject}
        className="next-project-button"
      ></button>
    </div>
  )
}

export default ProjectTranslate
