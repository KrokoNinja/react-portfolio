import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'

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
    </div>
  )
}

export default About
