import React,{useState} from "react";
import { FooterContainer } from "../../styles/FooterStyles";
import emailjs from 'emailjs-com';

const userMessage = {
    assunto: '',
    name: '',
    email: '',
    message: '',
  }

export function Footer(){
  const [message, setMessage] = useState(userMessage);

  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
          serviceID, 
          templateID, 
          e.target, 
          publicKey,
    )
    .then((result) => {
        console.log(result.text);
      }, (error) => {
      console.log(error.text);
      });

      e.target.reset();
    }

  return(
    <FooterContainer id="contatos">
      <h1>Contato</h1>
      <div>
              <form onSubmit={sendEmail} id="form">
                        <label for="">Seu Nome <span>*</span></label>
                        <input type="text" name="name" ></input>
                        <label for="">Seu Email <span>*</span></label>
                        <input type="email" name="email" ></input><span></span>
                        <label for="">Assunto <span>*</span></label>
                        <input type="text" name="assunto" ></input>
                        <label for="">Sua Mensagem <span>*</span></label>
                        <textarea name="message" ></textarea>
                        <input type="submit" value="Enviar a Mensagem"></input>
          </form>
      </div>

    </FooterContainer>
  )
}