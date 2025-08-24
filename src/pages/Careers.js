import React, { useState } from "react";
import "../styles/global.css";
import SEO from '../components/SEO';

const careersData = {
  "Public Service": {
    emoji: "🏛️",
    description: "Work for the nation through UPSC, IAS, IPS, and state exams.",
    details: {
      overview: "A career in Public Service in India is one of the most prestigious and impactful paths you can pursue. It typically involves working in government administration, policymaking, law enforcement, foreign affairs, revenue, and development. Officers are entrusted with responsibilities ranging from maintaining law and order, managing district/state governance, implementing central and state policies, to representing India abroad. These careers offer not only financial stability but also immense social respect, influence, and the ability to directly improve citizens’ lives. Work-life balance can be demanding depending on the role—district collectors, for example, often work long hours during crises, while some administrative postings are more predictable. The role requires resilience, leadership, and an aptitude for problem-solving at scale.",
      exams: "The entry point to most public service roles in India is through competitive exams, which are among the toughest in the world.\n\nUPSC Civil Services Examination (CSE) — Conducted by: Union Public Service Commission (UPSC). Roles: IAS, IPS, IFS, IRS, etc. Stages: Prelims (objective), Mains (9 descriptive papers), Interview (personality test). Eligibility: Graduate, 21–32 years. Success rate: less than 0.2% (approx. 1 million candidates appear annually).\n\nState Public Service Commission (PSC) Exams — Conducted by each state (e.g., UPPSC, BPSC, MPSC). Roles: State civil services (SDM, DSP, Tehsildar). Similar structure to UPSC.\n\nIndian Engineering Services (IES/ESE) — For technical public service roles in Railways, Defence, Infrastructure.\n\nIndian Forest Service (IFoS) — For forest and wildlife management.\n\nOther Exams — SSC CGL (central posts), RBI Grade B (regulator), LIC/GIC AO (insurance officer roles).",
      colleges: "Unlike Engineering or Medicine, there are no mandatory colleges for entering public services (exams are open to graduates of any field). However, some universities and coaching ecosystems are known to produce successful candidates: University of Delhi (Political Science, Economics, History), Jawaharlal Nehru University (International Relations, Public Policy), Jamia Millia Islamia (Residential Coaching Academy), Banaras Hindu University, Tata Institute of Social Sciences (TISS), and colleges like St. Stephen’s, Hindu College. Dedicated coaching hubs in Delhi (Rajinder Nagar, Mukherjee Nagar) and state capitals also play a major role.",
      market: "Demand & Prestige: Public service jobs are highly sought after because they offer both stability and influence. The demand is perennial, with lakhs of aspirants every year.\n\nIncome: Starting salary for IAS/IPS/IFS officers: ₹56,100/month (basic pay) + allowances; total monthly comp: approx. ₹80,000–1,20,000 depending on posting. After 8–10 years, officers typically reach higher pay levels. Perks include government housing, vehicles, staff, security, medical care and pensions.\n\nTrends: Increasing role in digital governance, policy analytics and e-governance systems. More technocrats and lateral entrants are joining policy roles in recent years.",
      outcomes: "Core administrative roles: IAS, IPS, IFS, IRS. State government leadership: District Collectors, Commissioners, Directors. Specialized services: Foreign Service (diplomacy), Police Service (law enforcement), Revenue Service (taxation). Post-retirement / lateral outcomes: senior advisory roles in international organizations (UN, World Bank), think-tanks, NGOs, policy bodies, leadership roles in universities, corporate governance, and politics."
    }
  },
  "Computer Science Engineering": {
    emoji: "💻",
    description: "Design software, build apps, work with AI and systems.",
    details: {
      overview: {
        summary:
          "Computer Science Engineering (CSE) is a widely chosen and highly versatile discipline that teaches programming, algorithms, systems design, AI, cybersecurity, databases and networking.",
        keyTopics: [
          "Programming & problem solving (algorithms, data structures)",
          "Systems & architecture (OS, compilers, distributed systems, cloud)",
          "AI/ML, data science and statistics",
          "Security, networking and databases",
          "Emerging tech: blockchain, quantum computing, edge/IoT"
        ],
        careerNote:
          "Graduates can build software products, operate large-scale cloud systems, work on AI/ML research, or join startups and R&D teams. Work-life balance varies by company and role: product companies often offer flexibility, while service firms may have more structured delivery schedules.",
        keySkills: [
          "Coding proficiency (one or more languages)",
          "Problem solving & algorithms",
          "Software design & system thinking",
          "Data literacy & basic statistics",
          "Communication and teamwork"
        ]
      },
      exams: {
        undergraduate: "JEE Main + JEE Advanced — primary route to IITs; highly competitive (millions appear each year).",
        stateCETs: "State Common Entrance Tests (e.g., MHT-CET, WBJEE, KCET) — route to state government engineering colleges.",
        privateUnis: "University-specific exams like BITSAT, VITEEE, SRMJEEE; many private colleges also accept board marks or management quota.",
        higherStudies: "GATE for M.Tech/MS (India), GRE/TOEFL for masters and research abroad; research paths also include CSIR/UGC/NET for some programs."
      },
      colleges: [
        "Indian Institutes of Technology (IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur, IIT Kharagpur)",
        "National Institutes of Technology (NIT Trichy, NIT Surathkal, NIT Warangal)",
        "Indian Institute of Science (IISc), Bangalore",
        "IIIT Hyderabad, IIIT Bangalore",
        "BITS Pilani",
        "Strong regional/state colleges: DTU, NSUT, Anna University",
        "Private colleges with strong placements: VIT, SRM, Manipal"
      ],
      market: {
        trends:
          "Very high demand across product companies, startups, fintech, cloud providers and research labs; growth areas include AI/ML, cloud native engineering, cybersecurity, and data engineering.",
        starterIncome:
          "Service firms: ~₹4–6 LPA; Product companies: ₹12–30 LPA (often higher with offers from top firms); Startups: variable (₹6–12 LPA typical for early-stage).",
        growth: "After ~5 years: ₹10–20 LPA (mid-level engineers); After ~10+ years: ₹25–50 LPA or more for senior engineers, architects, and managers; global roles command substantially higher pay.",
        perks:
          "Flexible hours, remote opportunities, ESOPs (stock options) in startups, international exposure and rapid skill-driven career growth."
      },
      outcomes: [
        "Software Engineer / Backend / Frontend / Full-stack Developer",
        "Machine Learning Engineer / Data Scientist",
        "Cloud Engineer / Site Reliability Engineer (SRE)",
        "Security Engineer / DevSecOps",
        "Research Scientist / PhD / Academic roles",
        "Product Manager, Technical Lead, CTO, Founder / Entrepreneur",
        "Cross-domain roles: Tech consulting, Business analytics, UX research"
      ]
    }
  },
  "Electrical Engineering": {
    emoji: "⚡",
    description: "Power systems, circuits, and electrical technology.",
    details: {
      overview: {
        summary:
          "Electrical Engineering (EE) studies electricity, electronics, and electromagnetism and covers power systems, control systems, signal processing, embedded systems and semiconductor technology.",
        keyTopics: [
          "Power generation, transmission & distribution",
          "Control systems and automation",
          "Signal processing and communications",
          "Embedded systems and hardware design",
          "Power electronics, renewable energy and EV systems"
        ],
        careerNote:
          "EE is versatile — core power and utilities roles coexist with modern fields like semiconductors, IoT, robotics and EVs. Work patterns vary: operations and plant jobs may involve shifts, R&D and design roles usually have regular hours.",
        keySkills: [
          "Circuit theory & electronics",
          "Control and systems thinking",
          "Embedded programming and hardware debugging",
          "Power systems and protection",
          "Hands-on lab and instrumentation skills"
        ]
      },
      exams: {
        undergraduate: "JEE Main + JEE Advanced — primary route to IITs and top engineering colleges.",
        stateCETs: "State entrance exams (WBJEE, KCET, MHT-CET, AP EAMCET etc.) for state government colleges.",
        privateUnis: "University-specific exams like BITSAT, VITEEE, SRMJEEE; some private colleges accept board marks or management quota.",
        directAdmission: "Direct admission based on Class 12 marks or management quota in certain private institutions.",
        higherStudies: "GATE for M.Tech/MS and recruitment to PSUs (NTPC, BHEL, Power Grid); IES/ESE for government engineering services; GRE/TOEFL for masters abroad."
      },
      colleges: [
        "IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur, IIT Kharagpur",
        "NIT Trichy, NIT Surathkal, NIT Warangal",
        "BITS Pilani",
        "IISc Bangalore (electronics/EE research)",
        "DTU, NSUT, Anna University, Jadavpur University",
        "Private colleges with good labs: VIT, SRM, Manipal"
      ],
      market: {
        trends:
          "Growing demand in renewable energy, EVs, power electronics, automation, semiconductors and smart grid technologies. Many EE grads also move into software/IT roles.",
        starterIncome:
          "Core sector/PSUs: ~₹4–6 LPA; IT/product roles (if transitioned): ₹6–12 LPA; Top product/semiconductor firms: ₹12–18 LPA.",
        growth:
          "After ~5 years: ₹8–15 LPA in core roles, higher in product/IT tracks; Senior technical/R&D/management roles: ₹25–40 LPA+.",
        perks:
          "Job stability in PSUs, opportunities in global semiconductor and EV markets, potential for R&D roles and consultancy projects."
      },
      outcomes: [
        "Power systems engineer / Grid engineer",
        "Electrical design & protection engineer",
        "Control systems & automation engineer",
        "Embedded systems / Hardware design engineer",
        "VLSI / Semiconductor engineer",
        "PSU/Government roles (NTPC, BHEL, ISRO, DRDO, Power Grid)",
        "Transition to IT/software, data roles, or startups in EV/renewables",
        "Research: M.Tech, MS, PhD and R&D positions"
      ]
    }
  },
  "Aeronautical Engineering": {
    emoji: "✈️",
    description: "Aircraft and aerospace design and development.",
    details: {
      overview: {
        summary:
          "Aeronautical and Aerospace Engineering focuses on the design, development, testing and maintenance of aircraft, spacecraft and related systems. It includes aerodynamics, propulsion, avionics, materials and control systems.",
        focusAreas: [
          "Aerodynamics & flight mechanics",
          "Propulsion systems (engines, rockets)",
          "Avionics, sensors and control systems",
          "Materials, structures and fatigue analysis",
          "Space systems (satellites, launch vehicles) and UAVs/drones"
        ],
        careerNote:
          "Work environments include R&D labs, aerospace companies, space agencies, airlines, defense organizations and startups (drones, small satellites). The field is competitive and suits those strong in math, physics and systems thinking.",
        keySkills: [
          "Strong mathematics and physics",
          "Aerodynamics & simulation tools (CFD)",
          "Propulsion knowledge and thermofluids",
          "Control systems and avionics",
          "Hands-on testing, instrumentation and CAD/FEA skills"
        ]
      },
      exams: {
        undergraduate: "JEE Main + JEE Advanced — route to aerospace branches at IITs.",
        stateCETs: "State entrance exams (MHT-CET, WBJEE, KCET etc.) for state colleges.",
        privateUnis: "University exams like BITSAT, VITEEE, SRMJEEE; some private colleges admit via board marks or management quota.",
        directAdmission: "Direct admission based on Class 12 PCM marks in private colleges.",
        higherStudies: "GATE for M.Tech/MS; GRE/TOEFL/IELTS for masters abroad; ISRO/DRDO recruitment exams for research roles."
      },
      colleges: [
        "IIT Bombay (Aerospace)",
        "IIT Kanpur",
        "IIT Madras",
        "IISc Bangalore",
        "MIT – Manipal Institute of Technology",
        "Hindustan Institute of Technology & Science (HITS), Chennai",
        "Punjab Engineering College (PEC), Chandigarh",
        "Anna University, Jadavpur University",
        "Top international targets: MIT, Stanford, Caltech, TU Delft, Georgia Tech"
      ],
      market: {
        trends:
          "Rapid growth in space tech, private aerospace startups, drone/UAV industry and advanced R&D. ISRO and Indian startups are expanding capabilities.",
        starterIncome:
          "Entry-level: ~₹4–7 LPA in core aeronautical roles; ISRO/DRDO/HAL/NAL often start higher (~₹8–12 LPA); global firms and high-end R&D roles pay more.",
        growth:
          "With 5–10 years experience: ₹15–30 LPA in India; abroad salaries and senior roles can be significantly higher.",
        perks:
          "Work on cutting-edge space and aviation projects, international collaborations, high professional prestige and defence/space allowances in some roles."
      },
      outcomes: [
        "Aerospace / Aeronautical Design Engineer",
        "Propulsion Engineer",
        "Flight Test Engineer",
        "Avionics Engineer / Systems Engineer",
        "R&D roles at ISRO, DRDO, NAL or private space firms",
        "Aircraft manufacturing & maintenance roles (Airlines, OEMs)",
        "Drone / UAV industry roles",
        "Research: M.Tech, MS, PhD and international aerospace careers",
        "Entrepreneurship: small satellites, launch services, aerospace software"
      ]
    }
  },
  "Mechanical Engineering": {
    emoji: "⚙️",
    description: "Machines, robotics, and manufacturing systems.",
    details: {
      overview: {
        summary:
          "Mechanical Engineering is a broad and foundational discipline covering the design, production and operation of machinery, systems and thermal processes. It includes mechanics, thermodynamics, materials, fluids, robotics and manufacturing.",
        keyTopics: [
          "Statics, dynamics and mechanics of materials",
          "Thermodynamics and fluid mechanics",
          "Manufacturing processes and design for manufacture",
          "Robotics, control systems and automation",
          "CAD, FEA and simulation tools"
        ],
        careerNote:
          "ME graduates work across automotive, aerospace, manufacturing, energy, HVAC and robotics. Plant and manufacturing roles may involve shifts; R&D and design roles in MNCs typically have predictable hours.",
        keySkills: [
          "Solid grasp of core mechanics and thermofluids",
          "CAD and CAE (FEA) tools",
          "Manufacturing and shop-floor understanding",
          "Control systems and robotics basics",
          "Hands-on prototyping and testing"
        ]
      },
      exams: {
        undergraduate: "JEE Main + JEE Advanced — route to IITs and top engineering colleges.",
        stateCETs: "State entrance exams (MHT-CET, WBJEE, KCET etc.) for state colleges.",
        privateUnis: "BITSAT, VITEEE, SRMJEEE and university-specific tests; some private colleges accept direct admission.",
        directAdmission: "Based on Class 12 PCM marks or management quota in certain private institutions.",
        higherStudies: "GATE for M.Tech/MS and PSU recruitment; IES/ESE for government engineering services; GRE/TOEFL/IELTS for masters abroad."
      },
      colleges: [
        "IIT Bombay, IIT Madras, IIT Kharagpur, IIT Kanpur, IIT Roorkee",
        "NIT Trichy, NIT Surathkal, NIT Warangal",
        "BITS Pilani",
        "DTU, NSUT, Anna University, Jadavpur University, PEC Chandigarh",
        "VIT, SRM, Manipal"
      ],
      market: {
        trends: "Strong demand in automotive (EVs), robotics, aerospace, renewable energy and additive manufacturing; many ME grads also transition to software or management.",
        starterIncome: "Core manufacturing: ~₹3.5–6 LPA; PSUs via GATE: ~₹8–12 LPA; MNCs/product firms: ₹6–15 LPA depending on role.",
        growth: "With 5–10 years experience: ₹10–20 LPA in India; senior technical or managerial roles can reach ₹20–40 LPA.",
        perks: "Job stability in core sectors, international opportunities in aerospace and automotive, and paths into R&D or entrepreneurship."
      },
      outcomes: [
        "Design Engineer, Production / Manufacturing Engineer",
        "Maintenance / Reliability Engineer",
        "HVAC and Thermal Systems Engineer",
        "Automotive Engineer (EVs & powertrain)",
        "Robotics & Automation Engineer",
        "R&D roles, M.Tech / MS / PhD and academia",
        "Government / PSU roles (BHEL, NTPC, ONGC, Railways, DRDO)",
        "Cross-domain transitions: software, data science, MBA or startups"
      ]
    }
  },
  "Chartered Accountant (CA)": {
    emoji: "📊",
    description: "Expert in accounting, taxation, and auditing.",
    details: {
      overview: {
        summary:
          "Chartered Accountancy (CA) is a rigorous professional qualification focused on accounting, auditing, taxation, financial reporting and corporate law, regulated by the Institute of Chartered Accountants of India (ICAI).",
        careerNote:
          "CAs work in auditing firms, corporates, banks, consultancy firms, government bodies or run their own practice. Workload peaks during audit seasons and tax deadlines, but the profession offers flexibility and high long-term rewards.",
        keySkills: [
          "Accounting & financial reporting",
          "Direct and indirect taxation",
          "Auditing and assurance",
          "Corporate law and compliance",
          "Financial analysis and advisory"
        ]
      },
      exams: {
        foundation: {
          description: "Entry-level exam after Class 12 (commerce preferred). Subjects include Accounting, Business Laws, Quantitative Aptitude and Business Economics.",
          eligibility: "After Class 12",
          difficulty: "Moderate"
        },
        intermediate: {
          description: "Also called IPCC — covers accounting, corporate law, costing, taxation, audit, financial management and economics. Divided into two groups.",
          eligibility: "After Foundation or direct entry for graduates (with required marks)."
        },
        final: {
          description: "Advanced professional-level exams covering strategic financial management, advanced financial reporting, taxation, corporate laws and electives.",
          eligibility: "After clearing Intermediate + completing required articleship/training."
        },
        articleship: {
          duration: "3 years",
          description: "Mandatory practical training under a practicing CA providing exposure to audits, taxation and advisory work."
        },
        membership: "After passing Final exams and completing articleship you gain ICAI membership and the CA designation.",
        passRates: "Final-level pass rates are low (typically ~8–12%), reflecting the course's rigor."
      },
      colleges: [
        "CA is a professional course (ICAI) — common academic pairings include B.Com/BBA alongside CA for breadth.",
        "Top commerce colleges that complement CA: SRCC (Delhi), St. Xavier's (Mumbai/Kolkata), Narsee Monjee (Mumbai), Christ University (Bangalore), Loyola College (Chennai), Hansraj College (Delhi)"
      ],
      market: {
        trends:
          "Strong demand across taxation, audit, risk advisory, M&A, fintech and corporate finance; CAs are increasingly moving into strategic advisory and international taxation.",
        starterIncome:
          "Fresh CAs: ~₹7–10 LPA; Big 4 starters: ₹10–15 LPA; PSUs & banks: ~₹6–9 LPA; independent practice varies based on client base.",
        growth:
          "Mid-career (5–10 yrs): ₹15–30 LPA in firms or corporates; Senior roles (CFO/Partner): ₹50 LPA–₹1+ crore for top positions.",
        perks:
          "High professional respect, ability to start an independent practice, global mobility and strong demand in cyclical downturns."
      },
      outcomes: [
        "Audit & Assurance (statutory, internal, forensic)",
        "Taxation specialist (direct, indirect, international tax)",
        "Corporate finance: M&A, valuations, transaction advisory",
        "Banking & financial services: risk, treasury, credit analysis",
        "Independent practice / Consultancy",
        "Leadership roles: CFO, Finance Director, Partner in firms",
        "Global careers: opportunities in Middle East, Singapore, UK, Canada"
      ]
    }
  },
  "Chartered Financial Analyst (CFA)": {
    emoji: "📈",
    description: "Global finance and investment management expert.",
    details: {
      overview: {
        summary:
          "The CFA designation (CFA Institute) is a global, practice-focused credential for investment management, equity research, portfolio management and financial analysis.",
        careerNote:
          "CFA charterholders work in asset management, investment banking, private equity, hedge funds, consulting and corporate finance. Work intensity varies by role — IB/research can be high-pressure while portfolio management and corporate finance are more structured.",
        keySkills: [
          "Investment analysis & valuation",
          "Financial modelling and accounting",
          "Portfolio construction & risk management",
          "Ethics and professional standards",
          "Quantitative methods and macro/microeconomics"
        ]
      },
      exams: {
        levelI: {
          focus: "Foundations: ethical standards, investment tools, quantitative methods and basic financial concepts.",
          format: "Multiple choice (MCQ)",
          frequency: "Held multiple times a year",
          passRate: "~35–40%"
        },
        levelII: {
          focus: "Asset valuation and application of investment tools (case-based/item set format).",
          format: "Item set (case) based",
          frequency: "Held 2–3 times a year",
          passRate: "~40–45%"
        },
        levelIII: {
          focus: "Portfolio management and wealth planning (essay + case-based).",
          format: "Essay and case-based",
          frequency: "Held twice a year",
          passRate: "~45–50%"
        },
        eligibility: "Bachelor's degree or equivalent, or 4 years professional work experience; final-year students may register.",
        experienceRequirement: "4 years of relevant professional investment/finance experience required to earn the charter.",
        overallConversion: "Only ~10–15% of initial registrants who start the program typically become charterholders."
      },
      colleges: [
        "CFA is independent of college — common pairings: B.Com, BBA, MBA (Finance), Economics or Engineering",
        "Institutes where CFA prep is popular: IIMs (MBA Finance), ISB Hyderabad, NMIMS, Christ University, Symbiosis, top international business schools"
      ],
      market: {
        trends:
          "High demand in asset management, private equity, fintech, investment banking and global capital markets; demand rising with India’s mutual fund and startup ecosystem.",
        starterIncome:
          "Early roles: ₹6–10 LPA for candidates with Level II or early experience; Chartered holders: ₹12–20 LPA; Investment banking/PE entry: ₹20–30 LPA+.",
        growth:
          "Mid-career (5–10 yrs): ₹30–60 LPA in India; senior portfolio/PE roles: ₹80 LPA–₹2+ crore. International pay is significantly higher.",
        perks:
          "Global recognition, mobility across markets, high earning potential and access to prestigious investment roles."
      },
      outcomes: [
        "Equity Research Analyst",
        "Portfolio Manager / Fund Manager",
        "Investment Banking Analyst / Associate",
        "Private Equity / Venture Capital Analyst",
        "Corporate Finance Manager / Treasury",
        "Risk Manager / Quantitative Analyst",
        "Consulting & Advisory roles in finance and strategy"
      ]
    }
  },
  "ACCA": {
    emoji: "🌍",
    description: "International accounting qualification recognized worldwide.",
    details: {
      overview: {
        summary:
          "The ACCA qualification (Association of Chartered Certified Accountants, UK) is a globally recognised accounting and finance credential focusing on IFRS, auditing, taxation, financial management and business strategy.",
        careerNote:
          "ACCA is internationally oriented and accepted in 180+ countries, making it a strong choice for students targeting MNCs or careers abroad. Exam flexibility, modular structure and better pass rates than some national qualifications make it accessible.",
        keySkills: [
          "IFRS & international financial reporting",
          "Audit & assurance",
          "Taxation (cross-border & domestic)",
          "Financial management & analysis",
          "Business strategy & professional ethics"
        ]
      },
      exams: {
        structure: {
          appliedKnowledge: ["Business and Technology (BT)", "Management Accounting (MA)", "Financial Accounting (FA)"],
          appliedSkills: ["Corporate & Business Law (LW)", "Performance Management (PM)", "Taxation (TX)", "Financial Reporting (FR)", "Audit & Assurance (AA)", "Financial Management (FM)"],
          strategicProfessional: {
            essentials: ["Strategic Business Leader (SBL)", "Strategic Business Reporting (SBR)"],
            options: ["Advanced Audit", "Advanced Taxation", "Advanced Performance Management", "Advanced Financial Management"]
          }
        },
        eligibility: "Open after Class 12 (commerce preferred) or via exemptions for graduates / professional qualifications (CA, B.Com, MBA etc).",
        passRates: "Modular exams with generally higher pass rates than some national professional courses (typical paper pass rates ~40–50%).",
        duration: "Typically 2–3 years when pursued full-time, flexible for working professionals."
      },
      colleges: [
        "Learning partners and universities (Christ University, Symbiosis, St. Joseph's, IMS Proschool, EduPristine)",
        "Many online training providers and international study centres — ACCA is delivered via authorised learning partners.",
        "Pathways: some universities (e.g., Oxford Brookes) offer integrated degrees alongside ACCA modules."
      ],
      market: {
        trends:
          "Strong demand for ACCA affiliates in Big 4 delivery centres, corporates and international finance hubs (UK, UAE, Singapore). IFRS expertise and cross-border tax skills are highly valued.",
        starterIncome:
          "Fresh ACCA affiliates: ~₹5–8 LPA; Big 4 starters: ₹7–12 LPA; MNC corporates: ₹8–15 LPA depending on role and location.",
        growth:
          "Mid-career (5–10 yrs): ₹15–30 LPA in India; senior international roles and leadership positions can reach ₹40 LPA–₹1 crore+.",
        perks:
          "Global mobility, relatively faster completion than some national qualifications, flexible exam scheduling and strong demand in international markets."
      },
      outcomes: [
        "Audit & Assurance (Big 4 or internal audit teams)",
        "Financial Reporting specialist (IFRS) for global companies",
        "International taxation & transfer pricing advisor",
        "Corporate finance & transaction advisory",
        "Banking & financial services roles (risk, compliance, treasury)",
        "Independent practice or consultancy in countries recognising ACCA",
        "Global mobility: opportunities across UK, UAE, Singapore, Canada and Australia"
      ]
    }
  },
  "Medical Sciences": {
    emoji: "🩺",
    description: "Doctors, surgeons, and healthcare professionals.",
    details: {
      overview: {
        summary:
          "Medical Sciences is a respected, service-focused field centered on diagnosis, treatment and prevention of diseases — covering clinical practice, allied health, research and public health.",
        careerNote:
          "Highly rewarding but demanding: long study years, competitive entry and intense early-career workloads. Careers span hospitals, clinics, research labs, pharma, public health and health-tech startups.",
        keySkills: [
          "Clinical knowledge and patient care",
          "Strong grounding in biology, anatomy and physiology",
          "Diagnostic reasoning and decision-making",
          "Research methods and statistics",
          "Communication and empathy"
        ]
      },
      exams: {
        neetUG:
          "NEET-UG — primary national entrance test for MBBS, BDS, BAMS, BHMS, BPT and nursing; eligibility: Class 12 with PCM/Biology (PCB) subjects.",
        programDurations: {
          mbbs: "MBBS: 5.5 years (including 1-year internship)",
          bds: "BDS: ~5 years",
          bams_bhms: "BAMS/BHMS: ~5.5 years",
          bpt: "BPT: ~4.5 years"
        },
        postgraduate: "NEET-PG — for MD/MS specializations after MBBS; super-specialty exams for DM/MCh follow further training.",
        foreignLicensing: "FMGE (for foreign medical grads in India); USMLE/PLAB/MCCQE for practice in US/UK/Canada respectively.",
        notes: "AIIMS/AFMC/JIPMER historically had separate exams but selection is now integrated with NEET for most seats."
      },
      colleges: [
        "All India Institute of Medical Sciences (AIIMS) and other AIIMS institutes",
        "Christian Medical College (CMC), Vellore",
        "Armed Forces Medical College (AFMC), Pune",
        "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER), Puducherry",
        "Maulana Azad Medical College (MAMC), Delhi",
        "King George's Medical University (KGMU), Lucknow",
        "Grant Medical College (Mumbai), St. John's Medical College (Bengaluru)",
        "Top international targets: Harvard Medical School, Johns Hopkins, Oxford, Karolinska"
      ],
      market: {
        trends:
          "Strong and growing demand for clinicians, specialists and public health professionals; rise of telemedicine, digital health, AI diagnostics and clinical research roles.",
        starterIncome:
          "Resident / junior doctors: ~₹6–10 LPA; MD/MS specialists: ~₹12–25 LPA; Super-specialists: ~₹25–40 LPA (varies by hospital and city).",
        growth:
          "Private practice and senior consultants can earn ₹50 LPA–₹1 crore+; overseas opportunities offer higher pay (US/UK/Australia).",
        perks:
          "High social impact and respect, global mobility after licensing, opportunities in research, pharma and health-tech."
      },
      outcomes: [
        "Clinical roles: General Physician, Surgeon, Specialist (Cardiology, Neurology, Oncology, Pediatrics, Orthopedics, Radiology)",
        "Allied health: Dentist, Physiotherapist, Nurse, Pharmacist",
        "Research & Academia: Biomedical research, clinical trials, PhD positions",
        "Healthcare Management & Public Health: Hospital administration, policy roles, NGOs",
        "Pharma & Biotech: R&D, medical affairs, clinical research",
        "Global careers: Licensing and practice abroad (USMLE/PLAB/MCCQE pathways)",
        "Entrepreneurship: Telemedicine, diagnostics, health-tech startups"
      ]
    }
  },
  "Economics": {
    emoji: "📉",
    description: "Policy-making, research, and financial systems.",
    details: {
      overview: {
        summary:
          "Economics studies how societies allocate resources and make decisions — covering microeconomics, macroeconomics, econometrics and public policy.",
        areas: ["Microeconomics (individuals and firms)", "Macroeconomics (growth, inflation, policy)", "Econometrics & data analysis", "Development, international & behavioral economics"],
        careerNote:
          "Economists work in policy, research, finance, consulting and international organizations; roles vary from analytical research to advisory and implementation-focused positions.",
        keySkills: ["Economic theory & quantitative methods", "Econometrics and statistical software (R/Stata/Python)", "Policy analysis and clear communication", "Data literacy and modelling"]
      },
      exams: {
        undergraduate: "Admission to BA/BSc Economics via university entrance tests or class 12 marks (examples: DUET, university-specific tests).",
        nationalTests: "ISI admission test for B.Stat/M.Stat; JNU CEEB for MA Economics; university entrance tests (Ashoka, Shiv Nadar).",
        postgraduate: "Masters and PhD via university-specific exams, GRE for abroad; Indian Economic Service (IES) via UPSC for government economist roles.",
        crossPaths: "Many students move into data science, finance or MBA routes (CAT) after economics degrees."
      },
      colleges: [
        "Delhi School of Economics (DSE)",
        "St. Stephen's College, Hindu College, Miranda House (DU)",
        "Jawaharlal Nehru University (JNU)",
        "Indian Statistical Institute (ISI), Kolkata & Bangalore",
        "Gokhale Institute of Politics & Economics (GIPE), Pune",
        "Madras School of Economics (MSE), Chennai",
        "Ashoka University, Shiv Nadar University",
        "IITs with economics programs (IIT Kanpur, IIT Kharagpur)",
        "Top international targets: LSE, Harvard, MIT, Cambridge, Stanford"
      ],
      market: {
        trends:
          "Rising demand for data-driven economic analysis across policy, fintech, consulting and research; stronger links with data science and analytics roles.",
        starterIncome:
          "Entry-level BA grads: ~₹4–6 LPA; MA grads: ~₹6–12 LPA; Economists in gov/IES: ~₹10–14 LPA; data/economic analysts: ₹8–15 LPA.",
        growth:
          "With 5–10 years: ₹15–30 LPA in corporates or consulting; senior policy or research roles: ₹40 LPA–₹1+ crore depending on organization and location.",
        perks:
          "Impactful policy work, international opportunities (IMF, World Bank, UN), and flexible cross-domain career moves into finance, analytics or management."
      },
      outcomes: [
        "Policy Economist (government, NITI Aayog, ministries)",
        "Research & Academia (professor, think-tank researcher)",
        "Banking & Finance (economic research, risk, analyst roles)",
        "Consulting & Advisory (economic consulting, policy advisory)",
        "Data & Quant roles (economic data analyst, econometrician)",
        "International careers (IMF, World Bank, UN, OECD)",
        "Entrepreneurship: advisory firms, data startups, consultancies"
      ]
    }
  },
  "Data Science": {
    emoji: "🤖",
    description: "Extract insights from data using AI and ML.",
    details: {
      overview: {
        summary:
          "Data Science blends statistics, programming and domain knowledge to extract insights and build predictive systems using machine learning, data engineering and visualization.",
        keyTopics: [
          "Statistical modelling & inferential methods",
          "Machine learning: supervised, unsupervised, deep learning",
          "Data engineering & big data pipelines",
          "Data visualization & storytelling",
          "MLOps, deployment and production ML systems"
        ],
        careerNote:
          "Data Scientists work across industries (finance, healthcare, e-commerce, telecom, government) and can move between research, product and engineering roles depending on skills and interests.",
        keySkills: [
          "Programming (Python/R, SQL)",
          "Statistics and probability",
          "Machine learning and model evaluation",
          "Data engineering and cloud (Spark, AWS/GCP/Azure)",
          "Communication and domain knowledge"
        ]
      },
      exams: {
        undergraduate: "B.Tech/B.Sc routes via JEE, state CETs, BITSAT etc. in CS, Statistics or Math-related streams.",
        postgraduate: "M.Sc/MS in Data Science or AI via GATE, IIT-JAM, university exams; GRE/TOEFL for MS abroad.",
        mba_analytics: "MBA with analytics (CAT/XAT/GMAT) is another pathway into product and leadership roles.",
        certifications: "Industry certifications and specializations (Google, Coursera, AWS, Microsoft) and focused bootcamps are widely used to build practical skills.",
        researchPaths: "GATE/CSIR/NET and direct research programs for academic/research careers."
      },
      colleges: [
        "IIT Bombay, IIT Delhi, IIT Madras (CS/Data Science programs)",
        "IIIT Hyderabad, IIIT Bangalore",
        "IISc Bangalore",
        "ISI Kolkata / ISI Bangalore (statistics & data science)",
        "BITS Pilani, Great Lakes (PG Programs)",
        "Top international targets: MIT, Stanford, CMU, U of Toronto, Oxford"
      ],
      market: {
        trends:
          "Explosive growth in AI/ML, cloud data engineering and domain-specific analytics; demand for production ML and MLOps skills is rising.",
        starterIncome:
          "Data Analyst: ~₹5–8 LPA; Entry Data Scientist: ~₹8–12 LPA; Product firms: ₹12–20 LPA and above depending on role and company.",
        growth:
          "5–8 years: ₹20–40 LPA for senior data scientists or ML engineers; 10+ years: ₹50 LPA–₹1 crore for leadership or specialized experts.",
        perks:
          "High salaries, remote work options, opportunities in cutting-edge AI, and cross-industry mobility."
      },
      outcomes: [
        "Data Scientist, Machine Learning Engineer, Research Scientist",
        "Data Engineer, Big Data Engineer",
        "Business Intelligence / Analytics Lead",
        "NLP / Computer Vision Specialist",
        "MLOps Engineer / ML Platform Lead",
        "Product Data Scientist, Decision Scientist",
        "Academic paths: M.Tech / MS / PhD in AI/Data Science",
        "Entrepreneurship: AI startups, analytics SaaS"
      ]
    }
  },
  "Law": {
    emoji: "⚖️",
    description: "Practice, advise, and shape law — litigation, corporate, policy and judiciary roles.",
    details: {
      overview: "Law is a prestigious and versatile career field that deals with understanding and interpreting legal systems, rights, and responsibilities. Lawyers play key roles in justice, governance, policymaking, corporate compliance, litigation, and international affairs. A career in law can lead to being a litigator in courts, corporate lawyer in MNCs, legal advisor in government, human rights activist, or judge in the judiciary. The field requires critical thinking, strong communication, analytical reasoning, and ethical judgment. Work-life balance varies widely — litigation and corporate law often involve long hours, while academia, NGOs, or in-house counsel roles may be more stable.",
      exams: {
        entry: "5-year integrated LLB after Class 12 or 3-year LLB after graduation.",
        clat: "CLAT (Common Law Admission Test) — for admission into NLUs (National Law Universities). Covers English, Legal Aptitude, General Knowledge, Logical Reasoning and Quantitative Aptitude.",
        ailet: "AILET — All India Law Entrance Test (for NLU Delhi).",
        lsat: "LSAT–India — accepted by several private universities (e.g., Jindal Global Law School).",
        slat: "SLAT — Symbiosis Law Admission Test (Symbiosis law schools).",
        du_llb: "DU LLB Entrance — for 3-year LLB at Delhi University (PG entry after graduation).",
        judiciary: "Judicial Services Examinations after LLB to become a Judge/Magistrate; UPSC Law optional is also common for legal roles in civil services."
      },
      colleges: [
        "National Law School of India University (NLSIU), Bangalore",
        "NALSAR University of Law, Hyderabad",
        "NLU Delhi, NLU Jodhpur, NUJS Kolkata, NLU Bhopal",
        "Symbiosis Law School (Pune, Noida, Hyderabad)",
        "Jindal Global Law School, Sonipat",
        "Faculty of Law, University of Delhi (DU)",
        "Government Law College (GLC), Mumbai",
        "ILS Law College, Pune",
        "Top international targets: Harvard Law, Yale Law, Stanford, Oxford, Cambridge, LSE"
      ],
      market: {
        trends: "Growing demand in corporate law, arbitration, IPR, cyber law and international law. India’s expanding corporate sector, fintech and startups are increasing demand for in-house counsel and compliance experts. Emerging areas include digital privacy, AI regulation and environmental law.",
        starterIncome: "Litigation (independent practice): ₹2–5 LPA initially; Corporate law firms (Tier-1): ₹10–18 LPA; In-house counsel at MNCs: ₹8–12 LPA.",
        growth: "With 5–10 years: ₹20–40 LPA in corporate firms. Senior partners and top corporate lawyers: ₹50 LPA–₹1+ crore. Abroad: starting salaries ~$80k–120k/year; partners can earn substantially more.",
        perks: "High social prestige, ability to shape policy and law, global mobility for international law practice, and strong leadership paths in corporate and public sectors."
      },
      outcomes: [
        "Litigation & Advocacy — represent clients in courts and tribunals.",
        "Corporate Law — M&A, compliance, contracts, IPR and arbitration.",
        "Judiciary — Judge, Magistrate, higher judiciary via judicial services exams.",
        "Civil Services & Policy — legal officers in ministries and policy roles.",
        "Academia & Research — law professors, think-tank researchers and legal scholars.",
        "International Careers — UN, WTO, International Courts and global law firms.",
        "NGOs & Human Rights — social justice, environmental and rights-based work."
      ]
    }
  }
};

function Careers() {
  const [search, setSearch] = useState("");
  const [selectedCareer, setSelectedCareer] = useState(null);


  // Helpers to render detail content in a readable structure
  const renderParagraphs = (text) => {
    return text.split(/\n\n+/).map((para, idx) => (
      <p key={idx} style={{ color: 'var(--ink-muted)', marginBottom: '0.75rem' }}>{para}</p>
    ));
  };

  const renderDetailValue = (value) => {
    if (!value && value !== 0) return null;
    if (Array.isArray(value)) {
      return value.map((v, i) => (
        <p key={i} style={{ color: 'var(--ink-muted)', marginBottom: '0.75rem' }}>{v}</p>
      ));
    }
    if (typeof value === 'object') {
      // render nested object as sub-sections
      return Object.entries(value).map(([subKey, subVal]) => (
        <div key={subKey} style={{ marginBottom: '0.75rem' }}>
          <h4 style={{ fontWeight: 700, marginBottom: '0.35rem' }}>{subKey.charAt(0).toUpperCase() + subKey.slice(1)}</h4>
          {typeof subVal === 'string' ? renderParagraphs(subVal) : renderDetailValue(subVal)}
        </div>
      ));
    }
    // primitive (string/number)
    return renderParagraphs(String(value));
  };

  // helper: recursively search strings inside nested career objects
  const textContains = (obj, query) => {
    if (!query) return false;
    const q = query.toLowerCase();
    const recurse = (value) => {
      if (value == null) return false;
      if (typeof value === 'string' || typeof value === 'number') {
        return String(value).toLowerCase().includes(q);
      }
      if (Array.isArray(value)) return value.some(recurse);
      if (typeof value === 'object') return Object.values(value).some(recurse);
      return false;
    };
    return recurse(obj);
  };

  const filteredCareers = Object.keys(careersData).filter((c) => {
    if (!search) return true;
    const q = search.toLowerCase();
    // match career title
    if (c.toLowerCase().includes(q)) return true;
    // match description
    if (careersData[c].description && careersData[c].description.toLowerCase().includes(q)) return true;
    // search inside nested details
    return textContains(careersData[c].details, q);
  });

  return (
    <main className="main container" style={{ maxWidth: 980, margin: '0 auto' }}>
      <SEO
        title="Careers"
        description="Search and explore detailed roadmaps for top careers in India — exams, colleges, outcomes and next steps."
        url="/careers"
      />
      {/* Hero Section */}
      <section className="careers-hero" style={{ paddingTop: '1rem', paddingBottom: '1rem', textAlign: 'center' }}>
        <h1 className="home-greeting section__title" style={{ marginBottom: '0.6rem' }}>Find Your Career Path 🚀</h1>
        <p className="section__subtitle">
          Search or explore detailed roadmaps for top careers in India
        </p>
        <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
          <input
            type="text"
            className="input"
            placeholder="Search for a career... (e.g. Architect, Doctor, IAS)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* If career is selected */}
      {selectedCareer ? (
        <section className="career-detail card">
          <button
            className="btn btn--secondary"
            onClick={() => setSelectedCareer(null)}
            style={{ marginBottom: "1.5rem" }}
          >
            ← Back to Careers
          </button>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            {careersData[selectedCareer].emoji} {selectedCareer}
          </h2>
          {Object.entries(careersData[selectedCareer].details).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.6rem' }}>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              {renderDetailValue(value)}
            </div>
          ))}
        </section>
      ) : (
        /* Careers Grid */
        <section className="careers-grid">
          {filteredCareers.map((career) => (
            <div
              key={career}
              className="card career-card"
              onClick={() => setSelectedCareer(career)}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                {careersData[career].emoji}
              </div>
              <h3 style={{ fontWeight: "700" }}>{career}</h3>
              <p style={{ color: "var(--ink-muted)" }}>
                {careersData[career].description}
              </p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default Careers;
