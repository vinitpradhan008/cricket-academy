import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function MatchesScreen() {
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
            Matches & Tournaments
          </Text>

          <Text style={styles.headerSubtitle}>
            Fixtures, results and tournaments
          </Text>
        </View>
      </View>

      {/* Tournament Banner */}
      <View style={styles.tournamentBanner}>
        <Text style={styles.tournamentEmoji}>🏆</Text>

        <View style={styles.tournamentInfo}>
          <Text style={styles.tournamentLabel}>
            CURRENT TOURNAMENT
          </Text>

          <Text style={styles.tournamentTitle}>
            Nagpur Cricket League 2026
          </Text>

          <Text style={styles.tournamentText}>
            Academy U-19 Division
          </Text>
        </View>
      </View>

      {/* Upcoming Matches */}
      <Text style={styles.sectionTitle}>
        Upcoming Matches
      </Text>

      {/* Match 1 */}
      <View style={styles.matchCard}>

        <View style={styles.matchTop}>
          <Text style={styles.matchLabel}>
            LEAGUE MATCH
          </Text>

          <View style={styles.upcomingBadge}>
            <Text style={styles.upcomingText}>
              UPCOMING
            </Text>
          </View>
        </View>

        <Text style={styles.matchDate}>
          Saturday, 19 September 2026
        </Text>

        <Text style={styles.matchTime}>
          ⏰ 8:00 AM
        </Text>

        <View style={styles.teams}>

          <View style={styles.team}>
            <View style={styles.teamLogo}>
              <Text style={styles.teamLogoText}>🏏</Text>
            </View>

            <Text style={styles.teamName}>
              Academy XI
            </Text>
          </View>

          <Text style={styles.vs}>
            VS
          </Text>

          <View style={styles.team}>
            <View style={styles.teamLogo}>
              <Text style={styles.teamLogoText}>🦅</Text>
            </View>

            <Text style={styles.teamName}>
              City Cricket Club
            </Text>
          </View>

        </View>

        <View style={styles.venue}>
          <Text style={styles.venueText}>
            📍 VCA Ground, Nagpur
          </Text>
        </View>

      </View>

      {/* Match 2 */}
      <View style={styles.matchCard}>

        <View style={styles.matchTop}>
          <Text style={styles.matchLabel}>
            LEAGUE MATCH
          </Text>

          <View style={styles.upcomingBadge}>
            <Text style={styles.upcomingText}>
              UPCOMING
            </Text>
          </View>
        </View>

        <Text style={styles.matchDate}>
          Wednesday, 23 September 2026
        </Text>

        <Text style={styles.matchTime}>
          ⏰ 7:30 AM
        </Text>

        <View style={styles.teams}>

          <View style={styles.team}>
            <View style={styles.teamLogo}>
              <Text style={styles.teamLogoText}>🏏</Text>
            </View>

            <Text style={styles.teamName}>
              Academy XI
            </Text>
          </View>

          <Text style={styles.vs}>
            VS
          </Text>

          <View style={styles.team}>
            <View style={styles.teamLogo}>
              <Text style={styles.teamLogoText}>🐯</Text>
            </View>

            <Text style={styles.teamName}>
              Vidarbha Juniors
            </Text>
          </View>

        </View>

        <View style={styles.venue}>
          <Text style={styles.venueText}>
            📍 Academy Ground
          </Text>
        </View>

      </View>

      {/* Results */}
      <Text style={styles.sectionTitle}>
        Recent Results
      </Text>

      <View style={styles.resultCard}>

        <View style={styles.resultHeader}>
          <Text style={styles.matchLabel}>
            LEAGUE MATCH
          </Text>

          <View style={styles.winBadge}>
            <Text style={styles.winText}>
              WON
            </Text>
          </View>
        </View>

        <Text style={styles.resultDate}>
          12 September 2026
        </Text>

        <View style={styles.resultTeams}>
          <Text style={styles.resultTeam}>
            Academy XI
          </Text>

          <Text style={styles.resultScore}>
            168/6
          </Text>

          <Text style={styles.resultVs}>
            vs
          </Text>

          <Text style={styles.resultTeam}>
            City Cricket Club
          </Text>

          <Text style={styles.resultScore}>
            142/9
          </Text>
        </View>

        <View style={styles.resultSummary}>
          <Text style={styles.summaryText}>
            Academy XI won by 26 runs
          </Text>

          <Text style={styles.playerPerformance}>
            ⭐ Rahul Patil: 52 Runs • 2 Wickets
          </Text>
        </View>

      </View>

      <View style={styles.resultCard}>

        <View style={styles.resultHeader}>
          <Text style={styles.matchLabel}>
            PRACTICE MATCH
          </Text>

          <View style={styles.lossBadge}>
            <Text style={styles.lossText}>
              LOST
            </Text>
          </View>
        </View>

        <Text style={styles.resultDate}>
          05 September 2026
        </Text>

        <View style={styles.resultTeams}>
          <Text style={styles.resultTeam}>
            Academy XI
          </Text>

          <Text style={styles.resultScore}>
            151/8
          </Text>

          <Text style={styles.resultVs}>
            vs
          </Text>

          <Text style={styles.resultTeam}>
            Tigers CC
          </Text>

          <Text style={styles.resultScore}>
            154/5
          </Text>
        </View>

        <View style={styles.resultSummary}>
          <Text style={styles.lossSummary}>
            Tigers CC won by 5 wickets
          </Text>

          <Text style={styles.playerPerformance}>
            ⭐ Rahul Patil: 34 Runs • 1 Wicket
          </Text>
        </View>

      </View>

      {/* Tournament Stats */}
      <Text style={styles.sectionTitle}>
        Tournament Standing
      </Text>

      <View style={styles.tableCard}>

        <View style={styles.tableHeader}>
          <Text style={styles.teamColumn}>
            Team
          </Text>

          <Text style={styles.tableColumn}>
            P
          </Text>

          <Text style={styles.tableColumn}>
            W
          </Text>

          <Text style={styles.tableColumn}>
            L
          </Text>

          <Text style={styles.tableColumn}>
            Pts
          </Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.teamColumn}>
            Academy XI
          </Text>
          <Text style={styles.tableColumn}>4</Text>
          <Text style={styles.tableColumn}>3</Text>
          <Text style={styles.tableColumn}>1</Text>
          <Text style={styles.points}>6</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.teamColumn}>
            City CC
          </Text>
          <Text style={styles.tableColumn}>4</Text>
          <Text style={styles.tableColumn}>2</Text>
          <Text style={styles.tableColumn}>2</Text>
          <Text style={styles.points}>4</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.teamColumn}>
            Tigers CC
          </Text>
          <Text style={styles.tableColumn}>4</Text>
          <Text style={styles.tableColumn}>2</Text>
          <Text style={styles.tableColumn}>2</Text>
          <Text style={styles.points}>4</Text>
        </View>

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
    fontSize: 21,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#CFE1D7',
    fontSize: 13,
    marginTop: 4,
  },

  tournamentBanner: {
    margin: 20,
    backgroundColor: '#123B2A',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  tournamentEmoji: {
    fontSize: 45,
    marginRight: 15,
  },

  tournamentInfo: {
    flex: 1,
  },

  tournamentLabel: {
    color: '#CFE1D7',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  tournamentTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },

  tournamentText: {
    color: '#D8E8DF',
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

  matchCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 18,
    borderRadius: 18,
    elevation: 2,
  },

  matchTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  matchLabel: {
    color: '#777',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  upcomingBadge: {
    backgroundColor: '#E8F0FF',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 7,
  },

  upcomingText: {
    color: '#2457A6',
    fontSize: 10,
    fontWeight: 'bold',
  },

  matchDate: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 12,
  },

  matchTime: {
    color: '#777',
    fontSize: 13,
    marginTop: 5,
  },

  teams: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 18,
  },

  team: {
    alignItems: 'center',
    width: '38%',
  },

  teamLogo: {
    width: 52,
    height: 52,
    borderRadius: 28,
    backgroundColor: '#EEF6F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  teamLogoText: {
    fontSize: 26,
  },

  teamName: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginTop: 7,
  },

  vs: {
    color: '#999',
    fontSize: 13,
    fontWeight: 'bold',
  },

  venue: {
    backgroundColor: '#F5F7FA',
    borderRadius: 10,
    padding: 10,
    marginTop: 17,
  },

  venueText: {
    color: '#666',
    fontSize: 13,
    textAlign: 'center',
  },

  resultCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 18,
    borderRadius: 18,
    elevation: 2,
  },

  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  winBadge: {
    backgroundColor: '#DFF5E7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
  },

  winText: {
    color: '#16823A',
    fontSize: 10,
    fontWeight: 'bold',
  },

  lossBadge: {
    backgroundColor: '#FFE4E4',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
  },

  lossText: {
    color: '#C73535',
    fontSize: 10,
    fontWeight: 'bold',
  },

  resultDate: {
    color: '#888',
    fontSize: 12,
    marginTop: 8,
  },

  resultTeams: {
    marginTop: 15,
  },

  resultTeam: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },

  resultScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#123B2A',
    marginTop: 3,
    marginBottom: 3,
  },

  resultVs: {
    color: '#999',
    fontSize: 12,
    marginVertical: 2,
  },

  resultSummary: {
    backgroundColor: '#EEF6F1',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },

  summaryText: {
    color: '#16823A',
    fontWeight: 'bold',
    fontSize: 13,
  },

  lossSummary: {
    color: '#C73535',
    fontWeight: 'bold',
    fontSize: 13,
  },

  playerPerformance: {
    color: '#666',
    fontSize: 12,
    marginTop: 5,
  },

  tableCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    marginBottom: 20,
  },

  tableHeader: {
    backgroundColor: '#123B2A',
    flexDirection: 'row',
    padding: 14,
  },

  tableRow: {
    flexDirection: 'row',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  teamColumn: {
    flex: 1,
    color: '#333',
    fontSize: 13,
    fontWeight: '600',
  },

  tableColumn: {
    width: 35,
    textAlign: 'center',
    color: '#666',
    fontSize: 13,
  },

  points: {
    width: 35,
    textAlign: 'center',
    color: '#123B2A',
    fontWeight: 'bold',
    fontSize: 13,
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
