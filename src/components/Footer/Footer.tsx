import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import twitter from "../../assets/twitter.png";
export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>S</span>
        <span>Qanooni</span>
      </a>
      <div>
        <p>
          suhiabqanooni copiright &copy 2022 <img src={reactIcon} alt="React" />
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://af.linkedin.com/in/suhaib-qanooni-1110b6165"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/suhaibqanooni"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/insta__suhaib/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://mobile.twitter.com/sqanooni"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Twitter"   />
        </a>
        <a
          href="https://www.youtube.com/channel/UClplmkrEgR6KNCdfLkesiqg"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="Youtube"   />
        </a>
      </div>
    </Container>
  )
}
