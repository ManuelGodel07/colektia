require('dotenv').config();
console.log("Hola mundo");

console.log("TWILIO_ACCOUNT_SID:", process.env.TWILIO_ACCOUNT_SID);
console.log("TWILIO_AUTH_TOKEN:", process.env.TWILIO_AUTH_TOKEN);
console.log("TWILIO_PHONE_NUMBER:", process.env.TWILIO_PHONE_NUMBER);
const express = require('express');
const cors = require('cors');
const app = express();

const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
    const { to, message } = req.body;

    try {
        const msg = await client.messages.create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `whatsapp:${to}`,
            body: message
        });
        res.json({ status: 'sent', sid: msg.sid });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3001, () => {
    console.log('Servidor Twilio corriendo en puerto 3001');
});