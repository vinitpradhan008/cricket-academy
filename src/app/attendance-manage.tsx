import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

const players = [
  { id: 1, name: 'Rahul Patil', batch: 'U-19', initials: 'RP' },
  { id: 2, name: 'Akash Sharma', batch: 'U-19', initials: 'AS' },
  { id: 3, name: 'Vikram Singh', batch: 'Senior', initials: 'VS' },
  { id: 4, name: 'Amit More', batch: 'U-17', initials: 'AM' },
  { id: 5, name: 'Rohan Kulkarni', batch: 'U-17', initials: 'RK' },
];

export default function AttendanceManageScreen() {
  const [attendance, setAttendance] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
    4: true,
    5: true,
  });

  const toggleAttendance = (id: number) => {
    setAttendance((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  const presentCount = players.filter(
    (player) => attendance[player.id]
  ).length;

  const absentCount = players.length - presentCount;

  const saveAttendance = () => {
    Alert.alert(
      'Attendance Saved',
      'Today\'s attendance has been saved successfully.'
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
            Attendance
          </Text>

          <Text style={styles.headerSubtitle}>
            Mark today's player attendance
          </Text>
        </View>
      </View>

      {/* Date */}
      <View style={styles.dateCard}>
        <View>
          <Text style={styles.dateLabel}>
            Today's Attendance
          </Text>

          <Text style={styles.date}>
            Sunday, 13 September 2026
          </Text>
        </View>

        <Text style={styles.calendarIcon}>📅</Text>
      </View>

      {/* Summary */}
      <View style={styles.summaryRow}>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>👥</Text>
          <Text style={styles.summaryNumber}>
            {players.length}
          </Text>
          <Text style={styles.summaryLabel}>
            Total
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>✅</Text>
          <Text style={styles.presentNumber}>
            {presentCount}
          </Text>
          <Text style={styles.summaryLabel}>
            Present
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>❌</Text>
          <Text style={styles.absentNumber}>
            {absentCount}
          </Text>
          <Text style={styles.summaryLabel}>
            Absent
          </Text>
        </View>

      </View>

      {/* Player List */}
      <Text style={styles.sectionTitle}>
        Player Attendance
      </Text>

      {players.map((player) => {
        const isPresent = attendance[player.id];

        return (
          <View
            key={player.id}
            style={styles.playerCard}
          >

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {player.initials}
              </Text>
            </View>

            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>
                {player.name}
              </Text>

              <Text style={styles.playerBatch}>
                {player.batch}
              </Text>

              <Text
                style={
                  isPresent
                    ? styles.presentStatus
                    : styles.absentStatus
                }
              >
                {isPresent ? '● Present' : '● Absent'}
              </Text>
            </View>

            <TouchableOpacity
              style={
                isPresent
                  ? styles.presentButton
                  : styles.absentButton
              }
              onPress={() => toggleAttendance(player.id)}
            >
              <Text
                style={
                  isPresent
                    ? styles.presentButtonText
                    : styles.absentButtonText
                }
              >
                {isPresent ? 'PRESENT' : 'ABSENT'}
              </Text>
            </TouchableOpacity>

          </View>
        );
      })}

      {/* Save */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={saveAttendance}
      >
        <Text style={styles.saveText}>
          ✓ SAVE ATTENDANCE
        </Text>
      </TouchableOpacity>

      {/* Dashboard */}
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

  dateCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 18,
    borderRadius: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  dateLabel: {
    color: '#777',
    fontSize: 11,
  },

  date: {
    color: '#123B2A',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },

  calendarIcon: {
    fontSize: 30,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 22,
  },

  summaryCard: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 2,
  },

  summaryIcon: {
    fontSize: 20,
  },

  summaryNumber: {
    color: '#123B2A',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },

  presentNumber: {
    color: '#16823A',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },

  absentNumber: {
    color: '#C73535',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },

  summaryLabel: {
    color: '#777',
    fontSize: 10,
    marginTop: 2,
  },

  sectionTitle: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 12,
  },

  playerCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 11,
    padding: 13,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E3F1E8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#123B2A',
    fontSize: 15,
    fontWeight: 'bold',
  },

  playerInfo: {
    flex: 1,
    marginLeft: 12,
  },

  playerName: {
    color: '#222',
    fontSize: 14,
    fontWeight: 'bold',
  },

  playerBatch: {
    color: '#777',
    fontSize: 11,
    marginTop: 3,
  },

  presentStatus: {
    color: '#16823A',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 3,
  },

  absentStatus: {
    color: '#C73535',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 3,
  },

  presentButton: {
    backgroundColor: '#DFF5E7',
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 9,
  },

  absentButton: {
    backgroundColor: '#FBE3E3',
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 9,
  },

  presentButtonText: {
    color: '#16823A',
    fontSize: 9,
    fontWeight: 'bold',
  },

  absentButtonText: {
    color: '#C73535',
    fontSize: 9,
    fontWeight: 'bold',
  },

  saveButton: {
    backgroundColor: '#123B2A',
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  saveText: {
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
