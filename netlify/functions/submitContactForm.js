exports.handler = async (event, context) => {
  try {
    // ensure if the request is POST request
    if(event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({message: "Method Not Allowed"})
      };
    }

    const {email, message} = JSON.parse(event.body);
    console.log("Email", email)
    console.log("Message", message);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Form submission successful"
      }),
    }
  } catch(error) {
    console.error("Form submission error: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify({message: "Internal Server Error"})
    }
  }
}