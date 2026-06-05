/**
 * ============================================================
 *  PORTFOLIO CONTENT FILE — EDIT THIS FILE TO UPDATE WEBSITE
 *  All text, links, skills, projects, and sections live here.
 *  The website reads this file on load — no code changes needed.
 *
 *  HOW TO USE:
 *  1. Open this file and update any field below.
 *  2. Save the file.
 *  3. Refresh the browser — the website updates automatically.
 *  4. You NEVER need to touch index.html, styles.css, or app.js.
 * ============================================================
 */

const PORTFOLIO_CONTENT = {

  // ── PERSONAL INFO ──────────────────────────────────────────
  personal: {
    name: "Sai Srujan Thammishetti",
    title: "Senior Android Developer",
    tagline: "Kotlin · Jetpack Compose · KMM · Generative AI",
    heroSubtitle: "Engineering scalable Android experiences powered by modern architecture and AI.",
    location: "Bangalore, India",
    email: "saisrujan@example.com",           // ← update with real email
    phone: "+91 00000 00000",                // ← update with real phone
    linkedin: "https://www.linkedin.com/in/sai-srujan-thammishetti-25493920b/",
    github: "https://github.com/Srujan-github",
    githubOpenSource: "https://github.com/saibabu0524",   // open-source profile
    portfolio: "#",                           // ← update if separate URL
    resumeDownload: "#",                      // ← update with hosted PDF link
    availability: "Open to FAANG & High-Growth Opportunities",

    // Hero stats — calculated dynamically where marked, otherwise use literal
    stats: [
      { value: "dynamic:experience", label: "Years of Experience", suffix: "+" },
      { value: "10",                 label: "Apps Shipped",        suffix: "+" },
      { value: "98",                 label: "Test Coverage",       suffix: "%" },
      { value: "1800",               label: "Medical Providers",   suffix: "+" },
    ],

    // Typing animation words (hero section)
    typingWords: [
      "Senior Android Developer",
      "Kotlin & Compose Expert",
      "KMM Architect",
      "Generative AI Builder",
      "Open Source Contributor",
    ],

    // Experience start date for dynamic calculation (YYYY-MM format)
    experienceStartDate: "2021-01",
  },

  // ── ABOUT SECTION ──────────────────────────────────────────
  about: {
    intro: "I'm a Senior Android Developer based in Bangalore, India, with a strong track record of shipping production-grade mobile applications for enterprise clients including HSBC Hong Kong.",
    paragraphs: [
      "I specialize in Kotlin, Jetpack Compose, and Kotlin Multiplatform (KMM), with hands-on experience in Python backend engineering (FastAPI, PostgreSQL) and Generative AI / LLM integration — a rare cross-disciplinary combination.",
      "I have built offline-first, real-time, and cross-platform solutions that serve thousands of active users, including a healthcare module within HSBC HK's banking app with 98% SonarQube-verified test coverage.",
      "My engineering philosophy: clean architecture, rigorous testing, measurable performance gains, and AI-augmented workflows that keep delivery velocity high without sacrificing quality.",
    ],
    highlights: [
      { icon: "smartphone", label: "Mobile Expert", desc: "Kotlin · Jetpack Compose · KMM · Android SDK" },
      { icon: "layers",     label: "Architect",     desc: "MVVM · MVI · Clean Architecture · SOLID" },
      { icon: "cpu",        label: "AI Practitioner", desc: "LLM APIs · AI Agents · Claude Code · Copilot" },
      { icon: "server",     label: "Full-Stack Aware", desc: "FastAPI · PostgreSQL · PostGIS · Docker" },
    ],
  },

  // ── PROFESSIONAL SUMMARY ───────────────────────────────────
  summary: [
    "Senior Android Developer with 3+ years of hands-on experience building scalable, high-performance mobile applications across enterprise banking, real-time communication, AI-powered systems, and productivity platforms.",
    "Proven track record shipping production apps for enterprise clients (HSBC HK), leading cross-functional teams, and delivering offline-first, real-time, and cross-platform solutions. Passionate about optimizing UI/UX, reducing latency, and ensuring exceptional user experiences at scale.",
    "Deep expertise in Kotlin, Jetpack Compose, and Kotlin Multiplatform (KMM), with hands-on secondary capability in Python backend engineering (FastAPI, PostgreSQL) and Generative AI / LLM integration.",
    "Experienced AI practitioner — building and integrating LLM-powered features in mobile and backend applications, orchestrating AI agent workflows, and leveraging tools like Claude Code and GitHub Copilot to accelerate delivery and code quality.",
  ],

  // ── TECHNICAL SKILLS ──────────────────────────────────────
  skills: [
    {
      category: "Languages",
      icon: "code",
      color: "#2563EB",
      items: ["Kotlin", "Java", "Python"],
    },
    {
      category: "Android",
      icon: "smartphone",
      color: "#7C3AED",
      items: ["Android SDK", "Jetpack Compose", "Compose Multiplatform", "KMM", "XML Layouts", "Android Architecture Components", "Material 3"],
    },
    {
      category: "Architecture",
      icon: "layers",
      color: "#0891B2",
      items: ["MVVM", "MVI", "MVP", "Clean Architecture", "SOLID Principles", "Repository Pattern", "Modular Architecture"],
    },
    {
      category: "Libraries & Networking",
      icon: "zap",
      color: "#059669",
      items: ["Dagger-Hilt", "Koin", "Retrofit", "Ktor", "OkHttp", "RxJava", "Coroutines", "Flow", "StateFlow", "Room", "SQLDelight", "Glide", "WorkManager"],
    },
    {
      category: "Real-time & Firebase",
      icon: "wifi",
      color: "#D97706",
      items: ["WebRTC", "Socket.io", "Firebase FCM", "Firestore", "Firebase Analytics", "Push Notifications", "Adaptive Bitrate Streaming"],
    },
    {
      category: "Backend",
      icon: "server",
      color: "#DC2626",
      items: ["FastAPI", "PostgreSQL", "PostGIS", "SQLAlchemy", "Redis", "Kafka", "Pydantic", "Docker", "REST APIs"],
    },
    {
      category: "AI / LLM",
      icon: "cpu",
      color: "#7C3AED",
      items: ["Generative AI", "LLM Integration", "AI Agents", "Anthropic Claude API", "OpenAI API", "Claude Code", "GitHub Copilot", "On-device ML", "Agentic Workflows"],
    },
    {
      category: "Testing & Quality",
      icon: "shield",
      color: "#065F46",
      items: ["JUnit", "Espresso", "Mockito", "Mockk", "SonarQube", "Android Profiler", "TDD"],
    },
    {
      category: "DevOps & Tools",
      icon: "git-branch",
      color: "#1E40AF",
      items: ["Git", "GitHub Actions", "CI/CD Pipelines", "Gradle", "Jira", "ClickUp", "Confluence", "Postman", "Docker"],
    },
    {
      category: "Databases",
      icon: "database",
      color: "#92400E",
      items: ["Room DB", "SQLite", "SQLDelight", "PostgreSQL", "Firebase Firestore"],
    },
  ],

  // ── PROFESSIONAL EXPERIENCE ────────────────────────────────
  experience: [
    {
      role: "Senior Android Developer",
      company: "Softsuave Technologies",
      companyUrl: "",               // ← add URL if available
      period: { start: "2023-07", end: null },  // null = "Present"
      location: "Bangalore, India",
      type: "Full-time",
      highlights: [
        "Build scalable, consumer-facing Android features using Jetpack Compose, ViewModel, Flow, and Coroutines, ensuring smooth and responsive UI under real-world traffic conditions.",
        "Spearheaded migration of legacy XML views to Jetpack Compose, reducing UI boilerplate by 40% and improving developer velocity.",
        "Architect RESTful API integrations with advanced caching strategies to optimize performance and reduce latency for data-intensive applications.",
        "Apply SOLID principles and implement dependency injection with Dagger/Hilt for modular, testable, and maintainable codebases.",
        "Lead code reviews enforcing best practices and deliver measurable performance optimizations across memory, startup time, and network usage.",
        "Maintain high-quality code with rigorous testing suites using JUnit, Espresso, and Mockito — targeting >95% coverage on critical paths.",
        "Collaborate closely with Product, UX, and QA teams integrating Firebase, WebRTC, and push notifications in fast-paced agile sprints.",
        "Build and integrate AI-powered features using LLMs and Generative AI; leverage Claude Code and GitHub Copilot to accelerate development.",
      ],
      techStack: ["Kotlin", "Jetpack Compose", "Dagger-Hilt", "Flow", "Coroutines", "Firebase", "WebRTC", "REST APIs", "CI/CD"],
    },
    {
      role: "Android Developer",
      company: "Softsuave Technologies",
      companyUrl: "",
      period: { start: "2021-01", end: "2023-07" },
      location: "Bangalore, India",
      type: "Full-time",
      highlights: [
        "Designed and optimized a large-scale Android application using Kotlin and Dagger2, reducing latency by 25% and improving unit test coverage to 90%.",
        "Designed and developed a scalable Android application using Kotlin, MVVM, and Jetpack Compose, enabling real-time KPI tracking, efficient data collection, and seamless document management.",
        "Implemented WebRTC group video calls supporting 10 concurrent users with adaptive bitrate streaming, achieving a 95% call quality satisfaction rate across 10,000+ active users.",
        "Architected offline-first solutions with Room Persistence and WorkManager, reducing data usage by 40% and ensuring 99.9% message delivery reliability in poor network conditions.",
        "Optimized background sync with WorkManager and caching, cutting battery usage by 25% and syncing data within 5 minutes of reconnection.",
        "Integrated Retrofit API callbacks for real-time sync, achieving a 99.9% transaction success rate and reducing latency by 20%.",
        "Maintained HSBC brand standards with polished UI consistent with the app's enterprise design system.",
      ],
      techStack: ["Kotlin", "MVVM", "Dagger2", "Retrofit", "Room", "WorkManager", "WebRTC", "Firebase", "JUnit", "Mockito"],
    },
  ],

  // ── KEY PROJECTS ───────────────────────────────────────────
  projects: [
    {
      id: "bustlespot",
      name: "BustleSpot",
      subtitle: "Unified Workforce & Productivity Platform",
      period: { start: "2025-01", end: null },
      tags: ["KMM", "Compose Multiplatform", "FastAPI", "Python", "SQLDelight", "PostgreSQL", "PostGIS"],
      description: "Architected a multi-modal cross-platform tracking system combining a desktop productivity client and a KMM mobile app for geospatial tracking, with a FastAPI backend ingesting and correlating distinct high-frequency data streams.",
      problem: "Organizations needed a unified system to track remote employee productivity across platforms (mobile, desktop) with geospatial intelligence and offline resilience.",
      architecture: "KMM shared business logic → Compose Multiplatform UI (Android/iOS/Desktop) → FastAPI backend → PostgreSQL/PostGIS",
      highlights: [
        "Engineered shared KMM business logic for iOS and Android encapsulating GPS acquisition, data formatting, and offline persistence — eliminating duplicate platform code.",
        "Built production-ready desktop clients (Windows, macOS, Ubuntu) using Compose Multiplatform with system-level activity monitoring (mouse/keyboard productivity analytics).",
        "Designed FastAPI backend using Pydantic union routing to handle heterogeneous payloads stored in PostgreSQL/PostGIS.",
        "Implemented offline-first architecture with SQLDelight and Coroutines StateFlow for seamless background auto-sync on network reconnection.",
        "Instituted comprehensive multiplatform testing strategy and integrated CI/CD pipelines (GitHub Actions) ensuring reliability across Android, iOS, and Desktop targets.",
      ],
      metrics: ["Cross-platform (Android · iOS · Windows · macOS · Ubuntu)", "Offline-first with auto-sync", "CI/CD with GitHub Actions"],
      githubUrl: "",
      liveUrl: "",
      featured: true,
    },
    {
      id: "healthpass",
      name: "HealthPass",
      subtitle: "HSBC HK — Digital Healthcare Module",
      period: { start: "2023-01", end: "2024-12" },
      tags: ["Kotlin", "Android SDK", "MVP", "Retrofit", "JUnit", "Mockk", "SonarQube", "CI/CD"],
      description: "Delivered a digital healthcare membership module within HSBC Hong Kong's consumer banking app, enabling preferential medical consultation access, video GP bookings, and real-time plan management under strict security and data privacy standards.",
      problem: "HSBC Hong Kong required a secure, highly-tested healthcare benefits module embedded in their flagship banking app for thousands of banking customers.",
      architecture: "MVP Architecture → Retrofit REST APIs → SonarQube quality gates → CI/CD pipelines",
      highlights: [
        "Achieved 98% test coverage (SonarQube verified) using MVP architecture with rigorous JUnit + Mockk test suites.",
        "Engineered deep-link navigation for seamless campaign-to-app redirects, measurably improving conversion funnel performance.",
        "Integrated secure RESTful APIs for real-time plan validation, membership updates, and live service provider data exchange.",
        "Resolved a critical back-button navigation bug in under 4 hours during a major production release — received formal commendation from HSBC HK.",
        "Enabled real-time booking with a network of 1,800+ medical providers across 25+ specialties.",
        "Collaborated cross-timezone with backend engineers, designers, and product managers to deliver all features on schedule.",
      ],
      metrics: ["98% Test Coverage (SonarQube)", "1,800+ Medical Providers", "25+ Specialties", "Bug resolved in <4 hours"],
      githubUrl: "",
      liveUrl: "",
      featured: true,
    },
    {
      id: "playchat",
      name: "PlayDate / Playchat",
      subtitle: "Secure Encrypted Chat & Video Platform for Children",
      period: { start: "2022-06", end: "2023-06" },
      tags: ["Kotlin", "Jetpack Compose", "WebRTC", "Firebase", "Socket.io", "Room", "MVVM"],
      description: "Built a production-grade encrypted messaging and video-calling app for children with parental controls and offline-first design, integrating WebRTC and Firebase for low-latency real-time communication.",
      problem: "Parents needed a safe, monitored communication platform for children with real-time content moderation and end-to-end encryption.",
      architecture: "MVVM → WebRTC + Socket.io (real-time) → Firebase (backend) → Room (offline) → on-device ML (content moderation)",
      highlights: [
        "Implemented end-to-end encryption across all user communications ensuring data privacy and safety.",
        "Engineered low-latency WebRTC video calls supporting 10 concurrent users with adaptive bitrate streaming — 95% satisfaction rate.",
        "Built high-payload messaging service capable of handling rapid group message volumes without frame drops.",
        "Developed speech recognition integration to detect and block vulgar content in real time, maintaining a safe environment for children.",
        "Architected offline-first solution with Room Persistence, ensuring 99.9% message delivery reliability in poor network conditions.",
        "Enhanced chat with media and audio message support, increasing daily active users by 20% within three months of release.",
      ],
      metrics: ["10,000+ Active Users", "95% Call Quality Rate", "99.9% Message Delivery", "+20% DAU in 3 months"],
      githubUrl: "",
      liveUrl: "",
      featured: true,
    },
    {
      id: "mobile-tracker",
      name: "Mobile Tracker",
      subtitle: "Real-time Task Management & Productivity App",
      period: { start: "2022-01", end: "2022-12" },
      tags: ["Kotlin", "Jetpack Compose", "MVVM", "WorkManager", "Retrofit", "Firebase", "Room"],
      description: "Task management app with real-time tracking, deadline management, and automated daily reports. Captures user interactions every 10 minutes and handles offline data efficiently.",
      problem: "Teams needed an automated productivity tracking solution with accurate activity monitoring and reliable offline support.",
      architecture: "MVVM → WorkManager (background) → Retrofit (sync) → Room (offline) → Firebase Analytics",
      highlights: [
        "Developed an activity tracking algorithm with 99% accuracy using media projection and accessibility services.",
        "Optimized background sync with WorkManager and caching, cutting battery use by 25%.",
        "Integrated Retrofit API callbacks for real-time sync, achieving a 99.9% transaction success rate and reducing latency by 20%.",
        "Leveraged Room Persistence for offline storage, boosting engagement by 15% during offline use.",
        "Maintained a 98% crash-free rate and consistent experience across all network conditions.",
      ],
      metrics: ["99% Tracking Accuracy", "25% Battery Reduction", "98% Crash-free Rate", "99.9% Sync Success"],
      githubUrl: "",
      liveUrl: "",
      featured: false,
    },
    {
      id: "neon-ai",
      name: "Neon AI",
      subtitle: "Enterprise KPI & Document Management Platform",
      period: { start: "2021-06", end: "2022-06" },
      tags: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Coroutines", "Room", "FCM"],
      description: "Enterprise mobile application providing real-time visibility into organizational KPIs, streamlining data collection, and managing critical business documents in a centralized platform.",
      problem: "Enterprises lacked a unified mobile platform for real-time KPI monitoring and document management across distributed teams.",
      architecture: "MVVM → Coroutines + Flow → Retrofit → Room → FCM push notifications",
      highlights: [
        "Developed scalable Android application using Kotlin and MVVM ensuring clean separation of concerns.",
        "Built responsive UI using Jetpack Compose and Material 3, improving user experience and performance.",
        "Implemented real-time KPI dashboards with dynamic data visualization for business insights.",
        "Integrated secure authentication and data handling mechanisms, ensuring compliance with security best practices.",
        "Implemented document management features including upload, retrieval, and categorization of business-critical files.",
      ],
      metrics: ["Real-time KPI Dashboards", "Secure Document Management", "Material 3 UI"],
      githubUrl: "",
      liveUrl: "",
      featured: false,
    },
    {
      id: "mrc-booking",
      name: "MRC Court Booking",
      subtitle: "Real-Time Sports Booking & Payments Platform",
      period: { start: "2021-01", end: "2021-12" },
      tags: ["Kotlin", "MVVM", "Clean Architecture", "Stripe SDK", "Firebase", "Room", "Coroutines"],
      description: "Real-time sports court booking platform with Stripe payment SDK integration for secure online transactions.",
      problem: "Sports clubs needed a digital booking system with real-time availability, secure payments, and multi-role user management.",
      architecture: "Clean Architecture → MVVM → Stripe SDK → Firebase (real-time) → Room (offline)",
      highlights: [
        "Built real-time availability updates and automated push notification reminders for seamless scheduling.",
        "Implemented Stripe payment SDK integration for secure online transactions.",
        "Applied MVVM and Clean Architecture patterns ensuring long-term maintainability.",
        "Developed dynamic UI supporting multiple user roles (guest, member, admin) with ICS calendar integration.",
      ],
      metrics: ["Stripe Secure Payments", "Real-time Availability", "Multi-role User Management"],
      githubUrl: "",
      liveUrl: "",
      featured: false,
    },
  ],

  // ── GENERATIVE AI & LLM EXPERIENCE ────────────────────────
  aiExperience: {
    intro: "Actively building and integrating AI-powered features in production mobile and backend applications, with hands-on experience across the full LLM integration lifecycle. This is now a core part of my engineering identity.",
    badge: "AI-Ready Engineer · 2025–2026",
    items: [
      {
        icon: "cpu",
        title: "LLM API Integration",
        description: "Build and integrate AI-powered features using large language model APIs including Anthropic Claude and OpenAI, enabling intelligent, context-aware mobile experiences.",
        tags: ["Claude API", "OpenAI API", "Kotlin", "Python"],
      },
      {
        icon: "git-merge",
        title: "AI Agent Orchestration",
        description: "Develop multi-step reasoning pipelines, tool-using agents, and agentic automation workflows using Python — enabling autonomous task execution across mobile and backend systems.",
        tags: ["AI Agents", "Python", "FastAPI", "Agentic Workflows"],
      },
      {
        icon: "zap",
        title: "AI-Assisted Development",
        description: "Daily use of Claude Code and GitHub Copilot for AI-assisted development — from scaffolding architecture to code review, refactoring, and test generation — measurably accelerating velocity.",
        tags: ["Claude Code", "GitHub Copilot", "AI Dev Tooling"],
      },
      {
        icon: "shield",
        title: "On-device & Cloud ML",
        description: "Implemented LLM-backed features in Android apps including real-time content moderation using on-device and cloud ML/AI models (speech recognition for child safety in PlayDate).",
        tags: ["On-device ML", "Content Moderation", "Android ML Kit"],
      },
      {
        icon: "server",
        title: "FastAPI + LLM Backends",
        description: "Experience building Python/FastAPI backends that integrate LLM endpoints for data enrichment, intelligent summarization, and smart routing across enterprise data pipelines.",
        tags: ["FastAPI", "LLM Endpoints", "PostgreSQL", "Python"],
      },
      {
        icon: "layers",
        title: "Multiplatform AI Features",
        description: "Extending AI capabilities across Android, iOS, and Desktop targets using KMM — building shared AI interaction layers that deliver consistent intelligent experiences on all platforms.",
        tags: ["KMM", "Compose Multiplatform", "Cross-platform AI"],
      },
    ],
  },

  // ── OPEN SOURCE ────────────────────────────────────────────
  openSource: [
    {
      name: "android-reusable-components",
      url: "https://github.com/saibabu0524/android-resuable-components",
      description: "A curated library of production-ready Jetpack Compose components, extension functions, and utilities for Android development — designed for real-world reusability and clean API design.",
      tags: ["Kotlin", "Jetpack Compose", "Android"],
      stars: "",          // ← update with actual star count
      forks: "",          // ← update with actual fork count
    },
  ],

  // ── ACHIEVEMENTS & CERTIFICATIONS ─────────────────────────
  achievements: [
    {
      icon: "award",
      title: "HSBC HK Client Commendation",
      description: "Received formal recognition from HSBC Hong Kong for resolving a critical production navigation bug in under 4 hours during a major release — preventing user-facing disruption.",
      type: "achievement",
    },
    {
      icon: "code",
      title: "200+ Competitive Programming Problems",
      description: "Solved 200+ problems on LeetCode, HackerRank, and competitive coding platforms, demonstrating strong algorithmic and problem-solving skills.",
      type: "achievement",
    },
    {
      icon: "star",
      title: "Google Developer Badges — 20+",
      description: "Completed Kotlin Fundamentals and Compose Essentials codelabs — earned 20+ badges on the Google Developer platform.",
      type: "certification",
    },
    {
      icon: "shield",
      title: "Android Security Certification",
      description: "Completed 'Securing Android Apps Against Reverse Engineering' course (Droidcon) — expertise in mobile app security and reverse engineering prevention.",
      type: "certification",
    },
    {
      icon: "zap",
      title: "25% Latency Reduction at Scale",
      description: "Designed and optimized a large-scale Android application using Kotlin and Dagger2, reducing latency by 25% and improving unit test coverage to 90%.",
      type: "achievement",
    },
    {
      icon: "trophy",
      title: "Softsuave Excellence Recognition",
      description: "Recognized for timely deliveries and code quality excellence at Softsuave Technologies across multiple high-stakes enterprise projects.",
      type: "achievement",
    },
  ],

  // ── EDUCATION ──────────────────────────────────────────────
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Jawaharlal Nehru Technological University, Kakinada",
      period: "2019 – 2023",
      gpa: "7.1 / 10.0",
      highlights: [
        "Core subjects: Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks",
        "Final year project focused on Mobile Application Development",
      ],
    },
  ],

  // ── NAVIGATION ────────────────────────────────────────────
  nav: {
    logo: "SST",   // initials shown in nav
    links: [
      { label: "About",        href: "#about" },
      { label: "Skills",       href: "#skills" },
      { label: "Experience",   href: "#experience" },
      { label: "Projects",     href: "#projects" },
      { label: "AI & LLM",    href: "#ai" },
      { label: "Open Source",  href: "#opensource" },
      { label: "Achievements", href: "#achievements" },
      { label: "Education",    href: "#education" },
      { label: "Contact",      href: "#contact" },
    ],
  },

  // ── CONTACT SECTION ───────────────────────────────────────
  contact: {
    heading: "Let's Build Something Great",
    subheading: "Open to senior Android, mobile, and full-stack opportunities at FAANG and high-growth companies. Always happy to discuss architecture, AI integration, or Kotlin Multiplatform.",
    ctaLabel: "Send a Message",
    ctaHref: "mailto:saisrujan@example.com",   // ← update with real email
    secondaryLabel: "View Resume",
    secondaryHref: "#",                        // ← update with hosted PDF
  },

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    note: "Designed & built by Sai Srujan Thammishetti · Powered by Kotlin passion ☕",
    year: new Date().getFullYear(),
  },

};
