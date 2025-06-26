import {React,useState} from "react";

const Sender =()=> {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const sendWhatsApp = async () => {
        const res = await fetch('http://localhost:3001/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ to: number, message })
        });
        const data = await res.json();
        console.log(data);
    };

    return (
        <div>
            <h2>Enviar WhatsApp por Twilio</h2>
            <input placeholder="521234567890" onChange={(e) => setNumber(e.target.value)} />
            <br />
            <textarea placeholder="Mensaje" onChange={(e) => setMessage(e.target.value)} />
            <br />
            <button onClick={sendWhatsApp}>Enviar</button>
        </div>
    );
}

export default Sender;