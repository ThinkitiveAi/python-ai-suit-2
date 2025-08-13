import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Title,
  Text,
  Button,
  Select,
  Stack,
  Group,
  Grid,
  ActionIcon,
  Divider,
  Card,
  TextInput,
} from '@mantine/core';
import { DateInput, TimeInput } from '@mantine/dates';
import { 
  IconClock, 
  IconCalendar, 
  IconTrash, 
  IconPlus,
  IconChevronDown,
} from '@tabler/icons-react';

interface DayAvailability {
  id: string;
  day: string;
  from: string;
  till: string;
}

interface BlockDay {
  id: string;
  date: Date | null;
  from: string;
  till: string;
}

const ProviderAvailabilitySettings: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState('John Doe');
  const [timeZone, setTimeZone] = useState('');
  const [dayAvailabilities, setDayAvailabilities] = useState<DayAvailability[]>([
    { id: '1', day: 'Monday', from: '09:00', till: '18:00' },
    { id: '2', day: 'Tuesday', from: '09:00', till: '18:00' },
    { id: '3', day: 'Wednesday', from: '09:00', till: '18:00' },
    { id: '4', day: 'Thursday', from: '09:00', till: '18:00' },
    { id: '5', day: 'Friday', from: '09:00', till: '18:00' },
    { id: '6', day: 'Saturday', from: '09:00', till: '18:00' },
  ]);
  const [blockDays, setBlockDays] = useState<BlockDay[]>([
    { id: '1', date: null, from: '', till: '' },
    { id: '2', date: null, from: '', till: '' },
  ]);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeZones = [
    'UTC-8 (PST)',
    'UTC-7 (MST)', 
    'UTC-6 (CST)',
    'UTC-5 (EST)',
    'UTC+0 (GMT)',
    'UTC+1 (CET)',
    'UTC+5:30 (IST)'
  ];
  const providers = ['John Doe', 'Jane Smith', 'Dr. Johnson', 'Dr. Williams'];

  const addDayAvailability = () => {
    const newAvailability: DayAvailability = {
      id: Date.now().toString(),
      day: 'Monday',
      from: '09:00',
      till: '18:00'
    };
    setDayAvailabilities([...dayAvailabilities, newAvailability]);
  };

  const removeDayAvailability = (id: string) => {
    setDayAvailabilities(dayAvailabilities.filter(item => item.id !== id));
  };

  const updateDayAvailability = (id: string, field: keyof DayAvailability, value: string) => {
    setDayAvailabilities(dayAvailabilities.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const addBlockDay = () => {
    const newBlockDay: BlockDay = {
      id: Date.now().toString(),
      date: null,
      from: '',
      till: ''
    };
    setBlockDays([...blockDays, newBlockDay]);
  };

  const removeBlockDay = (id: string) => {
    setBlockDays(blockDays.filter(item => item.id !== id));
  };

  const updateBlockDay = (id: string, field: keyof BlockDay, value: any) => {
    setBlockDays(blockDays.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSave = () => {
    console.log('Saving availability settings:', {
      selectedProvider,
      timeZone,
      dayAvailabilities,
      blockDays
    });
    // Here you would typically send the data to your API
    alert('Settings saved successfully!');
  };

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
        <Stack gap={12}>
          {/* Provider Selection */}
          <Box style={{ width: 401 }}>
            <Text size="sm" style={{ fontWeight: 500, fontSize: 12, color: '#595F63', marginBottom: 6 }}>
              Provider
            </Text>
            <Select
              value={selectedProvider}
              onChange={(value) => value && setSelectedProvider(value)}
              data={providers}
              rightSection={<IconChevronDown size={18} />}
              styles={{
                input: {
                  border: '1px solid #e0e0e0',
                  borderRadius: 4,
                  boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                  fontSize: 14,
                  color: '#21262B',
                  fontWeight: 400
                }
              }}
            />
          </Box>

          {/* Main Grid Layout */}
          <Group align="flex-start" gap={56} style={{ marginTop: 12 }}>
            {/* Day Wise Availability */}
            <Box style={{ flex: 1 }}>
              <Group align="center" gap={12} style={{ marginBottom: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 500, color: '#21262B' }}>
                  Day Wise Availability
                </Text>
              </Group>
              
              <Stack gap={8}>
                {dayAvailabilities.map((availability) => (
                  <Group key={availability.id} align="flex-end" gap={16}>
                    <Box style={{ flex: 1 }}>
                      <Text size="sm" style={{ fontWeight: 500, fontSize: 12, color: '#595F63', marginBottom: 6 }}>
                        Day
                      </Text>
                      <Select
                        value={availability.day}
                        onChange={(value) => value && updateDayAvailability(availability.id, 'day', value)}
                        data={days}
                        rightSection={<IconChevronDown size={18} />}
                        styles={{
                          input: {
                            border: '1px solid #e0e0e0',
                            borderRadius: 4,
                            boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                            fontSize: 14,
                            color: '#21262B'
                          }
                        }}
                      />
                    </Box>
                    
                    <Box style={{ flex: 1 }}>
                      <Text size="sm" style={{ fontWeight: 500, fontSize: 12, color: '#595F63', marginBottom: 6 }}>
                        From
                      </Text>
                      <TimeInput
                        value={availability.from}
                        onChange={(event) => updateDayAvailability(availability.id, 'from', event.currentTarget.value)}
                        rightSection={<IconClock size={18} style={{ color: '#373D41' }} />}
                        styles={{
                          input: {
                            border: '1px solid #e0e0e0',
                            borderRadius: 4,
                            boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                            fontSize: 14,
                            color: '#21262B'
                          }
                        }}
                      />
                    </Box>
                    
                    <Box style={{ flex: 1 }}>
                      <Text size="sm" style={{ fontWeight: 500, fontSize: 12, color: '#595F63', marginBottom: 6 }}>
                        Till
                      </Text>
                      <TimeInput
                        value={availability.till}
                        onChange={(event) => updateDayAvailability(availability.id, 'till', event.currentTarget.value)}
                        rightSection={<IconClock size={18} style={{ color: '#373D41' }} />}
                        styles={{
                          input: {
                            border: '1px solid #e0e0e0',
                            borderRadius: 4,
                            boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                            fontSize: 14,
                            color: '#21262B'
                          }
                        }}
                      />
                    </Box>
                    
                    <ActionIcon
                      variant="subtle"
                      color="red"
                      onClick={() => removeDayAvailability(availability.id)}
                      style={{ 
                        border: '1px solid #e0e0e0',
                        borderRadius: 10,
                        backgroundColor: '#fff',
                        width: 38,
                        height: 38,
                        padding: 12
                      }}
                    >
                      <IconTrash size={20} style={{ color: '#373E41' }} />
                    </ActionIcon>
                  </Group>
                ))}
              </Stack>
            </Box>

            {/* Slot Creation Settings */}
            <Box style={{ width: 310 }}>
              <Stack gap={24}>
                <Text style={{ fontSize: 16, fontWeight: 500, color: '#21262B' }}>
                  Slot Creation Setting
                </Text>
                
                <Box>
                  <Text size="sm" style={{ fontWeight: 500, fontSize: 12, color: '#595F63', marginBottom: 6 }}>
                    Time Zone
                  </Text>
                  <Select
                    value={timeZone}
                    onChange={(value) => value && setTimeZone(value)}
                    data={timeZones}
                    placeholder="Select Time Zone"
                    rightSection={<IconChevronDown size={18} />}
                    styles={{
                      input: {
                        border: '1px solid #e0e0e0',
                        borderRadius: 4,
                        boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                        fontSize: 14,
                        color: timeZone ? '#21262B' : '#9B9D9F'
                      }
                    }}
                  />
                </Box>

                <Box>
                  <Text style={{ fontSize: 14, fontWeight: 500, color: '#373D41', marginBottom: 16 }}>
                    Block Days
                  </Text>
                  
                  <Stack gap={16}>
                    {blockDays.map((block) => (
                      <Group key={block.id} align="flex-end" gap={16}>
                        <Box style={{ flex: 1 }}>
                          <Text size="sm" style={{ fontWeight: 500, fontSize: 12, color: '#595F63', marginBottom: 6 }}>
                            Date
                          </Text>
                          <DateInput
                            value={block.date}
                            onChange={(value) => updateBlockDay(block.id, 'date', value)}
                            placeholder="Select Date"
                            rightSection={<IconCalendar size={18} style={{ color: '#373D41' }} />}
                            styles={{
                              input: {
                                border: '1px solid #e0e0e0',
                                borderRadius: 4,
                                boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                                fontSize: 14,
                                color: block.date ? '#21262B' : '#9B9D9F'
                              }
                            }}
                          />
                        </Box>
                        
                        <Box style={{ flex: 1 }}>
                          <Text size="sm" style={{ fontWeight: 500, fontSize: 12, color: '#595F63', marginBottom: 6 }}>
                            From
                          </Text>
                          <TimeInput
                            value={block.from}
                            onChange={(event) => updateBlockDay(block.id, 'from', event.currentTarget.value)}
                            placeholder="Select Start Time"
                            rightSection={<IconClock size={18} style={{ color: '#373D41' }} />}
                            styles={{
                              input: {
                                border: '1px solid #e0e0e0',
                                borderRadius: 4,
                                boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                                fontSize: 14,
                                color: block.from ? '#21262B' : '#9B9D9F'
                              }
                            }}
                          />
                        </Box>
                        
                        <Box style={{ flex: 1 }}>
                          <Text size="sm" style={{ fontWeight: 500, fontSize: 12, color: '#595F63', marginBottom: 6 }}>
                            Till
                          </Text>
                          <TimeInput
                            value={block.till}
                            onChange={(event) => updateBlockDay(block.id, 'till', event.currentTarget.value)}
                            placeholder="Select End Time"
                            rightSection={<IconClock size={18} style={{ color: '#373D41' }} />}
                            styles={{
                              input: {
                                border: '1px solid #e0e0e0',
                                borderRadius: 4,
                                boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                                fontSize: 14,
                                color: block.till ? '#21262B' : '#9B9D9F'
                              }
                            }}
                          />
                        </Box>
                        
                        <ActionIcon
                          variant="subtle"
                          color="red"
                          onClick={() => removeBlockDay(block.id)}
                          style={{ 
                            border: '1px solid #e0e0e0',
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            width: 38,
                            height: 38,
                            padding: 12
                          }}
                        >
                          <IconTrash size={20} style={{ color: '#373E41' }} />
                        </ActionIcon>
                      </Group>
                    ))}
                    
                    <Button
                      leftSection={<IconPlus size={16} />}
                      onClick={addBlockDay}
                      style={{
                        backgroundColor: '#E5F0FF',
                        border: '1px solid #233853',
                        color: '#233853',
                        borderRadius: 4,
                        fontWeight: 500,
                        fontSize: 14
                      }}
                    >
                      Add Block Days
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Group>
        </Stack>

        {/* Action Buttons */}
        <Box style={{ borderTop: '1px solid #E7E7E7', paddingTop: 12, marginTop: 8 }}>
          <Group justify="flex-end" gap={12}>
            <Button
              variant="subtle"
              style={{
                color: '#233853',
                fontSize: 14,
                fontWeight: 500,
                padding: '10px 16px',
                height: 32
              }}
            >
              Close
            </Button>
            <Button
              onClick={handleSave}
              style={{
                backgroundColor: '#233853',
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: 500,
                padding: '10px 16px',
                height: 32,
                border: 'none'
              }}
            >
              Save
            </Button>
          </Group>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProviderAvailabilitySettings; 