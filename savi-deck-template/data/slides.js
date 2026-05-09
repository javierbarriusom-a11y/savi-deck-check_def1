// Edita este archivo para crear una nueva presentacion.
// Cada objeto representa una slide y usa los layouts definidos en scripts/deck.js.
window.DECK_SLIDES = [
  {
    theme: "dark",
    eyebrow: "Commercial deck · 2026 · Frigo centenario",
    title: "100 años de historia. El momento de conocer a tu consumidor.",
    subtitle: "Programa de engagement, fidelizacion y gamificacion para convertir el centenario de Frigo en una comunidad D2C medible, activable y escalable.",
    layout: "cover",
    foot: "Just One Frigo. Un programa para construir los proximos 100."
  },
  {
    eyebrow: "Agenda · estructura",
    title: "Una propuesta para pasar de campaña a sistema.",
    subtitle: "La logica del deck: contexto, oportunidad, concepto, mecanicas, despliegue e impacto.",
    layout: "agenda",
    items: [
      ["Punto de partida", "Historia, mercado, consumidor y presion competitiva."],
      ["Oportunidad estrategica", "El centenario como catalizador de D2C, data y comunidad."],
      ["100 Momentos Frigo", "Arquitectura del programa y experiencia conversacional."],
      ["Palancas y mecanicas", "WhatsApp, validacion, niveles, gamificacion, viralidad y narrativa."],
      ["Despliegue e impacto", "Roadmap, KPIs, piloto, proyeccion y proximos pasos."]
    ]
  },
  {
    theme: "red",
    eyebrow: "01",
    title: "El punto de partida",
    subtitle: "Historia, mercado, consumidor y presion de marca blanca.",
    layout: "chapter"
  },
  {
    eyebrow: "01 · Contexto de mercado",
    title: "El helado vende mas, pero la marca compite peor si no posee la relacion.",
    subtitle: "El centenario no es solo una efemeride: es una ventana para transformar recuerdo masivo en identidad, permiso y recurrencia.",
    layout: "stats",
    stats: [
      ["140M L", "helado consumido en hogares espanoles entre junio 2023 y mayo 2024."],
      ["650M EUR", "facturacion del sector en ese periodo, con crecimiento de valor por precio."],
      ["80,7%", "del volumen se concentra entre abril y septiembre."],
      ["65%", "de los litros se compran en supermercado."]
    ],
    foot: "Fuente: MAPA, Panel de Consumo Alimentario, nota 19/08/2024."
  },
  {
    theme: "ice",
    eyebrow: "01 · Presion competitiva",
    title: "La marca de distribucion ya marca el ritmo de la categoria.",
    subtitle: "Cuando el retailer controla lineal, precio y dato, la marca necesita una capa relacional propia para defender valor sin depender solo de promocion.",
    layout: "stats",
    stats: [
      ["83,6%", "cuota MDD en volumen en helados, segun Mercasa 2024."],
      ["64,7%", "cuota MDD en valor, especialmente fuerte en tarrinas y formatos familiares."],
      ["377,9M L", "produccion industrial espanola de helado en 2024."],
      ["-6%", "variacion de produccion industrial frente a 2023."]
    ],
    foot: "Fuentes: Mercasa, Alimentacion en Espana 2024/2025; Eurostat, EU ice cream production 2024."
  },
  {
    eyebrow: "01 · Historia",
    title: "100 años de momentos que ya viven en la memoria.",
    subtitle: "La marca tiene un activo cultural dificil de replicar: verano, playa, gondolero, cucurucho, familia y nostalgia. El programa convierte ese capital emocional en participacion y data.",
    layout: "timeline",
    items: [
      ["1927", "Fundacion Frigo Barcelona", "Primer fabricante industrial de helados en Espana."],
      ["1959", "Nace el cono protegido", "El chocolate protege el cucurucho y crea ritual."],
      ["1976", "Frigo llega a Espana", "Verano, playa y cartel como icono cotidiano."],
      ["1982", "Just One Frigo", "El jingle queda instalado en la memoria colectiva."],
      ["1998", "HeartBrand", "Unificacion de identidad global."],
      ["2027", "100 años", "La hora de celebrar con los fans."]
    ]
  },
  {
    eyebrow: "01 · Mercado y consumidor",
    title: "El helado evoluciona de producto impulso a plataforma relacional.",
    subtitle: "La compra sigue siendo emocional y estacional. La oportunidad es convertir cada impulso en una senal propia y una razon para volver.",
    layout: "cards",
    cols: 4,
    items: [
      ["El mercado evoluciona", "Experiencias personalizadas y omnicanal, mas alla del descuento."],
      ["Consumidor digital", "WhatsApp permite fidelizacion sin descarga y con baja friccion."],
      ["Gamificacion", "La participacion se acelera cuando la compra se convierte en reto."],
      ["First-party data", "El centenario es la excusa legitima para pedir datos y permiso."]
    ]
  },
  {
    eyebrow: "01 · Consumidor",
    title: "Tres generaciones. Una marca.",
    subtitle: "Nostalgia + novedad = fidelizacion. El reto no es recordar Frigo; es hacer que el recuerdo produzca una nueva accion medible.",
    layout: "cards",
    cols: 3,
    items: [
      ["Boomers & Gen X", "45-65 · Vivieron Just One Frigo. Alta fidelidad emocional; responden a experiencias retro y ediciones limitadas."],
      ["Millennials", "28-44 · WhatsApp nativo. Buscan conveniencia, valor tangible y dinamicas que puedan compartir."],
      ["Gen Z", "18-27 · Coleccionan momentos. Quieren misiones, badges, rankings, drops y UGC."]
    ]
  },
  {
    theme: "lemon",
    eyebrow: "01 · Lectura estrategica",
    title: "Frigo tiene memoria. Le falta memoria de cliente.",
    subtitle: "La ventaja del centenario es que permite pedir participacion sin sonar transaccional: la gente no entra solo por un premio, entra para formar parte de la historia.",
    layout: "compare",
    items: [
      ["Hoy", "Compra por impulso, dato fragmentado, presion MDD, poca capacidad de reactivacion."],
      ["Con 100 Momentos", "Identidad, compra verificada, canal propio, preferencias, frecuencia y permiso activable.", "Activo D2C"]
    ]
  },
  {
    theme: "blue",
    eyebrow: "02",
    title: "La oportunidad",
    subtitle: "El centenario como catalizador estrategico.",
    layout: "chapter"
  },
  {
    eyebrow: "02 · North star",
    title: "Convertir el centenario en el mayor evento de fidelizacion FMCG en Espana.",
    subtitle: "Crear una comunidad de fans que trascienda el producto y perdure mas alla del aniversario.",
    layout: "image-split",
    image: "assets/frigo-centenario-playa-familia.png",
    cols: 3,
    items: [
      ["Activar la nostalgia", "Transformar recuerdos colectivos de 100 años en activo de marca monetizable y medible."],
      ["Digitalizar la relacion", "Construir un canal D2C propietario, escalable y activable sin depender del retailer."],
      ["Proyectar el futuro", "Conectar la marca con nuevas generaciones mediante juego, data y experiencias."]
    ]
  },
  {
    eyebrow: "02 · Tesis estrategica",
    title: "El cartel no anuncia. El cartel ES la interfaz.",
    subtitle: "Sin app. Sin friccion. Sin esperar al packaging perfecto. El QR en el cartel iconico activa WhatsApp y convierte cada punto de contacto en una puerta de entrada al programa.",
    layout: "poster",
    image: "assets/frigo-menu-board-collage.jpg",
    items: [
      ["Antes", "Cartel -> venta -> silencio. Frigo no sabe quien compro, donde participo ni como volver a activar."],
      ["Ahora", "Cartel + QR -> WhatsApp -> relacion. Identidad, compra, canal, frecuencia, preferencias y permiso."]
    ]
  },
  {
    eyebrow: "02 · Apuestas",
    title: "Cinco apuestas para que el aniversario no muera en septiembre.",
    subtitle: "La campaña funciona como sistema operativo: cada mecanica suma compra, contenido, permiso o aprendizaje.",
    layout: "cards",
    cols: 5,
    items: [
      ["QR dinamico", "Cada soporte mide origen, canal y contexto."],
      ["Compra verificada", "Selfie, ticket, pincode, geofencing o keyword."],
      ["Juego acumulativo", "Puntos, rachas, niveles y coleccionismo."],
      ["Comunidad local", "Ciudades, squads, rankings y embajadores."],
      ["Data accionable", "RFM, preferencias y next-best-action."]
    ]
  },
  {
    theme: "red",
    eyebrow: "03",
    title: "El concepto del programa",
    subtitle: "100 Momentos Frigo.",
    layout: "chapter"
  },
  {
    eyebrow: "03 · 100 Momentos Frigo",
    title: "Cada compra desbloquea un Momento.",
    subtitle: "Un programa tematico alrededor de los 100 años de la marca: una pieza de historia, un recuerdo compartido y una recompensa del centenario.",
    layout: "cards",
    cols: 4,
    items: [
      ["Colecciona Momentos", "Pincodes, tickets, QR, selfie proof o geofencing segun canal."],
      ["Instant Win", "Gana como en el 82: tension, sorpresa y recompensa inmediata."],
      ["Niveles", "Clasico, Classico y Centenario con perks progresivos."],
      ["WhatsApp", "Relacion bidireccional, sin descarga, 24/7 y con consentimiento."]
    ],
    foot: "1927 · 1959 · 1976 · 1982 · 1998 · 2027"
  },
  {
    eyebrow: "03 · Arquitectura",
    title: "Todos los canales. Un solo WhatsApp.",
    subtitle: "La arquitectura separa donde se compra de donde se genera alcance, trafico y conversacion, manteniendo un unico identificador y una misma capa de datos.",
    layout: "channel-groups",
    groups: [
      {
        title: "Canales de venta",
        items: [
          ["Impulso", "QR en cartel iconico, nevera o gondola. Instant win + puntos. Validacion por selfie proof o geofencing."],
          ["Restauracion / ocio", "QR en PLV, ticket o sobremesa. Ticket upload + puntos por importe. Validacion OCR Savi."]
        ]
      },
      {
        title: "Canales de comunicacion y marketing",
        items: [
          ["Mass media", "QR en TV/OOH o keyword. Registro, instant win y referral para convertir cobertura en opt-in."],
          ["Social media", "Link dinamico, influencers o paid social. UGC contest + puntos. Validacion por hashtag y revision."]
        ]
      }
    ]
  },
  {
    eyebrow: "03 · Customer journey",
    title: "Del cartel al fan en 90 segundos.",
    subtitle: "La experiencia debe ser corta, reconocible y suficientemente divertida como para repetirse.",
    layout: "journey",
    items: [
      ["Ve el cartel", "Canal impulso, PLV, mass media o social."],
      ["Escanea el QR", "QR dinamico o link social."],
      ["Abre WhatsApp", "Sin app y sin registro complejo."],
      ["Participa", "Selfie, ticket, keyword o pincode."],
      ["Gana", "Premio inmediato, puntos o progreso."]
    ],
    foot: ">95% apertura WhatsApp como hipotesis operativa; validar por plantillas, opt-in y pacing."
  },
  {
    eyebrow: "03 · Validacion",
    title: "Todas las compras cuentan. Sin depender de un unico trigger.",
    subtitle: "Pincode on-pack cuando exista. QR + selfie/ticket/geofencing/keyword cuando el canal lo requiera. El diseno reduce friccion y maximiza cobertura.",
    layout: "cards",
    cols: 5,
    items: [
      ["Selfie Proof", "Foto con helado; IA valida visibilidad del producto Frigo."],
      ["Ticket OCR", "Producto, importe, fecha y establecimiento."],
      ["Geofencing", "Participacion vinculada al punto de venta."],
      ["Keyword unica", "Atribucion por soporte o bloque de medios."],
      ["Pincode on-pack", "Codigo unico: instant win + puntos con antifraude."]
    ]
  },
  {
    theme: "ice",
    eyebrow: "04 · WhatsApp D2C",
    title: "WhatsApp es la app de Frigo. Pero sin pedir que nadie descargue nada.",
    subtitle: "El canal conversacional conecta activacion fisica, prueba de compra, reward y siguiente accion.",
    layout: "phone",
    items: [
      ["Escanea", "QR en cartel centenario."],
      ["Registra", "Opt-in, edad y permiso."],
      ["Participa", "Sube ticket o foto."],
      ["Acumula", "Puntos, rachas y nivel."],
      ["Canjea", "Premio o experiencia."]
    ]
  },
  {
    eyebrow: "04 · Arquitectura hibrida",
    title: "El QR no es un destino. Es un router de experiencia.",
    subtitle: "Cada QR puede decidir si conviene abrir WhatsApp, una landing con registro/login o una experiencia embebida, manteniendo una identidad unica de usuario.",
    layout: "cards",
    cols: 4,
    items: [
      ["WhatsApp first", "Conversacion, opt-in, recordatorios, ticket simple, puntos y atencion inmediata."],
      ["Landing con login", "Registro ligero, magic link, OTP o social login cuando la mecanica necesita sesion."],
      ["Juego embebido", "Ruletas, trivias avanzadas, albumes, rankings o dinamicas visuales que no caben bien en chat."],
      ["Vuelta al canal", "Resultado, puntos, premio y siguiente accion vuelven a WhatsApp para activar recurrencia."]
    ]
  },
  {
    eyebrow: "04 · Landings jugables",
    title: "Las mecanicas complejas viven mejor en una landing.",
    subtitle: "WhatsApp sigue siendo el canal relacional. La landing aporta interfaz, estado de juego y login cuando la experiencia necesita mas control visual o tecnico.",
    layout: "journey",
    items: [
      ["Escanea QR", "El soporte identifica origen, ciudad, canal, campaña y contexto."],
      ["Registro / login", "Edad, consentimiento y usuario unico antes de jugar o acumular progreso."],
      ["Juega en landing", "Ruleta, album, trivia avanzada, mapa, puzzle, ranking o instant win visual."],
      ["Valida compra", "Ticket OCR, selfie proof, pincode o geofencing, segun el canal."],
      ["Recibe seguimiento", "WhatsApp confirma puntos, premio, nivel y proxima mision."]
    ],
    foot: "Regla de diseno: chat para relacion; landing para interfaz compleja; data layer unico para ambos."
  },
  {
    eyebrow: "04 · Niveles",
    title: "De comprador ocasional a fan del centenario.",
    subtitle: "La logica de diseno: siempre ganar algo, siempre avanzar, siempre tener una razon para volver.",
    layout: "cards",
    cols: 3,
    items: [
      ["Clasico · 0-199 puntos", "Instant win por compra, catalogo basico y noticias de marca."],
      ["Fan / Classico · 200-499", "Acceso anticipado, premio trimestral y 1.5x puntos en temporada."],
      ["Centenario · 500+", "Eventos VIP, edicion limitada, 2x puntos y experiencias irrepetibles."]
    ]
  },
  {
    theme: "dark",
    eyebrow: "04",
    title: "Las palancas del programa",
    subtitle: "Canal, mecanicas, niveles, gamificacion y comunidad.",
    layout: "chapter"
  },
  {
    eyebrow: "04 · Mecanicas",
    title: "Diez mecanicas del centenario. Agrupadas por objetivo. Apilables.",
    subtitle: "No hay que activarlas todas a la vez: el valor esta en elegir la combinacion que mejor mueve adquisicion, frecuencia o notoriedad.",
    layout: "cards",
    cols: 4,
    items: [
      ["Frecuencia", "Trivia diaria · Ruleta del 100 · Desafio Flash 72h."],
      ["Coleccionismo", "Bingo · Album digital · Maquina del Tiempo."],
      ["Comunidad & viral", "Frigo Squads · Embajador del Verano · Treasure Hunt."],
      ["Narrativa", "La Prediccion del Verano."]
    ]
  },
  {
    eyebrow: "04 · Frecuencia",
    title: "El motor diario de compra recurrente.",
    subtitle: "Activo todos los dias, no solo durante una ventana promocional. Gamifica habito, urgencia y retorno.",
    layout: "cards",
    cols: 3,
    items: [
      ["Just One Challenge", "Trivia diaria sobre historia de Frigo. Sin compra obligatoria; con compra puntos x2. Rachas: 7 dias = bonus."],
      ["La Ruleta del 100", "Cada lunes, quien valido compra gira. 100 premios, ventana de 24h y Premio Misterio VIP."],
      ["Desafio Flash 72h", "Reto de fin de semana: compra X productos = puntos dobles o premio directo."]
    ]
  },
  {
    eyebrow: "04 · Coleccionismo",
    title: "El consumidor colecciona historia. Y prueba mas portfolio.",
    subtitle: "El coleccionismo convierte SKUs, eras y recuerdos en un progreso visible.",
    layout: "cards",
    cols: 3,
    items: [
      ["Bingo del Centenario", "25 SKUs Frigo: linea = premio; bingo = gran premio. Incentiva cross-SKU trial."],
      ["Album del Centenario", "10 cromos digitales de momentos historicos. Duplicados intercambiables via WhatsApp."],
      ["Maquina del Tiempo", "20 cartas de 5 eras. Completar una era activa premios; completar todas activa gran premio."]
    ]
  },
  {
    eyebrow: "04 · Comunidad & viralidad",
    title: "Que los fans hagan el trabajo de difusion.",
    subtitle: "Las mecanicas convierten participacion en ranking, orgullo local, contenido social y media ganada.",
    layout: "cards",
    cols: 3,
    items: [
      ["Frigo Squads", "Competicion entre ciudades. La ciudad con mas compras validadas gana un evento exclusivo."],
      ["Embajador del Verano", "UGC por WhatsApp, votacion conversacional y top 100 embajadores oficiales."],
      ["Treasure Hunt", "10 puntos iconicos Frigo en Espana. Geofencing, badges y ranking local en tiempo real."]
    ]
  },
  {
    theme: "blue",
    eyebrow: "04 · Narrativa",
    title: "La Prediccion del Verano convierte data en noticia.",
    subtitle: "El consumidor predice cual sera el helado mas vendido del verano del centenario. Solo votan quienes hayan validado 5+ compras.",
    layout: "cards",
    cols: 4,
    items: [
      ["Arco temporal", "Junio apertura, agosto countdown, septiembre reveal."],
      ["Media ganada", "Frigo revela cual fue el helado del verano de su centenario."],
      ["Fuerza frecuencia", "Para votar necesitas 5+ compras; activa Bingo, Album y Ruleta."],
      ["KPI de exito", "Predicciones = consumidores cualificados con alta frecuencia."]
    ]
  },
  {
    eyebrow: "04 · Nuevas ideas",
    title: "Cinco extensiones para elevar la campana a plataforma cultural.",
    subtitle: "Ideas pensadas para generar conversacion, UGC, trade marketing y aprendizaje sin romper el core operativo.",
    layout: "ideas",
    items: [
      ["100 Secret Drops", "Premios sorpresa desbloqueados por ciudad, clima o momento del dia."],
      ["Time Capsule Frigo", "El usuario graba un recuerdo; en septiembre se publica el mural colectivo."],
      ["Sabor del Futuro", "Votacion conversacional para co-crear una edicion limitada 2027."],
      ["Family Summer Pass", "Misiones familiares: varias generaciones suman en un mismo equipo verano."],
      ["Retailer Booster", "Retos por cadena o zona para reforzar trade marketing sin diluir la marca."]
    ]
  },
  {
    eyebrow: "04 · Activacion fisica",
    title: "El packaging y el PLV son medios propios. No soportes pasivos.",
    subtitle: "Cada pieza fisica puede actuar como puerta al programa, recordatorio del centenario y prueba de compra.",
    layout: "cards",
    cols: 3,
    items: [
      ["1927 · El Origen", "Diseno retro inspirado en Barcelona y el nacimiento de la marca."],
      ["1982 · El Gondolero", "Tributo a Just One Frigo, con estetica mediterranea y memoria publicitaria."],
      ["2027 · El Futuro", "Diseno moderno, sostenible y conectado: QR, AR experience y Momentos."]
    ]
  },
  {
    theme: "lemon",
    eyebrow: "04 · Trade marketing",
    title: "Retailer Booster: promocion local sin entregar la relacion.",
    subtitle: "La misma mecanica puede dar valor al retailer mientras Frigo mantiene identidad, permiso y aprendizaje.",
    layout: "matrix",
    rows: [
      ["Drive to store", "QR en tienda", "Instant win", "Geofencing", "Ranking por cadena"],
      ["Sell-out incremental", "Reto por SKU", "Puntos x2", "Ticket OCR", "Mix y frecuencia"],
      ["Visibilidad PLV", "Foto de cartel", "Badge local", "IA visual", "Ejecucion PDV"],
      ["Trade story", "Mision por zona", "Evento ganador", "Dashboard", "Caso para ventas"]
    ]
  },
  {
    theme: "red",
    eyebrow: "05",
    title: "Data, medicion e impacto",
    subtitle: "El centenario genera el activo que Frigo no ha tenido: first-party data accionable.",
    layout: "chapter"
  },
  {
    eyebrow: "05 · First-party data",
    title: "El centenario genera el mayor activo estrategico: data propietaria.",
    subtitle: "Todo propiedad de Frigo. Escalable. GDPR compliant. Activable en futuras campanas.",
    layout: "cards",
    cols: 3,
    items: [
      ["Identidad", "Nombre, telefono, email y consentimiento."],
      ["Compra", "Producto, momento, lugar, importe y prueba validada."],
      ["Canal", "Cartel, PLV, retailer, soporte o link de entrada."],
      ["Frecuencia", "Compras por temporada, rachas, repeticion y churn."],
      ["Preferencia", "Sabores, formatos y momentos de consumo."],
      ["Lifetime", "Valor acumulado, RFM y respuesta a campanas."]
    ]
  },
  {
    eyebrow: "05 · Compliance & antifraude",
    title: "Escalar sin perder control operativo.",
    subtitle: "En promociones de alto volumen, la diferencia esta en trazabilidad, limites, validacion y calidad percibida por el usuario.",
    layout: "cards",
    cols: 4,
    items: [
      ["Antifraude integrado", "Duplicados, limite de participaciones, historial, scoring y audit log."],
      ["Validacion hibrida", "OCR + IA + revision humana cuando el riesgo lo requiere."],
      ["Gobierno WhatsApp", "Opt-in/opt-out, plantillas aprobadas, ventana 24h, pacing y calidad."],
      ["Legal & data", "Bases legales, privacidad, minimizacion y consentimiento trazable."]
    ]
  },
  {
    eyebrow: "05 · KPI framework",
    title: "Medir la campana como negocio. No como ruido promocional.",
    subtitle: "Un sistema de medicion que conecta adquisicion, activacion, frecuencia, portfolio, engagement y retencion.",
    layout: "cards",
    cols: 3,
    items: [
      ["Acquisition", "Consumidores identificados, CAC y opt-in rate."],
      ["Activation", "Participaciones, validaciones y coste por participacion."],
      ["Frequency", "Compras por usuario, streaks y repeticion semanal."],
      ["Portfolio", "SKUs probados, cross-SKU trial y mix incremental."],
      ["Engagement", "DAU/WAU, respuestas WhatsApp, UGC y referrals."],
      ["Retention", "Nivel alcanzado, canjes, win-back y LTV."]
    ]
  },
  {
    theme: "dark",
    eyebrow: "05 · Live intelligence",
    title: "El dashboard no informa tarde. Decide durante la campana.",
    subtitle: "Savi puede alimentar un cockpit diario para ajustar premios, retos, zonas, segmentos y pacing antes de que termine el verano.",
    layout: "dashboard",
    items: [
      ["Opt-in", "48K"],
      ["Validaciones", "31K"],
      ["Fraude", "2,1%"],
      ["Repeaters", "18%"]
    ]
  },
  {
    eyebrow: "05 · Mapa de despliegue",
    title: "Cuándo y cómo se apilan las mecanicas.",
    subtitle: "Una planificacion por olas: preparar, aprender, escalar, mantener frecuencia y cerrar el centenario con noticia.",
    layout: "bars",
    items: [
      ["Setup programa", "Legal, chatbot, QR, data layer", 2, 2, "Preparacion", "is-soft"],
      ["Piloto Madrid", "Validar UX, OCR, opt-in y carga operativa", 3, 2, "Ajuste y validacion", "is-blue"],
      ["Trivia + Ruleta", "Always-on para capturar volumen diario", 4, 4, "Base diaria", ""],
      ["Desafio Flash 72h", "Picos tacticos por calor, festivos y retail", 5, 3, "Pulsos", "is-soft"],
      ["Album 100 Momentos", "Coleccionismo y repeticion semanal", 5, 4, "Frecuencia", ""],
      ["Frigo Squads", "Rankings locales y embajadores", 6, 3, "Comunidad", "is-blue"],
      ["Reveal final", "Ganadores, PR, trade story y learning report", 8, 1, "Cierre", ""]
    ]
  },
  {
    theme: "ice",
    eyebrow: "05 · Roadmap 2026-2027",
    title: "Tres fases hacia el gran evento.",
    subtitle: "Empezar pequeno, aprender rapido y llegar al centenario con sistema, no con improvisacion.",
    layout: "roadmap",
    items: [
      ["Fase 1 · Lanzamiento", "Q3 2026 · 8 semanas", "Setup WhatsApp, chatbot, backend, catalogo basico, testing y primer lote packaging."],
      ["Fase 2 · Aceleracion", "Q4 2026 - Q2 2027 · 6 meses", "Niveles, misiones, badges, push, referral, eventos presenciales y optimizacion."],
      ["Fase 3 · Centenario", "Q3 2027 · gran evento", "Evento principal, 100 embajadores, edicion limitada, tour Espana y siguiente fase."]
    ]
  },
  {
    eyebrow: "05 · Piloto Madrid",
    title: "Piloto controlado. Aprendizaje rapido. Escalado nacional.",
    subtitle: "El piloto debe validar UX, opt-in, prueba de compra, catalogo y carga operativa antes de activar medios masivos.",
    layout: "roadmap",
    items: [
      ["Semanas 1-3", "Workshop & setup", "KPIs, mecanicas prioritarias, flujo WhatsApp, legal y catalogo de premios."],
      ["Semanas 4-7", "Piloto Madrid", "Canal impulso + restauracion. Validacion real de QR, selfie/ticket y tasas de opt-in."],
      ["Semanas 8-12", "Lanzamiento nacional", "Ajuste de UX, antifraude, pacing, mecanicas y plan de medios/trade."]
    ]
  },
  {
    eyebrow: "06 · Por que Savi",
    title: "La plataforma de engagement mas flexible para activar el centenario.",
    subtitle: "Savi combina activacion, validacion, gamificacion, reward marketplace, dashboard y soporte operativo.",
    layout: "cards",
    cols: 3,
    items: [
      ["WhatsApp + OCR + geofencing", "Instant Win, validacion y antifraude integrados."],
      ["Mecanicas listas", "Gamificacion activable sin desarrollo desde cero."],
      ["Setup en semanas", "Piloto en 7 semanas con medicion real."],
      ["+50 marcas", "Activaciones gestionadas por el equipo Savi."],
      ["2M+ participaciones", "Volumen operativo gestionado en campanas."],
      ["Cornetto impulse case", "QR + instant win como referencia directa para canal impulso."]
    ]
  },
  {
    theme: "dark",
    eyebrow: "Cierre",
    title: "Just One Frigo.",
    subtitle: "100 años de historia. Un programa para construir los proximos 100.",
    layout: "closing",
    items: [
      ["Workshop de alineamiento", "2h con Marketing para definir objetivos, KPIs y mecanicas."],
      ["Propuesta definitiva", "Customer journey, flujos WhatsApp, catalogo y plan tecnico-operativo."],
      ["Piloto y lanzamiento", "Test en mercado, medicion, ajustes y escalado nacional."]
    ],
    foot: "savi · Marketing that works for everyone · hola@savi.es · savi.es"
  }
];
