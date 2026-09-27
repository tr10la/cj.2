
'use client';

import { useEffect, useState } from 'react';

type Reserva = {
  id: string;
  nom_client: string | null;
  notes_client: string | null;
  data_entrada: string;
  data_sortida: string;
  hostes: number | null;
  preu_total: number | null;
  origen: 'manual' | 'booking' | 'airbnb';
};

const mesos = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'];
const colors = ['#bfdbfe', '#bbf7d0', '#ddd6fe', '#a5f3fc', '#d9f99d', '#fdba74'];

function isoDia(any: number, mes: number, dia: number) {
  return `${any}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
}

function colorDe(reserva: Reserva) {
  if (reserva.origen === 'booking') return '#fecaca';
  if (reserva.origen === 'airbnb') return '#fde68a';
  const n = reserva.id.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return colors[n % colors.length];
}

function reservaDelDia(reserves: Reserva[], valor: string) {
  return reserves.find((reserva) => {
    const entrada = reserva.data_entrada?.slice(0, 10);
    const sortida = reserva.data_sortida?.slice(0, 10);
    if (!entrada) return false;
    if (!sortida || sortida <= entrada) return valor === entrada;
    return valor >= entrada && valor < sortida;
  });
}

export default function Dashboard() {
  const [reserves, setReserves] = useState<Reserva[]>([]);
  const [carregant, setCarregant] = useState(true);
  const [modalObert, setModalObert] = useState(false);
  const [reservaActiva, setReservaActiva] = useState<Reserva | null>(null);
  
  // Variables del formulari
  const [nouNom, setNouNom] = useState('');
  const [novesNotes, setNovesNotes] = useState('');
  const [anyVista, setAnyVista] = useState(() => new Date().getFullYear());

  const carregarReserves = async () => {
    try {
      const response = await fetch('/api/dashboard/reserves', { cache: 'no-store' });
      
      if (!response.ok) {
        throw new Error(`El backend ha donat un error ${response.status}`);
      }
      
      const body = await response.json();
      const locals = body.reserves ?? [];
      const externals = body.externals ?? [];
      setReserves(
        [...locals, ...externals].sort((a, b) => String(a.data_entrada).localeCompare(String(b.data_entrada))),
      );
    } catch (error: any) {
      alert("Error llegint les dades: " + error.message);
    } finally {
      // Això s'executarà SEMPRE, tant si va bé com si falla, traient el missatge de "Carregant..."
      setCarregant(false); 
    }
  };

  useEffect(() => {
    carregarReserves();
  }, []);

  // 1. HEM TRET EL CADENAT! Ara qualsevol reserva obre el modal.
  const obrirModal = (reserva: Reserva) => {
    setReservaActiva(reserva);
    setNouNom(reserva.nom_client || '');
    setNovesNotes(reserva.notes_client || '');
    setModalObert(true);
  };

  const guardarCanvis = async () => {
    if (!reservaActiva) return;
    const response = await fetch('/api/dashboard/reserves', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: reservaActiva.id, nom_client: nouNom, notes_client: novesNotes }),
    });
    
    if (response.ok) {
      setModalObert(false);
      setReservaActiva(null);
      carregarReserves(); // Refresquem la pantalla
    } else {
      alert('Error en guardar els canvis.');
    }
  };

  // 3. LA NOVA FUNCIÓ D'ELIMINAR
  const eliminarReserva = async (id: string) => {
    // Demanem confirmació per no esborrar sense voler
    if (!confirm('Segur que vols esborrar aquesta reserva definitivament?')) return;
    
    // Enviem la petició DELETE al nostre motor
    const response = await fetch('/api/dashboard/reserves', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      setReserves((prev) => prev.filter((reserva) => reserva.id !== id));
      carregarReserves();
    } else {
      const body = await response.json().catch(() => null);
      alert(body?.error || 'Hi ha hagut un error en eliminar la reserva.');
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif', backgroundColor: '#f3f4f6', minHeight: '100vh', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '28px', color: '#111827', margin: 0 }}>Panell de Control - Can Joan</h1>
          <span style={{ backgroundColor: 'tomato', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
            {reserves.length} Reserves
          </span>
        </header>

        {carregant ? (
          <p style={{ color: '#6b7280' }}>Carregant la caixa forta...</p>
        ) : (
          <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', gap: '16px', flexWrap: 'wrap' }}>
            <h2 style={{ margin: 0 }}>Calendari {anyVista}</h2>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => setAnyVista((any) => any - 1)} style={{ padding: '8px 14px', border: '1px solid #d1d5db', borderRadius: '12px', backgroundColor: 'white', cursor: 'pointer' }}>{anyVista - 1}</button>
              <button onClick={() => setAnyVista((any) => any + 1)} style={{ padding: '8px 14px', border: '1px solid #d1d5db', borderRadius: '12px', backgroundColor: 'white', cursor: 'pointer' }}>{anyVista + 1}</button>
            </div>
          </div>

          {mesos.map((nomMes, indexMes) => {
            const buits = (new Date(anyVista, indexMes, 1).getDay() + 6) % 7;
            const dies = new Date(anyVista, indexMes + 1, 0).getDate();
            return (
              <div key={`${anyVista}-${nomMes}`} style={{ backgroundColor: 'white', borderRadius: '30px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', marginBottom: '24px' }}>
                <h2 style={{ marginTop: 0, marginBottom: '16px' }}>{nomMes}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', fontWeight: 'bold', marginBottom: '8px', color: '#6b7280', fontSize: '13px' }}>
                  <div>DL</div><div>DT</div><div>DC</div><div>DJ</div><div>DV</div><div>DS</div><div>DG</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
                  {Array.from({ length: buits }, (_, i) => (
                    <div key={`buit-${nomMes}-${i}`} />
                  ))}
                  {Array.from({ length: dies }, (_, i) => {
                    const dia = i + 1;
                    const valor = isoDia(anyVista, indexMes, dia);
                    const reserva = reservaDelDia(reserves, valor);
                    return (
                      <div
                        key={valor}
                        onClick={() => reserva && obrirModal(reserva)}
                        style={{
                          border: '1px solid #e5e7eb',
                          borderRadius: '12px',
                          minHeight: '72px',
                          padding: '8px',
                          textAlign: 'left',
                          backgroundColor: reserva ? colorDe(reserva) : '#ffffff',
                          cursor: reserva ? 'pointer' : 'default',
                        }}
                      >
                        <div style={{ fontWeight: 600, marginBottom: '4px' }}>{dia}</div>
                        {reserva ? <div style={{ fontSize: '12px', lineHeight: 1.3 }}>{reserva.nom_client || 'Client Pendent'}</div> : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            
            {reserves.map((reserva) => (
              <div key={reserva.id} style={{ backgroundColor: 'white', borderRadius: '30px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderTop: reserva.origen !== 'manual' ? '6px solid #fecaca' : '6px solid #bfdbfe' }}>
                <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '16px', marginBottom: '16px' }}>
                  <h2 style={{ fontSize: '20px', margin: '0 0 8px 0' }}>{reserva.nom_client || 'Client Pendent'}</h2>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>🗓 {reserva.data_entrada} fins al {reserva.data_sortida}</p>
                  <span style={{ fontSize: '12px', backgroundColor: '#e5e7eb', padding: '2px 8px', borderRadius: '10px' }}>Origen: {reserva.origen}</span>
                </div>
                
                <div style={{ backgroundColor: '#f9fafb', padding: '12px', borderRadius: '8px', fontSize: '14px', minHeight: '60px', marginBottom: '16px' }}>
                  <strong>Notes:</strong> {reserva.notes_client || 'Cap nota.'}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={() => obrirModal(reserva)} style={{ flex: 1, padding: '10px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
                    ✏️ Editar
                  </button>
                  <button onClick={() => eliminarReserva(reserva.id)} style={{ padding: '10px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
                    🗑️
                  </button>
                </div>
              </div>
            ))}

          </div>
          </>
        )}
      </div>

      {modalObert && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '20px', width: '100%', maxWidth: '400px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Editar Dades</h3>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Nom del Client</label>
            <input type="text" value={nouNom} onChange={(event) => setNouNom(event.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '16px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }} />
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Notes Especials</label>
            <textarea value={novesNotes} onChange={(event) => setNovesNotes(event.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '24px', border: '1px solid #d1d5db', borderRadius: '8px', minHeight: '100px', boxSizing: 'border-box' }} />
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => setModalObert(false)} style={{ flex: 1, padding: '10px', backgroundColor: '#e5e7eb', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Cancel·lar</button>
              <button onClick={guardarCanvis} style={{ flex: 1, padding: '10px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}