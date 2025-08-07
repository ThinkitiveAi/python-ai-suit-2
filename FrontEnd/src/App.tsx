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

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <MantineProvider>
      <Outlet />
    </MantineProvider>
  ),
});

// Provider appointment route
const providerAppointmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/provider/appointment",
  component: AppointmentList,
});

// Index route - redirect to appointment
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => {
    // Redirect to appointment list
    window.location.href = "/provider/appointment";
    return <div>Redirecting to appointments...</div>;
  },
});

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  providerAppointmentRoute,
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
