import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Productos() {
    let params = useParams();
    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Camiseta', precio: 19.99 },
        { id: 2, nombre: 'Pantalón', precio: 29.99 },
    ]);

    useEffect(() => {
        if (params.productoId) { // Verifica si params.productoId tiene un valor
            let aux = [];
            productos.map(p => {
                if (p.id === parseInt(params.productoId)) aux.push(p)  // params.productoId es un String, hay que parsearlo
            });
            setProductos(aux); // Si params.productoId tiene un valor muestra solo ese producto
        } else {
            // Si no hay productoId, muestra todos los productos
            setProductos([...productos]); // Crea una copia del array original para evitar mutaciones directas
        }
    }, [params]); // Se actualiza cada vez que cambia params

    return (
        <div>
            <h1>Nuestros Productos</h1>
            <ul>
                {productos.map(producto => (
                    <li key={producto.id}>
                        {producto.nombre} - ${producto.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Productos;