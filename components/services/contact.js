import axios from "axios";

async function sendMessage({ email, object, message }) {
  return axios({
    method: "POST",
    url: "https://formspree.io/f/xwkwnlkn",
    data: {
      email: email,
      object: object,
      message: message,
    },
  });
}

export { sendMessage };
