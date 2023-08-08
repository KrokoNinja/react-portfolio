import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a self-taught Frontend Developer deeply passionate about crafting
          captivating web experiences. Knowing the fundamentals of HTML, CSS,
          and JavaScript, I like translating imaginative designs into seamless,
          user-friendly websites.
        </p>
        <p>
          Currently, I'm diving into React and Bootstrap, embracing the
          challenge of building dynamic web applications. I thrive on
          collaboration, constantly seeking opportunities to enhance my skills
          and stay updated with industry trends.
        </p>
        <p>
          Beyond coding, I play Darts and love to watch football in the
          'Westfalenstadion' of Borussia Dortmund together with my friends.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cube-spinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faBootstrap} color="#6905ff" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
