import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Confirm from './components/Confirm';
import Contatos from './components/Contatos';
import Form from './components/Form';
import List from './components/List';

interface Beverage {
  type: string;
  name: string;
  brand: string;
  price: number;
}

const App: React.FC = () => {
  const [beverages, setBeverages] = useState<Beverage[]>(() => {
    const storedBeverages = localStorage.getItem('beverages');
    return storedBeverages ? JSON.parse(storedBeverages) : [];
  });
  const [showConfirmButton, setShowConfirmButton] = useState(true);

  useEffect(() => {
    localStorage.setItem('beverages', JSON.stringify(beverages));
  }, [beverages]);

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>_Drink's</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/list">Listar bebidas</Nav.Link>
            <Nav.Link as={NavLink} to="/contatos">Contatos</Nav.Link>
          </Nav>
          {showConfirmButton && (
            <Nav>
              <Nav.Link as={NavLink} to="/confirm" className="nav-link confirm">
                Confirmar
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      
      <div className="container mt-4">
        <Routes>
          <Route path="/list" element={
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h2>Aqui estão suas bebidas 👀</h2>
                    <List beverages={beverages} setBeverages={setBeverages} />
                    {beverages.length === 0 && <p>Nenhuma bebida adicionada ainda.</p>}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h2>Adicione uma bebida 🍻🎉</h2>
                    <Form onAdd={(beverage: Beverage) => setBeverages([...beverages, beverage])} />
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/confirm" element={<Confirm beverages={beverages} />} />
          <Route path="/contatos" element={
            <div className="card">
              <div className="card-body">
                <h2>Contatos</h2>
                <Contatos />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
