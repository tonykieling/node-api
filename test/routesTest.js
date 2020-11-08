/**
 * method to perform routes test
 */

(async () => {
  const axios = require("axios");

  // parameters
  const DOMAIN  = "localhost";
  const PORT    = 3456;
  const PATH    = "api/ping"
  const URL     = `http://${DOMAIN}:${PORT}/${PATH}`;

  try {
    const axiosQuery = await axios(URL);
    const { message, success, error} = axiosQuery.data;
    if (!message && !success && !error)
      console.log(`'${URL}'  is NOT working! 😢`);
    else {
      if (error)
        console.log(`'${URL}'  is replying! 👍 - BUT invalid route`);
      else
        console.log(`'${URL}'  is replying! 👍 - VALID route`);
    }
    
  }catch(error){
    console.log(`${URL} is NOT working! 😢`);
  }
})();
