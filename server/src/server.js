import express from 'express';import cors from 'cors';import api from './routes/api.js';
const app=express();app.use(cors());app.use(express.json());app.get('/api/health',(q,s)=>s.json({status:'ok',mode:'demo'}));app.use('/api',api);const port=process.env.PORT||5000;app.listen(port,()=>console.log(`MOIL demo API running on http://localhost:${port}`));
