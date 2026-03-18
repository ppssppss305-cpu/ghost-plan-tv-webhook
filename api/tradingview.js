 ```javascript
   module.exports = async (req, res) => {
   try {
   if (req.method !== 'POST') {
   return res.status(405).json({
   ok: false,
   error: 'Method not allowed',
   method: req.method
   });
   }

   const payload = req.body || null;

   console.log('TradingView webhook received:', JSON.stringify(payload));

   return res.status(200).json({
   ok: true,
   message: 'TradingView webhook received',
   received: payload
   });
   } catch (error) {
   console.error('Webhook error:', error);

   return res.status(500).json({
   ok: false,
   error: 'Internal server error',
   detail: String(error && error.message ? error.message : error)
   });
   }
   };
 ```
