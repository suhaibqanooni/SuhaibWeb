import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>If you've seen my potential or want to talk to me, don't hesitate to send me a message</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:suhaibqanooni2000@gmail.com">suhaibqanooni2000@gmail.com</a>
        </div>
        <div>
          <a><img src={phoneIcon} alt="Email" /></a>
          <a href="tel:+93786702440">+93786702440</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}