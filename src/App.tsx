import { useState, useEffect } from 'react';
import './App.css';

// ✅ Define the structure of a medicine row
type Medicine = {
  id: string | number;
  medicineName: string;
  dose: string;
  time: string;
};

function App() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [name, setName] = useState('');
  const [dose, setDose] = useState('');
  const [time, setTime] = useState('');

  // ✅ Your NocoDB API
  const apiUrl = 'https://app.nocodb.com/api/v2/tables/mqvx1313d1f4cvs/records';
  const apiKey = '-8XqWo-J1YJd9WCxX51XeKcK1iMnrz6MDTVh_Kg7';

  // ✅ Fetch medicines on load
  useEffect(() => {
    fetch(apiUrl, {
      headers: { 'xc-auth': apiKey }
    })
      .then(res => res.json())
      .then(data => {
        if (data.list) {
          // Cast list into Medicine[]
          setMedicines(data.list as Medicine[]);
        }
      });
  }, []);

  // ✅ Add a new medicine
  const addMedicine = () => {
    if (!name || !dose || !time) return alert("Please fill all fields!");

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xc-auth': apiKey
      },
      body: JSON.stringify({
        medicineName: name,
        dose: dose,
        time: time
      }),
    })
      .then(res => res.json())
      .then((data: Medicine) => {
        setMedicines([...medicines, data]);
        setName('');
        setDose('');
        setTime('');
      });
  };

  // ✅ Delete a medicine
  const deleteMedicine = (id: string | number) => {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
      headers: { 'xc-auth': apiKey }
    }).then(() => {
      setMedicines(medicines.filter(m => m.id !== id));
    });
  };

  return (
    <div className="app-container">
      <h1>PillPal — Medicine Reminder</h1>

      <div className="form-row">
        <input
          placeholder="Medicine Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Dose (e.g. 500mg)"
          value={dose}
          onChange={e => setDose(e.target.value)}
        />
        <input
          placeholder="Time (HH:MM)"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
        <button onClick={addMedicine}>Add</button>
      </div>

      <h2>Schedule</h2>
      <ul>
        {medicines.map(med => (
          <li key={med.id}>
            <span>{med.medicineName} — {med.dose} at {med.time}</span>
            <button onClick={() => deleteMedicine(med.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
