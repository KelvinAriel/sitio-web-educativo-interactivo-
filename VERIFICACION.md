# Verificación de Aula Conecta

Actualización: 20 de octubre de 2026.

## Cambios de esta versión

- IA como apoyo transversal para consultar fuentes, preparar clases y crear o adaptar materiales; uso opcional y con revisión humana.
- Pestañas de NotebookLM y Canva con propósito, pasos, ejemplos, acceso y límites.
- Cinco rutas formativas: Forms (CETA/UNAM), GeoGebra (recurso oficial), Classroom (Mediateca EducaMadrid), NotebookLM (formación docente MINED El Salvador) y Canva (Design School).
- Videos mediante enlaces externos: sin reproductores, miniaturas remotas ni reproducción automática.
- Generador local para seis productos: presentación, plan, infografía, cuestionario, actividad con rúbrica y guion.
- Retirada del inicio de la tarjeta “Tu trabajo permanece en esta página”. La información de privacidad permanece en Referencias y créditos.
- Guía docente de ocho páginas y protocolo de tres, con vistas imprimibles y copia sin conexión sincronizada.

## Pruebas de esta actualización

Se ejecutaron **211 comprobaciones funcionales y estructurales con jsdom**, sin errores de JavaScript. Es un DOM simulado, no un navegador visual.

| Componente | Comprobación |
| --- | --- |
| Navegación | Nueve secciones, una visible a la vez, anclas a las pestañas y regreso a Inicio para una ruta desconocida. |
| Herramientas | Siete pestañas; selección y teclas Inicio/Fin. Los enlaces abren el panel antes de situar el foco. |
| Generador | Seis productos con estructura específica, fuente, contexto y extensión; diapositivas solo para presentación, rechazo de espacios y reinicio. |
| Matemática | Cinco pasos, cuatro respuestas correctas, signo menos Unicode, equivalencia sin simplificar y rechazo de radicando cero. |
| Exportaciones | Seis tipos de TXT con contenido etiquetado y sin valores indefinidos. No se envían a un docente ni a un servidor. |
| Lista y AEE | Recuento de 15 criterios y limpieza; AEE exige sus campos y recuerda la valoración humana. |
| Impresión | Preparación y restauración de la pestaña; los paneles se abren para imprimir herramientas completas. |
| Menú móvil | Apertura, fondo inerte y cierre con Escape bajo una condición de ancho simulada. |
| Estructura | Identificadores únicos, referencias ARIA válidas, campos etiquetados y enlaces externos protegidos. |
| CSS y privacidad | Hoja de estilo analizada; sin red ni persistencia de respuestas en la lógica de la aplicación. |
| Materiales | Ocho PDF, 21 páginas. Los dos PDF actualizados se renderizaron y revisaron visualmente; se conservaron los otros seis. |
| Copia sin conexión | ZIP sin archivos recursivos, con sitio, PDF y vistas imprimibles. Archivos y anclas locales comprobados. |

Los enlaces formativos se contrastaron con páginas de sus autores o instituciones. Esto no garantiza disponibilidad permanente ni reproducción en todas las redes. El video de Classroom es de 2022: el sitio lo advierte y enlaza la ayuda oficial actual. Las funciones de IA pueden variar por cuenta, plan, dispositivo o región.

## Límites

La instalación del navegador de pruebas no estuvo disponible. Las pruebas locales no certifican apariencia en un teléfono físico, interacción táctil, lector de pantalla ni el diálogo de impresión de cada navegador. La revisión visual de los PDF sí se realizó sobre las páginas renderizadas.

La publicación técnica no demuestra implementación ni efectos en el aprendizaje. Antes de una aplicación docente, revisar enlaces, permisos, fuentes, accesibilidad y alternativas de acceso con el grupo.
