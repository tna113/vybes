import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import Screen from '@/components/Screen';
import { ActiveButton } from '@/components/ActiveButtons';

export default function SettingsScreen() {
  const router = useRouter();
  const [theme, setTheme] = useState('dark');
  const [highlightColor, setHighlightColor] = useState('green');
  const [notifications, setNotifications] = useState('on');
  const [navigationLabels, setNavigationLabels] = useState('on');

  const handleBackPress = () => {
    router.push('/(tabs)/user');
  };

  return (
    <Screen
      iconName="back"
      title="settings"
      subtitle="and preferences"
      onBackPress={handleBackPress}
    >
      <ScrollView style={styles.contentSection} showsVerticalScrollIndicator={false}>
        {/* Theme Section */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>theme</ThemedText>
          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={[
                styles.actionButton,
                theme === 'dark' && styles.activeButton
              ]}
              onPress={() => setTheme('dark')}
            >
              <ThemedText style={theme === 'dark' ? styles.activeButtonText : styles.actionButtonText}>dark</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.actionButton,
                theme === 'light' && styles.activeButton
              ]}
              onPress={() => setTheme('light')}
            >
              <ThemedText style={theme === 'light' ? styles.activeButtonText : styles.actionButtonText}>light</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.actionButton,
                theme === 'system' && styles.activeButton
              ]}
              onPress={() => setTheme('system')}
            >
              <ThemedText style={theme === 'system' ? styles.activeButtonText : styles.actionButtonText}>system</ThemedText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Highlight Color Section */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>highlight color</ThemedText>
          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={[
                styles.actionButton,
                highlightColor === 'green' && styles.activeButton
              ]}
              onPress={() => setHighlightColor('green')}
            >
              <ThemedText style={highlightColor === 'green' ? styles.activeButtonText : styles.actionButtonText}>green</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.actionButton,
                highlightColor === 'yellow' && styles.activeButton
              ]}
              onPress={() => setHighlightColor('yellow')}
            >
              <ThemedText style={highlightColor === 'yellow' ? styles.activeButtonText : styles.actionButtonText}>yellow</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.actionButton,
                highlightColor === 'blue' && styles.activeButton
              ]}
              onPress={() => setHighlightColor('blue')}
            >
              <ThemedText style={highlightColor === 'blue' ? styles.activeButtonText : styles.actionButtonText}>blue</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.actionButton,
                highlightColor === 'lavender' && styles.activeButton
              ]}
              onPress={() => setHighlightColor('lavender')}
            >
              <ThemedText style={highlightColor === 'lavender' ? styles.activeButtonText : styles.actionButtonText}>lavender</ThemedText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Notifications Section */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>notifications</ThemedText>
          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={[
                styles.actionButton,
                notifications === 'on' && styles.activeButton
              ]}
              onPress={() => setNotifications('on')}
            >
              <ThemedText style={notifications === 'on' ? styles.activeButtonText : styles.actionButtonText}>on</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.actionButton,
                notifications === 'off' && styles.activeButton
              ]}
              onPress={() => setNotifications('off')}
            >
              <ThemedText style={notifications === 'off' ? styles.activeButtonText : styles.actionButtonText}>off</ThemedText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Navigation Labels Section */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>navigation labels</ThemedText>
          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={[
                styles.actionButton,
                navigationLabels === 'on' && styles.activeButton
              ]}
              onPress={() => setNavigationLabels('on')}
            >
              <ThemedText style={navigationLabels === 'on' ? styles.activeButtonText : styles.actionButtonText}>on</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.actionButton,
                navigationLabels === 'off' && styles.activeButton
              ]}
              onPress={() => setNavigationLabels('off')}
            >
              <ThemedText style={navigationLabels === 'off' ? styles.activeButtonText : styles.actionButtonText}>off</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  contentSection: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingTop: 24,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#1E1E1E',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#F5F0ECE5',
    marginBottom: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: '#868686',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 8,
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
}); 