import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Container, Box, Text, Button, Group } from '@mantine/core';

function IndexPage() {
  return (
    <Container size="xl" py={40}>
      <Box ta="center">
        <Text size="xl" fw={600} mb="md">Welcome to Sample EMR</Text>
        <Text c="dimmed" mb="lg">Choose your access level to continue</Text>
        <Group justify="center" gap="md">
          <Button onClick={() => window.location.href = '/provider/settings'}>
            Provider Dashboard
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/auth/patient-login'}>
            Patient Login
          </Button>
        </Group>
      </Box>
    </Container>
  );
}

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
}); 