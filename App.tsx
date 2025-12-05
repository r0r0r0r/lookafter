import React, { useState, useEffect, useRef } from 'react';
import TopNav from './components/TopNav';
import {
  ArrowUpRight,
  ArrowRight,
  Hexagon,
  Check,
  Terminal,
  Send,
  Layout,
  Dumbbell,
  Stethoscope,
  Wrench,
  Cpu,
  Activity,
  Download,
  Copy,
  Loader2,
  Mic,
  BrainCircuit,
  FileText,
  Code,
  Zap,
  ChevronDown,
  X,
  TrendingUp,
  AlertCircle,
  Linkedin,
  Twitter,
  Phone,
  Sun,
  Moon,
  MessageSquare,
  Star,
  GitBranch,
  ShieldCheck
} from 'lucide-react';

// ... (keep existing code until the return statement)

{/* --- HERO SECTION --- */ }
<section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden border-b border-black/10">
  <div className="max-w-7xl mx-auto w-full z-10">
    <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-xs font-medium text-green-400 tracking-wider">AVAILABLE FOR NEW PROJECTS</span>
    </div>

    <h1 className="text-[13vw] leading-[0.8] font-bold tracking-tighter mb-8 mix-blend-difference">
      REVENUE
      <br />
      <span className="text-zinc-500">ENGINEER</span>
    </h1>

    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-4xl">
      <p className="text-lg md:text-xl text-zinc-400 max-w-md leading-relaxed">
        I don't just write code. I build <span className="text-white font-medium">high-performance digital assets</span> that generate revenue, automate workflows, and scale your business.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => scrollTo('audit')}
          className="px-6 py-3 bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
        >
          Start Audit <ArrowRight className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollTo('work')}
          className="px-6 py-3 border border-zinc-800 hover:bg-zinc-900 transition-colors"
        >
          View Work
        </button>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-12 left-6 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
    <span className="text-[10px] uppercase tracking-widest">Scroll for Audit</span>
    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
  </div>

  {/* TICKER TAPE */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4 border-t border-black/10 bg-void/80 backdrop-blur-sm">
    <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="mx-4 md:mx-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-graphite/60 flex items-center gap-4">
          <Cpu size={14} /> Automating the Mundane <span className="text-acid">///</span> Scaling Revenue <span className="text-acid">///</span> Eliminating Error
        </span>
      ))}
    </div>
  </div>
  <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
</section>

{/* --- ABOUT SECTION --- */ }
<section id="about" className="py-12 md:py-24 px-6 border-b border-zinc-900">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
    <div className="relative group order-2 md:order-1">
      <div className="absolute -inset-4 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-700" />
      <div className="relative aspect-square md:aspect-[3/4] bg-zinc-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
        <img
          src="/final-profile-pic.jpg"
          alt="Ravi - Revenue Engineer"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 font-mono text-xs text-zinc-500">
                // CLASSIFIED_IDENTITY<br />
                // REVENUE_OPTIMIZER_V1
        </div>
      </div>
    </div>

    <div className="space-y-8 order-1 md:order-2">
      <h2 className="text-2xl md:text-3xl font-light leading-tight">
        Building the <span className="text-white font-medium">Digital Backbone</span> of your business.
      </h2>

      <div className="space-y-6 text-zinc-400 leading-relaxed">
        <p>
          Most developers build websites. I build <span className="text-white">revenue engines</span>.
        </p>
        <p>
          I combine <span className="text-white">High-End Frontend</span> design with <span className="text-white">Robust Backend</span> logic to create systems that don't just look good—they work.
        </p>
        <p>
          From replacing manual data entry with <span className="text-white">n8n Automation</span> to deploying <span className="text-white">AI Voice Receptionists</span> that handle calls 24/7, I engineer solutions that save time and make money.
        </p>
      </div>

      <div className="pt-8 border-t border-zinc-900">
        <div className="flex flex-wrap gap-2">
          {[
            "Full Stack Web", "n8n Automation", "AI Voice Agents",
            "Backend Systems", "HTML/CSS", "Java"
          ].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-zinc-900 text-xs text-zinc-400 border border-zinc-800">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

const countries = [
  { name: "United States", dial: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { name: "India", dial: "+91", flag: "🇮🇳" },
  { name: "Canada", dial: "+1", flag: "🇨🇦" },
  { name: "Australia", dial: "+61", flag: "🇦🇺" },
  { name: "Germany", dial: "+49", flag: "🇩🇪" },
  { name: "France", dial: "+33", flag: "🇫🇷" },
  { name: "Japan", dial: "+81", flag: "🇯🇵" },
  { name: "China", dial: "+86", flag: "🇨🇳" },
  { name: "Brazil", dial: "+55", flag: "🇧🇷" },
  { name: "Mexico", dial: "+52", flag: "🇲🇽" },
  { name: "Russia", dial: "+7", flag: "🇷🇺" },
  { name: "Italy", dial: "+39", flag: "🇮🇹" },
  { name: "Spain", dial: "+34", flag: "🇪🇸" },
  { name: "South Korea", dial: "+82", flag: "🇰🇷" },
  { name: "Indonesia", dial: "+62", flag: "🇮🇩" },
  { name: "Netherlands", dial: "+31", flag: "🇳🇱" },
  { name: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
  { name: "Turkey", dial: "+90", flag: "🇹🇷" },
  { name: "Switzerland", dial: "+41", flag: "🇨🇭" },
  { name: "Sweden", dial: "+46", flag: "🇸🇪" },
  { name: "Poland", dial: "+48", flag: "🇵🇱" },
  { name: "Belgium", dial: "+32", flag: "🇧🇪" },
  { name: "Norway", dial: "+47", flag: "🇳🇴" },
  { name: "Austria", dial: "+43", flag: "🇦🇹" },
  { name: "Denmark", dial: "+45", flag: "🇩🇰" },
  { name: "Finland", dial: "+358", flag: "🇫🇮" },
  { name: "Singapore", dial: "+65", flag: "🇸🇬" },
  { name: "New Zealand", dial: "+64", flag: "🇳🇿" },
  { name: "Ireland", dial: "+353", flag: "🇮🇪" },
  { name: "UAE", dial: "+971", flag: "🇦🇪" },
  { name: "South Africa", dial: "+27", flag: "🇿🇦" },
  { name: "Portugal", dial: "+351", flag: "🇵🇹" },
  { name: "Greece", dial: "+30", flag: "🇬🇷" },
  { name: "Czech Republic", dial: "+420", flag: "🇨🇿" },
  { name: "Hungary", dial: "+36", flag: "🇭🇺" },
  { name: "Romania", dial: "+40", flag: "🇷🇴" },
  { name: "Ukraine", dial: "+380", flag: "🇺🇦" },
  { name: "Israel", dial: "+972", flag: "🇮🇱" },
  { name: "Malaysia", dial: "+60", flag: "🇲🇾" },
  { name: "Thailand", dial: "+66", flag: "🇹🇭" },
  { name: "Vietnam", dial: "+84", flag: "🇻🇳" },
  { name: "Philippines", dial: "+63", flag: "🇵🇭" },
  { name: "Pakistan", dial: "+92", flag: "🇵🇰" },
  { name: "Bangladesh", dial: "+880", flag: "🇧🇩" },
  { name: "Egypt", dial: "+20", flag: "🇪🇬" },
  { name: "Nigeria", dial: "+234", flag: "🇳🇬" },
  { name: "Kenya", dial: "+254", flag: "🇰🇪" },
  { name: "Argentina", dial: "+54", flag: "🇦🇷" },
  { name: "Chile", dial: "+56", flag: "🇨🇱" },
  { name: "Colombia", dial: "+57", flag: "🇨🇴" },
  { name: "Peru", dial: "+51", flag: "🇵🇪" }
].sort((a, b) => a.name.localeCompare(b.name));

const App = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [revenue, setRevenue] = useState(1240500);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState(new Date());

  // MODAL STATE
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.name === "United States") || countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  // SCROLL VISIBILITY STATE
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  // SCROLL TO HELPER
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // CUSTOM CURSOR
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // SCROLL DIRECTION LISTENER
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;
      setIsScrollingDown(currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // TICKER EFFECT
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 150));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // TIME CLOCK
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  // FORM HANDLING
  const handleAuditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);
    // ----------------------------------------------------------------------
    // IMPORTANT: Replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms Access Key.
    // You can get a free key instantly at https://web3forms.com/
    // ----------------------------------------------------------------------
    formData.append("access_key", "eed173ac-c511-4297-8783-6159154276ef");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setTimeout(() => setFormStatus('idle'), 3000);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Form submission failed:", data);
        setFormStatus('idle');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('idle');
      alert("Something went wrong. Please try again.");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@lookafter.system");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // SYSTEM LOGS
  const [logs, setLogs] = useState<string[]>([]);
  useEffect(() => {
    const messages = [
      "Optimizing database queries...",
      "Syncing CRM modules...",
      "Detecting manual bottlenecks...",
      "Deploying serverless functions...",
      "Analyzing revenue leakage...",
      "System health: 99.9%",
    ];
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLogs = [...prev, `> ${messages[Math.floor(Math.random() * messages.length)]}`];
        return newLogs.slice(-6);
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // --- DATA: SERVICES & SOLUTIONS ---
  const services = [
    {
      id: 1,
      title: "Business Automation",
      description: "Streamlining workflows to remove human error.",
      icon: <Zap size={24} />,
      fullDescription: "Your business currently relies on humans to do robot work. Every time a human manually copies data from a Lead Form to a CRM, or from an email to a spreadsheet, you lose money. Humans are slow, they get tired, and they make typos. Automation creates a 'digital conveyor belt' that moves data instantly without errors, allowing your team to focus on closing deals instead of data entry.",
      metrics: [
        { label: "Operational Savings", value: "30-50%", desc: "Reduction in operational costs." },
        { label: "Efficiency", value: "20+ hrs/wk", desc: "Saved per scenario (e.g. Onboarding)." },
        { label: "Speed-to-Lead", value: "391%", desc: "Increase in conversion rates." }
      ]
    },
    {
      id: 2,
      title: "Invoice Autopilot",
      description: "Automated billing systems & reconciliation.",
      icon: <FileText size={24} />,
      fullDescription: "Cash flow kills agencies, not lack of profit. If you finish a project but don't get paid for 45 days because you 'forgot to send the invoice' or the client 'missed the email,' your business starves. Invoice Autopilot removes the 'awkward ask.' It automatically generates the bill, sends it, and relentlessly (but politely) follows up until the money hits your bank account.",
      metrics: [
        { label: "Cash Flow Velocity", value: "-40%", desc: "Reduction in Days Sales Outstanding." },
        { label: "Revenue Recovery", value: "15%", desc: "Recovered from annual leakage." },
        { label: "Labor Savings", value: "$35k/yr", desc: "Eliminates AR clerk needs." }
      ]
    },
    {
      id: 3,
      title: "Consultation & Strategy",
      description: "Expert guidance on tech stack architecture.",
      icon: <BrainCircuit size={24} />,
      fullDescription: "Most businesses buy software like they are shopping for groceries—randomly and without a recipe. This creates 'Tech Debt' (software that doesn't talk to each other). Strategy is the blueprint. You wouldn't build a skyscraper without an architect; you shouldn't build a business system without a roadmap. This service prevents you from burning cash on tools you don't need.",
      metrics: [
        { label: "Stack Optimization", value: "30%", desc: "Cut in monthly subscription costs." },
        { label: "Scalability", value: "10x", desc: "Scale without breaking systems." },
        { label: "Opportunity Cost", value: "6-12 mo", desc: "Saved from trial and error." }
      ]
    },
    {
      id: 4,
      title: "High-End Web Dev",
      description: "Premium, custom-coded React/Next.js sites.",
      icon: <Code size={24} />,
      fullDescription: "Your website is your 24/7 Sales Rep. If it is a slow, generic template, it tells your customers: 'We are cheap and generic.' A custom-coded site (React/Next.js) loads instantly and feels expensive. In the premium B2B world, perception is reality. If you look premium, you can charge premium prices.",
      metrics: [
        { label: "Conversion Rate", value: "4x", desc: "Higher than template sites." },
        { label: "Bounce Rate", value: "0%", desc: "Eliminates load lag completely." },
        { label: "Pricing Power", value: "+50%", desc: "Increase due to brand value." }
      ]
    },
    {
      id: 5,
      title: "AI Voice Agents",
      description: "Smart customer service & sales integration.",
      icon: <Mic size={24} />,
      fullDescription: "62% of calls to small businesses go unanswered. Every missed call is a missed customer who immediately calls your competitor. An AI Voice Agent is a receptionist that never sleeps, never takes a lunch break, and can talk to 1,000 people at once. It captures every single opportunity that comes through the phone.",
      metrics: [
        { label: "Lead Capture", value: "100%", desc: "Zero missed calls." },
        { label: "Labor Cost", value: "<$40k", desc: "Savings vs full-time staff." },
        { label: "Uptime", value: "24/7", desc: "Captures leads at 9 PM or Sundays." }
      ]
    }
  ];

  // --- DATA: PROJECT SHOWCASE ---
  const projects = [
    {
      id: 1,
      name: "Iron Forge Gym",
      type: "Fitness Center",
      focus: "Membership Conversion",
      icon: <Dumbbell size={20} />,
      color: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
      link: "https://iron-forge-seven.vercel.app/",
      fullDescription: "Iron Forge isn't just a gym; it's a high-performance facility. The digital experience needed to match. We replaced their generic landing page with a high-octane, conversion-focused React application. The new site integrates directly with their membership management software, allowing for seamless sign-ups and class bookings. The 'dark mode' aesthetic appeals to their serious clientele, while the performance optimization ensures the site loads faster than a rep.",
      metrics: [
        { label: "Membership Signups", value: "+40%", desc: "Increase in monthly recurring revenue." },
        { label: "Page Load Speed", value: "0.4s", desc: "Instant loading on mobile devices." },
        { label: "Mobile Conversions", value: "65%", desc: "Majority of traffic converts on phone." }
      ]
    },
    {
      id: 2,
      name: "Lumina Dental",
      type: "Healthcare",
      focus: "Trust & Booking",
      icon: <Stethoscope size={20} />,
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=crop",
      link: "https://lumina-dental-clinic.vercel.app/",
      fullDescription: "Trust is the currency of healthcare. Lumina Dental's previous site was clinical and cold. We re-engineered it to be warm, inviting, and professional. The new platform features an AI-driven appointment scheduler that syncs with the clinic's calendar, reducing administrative overhead. We also implemented a 'Smile Simulator' lead magnet that captures high-intent leads.",
      metrics: [
        { label: "New Patient Bookings", value: "+120%", desc: "Direct online scheduling increase." },
        { label: "Admin Time Saved", value: "15hrs/wk", desc: "Reduction in phone scheduling." },
        { label: "Lead Quality", value: "High", desc: "Pre-qualified high-ticket patients." }
      ]
    },
    {
      id: 3,
      name: "FlowState Plumbing",
      type: "Emergency Trades",
      focus: "Reliability & Speed",
      icon: <Wrench size={20} />,
      color: "bg-red-500",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=1470&auto=format&fit=crop",
      link: "https://flowstate-kappa.vercel.app/",
      fullDescription: "When you have a plumbing emergency, you don't want to wait for a slow website. FlowState is built for speed and reliability. We implemented a 'One-Tap Emergency Call' feature that connects users instantly to dispatch. The site also features an automated quoting engine that gives estimated price ranges, filtering out low-quality leads before they even call.",
      metrics: [
        { label: "Emergency Calls", value: "+200%", desc: "Increase in urgent service requests." },
        { label: "Quote Requests", value: "50/day", desc: "Automated pre-qualification." },
        { label: "Cost Per Lead", value: "-40%", desc: "More organic traffic, less ads." }
      ]
    },
    {
      id: 4,
      name: "Velvet Cafe",
      type: "Hospitality",
      focus: "Ambiance & Menu",
      icon: <Layout size={20} />,
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1447&auto=format&fit=crop",
      link: "https://velvet-cafe.vercel.app/",
      fullDescription: "Velvet Cafe needed a digital presence that tasted as expensive as their coffee. We built a sensory-rich website using smooth animations and a luxury color palette. The site features a dynamic menu that updates in real-time based on inventory, and a reservation system that reduced no-shows by sending automated SMS reminders. It's not just a website; it's the beginning of the customer's experience.",
      metrics: [
        { label: "Table Reservations", value: "+85%", desc: "Online booking adoption." },
        { label: "Menu Engagement", value: "4.5m", desc: "Average session duration." },
        { label: "No-Show Rate", value: "-30%", desc: "Due to SMS reminders." }
      ]
    },
  ];

  const getActiveService = () => services.find(s => s.id === activeService);
  const getActiveProject = () => projects.find(p => p.id === activeProject);

  return (
    <div className={`min-h-screen bg-void text-graphite dark:bg-graphite dark:text-void font-sans selection:bg-acid selection:text-black overflow-x-hidden cursor-none font-mono relative transition-colors duration-500`}>

      {/* --- BACKGROUND GRID --- */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
               linear-gradient(rgba(24, 24, 23, 0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(24, 24, 23, 0.03) 1px, transparent 1px)
             `,
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* --- SERVICE DETAIL MODAL (THE 'NEW PAGE') --- */}
      {activeService !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-graphite/90 backdrop-blur-lg" onClick={() => setActiveService(null)}></div>
          <div className="relative bg-void dark:bg-zinc-900 w-full max-w-4xl max-h-[90vh] md:max-h-[90vh] overflow-y-auto border border-acid shadow-2xl flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setActiveService(null)}
              className="fixed md:absolute top-4 right-4 p-2 bg-graphite text-acid hover:bg-acid hover:text-black z-50 cursor-none rounded-full md:rounded-none shadow-lg md:shadow-none"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <X size={20} />
            </button>

            {/* Sidebar / Header */}
            <div className="bg-graphite dark:bg-black text-void p-6 md:p-8 md:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-void/10 shrink-0">
              <div>
                <div className="text-acid mb-4">{getActiveService()?.icon}</div>
                <h2 className="text-2xl md:text-3xl font-serif mb-4 leading-tight">{getActiveService()?.title}</h2>
                <div className="h-1 w-12 bg-acid mb-4 md:mb-8"></div>
                <p className="font-mono text-xs opacity-60 uppercase tracking-widest mb-4 md:mb-8">Protocol Details</p>
              </div>
              <div className="hidden md:block">
                <p className="text-[10px] font-mono opacity-40">CLASSIFIED DOCUMENT // V1.0</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-12 md:w-2/3 bg-void dark:bg-zinc-900">
              <div className="mb-8 md:mb-12">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-graphite/50 dark:text-void/50 mb-4">
                  <AlertCircle size={14} /> Why It Is Important
                </h3>
                <p className="font-serif text-base md:text-lg leading-relaxed text-graphite dark:text-void">
                  {getActiveService()?.fullDescription}
                </p>
              </div>

              <div className="mb-8 md:mb-12">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-graphite/50 dark:text-void/50 mb-6">
                  <TrendingUp size={14} /> The Revenue Impact
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {getActiveService()?.metrics.map((metric, idx) => (
                    <div key={idx} className="border border-graphite/10 dark:border-white/10 p-4 hover:border-acid transition-colors group">
                      <div className="text-[10px] uppercase tracking-widest text-graphite/40 dark:text-void/40 mb-1">{metric.label}</div>
                      <div className="text-2xl md:text-3xl font-serif text-graphite dark:text-void group-hover:text-acid bg-clip-text transition-colors mb-2">{metric.value}</div>
                      <div className="text-xs font-mono text-graphite/70 dark:text-void/70">{metric.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { setActiveService(null); scrollTo('audit'); }}
                className="w-full py-4 bg-graphite text-acid dark:bg-black dark:text-acid font-mono text-xs uppercase font-bold tracking-widest hover:bg-acid hover:text-black transition-colors cursor-none mb-4 md:mb-0"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Initiate Implementation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- PROJECT DETAIL MODAL --- */}
      {activeProject !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-graphite/90 backdrop-blur-lg" onClick={() => setActiveProject(null)}></div>
          <div className="relative bg-void dark:bg-zinc-900 w-full max-w-4xl max-h-[90vh] md:max-h-[90vh] overflow-y-auto border border-acid shadow-2xl flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="fixed md:absolute top-4 right-4 p-2 bg-graphite text-acid hover:bg-acid hover:text-black z-50 cursor-none rounded-full md:rounded-none shadow-lg md:shadow-none"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <X size={20} />
            </button>

            {/* Sidebar / Header */}
            <div className="bg-graphite dark:bg-black text-void p-6 md:p-8 md:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-void/10 shrink-0">
              <div>
                <div className="text-acid mb-4">{getActiveProject()?.icon}</div>
                <h2 className="text-2xl md:text-3xl font-serif mb-4 leading-tight">{getActiveProject()?.name}</h2>
                <div className="h-1 w-12 bg-acid mb-4 md:mb-8"></div>
                <p className="font-mono text-xs opacity-60 uppercase tracking-widest mb-4 md:mb-8">Case Study // {getActiveProject()?.type}</p>
                <div className="font-mono text-[10px] text-acid bg-white/10 px-2 py-1 w-fit mb-4">Focus: {getActiveProject()?.focus}</div>
              </div>
              <div className="hidden md:block">
                <p className="text-[10px] font-mono opacity-40">DEPLOYED ASSET // LIVE</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-12 md:w-2/3 bg-void dark:bg-zinc-900">
              <div className="mb-8 md:mb-12">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-graphite/50 dark:text-void/50 mb-4">
                  <FileText size={14} /> Mission Brief
                </h3>
                <p className="font-serif text-base md:text-lg leading-relaxed text-graphite dark:text-void">
                  {getActiveProject()?.fullDescription}
                </p>
              </div>

              <a
                href={getActiveProject()?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-graphite text-acid dark:bg-black dark:text-acid font-mono text-xs uppercase font-bold tracking-widest hover:bg-acid hover:text-black transition-colors cursor-none mb-8 md:mb-12 flex items-center justify-center gap-2"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Visit Live System <ArrowUpRight size={16} />
              </a>

              <div className="mb-8 md:mb-12">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-graphite/50 dark:text-void/50 mb-6">
                  <TrendingUp size={14} /> Performance Metrics
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {getActiveProject()?.metrics.map((metric, idx) => (
                    <div key={idx} className="border border-graphite/10 dark:border-white/10 p-4 hover:border-acid transition-colors group">
                      <div className="text-[10px] uppercase tracking-widest text-graphite/40 dark:text-void/40 mb-1">{metric.label}</div>
                      <div className="text-2xl md:text-3xl font-serif text-graphite dark:text-void group-hover:text-acid bg-clip-text transition-colors mb-2">{metric.value}</div>
                      <div className="text-xs font-mono text-graphite/70 dark:text-void/70">{metric.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- CUSTOM CURSOR --- */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
          willChange: 'transform'
        }}
      >
        <div className={`transition-all duration-300 ease-out ${isHovering ? 'w-20 h-20 bg-acid opacity-100 mix-blend-normal' : 'w-3 h-3 bg-white'} rounded-full flex items-center justify-center`}>
          {isHovering && <ArrowUpRight size={24} className="text-black" />}
        </div>
      </div>

      {/* --- NOISE TEXTURE --- */}
      <div className="fixed inset-0 opacity-[0.06] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>


      <TopNav
        isScrollingDown={isScrollingDown}
        setIsHovering={setIsHovering}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        time={time}
      />

      {/* --- FLOATING DOCK NAV --- 
          BEHAVIOR: Shows when scrolling DOWN, Hides when scrolling UP.
      */}
      <nav
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 md:gap-2 p-2 bg-graphite/90 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl transition-all duration-500 ease-in-out w-[90%] md:w-auto overflow-x-auto no-scrollbar justify-center ${isScrollingDown ? 'translate-y-0 opacity-100' : 'translate-y-[200%] opacity-0'}`}
      >
        {[
          { id: 'services', label: 'Services' },
          { id: 'work', label: 'Work' },
          { id: 'pricing', label: 'Pricing' },
          { id: 'audit', label: 'Audit', highlight: true }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-none whitespace-nowrap ${item.highlight
              ? 'bg-acid text-black hover:bg-white'
              : 'text-void hover:bg-white/20'
              }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 md:pt-40 pb-10 px-6 md:px-12 max-w-7xl mx-auto border-b border-black/10 dark:border-white/10 min-h-screen flex flex-col justify-center z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* LEFT: Text */}
          <div className="md:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full mb-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-widest font-bold">System Online v2.4</span>
            </div>
            <h1 className="text-[13vw] md:text-[10vw] leading-[0.9] font-serif tracking-tighter text-graphite dark:text-void mb-8 md:mb-10 mix-blend-darken dark:mix-blend-normal">
              REVENUE <br />
              <span className="relative">
                ENGINEER
                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-2 md:h-4 text-acid" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl font-light leading-relaxed mb-8 font-serif pr-4 md:pr-0">
              I analyze manual workflows and build custom <span className="bg-acid px-1 font-medium text-black">AI-powered systems</span> that generate revenue while you sleep.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <button
                onClick={() => scrollTo('audit')}
                className="bg-graphite text-void dark:bg-void dark:text-graphite px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-acid hover:text-black transition-colors flex items-center justify-center md:justify-start gap-2 cursor-none"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Start Free Audit <ArrowUpRight size={16} />
              </button>
              <button
                className="border border-graphite/20 dark:border-void/20 px-6 py-4 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 transition-colors cursor-none"
                onClick={handleCopyEmail}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {copied ? <div className="flex items-center gap-2"><Check size={18} className="text-green-600" /><span className="md:hidden text-xs">Copied</span></div> : <div className="flex items-center gap-2"><Copy size={18} /><span className="md:hidden text-xs">Copy Email</span></div>}
              </button>
            </div>
          </div>

          {/* RIGHT: SYSTEM MONITOR */}
          <div className="md:col-span-5 relative h-full flex flex-col justify-center mt-8 md:mt-0">
            <div
              className="w-full bg-graphite text-void p-6 font-mono text-xs border-l-4 border-acid shadow-2xl relative group overflow-hidden"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute top-0 right-0 p-4 opacity-50">
                <Activity size={24} className="text-acid animate-pulse" />
              </div>

              <div className="mb-8 border-b border-void/10 pb-4">
                <div className="text-void/50 uppercase tracking-widest mb-1">Total Revenue Optimized</div>
                <div className="text-4xl md:text-5xl text-acid font-bold tabular-nums">
                  ${revenue.toLocaleString()}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-void/70">CPU Load</span>
                  <div className="w-24 md:w-32 h-2 bg-void/10 rounded-full overflow-hidden">
                    <div className="h-full bg-acid animate-[pulse_2s_infinite]" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-void/70">Active Automations</span>
                  <span className="text-acid">14/14</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-void/70">Error Rate</span>
                  <span className="text-red-400">0.00%</span>
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded text-[10px] font-mono h-24 md:h-32 overflow-hidden flex flex-col justify-end border border-void/10">
                {logs.map((log, i) => (
                  <div key={i} className="text-green-400/80 mb-1 font-sans whitespace-nowrap overflow-hidden text-ellipsis">{log}</div>
                ))}
                <div className="animate-pulse">_</div>
              </div>
            </div>
          </div>
        </div>

        {/* TICKER TAPE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4 border-t border-black/10 bg-void/80 backdrop-blur-sm">
          <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-4 md:mx-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-graphite/60 flex items-center gap-4">
                <Cpu size={14} /> Automating the Mundane <span className="text-acid">///</span> Scaling Revenue <span className="text-acid">///</span> Eliminating Error
              </span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </header>



      {/* --- SERVICES & SOLUTIONS ARCHITECTURE --- */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 border-b border-black/10 dark:border-white/10 pb-12 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-acid bg-black px-2 py-1 uppercase tracking-widest mb-4 inline-block">System Modules</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-[0.9]">Solutions <br /><span className="text-zinc-400">Architecture</span></h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-xl">
              Your business is a machine. These are the components I use to upgrade it. From <span className="font-medium text-black dark:text-white">client acquisition</span> to <span className="font-medium text-black dark:text-white">fulfillment</span>, every piece of code is written with one goal: <span className="italic">Profit Maximization</span>.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Available Protocols</div>
            <div className="text-3xl font-bold">05</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border border-black/10 dark:border-white/10 p-6 hover:border-acid transition-all duration-300 cursor-none flex flex-col h-full bg-white dark:bg-zinc-900 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#181817] dark:hover:shadow-[6px_6px_0_0_#D4FF00]"
              onClick={() => setActiveService(service.id)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="mb-4 text-graphite dark:text-void transition-all duration-300 bg-gray-50 dark:bg-zinc-800 p-3 w-fit border border-black/5 dark:border-white/5 group-hover:bg-acid group-hover:text-black group-hover:border-black group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="font-serif text-lg leading-tight mb-2 group-hover:text-acid transition-colors">{service.title}</h3>
              <p className="text-xs text-gray-500 font-mono leading-relaxed mt-auto">{service.description}</p>
              <button
                className="mt-6 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all md:translate-y-2 group-hover:translate-y-0 text-white bg-black px-3 py-2 w-fit"
              >
                Learn More <ArrowUpRight size={10} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- EXECUTION PROTOCOL (PROCESS) --- */}
      <section className="py-20 px-6 md:px-12 border-b border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center">
            <span className="font-mono text-xs text-acid bg-black px-2 py-1 uppercase tracking-widest mb-4 inline-block">The Algorithm</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Execution Protocol</h2>
            <p className="font-mono text-xs md:text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">From Chaos to Code in 4 Steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent z-0"></div>

            {[
              {
                icon: <Terminal size={24} />,
                step: "01",
                title: "System Audit",
                desc: "I analyze your current workflows to identify bottlenecks and revenue leaks."
              },
              {
                icon: <GitBranch size={24} />,
                step: "02",
                title: "Architecture",
                desc: "I design a custom automation blueprint tailored to your specific business logic."
              },
              {
                icon: <Code size={24} />,
                step: "03",
                title: "Development",
                desc: "I build and deploy the solution using high-performance code and robust APIs."
              },
              {
                icon: <TrendingUp size={24} />,
                step: "04",
                title: "Optimization",
                desc: "We launch, monitor, and iterate to ensure maximum ROI and efficiency."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 group">
                <div className="w-24 h-24 bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:border-acid transition-all duration-300 shadow-lg">
                  <div className="text-graphite dark:text-void group-hover:text-acid transition-colors">
                    {item.icon}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-xs text-zinc-500 font-bold mb-2">STEP {item.step}</div>
                  <h3 className="font-serif text-xl mb-3 text-graphite dark:text-void">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed px-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SHOWCASE (Refined) --- */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/10 dark:border-white/10 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2 block">/ Case Logs</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Selected <span className="italic text-zinc-400">Deployments</span></h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              A curated log of digital assets currently generating value in the wild. Observe the fusion of <span className="font-medium text-black dark:text-white">aesthetic precision</span> and <span className="font-medium text-black dark:text-white">backend power</span>.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Live Systems</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((site) => (
            <div
              key={site.id}
              className="group bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 p-4 rounded-none hover:border-black dark:hover:border-white transition-all duration-300 cursor-none relative overflow-hidden h-[400px] md:h-[420px] flex flex-col justify-between shadow-sm hover:shadow-[8px_8px_0_0_#D4FF00]"
              onClick={() => setActiveProject(site.id)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative z-10">
                <div className={`w-10 h-10 ${site.color} rounded-sm flex items-center justify-center text-white mb-6 border border-black/10 dark:border-white/10`}>
                  {site.icon}
                </div>
                <h3 className="font-serif text-2xl mb-1 text-graphite dark:text-void">{site.name}</h3>
                <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1">{site.type}</p>
                <p className="font-mono text-[10px] text-acid bg-black px-2 py-1 w-fit mt-2">Focus: {site.focus}</p>
              </div>

              <div className="w-full h-48 bg-gray-100 mt-6 border border-black/5 relative overflow-hidden group-hover:border-black/20 transition-colors">
                <img src={site.image} alt={site.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />

                {/* Hover Overlay - Always visible on mobile */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 md:group-hover:opacity-100 md:opacity-0 group-active:opacity-100 transition-all duration-300 backdrop-blur-sm">
                  <span className="font-mono text-xs text-acid border border-acid px-4 py-2 uppercase tracking-widest hover:bg-acid hover:text-black transition-colors">
                    View Case Study
                  </span>
                </div>
                {/* Mobile Overlay Hint */}
                <div className="absolute bottom-2 right-2 md:hidden">
                  <div className="bg-black text-acid p-1"><ArrowUpRight size={14} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CLIENT TRANSMISSIONS (TESTIMONIALS) --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/10 dark:border-white/10 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2 block">/ Social Proof</span>
            <h2 className="text-3xl md:text-5xl font-serif">Client Transmissions</h2>
          </div>
          <div className="flex items-center gap-2 text-acid bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full">
            <Star size={14} fill="currentColor" />
            <span className="font-mono text-xs font-bold">5.0 RATING</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "Ravi didn't just build a website; he built a sales machine. Our lead capture rate doubled in the first month.",
              author: "Sarah Jenkins",
              role: "CEO, FinTech Flow",
              metric: "+120% Leads"
            },
            {
              quote: "The AI voice agent handles 90% of our inbound calls now. It's like having a receptionist who never sleeps.",
              author: "Dr. A. Patel",
              role: "Founder, Dental Care",
              metric: "40hrs Saved/Wk"
            },
            {
              quote: "I was drowning in spreadsheets. The n8n automation Ravi set up saved me 20 hours a week instantly.",
              author: "Mark Thompson",
              role: "Director, E-Com Scale",
              metric: "$15k Saved/Mo"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-50 dark:bg-zinc-900/50 p-8 border border-black/5 dark:border-white/5 hover:border-acid transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageSquare size={40} />
              </div>
              <div className="flex gap-1 text-acid mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="font-serif text-lg leading-relaxed mb-8 text-graphite dark:text-void relative z-10">
                "{item.quote}"
              </p>
              <div className="flex items-end justify-between border-t border-black/5 dark:border-white/5 pt-6">
                <div>
                  <div className="font-bold text-sm text-graphite dark:text-void">{item.author}</div>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase">{item.role}</div>
                </div>
                <div className="bg-acid/10 text-acid-dark dark:text-acid px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider border border-acid/20">
                  {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION (Redesigned: Compact & Balanced) --- */}
      <section id="about" className="py-20 md:py-32 px-6 border-b border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start">

          {/* Text Content (Takes Priority) */}
          <div className="flex-1 space-y-8 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700">
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">The Architect</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-light leading-tight text-zinc-800 dark:text-zinc-200">
              Building the <span className="font-bold text-black dark:text-white">Digital Backbone</span> of your business.
            </h2>

            <div className="space-y-6 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
              <p>
                <span className="font-bold text-black dark:text-white text-xl block mb-2">Hi, I'm Ravi.</span>
                Most developers build websites. I build <span className="font-bold text-black dark:text-white">revenue engines</span>.
              </p>
              <p>
                I combine <span className="font-bold text-black dark:text-white">High-End Frontend</span> design with <span className="font-bold text-black dark:text-white">Robust Backend</span> logic to create systems that don't just look good—they work.
              </p>
              <p>
                From replacing manual data entry with <span className="font-bold text-black dark:text-white">n8n Automation</span> to deploying <span className="font-bold text-black dark:text-white">AI Voice Receptionists</span> that handle calls 24/7, I engineer solutions that save time and make money.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700">
              <div className="flex flex-wrap gap-2">
                {[
                  "Full Stack Web", "n8n Automation", "AI Voice Agents",
                  "Backend Systems", "HTML/CSS", "Java"
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image (Smaller, Right Aligned) */}
          <div className="w-full md:w-80 shrink-0 order-1 md:order-2 relative group">
            <div className="absolute top-4 -right-4 w-full h-full border-2 border-zinc-200 rounded-sm -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Portrait"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/70">
                // REVENUE_ENG_V1<br />
                // STATUS: ONLINE
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- PRICING SECTION (Restructured) --- */}
      <section id="pricing" className="bg-graphite text-void py-20 md:py-32 rounded-t-[2rem] md:rounded-t-[3rem] relative z-10 mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-serif mb-6">Pricing Protocol</h2>
            <p className="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-widest">Fixed Outcomes. No Surprises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-void/20">

            {/* Card 1: Web Development */}
            <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-void/20 hover:bg-void hover:text-graphite transition-colors duration-300 group flex flex-col justify-between min-h-[450px] md:min-h-[500px]">
              <div>
                <span className="font-mono text-xs text-acid group-hover:text-black mb-4 block flex items-center gap-2"><Code size={12} /> DEVELOPMENT</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-2">High-End Web</h3>
                <div className="text-3xl md:text-4xl font-light mb-6 md:mb-8 font-serif">$2,500<span className="text-sm md:text-base opacity-50 ml-2">/ project</span></div>
                <p className="text-xs font-mono mb-6 md:mb-8 opacity-70 leading-relaxed">
                  Custom-coded React/Next.js websites designed for conversion and performance. No templates.
                </p>
                <ul className="space-y-3 mb-8 md:mb-12 text-sm font-mono opacity-80">
                  <li className="flex gap-2"><Check size={14} /> Custom Design & Code</li>
                  <li className="flex gap-2"><Check size={14} /> SEO Optimization</li>
                  <li className="flex gap-2"><Check size={14} /> CMS Integration</li>
                </ul>
              </div>
              <button
                className="w-full py-4 border border-void/30 group-hover:border-black font-mono text-xs uppercase cursor-none hover:bg-black hover:text-white transition-colors"
                onClick={() => scrollTo('audit')}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Start Free Audit
              </button>
            </div>

            {/* Card 2: Invoice & Workflow Automation */}
            <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-void/20 bg-void text-graphite relative overflow-hidden flex flex-col justify-between min-h-[450px] md:min-h-[500px]">
              {/* Decorative Diagonal Stripes */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#e5e7eb_5px,#e5e7eb_10px)] opacity-50"></div>

              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-gray-500 block flex items-center gap-2"><Zap size={12} /> AUTOMATION</span>
                  <span className="bg-acid text-black text-[10px] font-bold font-mono px-2 py-1 uppercase border border-black">Most Popular</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-2">Workflow & Invoice</h3>
                <div className="text-3xl md:text-4xl font-light mb-6 md:mb-8 font-serif">$1,500<span className="text-sm md:text-base opacity-50 ml-2">/ setup</span></div>
                <p className="text-xs font-mono mb-6 md:mb-8 opacity-70 leading-relaxed text-gray-600">
                  Eliminate manual data entry. Auto-generate invoices, sync CRMs, and trigger client follow-ups.
                </p>
                <ul className="space-y-3 mb-8 md:mb-12 text-sm font-mono text-gray-800">
                  <li className="flex gap-2"><Check size={14} /> Invoice Auto-Generation</li>
                  <li className="flex gap-2"><Check size={14} /> CRM 2-Way Sync</li>
                  <li className="flex gap-2"><Check size={14} /> Payment Processing</li>
                </ul>
              </div>
              <button
                className="w-full py-4 bg-graphite text-acid font-mono text-xs uppercase hover:bg-black transition-colors cursor-none shadow-[4px_4px_0_0_#D4FF00]"
                onClick={() => scrollTo('audit')}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Start Free Audit
              </button>
            </div>

            {/* Card 3: AI Voice Agents */}
            <div className="p-6 md:p-10 hover:bg-void hover:text-graphite transition-colors duration-300 group flex flex-col justify-between min-h-[450px] md:min-h-[500px]">
              <div>
                <span className="font-mono text-xs text-acid group-hover:text-black mb-4 block flex items-center gap-2"><Mic size={12} /> AI AGENTS</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-2">Voice Intelligence</h3>
                <div className="text-3xl md:text-4xl font-light mb-6 md:mb-8 font-serif">$3,000<span className="text-sm md:text-base opacity-50 ml-2">/ setup</span></div>
                <p className="text-xs font-mono mb-6 md:mb-8 opacity-70 leading-relaxed">
                  Deploy 24/7 AI voice agents to handle customer support, booking, and outbound sales calls.
                </p>
                <ul className="space-y-3 mb-8 md:mb-12 text-sm font-mono opacity-80">
                  <li className="flex gap-2"><Check size={14} /> Human-like Voice AI</li>
                  <li className="flex gap-2"><Check size={14} /> 24/7 Call Handling</li>
                  <li className="flex gap-2"><Check size={14} /> Instant Calendar Booking</li>
                </ul>
              </div>
              <button
                className="w-full py-4 border border-void/30 group-hover:border-black font-mono text-xs uppercase cursor-none hover:bg-black hover:text-white transition-colors"
                onClick={() => scrollTo('audit')}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Start Free Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- AUDIT TERMINAL SECTION (WORKING BUTTONS) --- */}
      <section id="audit" className="bg-graphite text-acid pt-20 pb-40 px-6 md:px-12 border-t border-void/10">
        <div className="max-w-4xl mx-auto border border-acid/30 rounded-lg bg-black/50 backdrop-blur-sm p-2 shadow-[0_0_50px_rgba(212,255,0,0.1)]">
          <div className="flex items-center justify-between px-4 py-2 border-b border-acid/30 bg-acid/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:opacity-80 transition-opacity"></div>
              <span className="ml-4 font-mono text-xs opacity-70 hidden md:inline">admin@lookafter:~/audit-request</span>
              <span className="ml-4 font-mono text-xs opacity-70 md:hidden">~/audit-req</span>
            </div>
            <button
              className="text-[10px] uppercase font-mono text-void/50 hover:text-acid flex items-center gap-1 transition-colors cursor-none"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Download size={10} /> <span className="hidden md:inline">Download_CV_v4.pdf</span><span className="md:hidden">CV.pdf</span>
            </button>
          </div>
          <div className="p-6 md:p-12 font-mono">
            <div className="mb-8 text-sm opacity-80">
              <p>{'>'} Initializing audit protocol...</p>
              <p>{'>'} System ready. Please input parameters.</p>
            </div>
            <form className="space-y-6 md:space-y-8" onSubmit={handleAuditSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Name */}
                <div className="space-y-2 group">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-void/60 group-focus-within:text-acid transition-colors">/ USER_ID (NAME)</label>
                  <input type="text" name="name" placeholder="John Doe" className="w-full bg-transparent border-b border-acid/30 py-2 focus:outline-none focus:border-acid text-void placeholder:text-void/20 transition-colors cursor-none" required />
                </div>

                {/* Email */}
                <div className="space-y-2 group">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-void/60 group-focus-within:text-acid transition-colors">/ CONTACT_NODE (EMAIL)</label>
                  <input type="email" name="email" placeholder="john@corp.com" className="w-full bg-transparent border-b border-acid/30 py-2 focus:outline-none focus:border-acid text-void placeholder:text-void/20 transition-colors cursor-none" required />
                </div>

                {/* Phone */}
                <div className="space-y-2 group">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-void/60 group-focus-within:text-acid transition-colors">/ COMMS_LINK (PHONE)</label>
                  <div className="flex gap-4 relative">
                    <div className="relative w-[140px] shrink-0">
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="w-full bg-transparent border-b border-acid/30 py-2 flex items-center justify-between text-void cursor-none group-focus-within:border-acid"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-lg">{selectedCountry.flag}</span>
                          <span className="font-mono text-sm">{selectedCountry.dial}</span>
                        </span>
                        <ChevronDown size={14} className={`text-acid/50 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isCountryDropdownOpen && (
                        <div className="absolute top-full left-0 w-[300px] max-h-[300px] overflow-y-auto bg-graphite border border-acid/20 shadow-xl z-50 mt-1 scrollbar-thin scrollbar-thumb-acid/20 scrollbar-track-transparent">
                          {countries.map((country) => (
                            <button
                              key={country.name}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country);
                                setIsCountryDropdownOpen(false);
                              }}
                              className="w-full px-4 py-2 flex items-center gap-3 hover:bg-white/5 text-left transition-colors cursor-none border-b border-white/5 last:border-0"
                            >
                              <span className="text-lg">{country.flag}</span>
                              <span className="text-void/60 font-mono text-xs w-10">{country.dial}</span>
                              <span className="text-void text-sm truncate">{country.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                      <input type="hidden" name="country_code" value={selectedCountry.dial} />
                    </div>
                    <input type="tel" name="phone" placeholder="555-000-0000" className="flex-1 bg-transparent border-b border-acid/30 py-2 focus:outline-none focus:border-acid text-void placeholder:text-void/20 transition-colors cursor-none" />
                  </div>
                </div>

                {/* Web3Forms Botcheck (Honeypot) */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                {/* Service Selection */}
                <div className="space-y-2 group relative">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-void/60 group-focus-within:text-acid transition-colors">/ PROTOCOL_SELECTION (SERVICE)</label>
                  <div className="relative">
                    <select name="service" className="w-full bg-transparent border-b border-acid/30 py-2 focus:outline-none focus:border-acid text-void appearance-none cursor-none relative z-10 rounded-none" required>
                      <option value="" className="bg-graphite text-gray-500">Select Protocol...</option>
                      <option value="web" className="bg-graphite">Web Development</option>
                      <option value="automation" className="bg-graphite">Workflow Automation</option>
                      <option value="voice" className="bg-graphite">AI Voice Agent</option>
                      <option value="audit" className="bg-graphite">Full System Audit</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-acid/50 pointer-events-none z-0">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Budget Selection */}
                <div className="space-y-2 group relative">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-void/60 group-focus-within:text-acid transition-colors">/ ALLOCATED_RESOURCES (BUDGET)</label>
                  <div className="relative">
                    <select name="budget" className="w-full bg-transparent border-b border-acid/30 py-2 focus:outline-none focus:border-acid text-void appearance-none cursor-none relative z-10 rounded-none" required>
                      <option value="" className="bg-graphite text-gray-500">Select Range...</option>
                      <option value="1-3" className="bg-graphite">$1,000 - $3,000</option>
                      <option value="3-5" className="bg-graphite">$3,000 - $5,000</option>
                      <option value="5-10" className="bg-graphite">$5,000 - $10,000</option>
                      <option value="10+" className="bg-graphite">$10,000+</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-acid/50 pointer-events-none z-0">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Target URL */}
                <div className="space-y-2 group">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-void/60 group-focus-within:text-acid transition-colors">/ TARGET_SYSTEM (URL)</label>
                  <input type="text" name="url" placeholder="www.yourcompany.com" className="w-full bg-transparent border-b border-acid/30 py-2 focus:outline-none focus:border-acid text-void placeholder:text-void/20 transition-colors cursor-none" />
                </div>

                {/* Task/Pain Point */}
                <div className="space-y-2 group">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-void/60 group-focus-within:text-acid transition-colors">/ BOTTLENECK_ID (PAIN POINT)</label>
                  <input type="text" name="pain_point" placeholder="e.g. Data Entry, Lead Search" className="w-full bg-transparent border-b border-acid/30 py-2 focus:outline-none focus:border-acid text-void placeholder:text-void/20 transition-colors cursor-none" required />
                </div>
              </div>

              {/* Additional Message */}
              <div className="space-y-2 group">
                <label className="text-[10px] md:text-xs uppercase tracking-widest text-void/60 group-focus-within:text-acid transition-colors">/ ADDITIONAL_PARAMS (MESSAGE)</label>
                <textarea name="message" rows={3} placeholder="Describe the protocol requirements or custom needs..." className="w-full bg-transparent border-b border-acid/30 py-2 focus:outline-none focus:border-acid text-void placeholder:text-void/20 transition-colors cursor-none resize-none" />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending' || formStatus === 'success'}
                className={`group flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all w-fit mt-8 cursor-none relative overflow-hidden ${formStatus === 'success'
                  ? 'bg-green-500 text-black'
                  : formStatus === 'sending'
                    ? 'bg-void/10 text-void'
                    : 'bg-acid text-black hover:bg-white'
                  }`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {formStatus === 'idle' && (
                  <>
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    <span>Execute Audit</span>
                  </>
                )}

                {formStatus === 'sending' && (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Transmitting...</span>
                  </>
                )}

                {formStatus === 'success' && (
                  <>
                    <Check size={14} />
                    <span>Packet Sent</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-graphite pt-20 pb-10 border-t border-void/10 relative z-10 mb-20 md:mb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

          {/* Left: Brand Details */}
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3 group" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              <div className="w-8 h-8 bg-void/5 flex items-center justify-center text-acid border border-void/10 group-hover:border-acid transition-colors">
                <Hexagon size={16} strokeWidth={3} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-void">LookAfter.</span>
            </div>
            <p className="font-mono text-xs text-void/60 max-w-xs leading-relaxed mx-auto md:mx-0">
              Automating the mundane to elevate the extraordinary.
            </p>
            <div className="font-mono text-xs text-void/40 uppercase tracking-widest">
              System Status: <span className="text-acid font-bold animate-pulse">OPTIMAL</span>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/lookkafter"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-void/10 rounded-full text-void/50 hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all duration-300 cursor-none"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-chaurasiya-10325b31b/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-void/10 rounded-full text-void/50 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-300 cursor-none"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/918655150068"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-void/10 rounded-full text-void/50 hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 cursor-none"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              aria-label="WhatsApp"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-void/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-void/40 text-[10px] font-mono uppercase tracking-widest">© 2024 LookAfter Systems.</p>
          <p className="text-void/20 text-[10px] font-mono uppercase tracking-widest">All Systems Nominal</p>
        </div>
      </footer>
    </div>
  );
};

export default App;