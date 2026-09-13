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

const initialPlayers = [
  {
    id: 1,
    name: 'Rahul Patil',
    mobile: '9876543210',
    age: '18',
    batch: 'U-19',
    role: 'All Rounder',
    initials: 'RP',
  },
  {
    id: 2,
    name: 'Akash Sharma',
    mobile: '9876543211',
    age: '17',
    batch: 'U-19',
    role: 'Batsman',
    initials: 'AS',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    mobile: '9876543212',
    age: '21',
    batch: 'Senior',
    role: 'Bowler',
    initials: 'VS',
  },
  {
    id: 4,
    name: 'Amit More',
    mobile: '9876543213',
    age: '16',
    batch: 'U-17',
    role: 'Batsman',
    initials: 'AM',
  },
  {
    id: 5,
    name: 'Rohan Kulkarni',
    mobile: '9876543214',
    age: '16',
    batch: 'U-17',
    role: 'Wicket Keeper',
    initials: 'RK',
  },
];

export default function PlayersManageScreen() {
  const [players, setPlayers] = useState(initialPlayers);
  const [search, setSearch] = useState('');

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  const deletePlayer = (id: number, name: string) => {
    Alert.alert(
      'Delete Player',
      `Are you sure you want to delete ${name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setPlayers((current) =>
              current.filter((player) => player.id !== id)
            );
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
            Players
          </Text>

          <Text style={styles.headerSubtitle}>
            Manage academy players
          </Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.summaryRow}>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>👥</Text>
          <Text style={styles.summaryNumber}>
            {players.length}
          </Text>
          <Text style={styles.summaryLabel}>
            Total Players
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>🟢</Text>
          <Text style={styles.summaryNumber}>
            {players.length}
          </Text>
          <Text style={styles.summaryLabel}>
            Active
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>🏏</Text>
          <Text style={styles.summaryNumber}>
            3
          </Text>
          <Text style={styles.summaryLabel}>
            Batches
          </Text>
        </View>

      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search player..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Add Player */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          Alert.alert(
            'Add Player',
            'Player registration will be connected to Firebase later.'
          )
        }
      >
        <Text style={styles.addText}>
          + ADD PLAYER
        </Text>
      </TouchableOpacity>

      {/* Player List */}
      <Text style={styles.sectionTitle}>
        Player List
      </Text>

      {filteredPlayers.map((player) => (
        <View
          key={player.id}
          style={styles.playerCard}
        >

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {player.initials}
            </Text>
          </View>

          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>
              {player.name}
            </Text>

            <Text style={styles.playerDetails}>
              {player.age} Years • {player.batch}
            </Text>

            <Text style={styles.playerRole}>
              {player.role}
            </Text>

            <Text style={styles.playerMobile}>
              📱 {player.mobile}
            </Text>
          </View>

          <View style={styles.actionColumn}>

            <TouchableOpacity
              style={styles.viewButton}
              onPress={() =>
                router.push('/player-details')
              }
            >
              <Text style={styles.viewText}>
                VIEW
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.editButton}
              onPress={() =>
                Alert.alert(
                  'Edit Player',
                  'Player editing will be connected to Firebase later.'
                )
              }
            >
              <Text style={styles.editText}>
                EDIT
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() =>
                deletePlayer(player.id, player.name)
              }
            >
              <Text style={styles.deleteText}>
                DELETE
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      ))}

      {filteredPlayers.length === 0 && (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyIcon}>
            🔍
          </Text>

          <Text style={styles.emptyTitle}>
            No Player Found
          </Text>

          <Text style={styles.emptyText}>
            Try searching with another name.
          </Text>
        </View>
      )}

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
    fontSize: 21,
  },

  summaryNumber: {
    color: '#123B2A',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 4,
  },

  summaryLabel: {
    color: '#777',
    fontSize: 9,
    marginTop: 3,
  },

  searchBox: {
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    elevation: 2,
  },

  searchIcon: {
    fontSize: 17,
  },

  searchInput: {
    flex: 1,
    marginLeft: 9,
    color: '#222',
    fontSize: 13,
  },

  addButton: {
    backgroundColor: '#123B2A',
    marginHorizontal: 20,
    marginTop: 13,
    paddingVertical: 15,
    borderRadius: 11,
    alignItems: 'center',
  },

  addText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  sectionTitle: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 22,
    marginBottom: 12,
  },

  playerCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 14,
    borderRadius: 17,
    flexDirection: 'row',
    elevation: 2,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E3F1E8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#123B2A',
    fontSize: 15,
    fontWeight: 'bold',
  },

  playerInfo: {
    flex: 1,
    marginLeft: 11,
    paddingRight: 6,
  },

  playerName: {
    color: '#222',
    fontSize: 14,
    fontWeight: 'bold',
  },

  playerDetails: {
    color: '#777',
    fontSize: 10,
    marginTop: 4,
  },

  playerRole: {
    color: '#16823A',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 3,
  },

  playerMobile: {
    color: '#888',
    fontSize: 9,
    marginTop: 4,
  },

  actionColumn: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  viewButton: {
    backgroundColor: '#E5F1EA',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 7,
    marginBottom: 5,
  },

  viewText: {
    color: '#123B2A',
    fontSize: 8,
    fontWeight: 'bold',
  },

  editButton: {
    backgroundColor: '#FFF3D6',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 7,
    marginBottom: 5,
  },

  editText: {
    color: '#A66A00',
    fontSize: 8,
    fontWeight: 'bold',
  },

  deleteButton: {
    backgroundColor: '#FBE3E3',
    paddingHorizontal: 7,
    paddingVertical: 6,
    borderRadius: 7,
  },

  deleteText: {
    color: '#C73535',
    fontSize: 8,
    fontWeight: 'bold',
  },

  emptyCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 30,
    borderRadius: 17,
    alignItems: 'center',
  },

  emptyIcon: {
    fontSize: 35,
  },

  emptyTitle: {
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },

  emptyText: {
    color: '#888',
    fontSize: 11,
    marginTop: 4,
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
    fontSize: 14,
    fontWeight: 'bold',
  },
});
