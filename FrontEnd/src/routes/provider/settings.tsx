import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { providerRoute } from '../provider';
import ProviderLayout from '../../components/ProviderLayout';

function ProviderSettingsPage() {
  return <ProviderLayout activeTab="settings" />;
}

export const providerSettingsRoute = createRoute({
  getParentRoute: () => providerRoute,
  path: '/settings',
  component: ProviderSettingsPage,
}); 