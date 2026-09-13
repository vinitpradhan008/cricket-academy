import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

const schedules = [
  {
    id: 1,
    title: 'Batting Practice',
    date: 'Monday',
    time: '7:00 AM - 9:00 AM',
    batch: 'U-19',
    icon: '🏏',
  },
  {
    id: 2,
    title: 'Bowling Practice',
    date: 'Tuesday',
    time: '6:30 AM - 8:30 AM',
    batch: 'Senior',
    icon: '🎯',
  },
  {
    id: 3,
    title: 'Fielding Session',
    date: 'Wednesday',
    time: '7:00 AM - 8:30 AM',
    batch: 'U-17',
    icon: '🏃',
  },
];

export default function TrainingManageScreen() {
  const [trainingTitle, setTrainingTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [batch, setBatch] = useState('');
  const [venue, setVenue] = useState('');
  const [coach, setCoach] = useState('');
  const [notes, setNotes] = useState('');

  const addTraining = () => {
    if (
      !trainingTitle ||
      !date ||
      !time ||
      !batch ||
      !venue ||
      !coach
    ) {
      Alert.alert(
        'Missing Information',
        'Please fill all training details.'
      );
      return;
    }

    Alert.alert(
      'Training Added',
      'Training schedule has been created successfully.',
      [
        {
          text: 'OK',
          onPress: () => {
            setTrainingTitle('');
            setDate('');
            setTime('');
            setBatch('');
            setVenue('');
            setCoach('');
            setNotes('');
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.headerTitle}>
            Training
          </Text>

          <Text style={styles.headerSubtitle}>
            Manage training schedule
          </Text>
        </View>
      </View>

      {/* Upcoming Training */}
      <Text style={styles.sectionTitle}>
        Upcoming Training
      </Text>

      {schedules.map((training) => (
        <View
          key={training.id}
          style={styles.trainingCard}
        >
          <View style={styles.trainingIcon}>
            <Text style={styles.trainingEmoji}>
              {training.icon}
            </Text>
          </View>

          <View style={styles.trainingInfo}>
            <Text style={styles.trainingTitle}>
              {training.title}
            </Text>

            <Text style={styles.trainingDate}>
              📅 {training.date}
            </Text>

            <Text style={styles.trainingTime}>
              🕐 {training.time}
            </Text>

            <Text style={styles.trainingBatch}>
              {training.batch}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.editSmallButton}
            onPress={() =>
              Alert.alert(
                'Edit Training',
                'Training editing will be connected to Firebase later.'
              )
            }
          >
            <Text style={styles.editSmallText}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Add Training */}
      <Text style={styles.sectionTitle}>
        Create Training
      </Text>

      <View style={styles.formCard}>

        <Text style={styles.label}>
          Training Title
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: Batting Practice"
          placeholderTextColor="#999"
          value={trainingTitle}
          onChangeText={setTrainingTitle}
        />

        <Text style={styles.label}>
          Date
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: Monday, 14 September"
          placeholderTextColor="#999"
          value={date}
          onChangeText={setDate}
        />

        <Text style={styles.label}>
          Time
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: 7:00 AM - 9:00 AM"
          placeholderTextColor="#999"
          value={time}
          onChangeText={setTime}
        />

        <Text style={styles.label}>
          Batch
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: U-17 / U-19 / Senior"
          placeholderTextColor="#999"
          value={batch}
          onChangeText={setBatch}
        />

        <Text style={styles.label}>
          Ground / Venue
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter training venue"
          placeholderTextColor="#999"
          value={venue}
          onChangeText={setVenue}
        />

        <Text style={styles.label}>
          Coach
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter coach name"
          placeholderTextColor="#999"
          value={coach}
          onChangeText={setCoach}
        />

        <Text style={styles.label}>
          Notes
        </Text>

        <TextInput
          style={styles.notesInput}
          placeholder="Additional training instructions..."
          placeholderTextColor="#999"
          multiline
          textAlignVertical="top"
          value={notes}
          onChangeText={setNotes}
        />

      </View>

      {/* Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={addTraining}
      >
        <Text style={styles.addText}>
          + CREATE TRAINING
        </Text>
      </TouchableOpacity>

      {/* Back */}
      <TouchableOpacity
        style={styles.dashboardButton}
        onPress={() => router.replace('/coach-dashboard')}
      >
        <Text style={styles.dashboardText}>
          ← BACK TO DASHBOARD
        </Text>
      </TouchableOpacity>

      <View style={{ height: 30 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  header: {
    backgroundColor: '#123B2A',
    paddingTop: 50,
    paddingBottom: 22,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    marginRight: 8,
  },

  backText: {
    color: '#FFFFFF',
    fontSize: 40,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#CFE1D7',
    fontSize: 13,
    marginTop: 4,
  },

  sectionTitle: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },

  trainingCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 14,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  trainingIcon: {
    width: 52,
    height: 52,
    borderRadius: 27,
    backgroundColor: '#E5F1EA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  trainingEmoji: {
    fontSize: 27,
  },

  trainingInfo: {
    flex: 1,
    marginLeft: 12,
  },

  trainingTitle: {
    color: '#222',
    fontSize: 14,
    fontWeight: 'bold',
  },

  trainingDate: {
    color: '#777',
    fontSize: 10,
    marginTop: 4,
  },

  trainingTime: {
    color: '#777',
    fontSize: 10,
    marginTop: 3,
  },

  trainingBatch: {
    color: '#16823A',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 4,
  },

  editSmallButton: {
    backgroundColor: '#E8F3EC',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },

  editSmallText: {
    color: '#123B2A',
    fontSize: 10,
    fontWeight: 'bold',
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 18,
    elevation: 2,
  },

  label: {
    color: '#444',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 7,
  },

  input: {
    height: 49,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 13,
    color: '#222',
    backgroundColor: '#FAFAFA',
    marginBottom: 15,
  },

  notesInput: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    padding: 13,
    color: '#222',
    backgroundColor: '#FAFAFA',
    marginBottom: 5,
  },

  addButton: {
    backgroundColor: '#123B2A',
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  addText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  dashboardButton: {
    marginHorizontal: 20,
    marginTop: 12,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#123B2A',
  },

  dashboardText: {
    color: '#123B2A',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
