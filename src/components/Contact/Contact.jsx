import Loader from 'react-loaders';
import './contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'


function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    const txt = 'Contact Me!'
    const arr = txt.split('')
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l9xfe29', 'template_svdbgq1', refForm.current, 'rm1xDcMJbQqCUIEBy').then(
            (result) => {
                console.log(result.text)
                alert('Message sent!')
                window.location.reload(true)
            }, (error) => {
                console.log(error)
                alert('failed to send, please try again')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={arr}
                            idx={15} />
                    </h1>
                    <p>
                        I'm on the search for roles where I can help pioneer new solutions and technologies
                        for your ongoing or future projects! However, feel free use the contact form below
                        to send over any requests or questions on personal projects as well.

                    </p>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}  >
                            <ul>
                                <li className='half'>
                                    <input type='text' name='user_name' placeholder='Name' required ></input>
                                </li>
                                <li className='half'>
                                    <input type='email' name='user_email' placeholder='Email' required ></input>
                                </li>
                                <li> <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='send' />
                                </li>
                            </ul>
                        </form>

                    </div>

                </div>
                <Loader type="eyemove" />
            </div>
        </>
    )
}

export default Contact;