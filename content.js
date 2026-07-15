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
    tagline: "Kotlin · Jetpack Compose · KMM · Clean Architecture · WebRTC",
    heroSubtitle: "Senior Android Developer with 3+ years of experience designing and shipping scalable, high-performance mobile applications. Deep expertise in Kotlin, Jetpack Compose, and Clean Architecture.",
    location: "Bangalore, India",
    email: "thammishettisaisrujan123@gmail.com",
    phone: "+91 73828 20465",
    linkedin: "https://www.linkedin.com/in/sai-srujan-thammishetti-25493920b/",
    github: "https://github.com/Srujan-github",
    githubOpenSource: "https://github.com/saibabu0524",
    portfolio: "https://srujan-github.github.io/my-portfolio/",
    resumeDownload: "https://drive.google.com/file/d/1jZTLNEcHB0Q80KcEpfYpECcmeFwi_IKx/view?usp=sharing",
    availability: "Open to FAANG & High-Growth Opportunities",
    profilePic: "profile-pic.jpeg",

    // Hero stats
    stats: [
      { value: "dynamic:experience", label: "Years of Experience", suffix: "+" },
      { value: "10", label: "Apps Shipped", suffix: "+" },
      { value: "98", label: "Test Coverage", suffix: "%" },
      { value: "800", label: "DSA Problems Solved", suffix: "+" },
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
    experienceStartDate: "2023-06",
  },

  // ── ABOUT SECTION ──────────────────────────────────────────
  about: {
    intro: "I'm a Senior Android Developer based in Bangalore, India, with a strong track record of shipping production-grade mobile applications for enterprise clients including HSBC Hong Kong.",
    paragraphs: [
      "I specialize in Kotlin, Jetpack Compose, and Kotlin Multiplatform (KMM) — delivering cross-platform solutions for Android, iOS, and Desktop. Proven track record integrating enterprise financial SDKs, GraphQL APIs, real-time communication (WebRTC), and CI/CD pipelines from scratch.",
      "Active open-source contributor (PocketCast Android). Recognized as Extra Mile Developer, Q4 2025 at Soft Suave Technologies for outstanding contributions and professional growth.",
      "My engineering philosophy: clean architecture, rigorous testing, measurable performance gains, and AI-augmented workflows that keep delivery velocity high without sacrificing quality.",
    ],
    highlights: [
      { icon: "smartphone", label: "Mobile Expert", desc: "Kotlin · Jetpack Compose · KMM · Android SDK · Compose Multiplatform · XML" },
      { icon: "layers", label: "Architect", desc: "MVVM · MVI · MVP · Clean Architecture · SOLID Principles" },
      { icon: "cpu", label: "AI Practitioner", desc: "LLM Integration · OpenAI · Gemini · NLP · On-device ML" },
      { icon: "git-branch", label: "DevOps & Tools", desc: "Git · GitHub Actions (CI/CD) · Gradle · Firebase · Android Studio" },
    ],
  },

  // ── PROFESSIONAL SUMMARY ───────────────────────────────────
  summary: [
    "Senior Android Developer with 3+ years of experience designing and shipping scalable, high-performance mobile applications. Deep expertise in Kotlin, Jetpack Compose, and Clean Architecture, with proven hands-on capability in Kotlin Multiplatform (KMM) — delivering cross-platform solutions for Android, iOS, and Desktop.",
    "Proven track record integrating enterprise financial SDKs, GraphQL APIs, real-time communication (WebRTC), and CI/CD pipelines from scratch. Active open-source contributor (PocketCast Android). Recognized as Extra Mile Developer, Q4 2025 at Soft Suave Technologies for outstanding contributions and professional growth.",
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
      items: ["Android SDK", "Jetpack Compose", "KMM (Kotlin Multiplatform)", "Compose Multiplatform", "XML"],
    },
    {
      category: "Architecture",
      icon: "layers",
      color: "#0891B2",
      items: ["MVVM", "MVP", "MVI", "Clean Architecture", "SOLID Principles"],
    },
    {
      category: "Libraries & Networking",
      icon: "zap",
      color: "#059669",
      items: ["Dagger-Hilt", "Koin", "Retrofit", "Ktor", "OkHttp", "RxJava", "Coroutines", "Flow", "SQLDelight", "Room", "WorkManager", "Glide", "DataStore"],
    },
    {
      category: "Real-time & Firebase",
      icon: "wifi",
      color: "#D97706",
      items: ["WebRTC", "Socket.io", "Firebase (FCM, Firestore, Cloud Messaging)"],
    },
    {
      category: "Testing",
      icon: "shield",
      color: "#065F46",
      items: ["JUnit", "Espresso", "Mockito", "Mockk", "SonarQube", "Android Profiler"],
    },
    {
      category: "DevOps & Tools",
      icon: "git-branch",
      color: "#1E40AF",
      items: ["Git", "GitHub Actions (CI/CD)", "Jira", "ClickUp", "Gradle", "Firebase", "Postman", "Android Studio"],
    },
    {
      category: "AI / ML",
      icon: "cpu",
      color: "#7C3AED",
      items: ["LLM Integration", "OpenAI", "Gemini", "NLP", "On-device ML"],
    },
  ],

  // ── PROFESSIONAL EXPERIENCE ────────────────────────────────
  experience: [
    {
      role: "Senior Android Developer",
      company: "Soft Suave Technologies",
      companyUrl: "",
      period: { start: "2023-11", end: null },  // null = "Present"
      location: "Bangalore, India",
      type: "Full-time",
      highlights: [
        "Build scalable, consumer-facing Android features using Jetpack Compose, ViewModel, Flow, and Coroutines, ensuring smooth and responsive UI under real-world traffic conditions.",
        "Architected KMM shared business logic for Android, iOS, and Desktop — eliminating duplicate platform code and reducing cross-platform development overhead significantly.",
        "Delivered features for enterprise banking clients (HSBC HK), integrating internal financial SDKs, handling secure payment flows, and owning subscription management modules end-to-end.",
        "Implemented offline-first architectures using SQLDelight, Room, and WorkManager — ensuring seamless background sync and high reliability in poor network conditions.",
        "Authored CI/CD pipelines from scratch using GitHub Actions, reducing manual deployment effort by 50% across Android, iOS, and Desktop targets.",
        "Applied SOLID principles and dependency injection (Dagger-Hilt/Koin) for modular, testable, maintainable codebases; improved unit test coverage to 90–98% per module.",
        "Led accessibility implementation across 12–15 screens end-to-end, ensuring full compliance with enterprise design library standards.",
        "Collaborated with UI/UX, backend, and QA teams in agile sprints; improved app store ratings from 3.8 to 4.3 stars through targeted performance and UX improvements.",
        "Active open-source contributor — raised PRs and issues on the PocketCast Android project (github.com/Automattic/pocket-casts-android).",
        "Awarded Extra Mile Developer, Q4 2025 by Soft Suave's Co-Founder & MD for outstanding work, enthusiasm, and exemplary professional growth.",
      ],
      techStack: ["Kotlin", "Jetpack Compose", "KMM", "Dagger-Hilt", "Flow", "Coroutines", "SQLDelight", "Room", "WorkManager", "WebRTC", "Firebase", "GraphQL", "Retrofit", "JUnit", "Mockk", "GitHub Actions", "CI/CD"],
    },
    {
      role: "Java Developer Intern",
      company: "Zoyaising Solutions",
      companyUrl: "",
      period: { start: "2023-05", end: "2023-06" },
      location: "Remote",
      type: "Internship",
      highlights: [
        "Developed and optimized RESTful APIs using Spring Boot, ensuring high performance and efficient data retrieval.",
        "Implemented Spring Security and integrated ML models including face detection algorithms for real-time facial recognition authentication.",
        "Built APIs incorporating NLP models to automate data extraction, sentiment analysis, and image-based user interactions.",
      ],
      techStack: ["Java", "Spring Boot", "Spring Security", "REST APIs", "NLP", "ML Models"],
    },
  ],

  // ── KEY PROJECTS ───────────────────────────────────────────
  projects: [
    {
      id: "healthpass",
      name: "HealthPass – HSBC HK Mobile Banking",
      subtitle: "Digital Healthcare Module | Enterprise Banking App",
      period: { start: "2024-01", end: "2024-12" },
      tags: ["Kotlin", "MVP", "GraphQL", "Retrofit", "JUnit", "Mockk", "SonarQube", "CI/CD"],
      description: "Delivered a digital healthcare membership module within HSBC Hong Kong's consumer banking app, enabling preferential medical consultation access, video GP bookings, and real-time plan management under strict security and data privacy standards.",
      problem: "HSBC Hong Kong required a secure, highly-tested healthcare benefits module embedded in their flagship banking app for thousands of banking customers.",
      architecture: "MVP Architecture → GraphQL APIs → HSBC Payments SDK → SonarQube quality gates → CI/CD pipelines",
      highlights: [
        "Integrated internal HSBC payments SDK to build a robust in-app purchase flow — handling successful transactions, callbacks, and navigating to dedicated success/error screens.",
        "Built and owned the subscription management module end-to-end: 3 screens displaying plan details, renewal dates, upgrade options, benefits, and the claims process.",
        "Migrated and integrated GraphQL APIs (queries + mutations) for real-time plan validation, membership updates, and live service provider data exchange with HSBC backend systems.",
        "Led accessibility implementation across 12–15 screens — complete TalkBack/keyboard navigation from header to bottom, ensuring full HSBC Enterprise Design Library compliance.",
        "Achieved 95–98% unit test coverage (SonarQube verified) using MVP architecture with rigorous JUnit + Mockk test suites.",
        "Resolved 100+ accessibility bugs and UI issues, maintaining a polished, compliant interface consistent with HSBC brand standards.",
      ],
      metrics: ["95–98% Test Coverage (SonarQube)", "1,800+ Medical Providers", "100+ Accessibility Bugs Fixed", "Bug resolved in <4 hours"],
      githubUrl: "",
      liveUrl: "",
      featured: true,
    },
    {
      id: "bustlespot",
      name: "BustleSpot – Workforce Platform",
      subtitle: "Cross-Platform Workforce Tracking System",
      period: { start: "2025-01", end: null },
      tags: ["KMM", "Compose Multiplatform", "Ktor", "SQLDelight", "DataStore"],
      description: "Architected a multi-modal cross-platform workforce tracking system combining a desktop productivity client and a KMM mobile app for geospatial tracking, with shared business logic across Android, iOS, and Desktop.",
      problem: "Organizations needed a unified system to track remote employee productivity across platforms (mobile, desktop) with geospatial intelligence and offline resilience.",
      architecture: "KMM shared business logic → Compose Multiplatform UI (Android/iOS/Desktop) → Ktor networking → SQLDelight offline storage",
      highlights: [
        "Built shared KMM business logic for Android, iOS, and Desktop — encapsulating GPS acquisition, data formatting, and offline persistence while eliminating duplicate platform code.",
        "Implemented offline-first architecture with SQLDelight and Coroutines StateFlow: failed API requests are stored locally and retried automatically on network reconnection.",
        "Integrated Ktor client for cross-platform networking and DataStore for persistent local configuration across all targets.",
        "Authored CI/CD GitHub Actions workflows from scratch for all three platform targets, cutting manual deployment effort by 50%.",
        "Built Desktop clients (Windows, macOS, Ubuntu) using Compose Multiplatform with system-level activity monitoring.",
      ],
      metrics: ["Cross-platform (Android · iOS · Windows · macOS · Ubuntu)", "Offline-first with auto-sync", "CI/CD with GitHub Actions", "50% Deployment Effort Reduction"],
      githubUrl: "",
      liveUrl: "",
      featured: true,
    },
    {
      id: "playchat",
      name: "PlayDate / PlayChat – Children's App",
      subtitle: "Secure Encrypted Chat & Video Platform for Children",
      period: { start: "2024-01", end: "2024-12" },
      tags: ["Kotlin", "Jetpack Compose", "MVVM", "WebRTC", "Firebase", "Room", "Mockk"],
      description: "Built a production-grade encrypted messaging and video-calling app for children with parental controls and offline-first design, integrating WebRTC and Firebase for low-latency real-time communication.",
      problem: "Parents needed a safe, monitored communication platform for children with real-time content moderation and end-to-end encryption.",
      architecture: "MVVM → WebRTC + Firebase (real-time) → Room (offline) → on-device ML (content moderation)",
      highlights: [
        "Improved WebRTC performance — fixed camera switching bugs and video quality degradation issues, enhancing call stability across varying network conditions.",
        "Designed and built the album feature using a grid-based multi-view RecyclerView with Glide image caching for efficient local storage and fast load times.",
        "Implemented MVVM with Clean Architecture, improving code maintainability, testability, and separation of concerns across the codebase.",
        "Engineered accurate message delivery and read receipt mechanisms, reducing synchronization issues by 30% across multiple devices.",
        "Integrated speech recognition to detect and block inappropriate content in real time, maintaining a safe environment for children.",
        "Written comprehensive unit and UI tests using Espresso, Mockk, and JUnit ensuring high code quality and reliability.",
      ],
      metrics: ["30% Sync Issue Reduction", "Real-time Content Moderation", "99.9% Message Delivery", "WebRTC Video Calling"],
      githubUrl: "",
      liveUrl: "",
      featured: true,
    },
    {
      id: "mrc-booking",
      name: "MRC Court Booking",
      subtitle: "Real-Time Sports Booking & Payments Platform",
      period: { start: "2024-01", end: "2024-12" },
      tags: ["Kotlin", "MVVM", "Clean Architecture", "Stripe SDK", "Firebase", "Room"],
      description: "Built a real-time sports court booking platform with Stripe payment SDK integration for secure online transactions, supporting multiple user roles and seamless scheduling experiences.",
      problem: "Sports clubs needed a digital booking system with real-time availability, secure payments, and multi-role user management.",
      architecture: "Clean Architecture → MVVM → Stripe SDK → Firebase (real-time) → Room (offline)",
      highlights: [
        "Integrated Stripe payment SDK for secure online transactions with real-time availability updates and automated booking confirmations.",
        "Implemented automated reminders, push notifications, and real-time availability updates for a seamless scheduling experience.",
        "Applied MVVM and Clean Architecture patterns ensuring long-term maintainability and a modular codebase.",
        "Developed dynamic UI supporting multiple user roles (guest, member, admin) and ICS calendar integration for multi-event management.",
      ],
      metrics: ["Stripe Secure Payments", "Real-time Availability", "Multi-role User Management", "ICS Calendar Integration"],
      githubUrl: "",
      liveUrl: "",
      featured: false,
    },
  ],

  // ── GENERATIVE AI & LLM EXPERIENCE ────────────────────────
  aiExperience: {
    intro: "Actively building and integrating AI-powered features in production mobile applications, with hands-on experience across the full LLM integration lifecycle — from on-device ML to cloud AI models.",
    badge: "AI-Ready Engineer · 2025–2026",
    items: [
      {
        icon: "cpu",
        title: "LLM-backed Android Features",
        description: "Integrated LLM-backed features in Android apps — including real-time content moderation using on-device and cloud AI/ML models (OpenAI, Gemini).",
        tags: ["OpenAI API", "Gemini", "Kotlin", "Android"],
      },
      {
        icon: "zap",
        title: "LLM APIs for Mobile",
        description: "Experience building Android applications that consume LLM APIs for intelligent data enrichment, summarization, and NLP-powered user interactions.",
        tags: ["LLM APIs", "NLP", "Android", "Kotlin"],
      },
      {
        icon: "git-merge",
        title: "AI-Assisted Development",
        description: "Daily use of GitHub Copilot for AI-assisted development — from scaffolding architecture to code review, refactoring, and test generation, accelerating delivery and improving code quality.",
        tags: ["GitHub Copilot", "AI Dev Tooling", "Code Review"],
      },
      {
        icon: "shield",
        title: "On-device & Cloud ML",
        description: "Hands-on experience with NLP model integration for real-time speech recognition and content moderation in production mobile applications (PlayDate children's app).",
        tags: ["On-device ML", "Speech Recognition", "Content Moderation", "Android ML Kit"],
      },
    ],
  },

  // ── OPEN SOURCE ────────────────────────────────────────────
  openSource: [
    {
      name: "PocketCast Android",
      url: "https://github.com/Automattic/pocket-casts-android",
      description: "Contributed multiple pull requests and raised issues to the open-source PocketCast Android project — one of the most popular podcast apps on Android.",
      tags: ["Kotlin", "Android", "Open Source"],
      prs: ["#5127", "#5205"],
      issues: ["#5201"],
      stars: "4k+",
      forks: "",
    }
  ],

  // ── ACHIEVEMENTS & CERTIFICATIONS ─────────────────────────
  achievements: [
    {
      icon: "trophy",
      title: "Extra Mile Developer — Q4 2025",
      description: "Awarded by the Co-Founder & MD of Soft Suave Technologies for outstanding and exemplary work, professional growth, and enthusiasm.",
      type: "achievement",
    },
    {
      icon: "award",
      title: "HSBC HK Client Commendation",
      description: "Recognized for timely deliveries and code quality excellence at Soft Suave; received client commendation from HSBC HK for rapid critical bug resolution.",
      type: "achievement",
    },
    {
      icon: "code",
      title: "800+ DSA Problems Solved",
      description: "Solved 800+ problems on LeetCode, HackerRank, and other competitive coding platforms, demonstrating strong algorithmic and problem-solving skills.",
      type: "achievement",
    },
    {
      icon: "star",
      title: "Rank 1 — GeeksforGeeks (SCITS)",
      description: "Achieved Rank 1 from institution SCITS on GeeksforGeeks coding practice platform during college.",
      type: "achievement",
    },
    {
      icon: "shield",
      title: "Google Play Store Listing Certificate",
      description: "Performance-based exam measuring adherence to best practices for creating a Google Play store listing and marketing to a global audience.",
      type: "certification",
      issuer: "Google Play Academy",
      issuerColor: "#34A853",
      date: "Jun 2025",
      validUntil: "Jun 2028",
      image: "https://pdf.ms.credential.net/v2/certificate/image?env=production&credential=pdo5qwuk&variant=medium",
      credentialUrl: "https://www.credential.net/5a843b18-d856-4a42-80b0-2825df44d040",
    },
    {
      icon: "zap",
      title: "Gradle Build Caching",
      description: "Certified in Gradle build caching strategies for optimizing build performance, reducing build times, and improving developer productivity.",
      type: "certification",
      issuer: "DPE University (Gradle)",
      issuerColor: "#02303A",
      date: "Mar 15, 2025",
      image: "res/certificates/GradleBuildCaching.jpg",
      credentialUrl: "res/certificates/DPE_University-Gradle_Build_Caching-Certificate.pdf",
    },
    {
      icon: "smartphone",
      title: "Android Jetpack Compose: The Comprehensive Bootcamp",
      description: "Comprehensive bootcamp covering Jetpack Compose from fundamentals to advanced topics including state management, animations, and architecture.",
      type: "certification",
      issuer: "Udemy",
      issuerColor: "#A435F0",
      date: "Nov 17, 2025",
      hours: "37 total hours",
      image: "res/certificates/JetpackCompose.jpg",
      credentialUrl: "https://www.udemy.com/certificate/UC-be71689b-632d-4dd7-a5ec-78858b9554dd/",
    },
    {
      icon: "layers",
      title: "Modern Android App Architecture",
      description: "Modern architecture patterns and best practices for Android development including MVVM, Clean Architecture, and Jetpack components.",
      type: "certification",
      issuer: "Udemy",
      issuerColor: "#A435F0",
      date: "Jun 9, 2026",
      hours: "9.5 total hours",
      image: "res/certificates/ModernAndroidAppArchi.jpg",
      credentialUrl: "https://www.udemy.com/certificate/UC-d6c4263a-f212-445d-9a5c-6b7b80356bbe/",
    },
  ],

  // ── EDUCATION ──────────────────────────────────────────────
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Jawaharlal Nehru Technological University, Hyderabad",
      period: "Jul 2019 – Aug 2023",
      gpa: "7.1 / 10.0",
      highlights: [
        "Coursework: Data Structures & Algorithms, Computer Architecture, Machine Learning, OOP",
      ],
    },
  ],

  // ── NAVIGATION ────────────────────────────────────────────
  nav: {
    logo: "SST",   // initials shown in nav
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "AI & LLM", href: "#ai" },
      { label: "Open Source", href: "#opensource" },
      { label: "Achievements", href: "#achievements" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
  },

  // ── CONTACT SECTION ───────────────────────────────────────
  contact: {
    heading: "Let's Connect",
    subheading: "I'm always open to exciting opportunities, collaborations, and conversations about Android, KMM, or anything tech. Feel free to reach out — let's build something great together.",
    ctaLabel: "Send a Message",
    ctaHref: "mailto:thammishettisaisrujan123@gmail.com",
    secondaryLabel: "View Resume",
    secondaryHref: "#",
  },

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    note: "Designed & built by Sai Srujan Thammishetti · Powered by Kotlin passion ☕",
    year: new Date().getFullYear(),
  },

};
