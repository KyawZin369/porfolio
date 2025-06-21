import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  cv: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

interface PortfolioState {
  personalInfo: PersonalInfo;
  skills: Skill[];
  education: Education[];
  projects: Project[];
  experience: Experience[];
  theme: 'light' | 'dark';
}

interface PortfolioContextType {
  state: PortfolioState;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  addSkill: (skill: Skill) => void;
  toggleTheme: () => void;
}

const defaultState: PortfolioState = {
  personalInfo: {
    name: "KYAW ZIN THET",
    title: "Web Developer",
    email: "kyawzinthet689@gmail.com",
    phone: "09974829360",
    location: "A shae gone St, Sanchaung, Yangon",
    linkedin: "https://www.linkedin.com/in/kyaw-zin-thet-b9507b273/",
    github: "https://github.com/KyawZin369",
    cv: "https://drive.google.com/file/d/1TDFR1q1L5QdiB0QYAOtxck22QozFe48v/view?usp=sharing",
    summary: "I am Kyaw Zin Thet, an enthusiastic and motivated web developer with a strong passion for technology and a commitment to continuous learning. With a comprehensive foundation in both front-end and back-end development, I am dedicated to creating dynamic, efficient, and user friendly web applications that meet the evolving needs of users and businesses alike. With knowledge of SDLC, Git, and testing, I bring strong problem-solving skills, attention to detail, and a keen ability for analytical and logical thinking to every project."
  },
  skills: [
    { name: "JavaScript", level: 90, category: 'languages' },
    { name: "React", level: 85, category: 'frontend' },
    { name: "Next.js", level: 80, category: 'frontend' },
    { name: "TypeScript", level: 75, category: 'languages' },
    { name: "Node.js", level: 80, category: 'backend' },
    { name: "Express.js", level: 85, category: 'backend' },
    { name: "MongoDB", level: 80, category: 'database' },
    { name: "MySQL", level: 85, category: 'database' },
    { name: "React Native", level: 75, category: 'frontend' },
    { name: "Flutter", level: 80, category: 'frontend' },
    { name: "TailwindCSS", level: 90, category: 'tools' },
    { name: "Bootstrap", level: 85, category: 'tools' },
    { name: "Git", level: 90, category: 'tools' },
    { name: "Laravel", level: 70, category: 'backend' },
    { name: "Redux", level: 75, category: 'tools' },
  ],
  education: [
    {
      degree: "Level 5 Higher National Diploma in Software Engineering",
      institution: "LITHAN EDUCLAAS COLLAGE",
      year: "2024-2025",
      description: "Present (Expected Completion: 2025). Advanced software engineering program focusing on modern development practices and technologies."
    },
    {
      degree: "Level 3 Foundation Diploma in Information Technology",
      institution: "LITHAN EDUCLAAS COLLAGE",
      year: "2023-2024",
      description: "Foundation program covering core information technology concepts and web development fundamentals."
    }
  ],
  projects: [
    {
      id: "1",
      title: "Wildlife Park Database Management",
      description: "Designed a MySQL-based relational database for managing animal and keeper records, with a visually appealing interface built using Java EE and MySQL database.",
      technologies: ["Java EE", "MySQL", "Database Design"],
      githubUrl: "https://github.com/KyawZin369"
    },
    {
      id: "2",
      title: "Real Estate Management System",
      description: "Collaborated on designing and implementing a comprehensive Real Estate Management System. Developed and maintained multiple web applications with strong functionality and responsiveness. Utilized JavaScript, React, and Redux for dynamic, user-focused features, and applied TailwindCSS for consistent, visually appealing interfaces.",
      technologies: ["JavaScript", "React", "Redux", "TailwindCSS"],
      githubUrl: "https://github.com/KyawZin369"
    }
  ],
  experience: [
    {
      id: "1",
      position: "Web Developer",
      company: "Marathon Myanmar",
      duration: "Jan 2025 - Present",
      description: [
        "Built responsive and user-friendly web interfaces using React.js for production-level, real-time company projects",
        "Developed high-performance, cross-platform mobile applications using Flutter, ensuring smooth experiences on both Android and iOS",
        "Designed and implemented scalable POS and e-commerce applications tailored for internal operations within the company"
      ],
      technologies: ["React.js", "Flutter", "POS Systems", "E-commerce"]
    },
    {
      id: "2",
      position: "Web Developer",
      company: "Ultimate Solution Co., LTD",
      duration: "Sep - Dec 2024",
      description: [
        "Developed features for real-world projects using React and Next.js to enhance frontend interfaces and user experiences",
        "Utilized Laravel for backend functionalities, integrating APIs and ensuring seamless data management",
        "Collaborated with a cross-functional team, contributing to the complete lifecycle of project development"
      ],
      technologies: ["React", "Next.js", "Laravel", "APIs", "Full Stack Development"]
    }
  ],
  theme: 'light'
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<PortfolioState>(defaultState);

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setState(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info }
    }));
  };

  const addSkill = (skill: Skill) => {
    setState(prev => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));
  };

  const toggleTheme = () => {
    setState(prev => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light'
    }));
  };

  return (
    <PortfolioContext.Provider
      value={{
        state,
        updatePersonalInfo,
        addSkill,
        toggleTheme
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

// Export the context for advanced use cases
export { PortfolioContext }; 