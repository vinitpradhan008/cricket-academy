import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function NoticesScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.headerTitle}>Academy Notices</Text>
          <Text style={styles.headerSubtitle}>
            Latest updates and announcements
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Latest Notices</Text>

      <View style={styles.noticeCard}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>🏏</Text>
        </View>

        <View style={styles.noticeContent}>
          <Text style={styles.noticeTitle}>
            Sunday Practice Session
          </Text>

          <Text style={styles.noticeDate}>
            13 September 2026
          </Text>

          <Text style={styles.noticeText}>
            Special practice session is scheduled for Sunday.
            All players are requested to attend on time.
          </Text>

          <View style={styles.importantBadge}>
            <Text style={styles.importantText}>IMPORTANT</Text>
          </View>
        </View>
      </View>

      <View style={styles.noticeCard}>
        <View style={styles.iconBoxBlue}>
          <Text style={styles.icon}>🏆</Text>
        </View>

        <View style={styles.noticeContent}>
          <Text style={styles.noticeTitle}>
            Upcoming Tournament
          </Text>

          <Text style={styles.noticeDate}>
            10 September 2026
          </Text>

          <Text style={styles.noticeText}>
            Team selection for the upcoming tournament will
            be announced after the next practice session.
          </Text>

          <View style={styles.normalBadge}>
            <Text style={styles.normalText}>UPDATE</Text>
          </View>
        </View>
      </View>

      <View style={styles.noticeCard}>
        <View style={styles.iconBoxOrange}>
          <Text style={styles.icon}>💰</Text>
        </View>

        <View style={styles.noticeContent}>
          <Text style={styles.noticeTitle}>
            Monthly Fees Reminder
          </Text>

          <Text style={styles.noticeDate}>
            05 September 2026
          </Text>

          <Text style={styles.noticeText}>
            Players with pending monthly fees are requested
            to complete their payment before the due date.
          </Text>

          <View style={styles.feesBadge}>
            <Text style={styles.feesText}>FEES</Text>
          </View>
        </View>
      </View>

      <View style={styles.noticeCard}>
        <View style={styles.iconBoxGreen}>
          <Text style={styles.icon}>📅</Text>
        </View>

        <View style={styles.noticeContent}>
          <Text style={styles.noticeTitle}>
            Training Schedule Updated
          </Text>

          <Text style={styles.noticeDate}>
            01 September 2026
          </Text>

          <Text style={styles.noticeText}>
            The monthly training schedule has been updated.
            Please check the Training section for details.
          </Text>

          <View style={styles.normalBadge}>
            <Text style={styles.normalText}>SCHEDULE</Text>
          </View>
        </View>
      </View>

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

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    margin: 20,
    marginBottom: 12,
  },

  noticeCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 16,
    borderRadius: 18,
    flexDirection: 'row',
    elevation: 2,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#E8F3EC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconBoxBlue: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#E8F0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconBoxOrange: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#FFF1DD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconBoxGreen: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#E5F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 25,
  },

  noticeContent: {
    flex: 1,
    marginLeft: 13,
  },

  noticeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },

  noticeDate: {
    color: '#999',
    fontSize: 11,
    marginTop: 4,
  },

  noticeText: {
    color: '#666',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 9,
  },

  importantBadge: {
    backgroundColor: '#FFE4E4',
    alignSelf: 'flex-start',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 7,
    marginTop: 10,
  },

  importantText: {
    color: '#C73535',
    fontSize: 9,
    fontWeight: 'bold',
  },

  normalBadge: {
    backgroundColor: '#E5F0FF',
    alignSelf: 'flex-start',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 7,
    marginTop: 10,
  },

  normalText: {
    color: '#2457A6',
    fontSize: 9,
    fontWeight: 'bold',
  },

  feesBadge: {
    backgroundColor: '#FFF1DD',
    alignSelf: 'flex-start',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 7,
    marginTop: 10,
  },

  feesText: {
    color: '#C47700',
    fontSize: 9,
    fontWeight: 'bold',
  },

  dashboardButton: {
    marginHorizontal: 20,
    marginTop: 10,
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
