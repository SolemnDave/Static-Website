import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Certificate from './components/Certificate'
import ProjectStatic from './components/ProjectStatic'
import ProjectBedrock from './components/ProjectBedrock'
import ProjectTranslate from './components/ProjectTranslate'
import ProjectBlog from './components/ProjectBlog'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/projectstatic" element={<ProjectStatic />} />
          <Route path="portfolio/projectbedrock" element={<ProjectBedrock />} />
          <Route
            path="portfolio/projecttranslate"
            element={<ProjectTranslate />}
          />{' '}
          <Route path="portfolio/projectblog" element={<ProjectBlog />} />
          <Route path="certificate" element={<Certificate />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
