import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Container maxWidth= "sm" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        <h1>Ceci est un test pour passer d'une page web vers un fichier PDF</h1>
        <Home/>
      </Container>
    </div>
  );
}

export default App;
