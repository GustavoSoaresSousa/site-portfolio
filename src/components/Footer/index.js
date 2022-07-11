import React,{useState} from "react";
import { FooterContainer } from "../../styles/FooterStyles";
import validator from "validator";
import emailjs from 'emailjs-com';

const InputsTargets = {
  valueName: '',
  valueSubject: '',
  valueMessage: ''
}

export function Footer(){
  const [emailError, setEmailError] = useState('')
  const [email, setEmail] = useState('')
  const [valuesInputs, setValuesInputs] = useState(InputsTargets)


  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;

  function sendEmail(e) {
    e.preventDefault();

      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
        console.log(emailError)
      } else {
        setEmailError('Enter valid Email!')
        console.log(emailError)
      }

      if(!valuesInputs.valueName || !valuesInputs.valueSubject || !valuesInputs.valueSubject){
        alert('Preencha os campos')
      }
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
                        <label>Seu Nome <span>*</span></label>
                        <input type="text" name="name" value={valuesInputs.valueName} onChange={(e) => setValuesInputs(e.target.value)}></input>
                        <label>Seu Email <span>*</span></label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} ></input><span></span>
                        <label>Assunto <span>*</span></label>
                        <input type="text" name="assunto" value={valuesInputs.valueSubject} onChange={(e) => setValuesInputs(e.target.value)} ></input>
                        <label>Sua Mensagem <span>*</span></label>
                        <textarea name="message" value={valuesInputs.valueMessage} onChange={(e) => setValuesInputs(e.target.value)}></textarea>
                        <input type="submit" value="Enviar a Mensagem"></input>
          </form>
      </div>

    </FooterContainer>
  )
}