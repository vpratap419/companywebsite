import React from 'react';
import "./Eccouncil.css";
import img1 from "../images/ec council.jpg";
import learn1 from "../images/learn1.png";
import certify2 from "../images/certify2.png";
import engage3 from "../images/engage3.png";
import compete4 from "../images/compete4.png";
import learn from "../images/learn.png";
import certify from "../images/certify.png";
import engage from "../images/engage.png";
import compete from "../images/compete.png";
import knowledge from "../images/knowledge.png";
import certificate from "../images/certificate.png";


const phases = [
  { number: 1, title: "RECONNAISSANCE" },
  { number: 2, title: "SCANNING" },
  { number: 3, title: "GAINING ACCESS" },
  { number: 4, title: "MAINTAINING ACCESS" },
  { number: 5, title: "COVERING TRACKS" },
];


const steps = [
  {
    image: learn1,
    benefit: "Gain Skills",
    icon: "📝"
  },
  {
    image: certify2,
    benefit: "Gain Recognition",
    icon: "🎯"
  },
  {
    image: engage3,
    benefit: "Gain Experience",
    icon: "🏔️"
  },
  {
    image: compete4,
    benefit: "Gain Respect",
    icon: "📈"
  }
];

const steps2 = [
  {
    number: learn,
    items: [
      '5 days of training',
      '20 modules',
      '3000+ pages of student manual',
      '1900+ pages of lab manual',
      'Over 200 hands-on labs with competition flags',
      'Over 3,500 hacking tools',
      '- Learn how to hack multiple operating systems (Windows 11, Windows servers, Linux, Ubuntu, Android)',
      'MITRE Attack Framework',
      'Diamond model of intrusion analysis',
      'Techniques for establishing persistence',
      'Evading NAC and endpoint security',
      'Understand Fog, Edge, and Grid Computing Model'
    ],
  },
  {
    number: certify,
    items: [
      'C|EH® ANSI',
      '- 125 Multiple-Choice Questions',
      '- 4 hours',
      'C|EH® Practical',
      '- 6-hour Practical Exam',
      '- 20 Scenario-Based Questions'
    ],
  },
  {
    number: engage,
    items: [
      'Conduct a real-world ethical hacking assignment',
      'Apply the 5 phases',
      '- Reconnaissance',
      '- Scanning',
      '- Gaining Access',
      '- Maintaining Access',
      '- Covering Your Tracks',
    ],
  },
  {
    number: compete,
    items: [
      'New challenges every month',
      '4-hour competition',
      'Compete with your peers all over the world',
      'Hack your way to the top of the leaderboard',
      'Gain recognition',
      'Challenges include:',
      '- OWASP Top 10 Web Application Threat Vectors',
      '- Ransomware/Malware Analysis',
      '- Outdated/Unpatched Software',
      '- System Hacking and Privilege Escalation',
      '- Web Application Hacking and Pen Testing',
      '- Cloud Attack/Hacking',
      '- and many more...'
    ],
  },
];

const modules = [
  {
    number: "01",
    title: "Introduction to Ethical Hacking",
    description:
      "Cover the fundamentals of key issues in the information security world, including the basics of ethical hacking, information security controls, relevant laws, and standard procedures.",
  },
  {
    number: "02",
    title: "Foot Printing and Reconnaissance",
    description:
      "Learn how to use the latest techniques and tools to perform foot printing and reconnaissance, a critical pre-attack phase of the ethical hacking process.",
  },
  {
    number: "03",
    title: "Scanning Networks",
    description:
      "Learn different network scanning techniques and countermeasures.",
  },
  {
    number: "04",
    title: "Enumeration",
    description:
      "Learn various enumeration techniques, such as Border Gateway Protocol (BGP) and Network File Sharing (NFS) exploits, and associated countermeasures.",
  },
  {
    number: "05",
    title: "Vulnerability Analysis",
    description:
      "Learn how to identify security loopholes in a target organization’s network, communication infrastructure, and end systems. Different types of vulnerability assessment and vulnerability assessment tools.",
  },
  {
    number: "06",
    title: "System Hacking",
    description:
      "Learn about the various system hacking methodologies—including ste-ganography, steganalysis attacks, and covering tracks—used to discover system and network vulnerabilities.",
  },
  {
    number: "07",
    title: "Malware Threats",
    description:
      "Learn different types of malware (Trojan, virus, worms, etc.), APT and fileless malware, malware analysis procedure, and malware countermeasures.",
  },
  {
    number: "08",
    title: "Sniffing",
    description:
      "Learn about packet-sniffing techniques and how to use them to discover network vulnerabilities, as well as countermeasures to defend against sniffing attacks.",
  },
  {
    number: "09",
    title: "Social Engineering",
    description:
      "Learn social engineering concepts and techniques, including how to identify theft attempts, audit human-level vulnerabilities, and suggest social engineering countermeasures.",
  },
  {
    number: "10",
    title: "Denial-of-Service",
    description:
      "Learn about different Denial of Service (DoS) and Distributed DoS (DDoS) attack techniques, as well as the tools used to audit a target anddevise DoS and DDoS countermeasures and protections.",
  },
  {
    number: "11",
    title: "Session Hijacking",
    description:
      "Understand the various session hijacking techniques used to discover network-level session management, authentication, authorization, and cryptographic weaknesses and associated countermeasures.",
  },
  {
    number: "12",
    title: "Evading IDS, Firewalls, and Honeypots",
    description:
      "Get introduced to firewall, intrusion detection system (IDS), and honeypot evasion techniques; the tools used to audit a network perimeter for weaknesses; and countermeasures.",
  },
  {
    number: "13",
    title: "Hacking Web Servers",
    description:
      "Learn about web server attacks, including a comprehensive attack methodology used to audit vulnerabilities in web server infrastructures and countermeasures.",
  },
  {
    number: "14",
    title: "Hacking Web Applications",
    description:
      "Learn about web application attacks, including a comprehensive web application hacking methodology used to audit vulnerabilities in web applications and countermeasures.",
  },
  {
    number: "15",
    title: "SQL Injection",
    description:
      "Learn about SQL injection attacks, evasion techniques, and SQL injection countermeasures.",
  },
  {
    number: "16",
    title: "Hacking Wireless Networks",
    description:
      "Understand different types of wireless technologies, including encryption, threats, hacking methodologies, hacking tools, Wi-Fi sedcurity tools, and countermeasures.",
  },
  {
    number: "17",
    title: "Hacking Mobile Platforms",
    description:
      "Learn Mobile platform attack vector, android and iOS hacking, mobile device management, mobile security guidelines, and security tools.",
  },
  {
    number: "18",
    title: "IoT and OT Hacking",
    description:
      "Learn different types of IoT and OT attacks, hacking methodology, hacking tools, and countermeasures.",
  },
  {
    number: "19",
    title: "Cloud Computing",
    description:
      "Learn different cloud computing concepts, such as container technologies and server less computing, various cloud computing threats, attacks, hacking methodology, and cloud security techniques and tools.",
  },
  {
    number: "20",
    title: "Cryptography",
    description:
      "Learn about encryption algorithms, cryptography tools, Public Key Infrastructure (PKI), email encryption, disk encryption, cryptography attacks, and cryptanalysis tools.",
  },
];

const features = [
  "100% virtualization for a complete learning experience",
  "Wide range of target platforms to hone your skills",
  "After login, you will have full access to pre-configured targets, networks, and the attack tools necessary to exploit them:\n• Pre-configured vulnerable websites\n• Vulnerable, unpatched operating systems\n• Fully networked environments\n• 3,500+ hacking tools\n• And much more!",
  "519 attack techniques",
  "Objective-oriented flags for critical thinking and applied knowledge assessment",
  "Cloud-based cyber range"
];

const data = [
  [
    "ABCD is a Nationwide IT/ITES organization",
    "Realistic segmented networks",
    "DMZs’s and private subnets stretch across the infrastructure to support various business units",
    "Various application servers and services support ABCDORG Operations",
  ],
  [
    "Real networks, real operating systems, and real applications",
    "Private, dedicated access – no shared resources",
    "Fully automated network deployment with EC-Council’s Cyber Range",
    "24x7 browser-based access",
  ],
];

const phases2 = [
  {
    title: 'PHASE 1',
    subtitle: 'Vulnerability Assessment',
    items: [
      'Foot Printing & Reconnaissance',
      'Scanning',
      'Enumeration',
      'Vulnerability Analysis',
    ],
  },
  {
    title: 'PHASE 2',
    subtitle: 'Gaining Access',
    items: [
      'System Hacking',
      'Malware Threats',
      'Sniffing',
      'Social Engineering',
      'Denial-of-Service',
    ],
  },
  {
    title: 'PHASE 3',
    subtitle: 'Perimeter and Web App Exploitation',
    items: [
      'Session Hijacking',
      'Evading IDS',
      'Firewalls',
      'Honeypots',
      'Hacking Web Servers',
      'Hacking Web Applications',
      'SQL Injection',
    ],
  },
  {
    title: 'PHASE 4',
    subtitle: 'Mobile, IoT, OT Exploitation',
    items: [
      'Hacking Wireless Networks',
      'Hacking Mobile Platforms',
      'IoT Hacking',
      'OT Hacking',
      'Cloud Computing',
      'Cryptography',
    ],
  },
];

const data2 = [
  { count: '3000+', label: 'Student Manual Pages' },
  { count: '1900+', label: 'Lab Manual Pages' },
  { count: '3500+', label: 'Hacking & Security Tools' },
  { count: '220', label: 'Hands-On Lab Practicals' },
  { count: '519', label: 'Attack Techniques' },
  { count: '20', label: 'Refreshed Modules' },
];

const roles = [
  [
    'Mid-Level Information Security Auditor',
    'Cybersecurity Auditor',
    'Security Administrator',
    'IT Security Administrator',
    'Cyber Defense Analyst',
    'Vulnerability Assessment Analyst',
    'Warning Analyst',
    'Information Security Analyst 1',
    'Security Analyst L1',
    'Infosec Security Administrator',
  ],
  [
    'Cybersecurity Analyst level 1, level 2, & level 3',
    'Network Security Engineer',
    'SOC Security Analyst',
    'Security Analyst',
    'Network Engineer',
    'Senior Security Consultant',
    'Information Security Manager',
    'Senior SOC Analyst',
    'Solution Architect',
    'Cybersecurity Consultant',
  ]
];

const Eccouncil = () => {
  return (
    <main className='main'>
      <div className='eccouncil-container'>
        <div className='poster'>
          <img src={img1} alt='' />
        </div>

        <div className='cieh'>
          <div className='cieh-container'>
          <h2>What is C|EH®v12?</h2>
          <p>
            The Certified Ethical Hacker has been battle-hardened over the last 20 years, creating 
            hundreds of thousands of Certified Ethical Hackers employed by top companies, militaries, 
            and governments worldwide.
          </p>
          <p>
            In its 12th version, the Certified Ethical Hacker provides comprehensive training, hands-on learning labs, practice cyber ranges for engagement, certification assessments, cyber 
            competitions, and opportunities for continuous learning into one comprehensive program 
            curated through our new learning framework: 1. Learn 2. Certify 3. Engage 4. Compete.
          </p>
          <div className="phases-container">
            <div className="center-circle">
              <h1>5</h1>
              <p>Phases of<br />Ethical Hacking</p>
            </div>
            <div className="phases-list">
              {phases.map((phase) => (
                <div key={phase.number} className="phase-item">
                  <span className="phase-dot" />
                  <div className="phase-content">
                    <div className="phase-number">{phase.number}</div>
                    <div className="phase-title">{phase.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p>
            The C|EH v12 also equips aspiring cybersecurity professionals with the tactics, techniques, 
            and procedures (TTPs) to build ethical hackers who can uncover weaknesses in nearly any 
            type of target system before cybercriminals do.
          </p>
          </div>
        </div>

        <div className='newcieh'>
          <div className='newcieh-container'>
          <h2>What's New in the C|EH®v12?</h2>
          <h2 className='title'>LEARN | CERTIFY | ENGAGE | COMPETE</h2>
          <p>
          The C|EH® v12 is a specialized and one-of-a-kind training program to teach you everything
          you need to know about ethical hacking with hands-on training, labs, assessment, a mock
          engagement (practice), and global hacking competition. Stay on top of the game with the
          most in-demand skills required to succeed in the field of cybersecurity.
          </p>
          <h2>Master ethical hacking skills that go beyond the certification.</h2>
          </div>

          <div className="framework-container">
          {steps.map((step) => (
            <div key={step.number} className="framework-step">
              <div className="step-left">
                <img src={step.image} alt=''/>
              </div>
              <div className="step-middle">
                <div className=',middle'>
                <div className="icon">{step.icon}</div>
                <div className="benefit">{step.benefit}</div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
 
        <div className="hackerverse-container">
          <h2 className="title2">Enter the Hackerverse™ With the C|EH® v12<br />Enhance Your Ethical Hacking Career</h2>
          <div className="steps2-grid">
            {steps2.map((step, index) => (
              <div key={index} className={`step2 step-${step.number}`}>
                <div className="step2-header">
                  <img className="step2-number" src={step.number} alt='' />
                </div>
                <ul className="step2-items">
                  {step.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='learn'>
          <div className='learn-container'>
            <img src={learn} alt='' />
            <p>
            The C|EH® v12 training program includes 20 modules covering various technologies, tactics,
            and procedures, providing prospective ethical hackers with the core knowledge needed to
            thrive in cybersecurity. Delivered through a carefully curated training plan that typically
            spans five days, the 12th version of the C|EH® continues to evolve to keep up with the
            latest OS, exploits, tools, and techniques. The concepts covered in the training program
            are split 50/50 between knowledge-based training and hands-on application through our
            cyber range.Every tactic discussed in training is backed by step-by-step labs conducted in a
            virtualized environment with live targets, live tools, and vulnerable systems. Through our lab
            technology, every participant will have comprehensive hands-on practice to learn and apply
            their knowledge.”
            </p>
          </div>
          <div className="info-banner">
            <div className="info-box">
              <div className="info-value">20</div>
              <div className="info-label">
                <div>REFRESHED</div>
                <div>MODULES</div>
              </div>
            </div>

            <div className="info-box">
              <div className="info-value">3000+</div>
              <div className="info-label">
                <div>PAGES OF</div>
                <div>STUDENT MANUAL</div>
              </div>
            </div>
          </div>
        </div>

        <div className='module'>
          <div className='module-container'>
            <h2>Course Outline</h2>
            <h2>20 Modules That Help You Master the Foundations of Ethical
                Hacking and Prepare to Take the C|EH Certification Exam</h2>
          </div>

          <div className="module-list">
            {modules.map((mod) => (
              <div className="module-item" key={mod.number}>
                <div className="module-left">
                  <span className="module-label">Module</span>
                  <span className="module-number">{mod.number}</span>
                </div>
                <div className="module-content">
                  <h3>{mod.title}</h3>
                  <p>{mod.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='handon'>
          <div className='handon-container'>
            <h2>HANDS-ON<br />LEARNING LABS</h2>
            <p>
              With over 220 hands-on labs conducted in our cyber range environment, you will have the
              opportunity to practice every learning objective on live machines and vulnerable targets in
              the course. Pre-loaded with over 3,500 hacking tools and various operating systems, you will
              gain unprecedented exposure and hands-on experience with the most common security tools,
              latest vulnerabilities, and widely used operating systems in the industry. Our range is web
              accessible, making it easier for you to learn and practice from anywhere.
            </p>
            <h3>What’s Covered:</h3>
          </div>
          <div className="feature-grid">
            {features.map((text, index) => (
              <div key={index} className="feature-card">
                {text.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='certify'>
          <div className='certify-container'>
            <img className='certifyimg' src={certify} alt='' />
            <h2>Prove Your Skills and Abilities With <br />Online, Practical Examinations</h2>
            <p>
              The Certified Ethical Hacker® credential is trusted globally as the industry standard for
              evaluating one’s understanding of ethical hacking and security testing. As an ANSI 17024
              accredited examination, the 150-question, 4-hour proctored exam is recognized across
              the globe as the original and most trusted tactical cyber security certification for ethical
              hackers. Certification domains are carefully vetted through industry practitioners, ensuring
              the certification maps to current industry requirements; this exam undergoes regular
              psychometric evaluation and tuning to ensure a fair and accurate measure of the candidate’s
              knowledge in the ethical hacking domain.
            </p>
            <img className='knowledge' src={knowledge} alt='' />
            <img className='certificate' src={certificate} alt='' />
            <h2>Certified Ethical Hacker (C|EH®) Certification</h2>
            <p>
              The C|EH® exam is a 4-hour exam with 125 multiple-choice questions. This knowledge-based
              exam will test your skills in information security threats and attack vectors, attack detection,
              attack prevention, procedures, methodologies, and more!
              Access our Exam Blueprint for C|EH®.        
            </p>
            <btn>Download Now</btn>
            <div className='points'>
            <p className='points-container'>
              • Port scanning tools (e.g., Nmap, Hping)<br />
              • Vulnerability detection<br />
              • Attacks on a system (e.g., DoS, DDoS, session hijacking, web server and web application attacks, SQL injection, wireless threats)<br />
              • SQL injection methodology and evasion techniques<br />
              • Web application security tools (e.g., Acunetix WVS)<br />
              • SQL injection detection tools (e.g., IBM Security AppScan)<br />
              • Communication protocols
            </p>
            </div>
            <p>This is the next step to becoming a C|EH® Master after you have achieved your C|EH®
              certification. Within the C|EH® Practical, you have limited time to complete 20 challenges
              to test your skills and proficiency in a performance-based cyber range. This exam is NOT a
              simulation and incorporates a live corporate network of VMs and applications with solutions
              to uncover vulnerabilities.
            </p>
            <h2>C|EH® Master</h2>
            <p>
              Upon completing the C|EH® (Master) program, consisting of the C|EH® and C|EH® (Practical),
              the C|EH® (Master) designation is awarded. C|EH® Masters have shown proficiency at a master
              level in the knowledge, skills, and abilities of ethical hacking with a total of 6 hours of testing to
              prove their competency. The top 10 performers in both C|EH® and C|EH® Practical exams are
              featured on the C|EH® Master Global Ethical Hacking Leader Board.
            </p>
            <h2>The C|EH® Exam at a Glance</h2>
            <div class="exam-table-container">
              <table className="exam-table">
                <thead>
                  <tr>
                    <th>Exam Details</th>
                    <th>C|EH® (MCQ Exam)</th>
                    <th>C|EH® (Practical)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Number of Questions</td>
                    <td>125</td>
                    <td>20</td>
                  </tr>
                   <tr>
                    <td>Test Duration</td>
                    <td>4 Hours</td>
                    <td>6 Hours</td>
                  </tr>
                  <tr>
                    <td>Test Format</td>
                    <td>Multiple Choice Questions</td>
                    <td>iLabs Cyber Range</td>
                  </tr>
                  <tr>
                    <td>Test Delivery</td>
                    <td>ECC EXAM, VUE</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Availability</td>
                    <td>-</td>
                    <td>Aspen-iLabs</td>
                  </tr>
                  <tr>
                    <td>Exam Prefix</td>
                    <td>312-50 (ECC EXAM), 312-50 (VUE)</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Passing Score</td>
                    <td>Refer to https://cert.eccouncil.org/faq.html</td>
                    <td>70%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> 

      <div className='engage'>
        <div className='engage-container'>
          <img src={engage} alt='' />
          <p>
            The C|EH® v12 program helps you develop real-world experience in ethical hacking through
            the hands-on C|EH® practice environment. The C|EH® Engage equips you with the skills to
            prove that you have what it takes to be a great ethical hacker.<br /><br />
            New to C|EH® v12, students will embark on their first emulated ethical hacking engagement.
            This 4-phase engagement requires students to think critically and test the knowledge and
            skills gained by capturing a series of flags in each phase, demonstrating the live application of
            skills and abilities in a consequence-free environment through EC-Council’s new Cyber Range.<br /><br />
            As you complete your training and hands-on labs, the C|EH® Engage lets you apply everything
            you have learned in a mock ethical hacking engagement. This 4-part security engagement gives
            you a real ethical hacking engagement experience from start to finish against an emulated
            organization. Using our capture-the-flag-style range, you will complete your engagement by
            answering “flag” questions as you progress.
          </p>
          <h2>Your Mission</h2>
          <p>
            Whether this is your first engagement or you’re honing your skills, get ready to test your ethical
            hacking knowledge like never before! Once you’ve practiced through the hands-on guided
            labs, it’s time to apply your knowledge, take on the hacker persona, and find the vulnerabilities
            and weaknesses in ABCDorg—all built in our C|EH® Engage (practice range).
          </p>
        </div>
        <div className="target-container">
            <h2 className="heading">Target Organization Characteristics</h2>
            <div className="grid">
              {data.flat().map((text, idx) => (
                <div className="cell" key={idx}>
                  {text}
                </div>
              ))}
            </div>
        </div>
        <div className='objective'>
          <h2>Objective</h2>
          <p>Armed with your attack platform, Parrot OS, and a plethora of tools used by Ethical Hackers,
             you will embark on a 4-part engagement to assess ABCDorg’s security posture. Follow the
             process, practice your TTP and experience the real thing in a controlled environment with
             no consequences, just the ultimate learning experience to support your career as an Ethical
             Hacker! Each phase builds on the last as you progress through your ABCDorg’s engagement.
          </p>
        </div>
        <div className="container">
          {phases2.map((phase, index) => (
            <div key={index} className="phase2-card">
              <div className="phase2-title">
                <strong>{phase.title}</strong> <br />
                {phase.subtitle}
              </div>
              <ul>
                {phase.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='skill'>
          <h2>Put Your Skills and Knowledge to the Test With the C|EH® Master</h2>
          <p>Once you have achieved the certification and completed your ethical hacking engagement,
            you are ready to challenge the proctored C|EH® practical assessment and become a C|EH®
            Master!
          </p>
        </div>
      </div>

      <div className='compete'>
        <div className='compete-container'>
          <img src={compete} alt='' />
          <h2>Without a Stimulating Cyber Competition, There Can Be No Progress.
              Competitors Drive You to Be the Best You Can Be.
          </h2>
          <p>
            The C|EH® Global Challenges occur every month, providing capture-the-flag style
            competitions that give students exposure to various new technologies and platforms, from
            web applications, OT, IoT, SCADA, and ICS systems to cloud and hybrid environments. Our
            compete structure lets ethical hackers fight their way to the top of the leaderboard each
            month in these 4-hour curated CTFs. Objective-based flags are designed around the ethical
            hacking process, keeping skills current, testing critical thinking abilities, and covering the
            latest vulnerabilities and exploits as they are discovered. Hosted 100% online in
            EC-Council’s Cyber Range, candidates race the clock in scenario-based engagements against
            fully developed network and application environments with real operating systems, real
            networks, tools, and vulnerabilities to practice, engage, compete, build, and hone their cyber
            skills against various new target organizations.
          </p>
          <h2>Key Updates of C|EH® v12</h2>
          <div className='update'>
            <div className='update-container'>
              <h3>Features:</h3>
            <p>
              1. New Learning Methodology: Learn – Certify – Engage – Compete<br />
              2. Compete: new challenges every month to test your job-ready skills!<br />
              3. 100% Compliance to NICE 2.0 Framework<br />
              4. Based on a comprehensive industry-wide job-task analysis<br />
              5. Hands-on learning labs<br />
              6. Practice Range<br />
              7. Global C|EH community competitions<br />
              8. Cheat Sheet<br />
              9. Coverage of the latest malware<br />
              10. Lab-intensive program (Every learning objective is demonstrated using labs)<br />
              11. Hands-on program (More than 50% of training time is dedicated to labs)<br />
              12. Lab environment simulates a real-time environment(Lab setup simulates
                  real-life networks and platforms)<br />
              13. Covers the latest hacking tools (Based on Windows, macOS, and Linux)<br />
              14. Latest OS covered and a patched testing environment<br />
              15. All the tool screenshots are replaced with the latest version<br />
              16. All the tool listing slides are updated with the latest tools<br />
              17. All the countermeasure slides are updated<br />
            </p>
            <h3>Technology Updates:</h3>
            <p>
              1. MITRE ATTACK Framework<br />
              2. Diamond Model of Intrusion Analysis<br />
              3. Techniques for Establishing Persistence<br />
              4. Evading NAC and Endpoint Security<br />
              5. Fog Computing<br />
              6. Edge Computing<br />
              7. Grid Computing<br />
            </p>
            </div>
          </div>
          <div className="course-content-wrapper">
            <h2 className="course-title">Course Content</h2>
            <div className="course-box">
              {data2.map((item, index) => (
                <div key={index} className="course-item">
                  <div className="course-count">{item.count}</div>
                  <div className="course-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="job-roles-wrapper">
            <h2 className="job-title">Common Job Roles for C|EH</h2>
            <div className="job-roles-columns">
              {roles.map((column, colIndex) => (
                <ul key={colIndex} className="job-role-column">
                  {column.map((role, index) => (
                    <li key={index} className="job-role-item">{role}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="exam-info-container">
            <h2>C|EH<sup>®</sup> v12 Exam Information</h2>

            <div className="exam-table2">
              <div className="exam-column">
                <h3>C|EH<sup>®</sup> (ANSI)</h3>
                <p><strong>Exam Title:</strong> Certified Ethical Hacker (ANSI)</p>
                <p><strong>Exam Code:</strong> 312-50 (ECC EXAM), 312-50 (VUE)</p>
                <p><strong>Number of Questions:</strong> 125</p>
                <p><strong>Duration:</strong> 4 hours</p>
                <p><strong>Availability:</strong> ECCEXAM/VUE</p>
                <p><strong>Test Format:</strong> Multiple Choice</p>
                <p><strong>Passing Score:</strong> Please refer to <a href="https://cert.eccouncil.org/faq.html" target="_blank" rel="noreferrer">ECC FAQ</a></p>
              </div>

              <div className="exam-column">
                <h3>C|EH<sup>®</sup> PRACTICAL</h3>
                <p><strong>Exam Title:</strong> Certified Ethical Hacker (Practical)</p>
                <p><strong>Number of Practical Challenges:</strong> 20</p>
                <p><strong>Duration:</strong> 6 hours</p>
                <p><strong>Availability:</strong> ASPEN iLabs</p>
                <p><strong>Test Format:</strong> iLabs cyber range</p>
                <p><strong>Passing Score:</strong> 70%</p>
              </div>
            </div>

            <div className="duration-cards">
              <div className="duration-card red">
                <p className="duration-label">Training</p>
                <p className="duration-value">5<br />Days</p>
              </div>
              <div className="duration-card red">
                <p className="duration-label">Duration</p>
                <p className="duration-value">40<br />Hours</p>
              </div>
            </div>

            <h3 className="training-heading">Training Options</h3>
            <div className="training-options">
              <div className="training-card">
                <h4>iLearn (Self-Study)</h4>
                <p>This solution is an asynchronous, self-study environment in a video streaming format</p>
              </div>
              <div className="training-card">
                <h4>iWeek (Live Online)</h4>
                <p>This solution is a live, online, instructor-led training course</p>
              </div>
              <div className="training-card">
                <h4>Master Class</h4>
                <p>The opportunity to learn from world-class instructors and collaborate with top Infosecurity professionals.</p>
              </div>
              <div className="training-card">
                <h4>Training Partner (In Person)</h4>
                <p>This solution offers “in-person” training so that you can get the benefit of collaborating with your peers and gaining real-world skills, conveniently located in your backyard.</p>
              </div>
            </div>
          </div>
        </div>
      </div>      
      </div>
    </main>
  )
}
export default Eccouncil;