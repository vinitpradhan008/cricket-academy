import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.logo}>🏏</Text>

        <Text style={styles.title}>
          Cricket Academy
        </Text>

        <Text style={styles.subtitle}>
          Welcome back, Player!
        </Text>

        <View style={styles.form}>

          <Text style={styles.label}>
            Mobile Number
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            maxLength={10}
          />

          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/register')}
          >
            <Text style={styles.registerText}>
              New player?{' '}
              <Text style={styles.bold}>
                Create Account
              </Text>
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },

  logo: {
    fontSize: 65,
    textAlign: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#123B2A',
  },

  subtitle: {
    textAlign: 'center',
    color: '#777',
    marginTop: 6,
    marginBottom: 35,
  },

  form: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 20,
    elevation: 4,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 7,
    marginTop: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    backgroundColor: '#FAFAFA',
  },

  loginButton: {
    height: 52,
    backgroundColor: '#123B2A',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  loginText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  registerText: {
    textAlign: 'center',
    marginTop: 22,
    color: '#777',
  },

  bold: {
    color: '#123B2A',
    fontWeight: 'bold',
  },
});
