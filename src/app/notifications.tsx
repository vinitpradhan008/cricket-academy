import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function NotificationsScreen() {
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
            Notifications
          </Text>

          <Text style={styles.headerSubtitle}>
            Academy updates and reminders
          </Text>
        </View>
      </View>

      {/* Notification Summary */}
      <View style={styles.summaryCard}>
        <View style={styles.bellCircle}>
          <Text style={styles.bell}>🔔</Text>
        </View>

        <View style={styles.summaryContent}>
          <Text style={styles.summaryTitle}>
            You have 4 new updates
          </Text>

          <Text style={styles.summaryText}>
            Check the latest academy notifications below.
          </Text>
        </View>
      </View>

      {/* Today */}
      <Text style={styles.sectionTitle}>
        Today
      </Text>

      <View style={styles.notificationCard}>
        <View style={styles.iconGreen}>
          <Text style={styles.icon}>🏏</Text>
        </View>

        <View style={styles.notificationContent}>
          <View style={styles.titleRow}>
            <Text style={styles.notificationTitle}>
              Training Reminder
            </Text>

            <View style={styles.unreadDot} />
          </View>

          <Text style={styles.notificationText}>
            Your batting practice is scheduled for 7:00 AM
            today. Please arrive on time.
          </Text>

          <Text style={styles.time}>
            30 minutes ago
          </Text>
        </View>
      </View>

      <View style={styles.notificationCard}>
        <View style={styles.iconBlue}>
          <Text style={styles.icon}>🏆</Text>
        </View>

        <View style={styles.notificationContent}>
          <View style={styles.titleRow}>
            <Text style={styles.notificationTitle}>
              Match Update
            </Text>

            <View style={styles.unreadDot} />
          </View>

          <Text style={styles.notificationText}>
            The upcoming match schedule has been updated.
            Check the Matches section for details.
          </Text>

          <Text style={styles.time}>
            2 hours ago
          </Text>
        </View>
      </View>

      {/* Yesterday */}
      <Text style={styles.sectionTitle}>
        Yesterday
      </Text>

      <View style={styles.notificationCard}>
        <View style={styles.iconOrange}>
          <Text style={styles.icon}>💰</Text>
        </View>

        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>
            Fee Reminder
          </Text>

          <Text style={styles.notificationText}>
            Your monthly academy fee information has been
            updated. Please check the Fees section.
          </Text>

          <Text style={styles.time}>
            Yesterday, 6:30 PM
          </Text>
        </View>
      </View>

      <View style={styles.notificationCard}>
        <View style={styles.iconPurple}>
          <Text style={styles.icon}>📢</Text>
        </View>

        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>
            Academy Announcement
          </Text>

          <Text style={styles.notificationText}>
            A new academy notice has been published. Please
            check the Notices section.
          </Text>

          <Text style={styles.time}>
            Yesterday, 4:15 PM
          </Text>
        </View>
      </View>

      {/* Earlier */}
      <Text style={styles.sectionTitle}>
        Earlier
      </Text>

      <View style={styles.notificationCard}>
        <View style={styles.iconRed}>
          <Text style={styles.icon}>📋</Text>
        </View>

        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>
            Attendance Updated
          </Text>

          <Text style={styles.notificationText}>
            Your attendance record has been updated for the
            latest training session.
          </Text>

          <Text style={styles.time}>
            10 September 2026
          </Text>
        </View>
      </View>

      {/* Mark all */}
      <TouchableOpacity
        style={styles.markButton}
        onPress={() => {}}
      >
        <Text style={styles.markButtonText}>
          ✓ MARK ALL AS READ
        </Text>
      </TouchableOpacity>

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

  summaryCard: {
    backgroundColor: '#123B2A',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  bellCircle: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bell: {
    fontSize: 28,
  },

  summaryContent: {
    flex: 1,
    marginLeft: 15,
  },

  summaryTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  summaryText: {
    color: '#D8E8DF',
    fontSize: 12,
    marginTop: 5,
    lineHeight: 18,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222',
    marginHorizontal: 20,
    marginBottom: 12,
    marginTop: 5,
  },

  notificationCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 15,
    borderRadius: 17,
    flexDirection: 'row',
    elevation: 2,
  },

  iconGreen: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#E4F3E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconBlue: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#E4EDFC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconOrange: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#FFF0D9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconPurple: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#EDE4F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconRed: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#FBE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 25,
  },

  notificationContent: {
    flex: 1,
    marginLeft: 13,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationTitle: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
  },

  unreadDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#16823A',
  },

  notificationText: {
    color: '#666',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },

  time: {
    color: '#999',
    fontSize: 10,
    marginTop: 7,
  },

  markButton: {
    marginHorizontal: 20,
    marginTop: 5,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#E8F3EC',
  },

  markButtonText: {
    color: '#123B2A',
    fontSize: 13,
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
    fontWeight: 'bold',
    fontSize: 15,
  },
});
