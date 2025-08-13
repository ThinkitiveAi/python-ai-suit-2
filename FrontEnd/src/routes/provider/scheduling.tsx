import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { providerRoute } from '../provider';
import ProviderLayout from '../../components/ProviderLayout';

function ProviderSchedulingPage() {
  return <ProviderLayout activeTab="scheduling" />;
}

export const providerSchedulingRoute = createRoute({
  getParentRoute: () => providerRoute,
  path: '/scheduling',
  component: ProviderSchedulingPage,
}); 