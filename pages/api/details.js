var axios = require('axios');

const getPoapDetails = async (req, res) => {
   try {
      var data = JSON.stringify({
         contract: process.env.CONTRACT_ADDRESS,
         network: parseInt(process.env.CHAIN_ID),
         id: 1
      });

      var config = {
         method: 'get',
         url: "https://api.vottun.tech/erc/v1/poap/tokenUri",
         headers: {
            'x-application-vkn': process.env.APP_ID,
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`, 
            'Content-Type': 'application/json'
         },
         data : data
      };

      const response = await axios(config);
      res.status(200).json(response.data);
   } catch (e) {
      console.log(e.response.data)
      res.status(e.response.status).json({e});
   }
};

export default getPoapDetails;


