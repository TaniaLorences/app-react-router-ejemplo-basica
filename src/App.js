import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import ProductosMios from './componentes/ProductosMios';
import Home from './componentes/Home';
import About from './componentes/About';
import Layout from './componentes/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >          {/* Layout es el contenedor donde se renderizan los hijos mediante Outlet*/}
            <Route index element={<Home />} />                                  {/* Home es el índice */}
            <Route path="/productos/:productoId?" element={<ProductosMios />} />
            <Route path="/about" element={<About />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

/* /productos: Esta es la parte estática de la ruta. Significa que la URL debe comenzar con /productos para que esta ruta coincida.
:productoId: Esta es la parte dinámica de la ruta. Los dos puntos : indican que productoId es un parámetro de la URL. 
              Esto significa que cualquier valor que venga después de /productos/ será capturado como el valor de productoId. 
              Por ejemplo, en la URL /productos/123, productoId tendrá el valor 123.
?: El signo de interrogación al final de :productoId? hace que el parámetro productoId sea opcional. 
              Esto significa que la ruta coincidirá tanto con /productos como con /productos/123. */

