import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer) // Cleanup the timer
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert('Please fill in all fields.')
      setIsLoading(false)
      return
    }

    const lambdaFunctionURL =
      'https://gbo88f4iu2.execute-api.us-east-1.amazonaws.com/prod/sendemail'

    try {
      const response = await fetch(lambdaFunctionURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()

      if (response.ok && data.message) {
        alert('Email sent successfully!')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        throw new Error(data.error || 'Email send failed')
      }
    } catch (error) {
      console.error('Error sending email', error)
      alert('Failed to send the email.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Feel free to reach out to me using the form below.</p>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {isLoading && <Loader type="pacman" />}
        <div className="info-map">
          David Reyes Jr,
          <br />
          Bronx, NY
          <br />
          <span>davidrjr94@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[40.8448, -73.8648]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.8448, -73.8648]}>
              <Popup>
                Map's on the prowl for SolemnDave, watch out, he's coded and
                loaded!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact
