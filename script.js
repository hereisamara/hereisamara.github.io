const portfolioProjects = [
  {
    category: "personal",
    directions: ["data-scientist", "ml-engineer"],
    group: "PERSONAL PROJECT / GENERATIVE AI",
    title: "Ezria — RAG-Based AI Study Assistant",
    description: "Developed a Flask-based RAG study assistant that ingests uploaded documents, retrieves relevant context, and generates grounded explanations, question-answering responses, and examples; packaged with Docker for AWS deployment.",
    result: "DOCUMENT-GROUNDED Q&A · DOCKERIZED AWS DEPLOYMENT",
    tags: ["Python", "Flask", "AWS", "Docker", "RAG"],
    link: "articles/ezria-ai-study-assistant.html",
    linkLabel: "Read case study"
  },
  {
    category: "personal",
    directions: ["ml-engineer"],
    group: "PERSONAL PROJECT / GENERATIVE AI",
    title: "AI-Driven Diagram Assistant for Draw.io",
    description: "Developed an LLM-driven pipeline that translates natural-language requirements into structured, editable Draw.io UML and system diagrams through retrieval, LangChain orchestration, and Draw.io API integration.",
    result: "NATURAL LANGUAGE → EDITABLE DRAW.IO DIAGRAMS",
    tags: ["OpenAI", "Gemini", "LangChain", "TypeScript", "Docker"],
    link: "https://github.com/hereisamara/autodiagen-drawio",
    linkLabel: "View project"
  },
  {
    category: "personal",
    directions: ["data-scientist", "data-engineer"],
    group: "PERSONAL PROJECT / DATA VISUALIZATION",
    title: "Monitoring Platform",
    description: "Developed a Power BI monitoring dashboard that transforms operational data into KPI trends, exception views, and drill-down reporting for recurring performance analysis.",
    result: "KPI TRENDS · EXCEPTION VIEWS · DRILL-DOWN REPORTING",
    tags: ["Power BI", "Monitoring", "Analytics", "Visualization"],
    // link: "https://app.notion.com/p/monitoring-platform-3f16318a0dec80a88da7c22a6e941764?pvs=21",
    linkLabel: "View project notes"
  },
  {
    category: "paid",
    directions: ["ml-engineer"],
    group: "PAID CONTRACT / NSTDA THAILAND / COMPUTER VISION",
    title: "Video2Smplx",
    description: "Developed a modular SMPL-X reconstruction pipeline for monocular sign-language video and images, integrating full-body reconstruction and investigating residual errors in global alignment, wrist and finger rotation, and upper-body articulation.",
    result: "3 RESIDUAL ERROR MODES IDENTIFIED",
    tags: ["Contract Project", "NSTDA", "Python", "PyTorch", "SMPL-X", "Computer Vision"],
    link: "https://github.com/hereisamara/Video2Smplx",
    linkLabel: "View project"
  },
  {
    category: "paid",
    directions: ["ml-engineer"],
    group: "PAID CONTRACT / NSTDA THAILAND / 3D COMPUTER VISION",
    title: "Multi-Camera Calibration for 3D Pose Detection",
    description: "Unified pinhole, fisheye, and wide-angle camera sources through intrinsic and extrinsic calibration to support consistent multi-view 3D environment reconstruction and pose detection.",
    result: "INTRINSIC + EXTRINSIC MULTI-CAMERA CALIBRATION",
    tags: ["Contract Project", "NSTDA", "Camera Calibration", "Multi-view", "3D Vision", "Pose Detection"]
  },
  {
    category: "personal",
    directions: ["data-scientist", "ml-engineer"],
    group: "PERSONAL PROJECT / ASTRONOMICAL IMAGING",
    title: "Satellite Trail Detection in FITS Images",
    description: "Benchmarked classical Hough-based detection against transformer and generative representations on astronomical FITS imagery, analyzing their respective strengths for satellite-trail localization and classification.",
    result: "HOUGH VS. TRANSFORMER & GENERATIVE BENCHMARK",
    link: "https://khineaindrayhtun.medium.com/why-planetary-telescope-coordinates-broke-my-satellite-tracking-c7987d381f8f",
    linkLabel: "Read article",
    tags: ["Python", "OpenCV", "Astropy", "Transformers", "scikit-image"]
  },
  {
    category: "personal",
    directions: ["ml-engineer"],
    group: "PERSONAL PROJECT / PRIVACY-PRESERVING AI",
    title: "Digital Safety Application — FOSSASIA Summit 2026",
    description: "Developed an on-device grooming-detection prototype with privacy-preserving local inference and transparent escalation workflows within a three-day summit hackathon.",
    result: "2ND PRIZE · BEST PRIVACY BY DESIGN",
    tags: ["On-device AI", "Privacy", "Safety", "Rapid Prototyping"]
  },
  {
    category: "personal",
    directions: ["data-scientist"],
    group: "PERSONAL PROJECT / MACHINE LEARNING",
    title: "Flu Shot Learning",
    description: "Used the CRISP-DM lifecycle to predict H1N1 and seasonal flu vaccine uptake, comparing multiple classifiers after structured preprocessing and imputation.",
    result: "COMPETITION SCORE 0.8632 · RANKED 121ST",
    tags: ["Python", "Scikit-learn", "XGBoost", "CatBoost", "LightGBM"]
  },
  {
    category: "personal",
    directions: ["data-engineer"],
    group: "PERSONAL PROJECT / SOFTWARE SYSTEMS",
    title: "Document Workflow & Approval System",
    description: "Led development of a faculty document-approval system that replaced email-based submissions with structured routing, version tracking, approval states, and centralized review.",
    result: "ROUTING · VERSION TRACKING · APPROVAL STATES",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Chart.js"]
  },
  {
    category: "personal",
    directions: ["data-scientist", "ml-engineer"],
    group: "PERSONAL PROJECT / COMPUTER VISION",
    title: "Burmese Handwriting Digit Recognizer",
    description: "Developed a CNN-based model for recognizing Burmese handwritten digits, trained on more than 80,000 images from the BHDD dataset.",
    result: "99.56% CLASSIFICATION ACCURACY",
    tags: ["Python", "TensorFlow", "CNN", "OCR", "BHDD"]
  },
  {
    category: "personal",
    directions: ["data-scientist", "ml-engineer"],
    group: "PERSONAL PROJECT / AI REASONING",
    title: "Minesweeper AI Solver",
    description: "Created an AI solver that uses propositional logic and constraint satisfaction to identify safe cells and hidden mines on complex boards.",
    result: "LOGIC + CONSTRAINT-BASED SOLVING",
    tags: ["Artificial Intelligence", "Propositional Logic", "Constraint Satisfaction", "Python"]
  },
  {
    category: "paid",
    directions: ["ml-engineer"],
    group: "PAID CONTRACT / VR MAKER #1 BY KMUTT / VIRTUAL REALITY",
    title: "Educational VR Physics Lab",
    description: "Built an interactive Unity simulation for VR Maker #1 by KMUTT that calculates and visualizes metacentric height and boat stability under changing weight distributions.",
    result: "INTERACTIVE STABILITY SIMULATION",
    tags: ["Contract Project", "KMUTT", "Unity", "Virtual Reality", "Physics Simulation", "UX"],
    // link: "https://github.com/hereisamara/VR-base-physics-lab-sim",
    // linkLabel: "View project"
  },
  {
    category: "paid",
    directions: ["data-scientist", "ml-engineer"],
    group: "PAID CONTRACT / SKYLLER CO., LTD. / INFRASTRUCTURE INSPECTION",
    title: "High-Resolution Crack Detection",
    description: "Investigated attention-enhanced YOLO architectures for high-resolution crack detection, integrating CBAM modules and evaluating performance on Skyller's private infrastructure imagery.",
    result: "87% ACCURACY ON PRIVATE DATA",
    tags: ["Contract Project", "Skyller", "Python", "YOLO", "CBAM", "Computer Vision"],
    link: "https://github.com/hereisamara/yolov8-cbam-seg",
    linkLabel: "View related implementation"
  },
  {
    category: "paid",
    directions: ["data-scientist", "ml-engineer"],
    group: "PAID CONTRACT / SKYLLER CO., LTD. / INDUSTRIAL COMPUTER VISION",
    title: "Real-Time Corrosion Detection & Classification — Combined YOLO Ensemble",
    description: "Developed and evaluated YOLOv8-based corrosion detection on high-resolution drone imagery, addressing visually similar defect classes through model ensembling and failure-case analysis across three versions.",
    result: "BEST OF 3 VERSIONS · APPROX. 75% IOU ON PRIVATE DATA",
    tags: ["Contract Project", "Skyller", "Python", "YOLOv8", "Drone Imagery", "Ensembling", "Classification"]
  },
  {
    category: "job",
    directions: ["data-engineer"],
    group: "AGODA / DATA ENGINEERING",
    title: "Kubeflow Housekeeping Automation",
    description: "Automated cleanup of outdated pipeline data across S3 and VastFS-backed storage and optimized the production SQL used for batch deletion.",
    result: "20 MIN → 2 SEC · ~600× SPEEDUP",
    tags: ["SQL", "Kubernetes", "S3", "VastFS"]
  },
  {
    category: "job",
    directions: ["data-engineer"],
    group: "SPECIFIC IMPULSE / SYSTEM INTEGRATION",
    title: "DJI Dock & Aircraft Telemetry Integration",
    description: "Integrated DJI Dock and aircraft telemetry into an operational monitoring dashboard through DJI Cloud APIs, implementing JSON-based ingestion and backend interfaces for near-real-time aircraft and dock status updates.",
    result: "NEAR-REAL-TIME OPERATIONAL VISIBILITY",
    tags: ["DJI Cloud API", "REST APIs", "JSON", "Telemetry"]
  },
  {
    category: "job",
    directions: ["ml-engineer"],
    group: "SPECIFIC IMPULSE / COMPUTER VISION",
    title: "Real-Time Computer Vision & Image Pipeline",
    description: "Built a real-time panoramic image-stitching and streaming pipeline using feature extraction, homography estimation, and geometric transformation, sustaining 10 FPS on high-resolution 2K imagery.",
    result: "REAL-TIME PROCESSING AT 10 FPS",
    tags: ["Python", "OpenCV", "Homography", "Real-time Systems"]
  },
  {
    category: "job",
    directions: ["ml-engineer"],
    group: "SPECIFIC IMPULSE / EDGE AI",
    title: "Orange Pi CM5 Edge AI Deployment",
    description: "Deployed YOLO-based computer-vision workloads on Orange Pi CM5, optimizing the inference pipeline for constrained edge compute and real-time field operation.",
    result: "YOLO-BASED EDGE INFERENCE FOR FIELD OPERATION",
    tags: ["Edge AI", "Orange Pi", "Deployment", "Optimization"]
  },
  {
    category: "job",
    directions: ["data-engineer"],
    group: "SPECIFIC IMPULSE / COMMUNICATION SYSTEMS",
    title: "LoRa Communication Experiments",
    description: "Evaluated LoRa communication for distributed edge-system integration by measuring latency, packet loss, and transmission reliability under varying conditions.",
    result: "EXPERIMENTAL LATENCY, PACKET-LOSS & RELIABILITY PROFILE",
    tags: ["LoRa", "IoT", "Networking", "Experimentation"]
  },
  {
    category: "job",
    directions: ["data-engineer", "ml-engineer"],
    group: "SPECIFIC IMPULSE / SIMULATION + DATA",
    title: "Autonomous Drone Simulation & Sensor Data Pipeline",
    description: "Built a 300 × 300 m Isaac Sim environment with five autonomous UAVs and four RGB-D cameras, capturing synchronized ML-ready data in HDF5.",
    result: "SYNCHRONIZED MULTI-UAV RGB-D DATA PIPELINE",
    tags: ["Isaac Sim", "Pegasus SDK", "Python", "HDF5", "OpenCV"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const projectGrid = document.getElementById("projectGrid");

  if (projectGrid) {
    projectGrid.innerHTML = portfolioProjects.map((project, index) => {
      const tags = project.tags
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");
      const isExternalLink = project.link && /^https?:\/\//.test(project.link);
      const link = project.link
        ? `<a href="${project.link}"${isExternalLink ? ` target="_blank" rel="noreferrer"` : ``} class="project-link">${project.linkLabel}${isExternalLink ? ` ↗` : ``}</a>`
        : ``;

      return `
        <article class="project-card sketch-card ${index % 2 === 0 ? "tilt-left" : "tilt-right"}" data-directions="${project.directions.join(" ")}" data-project-type="${project.category}">
          <p class="project-number"><span class="project-index"></span> / ${project.group}</p>
          <h3>${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-result"><span class="project-result-label">Highlight</span>${project.result}</div>
          <div class="project-bottom">
            <div class="tags">${tags}</div>
            ${link}
          </div>
        </article>`;
    }).join("");
  }

  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project-card");
  const scopeToggle = document.getElementById("projectScopeToggle");
  let selectedDirection = "all";
  let showProfessionalProjects = false;

  const updateVisibleProjects = () => {
    let visibleIndex = 0;

    projects.forEach((project) => {
      const directions = project.dataset.directions.split(" ");
      const matchesDirection = selectedDirection === "all" || directions.includes(selectedDirection);
      const matchesScope = showProfessionalProjects || project.dataset.projectType === "personal";
      const show = matchesDirection && matchesScope;

      project.classList.toggle("hidden", !show);

      if (show) {
        visibleIndex += 1;
        project.querySelector(".project-index").textContent = String(visibleIndex).padStart(2, "0");
      }
    });
  };

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      selectedDirection = button.dataset.filter;

      filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      updateVisibleProjects();
    });
  });

  if (scopeToggle) {
    scopeToggle.addEventListener("click", () => {
      showProfessionalProjects = !showProfessionalProjects;
      scopeToggle.classList.toggle("expanded", showProfessionalProjects);
      scopeToggle.setAttribute("aria-expanded", String(showProfessionalProjects));
      updateVisibleProjects();
    });
  }

  updateVisibleProjects();

  const chartCanvas = document.getElementById("domainChart");

  if (chartCanvas && typeof Chart !== "undefined") {
    new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: ["Data Eng.", "ML & AI", "Computer Vision", "MLOps", "Backend", "Analytics & BI"],
        datasets: [{
          label: "Working strength",
          data: [4, 4, 5, 4, 4, 4],
          backgroundColor: "#bfd5c4",
          borderColor: "#1a1a18",
          borderWidth: 2,
          borderRadius: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 700
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#1a1a18",
            titleColor: "#fffdf8",
            bodyColor: "#fffdf8",
            displayColors: false,
            callbacks: {
              label: (context) => {
                const levels = ["", "Exploring", "Developing", "Working", "Strong", "Core strength"];
                return levels[context.raw] || "Working strength";
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: "#1a1a18",
              font: {
                family: "Inter",
                size: 11,
                weight: 700
              }
            },
            border: {
              color: "#1a1a18",
              width: 2
            }
          },
          y: {
            beginAtZero: true,
            max: 5,
            grid: {
              color: "rgba(26, 26, 24, 0.12)",
              borderDash: [5, 5]
            },
            ticks: {
              color: "#67645d",
              precision: 0,
              stepSize: 1,
              callback: (value) => ({
                0: "",
                1: "Exploring",
                2: "Developing",
                3: "Working",
                4: "Strong",
                5: "Core"
              }[value] || ""),
              font: {
                family: "Inter",
                size: 11
              }
            },
            border: {
              color: "#1a1a18",
              width: 2
            }
          }
        }
      }
    });
  }
});
