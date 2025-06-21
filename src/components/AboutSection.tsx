import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Row, Col, Card, Divider } from 'antd';
import { UserOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { usePortfolio } from '../contexts/PortfolioContext';

const { Title, Paragraph, Text } = Typography;

const AboutSection: React.FC = () => {
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
                About Me
              </Title>
              <div style={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto',
                borderRadius: '2px'
              }} />
            </motion.div>
          </Col>
        </Row>

        <Row gutter={[40, 40]} justify="center">
          <Col xs={24} lg={12}>
            <motion.div variants={itemVariants}>
              <Card
                style={{ 
                  height: '100%',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: 'none'
                }}
                bodyStyle={{ padding: '40px' }}
              >
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                    fontSize: '48px',
                    color: 'white'
                  }}>
                    <UserOutlined />
                  </div>
                  <Title level={3} style={{ marginBottom: '10px', color: '#2c3e50' }}>
                    {personalInfo.name}
                  </Title>
                  <Text style={{ fontSize: '16px', color: '#7f8c8d' }}>
                    {personalInfo.title}
                  </Text>
                </div>

                <Divider />

                <div style={{ marginTop: '30px' }}>
                  <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                    <MailOutlined style={{ marginRight: '10px', color: '#667eea' }} />
                    <Text>{personalInfo.email}</Text>
                  </div>
                  <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                    <PhoneOutlined style={{ marginRight: '10px', color: '#667eea' }} />
                    <Text>{personalInfo.phone}</Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <EnvironmentOutlined style={{ marginRight: '10px', color: '#667eea' }} />
                    <Text>{personalInfo.location}</Text>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} lg={12}>
            <motion.div variants={itemVariants}>
              <Card
                style={{ 
                  height: '100%',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: 'none'
                }}
                bodyStyle={{ padding: '40px' }}
              >
                <Title level={3} style={{ marginBottom: '30px', color: '#2c3e50' }}>
                  Who I Am
                </Title>
                <Paragraph style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.8',
                  color: '#555',
                  marginBottom: '30px'
                }}>
                  {personalInfo.summary}
                </Paragraph>
                <Paragraph style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.8',
                  color: '#555'
                }}>
                  I'm passionate about creating digital experiences that are not only visually appealing 
                  but also functional and user-friendly. My journey in web development has equipped me 
                  with a diverse skill set and the ability to adapt to new technologies quickly.
                </Paragraph>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* <Row gutter={[30, 30]} style={{ marginTop: '80px' }} justify="center">
          <Col xs={12} sm={6}>
            <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
              <Card style={{ 
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                border: 'none'
              }}>
                <Statistic
                  title="Projects Completed"
                  value={projects.length}
                  valueStyle={{ 
                    color: '#667eea',
                    fontSize: '2.5rem',
                    fontWeight: 'bold'
                  }}
                  suffix="+"
                />
              </Card>
            </motion.div>
          </Col>
          <Col xs={12} sm={6}>
            <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
              <Card style={{ 
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                border: 'none'
              }}>
                <Statistic
                  title="Years Experience"
                  value={2}
                  valueStyle={{ 
                    color: '#764ba2',
                    fontSize: '2.5rem',
                    fontWeight: 'bold'
                  }}
                  suffix="+"
                />
              </Card>
            </motion.div>
          </Col>
          <Col xs={12} sm={6}>
            <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
              <Card style={{ 
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                border: 'none'
              }}>
                <Statistic
                  title="Technologies"
                  value={10}
                  valueStyle={{ 
                    color: '#52c41a',
                    fontSize: '2.5rem',
                    fontWeight: 'bold'
                  }}
                  suffix="+"
                />
              </Card>
            </motion.div>
          </Col>
          <Col xs={12} sm={6}>
            <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
              <Card style={{ 
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                border: 'none'
              }}>
                <Statistic
                  title="Happy Clients"
                  value={15}
                  valueStyle={{ 
                    color: '#fa8c16',
                    fontSize: '2.5rem',
                    fontWeight: 'bold'
                  }}
                  suffix="+"
                />
              </Card>
            </motion.div>
          </Col>
        </Row> */}
      </motion.div>
    </div>
  );
};

export default AboutSection; 