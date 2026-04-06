import { Achievement, Coach, LearningPath, Session, TeamMember } from "./types";
import {
  Activity,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  CreditCard,
  DollarSign,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Star,
  Target,
  Trophy,
  TriangleAlert,
  UserCircle2,
  Users
} from "lucide-react";

export const MOCK_COACHES: Coach[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Executive Leadership Coach",
    avatar: "SC",
    rating: 4.9,
    reviews: 142,
    hourlyRate: 150,
    specialties: ["Leadership", "Executive Presence", "Career Transition"],
    experience: "15+ years",
    sessions: 1240,
    location: "San Francisco, CA",
    bio: "Former VP at Google. ICF-certified executive coach helping leaders unlock their potential.",
    available: true,
    topRated: true,
    gradient: "from-brand-blue-600 to-brand-orange-500"
  },
  {
    id: "2",
    name: "Marcus Johnson",
    title: "Career Strategy Coach",
    avatar: "MJ",
    rating: 4.8,
    reviews: 98,
    hourlyRate: 120,
    specialties: ["Career Planning", "Interview Prep", "Salary Negotiation"],
    experience: "10+ years",
    sessions: 856,
    location: "New York, NY",
    bio: "Career strategist helping professionals land better roles and negotiate better offers.",
    available: true,
    topRated: true,
    gradient: "from-brand-blue-500 to-brand-blue-700"
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    title: "Team Performance Coach",
    avatar: "ER",
    rating: 4.9,
    reviews: 76,
    hourlyRate: 200,
    specialties: ["Team Building", "Conflict Resolution", "OKRs"],
    experience: "12+ years",
    sessions: 634,
    location: "Austin, TX",
    bio: "Organizational psychologist specializing in high-performance team dynamics and culture.",
    available: false,
    topRated: false,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    id: "4",
    name: "David Park",
    title: "Tech Leadership Coach",
    avatar: "DP",
    rating: 4.7,
    reviews: 64,
    hourlyRate: 175,
    specialties: ["Engineering Management", "Technical Strategy", "Scaling Teams"],
    experience: "8+ years",
    sessions: 412,
    location: "Seattle, WA",
    bio: "Former CTO turned coach helping engineering leaders scale teams and systems.",
    available: true,
    topRated: false,
    gradient: "from-orange-500 to-red-500"
  }
];

export const MOCK_SESSIONS: Session[] = [
  {
    id: "1",
    clientName: "Alex Turner",
    clientAvatar: "AT",
    coachName: "Sarah Chen",
    date: "Today",
    time: "2:00 PM",
    duration: "60 min",
    type: "Career Strategy",
    status: "confirmed"
  },
  {
    id: "2",
    clientName: "Maria Santos",
    clientAvatar: "MS",
    coachName: "Sarah Chen",
    date: "Today",
    time: "3:30 PM",
    duration: "45 min",
    type: "Leadership",
    status: "confirmed"
  },
  {
    id: "3",
    clientName: "Acme Corp Team",
    clientAvatar: "AC",
    coachName: "Sarah Chen",
    date: "Today",
    time: "5:00 PM",
    duration: "90 min",
    type: "Workshop",
    status: "pending"
  }
];

export const MOCK_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Alex Turner",
    role: "Senior Engineer",
    department: "Engineering",
    avatar: "AT",
    progress: 72,
    coursesCompleted: 8,
    lastActive: "2 hours ago",
    status: "active"
  },
  {
    id: "2",
    name: "Maria Santos",
    role: "Product Manager",
    department: "Product",
    avatar: "MS",
    progress: 45,
    coursesCompleted: 4,
    lastActive: "1 day ago",
    status: "active"
  },
  {
    id: "3",
    name: "Jordan Lee",
    role: "Designer",
    department: "Design",
    avatar: "JL",
    progress: 30,
    coursesCompleted: 2,
    lastActive: "5 days ago",
    status: "at-risk"
  }
];

export const MOCK_ACHIEVEMENTS: Achievement[] = [
  {
    id: "1",
    title: "Communication Pro",
    description: "Completed advanced communication course",
    badge: "🏆",
    earnedAt: "2 days ago",
    category: "Communication"
  },
  {
    id: "2",
    title: "Data-Driven Decisions",
    description: "Mastered analytics fundamentals",
    badge: "📊",
    earnedAt: "1 week ago",
    category: "Analytics"
  },
  {
    id: "3",
    title: "Goal Setting Master",
    description: "Achieved 5 weekly goals in a row",
    badge: "🎯",
    earnedAt: "2 weeks ago",
    category: "Productivity"
  }
];

export const MOCK_LEARNING_PATHS: LearningPath[] = [
  {
    id: "1",
    title: "Leadership & Management",
    description: "Comprehensive leadership development track",
    category: "Leadership",
    courses: 8,
    duration: "12 weeks",
    progress: 68,
    students: 1247
  },
  {
    id: "2",
    title: "Technical Leadership",
    description: "Lead engineering teams effectively",
    category: "Tech",
    courses: 6,
    duration: "8 weeks",
    progress: 24,
    students: 892
  }
];

export const PROFESSIONAL_DASHBOARD_DATA = {
  metrics: [
    {
      label: "Courses Completed",
      value: "18",
      icon: GraduationCap,
      change: "+3 this month",
      changeType: "positive" as const
    },
    {
      label: "Learning Hours",
      value: "126",
      icon: BookOpen,
      change: "14h this week",
      changeType: "neutral" as const
    },
    {
      label: "Goals Hit",
      value: "9",
      icon: Target,
      change: "On track",
      changeType: "neutral" as const
    },
    {
      label: "Achievements",
      value: "24",
      icon: Trophy,
      change: "+2 new",
      changeType: "positive" as const
    }
  ],
  learningPaths: [
    {
      title: "Technical Leadership",
      progress: 72,
      meta: "8 modules remaining"
    },
    {
      title: "Executive Communication",
      progress: 54,
      meta: "5 modules remaining"
    },
    {
      title: "Strategic Thinking",
      progress: 38,
      meta: "7 modules remaining"
    }
  ],
  achievements: [
    {
      title: "Leadership Momentum",
      detail: "Completed 3 modules this week",
      tag: "New"
    },
    {
      title: "Coaching Ready",
      detail: "Booked 2 coaching sessions",
      tag: "Booked"
    },
    {
      title: "Consistency Streak",
      detail: "7 active learning days",
      tag: "Streak"
    }
  ],
  sessions: [
    {
      client: "Sarah Chen",
      time: "Tomorrow, 10:00 AM",
      type: "Career Growth Session",
      status: "Confirmed",
      badge: "success" as const
    },
    {
      client: "Marcus Rivera",
      time: "Friday, 3:30 PM",
      type: "Mock Interview",
      status: "Pending",
      badge: "warning" as const
    },
    {
      client: "Naomi Brooks",
      time: "Monday, 1:00 PM",
      type: "Leadership Strategy",
      status: "Confirmed",
      badge: "success" as const
    }
  ],
  coaches: [
    {
      name: "Naomi Brooks",
      role: "Leadership & Promotion Coach",
      summary: "Best for professionals preparing for manager-level transitions."
    },
    {
      name: "David Kim",
      role: "Career Strategy Coach",
      summary: "Helps align learning plans with role changes and salary growth."
    },
    {
      name: "Lena Ortiz",
      role: "Communication Coach",
      summary: "Focused on executive presence, influence, and stakeholder trust."
    }
  ],
  feed: [
    {
      user: "Maya Chen",
      action: "shared a reflection from the Leadership Accelerator cohort.",
      time: "28 min ago"
    },
    {
      user: "Jordan Lee",
      action: "earned the Strategic Thinking badge.",
      time: "1h ago"
    },
    {
      user: "Priya Nair",
      action: "posted a question about navigating a new manager role.",
      time: "3h ago"
    }
  ],
  jobs: [
    "Senior Product Manager at Northstar Health",
    "Director of Operations at Elevate Systems",
    "Engineering Manager at Atlas Cloud",
    "Program Lead at Horizon People"
  ],
  weeklyPlan: [
    "Finish Strategic Communication module 7",
    "Schedule one coaching session",
    "Post one community reflection",
    "Complete your weekly goal check-in"
  ],
  settings: [
    "Notification preferences",
    "Career interests",
    "Coach matching preferences",
    "Learning reminders"
  ],
  nav: [
    { label: "Dashboard", href: "/dashboard/professional", icon: LayoutDashboard, tab: "" },
    { label: "My Learning", href: "/dashboard/professional?tab=learning", icon: BookOpen, tab: "learning" },
    { label: "Find Coaches", href: "/dashboard/professional?tab=coaches", icon: GraduationCap, tab: "coaches" },
    { label: "Achievements", href: "/dashboard/professional?tab=achievements", icon: Award, tab: "achievements" },
    { label: "Community", href: "/dashboard/professional?tab=community", icon: Users, tab: "community" },
    { label: "Job Board", href: "/dashboard/professional?tab=jobs", icon: Briefcase, tab: "jobs" },
    { label: "Settings", href: "/dashboard/professional?tab=settings", icon: Settings, tab: "settings" }
  ]
};

export const COACH_DASHBOARD_DATA = {
  metrics: [
    {
      label: "Monthly Revenue",
      value: "$8,420",
      icon: DollarSign,
      change: "+12.8%",
      changeType: "positive" as const
    },
    {
      label: "Active Clients",
      value: "47",
      icon: Users,
      change: "+6 this week",
      changeType: "positive" as const
    },
    {
      label: "Sessions",
      value: "32",
      icon: CalendarDays,
      change: "8 today",
      changeType: "neutral" as const
    },
    {
      label: "Rating",
      value: "4.9",
      icon: Star,
      change: "Top 5%",
      changeType: "positive" as const
    }
  ],
  sessions: [
    {
      client: "Maya Patel",
      time: "9:00 AM",
      type: "Career Strategy",
      status: "Confirmed",
      badge: "success" as const
    },
    {
      client: "Jordan Lee",
      time: "11:30 AM",
      type: "Leadership Coaching",
      status: "Rescheduled",
      badge: "warning" as const
    },
    {
      client: "Avery Johnson",
      time: "2:00 PM",
      type: "Resume Review",
      status: "Confirmed",
      badge: "success" as const
    },
    {
      client: "Priya Nair",
      time: "4:15 PM",
      type: "Mock Interview",
      status: "Pending",
      badge: "info" as const
    }
  ],
  clients: [
    { name: "Maya Patel", department: "Career Strategy", progress: 84, status: "On Track", lastActive: "2h ago" },
    { name: "Jordan Lee", department: "Leadership", progress: 67, status: "Needs Support", lastActive: "Yesterday" },
    { name: "Avery Johnson", department: "Executive Presence", progress: 91, status: "On Track", lastActive: "4h ago" },
    { name: "Priya Nair", department: "Interview Prep", progress: 52, status: "Needs Support", lastActive: "Today" }
  ],
  revenueData: [
    { month: "Jan", value: 58 },
    { month: "Feb", value: 72 },
    { month: "Mar", value: 64 },
    { month: "Apr", value: 88 },
    { month: "May", value: 76 },
    { month: "Jun", value: 94 }
  ],
  reviews: [
    {
      name: "Elena Torres",
      rating: 5,
      text: "Sarah helped me tighten my story, improve my interview confidence, and land a role in under six weeks.",
      time: "2 days ago"
    },
    {
      name: "Marcus Chen",
      rating: 5,
      text: "Every session feels practical and focused. I always leave with a clear plan and measurable next steps.",
      time: "5 days ago"
    }
  ],
  courses: [
    "Leadership Sprint Bootcamp",
    "Career Strategy Intensive",
    "Interview Prep Workshop",
    "Executive Presence Masterclass"
  ],
  messages: [
    "Maya Patel asked to reschedule",
    "Jordan Lee shared a follow-up note",
    "Priya Nair requested a workshop proposal"
  ],
  earningsHighlights: [
    "Average session value: $148",
    "Repeat client rate: 72%",
    "Workshop upsell conversion: 18%",
    "Monthly growth trend: +12.8%"
  ],
  profile: [
    "Expertise and specialties",
    "Session pricing",
    "Client testimonials",
    "Availability and booking links"
  ],
  settings: [
    "Calendar sync",
    "Payout preferences",
    "Notification rules",
    "Session policies"
  ],
  nav: [
    { label: "Dashboard", href: "/dashboard/coach", icon: LayoutDashboard, tab: "" },
    { label: "Schedule", href: "/dashboard/coach?tab=schedule", icon: CalendarDays, tab: "schedule" },
    { label: "Clients", href: "/dashboard/coach?tab=clients", icon: Users, tab: "clients" },
    { label: "Courses", href: "/dashboard/coach?tab=courses", icon: BookOpen, tab: "courses" },
    { label: "Messages", href: "/dashboard/coach?tab=messages", icon: MessageSquare, tab: "messages", badge: "12" },
    { label: "Earnings", href: "/dashboard/coach?tab=earnings", icon: DollarSign, tab: "earnings" },
    { label: "Analytics", href: "/dashboard/coach?tab=analytics", icon: BarChart3, tab: "analytics" },
    { label: "Profile", href: "/dashboard/coach?tab=profile", icon: UserCircle2, tab: "profile" },
    { label: "Settings", href: "/dashboard/coach?tab=settings", icon: Settings, tab: "settings" }
  ]
};

export const EMPLOYER_DASHBOARD_DATA = {
  metrics: [
    {
      label: "Team Members",
      value: "248",
      icon: Users,
      change: "+18 this quarter",
      changeType: "positive" as const
    },
    {
      label: "Training ROI",
      value: "340%",
      icon: Activity,
      change: "+42% YoY",
      changeType: "positive" as const
    },
    {
      label: "Courses Assigned",
      value: "45",
      icon: Building2,
      change: "7 launched this month",
      changeType: "neutral" as const
    },
    {
      label: "Completion Rate",
      value: "87%",
      icon: BarChart3,
      change: "+6 pts",
      changeType: "positive" as const
    }
  ],
  skillCoverage: [
    { skill: "Leadership", value: 82, color: "brand" as const },
    { skill: "Data Literacy", value: 74, color: "blue" as const },
    { skill: "Project Management", value: 69, color: "emerald" as const },
    { skill: "AI Fluency", value: 41, color: "amber" as const }
  ],
  team: [
    { name: "Alicia Gomez", department: "Product", progress: 91, status: "On Track", lastActive: "2h ago" },
    { name: "Ben Carter", department: "Sales", progress: 56, status: "Needs Support", lastActive: "Yesterday" },
    { name: "Priya Nair", department: "Operations", progress: 78, status: "On Track", lastActive: "1h ago" },
    { name: "Marcus Lee", department: "Engineering", progress: 34, status: "At Risk", lastActive: "Today" }
  ],
  assignments: [
    {
      title: "Manager Readiness Path",
      audience: "34 team leads",
      completion: 79,
      due: "Due Apr 12"
    },
    {
      title: "AI Productivity Foundations",
      audience: "92 employees",
      completion: 51,
      due: "Due Apr 18"
    },
    {
      title: "Customer Communication Excellence",
      audience: "48 client-facing roles",
      completion: 88,
      due: "Due Apr 8"
    }
  ],
  departmentData: [
    { department: "Product", value: 88 },
    { department: "Sales", value: 63 },
    { department: "Engineering", value: 72 },
    { department: "Operations", value: 81 },
    { department: "People", value: 76 }
  ],
  completions: [
    {
      name: "Jordan Lee",
      detail: "completed AI Productivity Foundations",
      time: "14 min ago"
    },
    {
      name: "Elena Torres",
      detail: "finished Manager Readiness Path",
      time: "1h ago"
    },
    {
      name: "Maya Patel",
      detail: "earned the Leadership Momentum badge",
      time: "3h ago"
    }
  ],
  aiInsight: {
    title: "12 team members at risk of leaving",
    description:
      "Engagement patterns, stalled learning activity, and manager feedback suggest a retention risk spike in Sales and Engineering. Prioritize outreach this week.",
    icon: TriangleAlert
  },
  reports: [
    "Quarterly adoption summary",
    "Manager enablement progress report",
    "Retention risk overview",
    "Learning ROI executive summary"
  ],
  billing: [
    "Enterprise renewal due Apr 30",
    "248 active seats allocated",
    "Usage trending 14% above last quarter"
  ],
  settings: [
    "Seat management",
    "Manager permissions",
    "Notification routing",
    "Branding preferences"
  ],
  nav: [
    { label: "Dashboard", href: "/dashboard/employer", icon: LayoutDashboard, tab: "" },
    { label: "Team", href: "/dashboard/employer?tab=team", icon: Users, tab: "team" },
    { label: "Analytics", href: "/dashboard/employer?tab=analytics", icon: BarChart3, tab: "analytics" },
    { label: "Learning Paths", href: "/dashboard/employer?tab=learning-paths", icon: BookOpen, tab: "learning-paths" },
    { label: "Reports", href: "/dashboard/employer?tab=reports", icon: FileText, tab: "reports" },
    { label: "Billing", href: "/dashboard/employer?tab=billing", icon: CreditCard, tab: "billing" },
    { label: "Settings", href: "/dashboard/employer?tab=settings", icon: Settings, tab: "settings" }
  ]
};
