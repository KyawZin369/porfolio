import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Row, Col, Card, Tag, Timeline } from 'antd';
import { FolderOutlined, TeamOutlined } from '@ant-design/icons';
import { usePortfolio } from '../contexts/PortfolioContext';

const { Title, Text } = Typography;

const ExperienceSection: React.FC = () => {
  const { state } = usePortfolio();
  const { experience } = state;

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div style={{ 
      padding: '100px 5%', 
      background: '#f8f9fa',
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
                Work Experience
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
                My professional journey and key accomplishments
              </Text>
            </motion.div>
          </Col>
        </Row>

        <Row justify="center">
          <Col xs={24} lg={18}>
            <motion.div variants={itemVariants}>
              <Timeline
                mode="left"
                style={{ padding: '20px 0' }}
                items={experience.map((exp, index) => ({
                  color: index === 0 ? '#667eea' : '#52c41a',
                  dot: index === 0 ? <FolderOutlined style={{ fontSize: '16px' }} /> : <TeamOutlined style={{ fontSize: '16px' }} />,
                  children: (
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        style={{
                          borderRadius: '15px',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                          border: 'none',
                          marginBottom: '20px'
                        }}
                        bodyStyle={{ padding: '30px' }}
                      >
                        <div style={{ marginBottom: '20px' }}>
                          <Title level={3} style={{ 
                            margin: 0, 
                            color: '#2c3e50',
                            fontSize: '1.4rem'
                          }}>
                            {exp.position}
                          </Title>
                          <Text style={{ 
                            fontSize: '16px', 
                            color: '#667eea',
                            fontWeight: 500,
                            display: 'block',
                            marginBottom: '5px'
                          }}>
                            {exp.company}
                          </Text>
                          <Text style={{ color: '#7f8c8d', fontSize: '14px' }}>
                            {exp.duration}
                          </Text>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                          <ul style={{ 
                            paddingLeft: '0',
                            listStyle: 'none',
                            margin: 0
                          }}>
                            {exp.description.map((desc, descIndex) => (
                              <li key={descIndex} style={{
                                color: '#555',
                                fontSize: '15px',
                                lineHeight: '1.6',
                                marginBottom: '8px',
                                paddingLeft: '20px',
                                position: 'relative'
                              }}>
                                <span style={{
                                  position: 'absolute',
                                  left: '0',
                                  top: '0.4em',
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '50%',
                                  background: '#667eea'
                                }} />
                                {desc}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <Text style={{ 
                            color: '#7f8c8d',
                            fontSize: '13px',
                            marginBottom: '10px',
                            display: 'block'
                          }}>
                            Technologies Used:
                          </Text>
                          <div>
                            {exp.technologies.map((tech) => (
                              <Tag 
                                key={tech}
                                color={
                                  tech.toLowerCase().includes('react') ? 'blue' :
                                  tech.toLowerCase().includes('node') ? 'green' :
                                  tech.toLowerCase().includes('python') ? 'orange' :
                                  tech.toLowerCase().includes('typescript') ? 'purple' :
                                  'default'
                                }
                                style={{ 
                                  fontSize: '12px',
                                  padding: '2px 8px',
                                  marginBottom: '5px'
                                }}
                              >
                                {tech}
                              </Tag>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )
                }))}
              />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default ExperienceSection; 