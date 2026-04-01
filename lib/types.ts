export interface Coach {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  specialties: string[];
  experience: string;
  sessions: number;
  location: string;
  bio: string;
  available: boolean;
  topRated: boolean;
  gradient: string;
}

export interface Session {
  id: string;
  clientName: string;
  clientAvatar: string;
  coachName: string;
  date: string;
  time: string;
  duration: string;
  type: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  progress: number;
  coursesCompleted: number;
  lastActive: string;
  status: "active" | "inactive" | "at-risk";
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  courses: number;
  duration: string;
  progress: number;
  students: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  badge: string;
  earnedAt: string;
  category: string;
}