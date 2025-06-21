import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Row, Col, Card, Timeline } from 'antd';
import { BookOutlined, TrophyOutlined, CalendarOutlined } from '@ant-design/icons';
import { usePortfolio } from '../contexts/PortfolioContext';

const { Title, Text, Paragraph } = Typography;

const EducationSection: React.FC = () => {
  const { state } = usePortfolio();
  const { education } = state;

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
                Education
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
                My academic journey and continuous learning path
              </Text>
            </motion.div>
          </Col>
        </Row>

        <Row justify="center">
          <Col xs={24} lg={16}>
            <motion.div variants={itemVariants}>
              <Timeline
                mode="left"
                style={{ padding: '20px 0' }}
                items={education.map((edu, index) => ({
                  color: index === 0 ? '#667eea' : '#52c41a',
                  dot: index === 0 ? <TrophyOutlined style={{ fontSize: '16px' }} /> : <BookOutlined style={{ fontSize: '16px' }} />,
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
                        <div style={{ marginBottom: '15px' }}>
                          <Title level={3} style={{ 
                            margin: 0, 
                            color: '#2c3e50',
                            fontSize: '1.4rem'
                          }}>
                            {edu.degree}
                          </Title>
                          <Text style={{ 
                            fontSize: '16px', 
                            color: '#667eea',
                            fontWeight: 500
                          }}>
                            {edu.institution}
                          </Text>
                        </div>

                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          marginBottom: '15px',
                          gap: '20px'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <CalendarOutlined style={{ marginRight: '8px', color: '#7f8c8d' }} />
                            <Text style={{ color: '#7f8c8d' }}>{edu.year}</Text>
                          </div>
                          {edu.gpa && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <TrophyOutlined style={{ marginRight: '8px', color: '#fa8c16' }} />
                              <Text style={{ color: '#fa8c16', fontWeight: 500 }}>
                                GPA: {edu.gpa}
                              </Text>
                            </div>
                          )}
                        </div>

                        <Paragraph style={{ 
                          color: '#555',
                          fontSize: '15px',
                          lineHeight: '1.6',
                          margin: 0
                        }}>
                          {edu.description}
                        </Paragraph>
                      </Card>
                    </motion.div>
                  )
                }))}
              />
            </motion.div>
          </Col>
        </Row>

        {/* Achievements Section */}
        <Row gutter={[30, 30]} style={{ marginTop: '80px' }}>
          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <Card
                style={{
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: 'none',
                  textAlign: 'center',
                  height: '100%'
                }}
                bodyStyle={{ padding: '40px 30px' }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: '32px',
                  color: 'white'
                }}>
                  <TrophyOutlined />
                </div>
                <Title level={4} style={{ color: '#2c3e50', marginBottom: '15px' }}>
                  Academic Excellence
                </Title>
                <Text style={{ color: '#7f8c8d', fontSize: '15px' }}>
                  Graduated Magna Cum Laude with outstanding academic performance
                </Text>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <Card
                style={{
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: 'none',
                  textAlign: 'center',
                  height: '100%'
                }}
                bodyStyle={{ padding: '40px 30px' }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #52c41a 0%, #389e0d 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: '32px',
                  color: 'white'
                }}>
                  <BookOutlined />
                </div>
                <Title level={4} style={{ color: '#2c3e50', marginBottom: '15px' }}>
                  Continuous Learning
                </Title>
                <Text style={{ color: '#7f8c8d', fontSize: '15px' }}>
                  Always updating skills through courses, certifications, and self-study
                </Text>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <Card
                style={{
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: 'none',
                  textAlign: 'center',
                  height: '100%'
                }}
                bodyStyle={{ padding: '40px 30px' }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #fa8c16 0%, #d46b08 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: '32px',
                  color: 'white'
                }}>
                  📚
                </div>
                <Title level={4} style={{ color: '#2c3e50', marginBottom: '15px' }}>
                  Research & Projects
                </Title>
                <Text style={{ color: '#7f8c8d', fontSize: '15px' }}>
                  Engaged in research projects and practical applications during studies
                </Text>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default EducationSection; 