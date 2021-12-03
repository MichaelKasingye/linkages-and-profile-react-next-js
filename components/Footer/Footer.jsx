// import React from "react";
// import styles from "./Footer.module.css";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../assets/images/outbox.png";
// import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
// function Footer() {
//   return (
//     <div className={styles.footer}>
//       <h2>Join the community</h2>
//       <div className={styles.flex1}>
//         <button className={styles.button1}>RECEIVE NEWS</button>
//         <button className={styles.button2}>JOIN HERE</button>
//       </div>
//       <div className={styles.flex2}>
//         <div>
//           <h4>NAVIGATION</h4>
//           <li>
//             <Link href="#home">Home</Link>
//           </li>
//           <li>
//             <Link href="#about">About us</Link>
//           </li>

//           <li>
//             <Link href="#home">Events</Link>
//           </li>
//           <li>
//             <Link href="#contact">contact us</Link>
//           </li>
//         </div>
//         <div>
//           <h4>WHAT WE DO</h4>
//           <li>
//             <Link href="#home">Lorem</Link>
//           </li>
//           <li>
//             <Link href="#about">Lorem</Link>
//           </li>
//           <li>
//             <Link href="#about">Lorem</Link>
//           </li>
//         </div>
//         <div>
//           <h4>LEGAL</h4>
//           <li>
//             <Link href="#home">General info</Link>
//           </li>
//           <li>
//             <Link href="#about">Privacy policy</Link>
//           </li>
//         </div>
//         <div>
//           <h4>TALK TO US</h4>
//           <li>
//             <Link href="#home">General info</Link>
//           </li>
//           <li>
//             <Link href="#about">Privacy policy</Link>
//           </li>
//         </div>
//       </div>
//       <div className={styles.copysection}>
//         <Link href="/" className={styles.logo}>
//           <a>
//             <Image src={logo} alt="logo" width={100} height={40} />
//           </a>
//         </Link>
//         <div>
//           <p style={{ fontSize: "14px" }}>
//             © 2021 OutBox EDU. All Rights Reserved.{" "}
//           </p>
//         </div>
//         <div className={styles.social}>
//           <a href="https://facebook.com/">
//             <FiFacebook />
//           </a>
//           <a href="https://linkedin.com/">
//             <FiLinkedin />
//           </a>
//           <a href="https://linkedin.com/">
//             <FiTwitter />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Footer;

import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
// import Logo from "../assets/logo.png";
import { FaGithub, FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  const links = [
    { name: 'Enrollment', path: '/' },
    { name: 'Linkages', path: '/linkages' },
    { name: 'What We Do', path: '/works' },
    { name: 'Events', path: '/events' },
    { name: 'Learning', path: '/learning' },
  ]

  return (
    <footer className={`${styles.footerblue} text-center text-white`}>
      <div className='container p-4'>
        <section className='mb-4'>
          <h3 className={`${styles.headers} justify-content-center`}>Join the community</h3>
        </section>
        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <button type='button' className='btn btn-outline-light mb-4 mx-4'>
                  Receive News
                </button>
                <Link href="https://www.facebook.com/OutboxEdu" passHref>
                 <a target="_blank"> 
                  <button type='button' className={`${styles.joinbutton} btn btn-light mb-4`}>
                    Join Here
                  </button>
                  </a> 
                </Link>
              </div>
            </div>
          </form>
        </section>
        <section className='mb-4'></section>
        <section className='mb-4'>
          <div className='row' style={{ justifyContent: 'space-between' }}>
            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
              <h5 className={`${styles.headers} text-uppercase`}>Navigation</h5>

              <ul className='list-unstyled mb-0'>
                {links.map((url, idx) => (
                  <li className='mb-2' key={idx}>
                    <Link href={url.path} passHref>
                        <a className={`${styles.footerlink}`} >
                          {url.name}
                        </a>
                    </Link>    
                  </li>
                ))}
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
              <h5 className={`${styles.headers} text-uppercase`}>Legal</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className={`${styles.footerlink}`}>
                    General Info
                  </a>
                </li>
                <li>
                  <a href='#!' className={`${styles.footerlink} `}>
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href='#!' className={`${styles.footerlink}`}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
              <h5 className={`${styles.headers} text-uppercase`}>Talk to us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link href="mailto:admissionsedu@outbox.co.ug" passHref>
                      <a className={`${styles.footerlink}`} style={{color:"#fff"}}>
                        admissionsedu@outbox.co.ug                  
                      </a>
                  </Link>    
                </li>
                <li>
                    <Link href='https://facebook.com/OutboxEdu' passHref>
                        <a target="_blank" className={`${styles.footerlink}`}>
                          Facebook
                        </a>
                    </Link>    
                </li>
                <li>
                  <Link href='https://linkedin.com/company/outbox-uganda' passHref>
                      <a target="_blank" className={`${styles.footerlink}`}>
                        LinkedIn
                      </a>
                  </Link>    
                </li>
                <li>
                  <Link href='https://twitter.com/EduOutbox' passHref>
                    <a target="_blank" className={`${styles.footerlink}`}>
                      Twitter
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className='row d-flex align-items-center justify-content-evenly'>
        <div className='col-auto'>
          <Image src='/images/outbox.png' alt='outbox edu logo' width='200px' height='65px' />
        </div>
        <div
          className='col-md-5 col-12 text-center p-3'
          style={{ color: 'rgba(255, 255, 255, 0.8)' }}
        >
          &copy; {new Date().getFullYear()} OutBox EDU. All Rights Reserved
        </div>
        <div className={`${styles.socialicons} col-auto`}>
          <Link href='https://facebook.com/OutboxEdu' passHref>
            <a  target="_blank" >
              <FaFacebookF size='2em' strokeWidth='1' fill="white" />
            </a>          
          </Link>

          <Link href='https://github.com/outboxafrica' passHref>
              <a  target="_blank" >
                <FaGithub size='2em' strokeWidth='1' fill="white" />
              </a>
          </Link>

          <Link href='https://linkedin.com/company/outbox-uganda' passHref>
            <a target="_blank" >
              <FaLinkedinIn size='2em' strokeWidth='1' fill="white" />
            </a>
          </Link>

          <Link href='https://twitter.com/EduOutbox' passHref>
              <a  target="_blank" >
                <FaTwitter size='2em' strokeWidth='1' fill="white" />
              </a>
          </Link>

          <Link href='https://www.youtube.com/channel/UCKNuI2jIWJdSB4Rl9iORMVw' passHref>
              <a  target="_blank" >
                <FaYoutube size='2em' strokeWidth='1' fill="white" />
              </a>
          </Link>    
        </div>
      </div>
    </footer>
  )
}

export default Footer

