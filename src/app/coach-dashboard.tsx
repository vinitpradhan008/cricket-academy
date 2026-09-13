import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function CoachDashboardScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>
            Welcome Coach 👋
          </Text>

          <Text style={styles.headerTitle}>
            Coach Dashboard
          </Text>
        </View>

        <View style={styles.coachCircle}>
          <Text style={styles.coachIcon}>👨‍🏫</Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>
          Today's Academy Overview
        </Text>

        <View style={styles.summaryRow}>

          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>48</Text>
            <Text style={styles.summaryLabel}>
              Players
            </Text>
          </View>

          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>3</Text>
            <Text style={styles.summaryLabel}>
              Batches
            </Text>
          </View>

          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>42</Text>
            <Text style={styles.summaryLabel}>
              Present
            </Text>
          </View>

        </View>
      </View>

      {/* Management */}
      <Text style={styles.sectionTitle}>
        Manage Academy
      </Text>

      <View style={styles.grid}>

        <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/players-manage')}
>
  <Text style={styles.icon}>👥</Text>
  <Text style={styles.cardTitle}>
    Players
  </Text>
  <Text style={styles.cardText}>
    Manage players
  </Text>
</TouchableOpacity>


        <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/attendance-manage')}
>
  <Text style={styles.icon}>📋</Text>
  <Text style={styles.cardTitle}>
    Attendance
  </Text>
  <Text style={styles.cardText}>
    Mark attendance
  </Text>
</TouchableOpacity>


        <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/performance-manage')}
>
  <Text style={styles.icon}>📊</Text>
  <Text style={styles.cardTitle}>
    Performance
  </Text>
  <Text style={styles.cardText}>
    Update performance
  </Text>
</TouchableOpacity>

        <TouchableOpacity style={styles.card}
        onPress={() => router.push('/training-manage')}>
          <Text style={styles.icon}>📅</Text>
          <Text style={styles.cardTitle}>
            Training
          </Text>
          <Text style={styles.cardText}>
            Manage schedule
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/matches-manage')}
>
  <Text style={styles.icon}>🏆</Text>
  <Text style={styles.cardTitle}>
    Matches
  </Text>
  <Text style={styles.cardText}>
    Manage matches
  </Text>
</TouchableOpacity>


        <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/notices-manage')}
>
  <Text style={styles.icon}>📢</Text>
  <Text style={styles.cardTitle}>
    Notices
  </Text>
  <Text style={styles.cardText}>
    Manage notices
  </Text>
</TouchableOpacity>


      </View>

      {/* Today's Training */}
      <Text style={styles.sectionTitle}>
        Today's Training
      </Text>

      <View style={styles.trainingCard}>

        <View style={styles.trainingIcon}>
          <Text style={styles.trainingEmoji}>🏏</Text>
        </View>

        <View style={styles.trainingDetails}>
          <Text style={styles.trainingTitle}>
            Batting Practice
          </Text>

          <Text style={styles.trainingTime}>
            7:00 AM - 9:00 AM
          </Text>

          <Text style={styles.trainingPlayers}>
            18 players
          </Text>
        </View>

        <View style={styles.activeBadge}>
          <Text style={styles.activeText}>
            ACTIVE
          </Text>
        </View>

      </View>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.replace('/coach-login')}
      >
        <Text style={styles.logoutText}>
          🚪 LOGOUT
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
    paddingTop: 55,
    paddingBottom: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  smallText: {
    color: '#CFE1D7',
    fontSize: 13,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },

  coachCircle: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  coachIcon: {
    fontSize: 31,
  },

  summaryCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 18,
    borderRadius: 18,
    elevation: 3,
  },

  summaryTitle: {
    color: '#123B2A',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  summaryItem: {
    alignItems: 'center',
  },

  summaryNumber: {
    color: '#123B2A',
    fontSize: 25,
    fontWeight: 'bold',
  },

  summaryLabel: {
    color: '#777',
    fontSize: 11,
    marginTop: 3,
  },

  sectionTitle: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 17,
    marginBottom: 13,
    elevation: 2,
  },

  icon: {
    fontSize: 30,
    marginBottom: 9,
  },

  cardTitle: {
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardText: {
    color: '#777',
    fontSize: 12,
    marginTop: 4,
  },

  trainingCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 15,
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

  trainingDetails: {
    flex: 1,
    marginLeft: 13,
  },

  trainingTitle: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
  },

  trainingTime: {
    color: '#777',
    fontSize: 11,
    marginTop: 4,
  },

  trainingPlayers: {
    color: '#16823A',
    fontSize: 11,
    marginTop: 3,
  },

  activeBadge: {
    backgroundColor: '#DFF5E7',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 7,
  },

  activeText: {
    color: '#16823A',
    fontSize: 9,
    fontWeight: 'bold',
  },

  logoutButton: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C73535',
    alignItems: 'center',
  },

  logoutText: {
    color: '#C73535',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
