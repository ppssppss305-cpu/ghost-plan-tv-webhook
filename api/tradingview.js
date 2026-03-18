```javascript
   export default async function handler(req, res) {
   if (req.method !== 'POST') {
   return res.status(405).json({ ok: false, error: 'Method not allowed' });
   }

   try {
   const payload = req.body;

   console.log('TradingView webhook received:', payload);

   return res.status(200).json({
   ok: true,
   message: 'TradingView webhook received',
   received: payload
   });
   } catch (error) {
   console.error('Webhook error:', error);

   return res.status(500).json({
   ok: false,
   error: 'Internal server error'
   });
   }
   }
 ```
