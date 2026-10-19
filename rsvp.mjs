import { getStore } from '@netlify/blobs';
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
export default async (req)=>{
 if(req.method!=='POST')return json({error:'Method not allowed'},405);
 try{const data=await req.json();const name=String(data.name||'').trim();const attending=data.attending;const message=String(data.message||'').trim();if(name.length<2||name.length>100)return json({error:'Please enter a name between 2 and 100 characters.'},400);if(!['yes','no'].includes(attending))return json({error:'Please choose whether you can attend.'},400);if(message.length>500)return json({error:'Please keep your message under 500 characters.'},400);
 const store=getStore('yuaan-rsvps');const id=crypto.randomUUID();const record={id,name,attending,message,createdAt:new Date().toISOString()};await store.setJSON(id,record);return json({ok:true});
 }catch(e){return json({error:'We could not save your response right now. Please try again shortly.'},500)}
};
