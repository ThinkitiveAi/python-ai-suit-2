import React, { useState } from 'react';
import { 
  Box, 
  Text, 
  TextInput, 
  Button, 
  Group, 
  Stack, 
  Paper,
  Table,
  Badge,
  Divider,
  Avatar,
  Pagination
} from '@mantine/core';
import { IconSearch, IconPlus, IconEdit, IconPlayerPlay } from '@tabler/icons-react';
import ScheduleAppointmentModal from './ScheduleAppointmentModal';

interface Appointment {
  id: string;
  dateTime: string;
  appointmentType: string;
  patientName: string;
  dateOfBirth: string;
  contactDetails: string;
  providerName: string;
  reasonForVisit: string;
  status: 'Scheduled' | 'Checked In' | 'In Exam' | 'Cancelled';
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    dateTime: '02/24/21, 11:17am',
    appointmentType: 'New',
    patientName: 'Heena West (F)',
    dateOfBirth: '10-21-1959 (65)',
    contactDetails: '202-555-0188',
    providerName: 'Jacob Jones',
    reasonForVisit: 'Infection Disease',
    status: 'Scheduled'
  },
  {
    id: '2',
    dateTime: '02/26/21, 9:40pm',
    appointmentType: 'Follow Up',
    patientName: 'Arlene McCoy (M)',
    dateOfBirth: '10-21-1959 (42)',
    contactDetails: '202-555-0186',
    providerName: 'Bessie Cooper',
    reasonForVisit: 'Itching',
    status: 'Checked In'
  },
  {
    id: '3',
    dateTime: '03/07/21, 5:23am',
    appointmentType: 'New',
    patientName: 'Esther Howard (M)',
    dateOfBirth: '10-21-1959 (32)',
    contactDetails: '202-555-0172',
    providerName: 'Wade Warren',
    reasonForVisit: 'Insomnia',
    status: 'Scheduled'
  },
  {
    id: '4',
    dateTime: '03/01/21, 6:05am',
    appointmentType: 'Follow Up',
    patientName: 'Jane Cooper (F)',
    dateOfBirth: '10-21-1959 (24)',
    contactDetails: '202-555-0124',
    providerName: 'Darrell Steward',
    reasonForVisit: 'Blurred Vision',
    status: 'Cancelled'
  },
  {
    id: '5',
    dateTime: '03/10/21, 8:01pm',
    appointmentType: 'Follow Up',
    patientName: 'Darrell Steward (M)',
    dateOfBirth: '10-21-1959 (66)',
    contactDetails: '202-555-0198',
    providerName: 'Savannah Nguyen',
    reasonForVisit: 'Hearing Loss',
    status: 'Scheduled'
  }
];

const getStatusColor = (status: Appointment['status']) => {
  switch (status) {
    case 'Scheduled':
      return { color: '#5980BF', bg: '#F6F8FB', border: '#5980BF' };
    case 'Checked In':
      return { color: '#E8A6FF', bg: '#FEFAFF', border: '#E8A6FF' };
    case 'In Exam':
      return { color: '#6B58FF', bg: '#F7F6FF', border: '#6B58FF' };
    case 'Cancelled':
      return { color: '#EC2020', bg: '#FEF2F2', border: '#EC2020' };
    default:
      return { color: '#5980BF', bg: '#F6F8FB', border: '#5980BF' };
  }
};

const AppointmentList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;
  const [isScheduleAppointmentModalOpen, setIsScheduleAppointmentModalOpen] = useState(false);

  const filteredAppointments = mockAppointments.filter(appointment =>
    appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.dateOfBirth.includes(searchTerm) ||
    appointment.contactDetails.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAppointments = filteredAppointments.slice(startIndex, endIndex);

  const handleStartAppointment = (appointmentId: string) => {
    console.log('Starting appointment:', appointmentId);
  };

  const handleEditAppointment = (appointmentId: string) => {
    console.log('Editing appointment:', appointmentId);
  };

  return (
    <Box p={40} style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Paper shadow="sm" p="md" radius="md" style={{ backgroundColor: '#fff', maxWidth: '100%' }}>
        <Stack gap="md">
          {/* Header */}
          <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text size="lg" fw={500} c="dark.6">Appointments</Text>
            <Button
              leftSection={<IconPlus size={16} />}
              style={{ 
                backgroundColor: '#233853',
                color: '#fff'
              }}
              onClick={() => setIsScheduleAppointmentModalOpen(true)}
            >
              Schedule Appointment
            </Button>
          </Box>

          <Divider />

          {/* Search Bar */}
          <Box style={{ position: 'relative', maxWidth: '250px' }}>
            <TextInput
              placeholder="Search by patient name, DOB"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.currentTarget.value)}
              rightSection={<IconSearch size={18} />}
              styles={{
                input: {
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.16)',
                }
              }}
            />
          </Box>

          {/* Table */}
          <Box style={{ overflowX: 'auto' }}>
            <Table striped highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ backgroundColor: '#E7E7E7', color: '#565656', fontWeight: 500 }}>
                    Date & Time
                  </Table.Th>
                  <Table.Th style={{ backgroundColor: '#E7E7E7', color: '#565656', fontWeight: 500 }}>
                    Appointment Type
                  </Table.Th>
                  <Table.Th style={{ backgroundColor: '#E7E7E7', color: '#565656', fontWeight: 500 }}>
                    Patient Name
                  </Table.Th>
                  <Table.Th style={{ backgroundColor: '#E7E7E7', color: '#565656', fontWeight: 500 }}>
                    Date of Birth
                  </Table.Th>
                  <Table.Th style={{ backgroundColor: '#E7E7E7', color: '#565656', fontWeight: 500 }}>
                    Contact Details
                  </Table.Th>
                  <Table.Th style={{ backgroundColor: '#E7E7E7', color: '#565656', fontWeight: 500 }}>
                    Provider Name
                  </Table.Th>
                  <Table.Th style={{ backgroundColor: '#E7E7E7', color: '#565656', fontWeight: 500 }}>
                    Reason for Visit
                  </Table.Th>
                  <Table.Th style={{ backgroundColor: '#E7E7E7', color: '#565656', fontWeight: 500 }}>
                    Status
                  </Table.Th>
                  <Table.Th style={{ backgroundColor: '#E7E7E7', color: '#565656', fontWeight: 500 }}>
                    Action
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {currentAppointments.map((appointment) => {
                  const statusColors = getStatusColor(appointment.status);
                  return (
                    <Table.Tr key={appointment.id}>
                      <Table.Td style={{ color: '#727272' }}>
                        {appointment.dateTime}
                      </Table.Td>
                      <Table.Td style={{ color: '#727272' }}>
                        {appointment.appointmentType}
                      </Table.Td>
                      <Table.Td>
                        <Group gap="sm">
                          <Avatar size="sm" color="blue" radius="xl">
                            {appointment.patientName.charAt(0)}
                          </Avatar>
                          <Text size="sm" fw={500} c="dark.6">
                            {appointment.patientName}
                          </Text>
                        </Group>
                      </Table.Td>
                      <Table.Td style={{ color: '#727272' }}>
                        {appointment.dateOfBirth}
                      </Table.Td>
                      <Table.Td style={{ color: '#727272' }}>
                        {appointment.contactDetails}
                      </Table.Td>
                      <Table.Td style={{ color: '#727272' }}>
                        {appointment.providerName}
                      </Table.Td>
                      <Table.Td style={{ color: '#8C8C8C' }}>
                        {appointment.reasonForVisit}
                      </Table.Td>
                      <Table.Td>
                        <Badge
                          variant="light"
                          style={{
                            backgroundColor: statusColors.bg,
                            color: statusColors.color,
                            border: `1px solid ${statusColors.border}`,
                            borderRadius: '100px',
                            padding: '8px 10px',
                            fontSize: '12px',
                            fontWeight: 500
                          }}
                        >
                          {appointment.status}
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        <Group gap="xs">
                          <Button
                            size="xs"
                            variant="light"
                            leftSection={<IconPlayerPlay size={14} />}
                            onClick={() => handleStartAppointment(appointment.id)}
                            style={{
                              backgroundColor: '#E5F0FF',
                              color: '#233853',
                              border: '1px solid #233853',
                              fontSize: '13px',
                              fontWeight: 500
                            }}
                          >
                            Start
                          </Button>
                          <Divider orientation="vertical" />
                          <Button
                            size="xs"
                            variant="light"
                            leftSection={<IconEdit size={14} />}
                            onClick={() => handleEditAppointment(appointment.id)}
                            style={{
                              backgroundColor: '#E5F0FF',
                              color: '#233853',
                              border: '1px solid #233853',
                              fontSize: '13px',
                              fontWeight: 500
                            }}
                          >
                            Edit
                          </Button>
                        </Group>
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
              </Table.Tbody>
            </Table>
          </Box>

          {/* Pagination */}
          <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 16px' }}>
            <Text size="xs" c="dimmed">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredAppointments.length)} of {filteredAppointments.length} entries
            </Text>
            <Pagination
              total={totalPages}
              value={currentPage}
              onChange={setCurrentPage}
              size="sm"
              withEdges
            />
          </Box>
        </Stack>
      </Paper>

      <ScheduleAppointmentModal
        opened={isScheduleAppointmentModalOpen}
        onClose={() => setIsScheduleAppointmentModalOpen(false)}
      />
    </Box>
  );
};

export default AppointmentList; 