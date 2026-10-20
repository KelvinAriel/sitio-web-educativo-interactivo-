/* Aula Conecta · JavaScript local. Sin dependencias. */
(function () {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const byId = id => document.getElementById(id);
  const pages = $$('[data-page]');
  const navLinks = $$('[data-route]');
  let currentPage = pages[0];
  let toastTimer;
  function announce(message) {
    clearTimeout(toastTimer);
    byId('global-status').textContent = message;
    toastTimer = setTimeout(() => { byId('global-status').textContent = ''; }, 6500);
  }
  function status(id, message, error = false) {
    const node = byId(id);
    node.textContent = message;
    node.classList.toggle('error', error);
  }
  const sidebar = byId('sidebar');
  const menuToggle = byId('menu-toggle');
  const menuClose = byId('menu-close');
  const backdrop = byId('nav-backdrop');
  const mobileQuery = window.matchMedia('(max-width: 900px)');
  let menuOpen = false;
  function setMenu(open, returnFocus = false) {
    menuOpen = Boolean(open && mobileQuery.matches);
    document.body.classList.toggle('menu-open', menuOpen);
    backdrop.hidden = !menuOpen;
    menuToggle.setAttribute('aria-expanded', String(menuOpen));
    menuToggle.setAttribute('aria-label', menuOpen ? 'Cerrar menú' : 'Abrir menú');
    sidebar.inert = mobileQuery.matches && !menuOpen;
    // El fondo queda fuera de la navegación por teclado al abrir el menú.
    $('.workspace').inert = menuOpen;
    $('.mobile-brand').inert = menuOpen;
    if (menuOpen) menuClose.focus();
    else if (returnFocus) menuToggle.focus();
  }
  menuToggle.addEventListener('click', () => setMenu(!menuOpen, true));
  menuClose.addEventListener('click', () => setMenu(false, true));
  backdrop.addEventListener('click', () => setMenu(false, true));
  function syncMenu() { setMenu(false); }
  if (mobileQuery.addEventListener) mobileQuery.addEventListener('change', syncMenu);
  else mobileQuery.addListener(syncMenu);
  document.addEventListener('keydown', event => {
    if (!menuOpen) return;
    if (event.key === 'Escape') { event.preventDefault(); setMenu(false, true); }
    if (event.key === 'Tab') {
      const focusable = $$('a[href],button:not(:disabled)', sidebar);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  function readHash() {
    try { return decodeURIComponent(window.location.hash.slice(1)); }
    catch (_) { return ''; }
  }
  function route(focus = true) {
    const hash = readHash();
    if (hash === 'contenido') { setMenu(false); byId('contenido').focus(); return; }
    const target = byId(hash);
    const page = target && target.closest('[data-page]') || pages[0];
    currentPage = page;
    pages.forEach(item => { item.hidden = item !== page; });
    const toolPanel = target && target.closest('[data-tool-panel]');
    if (toolPanel) selectTool(byId(toolPanel.getAttribute('aria-labelledby')), false);
    navLinks.forEach(link => {
      if (link.dataset.route === page.id) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    const heading = $('h1', page);
    document.title = (page.id === 'inicio' ? 'Aula Conecta' : heading.textContent + ' · Aula Conecta') + ' · Recurso educativo';
    setMenu(false);
    if (focus) {
      if (target && target !== page) {
        target.scrollIntoView({ block: 'start', behavior: 'auto' });
        const childHeading = target.matches('h1,h2,h3') ? target : $('h2,h3', target);
        if (childHeading) { childHeading.setAttribute('tabindex', '-1'); childHeading.focus({ preventScroll: true }); }
      } else {
        heading.focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }
  }
  window.addEventListener('hashchange', () => route(true));
  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[href^="#"]');
    if (anchor && anchor.getAttribute('href') === window.location.hash) {
      event.preventDefault(); route(true);
    }
  });

  // Pestañas: flechas, Inicio y Fin; siempre se conserva el texto sin JavaScript.
  const tabs = $$('[data-tool]');
  function selectTool(tab, focus) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      byId(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTool(tab, false));
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault(); selectTool(tabs[next], true);
    });
  });
  selectTool(tabs[0], false);

  const checklist = byId('checklist-form');
  function countChecks() {
    const count = $$('input:checked', checklist).length;
    byId('checklist-count').textContent = count + ' de 15 criterios';
  }
  checklist.addEventListener('change', countChecks);
  byId('check-all').addEventListener('click', () => {
    $$('input', checklist).forEach(input => { input.checked = true; }); countChecks();
  });
  checklist.addEventListener('reset', () => setTimeout(countChecks, 0));
  checklist.addEventListener('submit', event => event.preventDefault());

  // Los TXT se crean en el dispositivo. No hay envío al docente ni a un servidor.
  function downloadText(filename, content) {
    const blob = new Blob(['\uFEFF' + content.replace(/\r?\n/g, '\r\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = filename; link.hidden = true;
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }
  function validRequired(form, statusId) {
    let firstInvalid;
    $$('[required]', form).forEach(field => {
      const empty = !field.value.trim();
      field.setCustomValidity(empty ? 'Escribe una respuesta; los espacios no son suficientes.' : '');
      field.setAttribute('aria-invalid', String(empty));
      if (empty && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid || !form.checkValidity()) {
      status(statusId, 'Completa los campos obligatorios antes de continuar.', true);
      if (firstInvalid) firstInvalid.focus();
      form.reportValidity(); return false;
    }
    return true;
  }
  $$('input,textarea,select').forEach(field => {
    field.addEventListener('input', () => { field.setCustomValidity(''); field.removeAttribute('aria-invalid'); });
  });
  function labelledText(form, title) {
    const lines = ['AULA CONECTA', title, 'Trabajo local. Revisa y entrega por el medio acordado con el docente.', ''];
    $$('input[name],textarea[name],select[name]', form).forEach(field => {
      const label = $$('label', form).find(item => item.htmlFor === field.id);
      const heading = label ? label.textContent.replace(/\s+/g, ' ').trim() : field.name;
      lines.push(heading, field.value.trim() || '[Sin completar]', '');
    });
    return lines.join('\n');
  }
  function bindExport(formId, statusId, title, filename, completeRequired = false) {
    const form = byId(formId);
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (completeRequired && !validRequired(form, statusId)) return;
      const fields = $$('input[name],textarea[name]', form);
      const filled = fields.filter(field => field.value.trim()).length;
      if (!filled) { status(statusId, 'Escribe al menos una respuesta antes de descargar.', true); fields[0].focus(); return; }
      downloadText(filename, labelledText(form, title));
      const partial = filled < fields.length;
      status(statusId, partial ? 'Borrador descargado. Aún hay campos sin completar; puedes continuar y descargar otra versión.' : 'Texto descargado. Revisa el contenido y entrégalo por el medio acordado.');
      if (formId === 'aee-form') status(statusId, 'Argumento descargado. Se comprobó que completaste los tres apartados; el docente valorará su calidad.');
      announce('Se preparó tu archivo de texto. Revisa la carpeta de descargas.');
    });
    form.addEventListener('reset', () => {
      status(statusId, 'Campos limpiados. Las descargas anteriores permanecen en tu dispositivo.');
      $$('input,textarea,select', form).forEach(field => { field.setCustomValidity(''); field.removeAttribute('aria-invalid'); });
    });
  }
  bindExport('reflection-form', 'reflection-status', 'Matemática 1 · Reflexión sobre radicales', 'aula-conecta-reflexion-matematica.txt');
  bindExport('pista-form', 'pista-status', 'Estudios Sociales 1 · Análisis PISTA', 'aula-conecta-analisis-pista.txt');
  bindExport('aee-form', 'aee-status', 'Estudios Sociales 2 · Argumento AEE', 'aula-conecta-argumento-aee.txt', true);
  bindExport('plan-form', 'plan-status', 'Planificación docente', 'aula-conecta-planificacion.txt');
  bindExport('incident-form', 'incident-status', 'Registro general de incidencias · Sin datos personales', 'aula-conecta-incidencias.txt');

  const promptForm = byId('prompt-form');
  const promptResult = byId('prompt-result');
  const productSelect = byId('prompt-producto');
  const productDescriptions = {
    presentacion: 'Un guion de diapositivas con ejemplos y preguntas, para revisar antes de diseñarlo.',
    planificacion: 'Una secuencia de clase con tiempos, recursos, evidencias y alternativas de participación.',
    infografia: 'Un guion visual con mensajes breves, fuentes y una versión escrita accesible.',
    cuestionario: 'Preguntas con respuestas esperadas y comentarios explicativos para revisión docente.',
    actividad: 'Una tarea contextualizada con evidencia individual, rúbrica y oportunidad de corrección.',
    guion: 'Un guion de audio o video con narración, escenas y una alternativa escrita.'
  };
  function syncPromptProduct() {
    byId('prompt-cantidad-field').hidden = productSelect.value !== 'presentacion';
    byId('prompt-product-help').textContent = productDescriptions[productSelect.value];
  }
  productSelect.addEventListener('change', syncPromptProduct);
  syncPromptProduct();
  promptForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!validRequired(promptForm, 'prompt-status')) return;
    const value = name => promptForm.elements.namedItem(name).value.trim();
    const products = {
      presentacion: {
        name: 'una presentación educativa de ' + value('cantidad') + ' diapositivas',
        structure: 'Organiza cada diapositiva con título breve, idea central, ejemplo y una pregunta de comprobación. Sugiere un apoyo visual pertinente, sin inventar imágenes de fuentes. Incluye las respuestas esperadas por separado para revisión docente.'
      },
      planificacion: {
        name: 'un plan de clase',
        structure: 'Organiza inicio, desarrollo y cierre con tiempos orientativos, instrucciones, materiales, conocimientos previos y evidencias individuales. Incluye una comprobación de comprensión, retroalimentación y una continuación flexible en casa.'
      },
      infografia: {
        name: 'el guion de una infografía educativa',
        structure: 'Propón un título, hasta cinco bloques de mensajes breves, un ejemplo comprobado, sugerencias visuales, referencias y una pregunta de reflexión. Añade una versión equivalente en texto. No presentes imágenes o cifras no verificadas como evidencia.'
      },
      cuestionario: {
        name: 'un cuestionario formativo',
        structure: 'Presenta preguntas claras alineadas con el objetivo, al menos una que exija explicar el razonamiento y, por separado, una clave docente con justificación y comentarios ante errores frecuentes. Señala qué preguntas requieren revisión humana; no atribuyas corrección automática a respuestas abiertas.'
      },
      actividad: {
        name: 'una actividad de aprendizaje con rúbrica',
        structure: 'Incluye objetivo, recursos, pasos, tiempo orientativo, evidencia individual y una rúbrica breve de criterios observables con niveles descritos. Propón retroalimentación concreta, un segundo intento y una alternativa equivalente sin IA.'
      },
      guion: {
        name: 'un guion educativo de audio o video',
        structure: 'Organiza una apertura, una explicación breve, un ejemplo y un cierre con pregunta. Distingue narración, escenas o apoyos visuales y tiempos orientativos. Prepara transcripción, sugerencias de subtítulos y una ficha escrita equivalente. No afirmes haber producido un archivo audiovisual.'
      }
    };
    const product = products[value('producto')];
    promptResult.value = [
      'Actúa como apoyo a la preparación docente. Prepara como borrador ' + product.name + ' para ' + value('asignatura') + '.',
      'Tema: ' + value('tema') + '.',
      'Destinatarios: ' + (value('destinatarios') || 'primer año de bachillerato, Modalidad Flexible') + '.',
      'Objetivo de aprendizaje: ' + value('objetivo'),
      'Fuente autorizada indicada por el docente: ' + value('fuente'),
      value('extension') ? 'Duración o extensión orientativa: ' + value('extension') + '.' : '',
      'Usa únicamente información que pueda comprobarse en la fuente. Si no puedes consultarla o falta el contenido, pídelo y señala lo que requiere verificación. No inventes citas, páginas, datos, enlaces ni resultados.',
      product.structure,
      'Usa lenguaje comprensible, poco texto y recursos que puedan sustituirse por una ficha impresa. Evita videos obligatorios y no solicites cuentas de estudiantes.',
      'Para Matemática, muestra cada paso, comprueba las operaciones y explica los errores frecuentes. Para Estudios Sociales, diferencia hechos, opiniones y evidencia, reconoce autoría y ofrece preguntas abiertas sin imponer una posición.',
      'Incluye una propuesta de retroalimentación y una tarea breve de continuación en casa con alternativa sin conexión. No atribuyas mejoras de aprendizaje a una intervención no evaluada.',
      'No incluyas nombres, imágenes, calificaciones ni datos personales de estudiantes. El borrador deberá revisarse, adaptarse y reconocer el apoyo de IA antes de su uso.',
      value('extra') ? 'Indicaciones adicionales del docente: ' + value('extra') : ''
    ].filter(Boolean).join('\n\n');
    status('prompt-status', 'Instrucción preparada y editable. No se ha enviado a ninguna IA; revisa y copia el texto si decides utilizarlo.');
    promptResult.focus();
  });
  promptForm.addEventListener('reset', () => {
    setTimeout(() => { promptResult.value = ''; syncPromptProduct(); }, 0);
    $$('input,textarea,select', promptForm).forEach(field => { field.setCustomValidity(''); field.removeAttribute('aria-invalid'); });
    status('prompt-status', 'Campos e instrucción limpiados.');
  });
  byId('download-prompt').addEventListener('click', () => {
    if (!promptResult.value.trim()) { status('prompt-status', 'Genera o escribe una instrucción antes de descargar.', true); promptResult.focus(); return; }
    downloadText('aula-conecta-instruccion-ia.txt', promptResult.value.trim());
    status('prompt-status', 'Instrucción descargada. Revisa las fuentes antes de usar el contenido que produzca una IA.');
  });
  byId('copy-prompt').addEventListener('click', async () => {
    const value = promptResult.value.trim();
    if (!value) { status('prompt-status', 'Genera o escribe una instrucción antes de copiar.', true); promptResult.focus(); return; }
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Usar selección local');
      await navigator.clipboard.writeText(value);
      status('prompt-status', 'Instrucción copiada. Pégala manualmente en la herramienta que decidas usar.');
    } catch (_) {
      promptResult.focus(); promptResult.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch (_) { /* Selección manual disponible. */ }
      status('prompt-status', copied ? 'Instrucción copiada.' : 'Texto seleccionado. Usa Copiar en tu dispositivo o Ctrl+C / Cmd+C.');
    }
  });

  const mathSteps = $$('[data-math-step]');
  let mathStep = 0;
  function showMathStep(focus) {
    mathSteps.forEach((step, index) => { step.hidden = index !== mathStep; });
    byId('math-step-progress').value = mathStep + 1;
    byId('math-step-label').textContent = 'Paso ' + (mathStep + 1) + ' de 5';
    byId('math-prev').disabled = mathStep === 0;
    byId('math-next').disabled = mathStep === mathSteps.length - 1;
    if (focus) $('h3', mathSteps[mathStep]).focus({ preventScroll: true });
  }
  byId('math-prev').addEventListener('click', () => { mathStep = Math.max(0, mathStep - 1); showMathStep(true); });
  byId('math-next').addEventListener('click', () => { mathStep = Math.min(mathSteps.length - 1, mathStep + 1); showMathStep(true); });
  byId('math-restart').addEventListener('click', () => { mathStep = 0; showMathStep(true); });
  showMathStep(false);

  const answers = [
    { c: 5, r: 10, hint: 'Busca cuadrados perfectos: 40 = 4 × 10 y 90 = 9 × 10.', next: 'Al simplificar obtienes 2√10 y 3√10. Suma los coeficientes y conserva √10.' },
    { c: 7, r: 5, hint: 'Busca cuadrados perfectos: 80 = 16 × 5 y 45 = 9 × 5.', next: 'Al simplificar obtienes 4√5 y 3√5. Suma los coeficientes y conserva √5.' },
    { c: -1, r: 7, hint: '28 = 4 × 7 y 63 = 9 × 7. Conserva el signo de resta.', next: 'Obtienes 2√7 − 3√7. Calcula 2 − 3; el coeficiente debe ser negativo.' },
    { c: 2, r: 2, hint: '32 = 16 × 2 y 8 = 4 × 2. Conserva el signo de resta.', next: 'Obtienes 4√2 − 2√2. Resta los coeficientes y conserva √2.' }
  ];
  const solved = new Set();
  function updatePractice() { byId('practice-progress').textContent = solved.size + ' de 4 resueltos'; }
  function integer(text) {
    const normalized = text.trim().replace(/−/g, '-').replace(',', '.');
    if (!/^[+-]?\d+(?:\.0+)?$/.test(normalized)) return null;
    const value = Number(normalized);
    return Number.isSafeInteger(value) && Math.abs(value) <= 1000000 ? value : null;
  }
  $$('[data-exercise]').forEach(form => {
    const index = Number(form.dataset.exercise);
    const expected = answers[index];
    const cField = form.elements.namedItem('coeficiente');
    const rField = form.elements.namedItem('radicando');
    const preview = form.elements.namedItem('vista');
    const feedback = $('.exercise-feedback', form);
    let attempts = 0;
    function clearResult() {
      solved.delete(index); updatePractice(); form.classList.remove('correct');
      feedback.textContent = ''; feedback.className = 'exercise-feedback';
      const c = integer(cField.value), r = integer(rField.value);
      preview.value = c !== null && r !== null && r > 0 ? (c === 1 ? '' : c === -1 ? '−' : String(c)) + '√' + r : '';
    }
    [cField, rField].forEach(field => field.addEventListener('input', clearResult));
    form.addEventListener('submit', event => {
      event.preventDefault();
      const c = integer(cField.value), r = integer(rField.value);
      feedback.className = 'exercise-feedback error';
      if (c === null || r === null || r <= 0) {
        feedback.textContent = 'Escribe un coeficiente entero y un radicando entero mayor que cero. Para −√7, el coeficiente es −1.';
        const invalid = c === null ? cField : rField;
        invalid.setAttribute('aria-invalid', 'true'); invalid.focus(); return;
      }
      if (c === expected.c && r === expected.r) {
        solved.add(index); updatePractice(); form.classList.add('correct');
        feedback.className = 'exercise-feedback success';
        feedback.textContent = 'Correcto: ' + (c === -1 ? '−' : c === 1 ? '' : c) + '√' + r + '. El radicando está simplificado. Explica cómo obtuviste los coeficientes.';
      } else {
        attempts += 1;
        solved.delete(index); updatePractice(); form.classList.remove('correct');
        const equivalent = Math.sign(c) === Math.sign(expected.c) && c * c * r === expected.c * expected.c * expected.r;
        feedback.textContent = equivalent ? 'Tu expresión es equivalente, pero aún puede simplificarse. Busca un cuadrado perfecto en el radicando.' : (attempts === 1 ? expected.hint : expected.next);
      }
    });
    form.addEventListener('reset', () => {
      attempts = 0;
      [cField, rField].forEach(field => { field.setCustomValidity(''); field.removeAttribute('aria-invalid'); });
      $$('details', form).forEach(item => { item.open = false; });
      setTimeout(clearResult, 0);
    });
  });

  // La impresión conserva respuestas, abre procedimientos y restaura la vista.
  let printState = null;
  let requestedPrintTarget = null;
  function preparePrint() {
    if (printState) return;
    const target = requestedPrintTarget || currentPage;
    printState = { details: [], steps: [], hidden: [], copies: [] };
    document.body.classList.add('printing');
    let node = target;
    while (node && node !== document.body) {
      const parent = node.parentElement;
      if (!parent) break;
      Array.from(parent.children).forEach(sibling => {
        if (sibling !== node && !['SCRIPT', 'STYLE', 'LINK'].includes(sibling.tagName)) {
          sibling.setAttribute('data-print-hidden', ''); printState.hidden.push(sibling);
        }
      });
      node = parent;
    }
    $$('details', target).forEach(item => { printState.details.push([item, item.open]); item.open = true; });
    $$('[data-math-step]', target).forEach(item => { printState.steps.push([item, item.hidden]); item.hidden = false; });
    $$('[data-tool-panel]', target).forEach(item => { printState.steps.push([item, item.hidden]); item.hidden = false; });
    $$('input:not([type=checkbox]),textarea,select', target).forEach(field => {
      const copy = document.createElement('div');
      copy.className = 'print-answer'; copy.textContent = field.value.trim() || '[Sin completar]';
      field.insertAdjacentElement('afterend', copy); printState.copies.push(copy);
    });
  }
  function finishPrint() {
    if (!printState) return;
    printState.details.forEach(([item, open]) => { item.open = open; });
    printState.steps.forEach(([item, hidden]) => { item.hidden = hidden; });
    printState.hidden.forEach(item => item.removeAttribute('data-print-hidden'));
    printState.copies.forEach(item => item.remove());
    document.body.classList.remove('printing'); printState = null; requestedPrintTarget = null;
  }
  function printTarget(target) {
    requestedPrintTarget = target; preparePrint();
    try { window.print(); } catch (_) { finishPrint(); announce('Abre el menú del navegador para imprimir esta sección.'); }
  }
  $$('[data-print]').forEach(button => button.addEventListener('click', () => printTarget(byId(button.dataset.print))));
  $$('[data-print-current]').forEach(button => button.addEventListener('click', () => printTarget(currentPage)));
  window.addEventListener('beforeprint', preparePrint);
  window.addEventListener('afterprint', finishPrint);

  document.body.classList.add('enhanced');
  syncMenu();
  route(Boolean(window.location.hash));
})();
