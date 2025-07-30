import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('');

  const handleButtonPress = (buttonName: string) => {
    if (buttonName === 'settings') {
      router.push('/settings');
    } else {
      setActiveButton(activeButton === buttonName ? '' : buttonName);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Part 1: Fixed Header Section */}
      <View style={styles.headerSection}>
        <View style={styles.profileSection}>
          <View style={styles.profileIcon}>
            <Text style={styles.profileText}> </Text>
          </View>
          <View style={styles.titleSection}>
            <ThemedText style={styles.title}>username</ThemedText>
            <ThemedText style={styles.subtitle}>@spotify_id</ThemedText>
          </View>
        </View>
        {/* Large Empty Space */}
        <View style={styles.emptySpace} />
      </View>

      {/* Part 2: Scrollable Content Section */}
      <ScrollView style={styles.contentSection} showsVerticalScrollIndicator={false}>
        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={[
              styles.actionButton,
              activeButton === 'settings' && styles.activeButton
            ]}
            onPress={() => handleButtonPress('settings')}
          >
            <ThemedText style={activeButton === 'settings' ? styles.activeButtonText : styles.actionButtonText}>settings</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.actionButton,
              activeButton === 'app_info' && styles.activeButton
            ]}
            onPress={() => handleButtonPress('app_info')}
          >
            <ThemedText style={activeButton === 'app_info' ? styles.activeButtonText : styles.actionButtonText}>app info</ThemedText>
          </TouchableOpacity>
        </View>

        {/* User Statistics Section */}
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <ThemedText style={styles.statTitle}>member since</ThemedText>
            <ThemedText style={styles.statValue}>june 1 2025</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText style={styles.statTitle}>songs recommended</ThemedText>
            <ThemedText style={styles.statValue}>113</ThemedText>
          </View>
        </View>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutButton}>
            <ThemedText style={styles.logoutButtonText}>logout</ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Dark background
  },
  headerSection: {
    backgroundColor: '#191919',
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 20,
  },
  contentSection: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  profileSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  profileIcon: {
    width: 50,
    height: 50,
    marginBottom: 15,
  },
  profileText: {
    color: '#006400', // Dark green text
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleSection: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    color: '#F5F0ECE5',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#5E8D78',
  },
  emptySpace: {
    height: 240, // Large empty space as requested
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 10,
    backgroundColor: '#1E1E1E',
  },
  actionButton: {
    borderWidth: 1,
    borderColor: '#868686',
    borderRadius: 25,
    paddingVertical: 4,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#5C8B7E', // Match login.tsx green
    borderColor: '#5C8B7E',
  },
  actionButtonText: {
    color: '#868686',
    fontSize: 14,
    fontWeight: '600',
  },
  activeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  statsSection: {
    paddingTop: 16,
    paddingHorizontal: 20,
    backgroundColor: '#1E1E1E',
  },
  statItem: {
    marginBottom: 30,
  },
  statTitle: {
    fontSize: 14,
    color: '#F5F0ECE5',
    opacity: 0.7,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  logoutSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#1E1E1E',
    alignItems: 'flex-start',
  },
  logoutButton: {
    paddingVertical: 15,
    alignItems: 'flex-start',
  },
  logoutButtonText: {
    color: '#7FB0A0',
    fontSize: 14,
    fontWeight: '500',
  },
}); 