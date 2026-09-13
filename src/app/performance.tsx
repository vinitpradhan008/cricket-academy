import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function PerformanceScreen() {
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
            My Performance
          </Text>

          <Text style={styles.headerSubtitle}>
            Track your cricket progress
          </Text>
        </View>
      </View>

      {/* Player */}
      <View style={styles.playerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>🏏</Text>
        </View>

        <View>
          <Text style={styles.playerName}>
            Rahul Patil
          </Text>

          <Text style={styles.playerRole}>
            All Rounder
          </Text>
        </View>
      </View>

      {/* Main Stats */}
      <Text style={styles.sectionTitle}>
        Season Statistics
      </Text>

      <View style={styles.statsGrid}>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🏏</Text>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Matches</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🔥</Text>
          <Text style={styles.statValue}>486</Text>
          <Text style={styles.statLabel}>Runs</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🎯</Text>
          <Text style={styles.statValue}>18</Text>
          <Text style={styles.statLabel}>Wickets</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>⭐</Text>
          <Text style={styles.statValue}>72</Text>
          <Text style={styles.statLabel}>Highest Score</Text>
        </View>

      </View>

      {/* Batting */}
      <Text style={styles.sectionTitle}>
        Batting Performance
      </Text>

      <View style={styles.performanceCard}>

        <View style={styles.performanceRow}>
          <Text style={styles.performanceLabel}>
            Matches
          </Text>
          <Text style={styles.performanceValue}>
            12
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.performanceRow}>
          <Text style={styles.performanceLabel}>
            Innings
          </Text>
          <Text style={styles.performanceValue}>
            11
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.performanceRow}>
          <Text style={styles.performanceLabel}>
            Runs
          </Text>
          <Text style={styles.performanceValue}>
            486
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.performanceRow}>
          <Text style={styles.performanceLabel}>
            Average
          </Text>
          <Text style={styles.performanceValue}>
            48.60
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.performanceRow}>
          <Text style={styles.performanceLabel}>
            Strike Rate
          </Text>
          <Text style={styles.performanceValue}>
            128.40
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.performanceRow}>
          <Text style={styles.performanceLabel}>
            Fifties
          </Text>
          <Text style={styles.performanceValue}>
            4
          </Text>
        </View>

      </View>

      {/* Bowling */}
      <Text style={styles.sectionTitle}>
        Bowling Performance
      </Text>

      <View style={styles.performanceCard}>

        <View style={styles.performanceRow}>
          <Text style={styles.performanceLabel}>
            Overs
          </Text>
          <Text style={styles.performanceValue}>
            38.2
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.performanceRow}>
          <Text style={styles.performanceLabel}>
            Wickets
          </Text>
          <Text style={styles.performanceValue}>
            18
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.performanceRow}>
          <Text style={styles.performanceLabel}>
            Economy
          </Text>
          <Text style={styles.performanceValue}>
            6.20
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.performanceRow}>
          <Text style={styles.performanceLabel}>
            Best Bowling
          </Text>
          <Text style={styles.performanceValue}>
            4 / 21
          </Text>
        </View>

      </View>

      {/* Recent Match */}
      <Text style={styles.sectionTitle}>
        Recent Match
      </Text>

      <View style={styles.matchCard}>

        <View>
          <Text style={styles.matchTitle}>
            Academy XI vs City Cricket Club
          </Text>

          <Text style={styles.matchDate}>
            12 September 2026
          </Text>
        </View>

        <View style={styles.resultBox}>
          <Text style={styles.resultText}>
            WON
          </Text>
        </View>

        <View style={styles.matchStats}>
          <Text style={styles.matchStat}>
            🏏 52 Runs
          </Text>

          <Text style={styles.matchStat}>
            🎯 2 Wickets
          </Text>
        </View>

      </View>

      {/* Back */}
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

  playerCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 18,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#E7F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  avatarText: {
    fontSize: 34,
  },

  playerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },

  playerRole: {
    color: '#123B2A',
    marginTop: 4,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginHorizontal: 20,
    marginBottom: 12,
    marginTop: 5,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
  },

  statIcon: {
    fontSize: 28,
  },

  statValue: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#123B2A',
    marginTop: 6,
  },

  statLabel: {
    color: '#777',
    marginTop: 4,
    fontSize: 13,
  },

  performanceCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    paddingHorizontal: 18,
    elevation: 2,
  },

  performanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },

  performanceLabel: {
    color: '#777',
    fontSize: 14,
  },

  performanceValue: {
    color: '#123B2A',
    fontSize: 15,
    fontWeight: 'bold',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
  },

  matchCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 16,
    elevation: 2,
    marginBottom: 20,
  },

  matchTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    maxWidth: '75%',
  },

  matchDate: {
    color: '#888',
    fontSize: 13,
    marginTop: 5,
  },

  resultBox: {
    position: 'absolute',
    right: 15,
    top: 18,
    backgroundColor: '#DFF5E7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  resultText: {
    color: '#16733A',
    fontWeight: 'bold',
    fontSize: 12,
  },

  matchStats: {
    flexDirection: 'row',
    marginTop: 18,
    gap: 20,
  },

  matchStat: {
    color: '#555',
    fontSize: 14,
    fontWeight: '600',
  },

  dashboardButton: {
    marginHorizontal: 20,
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
