import '../styles/login-styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../config/firestore';

export default function LoginScreen() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, correo, password);
      const q = query(collection(db, 'users'), where('correo', '==', correo));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error('No se encontró un perfil asociado a este correo.');
      }

      const userDoc = querySnapshot.docs[0].data();

      if (!userDoc.rol || !userDoc.nombre || !userDoc.area) {
        throw new Error('Perfil incompleto en la base de datos.');
      }

      localStorage.setItem('user', JSON.stringify({
        nombre: userDoc.nombre,
        rol: userDoc.rol,
        area: userDoc.area
      }));

      // ✅ Redirección según rol
      if (userDoc.rol === 'jefe') {
        navigate('/dashboard');
      } else if (userDoc.rol === 'Analista') {
        navigate('/Capture');
      } else {
        throw new Error('Rol no reconocido');
      }

    } catch (err) {
      console.error(err);
      setError(err.message || 'Correo o contraseña incorrectos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Ingresar'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}