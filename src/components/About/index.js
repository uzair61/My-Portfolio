import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faGithub, faHtml5, faJava, faJs, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I'm very ambitious Back-end Developer looking for a role in established
                    IT company with the opportunity to work with the latest technologies on
                    challenging and diverse projects.</p>
                <p>I am well-versed in Java programming and dedicated
                    to embracing cloud-native architectures.</p>
                <p>Graduate with a passion for leveraging innovative technologies to create
                    seamless and scalable solutions.</p>
                <p>Ready to contribute fresh
                    perspectives and a strong work ethic to a dynamic development team.</p>
            </div>

            <div className='stage-cube-cont'>
               <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faJava} color="#5382a1" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faAws} color="#fff" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faGithub} color="#000000"/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                </div> 
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About