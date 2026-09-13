import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

const matches = [
  {
    id: 1,
    tournament: 'Academy Premier League',
    opponent: 'Rising Stars Academy',
    date: '20 September 2026',
    time: '8:00 AM',
    venue: 'Academy Ground',
    type: 'League Match',
    status: 'Upcoming',
  },
  {
    id: 2,
    tournament: 'District Cricket Cup',
    opponent: 'City Cricket Club',
    date: '27 September 2026',
    time: '9:00 AM',
    venue: 'Main Cricket Ground',
    type: 'Quarter Final',
    status: 'Upcoming',
  },
  {
    id: 3,
    tournament: 'Academy Premier League',
    opponent: 'Young Warriors',
    date: '6 September 2026',
    time: '7:30 AM',
    venue: 'Academy Ground',
    type: 'League Match',
    status: 'Completed',
  },
];

export default function MatchesManageScreen() {
  const [tournament, setTournament] = useState('');
  const [opponent, setOpponent] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [matchType, setMatchType] = useState('');

  const addMatch = () => {
    if (
      !tournament ||
      !opponent ||
      !date ||
      !time ||
      !venue ||
      !matchType
    ) {
      Alert.alert(
        'Missing Information',
        'Please fill all match details.'
      );
      return;
    }

    Alert.alert(
      'Match Added',
      'Match has been added successfully.',
      [
        {
          text: 'OK',
          onPress: () => {
            setTournament('');
            setOpponent('');
            setDate('');
            setTime('');
            setVenue('');
            setMatchType('');
          },
        },
      ]
    );
  };

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
            Matches
          </Text>

          <Text style={styles.headerSubtitle}>
            Manage matches and tournaments
          </Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.summaryRow}>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>🏆</Text>
          <Text style={styles.summaryNumber}>
            2
          </Text>
          <Text style={styles.summaryLabel}>
            Upcoming
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>🎯</Text>
          <Text style={styles.summaryNumber}>
            1
          </Text>
          <Text style={styles.summaryLabel}>
            Completed
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>🏏</Text>
          <Text style={styles.summaryNumber}>
            2
          </Text>
          <Text style={styles.summaryLabel}>
            Tournaments
          </Text>
        </View>

      </View>

      {/* Upcoming */}
      <Text style={styles.sectionTitle}>
        Matches
      </Text>

      {matches.map((match) => (
        <View
          key={match.id}
          style={styles.matchCard}
        >
          <View style={styles.matchTop}>

            <View style={styles.matchIcon}>
              <Text style={styles.matchEmoji}>
                🏏
              </Text>
            </View>

            <View style={styles.matchInfo}>
              <Text style={styles.tournamentName}>
                {match.tournament}
              </Text>

              <Text style={styles.opponent}>
                vs {match.opponent}
              </Text>
            </View>

            <View
              style={
                match.status === 'Upcoming'
                  ? styles.upcomingBadge
                  : styles.completedBadge
              }
            >
              <Text
                style={
                  match.status === 'Upcoming'
                    ? styles.upcomingText
                    : styles.completedText
                }
              >
                {match.status}
              </Text>
            </View>

          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              📅 Date
            </Text>

            <Text style={styles.detailValue}>
              {match.date}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              🕐 Time
            </Text>

            <Text style={styles.detailValue}>
              {match.time}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              📍 Venue
            </Text>

            <Text style={styles.detailValue}>
              {match.venue}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              🏆 Type
            </Text>

            <Text style={styles.detailValue}>
              {match.type}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              Alert.alert(
                'Edit Match',
                'Match editing will be connected to Firebase later.'
              )
            }
          >
            <Text style={styles.editText}>
              ✏️ EDIT MATCH
            </Text>
          </TouchableOpacity>

        </View>
      ))}

      {/* Add Match */}
      <Text style={styles.sectionTitle}>
        Add New Match
      </Text>

      <View style={styles.formCard}>

        <Text style={styles.label}>
          Tournament Name
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: Academy Premier League"
          placeholderTextColor="#999"
          value={tournament}
          onChangeText={setTournament}
        />

        <Text style={styles.label}>
          Opponent Team
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter opponent team"
          placeholderTextColor="#999"
          value={opponent}
          onChangeText={setOpponent}
        />

        <Text style={styles.label}>
          Match Date
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: 25 September 2026"
          placeholderTextColor="#999"
          value={date}
          onChangeText={setDate}
        />

        <Text style={styles.label}>
          Match Time
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: 8:00 AM"
          placeholderTextColor="#999"
          value={time}
          onChangeText={setTime}
        />

        <Text style={styles.label}>
          Venue
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter match venue"
          placeholderTextColor="#999"
          value={venue}
          onChangeText={setVenue}
        />

        <Text style={styles.label}>
          Match Type
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: League Match / Final"
          placeholderTextColor="#999"
          value={matchType}
          onChangeText={setMatchType}
        />

      </View>

      {/* Add */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={addMatch}
      >
        <Text style={styles.addText}>
          + ADD MATCH
        </Text>
      </TouchableOpacity>

      {/* Back */}
      <TouchableOpacity
        style={styles.dashboardButton}
        onPress={() => router.replace('/coach-dashboard')}
      >
        <Text style={styles.dashboardText}>
          ← BACK TO DASHBOARD
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

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  summaryCard: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 2,
  },

  summaryIcon: {
    fontSize: 22,
  },

  summaryNumber: {
    color: '#123B2A',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },

  summaryLabel: {
    color: '#777',
    fontSize: 10,
    marginTop: 3,
  },

  sectionTitle: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 12,
  },

  matchCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 17,
    borderRadius: 18,
    elevation: 2,
  },

  matchTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  matchIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5F1EA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  matchEmoji: {
    fontSize: 25,
  },

  matchInfo: {
    flex: 1,
    marginLeft: 11,
  },

  tournamentName: {
    color: '#123B2A',
    fontSize: 13,
    fontWeight: 'bold',
  },

  opponent: {
    color: '#222',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },

  upcomingBadge: {
    backgroundColor: '#FFF3D6',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 8,
  },

  completedBadge: {
    backgroundColor: '#DFF5E7',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 8,
  },

  upcomingText: {
    color: '#A66A00',
    fontSize: 9,
    fontWeight: 'bold',
  },

  completedText: {
    color: '#16823A',
    fontSize: 9,
    fontWeight: 'bold',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 14,
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  detailLabel: {
    color: '#777',
    fontSize: 11,
  },

  detailValue: {
    color: '#333',
    fontSize: 11,
    fontWeight: '600',
    maxWidth: '58%',
    textAlign: 'right',
  },

  editButton: {
    marginTop: 7,
    borderWidth: 1,
    borderColor: '#123B2A',
    paddingVertical: 10,
    borderRadius: 9,
    alignItems: 'center',
  },

  editText: {
    color: '#123B2A',
    fontSize: 10,
    fontWeight: 'bold',
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 18,
    elevation: 2,
  },

  label: {
    color: '#444',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 7,
  },

  input: {
    height: 49,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 13,
    color: '#222',
    backgroundColor: '#FAFAFA',
    marginBottom: 15,
  },

  addButton: {
    backgroundColor: '#123B2A',
    marginHorizontal: 20,
    marginTop: 20,
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
