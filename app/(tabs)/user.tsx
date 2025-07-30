import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import Screen, { ActiveButton } from '@/components/Screen';

export default function ProfileScreen() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('');

  const activeButtons: ActiveButton[] = [
    { 
      title: 'settings', 
      screen: '/(tabs)/settings',
      onPress: () => {
        setActiveButton('settings');
        router.push('/(tabs)/settings');
      }
    },
    { 
      title: 'app info', 
      screen: '/(tabs)/appInfo',
      onPress: () => {
        setActiveButton('app info');
        router.push('/(tabs)/appInfo');
      }
    }
  ];

  return (
    <Screen
      enableEmptySpace={true}
      iconName=" "
      title="username"
      subtitle="@spotify_id"
      activeButtons={activeButtons}
    >
      <ScrollView style={styles.contentSection} showsVerticalScrollIndicator={false}>
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  contentSection: {
    flex: 1,
    backgroundColor: '#1E1E1E',
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