
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function Dashboard() {
  const [reserves, setReserves] = useState<any[]>([]);
  const [carregant, setCarregant] = useState(true);

  // --- NOVES VARIABLES PER AL MODAL ---
  const [modalObert, setModalObert] = useState(false);
  const [reservaActiva, setReservaActiva] = useState<any>(null);
  
  // Variables per recollir el text del formulari
  const [nouNom, setNouNom] = useState('');
  const [novesNotes, setNovesNotes] = useState('');

  useEffect(() => {
    carregarReserves();
  }, []);

  const carregarReserves = async () => {
    const { data, error } = await supabase
      .from('reserves')
      .select('*')
      .order('data_entrada', { ascending: true });

    if (!error && data) {
      setReserves(data);
    }
    setCarregant(false);
  };

  // Funció per obrir la finestra flotant amb les dades correctes
  const obrirModal = (reserva: any) => {
    setReservaActiva(reserva);
    setNouNom(reserva.nom_client || '');
    setNovesNotes(reserva.notes_client || '');
    setModalObert(true);
  };

  const tancarModal = () => {
    setModalObert(false);
    setReservaActiva(null);
  };

  const guardarCanvis = async () => {
    if (!reservaActiva) return;

    // Actualitzem a la base de dades
    const { error } = await supabase
      .from('reserves')
      .update({
        nom_client: nouNom,
        notes_client: novesNotes
      })
      .eq('id', reservaActiva.id);

    if (!error) {
      tancarModal(); // Amaguem el modal
      carregarReserves(); // Refresquem les targetes per veure el canvi
    } else {
      alert('Error en guardar: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif', backgroundColor: '#f3f4f6', minHeight: '100vh', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '28px', color: '#111827', margin: 0 }}>Panell de Control - Can Joan</h1>
          <span style={{ backgroundColor: '#10b981', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
            {reserves.length} Reserves actives
          </span>
        </header>

        {carregant ? (
          <p style={{ color: '#6b7280' }}>Carregant la caixa forta...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            
            {reserves.map((reserva) => (
              <div key={reserva.id} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '16px', marginBottom: '16px' }}>
                  <h2 style={{ fontSize: '20px', margin: '0 0 8px 0', color: '#1f2937' }}>
                    {reserva.nom_client || 'Client Pendent'}
                  </h2>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
                    🗓 {reserva.data_entrada} fins al {reserva.data_sortida}
                  </p>
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#4b5563' }}>
                    👥 <strong>{reserva.hostes} hostes</strong>
                  </p>
                  <p style={{ margin: 0, fontSize: '14px', color: '#4b5563' }}>
                    💶 <strong>{reserva.preu_total}€</strong>
                  </p>
                </div>

                <div style={{ backgroundColor: '#f9fafb', padding: '12px', borderRadius: '8px', fontSize: '14px', color: '#4b5563', minHeight: '60px', marginBottom: '16px' }}>
                  <strong>Notes:</strong> {reserva.notes_client || 'Cap nota afegida.'}
                </div>

                <button 
                  onClick={() => obrirModal(reserva)}
                  style={{ width: '100%', padding: '10px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}
                >
                  ✏️ Editar Client
                </button>
              </div>
            ))}

          </div>
        )}
      </div>

      {/* --- BLOC DEL MODAL (Finestra Emergent) --- */}
      {modalObert && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000 
        }}>
          <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', width: '100%', maxWidth: '400px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '20px' }}>Editar Dades del Client</h3>
            
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>Nom del Client</label>
            <input 
              type="text" 
              value={nouNom}
              onChange={(e) => setNouNom(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '16px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }}
            />

            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>Notes Especials</label>
            <textarea 
              value={novesNotes}
              onChange={(e) => setNovesNotes(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '24px', border: '1px solid #d1d5db', borderRadius: '6px', minHeight: '100px', boxSizing: 'border-box' }}
            />

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={tancarModal}
                style={{ flex: 1, padding: '10px', backgroundColor: '#e5e7eb', color: '#374151', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}
              >
                Cancel·lar
              </button>
              <button 
                onClick={guardarCanvis}
                style={{ flex: 1, padding: '10px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}