import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function SearchScreen() {
  const [activeButton, setActiveButton] = useState('song');

  const handleButtonPress = (buttonName: string) => {
    setActiveButton(buttonName);
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
            <ThemedText style={styles.title}>search</ThemedText>
            <ThemedText style={styles.subtitle}>subtitle</ThemedText>
          </View>
        </View>
      </View>

      {/* Part 2: Scrollable Content Section */}
      <ScrollView style={styles.contentSection} showsVerticalScrollIndicator={false}>
        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={[
              styles.actionButton,
              activeButton === 'song' && styles.activeButton
            ]}
            onPress={() => handleButtonPress('song')}
          >
            <ThemedText style={activeButton === 'song' ? styles.activeButtonText : styles.actionButtonText}>song</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.actionButton,
              activeButton === 'artist' && styles.activeButton
            ]}
            onPress={() => handleButtonPress('artist')}
          >
            <ThemedText style={activeButton === 'artist' ? styles.activeButtonText : styles.actionButtonText}>artist</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.actionButton,
              activeButton === 'album' && styles.activeButton
            ]}
            onPress={() => handleButtonPress('album')}
          >
            <ThemedText style={activeButton === 'album' ? styles.activeButtonText : styles.actionButtonText}>album</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.actionButton,
              activeButton === 'user' && styles.activeButton
            ]}
            onPress={() => handleButtonPress('user')}
          >
            <ThemedText style={activeButton === 'user' ? styles.activeButtonText : styles.actionButtonText}>user</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Search Input Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchInputContainer}>
          <IconSymbol size={28} name="magnifyingglass" color={'#A9A9A9'} />
            <TextInput 
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#868686"
            />
          </View>
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
    color: '#F5F0ECE5',
    opacity: 0.8,
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
  searchSection: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#1E1E1E',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'transparent',
  },
  searchIcon: {
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    paddingLeft: 8,
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
}); 