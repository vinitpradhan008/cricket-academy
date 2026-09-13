import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function FeesScreen() {
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
            Fees Management
          </Text>

          <Text style={styles.headerSubtitle}>
            Manage your academy fees
          </Text>
        </View>
      </View>

      {/* Student */}
      <View style={styles.studentCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>

        <View>
          <Text style={styles.studentName}>
            Rahul Patil
          </Text>

          <Text style={styles.studentRole}>
            Student Player • All Rounder
          </Text>
        </View>
      </View>

      {/* Fee Summary */}
      <Text style={styles.sectionTitle}>
        Fee Summary
      </Text>

      <View style={styles.summaryGrid}>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>💰</Text>

          <Text style={styles.summaryValue}>
            ₹24,000
          </Text>

          <Text style={styles.summaryLabel}>
            Total Fees
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>✅</Text>

          <Text style={[styles.summaryValue, styles.paid]}>
            ₹18,000
          </Text>

          <Text style={styles.summaryLabel}>
            Paid
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>⏳</Text>

          <Text style={[styles.summaryValue, styles.pending]}>
            ₹6,000
          </Text>

          <Text style={styles.summaryLabel}>
            Pending
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>📅</Text>

          <Text style={styles.summaryValue}>
            30 Sep
          </Text>

          <Text style={styles.summaryLabel}>
            Due Date
          </Text>
        </View>

      </View>

      {/* Payment Status */}
      <Text style={styles.sectionTitle}>
        Current Payment Status
      </Text>

      <View style={styles.statusCard}>

        <View style={styles.statusHeader}>
          <Text style={styles.statusTitle}>
            September 2026 Fees
          </Text>

          <View style={styles.pendingBadge}>
            <Text style={styles.pendingBadgeText}>
              PENDING
            </Text>
          </View>
        </View>

        <Text style={styles.statusAmount}>
          ₹6,000
        </Text>

        <Text style={styles.statusDate}>
          Due on 30 September 2026
        </Text>

        <View style={styles.progressBackground}>
          <View style={styles.progressFill} />
        </View>

        <Text style={styles.progressText}>
          75% fees paid
        </Text>

      </View>

      {/* Payment History */}
      <Text style={styles.sectionTitle}>
        Payment History
      </Text>

      {/* Payment 1 */}
      <View style={styles.paymentCard}>

        <View style={styles.paymentIcon}>
          <Text>✓</Text>
        </View>

        <View style={styles.paymentDetails}>
          <Text style={styles.paymentTitle}>
            August 2026 Fees
          </Text>

          <Text style={styles.paymentDate}>
            Paid on 05 August 2026
          </Text>
        </View>

        <Text style={styles.paymentAmount}>
          ₹6,000
        </Text>

      </View>

      {/* Payment 2 */}
      <View style={styles.paymentCard}>

        <View style={styles.paymentIcon}>
          <Text>✓</Text>
        </View>

        <View style={styles.paymentDetails}>
          <Text style={styles.paymentTitle}>
            July 2026 Fees
          </Text>

          <Text style={styles.paymentDate}>
            Paid on 04 July 2026
          </Text>
        </View>

        <Text style={styles.paymentAmount}>
          ₹6,000
        </Text>

      </View>

      {/* Payment 3 */}
      <View style={styles.paymentCard}>

        <View style={styles.paymentIcon}>
          <Text>✓</Text>
        </View>

        <View style={styles.paymentDetails}>
          <Text style={styles.paymentTitle}>
            June 2026 Fees
          </Text>

          <Text style={styles.paymentDate}>
            Paid on 06 June 2026
          </Text>
        </View>

        <Text style={styles.paymentAmount}>
          ₹6,000
        </Text>

      </View>

      {/* Pay Button */}
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => {}}
      >
        <Text style={styles.payButtonText}>
          💳 PAY PENDING FEES
        </Text>
      </TouchableOpacity>

      {/* Back Dashboard */}
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

  studentCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 18,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E7F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  avatarText: {
    fontSize: 30,
  },

  studentName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222',
  },

  studentRole: {
    color: '#777',
    fontSize: 13,
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginHorizontal: 20,
    marginBottom: 12,
  },

  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  summaryCard: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    borderRadius: 16,
    padding: 17,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },

  summaryIcon: {
    fontSize: 26,
  },

  summaryValue: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#123B2A',
    marginTop: 7,
  },

  summaryLabel: {
    color: '#777',
    fontSize: 13,
    marginTop: 4,
  },

  paid: {
    color: '#16823A',
  },

  pending: {
    color: '#D98200',
  },

  statusCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 18,
    elevation: 2,
  },

  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  statusTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },

  pendingBadge: {
    backgroundColor: '#FFF1D6',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  pendingBadgeText: {
    color: '#C47700',
    fontSize: 11,
    fontWeight: 'bold',
  },

  statusAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D98200',
    marginTop: 15,
  },

  statusDate: {
    color: '#777',
    fontSize: 13,
    marginTop: 4,
  },

  progressBackground: {
    height: 9,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    marginTop: 18,
    overflow: 'hidden',
  },

  progressFill: {
    width: '75%',
    height: '100%',
    backgroundColor: '#16823A',
    borderRadius: 10,
  },

  progressText: {
    color: '#16823A',
    fontSize: 12,
    marginTop: 7,
    fontWeight: '600',
  },

  paymentCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },

  paymentIcon: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#DFF5E7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  paymentDetails: {
    flex: 1,
    marginLeft: 12,
  },

  paymentTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },

  paymentDate: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },

  paymentAmount: {
    color: '#16823A',
    fontSize: 15,
    fontWeight: 'bold',
  },

  payButton: {
    backgroundColor: '#D98200',
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  payButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
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
    fontWeight: 'bold',
    fontSize: 15,
  },
});
