import { json } from './_auth.mjs';
export default async (req)=>req.method==='POST'?json({ok:true},200,{'set-cookie':'yuaan_admin=; HttpOnly; Secure; SameSite=Strict; Path=/.netlify/functions; Max-Age=0'}):json({error:'Method not allowed'},405);
