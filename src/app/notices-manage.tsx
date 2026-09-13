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

const notices = [
  {
    id: 1,
    title: 'Sunday Practice Session',
    message:
      'Special practice session will be conducted on Sunday at 7:00 AM.',
    category: 'Training',
    date: '12 September 2026',
    important: true,
  },
  {
    id: 2,
    title: 'Monthly Fee Reminder',
    message:
      'Players are requested to complete their monthly fee payment.',
    category: 'Fees',
    date: '10 September 2026',
    important: false,
  },
  {
    id: 3,
    title: 'Upcoming Match',
    message:
      'Players selected for the upcoming match should report on time.',
    category: 'Match',
    date: '8 September 2026',
    important: true,
  },
];

export default function NoticesManageScreen() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');
  const [important, setImportant] = useState(false);

  const publishNotice = () => {
    if (!title || !message || !category) {
      Alert.alert(
        'Missing Information',
        'Please enter title, message and category.'
      );
      return;
    }

    Alert.alert(
      'Notice Published',
      'Your notice has been published successfully.',
      [
        {
          text: 'OK',
          onPress: () => {
            setTitle('');
            setMessage('');
            setCategory('');
            setImportant(false);
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
            Notices
          </Text>

          <Text style={styles.headerSubtitle}>
            Create and manage academy notices
          </Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.summaryRow}>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>📢</Text>
          <Text style={styles.summaryNumber}>
            {notices.length}
          </Text>
          <Text style={styles.summaryLabel}>
            Total Notices
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>⭐</Text>
          <Text style={styles.summaryNumber}>
            {notices.filter((notice) => notice.important).length}
          </Text>
          <Text style={styles.summaryLabel}>
            Important
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>📝</Text>
          <Text style={styles.summaryNumber}>
            3
          </Text>
          <Text style={styles.summaryLabel}>
            Categories
          </Text>
        </View>

      </View>

      {/* Existing Notices */}
      <Text style={styles.sectionTitle}>
        Published Notices
      </Text>

      {notices.map((notice) => (
        <View
          key={notice.id}
          style={styles.noticeCard}
        >
          <View style={styles.noticeTop}>

            <View style={styles.noticeIcon}>
              <Text style={styles.noticeEmoji}>
                📢
              </Text>
            </View>

            <View style={styles.noticeInfo}>
              <Text style={styles.noticeTitle}>
                {notice.title}
              </Text>

              <Text style={styles.noticeDate}>
                {notice.date}
              </Text>
            </View>

            {notice.important && (
              <View style={styles.importantBadge}>
                <Text style={styles.importantText}>
                  IMPORTANT
                </Text>
              </View>
            )}

          </View>

          <Text style={styles.noticeMessage}>
            {notice.message}
          </Text>

          <View style={styles.noticeBottom}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>
                {notice.category}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() =>
                Alert.alert(
                  'Delete Notice',
                  'Notice deletion will be connected to Firebase later.'
                )
              }
            >
              <Text style={styles.deleteText}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      ))}

      {/* Create Notice */}
      <Text style={styles.sectionTitle}>
        Create New Notice
      </Text>

      <View style={styles.formCard}>

        <Text style={styles.label}>
          Notice Title
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: Sunday Practice Session"
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>
          Category
        </Text>

        <View style={styles.categoryRow}>

          {['Training', 'Match', 'Fees', 'General'].map(
            (item) => {
              const selected = category === item;

              return (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.categoryOption,
                    selected && styles.selectedCategory,
                  ]}
                  onPress={() => setCategory(item)}
                >
                  <Text
                    style={[
                      styles.categoryOptionText,
                      selected &&
                        styles.selectedCategoryText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }
          )}

        </View>

        <Text style={styles.label}>
          Notice Message
        </Text>

        <TextInput
          style={styles.messageInput}
          placeholder="Write notice message..."
          placeholderTextColor="#999"
          multiline
          textAlignVertical="top"
          value={message}
          onChangeText={setMessage}
        />

        {/* Important Toggle */}
        <TouchableOpacity
          style={styles.importantRow}
          onPress={() => setImportant(!important)}
        >
          <View
            style={[
              styles.checkbox,
              important && styles.checkedBox,
            ]}
          >
            {important && (
              <Text style={styles.checkText}>
                ✓
              </Text>
            )}
          </View>

          <View>
            <Text style={styles.importantLabel}>
              Mark as Important
            </Text>

            <Text style={styles.importantSubtext}>
              Show this notice as a priority announcement
            </Text>
          </View>
        </TouchableOpacity>

      </View>

      {/* Publish */}
      <TouchableOpacity
        style={styles.publishButton}
        onPress={publishNotice}
      >
        <Text style={styles.publishText}>
          📢 PUBLISH NOTICE
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

  sectionTitle: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 12,
  },

  noticeCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 13,
    padding: 17,
    borderRadius: 18,
    elevation: 2,
  },

  noticeTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  noticeIcon: {
    width: 47,
    height: 47,
    borderRadius: 24,
    backgroundColor: '#FFF3D6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  noticeEmoji: {
    fontSize: 24,
  },

  noticeInfo: {
    flex: 1,
    marginLeft: 11,
  },

  noticeTitle: {
    color: '#222',
    fontSize: 14,
    fontWeight: 'bold',
  },

  noticeDate: {
    color: '#888',
    fontSize: 10,
    marginTop: 4,
  },

  importantBadge: {
    backgroundColor: '#FBE3E3',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 7,
  },

  importantText: {
    color: '#C73535',
    fontSize: 8,
    fontWeight: 'bold',
  },

  noticeMessage: {
    color: '#666',
    fontSize: 12,
    lineHeight: 19,
    marginTop: 13,
  },

  noticeBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 13,
  },

  categoryBadge: {
    backgroundColor: '#E5F1EA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
  },

  categoryText: {
    color: '#123B2A',
    fontSize: 9,
    fontWeight: 'bold',
  },

  deleteButton: {
    borderWidth: 1,
    borderColor: '#E5B5B5',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 7,
  },

  deleteText: {
    color: '#C73535',
    fontSize: 9,
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
    marginBottom: 8,
  },

  input: {
    height: 49,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 13,
    color: '#222',
    backgroundColor: '#FAFAFA',
    marginBottom: 17,
  },

  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 17,
  },

  categoryOption: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 9,
    marginRight: 7,
    marginBottom: 7,
  },

  selectedCategory: {
    backgroundColor: '#123B2A',
    borderColor: '#123B2A',
  },

  categoryOptionText: {
    color: '#666',
    fontSize: 11,
    fontWeight: '600',
  },

  selectedCategoryText: {
    color: '#FFFFFF',
  },

  messageInput: {
    minHeight: 110,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    padding: 13,
    color: '#222',
    backgroundColor: '#FAFAFA',
  },

  importantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  checkedBox: {
    backgroundColor: '#123B2A',
    borderColor: '#123B2A',
  },

  checkText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  importantLabel: {
    color: '#333',
    fontSize: 13,
    fontWeight: '600',
  },

  importantSubtext: {
    color: '#888',
    fontSize: 9,
    marginTop: 3,
  },

  publishButton: {
    backgroundColor: '#123B2A',
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  publishText: {
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
