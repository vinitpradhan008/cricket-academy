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

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !mobile || !age || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (mobile.length < 10) {
      Alert.alert('Error', 'Please enter a valid mobile number');
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        'Error',
        'Password must be at least 6 characters'
      );
      return;
    }

    // Temporary registration.
    // Firebase will be connected later.

    Alert.alert(
      'Registration Successful',
      `Welcome ${name}! Your account is ready.`,
      [
        {
          text: 'Go to Login',
          onPress: () => router.replace('/login'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>🏏</Text>

      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.subtitle}>
        Join Cricket Academy
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Player Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        maxLength={10}
        value={mobile}
        onChangeText={setMobile}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#999"
        keyboardType="numeric"
        maxLength={2}
        value={age}
        onChangeText={setAge}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          CREATE ACCOUNT
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/login')}
      >
        <Text style={styles.loginText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    padding: 25,
    justifyContent: 'center',
  },

  logo: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0B3D91',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9DDE5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 15,
    fontSize: 16,
    color: '#222',
  },

  button: {
    backgroundColor: '#0B3D91',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  loginText: {
    color: '#0B3D91',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
    fontWeight: '600',
  },
});
