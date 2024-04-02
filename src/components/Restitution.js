import React, { useState } from 'react';
import './Restitution.css';

const Restitution = ({ data }) => {
  const [commentaire, setCommentaire] = useState('');

  return (
    <div>
      <div>
        <h2>Quel est le projet essentiel dans lequel je souhaite nous engager mon équipe et moi ?</h2>
        <p>{data.project}</p>
      </div>
      <div>
        <h2>À quel horizon de temps ?</h2>
        <p>{data.timeperiod}</p>
      </div>
      <div>
        <h2>Qu'est-ce qui me permettra de dire que nous aurons réussi notre projet ?</h2>
        <p>{data.metrics}</p>
      </div>
      <div>
        <h2>C'est quoi le premier jalor d'action ?</h2>
        <p>{data.activable}</p>
      </div>
      <div>
        <h2>Champ commentaire :</h2>
        <textarea value={commentaire} onChange={(e) => setCommentaire(e.target.value)} />
      </div>
    </div>
  );
};

export default Restitution;
