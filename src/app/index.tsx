import { router } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🏏</Text>

        <View>
          <Text style={styles.title}>Cricket Academy</Text>
          <Text style={styles.subtitle}>
            Train • Perform • Succeed
          </Text>
        </View>
      </View>

      {/* Welcome */}
      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>
          Welcome, Player 👋
        </Text>

        <Text style={styles.welcomeText}>
          Ready for today's training?
        </Text>
      </View>

      {/* Profile Button */}
      <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/profile')}
>
  <Text style={styles.icon}>👤</Text>

  <Text style={styles.cardTitle}>
    My Profile
  </Text>

  <Text style={styles.cardText}>
    Player information
  </Text>
</TouchableOpacity>


      {/* Academy */}
      <Text style={styles.sectionTitle}>
        Academy
      </Text>

      <View style={styles.grid}>


        {/*Gallery card */}
        <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/gallery')}
>
  <Text style={styles.icon}>🖼️</Text>

  <Text style={styles.cardTitle}>
    Gallery
  </Text>

  <Text style={styles.cardText}>
    Academy photos
  </Text>
</TouchableOpacity>


        {/*Notices card */}
        <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/notices')}
>
  <Text style={styles.icon}>📢</Text>

  <Text style={styles.cardTitle}>
    Notices
  </Text>

  <Text style={styles.cardText}>
    Latest updates
  </Text>
</TouchableOpacity>

         {/* {/*Notifications card  */}
         <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/notifications')}
>
  <Text style={styles.icon}>🔔</Text>

  <Text style={styles.cardTitle}>
    Notifications
  </Text>

  <Text style={styles.cardText}>
    Academy updates
  </Text>
</TouchableOpacity>



        {/*Attendance */}
        <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/attendance')}
>
  <Text style={styles.icon}>📋</Text>

  <Text style={styles.cardTitle}>
    Attendance
  </Text>

  <Text style={styles.cardText}>
    View attendance
  </Text>
</TouchableOpacity>


        {/* Training */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/training')}
        >
          <Text style={styles.icon}>📅</Text>

          <Text style={styles.cardTitle}>
            Training
          </Text>

          <Text style={styles.cardText}>
            View schedule
          </Text>
        </TouchableOpacity>

        {/* Performance */}
        <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/performance')}
>

          <Text style={styles.icon}>📊</Text>

          <Text style={styles.cardTitle}>
            Performance
          </Text>

          <Text style={styles.cardText}>
            Track progress
          </Text>
        </TouchableOpacity>

        {/* Fees */}
        <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/fees')}
>

          <Text style={styles.icon}>💰</Text>

          <Text style={styles.cardTitle}>
            Fees
          </Text>

          <Text style={styles.cardText}>
            Payment details
          </Text>
        </TouchableOpacity>

        {/* Matches */}
        <TouchableOpacity
  style={styles.card}
  onPress={() => router.push('/matches')}
>

          <Text style={styles.icon}>🏆</Text>

          <Text style={styles.cardTitle}>
            Matches
          </Text>

          <Text style={styles.cardText}>
            Upcoming matches
          </Text>
        </TouchableOpacity>

      </View>

      {/* Latest Notice */}
      <Text style={styles.sectionTitle}>
        Latest Notice
      </Text>

      <View style={styles.notice}>

        <Text style={styles.noticeTitle}>
          🏏 Sunday Practice Session
        </Text>

        <Text style={styles.noticeText}>
          Special practice session this Sunday at 7:00 AM.
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 25,
  },

  logo: {
    fontSize: 48,
    marginRight: 14,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#123B2A',
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },

  welcome: {
    backgroundColor: '#123B2A',
    borderRadius: 20,
    padding: 22,
    marginBottom: 18,
  },

  welcomeTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
  },

  welcomeText: {
    color: '#D8E8DF',
    fontSize: 15,
    marginTop: 8,
  },

  profileButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },

  profileIcon: {
    fontSize: 32,
    marginRight: 14,
  },

  profileTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#123B2A',
  },

  profileText: {
    fontSize: 13,
    color: '#777',
    marginTop: 3,
  },

  arrow: {
    marginLeft: 'auto',
    fontSize: 32,
    color: '#123B2A',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    elevation: 3,
  },

  icon: {
    fontSize: 32,
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
  },

  cardText: {
    color: '#777',
    marginTop: 5,
    fontSize: 13,
  },

  notice: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 18,
    marginBottom: 30,
    elevation: 2,
  },

  noticeTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#123B2A',
  },

  noticeText: {
    marginTop: 8,
    color: '#666',
    lineHeight: 21,
  },
});
