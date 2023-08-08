import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const nameArray = [' ', 'M', 'u', 'b', 'a', 'r', 'i', 's']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
   
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            /> */}
          </h1>
          <h2>Data Science / Data Analysis / Machine Learning</h2>
          <div role="link" id='sdd'
        onClick={() => openInNewTab("https://drive.google.com/file/d/1qYlDPLcn45flFeOseuTX8gLBDs7SXW13/view?usp=sharing")} className="flat-button">
            RESUME
          </div>
        </div>
        {/* <Logo /> */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
