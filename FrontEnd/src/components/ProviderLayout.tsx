import React, { useState } from 'react';
import { Box, Container, Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import Navbar from './Navbar';
import ProviderAvailability from './provider/ProviderAvailability';
import ProviderScheduling from './provider/ProviderScheduling';
import Settings from './Settings';
import ProviderAvailabilitySettings from './provider/ProviderAvailabilitySettings';

interface ProviderLayoutProps {
  children?: React.ReactNode;
  activeTab?: string;
}

const ProviderLayout: React.FC<ProviderLayoutProps> = ({ 
  children, 
  activeTab = 'scheduling' 
}) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'scheduling':
        return <ProviderScheduling />;
      case 'dashboard':
        return (
          <Container size="xl" py={40}>
            <Box ta="center">
              <h2>Dashboard</h2>
              <p>Dashboard content will be implemented here</p>
            </Box>
          </Container>
        );
      case 'patients':
        return (
          <Container size="xl" py={40}>
            <Box ta="center">
              <h2>Patients</h2>
              <p>Patient management content will be implemented here</p>
            </Box>
          </Container>
        );
      case 'communications':
        return (
          <Container size="xl" py={40}>
            <Box ta="center">
              <h2>Communications</h2>
              <p>Communications content will be implemented here</p>
            </Box>
          </Container>
        );
      case 'billing':
        return (
          <Container size="xl" py={40}>
            <Box ta="center">
              <h2>Billing</h2>
              <p>Billing content will be implemented here</p>
            </Box>
          </Container>
        );
      case 'referral':
        return (
          <Container size="xl" py={40}>
            <Box ta="center">
              <h2>Referral</h2>
              <p>Referral content will be implemented here</p>
            </Box>
          </Container>
        );
      case 'reports':
        return (
          <Container size="xl" py={40}>
            <Box ta="center">
              <h2>Reports</h2>
              <p>Reports content will be implemented here</p>
            </Box>
          </Container>
        );
      case 'settings':
        return <ProviderAvailabilitySettings />;
      default:
        return children || (
          <Container size="xl" py={40}>
            <Box ta="center">
              <h2>Welcome to Sample EMR</h2>
              <p>Select a tab from the navigation to get started</p>
            </Box>
          </Container>
        );
    }
  };

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#f3f3f3' }}>
      <Navbar 
        onTabChange={handleTabChange} 
        activeTab={currentTab} 
      />
      
      {/* Search Bar */}
      <Box style={{ padding: '4px 16px', backgroundColor: '#F3F3F3' }}>
        <Group justify="flex-end">
          <Box style={{ 
            position: 'relative',
            width: 250,
            height: 34,
            backgroundColor: '#FFFFFF',
            borderRadius: 4,
            boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.16)'
          }}>
            <TextInput
              placeholder="Search by patient name, DOB"
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              styles={{
                input: {
                  border: 'none',
                  borderRadius: 4,
                  paddingLeft: 40,
                  fontSize: 14,
                  color: 'rgba(26, 26, 26, 0.5)',
                  backgroundColor: 'transparent'
                }
              }}
            />
            <IconSearch 
              size={24} 
              style={{ 
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(26, 26, 26, 0.5)'
              }} 
            />
          </Box>
        </Group>
      </Box>
      
      <Box style={{ minHeight: 'calc(100vh - 40px)' }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default ProviderLayout; 