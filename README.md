# Aula Conecta

Sitio educativo para apoyar a docentes de Matemática y Estudios Sociales de primer año de bachillerato del Centro Escolar Antonia Galindo, Modalidad Flexible. Forma parte de una propuesta de mejora de Práctica Docente de la Licenciatura en Informática Educativa de la Universidad de El Salvador.

**Autores:** Kelvin Ariel Martínez Lara y Salvador Alexander Martínez Merino.

La propuesta se prepara para su aplicación y evaluación. El sitio no presenta mejoras del rendimiento como resultados ya comprobados. Este proyecto está listo para revisión y posterior publicación; crear los archivos no publica el sitio ni crea un repositorio por sí mismo.

## 1. Abrir el sitio localmente

1. Conserve juntos `index.html`, `assets/` y `materiales/`.
2. Abra `index.html` con un navegador actual mediante doble clic o la opción **Abrir con**.
3. Use el menú para navegar entre las nueve secciones.

No se requieren instalaciones, cuentas, dependencias, compilación ni variables de entorno. Las actividades y exportaciones de texto funcionan con los archivos descargados, sin conexión. Los enlaces a GeoGebra y a documentación externa necesitan conexión.

Para una revisión opcional mediante servidor local, si ya dispone de Python, ejecute desde la carpeta del proyecto:

```powershell
python -m http.server 8888 --bind 127.0.0.1
```

Abra [http://127.0.0.1:8888](http://127.0.0.1:8888) y termine el servidor con `Ctrl+C`. Este servidor solo facilita la revisión local y no es necesario para publicar en Vercel. Si Python no está instalado, utilice la apertura directa de `index.html`.

## 2. Archivos del proyecto

```text
index.html
assets/
  styles.css
  app.js
  favicon.svg
materiales/
  guia-docente.html
  matematica-ruta.html
  matematica-desafio.html
  sociales-pista.html
  sociales-aee.html
  rubricas.html
  protocolo-ia.html
  planificacion.html
  print.js
README.md
vercel.json
.gitignore
.vercelignore
VERIFICACION.md
```

La carpeta `tmp/` contiene trabajo de revisión y no debe publicarse. `.gitignore` la excluye al usar Git; la carga manual de archivos en GitHub requiere omitirla expresamente. `.vercelignore` también excluye del despliegue las capturas, los ZIP y el informe de verificación. El archivo `VERIFICACION.md` describe las comprobaciones realizadas y sus límites.

## 3. Modificar textos, estilos y actividades

- **Textos y estructura:** edite `index.html` con un editor de texto que conserve UTF-8. Cada sección tiene un identificador como `inicio`, `matematica` o `sociales`.
- **Diseño y adaptación a pantallas:** edite `assets/styles.css`. Incluye las reglas para teléfonos, tabletas, computadoras e impresión.
- **Interacciones:** edite `assets/app.js`. Allí están la navegación, el menú, los ejercicios, las pistas, las exportaciones y los controles de impresión.
- **Icono de pestaña:** sustituya o edite `assets/favicon.svg`.
- **Materiales:** edite el HTML correspondiente en `materiales/`; su estilo de impresión está incluido en cada archivo y `print.js` controla el botón de impresión.

Conserve los identificadores, nombres de campos y atributos `data-*` que utiliza JavaScript. Si cambia un identificador, actualice también los enlaces, etiquetas `for`, atributos ARIA y selectores que lo referencian. Para cambiar un ejercicio matemático, actualice el enunciado y procedimiento en `index.html`, las respuestas y pistas en `exerciseAnswers` de `assets/app.js` y el material imprimible relacionado.

Mantenga los datos del diagnóstico: 13 estudiantes inscritos, 9 respuestas en Matemática y 10 en Estudios Sociales. Las muestras pueden coincidir parcialmente y no se suman. El dato de 5 respuestas de Matemática significa **acceso a Internet**, sin afirmar que sea estable.

## 4. Materiales imprimibles y sustitución por PDF

Se incluyen ocho materiales reales en HTML, preparados para papel **carta**. No se presentan como archivos PDF ya generados. El botón **Imprimir o guardar como PDF** abre el material; su propio botón abre el diálogo del navegador. Allí puede imprimirlo o elegir **Guardar como PDF**.

| Material | Archivo |
| --- | --- |
| Guía docente completa | `materiales/guia-docente.html` |
| Matemática 1: ruta paso a paso | `materiales/matematica-ruta.html` |
| Matemática 2: desafío de radicales | `materiales/matematica-desafio.html` |
| Estudios Sociales 1: análisis PISTA | `materiales/sociales-pista.html` |
| Estudios Sociales 2: organizador AEE | `materiales/sociales-aee.html` |
| Rúbricas de evaluación | `materiales/rubricas.html` |
| Protocolo de IA y accesibilidad | `materiales/protocolo-ia.html` |
| Planificación y registro de seguimiento | `materiales/planificacion.html` |

Revise la vista previa: seleccione tamaño carta, escala 100 % o **Ajustar**, márgenes adecuados y desactive los encabezados y pies automáticos del navegador. La cantidad indicada de páginas es aproximada y depende de estas opciones. Los materiales tienen espacios para escribir y evitan fondos oscuros.

Para incorporar un PDF revisado:

1. Guárdelo dentro de `materiales/` con un nombre claro, por ejemplo `matematica-ruta.pdf`.
2. Abra la sección `descargas` de `index.html` y cambie el `href` de la tarjeta a `materiales/matematica-ruta.pdf`.
3. Cambie el texto del enlace a **Descargar PDF** y añada el atributo `download` si desea ofrecer la descarga directa.
4. Puede conservar un segundo enlace al HTML con el texto **Vista para imprimir**.
5. Actualice el número aproximado de páginas y abra el enlace para verificar el archivo.

Ejemplo de un enlace a un PDF que debe existir antes de incorporarlo:

```html
<a href="materiales/matematica-ruta.pdf" download>Descargar PDF</a>
```

Si mantiene enlaces con `target="_blank"`, conserve también `rel="noopener noreferrer"`. No cambie un botón a “Descargar PDF” mientras solo apunte a una página HTML. Mantenga los libros oficiales como referencia curricular; no incluya los PDF completos de los libros en el proyecto.

## 5. Actualizar enlaces externos

Busque el enlace en `index.html` y, cuando corresponda, en los materiales. Compruebe que la página pertenece a la institución o servicio esperado, que abre correctamente y que su contenido sigue siendo pertinente. Conserve direcciones HTTPS, `target="_blank"` y `rel="noopener noreferrer"`.

Las herramientas se describen como opciones que el docente debe revisar y adaptar. El sitio no integra formularios externos, cuentas ni una API de IA. Una futura actividad en Google Forms o Classroom requiere configuración y revisión docente propias; no queda creada al abrir estas orientaciones.

## 6. Subir los archivos a GitHub desde la web

1. Inicie sesión en GitHub y cree un repositorio para el proyecto.
2. En el repositorio, elija **Add file → Upload files**.
3. Arrastre `index.html`, `assets/`, `materiales/`, `README.md`, `vercel.json`, `.gitignore` y `.vercelignore`. Puede incluir `VERIFICACION.md` como documentación de revisión. Conserve las carpetas y sus nombres; `index.html` debe quedar en la raíz del repositorio.
4. Omita `tmp/`, `.vercel/`, archivos ZIP, documentos de diagnóstico y libros originales. Para el sitio basta con los archivos de la estructura de publicación.
5. Revise la lista de archivos y confirme la carga con **Commit changes**.
6. Abra las carpetas del repositorio y compruebe que, por ejemplo, `assets/app.js` no haya quedado suelto en la raíz.

En actualizaciones posteriores, conserve las mismas rutas para que continúen funcionando los enlaces. El repositorio puede conectarse a Vercel sin configurar GitHub Pages. Si decide usar GitHub Pages, recuerde que los encabezados de `vercel.json` solo se aplican en Vercel.

## 7. Importar y publicar posteriormente en Vercel

1. Inicie sesión en Vercel y elija **Add New → Project**.
2. Conecte GitHub e importe el repositorio del sitio.
3. Seleccione **Other** como framework.
4. Mantenga la carpeta raíz del proyecto en el nivel que contiene `index.html`.
5. No establezca comando de instalación ni comando de compilación. Si la interfaz pide anular un valor, déjelo vacío.
6. Utilice la raíz del proyecto como directorio de salida (`.`). El archivo `vercel.json` ya declara `framework: null`, comandos vacíos y `outputDirectory: "."`.
7. No añada variables de entorno: el sitio no las necesita.
8. Revise la configuración antes de pulsar **Deploy** y compruebe el resultado publicado antes de compartir el enlace.

Consulte la [documentación oficial de configuración de compilación de Vercel](https://vercel.com/docs/builds/configure-a-build) si los nombres de los controles cambian. Publicar es un paso posterior a la revisión de este proyecto; estos archivos no realizan el despliegue automáticamente.

## 8. Privacidad y seguridad

Las respuestas y selecciones se manejan en memoria durante la sesión del navegador. El sitio no utiliza `localStorage`, `sessionStorage`, base de datos, analítica, cookies propias ni llamadas a una API. No solicita nombres de estudiantes ni correos. Las descargas de texto se generan localmente mediante `Blob`.

**Al actualizar o cerrar la página puede perder la información que no haya descargado.** Los archivos descargados quedan bajo el control del dispositivo y de quien los utiliza. No introduzca datos personales en los campos abiertos ni en instrucciones que copie a herramientas de IA.

El proveedor de alojamiento puede procesar registros técnicos de acceso. Los enlaces externos abren servicios con sus propias condiciones y políticas. No se promete privacidad absoluta del alojamiento ni de esas plataformas.

En Vercel, `vercel.json` establece una política de seguridad de contenido y encabezados que bloquean conexiones desde el sitio, objetos incrustados e inserción en marcos. También desactiva cámara, micrófono y geolocalización. Los scripts se cargan únicamente desde el mismo sitio. La excepción `'unsafe-inline'` se aplica a **estilos**, porque los materiales incluyen CSS de impresión y estilos en el HTML; no permite scripts inline. Estos encabezados no se aplican al abrir archivos mediante `file://` ni por usar únicamente GitHub como repositorio.

## 9. Revisar desde un teléfono

Abra el enlace de una vista previa o del sitio publicado en un navegador del teléfono. Compruebe el menú, su cierre, el tamaño del texto, la escritura en campos, las pistas y las descargas. Pruebe orientación vertical y horizontal y amplíe el texto. Revise también una anchura de 320 píxeles con la vista adaptable de las herramientas del navegador de computadora.

Para una prueba local opcional en una red privada, puede ejecutar `python -m http.server 8888 --bind 0.0.0.0` y abrir en el teléfono `http://IP-LOCAL-DEL-EQUIPO:8888`, sustituyendo `IP-LOCAL-DEL-EQUIPO` por la dirección de su computadora. Ambos equipos deben estar en la misma red y el cortafuegos puede pedir acceso. Detenga el servidor al terminar. Este procedimiento es solo de revisión, no de alojamiento de producción.

Para utilizar las actividades sin conexión, copie o descargue **toda la carpeta del proyecto** y abra su `index.html`. El sitio no instala una aplicación ni un servicio de caché: visitar una vez una URL publicada no garantiza que todas sus páginas queden disponibles sin conexión.

## 10. Comprobar antes de compartir

Esta lista describe una revisión que debe hacerse sobre la versión que vaya a publicarse; no certifica por sí sola que se haya ejecutado.

- Abra las nueve secciones y compruebe el enlace activo. Pruebe enlaces directos como `#matematica` y el botón Atrás del navegador.
- Recorra el sitio con `Tab`, `Mayús+Tab`, `Enter` y `Espacio`. En tamaño móvil, abra el menú y ciérrelo con `Escape`; compruebe la devolución del foco.
- Marque y limpie los 15 criterios. Genere, edite, copie y limpie una instrucción para IA.
- Recorra los cinco pasos matemáticos. Pruebe en los desafíos `5√10`, `7√5`, `−√7` y `2√2`; el tercer ejercicio acepta coeficiente `−1`. Pruebe también una respuesta incorrecta y confirme que ofrece una pista.
- Exporte la reflexión, el análisis PISTA, el argumento AEE, la planificación y el registro. Abra cada `.txt` descargado y revise los acentos. En AEE, verifique que completar campos no se presenta como evaluación automática de calidad.
- Limpie los formularios y confirme que la página no afirma haber guardado las respuestas. Actualice la página solo después de descargar lo que desee conservar.
- Abra los ocho materiales, revise la vista previa de impresión y compruebe títulos, espacios de escritura, márgenes y páginas. Abra y cierre los desplegables y confirme que recuperan su estado después de imprimir.
- Compruebe todos los enlaces externos y cualquier PDF añadido. Un archivo debe existir antes de enlazarlo como descarga.
- Revise la consola de las herramientas de desarrollo del navegador para detectar errores. Compruebe que no aparecen solicitudes de red al escribir, comprobar respuestas o exportar textos; los archivos del propio sitio sí se descargan cuando se abre una versión alojada.
- Revise móvil, tableta y computadora, contraste, foco visible, ampliación del texto y ausencia de desplazamiento horizontal innecesario.
- Compruebe la versión desplegada en Vercel, no solo la copia local, y revise sus encabezados antes de compartirla.

## 11. Base curricular y adaptación del documento de propuesta

El documento de propuesta suministrado menciona una guía en Genially acompañada por PDF. Esta entrega adapta el recurso a un sitio estático HTML/CSS/JavaScript, con materiales HTML imprimibles, conforme a la solicitud actual. El documento original no se modifica automáticamente. Antes de la entrega académica, sus autores deben mantener coherentes la descripción del recurso y sus anexos con la versión que decidan presentar.

Las actividades de radicales corresponden a la Unidad 1, sección 1.1, página impresa 8 de Precálculo. Las actividades de Estudios Sociales se apoyan en **Ciudadanía y Valores**, Unidad 6, semana 1, páginas impresas 210–213. “Estudios Sociales” es el área del recurso; el título bibliográfico del libro proporcionado es “Ciudadanía y Valores”. Las fuentes del sitio son paráfrasis breves y organizadores didácticos; no reproducen páginas completas.

Referencias comprobadas en los créditos de los ejemplares proporcionados:

- Ministerio de Educación. (2019). *Precálculo: primer año de bachillerato. Libro de texto* (2.ª ed.; 6.ª reimp., 2025). El registro bibliográfico del colofón emplea el título *Matemática: primer año de bachillerato: libro de texto*. ISBN 978-99961-341-1-1.
- Ministerio de Educación. (2025). *Ciudadanía y Valores: primer año de bachillerato. Libro de texto* (1.ª ed.). ISBN en trámite, según el ejemplar.
- Martínez Lara, K. A., y Martínez Merino, S. A. (2026). *Propuesta de mejora DDP1109, Centro Escolar Antonia Galindo* [Documento académico de trabajo proporcionado por los autores]. Universidad de El Salvador.

Documentación oficial de apoyo:

- [Google: crear y calificar cuestionarios con Formularios de Google](https://support.google.com/docs/answer/7032287?hl=es).
- [Google: crear o reutilizar una rúbrica para una tarea](https://support.google.com/edu/classroom/answer/9335069?hl=es).
- [GeoGebra: Calculator Suite](https://help.geogebra.org/hc/en-us/articles/8379325433629-Calculator-Suite).
- [UNESCO: guía para el uso de IA generativa en educación e investigación](https://www.unesco.org/es/articles/guia-para-el-uso-de-ia-generativa-en-educacion-e-investigacion?hub=686).

Este recurso tiene fines educativos y no representa un sitio web oficial del Centro Escolar Antonia Galindo ni de la Universidad de El Salvador. Se utilizó inteligencia artificial para apoyar la organización, redacción y desarrollo técnico; los autores son responsables de revisar, adaptar y validar el contenido.
