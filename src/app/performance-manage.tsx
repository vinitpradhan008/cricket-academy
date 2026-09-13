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

const players = [
  {
    id: 1,
    name: 'Rahul Patil',
    batch: 'U-19',
    initials: 'RP',
    runs: '684',
    wickets: '24',
  },
  {
    id: 2,
    name: 'Akash Sharma',
    batch: 'U-19',
    initials: 'AS',
    runs: '521',
    wickets: '8',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    batch: 'Senior',
    initials: 'VS',
    runs: '245',
    wickets: '36',
  },
  {
    id: 4,
    name: 'Amit More',
    batch: 'U-17',
    initials: 'AM',
    runs: '438',
    wickets: '12',
  },
];

export default function PerformanceManageScreen() {
  const [selectedPlayer, setSelectedPlayer] = useState(1);
  const [runs, setRuns] = useState('684');
  const [wickets, setWickets] = useState('24');
  const [matches, setMatches] = useState('18');
  const [rating, setRating] = useState('78');
  const [notes, setNotes] = useState('');

  const selectPlayer = (player: (typeof players)[0]) => {
    setSelectedPlayer(player.id);
    setRuns(player.runs);
    setWickets(player.wickets);
    setMatches('18');
    setRating('78');
    setNotes('');
  };

  const savePerformance = () => {
    Alert.alert(
      'Performance Saved',
      'Player performance has been updated successfully.'
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
            Performance
          </Text>

          <Text style={styles.headerSubtitle}>
            Update player performance
          </Text>
        </View>
      </View>

      {/* Player Selection */}
      <Text style={styles.sectionTitle}>
        Select Player
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.playerScroll}
      >
        {players.map((player) => {
          const selected = selectedPlayer === player.id;

          return (
            <TouchableOpacity
              key={player.id}
              style={[
                styles.playerSelectCard,
                selected && styles.selectedPlayerCard,
              ]}
              onPress={() => selectPlayer(player)}
            >
              <View
                style={[
                  styles.smallAvatar,
                  selected && styles.selectedAvatar,
                ]}
              >
                <Text
                  style={[
                    styles.smallAvatarText,
                    selected && styles.selectedAvatarText,
                  ]}
                >
                  {player.initials}
                </Text>
              </View>

              <Text
                style={[
                  styles.selectName,
                  selected && styles.selectedName,
                ]}
              >
                {player.name}
              </Text>

              <Text
                style={[
                  styles.selectBatch,
                  selected && styles.selectedBatch,
                ]}
              >
                {player.batch}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Stats */}
      <Text style={styles.sectionTitle}>
        Performance Statistics
      </Text>

      <View style={styles.statsCard}>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            🏏 Runs
          </Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={runs}
            onChangeText={setRuns}
            placeholder="Enter runs"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            🎯 Wickets
          </Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={wickets}
            onChangeText={setWickets}
            placeholder="Enter wickets"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            🏆 Matches Played
          </Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={matches}
            onChangeText={setMatches}
            placeholder="Enter matches"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            ⭐ Performance Rating
          </Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={rating}
            onChangeText={setRating}
            placeholder="0 - 100"
            placeholderTextColor="#999"
            maxLength={3}
          />
        </View>

      </View>

      {/* Coach Notes */}
      <Text style={styles.sectionTitle}>
        Coach Notes
      </Text>

      <View style={styles.notesCard}>
        <TextInput
          style={styles.notesInput}
          placeholder="Write performance feedback..."
          placeholderTextColor="#999"
          multiline
          numberOfLines={5}
          value={notes}
          onChangeText={setNotes}
          textAlignVertical="top"
        />
      </View>

      {/* Current Rating */}
      <View style={styles.ratingCard}>

        <View>
          <Text style={styles.ratingLabel}>
            Current Rating
          </Text>

          <Text style={styles.ratingNumber}>
            {rating}/100
          </Text>
        </View>

        <View style={styles.ratingCircle}>
          <Text style={styles.ratingStar}>
            ⭐
          </Text>
        </View>

      </View>

      {/* Save */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={savePerformance}
      >
        <Text style={styles.saveText}>
          ✓ SAVE PERFORMANCE
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

  sectionTitle: {
    color: '#222',
    fontSize: 19,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },

  playerScroll: {
    paddingHorizontal: 20,
    paddingBottom: 3,
  },

  playerSelectCard: {
    width: 125,
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderRadius: 16,
    alignItems: 'center',
    marginRight: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  selectedPlayerCard: {
    backgroundColor: '#123B2A',
    borderColor: '#123B2A',
  },

  smallAvatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#E3F1E8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedAvatar: {
    backgroundColor: '#FFFFFF',
  },

  smallAvatarText: {
    color: '#123B2A',
    fontSize: 13,
    fontWeight: 'bold',
  },

  selectedAvatarText: {
    color: '#123B2A',
  },

  selectName: {
    color: '#222',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 7,
    textAlign: 'center',
  },

  selectedName: {
    color: '#FFFFFF',
  },

  selectBatch: {
    color: '#777',
    fontSize: 10,
    marginTop: 3,
  },

  selectedBatch: {
    color: '#CFE1D7',
  },

  statsCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 18,
    elevation: 2,
  },

  inputGroup: {
    marginBottom: 14,
  },

  label: {
    color: '#444',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 7,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 13,
    color: '#222',
    backgroundColor: '#FAFAFA',
  },

  notesCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 17,
    elevation: 2,
  },

  notesInput: {
    minHeight: 110,
    color: '#222',
    fontSize: 13,
    lineHeight: 20,
  },

  ratingCard: {
    backgroundColor: '#123B2A',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 18,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ratingLabel: {
    color: '#CFE1D7',
    fontSize: 12,
  },

  ratingNumber: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 4,
  },

  ratingCircle: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ratingStar: {
    fontSize: 27,
  },

  saveButton: {
    backgroundColor: '#123B2A',
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  saveText: {
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
