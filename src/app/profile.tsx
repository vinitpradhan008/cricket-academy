import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
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
          <Text style={styles.headerTitle}>My Profile</Text>
          <Text style={styles.headerSubtitle}>
            Manage your player information
          </Text>
        </View>
      </View>

      {/* Profile Photo */}
      <View style={styles.profileSection}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileEmoji}>👤</Text>
        </View>

        <TouchableOpacity style={styles.photoButton}>
          <Text style={styles.photoButtonText}>
            📷 Change Photo
          </Text>
        </TouchableOpacity>

        <Text style={styles.playerName}>
          Rahul Patil
        </Text>

        <Text style={styles.playerRole}>
          Student Player
        </Text>
      </View>

      {/* Personal Information */}
      <Text style={styles.sectionTitle}>
        Personal Information
      </Text>

      <View style={styles.formCard}>

        <Text style={styles.label}>Player Name</Text>
        <TextInput
          style={styles.input}
          value="Rahul Patil"
          editable={false}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          value="9876543210"
          keyboardType="phone-pad"
          editable={false}
        />

        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value="18"
          keyboardType="numeric"
          editable={false}
        />

        <Text style={styles.label}>Jersey Number</Text>
        <TextInput
          style={styles.input}
          value="18"
          keyboardType="numeric"
          editable={false}
        />

      </View>

      {/* Cricket Information */}
      <Text style={styles.sectionTitle}>
        Cricket Information
      </Text>

      <View style={styles.formCard}>

        <Text style={styles.label}>Player Type</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            All Rounder
          </Text>
        </View>

        <Text style={styles.label}>Batting Style</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Right Hand Batsman
          </Text>
        </View>

        <Text style={styles.label}>Bowling Style</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Right Arm Medium Fast
          </Text>
        </View>

        <Text style={styles.label}>Preferred Role</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Middle Order
          </Text>
        </View>

      </View>

      {/* Academy Information */}
      <Text style={styles.sectionTitle}>
        Academy Information
      </Text>

      <View style={styles.academyCard}>

        <View style={styles.academyRow}>
          <Text style={styles.academyLabel}>
            Student ID
          </Text>

          <Text style={styles.academyValue}>
            CA-2026-018
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.academyRow}>
          <Text style={styles.academyLabel}>
            Batch
          </Text>

          <Text style={styles.academyValue}>
            U-19
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.academyRow}>
          <Text style={styles.academyLabel}>
            Joining Date
          </Text>

          <Text style={styles.academyValue}>
            10 June 2026
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.academyRow}>
          <Text style={styles.academyLabel}>
            Status
          </Text>

          <View style={styles.activeBadge}>
            <Text style={styles.activeText}>
              ACTIVE
            </Text>
          </View>
        </View>

      </View>

      {/* Edit Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => {}}
      >
        <Text style={styles.editButtonText}>
          ✏️ EDIT PROFILE
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

  profileSection: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 25,
    marginBottom: 20,
    elevation: 2,
  },

  profileCircle: {
    width: 105,
    height: 105,
    borderRadius: 55,
    backgroundColor: '#E5F1EA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#16823A',
  },

  profileEmoji: {
    fontSize: 55,
  },

  photoButton: {
    backgroundColor: '#123B2A',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: -5,
  },

  photoButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  playerName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 13,
  },

  playerRole: {
    color: '#777',
    fontSize: 13,
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginHorizontal: 20,
    marginBottom: 12,
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 18,
    borderRadius: 18,
    elevation: 2,
  },

  label: {
    color: '#555',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 7,
    marginTop: 5,
  },

  input: {
    height: 46,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 10,
    paddingHorizontal: 13,
    color: '#333',
    backgroundColor: '#F8F9FA',
    marginBottom: 12,
  },

  infoBox: {
    height: 46,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 10,
    paddingHorizontal: 13,
    justifyContent: 'center',
    backgroundColor: '#F8F9FA',
    marginBottom: 12,
  },

  infoText: {
    color: '#333',
    fontSize: 14,
  },

  academyCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 18,
    borderRadius: 18,
    elevation: 2,
  },

  academyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  academyLabel: {
    color: '#777',
    fontSize: 13,
  },

  academyValue: {
    color: '#222',
    fontSize: 14,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 10,
  },

  activeBadge: {
    backgroundColor: '#DFF5E7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
  },

  activeText: {
    color: '#16823A',
    fontSize: 10,
    fontWeight: 'bold',
  },

  editButton: {
    backgroundColor: '#123B2A',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  editButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
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
