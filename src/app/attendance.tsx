import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function AttendanceScreen() {
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
            My Attendance
          </Text>

          <Text style={styles.headerSubtitle}>
            Track your training attendance
          </Text>
        </View>
      </View>

      {/* Overall Attendance */}
      <View style={styles.overallCard}>
        <View style={styles.circle}>
          <Text style={styles.percentage}>
            86%
          </Text>

          <Text style={styles.circleLabel}>
            Attendance
          </Text>
        </View>

        <View style={styles.overallInfo}>
          <Text style={styles.overallTitle}>
            Great Attendance! 👏
          </Text>

          <Text style={styles.overallText}>
            Keep attending your training sessions regularly.
          </Text>

          <View style={styles.progressBackground}>
            <View style={styles.progressFill} />
          </View>
        </View>
      </View>

      {/* Monthly Summary */}
      <Text style={styles.sectionTitle}>
        September 2026
      </Text>

      <View style={styles.summaryGrid}>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>📅</Text>
          <Text style={styles.summaryValue}>22</Text>
          <Text style={styles.summaryLabel}>Total Sessions</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>✅</Text>
          <Text style={[styles.summaryValue, styles.present]}>
            19
          </Text>
          <Text style={styles.summaryLabel}>Present</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>❌</Text>
          <Text style={[styles.summaryValue, styles.absent]}>
            3
          </Text>
          <Text style={styles.summaryLabel}>Absent</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>📈</Text>
          <Text style={styles.summaryValue}>86%</Text>
          <Text style={styles.summaryLabel}>Percentage</Text>
        </View>

      </View>

      {/* Today's Attendance */}
      <Text style={styles.sectionTitle}>
        Today's Training
      </Text>

      <View style={styles.todayCard}>

        <View style={styles.todayIcon}>
          <Text>🏏</Text>
        </View>

        <View style={styles.todayDetails}>
          <Text style={styles.todayTitle}>
            Batting Practice
          </Text>

          <Text style={styles.todayTime}>
            7:00 AM - 9:00 AM
          </Text>
        </View>

        <View style={styles.presentBadge}>
          <Text style={styles.presentBadgeText}>
            PRESENT
          </Text>
        </View>

      </View>

      {/* Attendance History */}
      <Text style={styles.sectionTitle}>
        Attendance History
      </Text>

      {/* 13 Sep */}
      <View style={styles.historyCard}>
        <View style={styles.dateBox}>
          <Text style={styles.dateDay}>13</Text>
          <Text style={styles.dateMonth}>SEP</Text>
        </View>

        <View style={styles.historyDetails}>
          <Text style={styles.historyTitle}>
            Batting Practice
          </Text>

          <Text style={styles.historyTime}>
            7:00 AM - 9:00 AM
          </Text>
        </View>

        <View style={styles.presentBadge}>
          <Text style={styles.presentBadgeText}>
            PRESENT
          </Text>
        </View>
      </View>

      {/* 12 Sep */}
      <View style={styles.historyCard}>
        <View style={styles.dateBox}>
          <Text style={styles.dateDay}>12</Text>
          <Text style={styles.dateMonth}>SEP</Text>
        </View>

        <View style={styles.historyDetails}>
          <Text style={styles.historyTitle}>
            Bowling Practice
          </Text>

          <Text style={styles.historyTime}>
            7:00 AM - 9:00 AM
          </Text>
        </View>

        <View style={styles.presentBadge}>
          <Text style={styles.presentBadgeText}>
            PRESENT
          </Text>
        </View>
      </View>

      {/* 11 Sep */}
      <View style={styles.historyCard}>
        <View style={styles.dateBox}>
          <Text style={styles.dateDay}>11</Text>
          <Text style={styles.dateMonth}>SEP</Text>
        </View>

        <View style={styles.historyDetails}>
          <Text style={styles.historyTitle}>
            Fitness Training
          </Text>

          <Text style={styles.historyTime}>
            6:30 AM - 8:00 AM
          </Text>
        </View>

        <View style={styles.absentBadge}>
          <Text style={styles.absentBadgeText}>
            ABSENT
          </Text>
        </View>
      </View>

      {/* 10 Sep */}
      <View style={styles.historyCard}>
        <View style={styles.dateBox}>
          <Text style={styles.dateDay}>10</Text>
          <Text style={styles.dateMonth}>SEP</Text>
        </View>

        <View style={styles.historyDetails}>
          <Text style={styles.historyTitle}>
            Fielding Practice
          </Text>

          <Text style={styles.historyTime}>
            7:00 AM - 9:00 AM
          </Text>
        </View>

        <View style={styles.presentBadge}>
          <Text style={styles.presentBadgeText}>
            PRESENT
          </Text>
        </View>
      </View>

      {/* 09 Sep */}
      <View style={styles.historyCard}>
        <View style={styles.dateBox}>
          <Text style={styles.dateDay}>09</Text>
          <Text style={styles.dateMonth}>SEP</Text>
        </View>

        <View style={styles.historyDetails}>
          <Text style={styles.historyTitle}>
            Batting Practice
          </Text>

          <Text style={styles.historyTime}>
            7:00 AM - 9:00 AM
          </Text>
        </View>

        <View style={styles.presentBadge}>
          <Text style={styles.presentBadgeText}>
            PRESENT
          </Text>
        </View>
      </View>

      {/* Info */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          💡 Attendance Reminder
        </Text>

        <Text style={styles.infoText}>
          Regular attendance helps you improve your
          skills and maintain your academy progress.
        </Text>
      </View>

      {/* Dashboard */}
      <TouchableOpacity
        style={styles.dashboardButton}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.dashboardText}>
          🏠 BACK TO DASHBOARD
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
    fontSize: 22,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#CFE1D7',
    fontSize: 13,
    marginTop: 4,
  },

  overallCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },

  circle: {
    width: 105,
    height: 105,
    borderRadius: 55,
    backgroundColor: '#E2F3E8',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 7,
    borderColor: '#16823A',
  },

  percentage: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#123B2A',
  },

  circleLabel: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },

  overallInfo: {
    flex: 1,
    marginLeft: 18,
  },

  overallTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#123B2A',
  },

  overallText: {
    fontSize: 12,
    color: '#777',
    lineHeight: 18,
    marginTop: 5,
  },

  progressBackground: {
    height: 8,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    marginTop: 12,
    overflow: 'hidden',
  },

  progressFill: {
    width: '86%',
    height: '100%',
    backgroundColor: '#16823A',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginHorizontal: 20,
    marginBottom: 12,
    marginTop: 5,
  },

  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  summaryCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 17,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },

  summaryIcon: {
    fontSize: 25,
  },

  summaryValue: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#123B2A',
    marginTop: 6,
  },

  summaryLabel: {
    color: '#777',
    fontSize: 12,
    marginTop: 4,
  },

  present: {
    color: '#16823A',
  },

  absent: {
    color: '#C73535',
  },

  todayCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  todayIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EEF6F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  todayDetails: {
    flex: 1,
    marginLeft: 13,
  },

  todayTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },

  todayTime: {
    color: '#777',
    fontSize: 12,
    marginTop: 4,
  },

  presentBadge: {
    backgroundColor: '#DFF5E7',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 8,
  },

  presentBadgeText: {
    color: '#16823A',
    fontSize: 10,
    fontWeight: 'bold',
  },

  absentBadge: {
    backgroundColor: '#FFE4E4',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 8,
  },

  absentBadgeText: {
    color: '#C73535',
    fontSize: 10,
    fontWeight: 'bold',
  },

  historyCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 13,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },

  dateBox: {
    width: 48,
    height: 50,
    backgroundColor: '#EEF6F1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateDay: {
    color: '#123B2A',
    fontSize: 19,
    fontWeight: 'bold',
  },

  dateMonth: {
    color: '#777',
    fontSize: 9,
    fontWeight: 'bold',
  },

  historyDetails: {
    flex: 1,
    marginLeft: 12,
  },

  historyTitle: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },

  historyTime: {
    color: '#888',
    fontSize: 11,
    marginTop: 4,
  },

  infoCard: {
    backgroundColor: '#FFF8E7',
    marginHorizontal: 20,
    marginTop: 12,
    padding: 16,
    borderRadius: 15,
  },

  infoTitle: {
    color: '#765900',
    fontSize: 15,
    fontWeight: 'bold',
  },

  infoText: {
    color: '#806E39',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },

  dashboardButton: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#123B2A',
  },

  dashboardText: {
    color: '#123B2A',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
