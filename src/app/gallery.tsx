import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function GalleryScreen() {
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
            Academy Gallery
          </Text>

          <Text style={styles.headerSubtitle}>
            Training, matches and academy moments
          </Text>
        </View>
      </View>

      {/* Featured */}
      <View style={styles.featuredCard}>
        <Text style={styles.featuredEmoji}>📸</Text>

        <View style={styles.featuredContent}>
          <Text style={styles.featuredTitle}>
            Cricket Academy Moments
          </Text>

          <Text style={styles.featuredText}>
            Explore photos from training sessions,
            matches and academy activities.
          </Text>
        </View>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>
        Categories
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      >
        <View style={styles.categoryActive}>
          <Text style={styles.categoryActiveText}>
            All
          </Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>
            Training
          </Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>
            Matches
          </Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>
            Events
          </Text>
        </View>
      </ScrollView>

      {/* Photo Grid */}
      <Text style={styles.sectionTitle}>
        Recent Photos
      </Text>

      <View style={styles.photoGrid}>

        <View style={[styles.photoCard, styles.photoGreen]}>
          <Text style={styles.photoEmoji}>🏏</Text>
          <Text style={styles.photoTitle}>
            Batting Practice
          </Text>
        </View>

        <View style={[styles.photoCard, styles.photoBlue]}>
          <Text style={styles.photoEmoji}>🥎</Text>
          <Text style={styles.photoTitle}>
            Bowling Session
          </Text>
        </View>

        <View style={[styles.photoCard, styles.photoOrange]}>
          <Text style={styles.photoEmoji}>🏆</Text>
          <Text style={styles.photoTitle}>
            Match Day
          </Text>
        </View>

        <View style={[styles.photoCard, styles.photoPurple]}>
          <Text style={styles.photoEmoji}>💪</Text>
          <Text style={styles.photoTitle}>
            Fitness Training
          </Text>
        </View>

        <View style={[styles.photoCard, styles.photoYellow]}>
          <Text style={styles.photoEmoji}>👥</Text>
          <Text style={styles.photoTitle}>
            Team Session
          </Text>
        </View>

        <View style={[styles.photoCard, styles.photoRed]}>
          <Text style={styles.photoEmoji}>🎯</Text>
          <Text style={styles.photoTitle}>
            Fielding Practice
          </Text>
        </View>

      </View>

      {/* Videos */}
      <Text style={styles.sectionTitle}>
        Academy Videos
      </Text>

      <View style={styles.videoCard}>
        <View style={styles.videoIcon}>
          <Text style={styles.playIcon}>▶</Text>
        </View>

        <View style={styles.videoContent}>
          <Text style={styles.videoTitle}>
            Batting Practice Highlights
          </Text>

          <Text style={styles.videoText}>
            Training session highlights
          </Text>
        </View>

        <Text style={styles.videoArrow}>›</Text>
      </View>

      <View style={styles.videoCard}>
        <View style={styles.videoIcon}>
          <Text style={styles.playIcon}>▶</Text>
        </View>

        <View style={styles.videoContent}>
          <Text style={styles.videoTitle}>
            Match Highlights
          </Text>

          <Text style={styles.videoText}>
            Recent match moments
          </Text>
        </View>

        <Text style={styles.videoArrow}>›</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#CFE1D7',
    fontSize: 13,
    marginTop: 4,
  },

  featuredCard: {
    margin: 20,
    backgroundColor: '#123B2A',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  featuredEmoji: {
    fontSize: 45,
    marginRight: 15,
  },

  featuredContent: {
    flex: 1,
  },

  featuredTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  featuredText: {
    color: '#D8E8DF',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginHorizontal: 20,
    marginBottom: 12,
    marginTop: 5,
  },

  categories: {
    marginLeft: 20,
    marginBottom: 20,
  },

  categoryActive: {
    backgroundColor: '#123B2A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  categoryActiveText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },

  category: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },

  categoryText: {
    color: '#555',
    fontWeight: '600',
    fontSize: 13,
  },

  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  photoCard: {
    width: '48%',
    height: 155,
    borderRadius: 18,
    marginBottom: 14,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },

  photoGreen: {
    backgroundColor: '#DDEFE4',
  },

  photoBlue: {
    backgroundColor: '#DDE9FA',
  },

  photoOrange: {
    backgroundColor: '#FFE9C9',
  },

  photoPurple: {
    backgroundColor: '#E8DDF5',
  },

  photoYellow: {
    backgroundColor: '#FFF2C9',
  },

  photoRed: {
    backgroundColor: '#F8DCDC',
  },

  photoEmoji: {
    fontSize: 48,
  },

  photoTitle: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    textAlign: 'center',
  },

  videoCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 14,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  videoIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#123B2A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  playIcon: {
    color: '#FFFFFF',
    fontSize: 19,
    marginLeft: 3,
  },

  videoContent: {
    flex: 1,
    marginLeft: 13,
  },

  videoTitle: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
  },

  videoText: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },

  videoArrow: {
    color: '#123B2A',
    fontSize: 30,
  },

  dashboardButton: {
    marginHorizontal: 20,
    marginTop: 10,
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
