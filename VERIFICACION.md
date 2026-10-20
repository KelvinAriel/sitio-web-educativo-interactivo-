# Revisión de Aula Conecta

Fecha de revisión: 19 de octubre de 2026.

## Comprobaciones realizadas

- Bibliografía y correspondencia de actividades contrastadas con los ejemplares proporcionados. El título del libro usado para Estudios Sociales es *Ciudadanía y Valores* (2025).
- Datos del diagnóstico contrastados con el documento de propuesta: 13 inscritos; muestras de 9 y 10, sin sumarlas.
- HTML: identificadores únicos, etiquetas asociadas a todos los controles, enlaces hash válidos, archivos locales existentes y enlaces externos con `noopener noreferrer`.
- Sintaxis de ambos archivos JavaScript comprobada con `node --check`.
- Analizador de respuestas matemáticas: 22 comprobaciones de formatos válidos e inválidos.
- Navegación de las nueve secciones, enlace activo y ausencia de desplazamiento horizontal comprobados en navegador de escritorio.
- Las nueve secciones caben en un ancho de 320 píxeles; el texto de las actividades usa al menos 16 píxeles en móvil. Escape cierra el menú y devuelve el foco al botón.
- Cinco pasos matemáticos: avance hasta el resultado, límite del último paso y reinicio comprobados.
- Los cuatro resultados correctos son reconocidos; la respuesta incorrecta recibe una pista. Se comprobó el coeficiente −1 en el tercer ejercicio.
- Lista de 15 criterios: marcar todo y limpiar comprobados.
- Cinco herramientas: selección y panel correspondiente comprobados.
- Generador local: generación y copia al portapapeles comprobadas.
- Descargas TXT de reflexión, PISTA y AEE comprobadas; el archivo AEE se reabrió y conserva acentos y respuestas. Planificación e incidencias usan la misma función de exportación con sus campos y destinos verificados.
- AEE con campos vacíos impide exportar y señala qué falta; completar los campos no se presenta como evaluación de calidad.
- Limpieza de formularios comprobada. Las respuestas no utilizan almacenamiento persistente ni llamadas a servidores.
- Los ocho materiales HTML se imprimieron a un búfer Carta para verificar sus páginas: 7, 2, 2, 3, 2, 2, 2 y 3. Total: 23 páginas. Se revisaron visualmente muestras de los materiales.
- La consola no mostró errores ni advertencias en el recorrido funcional de escritorio.
- `vercel.json` es JSON válido y configura una salida estática sin instalación ni compilación.

## Alcance y límites

La comprobación funcional se realizó por HTTP en un servidor local. La revisión automática del navegador rechazó la prueba directa mediante `file://`, porque su política solo admite HTTP y HTTPS; no se intentó eludir esa restricción. La estructura utiliza rutas relativas y scripts clásicos para permitir la apertura local, que debe revisarse también en el navegador del usuario.

El diálogo nativo de impresión de la actividad web no pudo completarse desde el navegador automatizado. Los ocho materiales independientes sí fueron verificados en salida Carta. Antes de compartir una versión publicada, conviene revisar también una impresión de formularios con respuestas largas y confirmar la restauración de los desplegables al cerrar la impresión.

El sitio no se ha publicado. Los encabezados de seguridad declarados deben comprobarse en el despliegue real de Vercel. Los libros y el documento de propuesta originales no se modificaron ni se incluyen en el paquete de publicación.
