import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';

export default function ProfileScreen() {
  const [activeButton, setActiveButton] = useState('notifications');

  const handleButtonPress = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <View style={styles.profileIcon}>
              <Text style={styles.profileText}>V</Text>
            </View>
            <View style={styles.titleSection}>
              <ThemedText style={styles.title}>playlists</ThemedText>
              <ThemedText style={styles.subtitle}>sharing 3 playlists</ThemedText>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={[
              styles.actionButton, 
              styles.createButton,
              activeButton === 'create' && styles.activeButton
            ]}
            onPress={() => handleButtonPress('create')}
          >
            <ThemedText style={activeButton === 'create' ? styles.activeButtonText : styles.actionButtonText}>create a playlist</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.actionButton, 
              styles.friendsButton,
              activeButton === 'friends' && styles.activeButton
            ]}
            onPress={() => handleButtonPress('friends')}
          >
            <ThemedText style={activeButton === 'friends' ? styles.activeButtonText : styles.actionButtonText}>friends</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.actionButton, 
              styles.notificationsButton,
              activeButton === 'notifications' && styles.activeButton
            ]}
            onPress={() => handleButtonPress('notifications')}
          >
            <ThemedText style={activeButton === 'notifications' ? styles.activeButtonText : styles.actionButtonText}>notifications</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Playlist List */}
        <View style={styles.playlistSection}>
          {[1, 2, 3].map((item, index) => (
            <View key={index} style={styles.playlistItem}>
              <View style={styles.playlistInfo}>
                <ThemedText style={styles.playlistName}>playlistname</ThemedText>
                <ThemedText style={styles.playlistSubtitle}>12 songs shared with han</ThemedText>
              </View>
              <View style={styles.userAvatars}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>T</Text>
                </View>
                <View style={[styles.avatar, styles.avatarOverlap]}>
                  <Text style={styles.avatarTextGreen}>H</Text>
                </View>
              </View>
            </View>
          ))}
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
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 80,
    backgroundColor: '#191919',
  },
  profileSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5C8B7E', // Match login.tsx green
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
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
    alignItems: 'center',
  },
  createButton: {
    paddingHorizontal: 20,
  },
  friendsButton: {
    paddingHorizontal: 12,
  },
  notificationsButton: {
    paddingHorizontal: 16,
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
  playlistSection: {
    paddingHorizontal: 20,
    backgroundColor: '#1E1E1E',
  },
  playlistItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  playlistInfo: {
    flex: 1,
  },
  playlistName: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  playlistSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.7,
  },
  userAvatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarOverlap: {
    marginLeft: -10,
    backgroundColor: '#5C8B7E', // Match login.tsx green
  },
  avatarText: {
    color: '#000000',
    fontSize: 14,
  },
  avatarTextGreen: {
    color: '#FFFFFF',
    fontSize: 14,
  },
}); 