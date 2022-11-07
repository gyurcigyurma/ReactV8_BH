import React from 'react';
import { createRoot } from 'react-dom';
import Pet from './Pet';

const App = () => {
  <div>
    <h1>Adopt me!</h1>
    <Pet name="Buksi" animal="dog" breed="Szetter" />
    <Pet name="Szuzi" animal="bird" breed="Kakadu" />
    <Pet name="Muci" animal="cat" breed="Sziami" />
  </div>;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
