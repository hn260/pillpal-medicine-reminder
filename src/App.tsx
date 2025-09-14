import { useState, useEffect } from 'react';
import './App.css';

// ✅ Define the structure of a medicine record
interface Medicine {
  Id: string | number; // NocoDB usually sends "Id" (capitalized)
  medicineName: string;
  dose: string;
  time: string;
}

function App() {
  // ✅ Explicitly type state
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [name, setName] = useState<string>('');
  const [dose, setDose] = useState<string>('');
  const [time, setTime] = useState<string>('');

  // ✅ Your NocoDB API
  const apiUrl =
    'https://app.nocodb.com/api/v2/tables/mqvx1313d1f4cvs/records';
  const apiKey = '-8XqWo-J1YJd9WCxX51XeKcK1iMnrz6MDTVh_Kg7';

  // ✅ Fetch medicines on load
  useEffect(() => {
    fetch(apiUrl, {
      headers: { 'xc-auth': apiKey },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.list) {
          // Cast list into Medicine[]
          setMedicines(data.list as Medicine[]);
        }
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  // ✅ Add a new medicine
  const addMedicine = () => {
    if (!name || !dose || !time) {
      alert('Please fill all fields!');
      return;
    }

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xc-auth': apiKey,
      },
      body: JSON.stringify({
        medicineName: name,
        dose: dose,
        time: time,
      }),
    })
      .then((res) => res.json())
      .then((data: Medicine) => {
        setMedicines((prev) => [...prev, data]);
        setName('');
        setDose('');
        setTime('');
      })
      .catch((err) => console.error('Add error:', err));
  };

  // ✅ Delete a medicine
  const deleteMedicine = (id: string | number) => {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
      headers: { 'xc-auth': apiKey },
    })
      .then(() => {
        setMedicines((prev) => prev.filter((m) => m.Id !== id));
      })
      .catch((err) => console.error('Delete error:', err));
  };

  return (
    <div className="app-container">
      <h1>PillPal — Medicine Reminder</h1>

      <div className="form-row">
        <input
          placeholder="Medicine Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Dose (e.g. 500mg)"
          value={dose}
          onChange={(e) => setDose(e.target.value)}
        />
        <input
          placeholder="Time (HH:MM)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={addMedicine}>Add</button>
      </div>

      <h2>Schedule</h2>
      <ul>
        {medicines.map((med) => (
          <li key={med.Id}>
            <span>
              {med.medicineName} — {med.dose} at {med.time}
            </span>
            <button onClick={() => deleteMedicine(med.Id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

