export default function handler(req, res) {
   if (req.method !== 'POST') {
   return res.status(405).json({
   ok: false,
   error: 'Method not allowed',
   method: req.method
   });
   }

   const payload = req.body || null;

   console.log('TradingView webhook received:', payload);

   return res.status(200).json({
   ok: true,
   message: 'TradingView webhook received',
   received: payload
   });
   }
