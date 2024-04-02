import React, { useState } from 'react';
import './ProjetForm.css';

const ProjetForm = ({ onSubmit }) => {
  const [projet, setProjet] = useState('');
  const [horizonTemps, setHorizonTemps] = useState('');
  const [objectif, setObjectif] = useState('');
  const [premierJalon, setPremierJalon] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      project: projet,
      timeperiod: horizonTemps,
      metrics: [objectif],
      activable: premierJalon
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Quel est le projet essentiel dans lequel je souhaite nous engager mon équipe et moi ?
          <input type="text" value={projet} onChange={(e) => setProjet(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          À quel horizon de temps ?
          <input type="text" value={horizonTemps} onChange={(e) => setHorizonTemps(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Qu'est-ce qui me permettra de dire que nous aurons réussi notre projet ?
          <input type="text" value={objectif} onChange={(e) => setObjectif(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          C'est quoi le premier jalor d'action ?
          <input type="text" value={premierJalon} onChange={(e) => setPremierJalon(e.target.value)} />
        </label>
      </div>
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default ProjetForm;
