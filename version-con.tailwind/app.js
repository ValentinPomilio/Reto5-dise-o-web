// Base de datos de los juegos de PomiStore
const baseDeDatosJuegos = {
    cyberquest: {
        titulo: "Cyber Quest 2077",
        precio: "$59.99",
        imagen: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1200&q=80",
        descripcion: "Explora una megalópolis futurista donde el poder, el glamur y la modificación corporal son ley. Ponte en la piel de V, un mercenario proscrito que busca un implante único que es la clave de la inmortalidad. Personaliza las habilidades cibernéticas de tu personaje, su estilo de juego y explora una ciudad enorme."
    },
    shadowrealms: {
        titulo: "Shadow Realms",
        precio: "$49.99",
        imagen: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
        descripcion: "Domina la magia oscura y lidera a tu clan en batallas tácticas en tiempo real de escala masiva. Un RPG estratégico que desafía tu mente con mecánicas cooperativas complejas y un apartado visual de fantasía oscura gótica totalmente sobrecogedor."
    },
    speedhorizon: {
        titulo: "Speed Horizon",
        precio: "$39.99",
        imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        descripcion: "Siente la velocidad extrema en circuitos hiperrealistas con el simulador definitivo de conducción. Cuenta con más de 500 vehículos deportivos licenciados, físicas de clima dinámico en tiempo real y competencias competitivas online semanales."
    }
};

function cargarDetalleProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const nombreJuego = urlParams.get('juego');

    if (nombreJuego && baseDeDatosJuegos[nombreJuego]) {
        const juego = baseDeDatosJuegos[nombreJuego];

        document.getElementById('detalle-titulo').innerText = juego.titulo;
        document.getElementById('detalle-precio').innerText = juego.precio;
        document.getElementById('detalle-descripcion').innerText = juego.descripcion;
        document.getElementById('detalle-imagen').src = juego.imagen;
        document.getElementById('detalle-imagen').alt = juego.titulo;
        
        document.title = `${juego.titulo} - PomiStore`;
    } else {
        document.getElementById('detalle-titulo').innerText = "Juego no encontrado";
        document.getElementById('detalle-descripcion').innerText = "El producto que buscas no está disponible en nuestro catálogo.";
    }
}

document.addEventListener('DOMContentLoaded', cargarDetalleProducto);