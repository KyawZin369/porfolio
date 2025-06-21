import React from 'react';
import { motion } from 'framer-motion';
import { Button, Typography, Space, Row, Col } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, DownloadOutlined } from '@ant-design/icons';
import { usePortfolio } from '../contexts/PortfolioContext';
import profilePhoto from '../assets/1724333018924.jfif';

const { Title, Text } = Typography;

const HeroSection: React.FC = () => {
  const { state } = usePortfolio();
  const { personalInfo } = state;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background animated circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          zIndex: 1
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          zIndex: 1
        }}
      />

      <div style={{ width: '100%', zIndex: 2, padding: '0 5%' }}>
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
          <Col xs={24} xl={22}>
            <Row gutter={[60, 60]} align="middle" justify="center" style={{ minHeight: '80vh' }}>
              {/* Profile Photo */}
              <Col xs={24} lg={10} style={{ textAlign: 'center' }}>
                <motion.div
                  variants={itemVariants}
                  style={{ position: 'relative', display: 'inline-block' }}
                >
                  {/* Decorative rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                      position: 'absolute',
                      top: '-25px',
                      left: '-25px',
                      width: '350px',
                      height: '350px',
                      border: '2px dashed rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%',
                      zIndex: 0
                    }}
                  />
                  
                  {/* Main photo container */}
                  <div style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '3px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <img 
                      src={profilePhoto} 
                      alt="Kyaw Zin Thet"
                      style={{
                        width: '280px',
                        height: '280px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        filter: 'brightness(1.1) contrast(1.1)'
                      }}
                    />
                  </div>
                  
                  {/* Floating decorative elements */}
                  <motion.div
                    animate={{ y: [-8, 8, -8], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      position: 'absolute',
                      top: '30px',
                      right: '20px',
                      width: '12px',
                      height: '12px',
                      background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.6) 100%)',
                      borderRadius: '50%',
                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
                    }}
                  />
                  <motion.div
                    animate={{ y: [8, -8, 8], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{
                      position: 'absolute',
                      bottom: '40px',
                      left: '20px',
                      width: '8px',
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.6)',
                      borderRadius: '50%',
                      boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)'
                    }}
                  />
                  <motion.div
                    animate={{ y: [-6, 6, -6], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    style={{
                      position: 'absolute',
                      top: '60%',
                      right: '10px',
                      width: '6px',
                      height: '6px',
                      background: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '50%',
                      boxShadow: '0 0 12px rgba(255, 255, 255, 0.6)'
                    }}
                  />
                </motion.div>
              </Col>

              {/* Content */}
              <Col xs={24} lg={14}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ textAlign: 'center', color: 'white' }}
                >
              {/* Greeting */}
              <motion.div variants={itemVariants}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  marginBottom: '20px',
                  marginTop: '90px'
                }}>
                  <Text style={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontSize: '16px', 
                    fontWeight: 500,
                    letterSpacing: '0.5px'
                  }}>
                    👋 Hello, I'm
                  </Text>
                </div>
              </motion.div>

              {/* Name */}
              <motion.div variants={itemVariants}>
                <Title 
                  level={1} 
                  style={{ 
                    color: 'white', 
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
                    margin: '0 0 10px 0',
                    fontWeight: 800,
                    letterSpacing: '-2px',
                    lineHeight: '1.1',
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {personalInfo.name}
                </Title>
              </motion.div>

              {/* Title with animated underline */}
              <motion.div variants={itemVariants}>
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '30px' }}>
                  <Title 
                    level={2} 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.95)', 
                      fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                      fontWeight: 500,
                      margin: 0,
                      letterSpacing: '1px'
                    }}
                  >
                    {personalInfo.title}
                  </Title>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: '0',
                      height: '3px',
                      background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 100%)',
                      borderRadius: '2px'
                    }}
                  />
                </div>
              </motion.div>

              {/* Summary */}
              <motion.div variants={itemVariants}>
                <Text 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.85)', 
                    fontSize: '18px',
                    display: 'block',
                    maxWidth: '650px',
                    margin: '0 auto 50px auto',
                    lineHeight: '1.7',
                    fontWeight: 300,
                    letterSpacing: '0.3px'
                  }}
                >
                  {personalInfo.summary}
                </Text>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants}>
                <Space size="large" wrap style={{ justifyContent: 'center' }}>
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      type="primary" 
                      size="large" 
                      icon={<DownloadOutlined />}
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                        border: '2px solid rgba(255, 255, 255, 0.4)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '50px',
                        padding: '12px 35px',
                        height: 'auto',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'white',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                        letterSpacing: '0.5px'
                      }}
                      onClick={() => window.open(personalInfo.cv)}
                    >
                      Download CV
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      size="large"
                      style={{
                        background: 'transparent',
                        border: '2px solid rgba(255, 255, 255, 0.6)',
                        color: 'white',
                        borderRadius: '50px',
                        padding: '12px 35px',
                        height: 'auto',
                        fontSize: '16px',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                      }}
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      View My Work
                    </Button>
                  </motion.div>
                </Space>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                variants={itemVariants}
                style={{ marginTop: '60px', marginBottom: '90px' }}
              >
                <div style={{ marginBottom: '15px' }}>
                  <Text style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Connect with me
                  </Text>
                </div>
                <Space size="large">
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ 
                      color: 'white', 
                      fontSize: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '55px',
                      height: '55px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                  >
                    <GithubOutlined />
                  </motion.a>
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ 
                      color: 'white', 
                      fontSize: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '55px',
                      height: '55px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                  >
                    <LinkedinOutlined />
                  </motion.a>
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ scale: 1.3, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ 
                      color: 'white', 
                      fontSize: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '55px',
                      height: '55px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                  >
                    <MailOutlined />
                  </motion.a>
                </Space>
              </motion.div>
            </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            bottom: '0px',
            left: '47%',
            transform: 'translateX(-50%)',
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div style={{ fontSize: '12px', marginBottom: '10px' }}>SCROLL DOWN</div>
          <div style={{ fontSize: '20px' }}>↓</div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 