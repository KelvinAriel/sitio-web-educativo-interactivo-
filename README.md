# Aula Conecta

Sitio educativo para docentes de Matemática y Estudios Sociales de primer año de bachillerato, Modalidad Flexible, del Centro Escolar Antonia Galindo.

**El proyecto está preparado para GitHub Pages.** Es HTML, CSS y JavaScript estático: no requiere instalación, compilación, servidor propio ni claves. Los archivos están organizados para funcionar tanto en la raíz de un dominio como en una dirección de proyecto de GitHub Pages.

Sitio público: [Aula Conecta](https://kelvinariel.github.io/sitio-web-educativo-interactivo-/).

Actualización del 20 de octubre de 2026: IA como apoyo transversal al docente; orientaciones de NotebookLM y Canva; cinco rutas de tutoriales externos; seis tipos de instrucciones para IA; guía y protocolo ampliados. La información de privacidad permanece en Referencias y créditos, sin la tarjeta anterior del inicio.

## Abrirlo antes de publicar

1. Extrae **todo** el ZIP en una carpeta.
2. Abre `index.html` con un navegador actualizado. No lo abras dentro del archivo comprimido.
3. Explora Matemática, Estudios Sociales y Descargas. Las actividades y los PDF funcionan con los archivos extraídos. Los enlaces a servicios externos requieren Internet.

Las respuestas se mantienen en la página abierta. Para conservarlas, usa los botones de descarga de texto antes de cerrar o recargar. No llegan automáticamente al docente.

## Publicarlo en GitHub Pages

1. Entra en tu cuenta de [GitHub](https://github.com/) y crea un repositorio público. Puedes llamarlo `aula-conecta`. GitHub Pages está disponible para repositorios públicos con GitHub Free.
2. En el repositorio, elige **Add file → Upload files**. Sube **el contenido extraído del ZIP**, manteniendo las carpetas `assets` y `materiales`. `index.html` debe quedar directamente en la raíz del repositorio. No subas únicamente el ZIP ni una carpeta que contenga todo el proyecto dentro de otro nivel.
3. Confirma la carga con **Commit changes**. Incluye `.nojekyll`; si tu explorador oculta ese archivo, puedes crearlo desde **Add file → Create new file** con ese nombre y una línea en blanco.
4. Abre **Settings → Pages**. En **Build and deployment**, configura **Source: Deploy from a branch**. Selecciona la rama **main** y la carpeta **/(root)**. Pulsa **Save**. Si tu rama principal tiene otro nombre, selecciona la que contiene `index.html`.
5. Espera a que termine la publicación y abre **Visit site**, o copia la dirección que GitHub muestre en Pages. Esa es la URL pública para compartir. No uses como enlace del sitio la dirección de la página del repositorio.
6. Revisa esa dirección en computadora y teléfono: navegación, una respuesta correcta e incorrecta, descarga TXT, los ocho PDF, impresión y copia sin conexión. Después incorpora **esa URL real** a la propuesta y al documento que entregarás.

No tienes que configurar un dominio ni añadir credenciales. Este repositorio ya tiene una dirección pública; los pasos anteriores sirven también como referencia para publicar una copia. Las instrucciones no requieren crear un proyecto de Node ni ejecutar un comando de instalación.

Documentación oficial consultada para la configuración:

- [Crear un sitio de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
- [Configurar la fuente de publicación](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Qué incluye

| Sección | Contenido y funcionamiento |
| --- | --- |
| Inicio | Propósito, acceso a recursos y alternativas de participación. |
| Diagnóstico | Datos contextualizados con denominadores y límites explícitos. |
| Ruta docente | Seis pasos y lista interactiva de 15 criterios. |
| Herramientas y tutoriales | Siete pestañas: WhatsApp, Forms, GeoGebra, Classroom, IA para docentes, NotebookLM y Canva. Cinco rutas formativas externas y alternativa ligera. Generador local de instrucciones para presentación, plan, infografía, cuestionario, actividad con rúbrica y guion. |
| Matemática | Ejemplo de radicales en cinco pasos, reflexión descargable y cuatro ejercicios con comprobación y pistas. |
| Estudios Sociales | Dos fuentes para análisis PISTA y organizador AEE; descarga individual de los textos escritos. |
| Seguimiento | Rúbricas, indicadores, planificación y registro general de incidencias con exportación TXT. |
| Descargas | Ocho PDF, ocho vistas imprimibles y una copia del sitio para trabajar sin conexión. |
| Referencias y créditos | Fuentes, autoría, reconocimiento de IA y privacidad. |

### Materiales incluidos

- Guía docente completa: 8 páginas.
- Matemática 1: 1 página.
- Matemática 2: 2 páginas; la clave docente está separada en la segunda página.
- Sociales 1, PISTA: 2 páginas.
- Sociales 2, AEE: 1 página.
- Rúbricas: 2 páginas en orientación horizontal.
- Protocolo de IA y accesibilidad: 3 páginas.
- Planificación y registro: 2 páginas.

Los PDF son tamaño carta. Para las vistas HTML, usa el botón **Imprimir o guardar PDF** y revisa la vista previa; la distribución puede variar entre navegadores. Los PDF incluidos conservan una distribución fija.

## Archivos del proyecto

```text
index.html
.nojekyll
README.md
VERIFICACION.md
assets/
  app.js
  styles.css
  favicon.svg
  print.css
  print.js
materiales/
  [ocho archivos PDF]
  aula-conecta-sin-conexion.zip
  imprimir/
    [ocho vistas HTML]
```

El ZIP interior es una copia autónoma: incluye el sitio y los PDF, y sustituye el enlace de descarga de otra copia por una explicación de uso sin conexión. No contiene otro ZIP dentro de sí mismo. Extrae sus archivos antes de usarlo.

## Funcionamiento y privacidad

- No utiliza cuentas, base de datos, analítica, cookies de seguimiento ni almacenamiento de respuestas entre sesiones.
- Las respuestas se mantienen en memoria mientras está abierta la página. No se envían a un servidor; el servicio de alojamiento sí puede procesar registros técnicos.
- Los botones de exportación generan TXT en el dispositivo. El estudiante debe entregar el archivo por el canal acordado.
- El generador de instrucciones no consulta ni se conecta a una IA. Ofrece texto editable para copiar manualmente.
- La IA se propone para consultar fuentes, planificar clases y preparar materiales; no como sustituto del docente ni como requisito para estudiantes. NotebookLM y Canva pueden exigir cuenta, conexión o funciones sujetas al plan.
- Los tutoriales son enlaces externos, sin reproductores incrustados ni reproducción automática. Hay pasos escritos, ayudas oficiales y materiales imprimibles. La interfaz de un video antiguo puede diferir de la actual.
- Las actividades matemáticas comprueban resultados y ofrecen pistas; no asignan calificaciones oficiales. PISTA y AEE requieren valoración docente.
- Forms y Classroom son apoyos opcionales que cada docente debe configurar con su cuenta. No hay formularios ni cursos externos de ejemplo que aparenten estar activos.
- No se incluyen libros completos, documentos de estudiantes, fotos personales ni datos individuales del diagnóstico.

## Editar o mantener el recurso

Los textos están en `index.html`, el diseño en `assets/styles.css` y las funciones en `assets/app.js`. En este último archivo, la constante `answers` contiene las respuestas y las pistas del desafío: si cambias los ejercicios, actualiza también el HTML, el PDF y su vista imprimible.

Para modificar una ficha, actualiza su PDF y el HTML del mismo nombre dentro de `materiales/imprimir`. Los datos de páginas y tamaño de las tarjetas deben seguir correspondiendo al PDF. Evita agregar imágenes pesadas, fuentes externas o videos obligatorios.

Revisa los tutoriales antes de cada uso y al menos una vez por período académico: autoría, idioma, vigencia, acceso desde teléfono y correspondencia con la interfaz actual. No exijas suscripciones ni copies videos de terceros al repositorio. La selección de un tutorial no implica adoptar todas sus recomendaciones.

Cuando cambies archivos, actualiza también `materiales/aula-conecta-sin-conexion.zip`: crea una copia de los archivos del sitio, excluye ese ZIP, y en la copia sustituye el bloque de descarga sin conexión por un texto que indique que ya es una copia local. Comprime **el contenido** de esa copia. Esta precaución evita una descarga que apunte a un ZIP ausente dentro de la versión sin conexión.

La publicación estática no exige herramientas de desarrollo. Un cambio guardado en la rama publicada se reflejará cuando termine la nueva publicación de Pages. Si aún ves la versión anterior, vuelve a cargar la página y revisa el estado de publicación en GitHub.

## Autoría y contexto

Kelvin Ariel Martínez Lara y Salvador Alexander Martínez Merino. Licenciatura en Informática Educativa, Facultad de Ciencias Naturales y Matemática, Universidad de El Salvador. Propuesta de Mejora, Práctica Docente DDP1109, ciclo II de 2026.

Se utilizó IA como apoyo para organizar, redactar borradores y desarrollar el recurso; los autores deben revisar y validar el contenido académico de la versión entregada. Es un recurso académico, sin carácter de sitio oficial del centro escolar o de la UES. El diagnóstico contextualiza el diseño; no demuestra efectos de una intervención implementada.

Versión preparada: 20 de octubre de 2026. Consulta `VERIFICACION.md` para conocer las comprobaciones realizadas y sus límites.
