import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Layout.css';
import { Outlet } from 'react-router';

const  Layout =()=>{
    return (
        <div className="App">
          <header>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </header>
    
          <section className="hero">
            <Container>
              <Row>
                <Col>
                  <h1>Because there is no planet B</h1>
                  <p> Act Green, Live Green.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Outlet/>    {/* A través de Outlet se renderizan los componentes hijos */}
                </Col>         {/* Así se mantiene la misma estructura básica de la página Layout y solo cambia la parte Outlet */}
              </Row>
            </Container>
          </section>
    
          <footer>
            <p>Información de contacto y enlaces del pie de página</p>
          </footer>
        </div>
      );
};
export default Layout;

/* Cuando defines rutas anidadas en tu aplicación React Router, necesitas un lugar en el componente padre (Layout) 
donde se renderizará el componente hijo que corresponde a la ruta actual.
<Outlet /> sirve como un marcador de posición para este componente hijo. */