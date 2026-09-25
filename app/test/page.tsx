'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function TestSupabase() {
  const [missatge, setMissatge] = useState('');
  const [reserves, setReserves] = useState<any[]>([]);
  
  // Noves variables per recollir les dades del login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sessioIniciada, setSessioIniciada] = useState(false);

  const iniciarSessio = async () => {
    setMissatge('Comprovant credencials...');
    
    // Demanem a Supabase que ens validi l'usuari
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMissatge('Error de login: ' + error.message);
    } else {
      setSessioIniciada(true);
      setMissatge('Sessió iniciada correctament! Ja tens el passaport digital.');
    }
  };

  const carregarReserves = async () => {
    setMissatge('Llegint la caixa forta...');
    
    // Com que ara tenim el passaport, aquesta petició sí que travessarà l'escut RLS
    const { data, error } = await supabase
      .from('reserves')
      .select('*');

    if (error) {
      setMissatge('Error en llegir: ' + error.message);
    } else {
      setReserves(data || []);
      setMissatge('Dades carregades correctament amb perfil d\'administrador!');
    }
  };

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h2>Prova de Seguretat i Lectura (Backend)</h2>
      
      {!sessioIniciada ? (
        <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', maxWidth: '300px' }}>
          <h3>Iniciar Sessió</h3>
          <input 
            type="email" 
            placeholder="Correu electrònic" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <input 
            type="password" 
            placeholder="Contrasenya" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
          <button 
            onClick={iniciarSessio}
            style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#3b82f6', color: 'white', border: 'none', width: '100%' }}
          >
            Entrar
          </button>
        </div>
      ) : (
        <button 
          onClick={carregarReserves}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#e2e8f0' }}
        >
          Llegir Reserves de Supabase
        </button>
      )}

      <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{missatge}</p>
      
      <ul style={{ marginTop: '20px', lineHeight: '1.8' }}>
        {reserves.map((reserva) => (
          <li key={reserva.id}>
            <strong>Reserva #{reserva.id}:</strong> Del {reserva.data_entrada} al {reserva.data_sortida} ({reserva.hostes} hostes) - Preu: {reserva.preu_total}€
          </li>
        ))}
      </ul>
    </div>
  );
}