import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function PlayerDetailsScreen() {
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
            Player Details
          </Text>

          <Text style={styles.headerSubtitle}>
            Complete player information
          </Text>
        </View>
      </View>

      {/* Profile */}
      <View style={styles.profileCard}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            RP
          </Text>
        </View>

        <Text style={styles.playerName}>
          Rahul Patil
        </Text>

        <Text style={styles.playerRole}>
          All Rounder • U-19
        </Text>

        <View style={styles.activeBadge}>
          <Text style={styles.activeText}>
            ● ACTIVE PLAYER
          </Text>
        </View>

      </View>

      {/* Personal Information */}
      <Text style={styles.sectionTitle}>
        Personal Information
      </Text>

      <View style={styles.card}>

        <View style={styles.row}>
          <Text style={styles.label}>Player ID</Text>
          <Text style={styles.value}>CA-2026-018</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Mobile</Text>
          <Text style={styles.value}>9876543210</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.value}>18 Years</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Jersey Number</Text>
          <Text style={styles.value}>18</Text>
        </View>

      </View>

      {/* Cricket Information */}
      <Text style={styles.sectionTitle}>
        Cricket Information
      </Text>

      <View style={styles.card}>

        <View style={styles.row}>
          <Text style={styles.label}>Player Type</Text>
          <Text style={styles.value}>All Rounder</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Batting</Text>
          <Text style={styles.value}>
            Right Hand
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Bowling</Text>
          <Text style={styles.value}>
            Right Arm Medium
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Preferred Role</Text>
          <Text style={styles.value}>
            Middle Order
          </Text>
        </View>

      </View>

      {/* Academy Information */}
      <Text style={styles.sectionTitle}>
        Academy Information
      </Text>

      <View style={styles.card}>

        <View style={styles.row}>
          <Text style={styles.label}>Batch</Text>
          <Text style={styles.value}>U-19</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Joining Date</Text>
          <Text style={styles.value}>
            10 June 2026
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Attendance</Text>
          <Text style={styles.greenValue}>
            92%
          </Text>
        </View>

      </View>

      {/* Performance */}
      <Text style={styles.sectionTitle}>
        Performance
      </Text>

      <View style={styles.performanceRow}>

        <View style={styles.performanceCard}>
          <Text style={styles.performanceIcon}>🏏</Text>
          <Text style={styles.performanceValue}>684</Text>
          <Text style={styles.performanceLabel}>
            Runs
          </Text>
        </View>

        <View style={styles.performanceCard}>
          <Text style={styles.performanceIcon}>🎯</Text>
          <Text style={styles.performanceValue}>24</Text>
          <Text style={styles.performanceLabel}>
            Wickets
          </Text>
        </View>

        <View style={styles.performanceCard}>
          <Text style={styles.performanceIcon}>⭐</Text>
          <Text style={styles.performanceValue}>78%</Text>
          <Text style={styles.performanceLabel}>
            Rating
          </Text>
        </View>

      </View>

      {/* Edit */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => {}}
      >
        <Text style={styles.editText}>
          ✏️ EDIT PLAYER
        </Text>
      </TouchableOpacity>

      {/* Back */}
      <TouchableOpacity
        style={styles.dashboardButton}
        onPress={() => router.replace('/players')}
      >
        <Text style={styles.dashboardText}>
          ← BACK TO PLAYERS
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

  profileCard: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 25,
    marginBottom: 20,
    elevation: 2,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E3F1E8',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#16823A',
  },

  avatarText: {
    color: '#123B2A',
    fontSize: 27,
    fontWeight: 'bold',
  },

  playerName: {
    color: '#222',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 12,
  },

  playerRole: {
    color: '#777',
    fontSize: 13,
    marginTop: 4,
  },

  activeBadge: {
    backgroundColor: '#DFF5E7',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 10,
  },

  activeText: {
    color: '#16823A',
    fontSize: 10,
    fontWeight: 'bold',
  },

  sectionTitle: {
    color: '#222',
    fontSize: 19,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 18,
    borderRadius: 17,
    elevation: 2,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },

  label: {
    color: '#777',
    fontSize: 13,
  },

  value: {
    color: '#222',
    fontSize: 14,
    fontWeight: '600',
  },

  greenValue: {
    color: '#16823A',
    fontSize: 15,
    fontWeight: 'bold',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 9,
  },

  performanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  performanceCard: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 2,
  },

  performanceIcon: {
    fontSize: 22,
  },

  performanceValue: {
    color: '#123B2A',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },

  performanceLabel: {
    color: '#777',
    fontSize: 10,
    marginTop: 3,
  },

  editButton: {
    backgroundColor: '#123B2A',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  editText: {
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
