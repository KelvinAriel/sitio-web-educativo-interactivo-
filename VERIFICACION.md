# Verificación del paquete

Fecha: 20 de octubre de 2026.

## Comprobaciones realizadas

| Componente | Resultado |
| --- | --- |
| Navegación | Nueve secciones, estado activo, anclas internas, retorno al inicio ante un enlace desconocido y salto al contenido. |
| Lista docente | Marcado de los 15 criterios, recuento y limpieza. |
| Herramientas | Selección de pestañas, navegación con flechas y teclas Inicio/Fin. |
| Matemática | Cinco pasos con límites de avance; cuatro respuestas correctas, signo menos Unicode, edición, dos niveles de pistas, equivalencia sin simplificar, rechazo de radicando cero y entradas vacías, reinicio. |
| Exportaciones | Seis tipos de TXT: reflexión, PISTA, AEE, planificación, incidencias e instrucción para IA. Se comprobó contenido, descarga parcial donde corresponde y tratamiento de texto como texto. |
| AEE | Exige los tres apartados; rechaza respuestas compuestas solo por espacios y permite limpiar. No evalúa calidad automáticamente. |
| Generador | Campos obligatorios, contexto de la instrucción, edición, copia alternativa, descarga y limpieza. No llama a una IA. |
| Impresión | Preparación de copias del texto escrito, apertura de procedimientos, selección del bloque y restauración de la vista tras el evento de impresión. |
| Menú móvil | Estado abierto/cerrado, fondo inerte, foco, recorrido de Tab, Escape y retorno al modo escritorio en una simulación de la condición de ancho. |
| Recursos locales | 119 referencias locales en el paquete principal y 117 en la copia sin conexión: archivos y anclas existentes. |
| HTML y accesibilidad estructural | 150 identificadores revisados sin duplicados dentro de cada página; etiquetas de los campos y 23 referencias ARIA válidas. Iconos decorativos fuera del lector de pantalla. |
| CSS y JavaScript | Hojas de estilo analizadas sin errores; sintaxis de los dos scripts válida. Sin llamadas de red ni persistencia de respuestas en el código de la aplicación. |
| PDF | Ocho archivos, 18 páginas en total, tamaño carta; dos páginas de rúbricas horizontales. Todas las páginas renderizadas y revisadas visualmente, sin desbordamientos detectados. |
| ZIP | Integridad de ambos archivos, contenido en la raíz, rutas relativas, `.nojekyll` y enlaces internos comprobados. La copia sin conexión no contiene un ZIP recursivo ni un enlace a otro ZIP ausente. |

Las funciones se comprobaron con **jsdom 26.1.0**, un DOM simulado. La ejecución final no registró errores de JavaScript. Los resultados de Matemática se contrastaron con el desarrollo de las fichas y los ejercicios de la propuesta. Las tarjetas de descarga muestran el tamaño real y el número de páginas de cada PDF.

## Alcance de la revisión

No estuvo disponible un navegador real en este entorno. Por tanto, esta revisión **no confirma la apariencia en pantallas reales, la interacción táctil, un lector de pantalla ni el resultado final del diálogo de impresión HTML**. Las reglas para adaptar columnas, menú, campos y tablas a distintos anchos están incluidas y fueron inspeccionadas en el código. La distribución fija de los PDF sí se revisó mediante imágenes de sus páginas.

Antes de compartir la URL publicada, abre el sitio en computadora y teléfono y recorre una actividad, una exportación TXT, una impresión, los PDF y la copia sin conexión. GitHub Pages solo podrá comprobarse en su dirección definitiva después de que el usuario publique el repositorio. El paquete no contiene una URL pública inventada.
