import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Logo1 from '../../assets/images/logo1.png'
// import Logo2 from '../../assets/images/logo2.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
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
          Hi there! My name is Mubariz, and I'm pursuing Master of Science in Computational Data Science at the University of California Riverside with a keen interest in deep learning, natural language processing (NLP), and computer vision.
          </p>
          <p align="LEFT">
          As a budding data scientist, I'm passionate about leveraging the power of machine learning to make a meaningful impact in the field of genomics, technology, criminal justice, and media/entertainment. With a strong foundation in programming, statistical analysis, and data modeling, I'm excited to apply my skills to tackle real-world challenges using advanced analytics and cutting-edge technologies.
          </p>
          <p>
          Throughout my academic journey, I've gained hands-on experience in developing and implementing machine learning algorithms, conducting data analysis, and building predictive models using Python, TensorFlow, and other popular tools. I'm also skilled in NLP techniques, such as sentiment analysis and text classification, and have worked on computer vision projects, including image recognition and object detection.
          </p>
          <p>
          I'm currently seeking opportunities to apply my data science skills and domain knowledge, and I'm open to internships, and research collaborations. If you're interested in leveraging the power of machine learning and data science, I'd love to connect and explore potential collaborations.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#ffde57" />
            </div>
            <div className="face2">
              {/* <FontAwesomeIcon icon={faHtml5} color="#F06529" /> */}
              <img
        className="solid-logo"
        src={Logo1}
        alt="JavaScript,  Developer"
      /> 
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
