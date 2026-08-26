Reto 5 | El Gran Showdown de los Frameworks CSS

Trabajo de Investigación, Producción Comparativa y Exposición Grupal
Ya habiendo estudiado las bases de la Clase 8 sobre qué es un Framework CSS y cómo interactúa con nuestro código a través de la cascada, llegó el momento de poner ese conocimiento a prueba en un entorno real de desarrollo!
🎯 Objetivo del Reto
Explorar dos frameworks CSS diferentes, comparar sus filosofías de trabajo y producir un mismo diseño base utilizando ambos entornos por separado. El propósito es demostrar de forma práctica cómo se puede lograr una interfaz idéntica utilizando herramientas con lógicas de construcción completamente distintas (Componentes vs. Utilidades).
Modalidad: Trabajo individual.
Asignación: Cada uno tiene asignado Tailwind de forma universal, sumado a un segundo framework alternativo del ecosistema actual.
Exposición: Presentación técnica presencial de un máximo de 20 minutos por reloj.
Prohibido usar NPM o Terminal: Al investigar los frameworks asignados, verán que las documentaciones oficiales sugieren instalarlos usando comandos como npm install. Ignoren esa sección. Para este reto, es obligatorio realizar la conexión de ambos frameworks utilizando exclusivamente el método CDN (etiquetas <link> o <script> de internet) directo en el HTML.
Parte 1: Investigación Teórica y Análisis Crítico
Cada uno debe realizar una investigación exhaustiva del framework alternativo asignado (usando Tailwind como punto de comparación constante) y plasmar los hallazgos en una presentación visual (Formato sugerido: PDF, Diapositivas o Canva). La defensa debe cubrir los siguientes puntos técnicos:
Ficha Técnica Básica: Origen, creador, sitio web oficial y versión estable actual.
Filosofía de Diseño: Se maneja por componentes cerrados (ej. Bootstrap, Bulma) o mediante clases utilitarias/atómicas (ej. Tailwind, UnoCSS)?
Curva de Aprendizaje y Flexibilidad: Qué tan amigable es la documentación para alguien que recién empieza y qué tan complejo resulta alterar sus colores y tamaños por defecto.
Infraestructura: Tamaño de la comunidad, cantidad de recursos/plantillas disponibles en la web y compatibilidad declarada con navegadores modernos.
Análisis Comparativo (Sintaxis): Mostrar un bloque de código de ejemplo de cómo estructuran ambos entornos un mismo elemento básico (un Botón, una Tarjeta de producto o una Barra de navegación).
Experiencia de Usuario (DevX): Una reflexión sobre cómo se sintieron trabajando bajo la lógica de cada herramienta.
Parte 2: Producción Comparativa de Código
Deberán desarrollar el mismo ejemplo de una web construyendo dos versiones desde cero absolutas (una carpeta totalmente independiente para cada entorno). No se permite reciclar hojas de estilo entre proyectos.
Estructura Obligatoria de la Interfaz:
Encabezado (Header): Contenedor semántico con el logotipo del producto y un menú de navegación funcional.
Sección Hero: Una imagen principal destacada que abarque el ancho del layout o actúe como portada del producto.
Cuerpo de Contenido: Una sección de texto con un título descriptivo, un párrafo introductorio y una grilla compuesta por 3 Cards (Ejemplo tarjetas de productos).
Llamado a la Acción: Un botón interactivo destacado (debe incluir la micro-interacción hover aprendida en la Clase 7).
Pie de Página (Footer): Barra de cierre con datos de copyright.
Página detalle del producto, cuando el usuario entra en un producto (Mostrar toda la info del producto como se hace en cualquier tienda digital)
Directivas de Maquetación:
Uso de Grillas: Ambas versiones deben implementar obligatoriamente el sistema de filas y columnas nativo de cada uno de los frameworks para ordenar todo el layout.
Comportamiento Adaptable: El diseño debe ser mobile first nativo. Al agrandar la pantalla, los frameworks deben encargarse de reordenar y apilar los elementos correctamente.
Mantenimiento de Identidad Visual: Las dos páginas deben lucir prácticamente idénticas al ojo del usuario. 
Estructura del Repositorio de Entrega
La entrega final del proyecto deberá respetar estrictamente el siguiente árbol de carpetas. Carpetas mal organizadas restarán puntos de entrega completa:
reto5-apellido/
├── version-con-Tailwind/
│   ├── index.html
│   ├── detalle_producto.html
│   ├── css/
│   │   └── estilos.css
│   └── img/
├── version-con-otro-framework/
│   ├── index.html
│   ├── detalle_producto.html
│   ├── css/
│   │   └── estilos.css
│   └── img/
├── presentacion-apellido.pdf
└── Google Doc con la investigación o un README.txt (Documento de texto breve indicando los nombres de los integrantes)
Asignación de Frameworks
Alumno
Frameworks Asignados
Facu Giacri
Tailwind, UnoCSS
Gabi Acuña
Tailwind, Bootstrap
Leo Rojo
Tailwind, Bulma
Valen Pomilio
Tailwind, UiKit
Martina, Francisco
Tailwind, Foundation
Ivo Roldan
Tailwind, Fomantic-UI
Robinet Marcos
Tailwind, Materialize


Tailwind, DaisyUI


Tailwind, WebAwesome


Tailwind, Material Design 3


Tailwind, Chakra UI


Tailwind, Ant Design


Tailwind, SPECTRE


Tailwind, Milligram

🏆 Éxitos en la investigación!


