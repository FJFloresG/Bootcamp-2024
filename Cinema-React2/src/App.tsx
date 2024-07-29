import { useState } from 'react';
import './App.css';
import SeatGrid from './SeatGrid';

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [showSeats, setShowSeats] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSeats(false);
    setTimeout(() => {
      setShowSeats(true);
    }, 2000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Filas:
          <input type="number" value={rows} onChange={(e) => setRows(parseInt(e.target.value))} />
        </label>
        <br />
        <label>
          Columnas:
          <input type="number" value={columns} onChange={(e) => setColumns(parseInt(e.target.value))} />
        </label>
        <br />
        <br />
        <button type="submit">Generar Asientos</button>
      </form>
   
      {showSeats && <SeatGrid rows={rows} columns={columns} />}
    </>
  );
}

export default App;
