(() => {
  const canvas = document.querySelector(".thread-field");
  const context = canvas.getContext("2d", { alpha: false });
  const workshops = [
    { name: "Agentic Stack: A Builder's Playbook for Production AI Agents", category: "AI & Data", filter: "ai", description: "Build AI agents that reason, act and orchestrate multi-step workflows, then explore the patterns for taking them from prototype to production.", path: "/workshops/agentic-stack" },
    { name: "Artificial Intelligence", category: "AI & Data", filter: "ai", description: "An immersive two-day training at IIT Bombay across deep learning, vision systems, generative AI, RAG and agentic workflows.", path: "/workshops/artificial-intelligence" },
    { name: "Machine Learning", category: "AI & Data", filter: "ai", description: "Master end-to-end machine-learning pipelines, from statistical foundations and ensemble algorithms to neural architectures and deployment with Python.", path: "/workshops/machine-learning" },
    { name: "Data Science", category: "AI & Data", filter: "ai", description: "Cover the data-science lifecycle, from Python and SQL to predictive machine learning and AI-driven analytics through hands-on practice.", path: "/workshops/data-science" },
    { name: "Agentic AI", category: "AI & Data", filter: "ai", description: "Build autonomous AI agents that plan, decide and execute tasks, exploring reasoning loops, MCP, multi-agent frameworks and safety guardrails.", path: "/workshops/agentic-ai" },
    { name: "Deep Learning", category: "AI & Data", filter: "ai", description: "Explore neural-network architectures and deep-learning mechanics, from tensor mathematics and CNNs to Transformers and generative models.", path: "/workshops/deep-learning" },
    { name: "LLMs using Python", category: "AI & Data", filter: "ai", description: "Move from basic prompts to production-ready AI systems with vector search, advanced RAG architectures and cloud deployment using Python.", path: "/workshops/llms-using-python" },
    { name: "Prompt Engineering", category: "AI & Data", filter: "ai", description: "Explore reasoning patterns, Generative Engine Optimization and prompt security for enterprise applications.", path: "/workshops/prompt-engineering" },
    { name: "Full Stack Development", category: "Technology & Cybersecurity", filter: "technology", description: "Bridge frontend design and backend engineering with responsive interfaces, Node.js and databases to build web products.", path: "/workshops/full-stack" },
    { name: "Ethical Hacking", category: "Technology & Cybersecurity", filter: "technology", description: "Explore security methodologies, network exploitation, web and API vulnerabilities, and AI prompt injection through hands-on CTF challenges.", path: "/workshops/ethical-hacking" },
    { name: "Cybersecurity", category: "Technology & Cybersecurity", filter: "technology", description: "Practice threat detection, SIEM log triage and incident response through a hands-on SOC War Room breach simulation at IIT Bombay.", path: "/workshops/cybersecurity" },
    { name: "Cloud Computing", category: "Technology & Cybersecurity", filter: "technology", description: "Explore cloud infrastructure and AWS services, including Infrastructure as Code, automated deployments and application hosting.", path: "/workshops/cloud-computing" },
    { name: "Entrepreneurship", category: "Business, Finance & Management", filter: "business", description: "Develop a business idea through customer discovery, business-model design and go-to-market strategy, ending with a pitch to investors.", path: "/workshops/entrepreneurship" },
    { name: "Algorithmic Trading", category: "Business, Finance & Management", filter: "business", description: "Explore quantitative strategies, execution techniques and AI-driven signals while building a backtested trading algorithm.", path: "/workshops/algo-trading" },
    { name: "Business Analytics", category: "Business, Finance & Management", filter: "business", description: "Turn data into business insights using Excel, SQL and Power BI, building a dashboard and recommendation from scratch.", path: "/workshops/business-analytics" },
    { name: "Product Management", category: "Business, Finance & Management", filter: "business", description: "Explore the product lifecycle, from customer research and prioritisation frameworks to go-to-market strategy.", path: "/workshops/product-management" },
    { name: "Stock Market & Equity Research", category: "Business, Finance & Management", filter: "business", description: "Use fundamental and technical analysis to evaluate stocks, manage risk and explore trading through a mock simulation.", path: "/workshops/stock-market" },
    { name: "Personal Finance & Real Estate", category: "Business, Finance & Management", filter: "business", description: "Explore budgeting, equity valuation, portfolio construction and risk analytics across personal finance and real estate.", path: "/workshops/personal-finance" },
    { name: "Game Development", category: "Design & Creative Technology", filter: "design", description: "Create a playable game in Unity, exploring systemic design, AI-driven gameplay and terrain generation.", path: "/workshops/game-development" },
    { name: "Animation", category: "Design & Creative Technology", filter: "design", description: "Explore motion design, kinetic typography and 2.5D spatial parallax using DaVinci Resolve Fusion and AI-assisted tools.", path: "/workshops/animation" },
    { name: "UI/UX Design", category: "Design & Creative Technology", filter: "design", description: "Move from user research and information architecture to high-fidelity prototyping and usability testing in Figma.", path: "/workshops/ui-ux" },
    { name: "AutoCAD", category: "Engineering & Robotics", filter: "engineering", description: "Explore precision 2D drafting and 3D modelling in AutoCAD, from coordinates and blocks to layouts and BIM-ready workflows.", path: "/workshops/autocad" },
    { name: "Electric Vehicles", category: "Engineering & Robotics", filter: "engineering", description: "Explore EV architectures, battery technology, charging systems and smart vehicle intelligence through hands-on learning.", path: "/workshops/electric-vehicles" },
    { name: "Robotics", category: "Engineering & Robotics", filter: "engineering", description: "Design, build and program an autonomous robot, integrating mechanical, electronic and software systems through ROS 2 navigation.", path: "/workshops/robotics" },
    { name: "IoT using Arduino or Raspberry Pi", category: "Engineering & Robotics", filter: "engineering", description: "Build IoT systems with Arduino and Raspberry Pi, covering sensors, connectivity, cloud dashboards and Edge AI.", path: "/workshops/iot" },
    { name: "Drone Technology", category: "Engineering & Robotics", filter: "engineering", description: "Design, build and fly a quadcopter, exploring frames, motors, ESCs and flight controllers in a hands-on workshop.", path: "/workshops/quadcopter" }
  ];
  const competitions = [
    { name: "Agentic AI in BFSI: Hackathon 2026", category: "AI · FINANCE · HACKATHON", description: "A Perfios-backed AI hackathon: build agentic systems for banking problems, from detecting borrower distress in voice to identifying rogue agents mid-transaction.", path: "/competitions/Agentic-AI" },
    { name: "AyushTech Innovate: National Open Ayurveda AI Challenge", category: "AI · HEALTH · INNOVATION", description: "A national open AI challenge to build trustworthy, source-grounded and medically safe software frameworks using IIT Bombay's open-source AyurParam LLM.", path: "/competitions/ayushtech" },
    { name: "National Aeromodelling Challenge", category: "AEROMODELLING · ENGINEERING", description: "Design and build a fixed-wing RC aircraft to carry golf balls, load and unload them hands-free, and complete a timed round trip.", path: "/competitions/Aeromodelling-2026" },
    { name: "TrueFoundry Forge-a-thon", category: "AI · SOFTWARE · HACKATHON", description: "Build an editor-native coding agent as a Visual Studio Code extension using TrueFoundry's open-source agent harness.", path: "/competitions/forge-a-thon" }
  ];
  let width = 0, height = 0, pixelRatio = 1;
  let pointerX = 0, pointerY = 0, targetX = 0, targetY = 0, frame = 0, lastFrameTime = 0;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function resizeCanvas() {
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    drawField(performance.now());
  }

  function curvePoint(t, line, time, offset) {
    const phase = line * 0.173 + offset;
    const slow = time * (0.00006 + (line % 7) * 0.000006);
    const envelope = Math.sin(Math.PI * t);
    const wave = Math.sin(t * (2.1 + (line % 9) * 0.18) + phase + slow);
    const secondWave = Math.sin(t * (4.4 + (line % 5) * 0.2) - phase * 0.7 + slow * 1.4);
    const drift = Math.cos(t * 1.7 + phase) * height * 0.09;
    const baseline = height * (0.1 + (line % 17) / 17 * 0.8);
    return { x: t * width, y: baseline + envelope * (wave * height * 0.21 + secondWave * height * 0.065 + drift) };
  }

  function drawField(time) {
    if (!context || !width || !height) return;
    context.fillStyle = "#080808";
    context.fillRect(0, 0, width, height);
    context.save();
    context.globalCompositeOperation = "screen";
    const lineCount = Math.min(104, Math.max(54, Math.round(width / 13)));
    const motionTime = prefersReducedMotion.matches ? 0 : time;
    for (let line = 0; line < lineCount; line += 1) {
      const layer = line % 4;
      const offset = layer * 1.53 + line * 0.27;
      const pointerInfluence = (pointerX / Math.max(width, 1) - 0.5) * 18;
      context.beginPath();
      const steps = width > 900 ? 100 : 65;
      for (let step = 0; step <= steps; step += 1) {
        const t = step / steps;
        const point = curvePoint(t, line, motionTime, offset);
        const displacement = (pointerY / Math.max(height, 1) - 0.5) * 14 * Math.sin(Math.PI * t);
        if (step === 0) context.moveTo(point.x, point.y + displacement + pointerInfluence);
        else context.lineTo(point.x, point.y + displacement + pointerInfluence);
      }
      const highlight = line % 19 === 0 || line % 23 === 0;
      context.strokeStyle = `rgba(238, 237, 232, ${highlight ? 0.34 : 0.045 + (line % 6) * 0.009})`;
      context.lineWidth = highlight ? 0.85 : 0.45;
      context.stroke();
    }
    for (let knot = 0; knot < 4; knot += 1) {
      const x = width * (0.15 + knot * 0.23) + Math.sin(motionTime * 0.0001 + knot) * width * 0.025;
      const y = height * (0.22 + (knot % 3) * 0.27) + Math.cos(motionTime * 0.00012 + knot * 1.4) * height * 0.04;
      const gradient = context.createRadialGradient(x, y, 0, x, y, 90);
      gradient.addColorStop(0, "rgba(255,255,255,0.07)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = gradient;
      context.fillRect(x - 90, y - 90, 180, 180);
    }
    context.restore();
  }

  function animate(time) {
    if (prefersReducedMotion.matches) {
      drawField(0);
      return;
    }
    if (time - lastFrameTime >= 40) {
      lastFrameTime = time;
      pointerX += (targetX - pointerX) * 0.035;
      pointerY += (targetY - pointerY) * 0.035;
      drawField(time);
    }
    frame = window.requestAnimationFrame(animate);
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  function makeOfficialLink(label, path, className) {
    const link = document.createElement("a");
    link.className = className;
    link.href = `https://techfest.org${path}`;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = label;
    if (label.startsWith("REGISTER")) {
      link.title = "Opens the official Techfest page, where its native registration flow is available.";
    }
    return link;
  }

  function renderWorkshops(filter = "all") {
    const list = document.querySelector("#workshop-list");
    const visibleWorkshops = workshops.filter((workshop) => filter === "all" || workshop.filter === filter);
    list.replaceChildren();
    visibleWorkshops.forEach((workshop, index) => {
      const article = document.createElement("article");
      article.className = "workshop-entry reveal";
      article.dataset.category = workshop.filter;

      const header = document.createElement("div");
      header.className = "workshop-entry-meta";
      const number = document.createElement("span");
      number.className = "row-index";
      number.textContent = String(index + 1).padStart(2, "0");
      const category = document.createElement("span");
      category.className = "row-note";
      category.textContent = workshop.category;
      header.append(number, category);

      const titleText = document.createElement("h3");
      titleText.textContent = workshop.name;
      const summary = document.createElement("p");
      summary.textContent = workshop.description;
      const actions = document.createElement("div");
      actions.className = "directory-actions";
      actions.append(
        makeOfficialLink("EXPLORE ↗", workshop.path, "directory-action"),
        makeOfficialLink("REGISTER ↗", workshop.path, "directory-action directory-register")
      );
      article.append(header, titleText, summary, actions);
      list.append(article);
      revealObserver.observe(article);
    });
    document.querySelector(".workshop-result-count").textContent =
      `${visibleWorkshops.length} ${visibleWorkshops.length === 1 ? "WORKSHOP" : "WORKSHOPS"} · OFFICIAL TECHFEST LISTING`;
  }

  function renderCompetitions() {
    const list = document.querySelector("#competition-list");
    competitions.forEach((competition, index) => {
      const article = document.createElement("article");
      article.className = "competition-entry reveal";
      const number = document.createElement("span");
      number.className = "row-index";
      number.textContent = String(index + 1).padStart(2, "0");
      const content = document.createElement("div");
      content.className = "competition-entry-content";
      const category = document.createElement("p");
      category.className = "eyebrow";
      category.textContent = competition.category;
      const titleText = document.createElement("h3");
      titleText.textContent = competition.name;
      const summary = document.createElement("p");
      summary.textContent = competition.description;
      content.append(category, titleText, summary);
      const actions = document.createElement("div");
      actions.className = "directory-actions competition-actions";
      actions.append(
        makeOfficialLink("EXPLORE ↗", competition.path, "directory-action"),
        makeOfficialLink("REGISTER ↗", competition.path, "directory-action directory-register")
      );
      article.append(number, content, actions);
      list.append(article);
      revealObserver.observe(article);
    });
  }

  renderWorkshops();
  renderCompetitions();
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("is-active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });
      renderWorkshops(button.dataset.filter);
    });
  });

  window.addEventListener("resize", resizeCanvas, { passive: true });
  window.addEventListener("pointermove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
  }, { passive: true });
  prefersReducedMotion.addEventListener("change", () => {
    drawField(prefersReducedMotion.matches ? 0 : performance.now());
    if (!prefersReducedMotion.matches) frame = window.requestAnimationFrame(animate);
  });
  resizeCanvas();
  frame = window.requestAnimationFrame(animate);
  window.addEventListener("pagehide", () => window.cancelAnimationFrame(frame), { once: true });
})();
