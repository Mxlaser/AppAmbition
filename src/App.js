import React, { useState } from 'react';
import ProjetForm from './components/ProjetForm';
import Restitution from './components/Restitution';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    console.log('Données soumises :', data);
    setFormData(data);
  };

  return (
    <div>
      <h1>Webapp - AMBITION</h1>
      {formData ? (
        <Restitution data={formData} />
      ) : (
        <ProjetForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;
