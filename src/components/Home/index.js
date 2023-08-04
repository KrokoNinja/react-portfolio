import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'L', 'e', 'n', 'n', 'e', 'r', 't', ',']
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  const countryArray = [
    'f',
    'r',
    'o',
    'm',
    ' ',
    'G',
    'e',
    'r',
    'm',
    'a',
    'n',
    'y',
    '.',
  ]

  //TODO Look up how he made the letter animation to continue after ending the hover
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={countryArray}
            idx={42}
          />
        </h1>
        <h2>Student / learning Frontend</h2>
        <h3>
          "If you quit once it becomes a habit. Never quit!" <br />
          <span>- Michael Jordan</span>
        </h3>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
