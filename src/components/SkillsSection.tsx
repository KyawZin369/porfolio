import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Row, Col, Progress, Card, Tag } from 'antd';
import { CodeOutlined, DatabaseOutlined, ToolOutlined, GlobalOutlined, DesktopOutlined } from '@ant-design/icons';
import { usePortfolio } from '../contexts/PortfolioContext';

const { Title } = Typography;

const SkillsSection: React.FC = () => {
  const { state } = usePortfolio();
  const { skills } = state;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const categoryIcons = {
    frontend: <DesktopOutlined />,
    backend: <CodeOutlined />,
    database: <DatabaseOutlined />,
    tools: <ToolOutlined />,
    languages: <GlobalOutlined />
  };

  const categoryColors = {
    frontend: '#1890ff',
    backend: '#52c41a',
    database: '#fa8c16',
    tools: '#722ed1',
    languages: '#eb2f96'
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div style={{ 
      padding: '100px 5%', 
      background: 'white',
      minHeight: '100vh'
    }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Row justify="center" style={{ marginBottom: '80px' }}>
          <Col xs={24} md={16} lg={12}>
            <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
              <Title level={2} style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                marginBottom: '20px',
                color: '#2c3e50'
              }}>
                My Skills
              </Title>
              <div style={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto 20px auto',
                borderRadius: '2px'
              }} />
              <p style={{ 
                fontSize: '16px', 
                color: '#7f8c8d',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                Here are the technologies and tools I work with to bring ideas to life
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row gutter={[30, 30]}>
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <Col xs={24} md={12} lg={8} key={category}>
              <motion.div variants={itemVariants}>
                <Card
                  style={{
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: 'none',
                    height: '100%'
                  }}
                  bodyStyle={{ padding: '30px' }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '25px' 
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: categoryColors[category as keyof typeof categoryColors],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px',
                      fontSize: '20px',
                      color: 'white'
                    }}>
                      {categoryIcons[category as keyof typeof categoryIcons]}
                    </div>
                    <div>
                      <Title level={4} style={{ 
                        margin: 0, 
                        color: '#2c3e50',
                        textTransform: 'capitalize'
                      }}>
                        {category}
                      </Title>
                      <Tag color={categoryColors[category as keyof typeof categoryColors]}>
                        {categorySkills.length} skills
                      </Tag>
                    </div>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    {categorySkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        style={{ marginBottom: '20px' }}
                      >
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          marginBottom: '8px'
                        }}>
                          <span style={{ 
                            fontWeight: 500,
                            color: '#2c3e50'
                          }}>
                            {skill.name}
                          </span>
                          <span style={{ 
                            color: '#7f8c8d',
                            fontSize: '14px'
                          }}>
                            {skill.level}%
                          </span>
                        </div>
                        <Progress
                          percent={skill.level}
                          showInfo={false}
                          strokeColor={categoryColors[category as keyof typeof categoryColors]}
                          trailColor="#f0f2f5"
                          strokeWidth={8}
                        />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Skills Overview */}
        <Row justify="center" style={{ marginTop: '80px' }}>
          <Col xs={24} lg={20}>
            <motion.div variants={itemVariants}>
              <Card
                style={{
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: 'none',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white'
                }}
                bodyStyle={{ padding: '40px' }}
              >
                <Row gutter={[30, 30]} align="middle">
                  <Col xs={24} md={12}>
                    <Title level={3} style={{ color: 'white', marginBottom: '20px' }}>
                      Always Learning
                    </Title>
                    <p style={{ 
                      fontSize: '16px', 
                      lineHeight: '1.6',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      Technology evolves rapidly, and so do I. I'm constantly learning new technologies, 
                      frameworks, and best practices to stay at the forefront of web development. 
                      My passion for continuous learning drives me to explore innovative solutions 
                      and improve my craft every day.
                    </p>
                  </Col>
                  <Col xs={24} md={12}>
                    <div style={{ textAlign: 'center' }}>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        style={{
                          width: '120px',
                          height: '120px',
                          borderRadius: '50%',
                          border: '3px solid rgba(255, 255, 255, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto',
                          fontSize: '48px'
                        }}
                      >
                        <CodeOutlined />
                      </motion.div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default SkillsSection; 