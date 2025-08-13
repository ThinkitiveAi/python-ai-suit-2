import React from 'react';
import { createRoute, Outlet } from '@tanstack/react-router';
import { rootRoute } from './__root';
import ProviderLayout from '../components/ProviderLayout';

function ProviderLayoutWrapper() {
  return <ProviderLayout activeTab="dashboard" />;
}

export const providerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/provider',
  component: ProviderLayoutWrapper,
}); 