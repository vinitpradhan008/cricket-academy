import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function PlayersScreen() {
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
          <Text style={styles.headerTitle}>Players</Text>
          <Text style={styles.headerSubtitle}>
            Manage academy players
          </Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.summaryCard}>
        <View>
          <Text style={styles.summaryLabel}>
            Total Players
          </Text>

          <Text style={styles.summaryNumber}>
            48
          </Text>
        </View>

        <View style={styles.summaryRight}>
          <Text style={styles.summaryIcon}>👥</Text>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>

        <Text style={styles.searchText}>
          Search player...
        </Text>
      </View>

      {/* Section */}
      <Text style={styles.sectionTitle}>
        All Players
      </Text>

      {/* Player 1 */}
      <View style={styles.playerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>RP</Text>
        </View>

        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>
            Rahul Patil
          </Text>

          <Text style={styles.playerDetails}>
            Age 18 • U-19 • All Rounder
          </Text>

          <Text style={styles.playerStatus}>
            ● Active
          </Text>
        </View>

        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>

      {/* Player 2 */}
      <View style={styles.playerCard}>
        <View style={[styles.avatar, styles.avatarBlue]}>
          <Text style={styles.avatarText}>AS</Text>
        </View>

        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>
            Akash Sharma
          </Text>

          <Text style={styles.playerDetails}>
            Age 17 • U-19 • Batsman
          </Text>

          <Text style={styles.playerStatus}>
            ● Active
          </Text>
        </View>

        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>

      {/* Player 3 */}
      <View style={styles.playerCard}>
        <View style={[styles.avatar, styles.avatarOrange]}>
          <Text style={styles.avatarText}>VS</Text>
        </View>

        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>
            Vikram Singh
          </Text>

          <Text style={styles.playerDetails}>
            Age 19 • Senior • Bowler
          </Text>

          <Text style={styles.playerStatus}>
            ● Active
          </Text>
        </View>

        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>

      {/* Player 4 */}
      <View style={styles.playerCard}>
        <View style={[styles.avatar, styles.avatarPurple]}>
          <Text style={styles.avatarText}>AM</Text>
        </View>

        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>
            Amit More
          </Text>

          <Text style={styles.playerDetails}>
            Age 16 • U-17 • Batsman
          </Text>

          <Text style={styles.playerStatus}>
            ● Active
          </Text>
        </View>

        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>

      {/* Player 5 */}
      <View style={styles.playerCard}>
        <View style={[styles.avatar, styles.avatarRed]}>
          <Text style={styles.avatarText}>RK</Text>
        </View>

        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>
            Rohan Kulkarni
          </Text>

          <Text style={styles.playerDetails}>
            Age 15 • U-17 • All Rounder
          </Text>

          <Text style={styles.playerStatus}>
            ● Active
          </Text>
        </View>

        <TouchableOpacity style={styles.viewButton}
        onPress={() => router.push('/player-details')}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>

      {/* Add Player */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/add-player')}
      >
        <Text style={styles.addText}>
          + ADD NEW PLAYER
        </Text>
      </TouchableOpacity>

      {/* Dashboard */}
      <TouchableOpacity
        style={styles.dashboardButton}
        onPress={() => router.replace('/coach-dashboard')}
      >
        <Text style={styles.dashboardText}>
          🏠 BACK TO COACH DASHBOARD
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

  summaryCard: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#123B2A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  summaryLabel: {
    color: '#CFE1D7',
    fontSize: 13,
  },

  summaryNumber: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 4,
  },

  summaryRight: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  summaryIcon: {
    fontSize: 29,
  },

  searchBox: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    height: 50,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    elevation: 1,
  },

  searchIcon: {
    fontSize: 18,
  },

  searchText: {
    color: '#999',
    marginLeft: 10,
    fontSize: 13,
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
    marginBottom: 12,
    padding: 13,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 27,
    backgroundColor: '#E2F1E7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarBlue: {
    backgroundColor: '#E4EDFC',
  },

  avatarOrange: {
    backgroundColor: '#FFF0D9',
  },

  avatarPurple: {
    backgroundColor: '#EDE4F8',
  },

  avatarRed: {
    backgroundColor: '#FBE2E2',
  },

  avatarText: {
    color: '#123B2A',
    fontSize: 16,
    fontWeight: 'bold',
  },

  playerInfo: {
    flex: 1,
    marginLeft: 12,
  },

  playerName: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
  },

  playerDetails: {
    color: '#777',
    fontSize: 11,
    marginTop: 4,
  },

  playerStatus: {
    color: '#16823A',
    fontSize: 10,
    marginTop: 4,
    fontWeight: '600',
  },

  viewButton: {
    backgroundColor: '#E8F3EC',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
  },

  viewText: {
    color: '#123B2A',
    fontSize: 10,
    fontWeight: 'bold',
  },

  addButton: {
    backgroundColor: '#123B2A',
    marginHorizontal: 20,
    marginTop: 8,
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
