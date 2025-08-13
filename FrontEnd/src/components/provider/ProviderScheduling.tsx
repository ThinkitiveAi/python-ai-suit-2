import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Table,
  Badge,
  ActionIcon,
  Pagination,
  Select,
  Switch,
  Divider,
  Avatar,
} from '@mantine/core';
import { 
  IconPlus, 
  IconEdit, 
  IconPlayerPlay,
  IconChevronDown
} from '@tabler/icons-react';

interface Appointment {
  id: string;
  dateTime: string;
  appointmentType: 'New' | 'Follow Up';
  patientName: string;
  patientGender: 'M' | 'F';
  dateOfBirth: string;
  age: number;
  contactDetails: string;
  providerName: string;
  reasonForVisit: string;
  status: 'Scheduled' | 'Checked In' | 'In Exam' | 'Cancelled';
}

const ProviderScheduling: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsView, setAppointmentsView] = useState(true);

  const appointments: Appointment[] = [
    {
      id: '1',
      dateTime: '02/24/21, 11:17am',
      appointmentType: 'New',
      patientName: 'Heena West',
      patientGender: 'F',
      dateOfBirth: '10-21-1959',
      age: 65,
      contactDetails: '202-555-0188',
      providerName: 'Jacob Jones',
      reasonForVisit: 'Infection Disease',
      status: 'Scheduled'
    },
    {
      id: '2',
      dateTime: '02/26/21, 9:40pm',
      appointmentType: 'Follow Up',
      patientName: 'Arlene McCoy',
      patientGender: 'M',
      dateOfBirth: '10-21-1959',
      age: 42,
      contactDetails: '202-555-0186',
      providerName: 'Bessie Cooper',
      reasonForVisit: 'Itching',
      status: 'Checked In'
    },
    {
      id: '3',
      dateTime: '03/07/21, 5:23am',
      appointmentType: 'New',
      patientName: 'Esther Howard',
      patientGender: 'M',
      dateOfBirth: '10-21-1959',
      age: 32,
      contactDetails: '202-555-0172',
      providerName: 'Wade Warren',
      reasonForVisit: 'Insomnia',
      status: 'Scheduled'
    },
    {
      id: '4',
      dateTime: '03/01/21, 6:05am',
      appointmentType: 'Follow Up',
      patientName: 'Jane Cooper',
      patientGender: 'F',
      dateOfBirth: '10-21-1959',
      age: 24,
      contactDetails: '202-555-0124',
      providerName: 'Darrell Steward',
      reasonForVisit: 'Blurred Vision',
      status: 'Cancelled'
    },
    {
      id: '5',
      dateTime: '03/10/21, 8:01pm',
      appointmentType: 'Follow Up',
      patientName: 'Darrell Steward',
      patientGender: 'M',
      dateOfBirth: '10-21-1959',
      age: 66,
      contactDetails: '202-555-0198',
      providerName: 'Savannah Nguyen',
      reasonForVisit: 'Hearing Loss',
      status: 'Scheduled'
    },
    {
      id: '6',
      dateTime: '03/03/21, 10:48am',
      appointmentType: 'New',
      patientName: 'Esther Howard',
      patientGender: 'F',
      dateOfBirth: '10-21-1959',
      age: 12,
      contactDetails: '202-555-0164',
      providerName: 'Arlene McCoy',
      reasonForVisit: 'Headache',
      status: 'Checked In'
    },
    {
      id: '7',
      dateTime: '02/26/21, 9:40pm',
      appointmentType: 'Follow Up',
      patientName: 'Bessie Cooper',
      patientGender: 'M',
      dateOfBirth: '10-21-1959',
      age: 32,
      contactDetails: '202-555-0175',
      providerName: 'Darlene Robertson',
      reasonForVisit: 'Stomach Pain',
      status: 'In Exam'
    },
    {
      id: '8',
      dateTime: '03/03/21, 10:48am',
      appointmentType: 'Follow Up',
      patientName: 'Bessie Cooper',
      patientGender: 'M',
      dateOfBirth: '10-21-1959',
      age: 42,
      contactDetails: '202-555-0186',
      providerName: 'Bessie Cooper',
      reasonForVisit: 'Itching',
      status: 'Checked In'
    },
    {
      id: '9',
      dateTime: '02/24/21, 11:17am',
      appointmentType: 'New',
      patientName: 'Arlene McCoy',
      patientGender: 'M',
      dateOfBirth: '10-21-1959',
      age: 32,
      contactDetails: '202-555-0172',
      providerName: 'Wade Warren',
      reasonForVisit: 'Insomnia',
      status: 'In Exam'
    },
    {
      id: '10',
      dateTime: '03/08/21, 8:01pm',
      appointmentType: 'Follow Up',
      patientName: 'Esther Howard',
      patientGender: 'M',
      dateOfBirth: '10-21-1959',
      age: 24,
      contactDetails: '202-555-0123',
      providerName: 'Darrell Steward',
      reasonForVisit: 'Blurred Vision',
      status: 'Cancelled'
    },
    {
      id: '11',
      dateTime: '03/10/21, 11:43am',
      appointmentType: 'New',
      patientName: 'Jane Cooper',
      patientGender: 'F',
      dateOfBirth: '10-21-1959',
      age: 66,
      contactDetails: '202-555-0198',
      providerName: 'Savannah Nguyen',
      reasonForVisit: 'Hearing Loss',
      status: 'Scheduled'
    },
    {
      id: '12',
      dateTime: '03/07/21, 12:27pm',
      appointmentType: 'Follow Up',
      patientName: 'Darrell Steward',
      patientGender: 'M',
      dateOfBirth: '10-21-1959',
      age: 12,
      contactDetails: '202-555-0165',
      providerName: 'Arlene McCoy',
      reasonForVisit: 'Headache',
      status: 'Checked In'
    },
    {
      id: '13',
      dateTime: '03/05/21, 6:16pm',
      appointmentType: 'Follow Up',
      patientName: 'Bessie Cooper',
      patientGender: 'M',
      dateOfBirth: '10-21-1959',
      age: 37,
      contactDetails: '202-555-0119',
      providerName: 'Robert Fox',
      reasonForVisit: 'Eye Redness',
      status: 'Cancelled'
    }
  ];

  const getStatusBadgeProps = (status: Appointment['status']) => {
    switch (status) {
      case 'Scheduled':
        return {
          color: '#5980BF',
          backgroundColor: '#F6F8FB',
          borderColor: '#5980BF'
        };
      case 'Checked In':
        return {
          color: '#E8A6FF',
          backgroundColor: '#FEFAFF',
          borderColor: '#E8A6FF'
        };
      case 'In Exam':
        return {
          color: '#6B58FF',
          backgroundColor: '#F7F6FF',
          borderColor: '#6B58FF'
        };
      case 'Cancelled':
        return {
          color: '#EC2020',
          backgroundColor: '#FEF2F2',
          borderColor: '#EC2020'
        };
      default:
        return {
          color: '#5980BF',
          backgroundColor: '#F6F8FB',
          borderColor: '#5980BF'
        };
    }
  };

  const handleScheduleAppointment = () => {
    console.log('Schedule new appointment');
  };

  const handleStartAppointment = (appointmentId: string) => {
    console.log('Start appointment:', appointmentId);
  };

  const handleEditAppointment = (appointmentId: string) => {
    console.log('Edit appointment:', appointmentId);
  };

  const itemsPerPage = 13;
  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, appointments.length);
  const currentAppointments = appointments.slice(startIndex, endIndex);

  return (
    <Container size="xl" style={{ padding: 16 }}>
      <Paper 
        shadow="md" 
        p={16} 
        radius={4}
        style={{ 
          backgroundColor: '#FFFFFF',
          boxShadow: '1px 1px 8px 0px rgba(0, 0, 0, 0.25)'
        }}
      >
        <Stack gap={16}>
          {/* Header with Toggle and Schedule Button */}
          <Group justify="space-between" align="center">
            <Box style={{ 
              backgroundColor: '#F8F8F8',
              borderRadius: 4,
              padding: 2
            }}>
              <Group gap={0}>
                <Button
                  variant={appointmentsView ? "filled" : "subtle"}
                  size="xs"
                  style={{
                    backgroundColor: appointmentsView ? '#233853' : 'transparent',
                    color: appointmentsView ? '#FFFFFF' : '#233853',
                    border: 'none',
                    borderRadius: 2
                  }}
                  onClick={() => setAppointmentsView(true)}
                >
                  Appointments
                </Button>
              </Group>
            </Box>

            <Button
              leftSection={<IconPlus size={16} />}
              style={{
                backgroundColor: '#233853',
                color: '#FFFFFF',
                fontSize: 12,
                fontWeight: 700,
                padding: '10px',
                height: 32,
                border: 'none'
              }}
              onClick={handleScheduleAppointment}
            >
              Schedule Appointment
            </Button>
          </Group>

          <Divider color="#D7D7D7" />

          {/* Appointments Table */}
          <Box style={{ overflowX: 'auto' }}>
            <Table
              striped={false}
              highlightOnHover={false}
              withTableBorder={false}
              withColumnBorders={true}
              style={{ 
                minWidth: 1600,
                borderCollapse: 'separate',
                borderSpacing: 0
              }}
            >
              <Table.Thead style={{ backgroundColor: '#E7E7E7' }}>
                <Table.Tr>
                  <Table.Th style={{ 
                    width: 193,
                    padding: '0px 12px',
                    borderBottom: '1px solid #D8D8D8',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#565656'
                  }}>
                    Date & Time
                  </Table.Th>
                  <Table.Th style={{ 
                    width: 166,
                    padding: '0px 12px',
                    borderBottom: '1px solid #D8D8D8',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#565656'
                  }}>
                    Appointment Type
                  </Table.Th>
                  <Table.Th style={{ 
                    width: 218,
                    padding: '0px 8px',
                    borderBottom: '1px solid #D8D8D8',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#565656'
                  }}>
                    Patient Name
                  </Table.Th>
                  <Table.Th style={{ 
                    width: 138,
                    padding: '0px 12px',
                    borderBottom: '1px solid #D8D8D8',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#565656'
                  }}>
                    Date of Birth
                  </Table.Th>
                  <Table.Th style={{ 
                    width: 125,
                    padding: '0px 12px',
                    borderBottom: '1px solid #D8D8D8',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#565656'
                  }}>
                    Contact Details
                  </Table.Th>
                  <Table.Th style={{ 
                    width: 138,
                    padding: '0px 12px',
                    borderBottom: '1px solid #D8D8D8',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#565656'
                  }}>
                    Provider Name
                  </Table.Th>
                  <Table.Th style={{ 
                    width: 137,
                    padding: '0px 12px',
                    borderBottom: '1px solid #D8D8D8',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#565656'
                  }}>
                    Reason for Visit
                  </Table.Th>
                  <Table.Th style={{ 
                    padding: '0px 12px',
                    borderBottom: '1px solid #D8D8D8',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#565656'
                  }}>
                    Status
                  </Table.Th>
                  <Table.Th style={{ 
                    padding: '0px 12px',
                    borderBottom: '1px solid #D8D8D8',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#565656'
                  }}>
                    Action
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {currentAppointments.map((appointment) => {
                  const statusProps = getStatusBadgeProps(appointment.status);
                  return (
                    <Table.Tr key={appointment.id} style={{ backgroundColor: '#FFFFFF' }}>
                      <Table.Td style={{ 
                        padding: '0px 12px',
                        borderBottom: '1px solid #D8D8D8',
                        fontSize: 14,
                        color: '#727272'
                      }}>
                        {appointment.dateTime}
                      </Table.Td>
                      <Table.Td style={{ 
                        padding: '0px 12px',
                        borderBottom: '1px solid #D8D8D8',
                        fontSize: 14,
                        color: '#727272',
                        textAlign: 'center'
                      }}>
                        {appointment.appointmentType}
                      </Table.Td>
                      <Table.Td style={{ 
                        padding: '0px 12px',
                        borderBottom: '1px solid #D8D8D8',
                        fontSize: 14,
                        fontWeight: 500,
                        color: '#233853'
                      }}>
                        {appointment.patientName} ({appointment.patientGender})
                      </Table.Td>
                      <Table.Td style={{ 
                        padding: '0px 12px',
                        borderBottom: '1px solid #D8D8D8',
                        fontSize: 14,
                        color: '#727272'
                      }}>
                        {appointment.dateOfBirth} ({appointment.age})
                      </Table.Td>
                      <Table.Td style={{ 
                        padding: '0px 12px',
                        borderBottom: '1px solid #D8D8D8',
                        fontSize: 14,
                        color: '#727272',
                        textAlign: 'center'
                      }}>
                        {appointment.contactDetails}
                      </Table.Td>
                      <Table.Td style={{ 
                        padding: '0px 12px',
                        borderBottom: '1px solid #D8D8D8',
                        fontSize: 14,
                        color: '#727272'
                      }}>
                        {appointment.providerName}
                      </Table.Td>
                      <Table.Td style={{ 
                        padding: '0px 12px',
                        borderBottom: '1px solid #D8D8D8',
                        fontSize: 14,
                        color: '#8C8C8C'
                      }}>
                        {appointment.reasonForVisit}
                      </Table.Td>
                      <Table.Td style={{ 
                        padding: '0px 12px',
                        borderBottom: '1px solid #D8D8D8'
                      }}>
                        <Badge
                          style={{
                            backgroundColor: statusProps.backgroundColor,
                            color: statusProps.color,
                            border: `1px solid ${statusProps.borderColor}`,
                            borderRadius: 100,
                            fontSize: 12,
                            fontWeight: 500,
                            padding: '8px 10px'
                          }}
                        >
                          {appointment.status}
                        </Badge>
                      </Table.Td>
                      <Table.Td style={{ 
                        padding: '10px 12px',
                        borderBottom: '1px solid #D8D8D8'
                      }}>
                        <Group gap={8} align="center">
                          <Button
                            size="xs"
                            leftSection={<IconPlayerPlay size={16} />}
                            style={{
                              backgroundColor: '#E5F0FF',
                              border: '1px solid #233853',
                              color: '#233853',
                              borderRadius: 4,
                              fontWeight: 500,
                              fontSize: 13,
                              padding: '0px 6px 0px 4px',
                              height: 26
                            }}
                            onClick={() => handleStartAppointment(appointment.id)}
                          >
                            Start
                          </Button>
                          <Box style={{ 
                            width: 0,
                            height: '100%',
                            borderLeft: '1px solid #F0F0F0'
                          }} />
                          <Button
                            size="xs"
                            leftSection={<IconEdit size={16} />}
                            style={{
                              backgroundColor: '#E5F0FF',
                              border: '1px solid #233853',
                              color: '#233853',
                              borderRadius: 4,
                              fontWeight: 500,
                              fontSize: 13,
                              padding: '0px 6px 0px 4px',
                              height: 26
                            }}
                            onClick={() => handleEditAppointment(appointment.id)}
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
          <Group justify="space-between" align="center" style={{ padding: '4px 16px' }}>
            <Text style={{ 
              fontSize: 12,
              color: '#464646'
            }}>
              Showing {startIndex + 1} to {endIndex} of {appointments.length} entries
            </Text>
            
            <Group gap={8} align="center">
              <Button
                variant="subtle"
                size="xs"
                disabled={currentPage === 1}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: 'rgba(118, 118, 118, 0.64)',
                  border: 'none',
                  boxShadow: '0px 0px 6px 0px rgba(86, 86, 86, 0.25)',
                  borderRadius: 4,
                  fontSize: 12,
                  padding: '10px 18px',
                  height: 24
                }}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </Button>
              
              <Group gap={8}>
                {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
                  const pageNum = index + 1;
                  const isActive = pageNum === currentPage;
                  return (
                    <Button
                      key={pageNum}
                      variant={isActive ? "filled" : "subtle"}
                      size="xs"
                      style={{
                        backgroundColor: isActive ? '#233853' : 'transparent',
                        color: isActive ? '#FFFFFF' : '#8C8C8C',
                        border: 'none',
                        borderRadius: 2,
                        fontSize: 12,
                        width: 24,
                        height: 24,
                        padding: 6
                      }}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum.toString().padStart(2, '0')}
                    </Button>
                  );
                })}
              </Group>
              
              <Button
                variant="subtle"
                size="xs"
                disabled={currentPage === totalPages}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#1A1A1A',
                  border: 'none',
                  boxShadow: '0px 0px 6px 0px rgba(86, 86, 86, 0.25)',
                  borderRadius: 4,
                  fontSize: 12,
                  padding: '0px 18px',
                  height: 24
                }}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            </Group>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ProviderScheduling; 