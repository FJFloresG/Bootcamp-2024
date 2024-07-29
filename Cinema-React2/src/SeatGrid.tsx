import { useState, useEffect } from 'react';

type Seat = {
  id: number,
  row: number,
  column: number,
  isReserved: boolean
};

type SeatGridProps = {
  rows: number,
  columns: number
};

const SeatGrid = ({ rows, columns }: SeatGridProps) => {
  const [seats, setSeats] = useState<Seat[]>([]);

  const toggleReservation = (id: number) => {
    const updatedSeats = seats.map((seat) =>
      seat.id === id ? { ...seat, isReserved: !seat.isReserved } : seat
    );
    setSeats(updatedSeats);
  };

  useEffect(() => {
    const generateSeats = () => {
      const newSeats: Seat[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          newSeats.push({
            id: row * columns + col,
            row: row,
            column: col,
            isReserved: false
          });
        }
      }
      setSeats(newSeats);
    };
    generateSeats();
  }, [rows, columns]);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return (
    <div className="seat-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {seats.map((seat) => (
        <div key={seat.id} className="seat">
          <p>{letters[seat.row]}{seat.column + 1}</p>
          <img
            src={seat.isReserved ? 'seatReserved.png' : 'seat.png'}
            onClick={() => toggleReservation(seat.id)}
            alt={seat.isReserved ? 'Reserved Seat' : 'Available Seat'}
          />
        </div>
      ))}
    </div>
  );
};

export default SeatGrid;
