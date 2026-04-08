import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Shield, Terminal, Network, Target, Mail, Linkedin, ChevronRight, Briefcase } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Building a Security-First Culture in African Organizations",
    excerpt: "Security awareness isn't just about technology—it's about people. Here's how organizations in Africa can build resilient security cultures from the ground up.",
    category: "Strategy",
    date: "2025-01-15",
    readTime: "8 min read",
    content: `Security incidents increasingly stem not from sophisticated attacks, but from basic human errors and lack of awareness. In my experience implementing security programs across African organizations, I've observed that the most significant security improvements come from cultural change, not just technical controls.

The Challenge: Many organizations treat cybersecurity as purely a technical problem. They invest in firewalls, antivirus software, and intrusion detection systems, yet fall victim to simple phishing attacks or social engineering. The missing piece is human awareness and a security-conscious culture.

Key Strategies:

Leadership Buy-In: Security culture must start at the top. When executives demonstrate security-conscious behavior, it cascades throughout the organization.

Regular Training: Move beyond annual compliance training. Implement continuous, engaging security awareness programs that relate to employees' daily work.

Localized Content: Use examples and scenarios relevant to the African context. Phishing attempts targeting mobile money, local banks, and regional services resonate more than generic Western examples.

Gamification: Make security training engaging through competitions, quizzes, and recognition programs.

Implementation: Start small with pilot programs in key departments. Measure baseline security behaviors, implement targeted training, and track improvements. Share success stories across the organization to build momentum.

Results: Organizations that invest in security culture see measurable improvements: fewer successful phishing attempts, better password hygiene, faster incident reporting, and overall reduced security risk.`
  },
  {
    id: 2,
    title: "ATM Security: Lessons from the Frontlines",
    category: "Technical",
    date: "2025-01-08",
    readTime: "6 min read",
    excerpt: "ATMs remain critical infrastructure. Drawing from direct experience in ATM operations and security management, here are the key considerations for protecting these vital financial endpoints.",
    content: `Automated Teller Machines represent a unique intersection of physical and cyber security. Having managed ATM operations across multiple sites and banking clients, I've learned that protecting these devices requires a holistic approach.

The ATM Threat Landscape: ATMs face diverse threats: card skimming, jackpotting attacks, physical theft, network interception, and malware. Each requires different defensive strategies.

Physical Security:

Tamper Detection: Modern ATMs must include sensors that detect physical manipulation. Anti-skimming devices, camera inspection before transactions, and regular physical inspections are essential.

Secure Locations: ATM placement matters. Well-lit, monitored locations with good visibility reduce both physical attacks and customer safety concerns.

Network Security:

Encryption: All ATM communications must use strong encryption. Point-to-point encryption protects cardholder data from interception.

Network Segmentation: ATMs should operate on isolated network segments, preventing lateral movement if one device is compromised.

Regular Updates: Keep ATM software and security patches current. Many ATM compromises exploit known vulnerabilities in outdated systems.

Monitoring and Response: Implement 24/7 monitoring of ATM networks. Anomaly detection can identify suspicious activity before significant losses occur. In my work coordinating NCR ATM deployments and maintenance, consistent SLA compliance and proactive monitoring were the two biggest factors in preventing extended outages.`
  },
  {
    id: 3,
    title: "OWASP Top 10: A Practical Guide for African Developers",
    category: "Awareness",
    date: "2025-01-01",
    readTime: "10 min read",
    excerpt: "The OWASP Top 10 provides crucial guidance for secure web development. Here's how to apply these principles in the African development context.",
    content: `The OWASP Top 10 represents the most critical security risks to web applications. For developers building the next generation of African digital services, understanding and addressing these risks is essential.

Why OWASP Matters for Africa: As Africa's digital economy grows, so does the attack surface. Mobile money platforms, e-government services, fintech applications, and online marketplaces all face sophisticated threats.

The Top 10 Breakdown:

1. Broken Access Control: Users can access data or functionality they shouldn't. Implement proper authorization checks on every request.

2. Cryptographic Failures: Sensitive data exposed through weak encryption. Always encrypt data in transit and at rest.

3. Injection: SQL, NoSQL, and command injection attacks. Use parameterized queries and input validation.

4. Insecure Design: Security flaws in the application's architecture. Include threat modeling in your design process.

5. Security Misconfiguration: Default passwords, unnecessary features enabled. Harden all configurations.

6. Vulnerable Components: Using libraries with known vulnerabilities. Maintain an inventory and update regularly.

7. Authentication Failures: Weak password policies, lack of MFA. Implement strong authentication mechanisms.

Practical Application: For each project, create a security checklist based on OWASP Top 10. In my hands-on labs and bug bounty work through TryHackMe, practicing against these vulnerabilities in safe environments dramatically accelerates understanding. Review code for these vulnerabilities before every deployment.`
  },
  {
    id: 4,
    title: "The State of Cybersecurity in Malawi: Challenges and Opportunities",
    category: "Strategy",
    date: "2024-12-20",
    readTime: "12 min read",
    excerpt: "An in-depth look at Malawi's cybersecurity landscape — current threats, regulatory gaps, and the path forward for building digital resilience.",
    content: `Malawi, like many African nations, stands at a critical juncture in its digital transformation journey. As government services move online, mobile money adoption accelerates, and businesses embrace cloud technologies, the need for robust cybersecurity has never been more urgent.

Current Landscape: Malawi's cybersecurity ecosystem is still developing. While awareness is growing, significant gaps remain in technical capabilities, regulatory enforcement, and security expertise. Most organizations lack dedicated security personnel, and many rely on reactive rather than proactive security measures.

Key Challenges:

Limited Resources: Budget constraints mean cybersecurity often takes a backseat to other IT priorities. Organizations struggle to justify security investments until after an incident occurs.

Skills Gap: There's a severe shortage of trained cybersecurity professionals. Many IT teams lack specialized security training, leading to implementation of controls without full understanding of their purpose or limitations.

Regulatory Environment: While Malawi has enacted the Electronic Transactions and Cybersecurity Act, enforcement remains inconsistent. Many organizations are unaware of their compliance obligations.

Emerging Threats: Mobile money fraud, business email compromise, ransomware, and social engineering attacks are all rising. Attackers increasingly target African organizations, recognizing both their growing digital presence and potential security weaknesses.

Opportunities: Despite challenges, Malawi has significant opportunities to leapfrog traditional security approaches. Open-source security tools like Wazuh, ELK Stack, and Nagios provide enterprise-grade capabilities at minimal cost. Cloud-based security services can provide scalable protection without massive infrastructure investments. Growing youth interest in technology creates a pipeline for future security professionals.

The Path Forward: Building cybersecurity resilience requires a multi-stakeholder approach. Government must strengthen regulatory frameworks and lead by example in securing public services. Private sector should invest in security as a business enabler, not just a cost center. Academia needs to develop cybersecurity curricula aligned with industry needs.`
  },
  {
    id: 5,
    title: "PowerShell & Python for IT Automation: A Practical Start",
    category: "Technical",
    date: "2024-12-10",
    readTime: "9 min read",
    excerpt: "Automation doesn't require a developer background. Here's how IT professionals can use PowerShell and Python to eliminate repetitive tasks and reduce human error.",
    content: `One of the most impactful things I did during my time at the Malawi Revenue Authority was automate software deployment using PowerShell and Python scripts. What used to require manual intervention across 1,500+ endpoints became a consistent, auditable, and repeatable process. Here's how to get started.

Why Automate?

Manual processes introduce human error. In large environments, inconsistent software versions, missed patches, and configuration drift become serious security risks. Automation enforces a standard — every time.

Starting with PowerShell:

PowerShell is built into Windows and is perfect for Active Directory management, software deployment, and system configuration. A simple script can query all machines in an OU, push a software package, and log the result — work that would take hours manually.

Key use cases: User provisioning and deprovisioning, Group Policy enforcement checks, Software inventory and compliance reporting, Automated patch status reports.

Python for Cross-Platform Tasks:

Python's strength lies in flexibility. It can interact with APIs, parse logs, automate web tasks, and integrate with monitoring tools. In environments with mixed operating systems, Python scripts can run consistently across Windows, Linux, and macOS.

Key use cases: Log parsing and alerting, API integrations with ITSM tools, Network device configuration via Paramiko/Netmiko, Custom reporting dashboards.

Best Practices: Always test scripts in a non-production environment first. Use version control (Git) for all scripts. Log every action your script takes. Build in error handling — assume things will go wrong. Document what each script does and why.

Getting Started: Pick one repetitive task that takes you more than 30 minutes per week. Write a script to do it. Run it. Improve it. That's the automation mindset.`
  },
  {
    id: 6,
    title: "SIEM on a Budget: Deploying Wazuh and ELK Stack",
    category: "Technical",
    date: "2024-11-28",
    readTime: "7 min read",
    excerpt: "You don't need a six-figure budget for security monitoring. Wazuh and ELK Stack give you enterprise-grade SIEM capabilities for free. Here's how to set it up.",
    content: `Security Information and Event Management (SIEM) is often seen as something only large enterprises can afford. The reality? Open-source tools like Wazuh and the ELK Stack (Elasticsearch, Logstash, Kibana) give you powerful, production-ready SIEM capabilities at no licensing cost.

What is Wazuh? Wazuh is an open-source security platform that provides log analysis, intrusion detection, vulnerability detection, and compliance monitoring. It integrates natively with the ELK Stack for visualization.

What You Get: Centralized log collection from all agents, Real-time alerting on suspicious activity, File integrity monitoring, Vulnerability assessment, Compliance reporting (PCI-DSS, HIPAA, GDPR).

Basic Architecture: Wazuh Manager receives and analyzes logs from agents installed on endpoints. Elasticsearch stores all the data. Kibana provides the dashboards and visualization. Logstash can be added for advanced log parsing.

Setup Steps:

1. Install Wazuh Manager on a Linux server (Ubuntu or CentOS recommended).
2. Deploy Wazuh agents on endpoints you want to monitor.
3. Install Elasticsearch and Kibana.
4. Connect Wazuh to Elasticsearch using the Wazuh app for Kibana.
5. Configure alert rules based on your environment's needs.

In my home lab, I used this stack to simulate enterprise-grade intrusion detection, correlating logs from Active Directory, Linux servers, and network devices. The experience directly informed how I approach security monitoring in real environments.

Common Pitfalls: Disk space fills up fast — configure index rotation early. Tune alert thresholds to reduce noise before you go live. Start with a small number of agents and expand.

Bottom Line: If you're serious about cybersecurity and don't have a SIEM budget, there's no excuse not to have Wazuh running. The learning curve pays for itself many times over.`
  },
  {
    id: 7,
    title: "Building an Incident Response Plan for Small Organizations",
    category: "Strategy",
    date: "2024-11-15",
    readTime: "11 min read",
    excerpt: "You don't need a massive security team to respond effectively to incidents. Here's how small organizations can prepare for and respond to security events.",
    content: `Every organization will eventually face a security incident. The question isn't if, but when. Organizations without incident response plans face longer recovery times, higher costs, and greater damage to reputation and operations.

Why Small Organizations Need IR Plans: Many small organizations assume incident response is only for large enterprises. This is dangerous thinking. Cyberattacks increasingly target small organizations precisely because they're less prepared.

Core Components:

1. Preparation: Identify your critical assets and data. Understand your normal network baseline so you can recognize abnormalities. Ensure regular backups and test restoration procedures.

2. Detection and Analysis: Deploy basic monitoring tools. Train staff to recognize and report suspicious activity. Establish a security incident reporting mechanism that's simple and accessible.

3. Containment: When an incident occurs, your first priority is stopping it from spreading. This might mean disconnecting affected systems, disabling compromised accounts, or blocking malicious IP addresses.

4. Eradication: Once contained, remove the threat. This could involve removing malware, closing vulnerabilities, or rebuilding compromised systems from clean backups.

5. Recovery: Restore systems to normal operations carefully. Monitor closely for signs of persistence.

6. Lessons Learned: After every incident, conduct a post-mortem. What happened? How did it happen? What worked well? Update your IR plan accordingly.

Tabletop Exercises: The best way to test your IR plan is through tabletop exercises. Walk through realistic scenarios: What would you do if ransomware encrypted your file server? If customer data was leaked? These exercises reveal gaps without the pressure of a real incident.

Essential Tools: Free options exist for most IR needs — network capture and analysis, disk imaging, malware analysis, and secure communication. Open-source tools handle the vast majority of small organization needs.

Conclusion: An incident response plan is insurance you hope never to use but are grateful to have when needed. Start simple, practice regularly, and improve continuously.`
  }
];

const projects = [
  {
    title: "PowerShell & Python Deployment Automation",
    organization: "Malawi Revenue Authority (MRA)",
    description: "Developed and deployed automation scripts in PowerShell and Python to standardise software deployment across 1,500+ endpoints, eliminating manual intervention and reducing human error. Scripts enforced consistent configurations and generated audit logs for compliance.",
    technologies: ["PowerShell", "Python", "Active Directory", "Windows Server"],
    outcomes: [
      "Eliminated manual deployment errors across large staff base",
      "Improved update compliance and configuration consistency",
      "Reduced time-to-deploy for software updates significantly"
    ]
  },
  {
    title: "Nagios Core Network & Printer Monitoring",
    organization: "Malawi Revenue Authority (MRA)",
    description: "Implemented Nagios Core to monitor network devices and printers across MRA infrastructure. Configured SNMP-based checks, alert thresholds, and notification workflows to enable proactive fault detection before users were impacted.",
    technologies: ["Nagios Core", "SNMP", "Linux", "Network Management"],
    outcomes: [
      "Enabled proactive issue detection before user-reported failures",
      "Reduced unplanned downtime across monitored infrastructure",
      "Provided visibility into printer and device health organisation-wide"
    ]
  },
  {
    title: "ManageEngine ServiceDesk Plus Administration",
    organization: "Malawi Revenue Authority (MRA)",
    description: "Administered and optimised ManageEngine ServiceDesk Plus for ICT support delivery to 1,500+ staff. Configured ticketing workflows, SLA rules, and escalation paths aligned with ITIL v4 principles to improve responsiveness and service quality.",
    technologies: ["ManageEngine ServiceDesk Plus", "ITIL v4", "SLA Management", "Process Design"],
    outcomes: [
      "Improved SLA compliance across the ICT division",
      "Streamlined incident and service request workflows",
      "Enhanced visibility into ICT support performance"
    ]
  },
  {
    title: "SIEM Deployment — Wazuh & ELK Stack",
    organization: "Home Lab / Personal Project",
    description: "Configured Wazuh and ELK Stack (Elasticsearch, Logstash, Kibana) for centralised log analysis and intrusion detection. Simulated enterprise security monitoring including file integrity monitoring, alert tuning, and dashboard creation.",
    technologies: ["Wazuh", "Elasticsearch", "Kibana", "Logstash", "Linux"],
    outcomes: [
      "Built hands-on SIEM capability applicable to real environments",
      "Practiced log correlation and intrusion detection rule tuning",
      "Demonstrated open-source enterprise security monitoring"
    ]
  },
  {
    title: "Active Directory Home Lab",
    organization: "Personal Project",
    description: "Built an Active Directory lab environment simulating enterprise user provisioning, Group Policy Objects (GPO), and security policy enforcement. Used to practice identity management, least-privilege access controls, and domain hardening.",
    technologies: ["Active Directory", "Windows Server", "Group Policy", "PowerShell"],
    outcomes: [
      "Hands-on experience with enterprise identity and access management",
      "Practiced GPO design and security policy enforcement",
      "Simulated real-world user provisioning and deprovisioning workflows"
    ]
  },
  {
    title: "ATM Deployment & Operations Management",
    organization: "Gestetner (Ricotec) / G4S Malawi",
    description: "Oversaw deployment and maintenance of NCR ATMs, CDMs, and NCMs across banking clients. Managed cash replenishment scheduling, reconciliation, SLA compliance, and liaison with banks and service partners to ensure reliable financial infrastructure.",
    technologies: ["NCR ATM Systems", "Operational Risk Management", "SLA Management", "Cash Reconciliation"],
    outcomes: [
      "Maintained reliable ATM service delivery across multiple banking clients",
      "Ensured SLA compliance and financial accuracy through reconciliation",
      "Coordinated cross-functional teams including custodians, banks, and service partners"
    ]
  }
];

const resources = [
  {
    title: "Password Security Checklist",
    items: [
      "Use minimum 12 characters with mixed complexity",
      "Never reuse passwords across services",
      "Enable multi-factor authentication everywhere possible",
      "Use a password manager for strong, unique passwords",
      "Change passwords immediately after suspected compromise",
      "Avoid personal information in passwords"
    ]
  },
  {
    title: "Phishing Prevention Guide",
    items: [
      "Verify sender email addresses carefully",
      "Hover over links before clicking to check destination",
      "Be suspicious of urgent requests for credentials or payments",
      "Look for spelling and grammar errors",
      "Verify requests through alternative channels",
      "Report suspicious emails to your IT team"
    ]
  },
  {
    title: "Basic SOC Setup Essentials",
    items: [
      "Centralised logging from all critical systems",
      "SIEM tool for correlation and analysis (e.g. Wazuh + ELK)",
      "Defined incident response procedures",
      "24/7 monitoring capability or managed service",
      "Regular threat intelligence updates",
      "Clear escalation paths and communication protocols"
    ]
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  const filteredPosts = selectedCategory === 'All' ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Blog', id: 'blog' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' }
  ];

  const renderPage = () => {
    if (selectedPost) {
      return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} darkMode={darkMode} />;
    }
    switch(currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} darkMode={darkMode} />;
      case 'about': return <About darkMode={darkMode} />;
      case 'blog': return <Blog posts={filteredPosts} categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} onSelectPost={setSelectedPost} darkMode={darkMode} />;
      case 'projects': return <Projects darkMode={darkMode} />;
      case 'resources': return <Resources darkMode={darkMode} />;
      case 'contact': return <Contact darkMode={darkMode} />;
      default: return <Home setCurrentPage={setCurrentPage} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <header className={`sticky top-0 z-50 border-b transition-colors ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}>
              <Shield className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>Peter Chimbuto</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => { setCurrentPage(item.id); setSelectedPost(null); }}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.id && !selectedPost
                      ? darkMode ? 'text-blue-400' : 'text-blue-600'
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => { setCurrentPage(item.id); setSelectedPost(null); setMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === item.id && !selectedPost
                      ? darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'
                      : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main>{renderPage()}</main>

      <footer className={`border-t mt-20 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Peter Chimbuto. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:chimbutopeterk@gmail.com" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/peter-chimbuto" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BlogCard({ post, onClick, darkMode }) {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-lg cursor-pointer transition-all hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white hover:shadow-lg border border-gray-200'}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
          {post.category}
        </span>
        <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{post.readTime}</span>
      </div>
      <h3 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{post.title}</h3>
      <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{post.date}</span>
        <ChevronRight className={`h-4 w-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
      </div>
    </div>
  );
}

function BlogPost({ post, onBack, darkMode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <button
        onClick={onBack}
        className={`flex items-center space-x-2 mb-8 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
      >
        <ChevronRight className="h-5 w-5 rotate-180" />
        <span>Back to Blog</span>
      </button>
      <div className="mb-6">
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
          {post.category}
        </span>
      </div>
      <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{post.title}</h1>
      <div className={`flex items-center space-x-4 mb-8 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <div className="prose max-w-none">
        {post.content.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function Home({ setCurrentPage, darkMode }) {
  return (
    <div>
      <section className={`py-20 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-white to-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Cybersecurity, ICT Infrastructure & Digital Resilience
            </h1>
            <p className={`text-lg md:text-xl mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              ICT professional based in Malawi with hands-on experience in cybersecurity, infrastructure deployment, IT service management, and ATM operations. Passionate about building secure, reliable systems and contributing to Malawi's growing digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('blog')}
                className="px-6 py-3 rounded-lg font-medium transition-all bg-blue-600 hover:bg-blue-700 text-white"
              >
                Read Blog
              </button>
              <button
                onClick={() => setCurrentPage('projects')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${darkMode ? 'border border-gray-700 hover:bg-gray-800 text-white' : 'border border-gray-300 hover:bg-gray-50 text-gray-700'}`}
              >
                View Projects
              </button>
              <a
                href="https://linkedin.com/in/peter-chimbuto"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${darkMode ? 'border border-gray-700 hover:bg-gray-800 text-white' : 'border border-gray-300 hover:bg-gray-50 text-gray-700'}`}
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: 'Cybersecurity', desc: 'Penetration testing, SIEM deployment, vulnerability assessment, and OWASP Top 10 practice' },
            { icon: Terminal, title: 'Automation', desc: 'PowerShell & Python scripting for software deployment, monitoring, and process automation' },
            { icon: Network, title: 'Infrastructure', desc: 'Network design, Nagios monitoring, Active Directory, and ICT infrastructure deployment' },
            { icon: Target, title: 'IT Service Mgmt', desc: 'ITIL v4 — incident management, ServiceDesk administration, and SLA compliance' }
          ].map((item, idx) => (
            <div key={idx} className={`p-6 rounded-lg transition-all hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white hover:shadow-lg border border-gray-200'}`}>
              <item.icon className={`h-10 w-10 mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education & Certifications</h2>
          <button
            onClick={() => setCurrentPage('about')}
            className={`flex items-center space-x-2 font-medium transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            <span>View About</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'BSc Computer Systems & Security', sub: 'Malawi University of Science and Technology (MUST)', badge: 'Degree', badgeColor: darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700' },
            { label: 'Certified Network Security Practitioner (CNSP)', sub: 'The SecOps Group', badge: 'Certified', badgeColor: darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700' },
            { label: 'Certified Social Engineering Defence Practitioner (CSEDP)', sub: 'The SecOps Group', badge: 'Certified', badgeColor: darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700' },
            { label: 'CompTIA Security+', sub: 'CompTIA', badge: 'In Progress', badgeColor: darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-700' }
          ].map((item, idx) => (
            <div key={idx} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${item.badgeColor}`}>{item.badge}</span>
              <h3 className={`font-semibold text-lg mt-3 mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Latest Insights</h2>
            <button
              onClick={() => setCurrentPage('blog')}
              className={`flex items-center space-x-2 font-medium transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
            >
              <span>View All</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map(post => (
              <BlogCard key={post.id} post={post} onClick={() => setCurrentPage('blog')} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function About({ darkMode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h1>

      {/* Bio */}
      <div className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50 border border-blue-100'}`}>
        <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          I'm Peter Chimbuto — an ICT professional from Malawi with a background spanning cybersecurity, infrastructure deployment, IT service management, and ATM operations. I started my career in hands-on technical support and have worked across government, financial services, and private sector environments. Along the way, I've become increasingly focused on security — not just as a discipline, but as something that underpins whether technology actually works for people.
        </p>
      </div>

      {/* Mission */}
      <div className={`mb-12 p-6 rounded-lg border-l-4 ${darkMode ? 'bg-gray-900 border-blue-400' : 'bg-white border-blue-600 shadow-sm'}`}>
        <h2 className={`text-sm font-semibold uppercase tracking-widest mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>What Drives Me</h2>
        <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          I want to see technology in Malawi work reliably and securely for the people who depend on it — whether that's a government official processing tax records, a customer using an ATM, or a small business owner managing payments. That means building systems that don't fail, writing policies that get followed, and making security something organisations actually practice, not just talk about. I'm driven by both — making things work, and making them safe.
        </p>
      </div>

      {/* Professional Journey */}
      <h2 className={`text-2xl font-bold mt-12 mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Professional Journey</h2>
      <div className="space-y-6 mb-12">
        {[
          {
            title: 'ICT Support — Malawi Revenue Authority',
            text: 'As ICT Support Officer at MRA, I provided technical support to over 1,500 staff, administered ManageEngine ServiceDesk Plus, and applied ITIL v4 practices to improve service quality. I developed automation scripts in PowerShell and Python to standardise software deployment, and implemented Nagios Core for network and printer monitoring.'
          },
          {
            title: 'ATM Coordinator — Gestetner (Ricotec)',
            text: 'I oversaw the deployment and maintenance of NCR ATMs, CDMs, and NCMs for banking clients across Malawi, providing technical and operational support, ensuring SLA compliance, and facilitating communication between banks and service teams.'
          },
          {
            title: 'ATM Operations Management — G4S Malawi',
            text: 'Currently supervising regional ATM management operations at G4S, I lead a team of ATM custodians, coordinate cash replenishment schedules, oversee reconciliation, and liaise with banks and service partners to ensure consistent, compliant service delivery.'
          },
          {
            title: 'Cybersecurity — Hands-On & Growing',
            text: 'Alongside professional experience, I actively build cybersecurity skills through home lab projects including SIEM deployment with Wazuh and ELK Stack, Active Directory simulation, vulnerability assessment using Nessus, OWASP Top 10 labs, and bug bounty threat hunting on TryHackMe. I hold the Certified Network Security Practitioner (CNSP) certification and am pursuing CompTIA Security+.'
          }
        ].map((item, idx) => (
          <div key={idx} className={`p-6 rounded-lg border-l-4 ${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-600'}`}>
            <h3 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{item.title}</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Education & Certifications */}
      <h2 className={`text-2xl font-bold mt-12 mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education & Certifications</h2>
      <div className="space-y-4 mb-12">
        {[
          {
            title: 'BSc in Computer Systems and Security',
            institution: 'Malawi University of Science and Technology (MUST)',
            badge: 'Degree',
            badgeColor: darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
          },
          {
            title: 'Certified Network Security Practitioner (CNSP)',
            institution: 'The SecOps Group',
            badge: 'Certified',
            badgeColor: darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'
          },
          {
            title: 'Certified Social Engineering Defence Practitioner (CSEDP)',
            institution: 'The SecOps Group',
            badge: 'Certified',
            badgeColor: darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'
          },
          {
            title: 'CompTIA Security+',
            institution: 'CompTIA',
            badge: 'In Progress',
            badgeColor: darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-700'
          }
        ].map((item, idx) => (
          <div key={idx} className={`flex items-center justify-between p-5 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
            <div>
              <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
              <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.institution}</p>
            </div>
            <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ml-4 ${item.badgeColor}`}>{item.badge}</span>
          </div>
        ))}
      </div>

      {/* Core Competencies */}
      <h2 className={`text-2xl font-bold mt-12 mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Core Competencies</h2>
      <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {[
          'Cybersecurity: Penetration testing, SIEM, vulnerability assessment, OWASP Top 10, ethical hacking',
          'Automation: PowerShell & Python scripting for deployment, monitoring, and process automation',
          'Infrastructure: Network design, VLANs, routing, ACLs, Nagios Core, server and storage systems',
          'IT Service Management: ITIL v4, ManageEngine ServiceDesk Plus, incident and SLA management',
          'Identity & Access: Active Directory, Group Policy, user provisioning, system hardening',
          'ATM Operations: NCR ATM systems, cash reconciliation, SLA compliance, operational risk management'
        ].map((item, idx) => (
          <li key={idx} className="flex items-start">
            <ChevronRight className={`h-6 w-6 mr-2 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span><strong>{item.split(':')[0]}:</strong>{item.split(':')[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Blog({ posts, categories, selectedCategory, setSelectedCategory, onSelectPost, darkMode }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Blog & Insights</h1>
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} onClick={() => onSelectPost(post)} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}

function Projects({ darkMode }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Projects & Experience</h1>
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div key={idx} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{project.organization}</p>
              </div>
              <Briefcase className={`h-6 w-6 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            </div>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
            <div className="mb-4">
              <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Technologies & Methods:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Key Outcomes:</h4>
              <ul className="space-y-1">
                {project.outcomes.map((outcome, i) => (
                  <li key={i} className={`flex items-start text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <ChevronRight className={`h-4 w-4 mr-2 mt-0.5 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Resources({ darkMode }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Security Resources</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, idx) => (
          <div key={idx} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{resource.title}</h3>
            <ul className="space-y-3">
              {resource.items.map((item, i) => (
                <li key={i} className={`flex items-start text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <ChevronRight className={`h-4 w-4 mr-2 mt-0.5 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Open to ICT and cybersecurity opportunities, collaborations, or consultations. Feel free to reach out through any of the channels below.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:chimbutopeterk@gmail.com"
              className={`flex items-center space-x-3 p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              <Mail className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>chimbutopeterk@gmail.com</div>
              </div>
            </a>
            <a
              href="tel:+265882233099"
              className={`flex items-center space-x-3 p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              <Shield className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>+265 882 23 30 99 / +265 991 75 07 95</div>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/peter-chimbuto"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-3 p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              <Linkedin className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>linkedin.com/in/peter-chimbuto</div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-4 py-2 rounded-lg border transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-4 py-2 rounded-lg border transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full px-4 py-2 rounded-lg border transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-medium transition-all bg-blue-600 hover:bg-blue-700 text-white"
            >
              Send Message
            </button>
            {submitted && (
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-50 text-green-700'}`}>
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
