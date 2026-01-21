import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Shield, Cloud, Network, Target, Mail, Linkedin, ChevronRight, Briefcase } from 'lucide-react';

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
    excerpt: "ATMs remain critical infrastructure. Drawing from years in ATM operations, here are the key security considerations for protecting these vital financial endpoints.",
    content: `Automated Teller Machines represent a unique intersection of physical and cyber security. Having managed ATM operations and security, I've learned that protecting these devices requires a holistic approach.

The ATM Threat Landscape: ATMs face diverse threats: card skimming, jackpotting attacks, physical theft, network interception, and malware. Each requires different defensive strategies.

Physical Security:

Tamper Detection: Modern ATMs must include sensors that detect physical manipulation. Anti-skimming devices, camera inspection before transactions, and regular physical inspections are essential.

Secure Locations: ATM placement matters. Well-lit, monitored locations with good visibility reduce both physical attacks and customer safety concerns.

Network Security:

Encryption: All ATM communications must use strong encryption. Point-to-point encryption protects cardholder data from interception.

Network Segmentation: ATMs should operate on isolated network segments, preventing lateral movement if one device is compromised.

Regular Updates: Keep ATM software and security patches current. Many ATM compromises exploit known vulnerabilities in outdated systems.

Monitoring and Response: Implement 24/7 monitoring of ATM networks. Anomaly detection can identify suspicious activity before significant losses occur.`
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

Practical Application: For each project, create a security checklist based on OWASP Top 10. Review code for these vulnerabilities before deployment.`
  },
  {
    id: 4,
    title: "The State of Cybersecurity in Malawi: Challenges and Opportunities",
    category: "Strategy",
    date: "2024-12-20",
    readTime: "12 min read",
    excerpt: "An in-depth analysis of Malawi's cybersecurity landscape, examining current threats, regulatory frameworks, and the path forward for building digital resilience.",
    content: `Malawi, like many African nations, stands at a critical juncture in its digital transformation journey. As government services move online, mobile money adoption accelerates, and businesses embrace cloud technologies, the need for robust cybersecurity has never been more urgent.

Current Landscape: Malawi's cybersecurity ecosystem is still developing. While awareness is growing, significant gaps remain in technical capabilities, regulatory enforcement, and security expertise. Most organizations lack dedicated security personnel, and many rely on reactive rather than proactive security measures.

Key Challenges:

Limited Resources: Budget constraints mean cybersecurity often takes a backseat to other IT priorities. Organizations struggle to justify security investments until after an incident occurs.

Skills Gap: There's a severe shortage of trained cybersecurity professionals. Many IT teams lack specialized security training, leading to implementation of controls without full understanding of their purpose or limitations.

Regulatory Environment: While Malawi has enacted the Electronic Transactions and Cybersecurity Act, enforcement remains inconsistent. Many organizations are unaware of their compliance obligations.

Infrastructure Limitations: Unreliable power and internet connectivity complicate security implementations. Traditional security models designed for stable infrastructure don't always translate well.

Emerging Threats: Mobile money fraud, business email compromise, ransomware, and social engineering attacks are all rising. Attackers increasingly target African organizations, recognizing both their growing digital presence and potential security weaknesses.

Opportunities: Despite challenges, Malawi has significant opportunities to leapfrog traditional security approaches. Cloud-based security services can provide enterprise-grade protection without massive infrastructure investments. Regional collaboration through organizations like SADC can share threat intelligence and best practices. Growing youth interest in technology creates a pipeline for future security professionals.

The Path Forward: Building cybersecurity resilience requires a multi-stakeholder approach. Government must strengthen regulatory frameworks and lead by example in securing public services. Private sector should invest in security as business enabler, not just cost center. Academia needs to develop cybersecurity curricula aligned with industry needs. Civil society can drive awareness and digital literacy.

Conclusion: Malawi's digital future depends on addressing cybersecurity challenges today. The opportunities are immense, but realizing them requires sustained commitment, investment, and collaboration across all sectors.`
  },
  {
    id: 5,
    title: "Implementing Zero Trust Architecture in Resource-Constrained Environments",
    category: "Technical",
    date: "2024-12-10",
    readTime: "9 min read",
    excerpt: "Zero Trust sounds great in theory, but how do you implement it with limited budgets and infrastructure? A practical guide for African organizations.",
    content: `Zero Trust Architecture has become the security industry's rallying cry: never trust, always verify. But for organizations operating with limited resources, the concept can seem impossibly complex and expensive to implement.

Understanding Zero Trust: At its core, Zero Trust is simple: assume breach, verify explicitly, and grant least-privilege access. You don't need expensive tools to embrace these principles. Start with what you have and build incrementally.

Practical Implementation Steps:

1. Inventory and Classify: You can't protect what you don't know about. Create a comprehensive inventory of all systems, applications, and data. Classify by sensitivity and business criticality. This costs nothing but time.

2. Network Segmentation: Use existing firewall capabilities to segment your network. Separate user workstations, servers, IoT devices, and guest networks. Even basic segmentation dramatically reduces attack surface.

3. Strong Authentication: Implement multi-factor authentication for all critical systems. Many free or low-cost MFA solutions exist. Start with admin accounts and expand from there.

4. Least Privilege Access: Review and revoke unnecessary permissions. Users should have only the access needed for their roles. Document who needs what and why.

5. Logging and Monitoring: Enable logging on all critical systems. Free SIEM tools can aggregate and analyze logs. The goal is visibility into what's happening on your network.

6. Endpoint Security: Ensure all devices have updated antivirus and are patched regularly. Use Group Policy or mobile device management to enforce security configurations.

Common Pitfalls: Don't try to implement everything at once. Zero Trust is a journey, not a destination. Start with highest-risk areas and expand gradually. Don't let perfect be the enemy of good enough. Don't assume Zero Trust eliminates need for other controls. It complements, not replaces, traditional security measures.

Resource-Friendly Tools: Many vendors offer free tiers or nonprofit pricing for security tools. Open-source solutions like pfSense, Wazuh, and OSSEC provide enterprise capabilities at minimal cost. Cloud providers include security features in their base offerings.

Cultural Change: Zero Trust requires shifting mindsets as much as implementing technology. Security becomes everyone's responsibility, not just IT's problem. Trust is replaced by verification. Convenience sometimes yields to security.

Conclusion: Zero Trust is achievable even with constrained resources. Focus on principles over products, progress over perfection, and building security into everything you do.`
  },
  {
    id: 6,
    title: "Mobile Money Security: Protecting Africa's Digital Payment Revolution",
    category: "Awareness",
    date: "2024-11-28",
    readTime: "7 min read",
    excerpt: "Mobile money has transformed financial inclusion across Africa, but it's also created new security challenges. Here's how to stay safe while embracing digital payments.",
    content: `Mobile money has revolutionized financial services across Africa, bringing banking to millions who lacked access to traditional financial institutions. In Malawi, mobile money transactions now exceed traditional banking for many citizens. But this digital transformation brings new security risks.

Common Mobile Money Threats:

SIM Swap Fraud: Attackers convince mobile operators to transfer your number to a new SIM card they control, gaining access to your mobile money account. Always use additional PINs and alerts.

Social Engineering: Fraudsters pose as mobile money agents, customer service, or even government officials to trick users into revealing PINs or making fraudulent transfers.

Agent Fraud: Unscrupulous agents may overcharge, provide incorrect exchange rates, or engage in more sophisticated fraud schemes.

Malware: Mobile malware can intercept one-time passwords, steal credentials, or initiate unauthorized transactions.

Protection Strategies:

Secure Your PIN: Never share your PIN with anyone, including people claiming to be from the mobile money provider. Choose a PIN unrelated to birth dates or easily guessable numbers.

Verify Before Transacting: Always confirm you're sending money to the correct recipient. Double-check phone numbers before confirming transactions.

Use Official Channels: Only download mobile money apps from official app stores. Be wary of links sent via SMS or WhatsApp.

Monitor Your Account: Regularly check your transaction history. Report suspicious activity immediately to your provider.

Register for Alerts: Enable SMS or app notifications for all transactions. This provides immediate awareness of any unauthorized activity.

Protect Your Phone: Use screen locks, install security updates, and avoid jailbreaking or rooting your device.

Be Skeptical: If an offer seems too good to be true, it probably is. Fraudsters often promise lottery winnings, government grants, or investment opportunities requiring immediate payment.

For Businesses: If your business accepts mobile money, implement proper reconciliation procedures. Train staff to recognize fraud attempts. Use business accounts rather than personal numbers. Maintain audit trails of all transactions.

The Role of Providers: Mobile money providers must invest in robust security, user education, and fraud detection. Two-factor authentication, transaction limits, and behavioral analytics can prevent most fraud.

Conclusion: Mobile money's benefits far outweigh the risks, but users must stay vigilant. Security is a shared responsibility between providers, regulators, and users. By following basic security practices, we can enjoy convenient digital payments while minimizing fraud risk.`
  },
  {
    id: 7,
    title: "Building an Incident Response Plan for Small Organizations",
    category: "Strategy",
    date: "2024-11-15",
    readTime: "11 min read",
    excerpt: "You don't need a massive security team to respond effectively to incidents. Here's how small organizations can prepare for and respond to security events.",
    content: `Every organization will eventually face a security incident. The question isn't if, but when. Organizations without incident response plans face longer recovery times, higher costs, and greater damage to reputation and operations.

Why Small Organizations Need IR Plans: Many small organizations assume incident response is only for large enterprises. This is dangerous thinking. Cyberattacks increasingly target small organizations precisely because they're less prepared. A good incident response plan doesn't require huge resources—just clear thinking and preparation.

Core Components:

1. Preparation: Identify your critical assets and data. Understand your normal network baseline so you can recognize abnormalities. Establish relationships with external resources you might need (IT forensics, legal counsel, law enforcement). Ensure regular backups and test restoration procedures.

2. Detection and Analysis: How will you know if an incident occurs? Deploy basic monitoring tools. Train staff to recognize and report suspicious activity. Establish a security incident reporting mechanism that's simple and accessible.

3. Containment: When an incident occurs, your first priority is stopping it from spreading. This might mean disconnecting affected systems, disabling compromised accounts, or blocking malicious IP addresses. Have containment procedures documented in advance.

4. Eradication: Once contained, remove the threat. This could involve removing malware, closing vulnerabilities, or rebuilding compromised systems from clean backups.

5. Recovery: Restore systems to normal operations. This should be done carefully to ensure the threat is truly eliminated. Monitor closely for signs of persistence.

6. Lessons Learned: After every incident, conduct a post-mortem. What happened? How did it happen? What worked well? What could improve? Update your IR plan based on lessons learned.

Building Your Team: Even small organizations can have effective IR teams. Designate roles and responsibilities in advance. You don't need full-time security staff—just clear assignments for who does what during an incident. Typical roles include: Incident Commander (coordinates response), Technical Lead (handles technical investigation and containment), Communications Lead (manages internal/external communications), Legal/Compliance (handles regulatory requirements).

Tabletop Exercises: The best way to test your IR plan is through tabletop exercises. Gather your team and walk through realistic scenarios. What would you do if ransomware encrypted your file server? If customer data was leaked? If your website was defaced? These exercises reveal gaps in your plan without the pressure of a real incident.

Essential Tools: You don't need expensive tools. Free or low-cost options for most IR needs exist. Have tools ready for: Network capture and analysis, Disk imaging and forensics, Malware analysis, Secure communication, Documentation and evidence preservation.

Communication Templates: Prepare communication templates in advance for: Internal notifications, Customer notifications, Regulatory reporting, Media statements, Law enforcement reports. During a crisis, having templates saves precious time and ensures you don't forget critical information.

Legal and Regulatory Considerations: Understand your notification obligations. Many jurisdictions require reporting data breaches within specific timeframes. Know what triggers these requirements and how to comply. Consider cyber insurance to help cover incident costs.

Common Mistakes: Don't keep IR plans as documents that nobody reads. Regularly review and practice. Don't assume incidents won't happen to you. Don't delay detection by failing to monitor systems. Don't handle incidents solo—get help when needed.

Conclusion: An incident response plan is insurance you hope never to use but are grateful to have when needed. Start simple, practice regularly, and improve continuously. Your future self will thank you.`
  }
];

const projects = [
  {
    title: "ICT Strategic Plan Development",
    organization: "Malawi Revenue Authority",
    description: "Led development of comprehensive 5-year ICT strategic plan aligned with organizational objectives and regional best practices.",
    technologies: ["Strategic Planning", "ITIL", "Enterprise Architecture", "Stakeholder Management"],
    outcomes: ["Aligned IT with business goals", "Improved service delivery framework", "Enhanced digital transformation roadmap"]
  },
  {
    title: "Enterprise ServiceDesk Implementation",
    organization: "Financial Institution",
    description: "Designed and implemented ITIL-aligned ServiceDesk system, improving incident management and service quality.",
    technologies: ["ITIL", "ServiceNow", "Process Design", "Change Management"],
    outcomes: ["40% reduction in resolution time", "Improved SLA compliance", "Enhanced user satisfaction"]
  },
  {
    title: "Network Monitoring with Nagios",
    organization: "Multi-site Organization",
    description: "Deployed comprehensive network monitoring solution across distributed infrastructure, enabling proactive issue detection.",
    technologies: ["Nagios", "Linux", "SNMP", "Network Management"],
    outcomes: ["99.8% uptime achievement", "Proactive issue resolution", "Reduced downtime costs"]
  },
  {
    title: "ATM Security & Operations Program",
    organization: "Banking Sector",
    description: "Managed ATM operations and security program, implementing physical and cyber security controls for critical financial infrastructure.",
    technologies: ["ATM Security", "Network Security", "Physical Security", "Incident Response"],
    outcomes: ["Zero major security incidents", "Improved availability", "Enhanced fraud detection"]
  },
  {
    title: "Cybersecurity Awareness Program",
    organization: "Multiple Organizations",
    description: "Developed and delivered cybersecurity awareness training programs tailored to African organizational contexts.",
    technologies: ["Security Awareness", "Training Development", "Phishing Simulations", "Culture Change"],
    outcomes: ["75% reduction in phishing susceptibility", "Improved security culture", "Better incident reporting"]
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
      "Centralized logging from all critical systems",
      "SIEM tool for correlation and analysis",
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
              Cybersecurity, ICT Strategy & Digital Resilience in Africa
            </h1>
            <p className={`text-lg md:text-xl mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Building secure, resilient digital systems across Africa. Specializing in cybersecurity, ATM operations, IT service management, and strategic ICT planning with over a decade of experience in financial services and public sector technology.
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
                View Experience
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
            { icon: Shield, title: 'Cybersecurity', desc: 'Security strategy, awareness training, and risk management' },
            { icon: Cloud, title: 'ATM Operations', desc: 'Financial infrastructure security and operations management' },
            { icon: Network, title: 'IT Service Mgmt', desc: 'ITIL-aligned service delivery and process optimization' },
            { icon: Target, title: 'ICT Strategy', desc: 'Digital transformation and enterprise architecture planning' }
          ].map((item, idx) => (
            <div key={idx} className={`p-6 rounded-lg transition-all hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white hover:shadow-lg border border-gray-200'}`}>
              <item.icon className={`h-10 w-10 mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
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
      <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Peter Chimbuto</h1>
      
      <div className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50 border border-blue-100'}`}>
        <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Cybersecurity professional and ICT strategist based in Malawi, dedicated to building secure, resilient digital infrastructure across Africa. With over a decade of experience spanning financial services, public sector technology, and enterprise IT management.
        </p>
      </div>

      <h2 className={`text-2xl font-bold mt-12 mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Professional Journey</h2>
      
      <div className="space-y-6 mb-12">
        {[
          { title: 'ICT Foundation', text: 'My career began in traditional ICT roles, where I developed deep technical expertise in network infrastructure, systems administration, and enterprise IT operations.' },
          { title: 'ATM Operations & Security', text: 'Transitioning into ATM operations management, I gained unique insights into the intersection of physical and cyber security.' },
          { title: 'Cybersecurity Specialization', text: 'Recognizing the growing threat landscape, I pivoted to cybersecurity, focusing on security awareness, risk management, and building security-conscious organizational cultures.' },
          { title: 'Strategic ICT Leadership', text: 'My current focus combines technical expertise with strategic thinking, working with organizations on ICT strategic planning and digital transformation.' }
        ].map((item, idx) => (
          <div key={idx} className={`p-6 rounded-lg border-l-4 ${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-600'}`}>
            <h3 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{item.title}</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item.text}</p>
          </div>
        ))}
      </div>

      <h2 className={`text-2xl font-bold mt-12 mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Vision & Mission</h2>
      <p className={`mb-6 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        I believe Africa's digital future depends on building security into our systems from the ground up. My mission is to help African organizations build secure, resilient digital systems that enable economic growth and protect citizen data.
      </p>

      <h2 className={`text-2xl font-bold mt-12 mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Expertise Areas</h2>
      <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {[
          'Cybersecurity: Risk assessment, security awareness training, incident response',
          'ATM Security: Physical and cyber security for financial infrastructure',
          'IT Service Management: ITIL implementation, ServiceDesk design',
          'ICT Strategy: Strategic planning, digital transformation'
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
            Interested in consulting, speaking engagements, or collaboration? Feel free to reach out through any of the channels below.
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
              href="https://linkedin.com/in/peter-chimbuto"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-3 p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              <Linkedin className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Connect professionally</div>
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