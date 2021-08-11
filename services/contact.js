async function sendMessage({}) {
  return axios({
    method: "POST",
    url: "https://formspree.io/f/xwkwnlkn",
    data: {
      email: "inputs.email",
      object: "inputs.object",
      message: "inputs.message",
    },
  });
}

export { sendMessage };
