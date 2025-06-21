import React from 'react';
import { ConfigProvider } from 'antd';
import { PortfolioProvider } from './contexts/PortfolioContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import './App.css';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#667eea',
          borderRadius: 8,
        },
      }}
    >
      <PortfolioProvider>
        <div className="App">
          <Navigation />
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="skills">
            <SkillsSection />
          </section>
          <section id="education">
            <EducationSection />
          </section>
          <section id="experience">
            <ExperienceSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
        </div>
      </PortfolioProvider>
    </ConfigProvider>
  );
};

export default App;
