import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/images/DarkSnake.png' // Adjust the path to your logo image

import './index.scss'

function ProjectBedrock() {
  const title = 'Project Bedrock'
  const titleLetters = Array.from(title)

  function goToNextProject() {
    window.location.href = '/portfolio/projectstatic'
  }

  function goToPreviousProject() {
    window.location.href = '/portfolio/projecttranslate'
  }

  const images1 = [
    '/images/amazonbedrock.png',
    '/images/CelsiusToFahrenheitCall.png',
    '/images/FibonacciSequenceCall.png',
    '/images/TheGiftOfTheMagiCall.png',
    '/images/DarkAmazonForestCall.png',
    '/images/ADarkPythonLogoCall.png',
  ]

  const images2 = [
    '/images/ProjectBedrockArch.jpg',
    '/images/CelsiusToFahrenheit.png',
    '/images/FibonacciSequence.png',
    '/images/TheGiftOfTheMagiSummary.png',
    '/images/DarkAmazonForest.png',
    '/images/ADarkPythonLogo.png',
  ]

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0)
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0)
  const [showPopup1, setShowPopup1] = useState(true)
  const [showPopup2, setShowPopup2] = useState(true)
  useEffect(() => {
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

    const popupTimer1 = setTimeout(() => {
      setShowPopup1(false)
    }, 15000)

    const popupTimer2 = setTimeout(() => {
      setShowPopup2(false)
    }, 15000)

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
    <div className="container projectbedrock-page">
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
            alt="AWS Architecture Visualization"
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
            Project Bedrock is combining Amazon Bedrock, AWS Lambda, API
            Gateway, and Amazon S3 to provide a range of services based on
            inputs through API calls in Postman. It features the generation of
            Python code from prompts, the ability to summarize text files, and
            the creation of PNG images in response to my descriptions.
          </p>

          <p className="container-text">
            The Fourth set of images takes a short story "The Gift Of The Magi"
            by O. Henry and returns the summary of the short story.
          </p>
        </div>
        <div className="text-container">
          <h2 className="container-title">Architecture</h2>
          <div className="container-text">
            <li>The process begins with an API call made from Postman.</li>
            <li>
              The API call from Postman is routed through the Amazon API
              Gateway. The API Gateway acts as an entry point, managing and
              directing incoming API calls.
            </li>
            <li>
              After passing through the API Gateway, the request reaches AWS
              Lambda. There are three Lambda functions, each performing a
              distinct role. All three Lambda functions are capable of accessing
              the Amazon Bedrock service.
            </li>
            <li>
              Amazon Bedrock receives data from the Lambda functions based on
              the prompts provided in the initial API call. Bedrock processes
              this data and returns the result.
            </li>
            <li>
              Upon receiving the processed data from Bedrock, the Lambda
              functions then proceed to save the data into an Amazon S3 bucket.
              The S3 bucket is used for storing the output from the Lambda
              functions, which is the data processed by Bedrock.
            </li>
            <li>
              In the specified S3 bucket, I can then download the returned data
              which you see on display.
            </li>
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

export default ProjectBedrock
