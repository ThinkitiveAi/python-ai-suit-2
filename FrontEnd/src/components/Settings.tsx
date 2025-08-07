import React from 'react';
import { 
  Box, 
  Text, 
  Select, 
  TextInput, 
  Button, 
  Group, 
  Stack, 
  Grid, 
  ActionIcon,
  Divider,
  Paper
} from '@mantine/core';
import { DateInput, TimeInput } from '@mantine/dates';
import { IconClock, IconCalendar, IconTrash, IconPlus } from '@tabler/icons-react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

interface DayAvailability {
  day: string;
  from: string;
  till: string;
}

interface BlockDay {
  date: Date | null;
  from: string;
  till: string;
}

interface SettingsFormValues {
  selectedProvider: string;
  timeZone: string;
  dayAvailabilities: DayAvailability[];
  blockDays: BlockDay[];
}

const validationSchema = Yup.object().shape({
  selectedProvider: Yup.string().required('Provider is required'),
  timeZone: Yup.string().required('Time zone is required'),
  dayAvailabilities: Yup.array().of(
    Yup.object().shape({
      day: Yup.string().required('Day is required'),
      from: Yup.string().required('Start time is required'),
      till: Yup.string().required('End time is required'),
    })
  ),
  blockDays: Yup.array().of(
    Yup.object().shape({
      date: Yup.date().nullable(),
      from: Yup.string(),
      till: Yup.string(),
    })
  ),
});

const initialValues: SettingsFormValues = {
  selectedProvider: 'John Doe',
  timeZone: 'Select Time Zone',
  dayAvailabilities: [
    { day: 'Monday', from: '09:00 AM', till: '06:00 PM' },
    { day: 'Tuesday', from: '09:00 AM', till: '06:00 PM' },
    { day: 'Wednesday', from: '09:00 AM', till: '06:00 PM' },
    { day: 'Thursday', from: '09:00 AM', till: '06:00 PM' },
    { day: 'Friday', from: '09:00 AM', till: '06:00 PM' },
    { day: 'Saturday', from: '09:00 AM', till: '06:00 PM' },
  ],
  blockDays: [
    { date: null, from: 'Select Start Time', till: 'Select End Time' },
    { date: null, from: 'Select Start Time', till: 'Select End Time' },
  ],
};

const Settings: React.FC = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeZones = ['UTC-8 (PST)', 'UTC-7 (MST)', 'UTC-6 (CST)', 'UTC-5 (EST)', 'UTC+0 (GMT)', 'UTC+1 (CET)', 'UTC+5:30 (IST)'];
  const providers = ['John Doe', 'Jane Smith', 'Dr. Johnson', 'Dr. Williams'];

  // Example of DateInput with useState pattern
  const [exampleDate, setExampleDate] = useState<string | null>(null);

  const handleSubmit = (values: SettingsFormValues, { setSubmitting }: any) => {
    console.log('Form submitted:', values);
    // Here you would typically send the data to your API
    setTimeout(() => {
      setSubmitting(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  return (
    <Box p={40} style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Paper shadow="sm" p="md" radius="md" style={{ backgroundColor: '#fff', maxWidth: '100%' }}>
        {/* Example of DateInput with useState pattern */}
        <Box mb="md">
          <Text size="sm" fw={500} c="dimmed" mb={6}>Example DateInput with useState</Text>
          <DateInput
            value={exampleDate}
            onChange={setExampleDate}
            placeholder="Select Date"
            rightSection={<IconCalendar size={18} />}
            styles={{
              input: {
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
              }
            }}
          />
        </Box>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, setFieldValue, isSubmitting }) => (
            <Form>
              <Stack gap="md">
                {/* Provider Selection */}
                <Box>
                  <Text size="sm" fw={500} c="dimmed" mb={6}>Provider</Text>
                  <Select
                    name="selectedProvider"
                    value={values.selectedProvider}
                    onChange={(value) => setFieldValue('selectedProvider', value)}
                    data={providers}
                    rightSection={<IconCalendar size={18} />}
                    error={touched.selectedProvider && errors.selectedProvider}
                    styles={{
                      input: {
                        border: '1px solid #e0e0e0',
                        borderRadius: '4px',
                        boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                      }
                    }}
                  />
                </Box>

                <Grid gutter="xl">
                  {/* Day Wise Availability */}
                  <Grid.Col span={8}>
                    <Stack gap="md">
                      <Text size="lg" fw={500}>Day Wise Availability</Text>
                      
                      <FieldArray name="dayAvailabilities">
                        {({ push, remove }) => (
                          <Stack gap="md">
                            {values.dayAvailabilities.map((day, index) => (
                              <Box key={index}>
                                <Grid gutter="md" align="end">
                                  <Grid.Col span={3}>
                                    <Text size="sm" fw={500} c="dimmed" mb={6}>Day</Text>
                                    <Select
                                      value={day.day}
                                      onChange={(value) => setFieldValue(`dayAvailabilities.${index}.day`, value)}
                                      data={days}
                                      rightSection={<IconCalendar size={18} />}
                                      error={touched.dayAvailabilities?.[index]?.day && (errors.dayAvailabilities as any)?.[index]?.day}
                                      styles={{
                                        input: {
                                          border: '1px solid #e0e0e0',
                                          borderRadius: '4px',
                                          boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                                        }
                                      }}
                                    />
                                  </Grid.Col>
                                  
                                  <Grid.Col span={3}>
                                    <Text size="sm" fw={500} c="dimmed" mb={6}>From</Text>
                                    <TimeInput
                                      name={`dayAvailabilities.${index}.from`}
                                      value={day.from}
                                      onChange={(event) => setFieldValue(`dayAvailabilities.${index}.from`, event.currentTarget.value)}
                                      rightSection={<IconClock size={18} />}
                                      error={touched.dayAvailabilities?.[index]?.from && (errors.dayAvailabilities as any)?.[index]?.from}
                                      styles={{
                                        input: {
                                          border: '1px solid #e0e0e0',
                                          borderRadius: '4px',
                                          boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                                        }
                                      }}
                                    />
                                  </Grid.Col>
                                  
                                  <Grid.Col span={3}>
                                    <Text size="sm" fw={500} c="dimmed" mb={6}>Till</Text>
                                    <TimeInput
                                      name={`dayAvailabilities.${index}.till`}
                                      value={day.till}
                                      onChange={(event) => setFieldValue(`dayAvailabilities.${index}.till`, event.currentTarget.value)}
                                      rightSection={<IconClock size={18} />}
                                      error={touched.dayAvailabilities?.[index]?.till && (errors.dayAvailabilities as any)?.[index]?.till}
                                      styles={{
                                        input: {
                                          border: '1px solid #e0e0e0',
                                          borderRadius: '4px',
                                          boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                                        }
                                      }}
                                    />
                                  </Grid.Col>
                                  
                                  <Grid.Col span={2}>
                                    <ActionIcon
                                      variant="subtle"
                                      color="red"
                                      onClick={() => remove(index)}
                                      style={{ 
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '10px',
                                        backgroundColor: '#fff'
                                      }}
                                    >
                                      <IconTrash size={16} />
                                    </ActionIcon>
                                  </Grid.Col>
                                </Grid>
                              </Box>
                            ))}
                          </Stack>
                        )}
                      </FieldArray>
                    </Stack>
                  </Grid.Col>

                  {/* Slot Creation Settings */}
                  <Grid.Col span={4}>
                    <Stack gap="lg">
                      <Text size="lg" fw={500}>Slot Creation Setting</Text>
                      
                      <Box>
                        <Text size="sm" fw={500} c="dimmed" mb={6}>Time Zone</Text>
                        <Select
                          name="timeZone"
                          value={values.timeZone}
                          onChange={(value) => setFieldValue('timeZone', value)}
                          data={timeZones}
                          rightSection={<IconCalendar size={18} />}
                          error={touched.timeZone && errors.timeZone}
                          styles={{
                            input: {
                              border: '1px solid #e0e0e0',
                              borderRadius: '4px',
                              boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                            }
                          }}
                        />
                      </Box>

                      <Box>
                        <Text size="md" fw={500} c="dark.6" mb="md">Block Days</Text>
                        
                        <FieldArray name="blockDays">
                          {({ push, remove }) => (
                            <Stack gap="md">
                              {values.blockDays.map((block, index) => (
                                <Box key={index}>
                                  <Grid gutter="md" align="end">
                                    <Grid.Col span={8}>
                                      <Text size="sm" fw={500} c="dimmed" mb={6}>Date</Text>
                                      <DateInput
                                        value={block.date}
                                        onChange={(value) => setFieldValue(`blockDays.${index}.date`, value)}
                                        placeholder="Select Date"
                                        rightSection={<IconCalendar size={18} />}
                                        styles={{
                                          input: {
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '4px',
                                            boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                                          }
                                        }}
                                      />
                                    </Grid.Col>
                                    
                                    <Grid.Col span={3}>
                                      <ActionIcon
                                        variant="subtle"
                                        color="red"
                                        onClick={() => remove(index)}
                                        style={{ 
                                          border: '1px solid #e0e0e0',
                                          borderRadius: '10px',
                                          backgroundColor: '#fff'
                                        }}
                                      >
                                        <IconTrash size={16} />
                                      </ActionIcon>
                                    </Grid.Col>
                                  </Grid>
                                  
                                  <Grid gutter="md" mt="xs">
                                    <Grid.Col span={6}>
                                      <Text size="sm" fw={500} c="dimmed" mb={6}>From</Text>
                                      <TimeInput
                                        name={`blockDays.${index}.from`}
                                        value={block.from}
                                        onChange={(event) => setFieldValue(`blockDays.${index}.from`, event.currentTarget.value)}
                                        rightSection={<IconClock size={18} />}
                                        styles={{
                                          input: {
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '4px',
                                            boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                                          }
                                        }}
                                      />
                                    </Grid.Col>
                                    
                                    <Grid.Col span={6}>
                                      <Text size="sm" fw={500} c="dimmed" mb={6}>Till</Text>
                                      <TimeInput
                                        name={`blockDays.${index}.till`}
                                        value={block.till}
                                        onChange={(event) => setFieldValue(`blockDays.${index}.till`, event.currentTarget.value)}
                                        rightSection={<IconClock size={18} />}
                                        styles={{
                                          input: {
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '4px',
                                            boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.16)',
                                          }
                                        }}
                                      />
                                    </Grid.Col>
                                  </Grid>
                                </Box>
                              ))}
                              
                              <Button
                                type="button"
                                variant="outline"
                                leftSection={<IconPlus size={16} />}
                                onClick={() => push({ date: null, from: 'Select Start Time', till: 'Select End Time' })}
                                mt="md"
                                styles={{
                                  root: {
                                    borderColor: '#233853',
                                    color: '#233853',
                                    backgroundColor: '#E5F0FF',
                                  }
                                }}
                              >
                                Add Block Days
                              </Button>
                            </Stack>
                          )}
                        </FieldArray>
                      </Box>
                    </Stack>
                  </Grid.Col>
                </Grid>

                <Divider my="md" />
                
                {/* Action Buttons */}
                <Group justify="flex-end" gap="md">
                  <Button type="button" variant="subtle" color="gray">
                    Close
                  </Button>
                  <Button 
                    type="submit"
                    loading={isSubmitting}
                    style={{ 
                      backgroundColor: '#233853',
                      color: '#fff'
                    }}
                  >
                    Save
                  </Button>
                </Group>
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default Settings;