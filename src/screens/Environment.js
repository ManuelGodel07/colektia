import React, { useState } from 'react';
import { envi } from '../assets/envi';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firestore';
import Swal from 'sweetalert2';

const Environment = () => {
  const [form, setForm] = useState({});
  const [openResponses, setOpenResponses] = useState({
    ambiente: '',
    experiencia: '',
    supervisor: '',
    razonesNoPermanencia: '',
    mejoras: '',
  });

  const handleOptionChange = (name, choice) => {
    setForm(prev => ({ ...prev, [name]: choice }));
  };

  const handleOpenResponseChange = (field, value) => {
    setOpenResponses(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'environmentSurvey'), {
        ...form,
        ...openResponses,
        timestamp: new Date()
      });
      Swal.fire('¡Éxito!', 'La encuesta fue enviada correctamente.', 'success');
      setForm({});
      setOpenResponses({
        ambiente: '',
        experiencia: '',
        supervisor: '',
        razonesNoPermanencia: '',
        mejoras: '',
      });
    } catch (error) {
      Swal.fire('Error', 'Hubo un problema al enviar la encuesta.', 'error');
    }
  };

  let questionNumber = 1; // <-- contador de preguntas

  return (
    <div className="main">
        <div className="Header-container">
            <h1>Encuesta de satisfacción del proceso de onboarding y capacitación</h1>
            <h2>¡Tu opinión cuenta! Ayúdanos a mejorar.</h2>
            <h3>Responde nuestra encuesta y ayúdanos a identificar áreas de mejora en la empresa</h3>
        </div>
        <form onSubmit={handleSubmit}>
            {envi.map((q) => (
            <div key={q.name} className="question-block">
                <p><strong>{questionNumber++}. {q.questionText}</strong></p>
                {q.options.map((opt) => (
                <label key={opt.radioValue} className="option">
                    <input
                    type="radio"
                    name={q.name}
                    value={opt.choice}
                    checked={form[q.name] === opt.choice}
                    onChange={() => handleOptionChange(q.name, opt.choice)}
                    required
                    />
                    {opt.choice}
                </label>
                ))}
            </div>
            ))}

            {/* Preguntas abiertas */}
            <div className="question-block">
            <p><strong>{questionNumber++}. ¿Qué aspectos del ambiente laboral te han ayudado o dificultado adaptarte?</strong></p>
            <textarea
                value={openResponses.ambiente}
                onChange={(e) => handleOpenResponseChange('ambiente', e.target.value)}
                rows="3"
                required
            />
            </div>

            <div className="question-block">
            <p><strong>{questionNumber++}. ¿Qué es lo que más valoras de tu experiencia hasta ahora en la empresa?</strong></p>
            <textarea
                value={openResponses.experiencia}
                onChange={(e) => handleOpenResponseChange('experiencia', e.target.value)}
                rows="3"
                required
            />
            </div>

            <div className="question-block">
            <p><strong>{questionNumber++}. ¿Qué mejorarías de tu relación con tu supervisor?</strong></p>
            <textarea
                value={openResponses.supervisor}
                onChange={(e) => handleOpenResponseChange('supervisor', e.target.value)}
                rows="3"
                required
            />
            </div>

            <div className="question-block">
            <p><strong>{questionNumber++}. Si respondiste “No” o “No estoy seguro/a” sobre permanencia, ¿por qué?</strong></p>
            <textarea
                value={openResponses.razonesNoPermanencia}
                onChange={(e) => handleOpenResponseChange('razonesNoPermanencia', e.target.value)}
                rows="3"
            />
            </div>

            <div className="question-block">
            <p><strong>{questionNumber++}. ¿Qué cambios o mejoras te motivarían a permanecer más tiempo?</strong></p>
            <textarea
                value={openResponses.mejoras}
                onChange={(e) => handleOpenResponseChange('mejoras', e.target.value)}
                rows="3"
            />
            </div>

            <button type="submit" className="submit-btn">Enviar</button>
        </form>
        </div>
    );
};


export default Environment;