import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function TrainingScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.headerTitle}>
            Training Schedule
          </Text>

          <Text style={styles.headerSubtitle}>
            Your weekly cricket training
          </Text>
        </View>
      </View>

      {/* Today's Training */}
      <View style={styles.todayCard}>
        <Text style={styles.todayLabel}>
          TODAY'S TRAINING
        </Text>

        <Text style={styles.todayTitle}>
          🏏 Batting Practice
        </Text>

        <Text style={styles.todayInfo}>
          ⏰ 7:00 AM - 9:00 AM
        </Text>

        <Text style={styles.todayInfo}>
          📍 Academy Ground
        </Text>

        <View style={styles.coachBox}>
          <Text style={styles.coachText}>
            Coach: Rahul Sir
          </Text>
        </View>
      </View>

      {/* Weekly Schedule */}
      <Text style={styles.sectionTitle}>
        Weekly Schedule
      </Text>

      {/* Monday */}
      <View style={styles.scheduleCard}>
        <View style={styles.dayBox}>
          <Text style={styles.day}>
            MON
          </Text>

          <Text style={styles.date}>
            14
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.trainingTitle}>
            🏏 Batting Practice
          </Text>

          <Text style={styles.detailText}>
            ⏰ 7:00 AM - 9:00 AM
          </Text>

          <Text style={styles.detailText}>
            📍 Academy Ground
          </Text>
        </View>
      </View>

      {/* Tuesday */}
      <View style={styles.scheduleCard}>
        <View style={styles.dayBox}>
          <Text style={styles.day}>
            TUE
          </Text>

          <Text style={styles.date}>
            15
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.trainingTitle}>
            🎯 Bowling Practice
          </Text>

          <Text style={styles.detailText}>
            ⏰ 7:00 AM - 9:00 AM
          </Text>

          <Text style={styles.detailText}>
            📍 Academy Ground
          </Text>
        </View>
      </View>

      {/* Wednesday */}
      <View style={styles.scheduleCard}>
        <View style={styles.dayBox}>
          <Text style={styles.day}>
            WED
          </Text>

          <Text style={styles.date}>
            16
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.trainingTitle}>
            💪 Fitness Training
          </Text>

          <Text style={styles.detailText}>
            ⏰ 6:30 AM - 8:00 AM
          </Text>

          <Text style={styles.detailText}>
            📍 Fitness Center
          </Text>
        </View>
      </View>

      {/* Thursday */}
      <View style={styles.scheduleCard}>
        <View style={styles.dayBox}>
          <Text style={styles.day}>
            THU
          </Text>

          <Text style={styles.date}>
            17
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.trainingTitle}>
            🏏 Batting + Fielding
          </Text>

          <Text style={styles.detailText}>
            ⏰ 7:00 AM - 9:00 AM
          </Text>

          <Text style={styles.detailText}>
            📍 Academy Ground
          </Text>
        </View>
      </View>

      {/* Friday */}
      <View style={styles.scheduleCard}>
        <View style={styles.dayBox}>
          <Text style={styles.day}>
            FRI
          </Text>

          <Text style={styles.date}>
            18
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.trainingTitle}>
            🎯 Bowling + Fielding
          </Text>

          <Text style={styles.detailText}>
            ⏰ 7:00 AM - 9:00 AM
          </Text>

          <Text style={styles.detailText}>
            📍 Academy Ground
          </Text>
        </View>
      </View>

      {/* Saturday */}
      <View style={styles.scheduleCard}>
        <View style={styles.dayBox}>
          <Text style={styles.day}>
            SAT
          </Text>

          <Text style={styles.date}>
            19
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.trainingTitle}>
            🏆 Match Practice
          </Text>

          <Text style={styles.detailText}>
            ⏰ 7:00 AM - 10:00 AM
          </Text>

          <Text style={styles.detailText}>
            📍 Main Cricket Ground
          </Text>
        </View>
      </View>

      {/* Sunday */}
      <View style={styles.restCard}>
        <Text style={styles.restIcon}>
          😴
        </Text>

        <View>
          <Text style={styles.restTitle}>
            Sunday - Rest Day
          </Text>

          <Text style={styles.restText}>
            Recover well and get ready for next week!
          </Text>
        </View>
      </View>

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
    fontSize: 22,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#CFE1D7',
    fontSize: 13,
    marginTop: 4,
  },

  todayCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    borderLeftWidth: 5,
    borderLeftColor: '#123B2A',
  },

  todayLabel: {
    color: '#123B2A',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  todayTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 10,
    marginBottom: 12,
  },

  todayInfo: {
    color: '#666',
    fontSize: 14,
    marginTop: 7,
  },

  coachBox: {
    backgroundColor: '#EEF6F1',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },

  coachText: {
    color: '#123B2A',
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginHorizontal: 20,
    marginBottom: 12,
  },

  scheduleCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 14,
    borderRadius: 16,
    flexDirection: 'row',
    elevation: 2,
  },

  dayBox: {
    width: 58,
    height: 65,
    backgroundColor: '#123B2A',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  day: {
    color: '#CFE1D7',
    fontSize: 12,
    fontWeight: 'bold',
  },

  date: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 2,
  },

  details: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },

  trainingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },

  detailText: {
    color: '#777',
    fontSize: 13,
    marginTop: 3,
  },

  restCard: {
    backgroundColor: '#FFF8E7',
    marginHorizontal: 20,
    marginTop: 5,
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  restIcon: {
    fontSize: 30,
    marginRight: 14,
  },

  restTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B5000',
  },

  restText: {
    color: '#8A7440',
    fontSize: 13,
    marginTop: 4,
  },
});
