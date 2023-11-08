var axios = require('axios');

const claimPoap = async (req, res) => {
   try {
      var data = JSON.stringify({
         contract: process.env.CONTRACT_ADDRESS,
         network: parseInt(process.env.CHAIN_ID),
         to: req.body.inputWallet,
         id: 1,
         amount: 1
      });

      var config = {
         method: 'post',
         url: "https://api.vottun.tech/erc/v1/poap/transfer",
         headers: {
            'x-application-vkn': process.env.APP_ID,
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`, 
            'Content-Type': 'application/json'
         },
         data: data
      };

      const response = await axios(config);
      res.status(200).json(response.data);
   } catch (e) {
      console.log(e.response.data)
      res.status(e.response.status).json({e});
   }
};

export default claimPoap;