# Appointment List Component

This component displays a comprehensive list of appointments with search functionality, pagination, and action buttons.

## Features

- **Search Functionality**: Search by patient name, date of birth, or contact details
- **Table Display**: Shows appointment details including:
  - Date & Time
  - Appointment Type (New/Follow Up)
  - Patient Name with avatar
  - Date of Birth
  - Contact Details
  - Provider Name
  - Reason for Visit
  - Status (Scheduled, Checked In, In Exam, Cancelled)
  - Action buttons (Start/Edit)
- **Status Badges**: Color-coded status indicators
- **Pagination**: Navigate through large lists of appointments
- **Responsive Design**: Works on different screen sizes

## Route

The component is accessible at `/provider/appointment`

## Usage

```tsx
import { AppointmentList } from './components/appointment';

function App() {
  return (
    <AppointmentList />
  );
}
```

## Status Colors

- **Scheduled**: Blue (#5980BF)
- **Checked In**: Purple (#E8A6FF)
- **In Exam**: Indigo (#6B58FF)
- **Cancelled**: Red (#EC2020)

## Actions

- **Start**: Begin the appointment process
- **Edit**: Modify appointment details

## Design

Based on the Figma design from [Custom EHR](https://www.figma.com/design/n0i4Y5IFb3V5a0sMnQvh0c/Custom-EHR?node-id=954-9286&t=bFymlIm7qYz6wqpM-4) 