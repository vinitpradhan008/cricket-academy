import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function CoachLoginScreen() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!mobile || !password) {
      Alert.alert(
        'Missing Information',
        'Please enter mobile number and password.'
      );
      return;
    }

    router.replace('/coach-dashboard');
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🏏</Text>

        <Text style={styles.title}>
          Coach Login
        </Text>

        <Text style={styles.subtitle}>
          Cricket Academy
        </Text>
      </View>

      {/* Login Card */}
      <View style={styles.card}>

        <Text style={styles.welcome}>
          Welcome Coach 👋
        </Text>

        <Text style={styles.description}>
          Login to manage players, training and
          performance.
        </Text>

        {/* Mobile */}
        <Text style={styles.label}>
          Mobile Number
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
          maxLength={10}
        />

        {/* Password */}
        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Login */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>
            COACH LOGIN
          </Text>
        </TouchableOpacity>

        {/* Student Login */}
        <TouchableOpacity
          style={styles.studentButton}
          onPress={() => router.replace('/login')}
        >
          <Text style={styles.studentText}>
            ← Student Login
          </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.footer}>
        Coach access is for academy staff only.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  header: {
    backgroundColor: '#123B2A',
    paddingTop: 65,
    paddingBottom: 35,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  logo: {
    fontSize: 55,
    marginBottom: 8,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#CFE1D7',
    fontSize: 14,
    marginTop: 5,
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 25,
    padding: 22,
    borderRadius: 20,
    elevation: 4,
  },

  welcome: {
    color: '#123B2A',
    fontSize: 22,
    fontWeight: 'bold',
  },

  description: {
    color: '#777',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 7,
    marginBottom: 20,
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

  loginButton: {
    backgroundColor: '#123B2A',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  loginText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  studentButton: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 8,
  },

  studentText: {
    color: '#123B2A',
    fontSize: 14,
    fontWeight: '600',
  },

  footer: {
    textAlign: 'center',
    color: '#999',
    fontSize: 11,
    marginTop: 20,
  },
});
