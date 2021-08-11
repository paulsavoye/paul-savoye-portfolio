import React, { useState, useEffect, useRef } from "react";
import styles from "./contact.module.css";
import utilStyles from "../../styles/utils.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingJson from "../../public/lottiefiles/loading-dots.json";
import emailJson from "../../public/lottiefiles/email-sent.json";
import { sendMessage } from "../services/contact";

function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
    captcha: "",
  });

  const [firstNumber, setFirstNumber] = useState(undefined);
  const [secondNumber, setSecondNumber] = useState(undefined);

  useEffect(() => {
    setFirstNumber(Math.floor(Math.random() * 9 + 1));
    setSecondNumber(Math.floor(Math.random() * 9 + 1));
  }, []);

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();

    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (secondNumber + firstNumber !== parseInt(inputs.captcha)) {
      setStatus((prevStatus) => ({
        ...prevStatus,
        info: { error: true, msg: "Le captcha est incorrect." },
      }));
    } else {
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      sendMessage(inputs)
        .then(() => {
          handleServerResponse(true, "Merci, votre message a été envoyé.");
        })
        .catch((error) => {
          console.log(error);
          handleServerResponse(false, error.response.data.error);
        });
    }
  };
  return (
    <div className={styles.contact}>
      <h2 className={utilStyles.h2}>Me contacter</h2>
      {status.submitted ? (
        <div>
          <Player
            autoplay
            src={emailJson}
            style={{
              height: "300px",
            }}
          />
          <div className={styles.contact_reponse}>
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
          </div>
        </div>
      ) : (
        <form className={styles.contact_form} onSubmit={handleOnSubmit}>
          <label className={styles.contact_label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.contact_line}
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
          <label className={styles.contact_label} htmlFor="object">
            Objet
          </label>
          <textarea
            className={styles.contact_line}
            id="object"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.object}
          />
          <label className={styles.contact_label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.contact_text}
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
          <label className={styles.contact_label} htmlFor="captcha">
            Captcha
          </label>
          <div className={styles.captcha_group}>
            <div>
              {firstNumber} + {secondNumber} =
              <input
                className={styles.captcha}
                id="captcha"
                type="number"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.captcha}
              />
            </div>
            <button
              className={styles.contact_submit}
              type="submit"
              disabled={status.submitting}
            >
              {!status.submitting ? (
                !status.submitted ? (
                  "Envoyer"
                ) : (
                  "Envoyé"
                )
              ) : (
                <Player
                  autoplay
                  loop
                  src={loadingJson}
                  style={{
                    height: "70px",
                    position: "absolute",
                    left: "0px",
                    right: "0px",
                    top: "-17px",
                  }}
                />
              )}
            </button>
          </div>
        </form>
      )}
      <div className={styles.contact_reponse}>
        {status.info.error && <div>Erreur: {status.info.msg}</div>}
      </div>
    </div>
  );
}

export default Contact;
