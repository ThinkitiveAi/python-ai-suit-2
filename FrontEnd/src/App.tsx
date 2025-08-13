import React from "react";
import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from "@tanstack/react-router";
import { MantineProvider } from "@mantine/core";
import { AppointmentList } from './components/appointment';
import ProviderLayout from './components/ProviderLayout';

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <MantineProvider>
      <Outlet />
    </MantineProvider>
  ),
});

// Provider routes
const providerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/provider",
  component: () => <ProviderLayout activeTab="dashboard" />,
});

const providerSettingsRoute = createRoute({
  getParentRoute: () => providerRoute,
  path: "/settings",
  component: () => <ProviderLayout activeTab="settings" />,
});

const providerSchedulingRoute = createRoute({
  getParentRoute: () => providerRoute,
  path: "/scheduling", 
  component: () => <ProviderLayout activeTab="scheduling" />,
});

const providerDashboardRoute = createRoute({
  getParentRoute: () => providerRoute,
  path: "/dashboard",
  component: () => <ProviderLayout activeTab="dashboard" />,
});

// Provider appointment route
const providerAppointmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/provider/appointment",
  component: AppointmentList,
});

// Index route - redirect to provider settings
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => {
    // Redirect to provider settings
    window.location.href = "/provider/settings";
    return <div>Redirecting to provider settings...</div>;
  },
});

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  providerAppointmentRoute,
  providerRoute.addChildren([
    providerSettingsRoute,
    providerSchedulingRoute,
    providerDashboardRoute,
  ]),
]);

// Create the router
const router = createRouter({ routeTree });

// Declare the router instance for TypeScript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
