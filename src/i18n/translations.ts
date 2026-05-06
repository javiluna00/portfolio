export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      education: "Educación",
      experience: "Experiencia",
      projects: "Proyectos",
    },
    hero: {
      greeting: "Hola, soy",
      status: "Abierto a propuestas",
      description:
        '<span class="text-white font-medium">Ingeniero Informático.</span> Especializado en <span class="text-purple-400">desarrollo web</span> y sistemas de <span class="text-yellow-200">IA con LangChain</span>.',
      sub: 'Construyendo herramientas que combinan <span class="text-slate-300">arquitecturas web modernas</span> con agentes de lenguaje natural.',
      downloadCV: "Descargar CV",
    },
    sections: {
      education: "Educación",
      experience: "Experiencia",
      projects: "Proyectos Destacados",
    },
    education: [
      {
        title: "Grado en Ingeniería Informática",
        description:
          "Especialidad en Computación. Formación avanzada en algoritmia, estructuras de datos y arquitectura de sistemas.",
        date: "2019 — 2024",
      },
      {
        title: "Resolución de Problemas Algorítmicos",
        description:
          "Enfoque en patrones de diseño de algoritmos y optimización de eficiencia temporal/espacial.",
        date: "Actualidad",
      },
      {
        title: "English Certificate (B2)",
        description: "Competencia profesional en comunicación técnica.",
        date: "2024",
      },
    ],
    experience: [
      {
        duration: "Abril 2024 - Actualidad",
        where: "PrimeIT",
        description: "Desarrollo de aplicación web con Javascript y MeteorJS",
      },
      {
        duration: "Enero 2024 - Actualidad",
        where: "Mi propio TFG",
        description:
          "Desarrollo de una aplicación web con React, Laravel, MySQL, Tailwind CSS, Recoil y más.",
      },
      {
        duration: "Junio 2023 - Septiembre 2023",
        where: "Aicor Consultores",
        description:
          "Prácticas curriculares. Desarrollo fullstack con React y Laravel. Desarrollo con Wordpress. Aprendizaje de metodologías en un entorno profesional.",
      },
      {
        duration: "Enero 2021 - Enero 2021",
        where: "Camping La Albolafia",
        description:
          "Desarrollo de una web estática para mostrar el camping, así como los horarios y los precios. Despliegue de la web en servidor de producción.",
      },
    ],
    projects: [
      {
        title: "RAG Chatbot de Soporte Vectorial",
        description:
          "Sistema de preguntas y respuestas que recupera información semánticamente de una base de conocimiento FAISS antes de generar respuestas con GPT-4o. Respuestas ancladas a documentación real, sin alucinaciones.",
      },
      {
        title: "Asistente IA para Base de Datos",
        description:
          "API REST (FastAPI) que convierte preguntas en lenguaje natural en consultas SQL, las ejecuta en MySQL de forma segura y devuelve respuestas interpretadas en streaming usando Google Gemini.",
      },
      {
        title: "Agente Autónomo de Empleo IA",
        description:
          "Pipeline multi-agente con LangGraph que busca ofertas de AI Engineer en LinkedIn usando Tavily, las valida y filtra con Gemini en un bucle condicional y las persiste en PostgreSQL.",
      },
      {
        title: "Bar Santa María",
        description:
          "Sitio web optimizado para SEO y rendimiento. Arquitectura estática enfocada en la experiencia de usuario y tiempos de carga mínimos.",
      },
      {
        title: "Lambda Beats - SaaS Platform",
        description:
          "Plataforma Fullstack para la gestión y venta de instrumentales. Implementa una arquitectura robusta con pasarela de pagos, gestión de licencias digitales y sistema de autenticación seguro.",
      },
      {
        title: "Camping La Albolafia",
        description:
          "Sitio corporativo optimizado para SEO y rendimiento. Arquitectura estática enfocada en la experiencia de usuario y tiempos de carga mínimos.",
      },
      {
        title: "CS 1.6 Engine Modding",
        description:
          "Desarrollo de lógica de servidor y plugins a bajo nivel. Optimización de eventos en tiempo real y scripting de sistemas para entornos competitivos.",
      },
    ],
    projects_cta: "Ver Proyecto",
    projects_detail: "Ver Detalles",
    footer: {
      rights: "© 2024 - Todos los derechos reservados",
    },
    pages: {
      back: "Volver al portfolio",
      github_cta: "Ver código en GitHub",
      rag: {
        title_line1: "Chatbot de Soporte con",
        title_line2: "Base de Datos Vectorial",
        description: "Sistema RAG (Retrieval-Augmented Generation) que responde preguntas de soporte técnico buscando semánticamente en una base de conocimiento vectorial antes de generar la respuesta con GPT-4o. Sin alucinaciones, respuestas ancladas a documentación real.",
        what_title: "¿Qué problema resuelve?",
        what_body: "<p>Los modelos de lenguaje como GPT-4o tienen un <strong class='text-slate-200'>conocimiento estático</strong>: no saben nada sobre la documentación interna de tu empresa. Si le preguntas al modelo \"¿cuántos proyectos permite el Plan Free de NexusTask?\", inventará una respuesta.</p><p class='mt-3'>RAG soluciona esto <strong class='text-slate-200'>recuperando información relevante</strong> de una base de conocimiento antes de generar la respuesta, de forma que el modelo solo trabaja con datos reales y verificados. El resultado es un chatbot de soporte que responde con precisión sin necesidad de hacer fine-tuning del modelo.</p>",
        how_title: "¿Cómo funciona?",
        step1_title: "Ingesta de documentos",
        step1_body: "~100 fragmentos de documentación de NexusTask se cargan como objetos <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>Document</code>. El <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>RecursiveCharacterTextSplitter</code> los divide en chunks de 1000 caracteres con 200 de solapamiento para no perder contexto en los cortes.",
        step2_title: "Generación de embeddings",
        step2_body: "Cada chunk se convierte en un vector de 1536 dimensiones usando <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>text-embedding-3-small</code> de OpenAI. Los vectores capturan el <em>significado semántico</em> del texto, permitiendo encontrar documentos relacionados aunque no compartan palabras exactas con la pregunta.",
        step3_title: "Índice vectorial con FAISS",
        step3_body: "Los vectores se indexan en <strong class='text-slate-200'>FAISS</strong> (Facebook AI Similarity Search), una librería optimizada para búsqueda por similitud coseno en alta dimensionalidad. FAISS permite encontrar los K vecinos más cercanos en milisegundos incluso con millones de vectores.",
        step4_title: "Retrieval semántico",
        step4_body: "La pregunta del usuario se convierte también en embedding y FAISS recupera los <strong class='text-slate-200'>3 fragmentos más similares</strong> semánticamente (<code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>k=3</code>). Estos fragmentos forman el contexto que se inyectará en el prompt.",
        step5_title: "Generación con GPT-4o",
        step5_body: "Los 3 fragmentos recuperados + la pregunta original se envían a <strong class='text-slate-200'>GPT-4o</strong> mediante una <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>create_retrieval_chain</code>. El prompt de sistema instruye al modelo a responder <em>únicamente</em> con la información del contexto — si no hay información suficiente, responde que no sabe.",
        flow_title: "Flujo de datos",
        stack_title: "Stack técnico",
        stack1_title: "LangChain",
        stack1_body: "Orquestación del pipeline RAG: retrieval chain, document chain, prompt templates.",
        stack2_title: "FAISS (faiss-cpu)",
        stack2_body: "Vector store en memoria para búsqueda por similitud coseno de alta eficiencia.",
        stack3_title: "OpenAI Embeddings",
        stack3_body: "Modelo <code class='text-xs bg-zinc-800 px-1 rounded'>text-embedding-3-small</code> para convertir texto en vectores semánticos.",
        stack4_title: "GPT-4o (ChatOpenAI)",
        stack4_body: "Modelo generativo que produce respuestas en lenguaje natural ancladas al contexto recuperado.",
        footer_text: "Proyecto personal · Python · 2025",
      },
      db: {
        title_line1: "Asistente IA para",
        title_line2: "Base de Datos en Lenguaje Natural",
        description: "API REST que traduce preguntas en lenguaje natural a consultas SQL ejecutadas sobre una base de datos MySQL real, devolviendo respuestas interpretadas en streaming. Construido para el marketplace de beats musicales Lambda Beats.",
        what_title: "¿Qué problema resuelve?",
        what_body: "<p>Los administradores de un marketplace necesitan acceder a datos constantemente: ventas del mes, beats más escuchados, ingresos por tipo de licencia... Habitualmente esto requiere escribir SQL o depender de un analista de datos.</p><p class='mt-3'>Este proyecto elimina esa fricción: el administrador hace una pregunta en lenguaje natural, el sistema genera la SQL correcta, la ejecuta de forma segura y devuelve una <strong class='text-slate-200'>respuesta interpretada en streaming</strong> con cifras formateadas y en tono profesional.</p><p class='mt-3'>La API incluye soporte para <strong class='text-slate-200'>conversaciones multi-turno</strong> (el contexto de mensajes anteriores se mantiene) y restricción de dominio: preguntas fuera del contexto del marketplace devuelven <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>OUT_OF_CONTEXT</code>.</p>",
        how_title: "¿Cómo funciona?",
        step1_title: "Arranque: extracción del esquema",
        step1_body: "Al iniciar la API, <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>SQLDatabase.get_table_info()</code> extrae automáticamente el esquema completo de 8 tablas relevantes de MySQL (<code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>beats</code>, <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>beat_licenses</code>, <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>beat_license_user_purchases</code>...). Este esquema se inyecta en el system prompt de Gemini con contexto de negocio detallado.",
        step2_title: "Generación de SQL con Gemini",
        step2_body: "El endpoint <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>POST /ask</code> recibe el historial de mensajes. Gemini 2.5 Flash recibe el esquema + historial completo y genera una consulta SQL pura sin markdown. Si la pregunta no es sobre el marketplace, responde <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>OUT_OF_CONTEXT</code>.",
        step3_title: "Capa de seguridad: solo SELECT",
        step3_body: "Antes de ejecutar, dos validaciones regex bloquean cualquier operación de escritura: la query debe comenzar por <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>SELECT</code> y no puede contener <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>INSERT/UPDATE/DELETE/DROP/...</code>. Las queries de escritura se registran en logs y se bloquean con un mensaje de error al usuario.",
        step4_title: "Ejecución en MySQL",
        step4_body: "La query validada se ejecuta sobre la BD real usando <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>SQLDatabase.run()</code> de LangChain. Los resultados crudos (tuplas) se pasan a la siguiente fase. Los errores de BD se capturan con logging estructurado sin exponer detalles de la query al usuario.",
        step5_title: "Interpretación en streaming",
        step5_body: "Gemini recibe la pregunta original + los datos en crudo y genera una respuesta en lenguaje natural con tono profesional usando <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>model.stream()</code>. FastAPI devuelve un <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>StreamingResponse</code> para que la respuesta aparezca progresivamente en el cliente.",
        flow_title: "Flujo de datos",
        design_title: "Decisiones de diseño",
        d1_title: "Conversación multi-turno",
        d1_body: "El endpoint acepta un array de mensajes, permitiendo que Gemini tenga contexto de preguntas anteriores y pueda responder \"¿y del mes pasado?\" sin perder el hilo.",
        d2_title: "Context window del esquema",
        d2_body: "El esquema SQL completo se inyecta en cada petición. Se limitó a 8 tablas relevantes para no saturar el contexto de Gemini con tablas obsoletas.",
        d3_title: "Seguridad read-only",
        d3_body: "Doble validación regex: la query debe empezar en SELECT y no puede contener ninguna operación de escritura. Las queries bloqueadas se loguean con <code class='text-xs bg-zinc-800 px-1 rounded'>WARNING</code>.",
        d4_title: "Restricción de dominio",
        d4_body: "Si la pregunta no es sobre beats, ventas o métricas del marketplace, el modelo responde <code class='text-xs bg-zinc-800 px-1 rounded'>OUT_OF_CONTEXT</code> y el backend lo convierte en un mensaje amigable.",
        footer_text: "Proyecto personal · Python · FastAPI · 2025",
      },
      linkedin: {
        title_line1: "Agente Autónomo de",
        title_line2: "Búsqueda de Empleo en LinkedIn",
        description: "Pipeline multi-agente construido con LangGraph que busca automáticamente ofertas de AI Engineer en LinkedIn, las valida y filtra con Gemini y las almacena en PostgreSQL. Un agente que trabaja de forma autónoma con lógica de reintento condicional.",
        what_title: "¿Qué problema resuelve?",
        what_body: "<p>Buscar trabajo como AI Engineer implica revisar LinkedIn diariamente para encontrar ofertas recientes antes de que caduquen o se llenen de candidatos. Es un proceso manual y repetitivo.</p><p class='mt-3'>Este agente <strong class='text-slate-200'>automatiza toda la búsqueda</strong>: lanza queries de búsqueda específicas en LinkedIn (filtradas por fecha reciente y tecnología), extrae los datos de cada oferta con IA, elimina duplicados y los guarda en base de datos en la nube para consulta posterior. Todo ello en un pipeline autónomo que decide cuándo detenerse.</p>",
        langgraph_title: "¿Qué es LangGraph?",
        langgraph_body: "LangGraph es un framework para construir <strong class='text-slate-200'>agentes con estado</strong> como grafos dirigidos. A diferencia de una cadena lineal de LangChain, LangGraph permite definir <strong class='text-slate-200'>nodos</strong> (funciones que procesan el estado) y <strong class='text-slate-200'>aristas condicionales</strong> (decisiones de flujo basadas en el estado actual). Esto permite bucles, reintentos y lógica de agente real.",
        how_title: "¿Cómo funciona? Los nodos del grafo",
        node1_title: "Nodo \"buscar\" — Tavily Search",
        node1_body: "Ejecuta queries de búsqueda en LinkedIn con filtro de fecha reciente (últimas 48h): <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>site:linkedin.com/jobs/view/ \"AI Engineer\" Spain after:YYYY-MM-DD</code>. Rota entre 4 queries distintas en cada ciclo para maximizar cobertura. Los resultados crudos de Tavily se guardan en el estado.",
        node2_title: "Nodo \"validar\" — Gemini extrae y filtra",
        node2_body: "Gemini 2.5 Flash Lite procesa el texto bruto de Tavily y extrae en JSON estructurado: empresa, puesto, link, ciudad, modalidad y fecha de publicación. Reglas estrictas: <strong class='text-slate-200'>solo URLs de linkedin.com</strong>, de-duplicación por link, y reconstrucción del Job ID para generar URLs estables.",
        node3_title: "Arista condicional — ¿Seguir o guardar?",
        node3_body: "Tras cada ciclo de validación, el grafo decide: si hay <strong class='text-slate-200'>≥ 10 ofertas</strong> acumuladas o se han completado <strong class='text-slate-200'>≥ 5 ciclos</strong> → ir a \"guardar\". Si no → volver a \"buscar\" con la siguiente query. Esto crea un bucle autónomo que no para hasta tener suficientes resultados.",
        node4_title: "Nodo \"guardar\" — PostgreSQL en la nube",
        node4_body: "Normaliza el link de LinkedIn extrayendo el Job ID con regex para construir URLs canónicas estables. Inserta cada oferta en PostgreSQL usando <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>ON CONFLICT (link) DO NOTHING</code> para evitar duplicados en ejecuciones repetidas.",
        graph_title: "Grafo de estados (LangGraph)",
        state_title: "Estado compartido del agente",
        state_intro: "El estado (<code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>EstadoAgente</code>) persiste entre nodos y contiene:",
        s1_key: "messages",
        s1_val: "Historial de mensajes del grafo (add_messages annotation)",
        s2_key: "ofertas_encontradas",
        s2_val: "Lista acumulada de ofertas validadas entre ciclos",
        s3_key: "intentos",
        s3_val: "Contador de ciclos para la condición de salida",
        s4_key: "max_ofertas",
        s4_val: "Objetivo configurable (por defecto 10 ofertas)",
        footer_text: "Proyecto personal · Python · LangGraph · 2025",
      },
    },
  },
  en: {
    nav: {
      about: "About Me",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
    },
    hero: {
      greeting: "Hello, I'm",
      status: "Open to opportunities",
      description:
        '<span class="text-white font-medium">Computer Science Engineer.</span> Specialized in <span class="text-purple-400">web development</span> and <span class="text-yellow-200">AI systems with LangChain</span>.',
      sub: 'Building tools that combine <span class="text-slate-300">modern web architectures</span> with natural language agents.',
      downloadCV: "Download CV",
    },
    sections: {
      education: "Education",
      experience: "Experience",
      projects: "Featured Projects",
    },
    education: [
      {
        title: "Computer Science Degree",
        description:
          "Specialization in Computing. Advanced training in algorithms, data structures, and systems architecture.",
        date: "2019 — 2024",
      },
      {
        title: "Algorithmic Problem Solving",
        description:
          "Focus on algorithm design patterns and time/space efficiency optimization.",
        date: "Present",
      },
      {
        title: "English Certificate (B2)",
        description: "Professional competence in technical communication.",
        date: "2024",
      },
    ],
    experience: [
      {
        duration: "April 2024 - Present",
        where: "PrimeIT",
        description: "Web application development with Javascript and MeteorJS",
      },
      {
        duration: "January 2024 - Present",
        where: "My Bachelor's Thesis (TFG)",
        description:
          "Web application development with React, Laravel, MySQL, Tailwind CSS, Recoil and more.",
      },
      {
        duration: "June 2023 - September 2023",
        where: "Aicor Consultores",
        description:
          "Curricular internship. Fullstack development with React and Laravel. WordPress development. Learning methodologies in a professional environment.",
      },
      {
        duration: "January 2021 - January 2021",
        where: "Camping La Albolafia",
        description:
          "Development of a static website to showcase the camping site, including schedules and prices. Deployment to production server.",
      },
    ],
    projects: [
      {
        title: "RAG Vector Support Chatbot",
        description:
          "Q&A system that semantically retrieves information from a FAISS knowledge base before generating responses with GPT-4o. Answers grounded in real documentation, no hallucinations.",
      },
      {
        title: "AI Database Assistant",
        description:
          "REST API (FastAPI) that converts natural language questions into SQL queries, executes them safely on MySQL, and returns streamed interpreted responses using Google Gemini.",
      },
      {
        title: "Autonomous AI Job Search Agent",
        description:
          "Multi-agent pipeline with LangGraph that searches for AI Engineer jobs on LinkedIn using Tavily, validates and filters them with Gemini in a conditional loop, and persists them in PostgreSQL.",
      },
      {
        title: "Bar Santa María",
        description:
          "SEO-optimized website with excellent performance. Static architecture focused on user experience and minimal load times.",
      },
      {
        title: "Lambda Beats - SaaS Platform",
        description:
          "Fullstack platform for instrumental management and sales. Implements robust architecture with payment gateway, digital license management, and secure authentication system.",
      },
      {
        title: "Camping La Albolafia",
        description:
          "Corporate website optimized for SEO and performance. Static architecture focused on user experience and minimal load times.",
      },
      {
        title: "CS 1.6 Engine Modding",
        description:
          "Development of server logic and low-level plugins. Real-time event optimization and system scripting for competitive environments.",
      },
    ],
    projects_cta: "View Project",
    projects_detail: "View Details",
    footer: {
      rights: "© 2024 - All rights reserved",
    },
    pages: {
      back: "Back to portfolio",
      github_cta: "View code on GitHub",
      rag: {
        title_line1: "Support Chatbot with",
        title_line2: "Vector Database",
        description: "RAG (Retrieval-Augmented Generation) system that answers technical support questions by semantically searching a vector knowledge base before generating a response with GPT-4o. No hallucinations — answers grounded in real documentation.",
        what_title: "What problem does it solve?",
        what_body: "<p>Language models like GPT-4o have <strong class='text-slate-200'>static knowledge</strong>: they know nothing about your company's internal documentation. If you ask the model \"how many projects does the NexusTask Free Plan allow?\", it will make up an answer.</p><p class='mt-3'>RAG solves this by <strong class='text-slate-200'>retrieving relevant information</strong> from a knowledge base before generating the response, so the model only works with real, verified data. The result is a support chatbot that answers accurately without needing to fine-tune the model.</p>",
        how_title: "How does it work?",
        step1_title: "Document ingestion",
        step1_body: "~100 NexusTask documentation snippets are loaded as <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>Document</code> objects. The <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>RecursiveCharacterTextSplitter</code> splits them into 1000-character chunks with 200-character overlap to preserve context at cuts.",
        step2_title: "Embedding generation",
        step2_body: "Each chunk is converted into a 1536-dimensional vector using OpenAI's <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>text-embedding-3-small</code>. Vectors capture the <em>semantic meaning</em> of text, enabling retrieval of related documents even if they don't share exact words with the query.",
        step3_title: "Vector index with FAISS",
        step3_body: "Vectors are indexed in <strong class='text-slate-200'>FAISS</strong> (Facebook AI Similarity Search), a library optimized for cosine similarity search in high dimensions. FAISS finds the K nearest neighbors in milliseconds even with millions of vectors.",
        step4_title: "Semantic retrieval",
        step4_body: "The user's question is also converted to an embedding and FAISS retrieves the <strong class='text-slate-200'>3 most semantically similar</strong> chunks (<code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>k=3</code>). These chunks form the context injected into the prompt.",
        step5_title: "Generation with GPT-4o",
        step5_body: "The 3 retrieved chunks + the original question are sent to <strong class='text-slate-200'>GPT-4o</strong> via a <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>create_retrieval_chain</code>. The system prompt instructs the model to answer <em>only</em> using the context — if there's not enough information, it says so.",
        flow_title: "Data flow",
        stack_title: "Tech stack",
        stack1_title: "LangChain",
        stack1_body: "RAG pipeline orchestration: retrieval chain, document chain, prompt templates.",
        stack2_title: "FAISS (faiss-cpu)",
        stack2_body: "In-memory vector store for high-efficiency cosine similarity search.",
        stack3_title: "OpenAI Embeddings",
        stack3_body: "The <code class='text-xs bg-zinc-800 px-1 rounded'>text-embedding-3-small</code> model to convert text into semantic vectors.",
        stack4_title: "GPT-4o (ChatOpenAI)",
        stack4_body: "Generative model that produces natural language responses grounded in retrieved context.",
        footer_text: "Personal project · Python · 2025",
      },
      db: {
        title_line1: "AI Assistant for",
        title_line2: "Database in Natural Language",
        description: "REST API that translates natural language questions into SQL queries executed on a real MySQL database, returning interpreted streaming responses. Built for the Lambda Beats music beat marketplace.",
        what_title: "What problem does it solve?",
        what_body: "<p>Marketplace administrators constantly need data access: monthly sales, most-played beats, revenue by license type... This usually requires writing SQL or relying on a data analyst.</p><p class='mt-3'>This project removes that friction: the admin asks a question in natural language, the system generates the correct SQL, executes it safely and returns a <strong class='text-slate-200'>streamed interpreted response</strong> with formatted figures in a professional tone.</p><p class='mt-3'>The API includes <strong class='text-slate-200'>multi-turn conversation</strong> support (previous message context is preserved) and domain restriction: questions outside the marketplace context return <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>OUT_OF_CONTEXT</code>.</p>",
        how_title: "How does it work?",
        step1_title: "Startup: schema extraction",
        step1_body: "On API startup, <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>SQLDatabase.get_table_info()</code> automatically extracts the full schema of 8 relevant MySQL tables (<code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>beats</code>, <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>beat_licenses</code>, <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>beat_license_user_purchases</code>...). This schema is injected into Gemini's system prompt with detailed business context.",
        step2_title: "SQL generation with Gemini",
        step2_body: "The <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>POST /ask</code> endpoint receives the message history. Gemini 2.5 Flash receives the schema + full history and generates a plain SQL query without markdown. If the question isn't about the marketplace, it responds <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>OUT_OF_CONTEXT</code>.",
        step3_title: "Security layer: SELECT only",
        step3_body: "Before execution, two regex validations block any write operation: the query must start with <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>SELECT</code> and cannot contain <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>INSERT/UPDATE/DELETE/DROP/...</code>. Blocked write queries are logged with a user-facing error message.",
        step4_title: "MySQL execution",
        step4_body: "The validated query is executed on the real database using LangChain's <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>SQLDatabase.run()</code>. Raw results (tuples) are passed to the next phase. Database errors are captured with structured logging without exposing query details to the user.",
        step5_title: "Streaming interpretation",
        step5_body: "Gemini receives the original question + raw data and generates a natural language response in a professional tone using <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>model.stream()</code>. FastAPI returns a <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>StreamingResponse</code> so the answer appears progressively in the client.",
        flow_title: "Data flow",
        design_title: "Design decisions",
        d1_title: "Multi-turn conversation",
        d1_body: "The endpoint accepts a message array, allowing Gemini to have context from previous questions and answer follow-ups like \"and last month?\" without losing the thread.",
        d2_title: "Schema context window",
        d2_body: "The full SQL schema is injected with every request. Limited to 8 relevant tables to avoid saturating Gemini's context with obsolete tables.",
        d3_title: "Read-only security",
        d3_body: "Double regex validation: the query must start with SELECT and cannot contain any write operation. Blocked queries are logged with <code class='text-xs bg-zinc-800 px-1 rounded'>WARNING</code>.",
        d4_title: "Domain restriction",
        d4_body: "If the question isn't about beats, sales or marketplace metrics, the model responds <code class='text-xs bg-zinc-800 px-1 rounded'>OUT_OF_CONTEXT</code> and the backend converts it into a friendly message.",
        footer_text: "Personal project · Python · FastAPI · 2025",
      },
      linkedin: {
        title_line1: "Autonomous",
        title_line2: "LinkedIn Job Search Agent",
        description: "Multi-agent pipeline built with LangGraph that automatically searches for AI Engineer jobs on LinkedIn, validates and filters them with Gemini, and stores them in PostgreSQL. An agent that works autonomously with conditional retry logic.",
        what_title: "What problem does it solve?",
        what_body: "<p>Looking for work as an AI Engineer means checking LinkedIn daily to find recent job postings before they expire or fill up. It's a manual, repetitive process.</p><p class='mt-3'>This agent <strong class='text-slate-200'>automates the entire search</strong>: it fires specific LinkedIn search queries (filtered by recent date and technology), extracts job data with AI, deduplicates results, and saves them to a cloud database for later review. All in an autonomous pipeline that decides when to stop.</p>",
        langgraph_title: "What is LangGraph?",
        langgraph_body: "LangGraph is a framework for building <strong class='text-slate-200'>stateful agents</strong> as directed graphs. Unlike a linear LangChain chain, LangGraph lets you define <strong class='text-slate-200'>nodes</strong> (functions that process state) and <strong class='text-slate-200'>conditional edges</strong> (flow decisions based on current state). This enables loops, retries and true agent logic.",
        how_title: "How does it work? Graph nodes",
        node1_title: "Node \"search\" — Tavily Search",
        node1_body: "Fires LinkedIn search queries with a recent date filter (last 48h): <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>site:linkedin.com/jobs/view/ \"AI Engineer\" Spain after:YYYY-MM-DD</code>. Rotates between 4 different queries per cycle to maximize coverage. Raw Tavily results are stored in state.",
        node2_title: "Node \"validate\" — Gemini extracts and filters",
        node2_body: "Gemini 2.5 Flash Lite processes raw Tavily text and extracts structured JSON: company, role, link, city, work mode and posting date. Strict rules: <strong class='text-slate-200'>LinkedIn-only URLs</strong>, deduplication by link, and Job ID reconstruction to generate stable URLs.",
        node3_title: "Conditional edge — Keep searching or save?",
        node3_body: "After each validation cycle, the graph decides: if there are <strong class='text-slate-200'>≥ 10 offers</strong> accumulated or <strong class='text-slate-200'>≥ 5 search cycles</strong> completed → go to \"save\". Otherwise → back to \"search\" with the next query. This creates an autonomous loop that doesn't stop until it has enough results.",
        node4_title: "Node \"save\" — Cloud PostgreSQL",
        node4_body: "Normalizes the LinkedIn link by extracting the Job ID with regex to build stable canonical URLs. Inserts each offer into PostgreSQL using <code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>ON CONFLICT (link) DO NOTHING</code> to avoid duplicates on repeated runs.",
        graph_title: "State graph (LangGraph)",
        state_title: "Shared agent state",
        state_intro: "The state (<code class='text-yellow-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>AgentState</code>) persists across nodes and contains:",
        s1_key: "messages",
        s1_val: "Graph message history (add_messages annotation)",
        s2_key: "offers_found",
        s2_val: "Accumulated list of validated offers across cycles",
        s3_key: "attempts",
        s3_val: "Cycle counter for the exit condition",
        s4_key: "max_offers",
        s4_val: "Configurable target (default: 10 offers)",
        footer_text: "Personal project · Python · LangGraph · 2025",
      },
    },
  },
} as const;

export type Lang = keyof typeof translations;
