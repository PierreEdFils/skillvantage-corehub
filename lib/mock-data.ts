import { Achievement, Coach, LearningPath, Session, TeamMember } from "./types";

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
