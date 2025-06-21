import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Row, Col, Card, Tag, Button, Space } from 'antd';
import { GithubOutlined, LinkOutlined, EyeOutlined } from '@ant-design/icons';
import { usePortfolio } from '../contexts/PortfolioContext';

const { Title, Text, Paragraph } = Typography;

const ProjectsSection: React.FC = () => {
  const { state } = usePortfolio();
  const { projects } = state;

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

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
            <motion.div variants={cardVariants} style={{ textAlign: 'center' }}>
              <Title level={2} style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                marginBottom: '20px',
                color: '#2c3e50'
              }}>
                My Projects
              </Title>
              <div style={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto 20px auto',
                borderRadius: '2px'
              }} />
              <Text style={{ 
                fontSize: '16px', 
                color: '#7f8c8d',
                display: 'block'
              }}>
                Here are some of the projects I've worked on recently
              </Text>
            </motion.div>
          </Col>
        </Row>

        <Row gutter={[30, 30]}>
          {projects.map((project, index) => (
            <Col xs={24} md={12} lg={8} key={project.id}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
              >
                <Card
                  style={{
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: 'none',
                    height: '100%',
                    overflow: 'hidden'
                  }}
                  bodyStyle={{ padding: '0' }}
                  cover={
                    <div style={{
                      height: '200px',
                      background: `linear-gradient(135deg, ${
                        index % 3 === 0 ? '#667eea 0%, #764ba2 100%' :
                        index % 3 === 1 ? '#52c41a 0%, #389e0d 100%' :
                        '#fa8c16 0%, #d46b08 100%'
                      })`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '48px',
                      color: 'white',
                      position: 'relative'
                    }}>
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        💻
                      </motion.div>
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        padding: '5px 12px',
                        fontSize: '12px',
                        fontWeight: 500
                      }}>
                        Project {index + 1}
                      </div>
                    </div>
                  }
                >
                  <div style={{ padding: '30px' }}>
                    <Title level={4} style={{ 
                      marginBottom: '15px',
                      color: '#2c3e50'
                    }}>
                      {project.title}
                    </Title>
                    
                    <Paragraph 
                      style={{ 
                        color: '#555',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        marginBottom: '20px'
                      }}
                      ellipsis={{ rows: 3 }}
                    >
                      {project.description}
                    </Paragraph>

                    <div style={{ marginBottom: '20px' }}>
                      <Space size={[8, 8]} wrap>
                        {project.technologies.map((tech) => (
                          <Tag 
                            key={tech}
                            color={
                              tech.toLowerCase().includes('react') ? 'blue' :
                              tech.toLowerCase().includes('node') ? 'green' :
                              tech.toLowerCase().includes('python') ? 'orange' :
                              tech.toLowerCase().includes('typescript') ? 'purple' :
                              'default'
                            }
                            style={{ fontSize: '12px', padding: '2px 8px' }}
                          >
                            {tech}
                          </Tag>
                        ))}
                      </Space>
                    </div>

                    <Space size="middle">
                      {project.githubUrl && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            type="text"
                            icon={<GithubOutlined />}
                            href={project.githubUrl}
                            target="_blank"
                            style={{ 
                              color: '#667eea',
                              border: '1px solid #667eea',
                              borderRadius: '20px'
                            }}
                          >
                            Code
                          </Button>
                        </motion.div>
                      )}
                      
                      {project.liveUrl && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            type="primary"
                            icon={<LinkOutlined />}
                            href={project.liveUrl}
                            target="_blank"
                            style={{ 
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              border: 'none',
                              borderRadius: '20px'
                            }}
                          >
                            Live Demo
                          </Button>
                        </motion.div>
                      )}
                      
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          type="text"
                          icon={<EyeOutlined />}
                          style={{ 
                            color: '#52c41a',
                            border: '1px solid #52c41a',
                            borderRadius: '20px'
                          }}
                        >
                          Details
                        </Button>
                      </motion.div>
                    </Space>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <Row justify="center" style={{ marginTop: '80px' }}>
          <Col xs={24} lg={16}>
            <motion.div variants={cardVariants}>
              <Card
                style={{
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: 'none',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  textAlign: 'center'
                }}
                bodyStyle={{ padding: '50px 30px' }}
              >
                <Title level={3} style={{ color: 'white', marginBottom: '20px' }}>
                  Let's Work Together
                </Title>
                <Paragraph style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '16px',
                  marginBottom: '30px'
                }}>
                  I'm always interested in new opportunities and exciting projects. 
                  Let's discuss how we can bring your ideas to life!
                </Paragraph>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="large"
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      borderRadius: '30px',
                      padding: '8px 40px',
                      height: 'auto',
                      fontSize: '16px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default ProjectsSection; 