import React from "react"
import "./style.css"
import axios from "axios"

const Newsletter = () => {
  const [newsletterSuccess, setNewsletterSuccess] = React.useState(false);

  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState(null);

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(null);

  function handleNameChange(input) {
    setName(input.target.value);
  }

  function handleEmailChange(input) {
    setEmail(input.target.value);
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  function resetEmail() {
    setNewsletterSuccess(false);
  }

  function validateName(name) {
    return name.trim().length > 1;
  }

  function validateForm() {
    let formValidated = true;

    if (validateEmail(email)) {
      setEmailError(null);
    } else {
      setEmailError("Por favor preencha o campo e-mail corretamente");
      formValidated = false;
    }

    if (validateName(name)) {
      setNameError(null);
    } else {
      setNameError("Por favor preencha o campo nome corretamente");
      formValidated = false;
    }

    return formValidated;
  }

  function submitForm(event) {
    event.preventDefault();

    if (!validateForm()) return;

    axios
      .post('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
        name,
        email,
      })
      .then((res) => {
        setNewsletterSuccess(true);
      });
  }

  return (
    <div className="newsletter">
      <div className="newsletter-container">
        {newsletterSuccess ? (
          <div className="success-newsletter">
            <p>
              <span>Seu e-mail foi cadastrado com sucesso!</span>
              <br /> A partir de agora você receberá as novidade e ofertas
              exclusivas.
            </p>
            <button onClick={resetEmail}>Cadastrar novo e-mail</button>
          </div>
        ) : (
          <>
            <h3>Participe de nossas news com promoções e novidades!</h3>
            <form className="form-newsletter" onSubmit={submitForm}>
              <input
                placeholder="Digite seu nome"
                id="name"
                className={nameError ? "form-input-error" : "form-input"}
                onChange={handleNameChange}
              />
              {nameError && <p className="text-error">{nameError}</p>}

              <input
                placeholder="Digite seu email"
                id="email"
                className={emailError ? "form-input-error" : "form-input"}
                onChange={handleEmailChange}
              />
              {emailError && <p className="text-error">{emailError}</p>}

              <button className="button-eu-quero">Eu quero!</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
