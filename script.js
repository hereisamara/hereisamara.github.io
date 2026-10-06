const portfolioProjects = [
  {
    category: "personal",
    directions: ["data-scientist", "ml-engineer"],
    group: "PERSONAL PROJECT / GENERATIVE AI",
    title: "Ezria — RAG-Based AI Study Assistant",
    description: "Built a study assistant that retrieves knowledge from uploaded documents and generates contextual explanations, question-answering responses, and examples.",
    result: "RAG + LLM STUDY WORKFLOW",
    tags: ["Python", "Flask", "AWS", "Docker", "RAG"],
    link: "https://github.com/Ezria-Study/Ezria-Demo",
    linkLabel: "View project"
  },
  {
    category: "personal",
    directions: ["ml-engineer"],
    group: "PERSONAL PROJECT / GENERATIVE AI",
    title: "AI-Driven Diagram Assistant for Draw.io",
    description: "Created and modified UML and system diagrams from natural-language commands using an LLM pipeline, RAG, LangChain, and the Draw.io API.",
    result: "NATURAL LANGUAGE → STRUCTURED DIAGRAMS",
    tags: ["OpenAI", "Gemini", "LangChain", "TypeScript", "Docker"],
    link: "https://github.com/hereisamara/autodiagen-drawio",
    linkLabel: "View project"
  },
  {
    category: "personal",
    directions: ["data-scientist", "data-engineer"],
    group: "PERSONAL PROJECT / DATA VISUALIZATION",
    title: "Monitoring Platform",
    description: "Designed a monitoring platform for tracking operational information and presenting decision-ready views in Power BI.",
    result: "POWER BI MONITORING WORKFLOW",
    tags: ["Power BI", "Monitoring", "Analytics", "Visualization"],
    // link: "https://app.notion.com/p/monitoring-platform-3f16318a0dec80a88da7c22a6e941764?pvs=21",
    linkLabel: "View project notes"
  },
  {
    category: "paid",
    directions: ["ml-engineer"],
    group: "PAID CONTRACT / NSTDA THAILAND / COMPUTER VISION",
    title: "Video2Smplx",
    description: "Developed an end-to-end pipeline for reconstructing expressive 3D full-body animation from monocular video or images as a contract project for NSTDA Thailand.",
    result: "MONOCULAR VIDEO → 3D HUMAN MOTION",
    tags: ["Contract Project", "NSTDA", "Python", "PyTorch", "SMPL-X", "Computer Vision"],
    link: "https://github.com/hereisamara/Video2Smplx",
    linkLabel: "View project"
  },
  {
    category: "personal",
    directions: ["data-scientist", "ml-engineer"],
    group: "PERSONAL PROJECT / ASTRONOMICAL IMAGING",
    title: "Satellite Trail Detection in FITS Images",
    description: "Built an AI-assisted pipeline for detecting and classifying satellite trails, benchmarking Hough-based methods against transformer and generative-model representations.",
    result: "CLASSICAL + LEARNED METHOD BENCHMARK",
    link: "https://khineaindrayhtun.medium.com/why-planetary-telescope-coordinates-broke-my-satellite-tracking-c7987d381f8f",
    tags: ["Python", "OpenCV", "Astropy", "Transformers", "scikit-image"]
  },
  {
    category: "personal",
    directions: ["ml-engineer"],
    group: "PERSONAL PROJECT / PRIVACY-PRESERVING AI",
    title: "Digital Safety Application — FOSSASIA Summit 2026",
    description: "Created an on-device grooming-detection prototype with local processing and transparent escalation workflows, built in three days during the summit hackathon.",
    result: "2ND PRIZE · BEST PRIVACY BY DESIGN",
    tags: ["On-device AI", "Privacy", "Safety", "Rapid Prototyping"]
  },
  {
    category: "personal",
    directions: ["data-scientist"],
    group: "PERSONAL PROJECT / MACHINE LEARNING",
    title: "Flu Shot Learning",
    description: "Used the CRISP-DM lifecycle to predict H1N1 and seasonal flu vaccine uptake, comparing multiple classifiers after structured preprocessing and imputation.",
    result: "SCORE 0.8632 · RANKED 121ST",
    tags: ["Python", "Scikit-learn", "XGBoost", "CatBoost", "LightGBM"]
  },
  {
    category: "personal",
    directions: ["data-engineer"],
    group: "PERSONAL PROJECT / SOFTWARE SYSTEMS",
    title: "Document Workflow & Approval System",
    description: "Led a group project that replaced email-based faculty approvals with a structured document workflow, improving version control and review efficiency.",
    result: "VERSIONED APPROVAL WORKFLOW",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Chart.js"]
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
    description: "Developed a YOLO-based crack-detection system with attention modules for high-resolution infrastructure inspection imagery under contract with Skyller Co., Ltd.",
    result: "87% ACCURACY ON PRIVATE DATA",
    tags: ["Contract Project", "Skyller", "Python", "YOLO", "CBAM", "Computer Vision"],
    link: "https://github.com/hereisamara/yolov8-cbam-seg",
    linkLabel: "View related implementation"
  },
  {
    category: "paid",
    directions: ["data-scientist", "ml-engineer"],
    group: "PAID CONTRACT / SKYLLER CO., LTD. / INDUSTRIAL COMPUTER VISION",
    title: "Real-Time Corrosion Detection & Classification",
    description: "Developed and evaluated real-time corrosion detection for high-resolution drone imagery containing visually similar corrosion classes under contract with Skyller Co., Ltd.",
    result: "HIGH-RES DRONE INSPECTION",
    tags: ["Contract Project", "Skyller", "Python", "YOLOv8", "Drone Imagery", "Classification"]
  },
  {
    category: "paid",
    directions: ["data-scientist", "ml-engineer"],
    group: "PAID CONTRACT / SKYLLER CO., LTD. / MODEL ENSEMBLING",
    title: "Combined YOLO Corrosion Ensemble",
    description: "Built an ensemble of YOLOv8 models to improve robustness across difficult corrosion classes under contract with Skyller Co., Ltd.",
    result: "75% IOU ON PRIVATE DATA",
    tags: ["Contract Project", "Skyller", "YOLOv8", "Ensembling", "Evaluation", "Computer Vision"]
  },
  {
    category: "job",
    directions: ["data-engineer"],
    group: "AGODA / DATA ENGINEERING",
    title: "Kubeflow Housekeeping Automation",
    description: "Automated cleanup of outdated pipeline data across S3 and VastFS-backed storage and optimized the production SQL used for batch deletion.",
    result: "20 MIN → 2 SEC · 99.83% FASTER",
    tags: ["SQL", "Kubeflow", "Kubernetes", "S3", "VastFS"]
  },
  {
    category: "job",
    directions: ["data-engineer"],
    group: "SPECIFIC IMPULSE / SYSTEM INTEGRATION",
    title: "DJI Dock & Aircraft Telemetry Integration",
    description: "Integrated DJI Dock and aircraft telemetry into a monitoring dashboard using DJI Cloud APIs and JSON-based data flows.",
    result: "NEAR-REAL-TIME OPERATIONAL VISIBILITY",
    tags: ["DJI Cloud API", "REST APIs", "JSON", "Telemetry"]
  },
  {
    category: "job",
    directions: ["ml-engineer"],
    group: "SPECIFIC IMPULSE / COMPUTER VISION",
    title: "Real-Time Computer Vision & Image Pipeline",
    description: "Built a streaming image-processing pipeline using feature extraction, homography, and geometric transformations for production-oriented computer vision.",
    result: "REAL-TIME PROCESSING AT 10 FPS",
    tags: ["Python", "OpenCV", "Homography", "Real-time Systems"]
  },
  {
    category: "job",
    directions: ["ml-engineer"],
    group: "SPECIFIC IMPULSE / EDGE AI",
    title: "Orange Pi CM5 Edge AI Deployment",
    description: "Deployed and optimized AI workloads on Orange Pi CM5 hardware, balancing inference performance with edge-device constraints.",
    result: "EDGE INFERENCE ON ORANGE PI CM5",
    tags: ["Edge AI", "Orange Pi", "Deployment", "Optimization"]
  },
  {
    category: "job",
    directions: ["data-engineer"],
    group: "SPECIFIC IMPULSE / COMMUNICATION SYSTEMS",
    title: "LoRa Communication Experiments",
    description: "Evaluated LoRa communication behavior for distributed-system integration, measuring latency, packet loss, and reliability trade-offs.",
    result: "LATENCY · PACKET LOSS · RELIABILITY",
    tags: ["LoRa", "IoT", "Networking", "Experimentation"]
  },
  {
    category: "job",
    directions: ["data-engineer", "ml-engineer"],
    group: "SPECIFIC IMPULSE / SIMULATION + DATA",
    title: "Autonomous Drone Simulation & Sensor Data Pipeline",
    description: "Built a 300 × 300 m Isaac Sim environment with five autonomous UAVs and four RGB-D cameras, capturing synchronized ML-ready data in HDF5.",
    result: "5 UAVS · 4 RGB-D CAMERAS ",
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
      const link = project.link
        ? `<a href="${project.link}" target="_blank" rel="noreferrer" class="project-link">${project.linkLabel} ↗</a>`
        : ``;

      return `
        <article class="project-card sketch-card ${index % 2 === 0 ? "tilt-left" : "tilt-right"}" data-directions="${project.directions.join(" ")}" data-project-type="${project.category}">
          <p class="project-number"><span class="project-index"></span> / ${project.group}</p>
          <h3>${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-result">${project.result}</div>
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
        labels: ["ML & AI", "Computer Vision", "Data Engineering", "Backend", "Analytics"],
        datasets: [{
          label: "Working strength",
          data: [5, 5, 4, 4, 4],
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
