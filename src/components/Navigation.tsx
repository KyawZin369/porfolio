import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined, HomeOutlined, UserOutlined, CodeOutlined, BookOutlined, FolderOutlined, ContactsOutlined } from '@ant-design/icons';

const Navigation: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial size
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = [
    { key: 'home', label: 'Home', icon: <HomeOutlined /> },
    { key: 'about', label: 'About', icon: <UserOutlined /> },
    { key: 'skills', label: 'Skills', icon: <CodeOutlined /> },
    { key: 'education', label: 'Education', icon: <BookOutlined /> },
    { key: 'experience', label: 'Experience', icon: <FolderOutlined /> },
    { key: 'projects', label: 'Projects', icon: <FolderOutlined /> },
    { key: 'contact', label: 'Contact', icon: <ContactsOutlined /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setVisible(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
          padding: '0 5%',
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '70px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              // WebkitTextFillColor: 'transparent',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('home')}
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          {!isMobile && (
            <Menu
              mode="horizontal"
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '16px'
              }}
              items={menuItems.map(item => ({
                key: item.key,
                label: (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollToSection(item.key)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.label}
                  </motion.span>
                )
              }))}
            />
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setVisible(true)}
              style={{
                fontSize: '18px',
                color: scrolled ? '#333' : '#fff'
              }}
            />
          )}
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
        width={280}
      >
        <Menu
          mode="vertical"
          style={{ border: 'none' }}
          items={menuItems.map(item => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
            onClick: () => scrollToSection(item.key)
          }))}
        />
      </Drawer>
    </>
  );
};

export default Navigation; 