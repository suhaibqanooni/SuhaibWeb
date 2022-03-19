import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import suhaib from "../../assets/suhaib.png";
import { NavHashLink } from "react-router-hash-link"
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
        <p>EXPERIENCE ADVANCING BEYOND CREATIVITY! 👋</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1 style={{fontSize: 38, fontFamily: "cursive", fontWeight: 10}}>SUHAIB QANOONI</h1> & Co.
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
        <p className="small-resume">I'm a computer technician with a focus on web development with JavaScript.</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.8*1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contato" className="button">Contact</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          {/* <img src={Illustration} alt="Ilustração"/> */}
          <img src={suhaib} alt="Suhaib's pic"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}