import React, { useState } from 'react';
import { 
  Modal,
  Box, 
  Text, 
  TextInput, 
  Button, 
  Group, 
  Stack, 
  Select,
  Radio,
  Textarea,
  NumberInput,
  ActionIcon,
  Divider
} from '@mantine/core';
import { IconX, IconCalendar, IconSearch } from '@tabler/icons-react';
import { DateInput, TimeInput } from '@mantine/dates';

interface ScheduleAppointmentModalProps {
  opened: boolean;
  onClose: () => void;
}

interface AppointmentFormData {
  patientName: string;
  appointmentMode: 'In-Person' | 'Video Call' | 'Home';
  provider: string;
  appointmentType: string;
  estimatedAmount: number | undefined;
  date: Date | null;
  time: string;
  reasonForVisit: string;
}

const ScheduleAppointmentModal: React.FC<ScheduleAppointmentModalProps> = ({
  opened,
  onClose
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    appointmentMode: 'In-Person',
    provider: '',
    appointmentType: '',
    estimatedAmount: undefined,
    date: null,
    time: '',
    reasonForVisit: ''
  });

  const mockPatients = [
    'Heena West (F)',
    'Arlene McCoy (M)',
    'Esther Howard (M)',
    'Jane Cooper (F)',
    'Darrell Steward (M)'
  ];

  const mockProviders = [
    'Jacob Jones',
    'Bessie Cooper',
    'Wade Warren',
    'Darrell Steward',
    'Savannah Nguyen'
  ];

  const appointmentTypes = [
    'New',
    'Follow Up',
    'Consultation',
    'Emergency',
    'Routine Check'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Scheduling appointment:', formData);
    // Add your logic here to save the appointment
    onClose();
  };

  const handleInputChange = (field: keyof AppointmentFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="lg"
      title={
        <Group justify="space-between" w="100%">
          <Text size="lg" fw={500} c="dark.6">Schedule New Appointment</Text>
          <ActionIcon
            variant="subtle"
            onClick={onClose}
            style={{ color: '#727272' }}
          >
            <IconX size={20} />
          </ActionIcon>
        </Group>
      }
      styles={{
        header: {
          borderBottom: '1px solid #ECECEC',
          padding: '16px 16px 12px'
        },
        body: {
          padding: '8px 16px 24px'
        }
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="lg">
          {/* Patient Selection */}
          <Box>
            <Text size="xs" fw={500} c="dark.6" mb={8}>Patient Name</Text>
            <Select
              placeholder="Search & Select Patient"
              data={mockPatients}
              value={formData.patientName}
              onChange={(value) => handleInputChange('patientName', value)}
              rightSection={<IconSearch size={18} />}
              styles={{
                input: {
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                  fontSize: '12px',
                  color: '#979797'
                }
              }}
            />
          </Box>

          {/* Appointment Mode */}
          <Box>
            <Text size="xs" fw={500} c="dark.6" mb={10}>Appointment Mode</Text>
            <Group gap="xl">
              <Radio
                label="In-Person"
                value="In-Person"
                checked={formData.appointmentMode === 'In-Person'}
                onChange={(event) => handleInputChange('appointmentMode', event.currentTarget.value)}
                styles={{
                  label: {
                    fontSize: '14px',
                    color: '#565656'
                  }
                }}
              />
              <Radio
                label="Video Call"
                value="Video Call"
                checked={formData.appointmentMode === 'Video Call'}
                onChange={(event) => handleInputChange('appointmentMode', event.currentTarget.value)}
                styles={{
                  label: {
                    fontSize: '14px',
                    color: '#565656'
                  }
                }}
              />
              <Radio
                label="Home"
                value="Home"
                checked={formData.appointmentMode === 'Home'}
                onChange={(event) => handleInputChange('appointmentMode', event.currentTarget.value)}
                styles={{
                  label: {
                    fontSize: '14px',
                    color: '#565656'
                  }
                }}
              />
            </Group>
          </Box>

          {/* Provider and Appointment Type */}
          <Group gap="xl" grow>
            <Box>
              <Text size="xs" fw={500} c="dark.6" mb={8}>Provider</Text>
              <Select
                placeholder="Search Provider"
                data={mockProviders}
                value={formData.provider}
                onChange={(value) => handleInputChange('provider', value)}
                rightSection={<IconSearch size={18} />}
                styles={{
                  input: {
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                    fontSize: '12px',
                    color: '#979797'
                  }
                }}
              />
            </Box>
            <Box>
              <Text size="xs" fw={500} c="dark.6" mb={8}>Appointment Type</Text>
              <Select
                placeholder="Select Type"
                data={appointmentTypes}
                value={formData.appointmentType}
                onChange={(value) => handleInputChange('appointmentType', value)}
                rightSection={<IconSearch size={18} />}
                styles={{
                  input: {
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                    fontSize: '12px',
                    color: '#979797'
                  }
                }}
              />
            </Box>
          </Group>

          {/* Estimated Amount and Date/Time */}
          <Group gap="xl" grow>
            <Box>
              <Text size="xs" fw={500} c="dark.6" mb={8}>Estimated Amount ($)</Text>
              <NumberInput
                placeholder="Enter Amount"
                value={formData.estimatedAmount}
                onChange={(value) => handleInputChange('estimatedAmount', value)}
                min={0}
                styles={{
                  input: {
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                    fontSize: '12px',
                    color: '#979797'
                  }
                }}
              />
            </Box>
            <Box>
              <Text size="xs" fw={500} c="dark.6" mb={8}>Date & Time</Text>
              <Group gap="xs">
                <DateInput
                  placeholder="Choose Date"
                  value={formData.date}
                  onChange={(value) => handleInputChange('date', value)}
                  leftSection={<IconCalendar size={18} />}
                  styles={{
                    input: {
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                      fontSize: '12px',
                      color: '#979797'
                    }
                  }}
                />
                <TimeInput
                  placeholder="Time"
                  value={formData.time}
                  onChange={(event) => handleInputChange('time', event.currentTarget.value)}
                  styles={{
                    input: {
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                      fontSize: '12px',
                      color: '#979797'
                    }
                  }}
                />
              </Group>
            </Box>
          </Group>

          {/* Reason for Visit */}
          <Box>
            <Text size="xs" fw={500} c="dark.6" mb={8}>Reason for Visit</Text>
            <Textarea
              placeholder="Enter Reason"
              value={formData.reasonForVisit}
              onChange={(event) => handleInputChange('reasonForVisit', event.currentTarget.value)}
              minRows={3}
              styles={{
                input: {
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                  fontSize: '12px',
                  color: '#979797'
                }
              }}
            />
          </Box>

          <Divider />

          {/* Action Buttons */}
          <Group justify="flex-end">
            <Button
              type="submit"
              style={{
                backgroundColor: '#233853',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500
              }}
            >
              Save & Close
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};

export default ScheduleAppointmentModal; 