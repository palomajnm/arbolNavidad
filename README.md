🎄 Árbol de Navidad Animado 

 Una aplicación web interactiva que renderiza un árbol de navidad estilizado utilizando HTML5 Canvas. El proyecto destaca por una espiral de luces dinámica, efectos de partículas y controles en tiempo real para personalizar la experiencia visual.

🚀 Características

Renderizado con Canvas: Dibujo vectorial dinámico para la base del árbol, la estrella y la espiral de luces.
Animación en Tiempo Real: Sistema de rotación basado en requestAnimationFrame para un movimiento fluido.
Controles Interactivos:
Velocidad: Ajusta la rotación de las luces desde un deslizador (rango de -0.1 a 0.1).
Color: Selector de color para personalizar las luces de la espiral.
Interruptor: Botón de encendido/apagado que activa o detiene la animación.
Diseño Moderno: Interfaz oscura con efectos de resplandor (glow) mediante filtros CSS y sombras de Canvas.

🛠️ Tecnologías utilizadas

HTML5: Estructura semántica y contenedor de dibujo.
CSS3: Flexbox para diseño responsivo y efectos drop-shadow.
JavaScript: Lógica de animación, manipulación de gradientes y gestión de eventos del DOM.

📁 Estructura del Proyecto

├── index.html   # Estructura principal y controles de usuario

├── styles.css   # Estilos visuales y animaciones CSS

└── script.js    # Lógica del Canvas y motor de animación

⚙️ Funcionamiento Técnico

Base del Árbol: Se dibuja un triángulo con un degradado lineal (createLinearGradient) para simular profundidad.
Espiral de Luces: Utiliza funciones trigonométricas (Math.cos y un ángulo incremental) para posicionar partículas en forma de cono helicoidal.
La Estrella: Generada mediante un bucle que alterna radios internos y externos para crear las puntas doradas.
Bucle de Animación: La función animate limpia el lienzo y redibuja los elementos en cada frame, aplicando el angleOffset modificado por el usuario.

🖥️ Cómo ejecutarlo

Clona o descarga los tres archivos en una misma carpeta.
Abre el archivo index.html en cualquier navegador moderno.
Usa los controles del panel derecho para interactuar con el árbol.
