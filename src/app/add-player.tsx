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

export default function AddPlayerScreen() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [jersey, setJersey] = useState('');
  const [batch, setBatch] = useState('');
  const [playerType, setPlayerType] = useState('');

  const handleAddPlayer = () => {
    if (!name || !mobile || !age || !jersey || !batch || !playerType) {
      Alert.alert(
        'Missing Information',
        'Please fill all player details.'
      );
      return;
    }

    Alert.alert(
      'Player Added',
      `${name} has been added successfully.`,
      [
        {
          text: 'OK',
          onPress: () => router.replace('/players'),
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
            Add New Player
          </Text>

          <Text style={styles.headerSubtitle}>
            Register a player in the academy
          </Text>
        </View>
      </View>

      {/* Form */}
      <View style={styles.formCard}>

        <Text style={styles.sectionTitle}>
          Player Information
        </Text>

        <Text style={styles.label}>
          Player Name
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter player name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>
          Mobile Number
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
        />

        <Text style={styles.label}>
          Age
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter age"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />

        <Text style={styles.label}>
          Jersey Number
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter jersey number"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={jersey}
          onChangeText={setJersey}
        />

        <Text style={styles.label}>
          Batch
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: U-17, U-19, Senior"
          placeholderTextColor="#999"
          value={batch}
          onChangeText={setBatch}
        />

        <Text style={styles.label}>
          Player Type
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: Batsman, Bowler, All Rounder"
          placeholderTextColor="#999"
          value={playerType}
          onChangeText={setPlayerType}
        />

      </View>

      {/* Cricket Information */}
      <View style={styles.infoCard}>

        <Text style={styles.infoTitle}>
          🏏 Cricket Information
        </Text>

        <Text style={styles.infoText}>
          Player batting style, bowling style and other
          performance details can be added later from the
          player profile.
        </Text>

      </View>

      {/* Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddPlayer}
      >
        <Text style={styles.addButtonText}>
          + ADD PLAYER
        </Text>
      </TouchableOpacity>

      {/* Cancel */}
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => router.back()}
      >
        <Text style={styles.cancelText}>
          CANCEL
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

  formCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 2,
  },

  sectionTitle: {
    color: '#123B2A',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 18,
  },

  label: {
    color: '#444',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 7,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 11,
    paddingHorizontal: 14,
    color: '#222',
    backgroundColor: '#FAFAFA',
    marginBottom: 16,
  },

  infoCard: {
    backgroundColor: '#EAF4EE',
    marginHorizontal: 20,
    padding: 17,
    borderRadius: 16,
    marginBottom: 20,
  },

  infoTitle: {
    color: '#123B2A',
    fontSize: 15,
    fontWeight: 'bold',
  },

  infoText: {
    color: '#587064',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 7,
  },

  addButton: {
    backgroundColor: '#123B2A',
    marginHorizontal: 20,
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  cancelButton: {
    marginHorizontal: 20,
    marginTop: 12,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#123B2A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelText: {
    color: '#123B2A',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
