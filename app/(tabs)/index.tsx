import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import Screen, { ActiveButton } from '@/components/Screen';

export default function ProfileScreen() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('notifications');

  const handlePlaylistPress = () => {
    router.push('/(tabs)/playlistItem');
  };

  const activeButtons: ActiveButton[] = [
    { 
      title: 'create a playlist', 
      screen: '',
      onPress: () => setActiveButton('create a playlist')
    },
    { 
      title: 'friends', 
      screen: '',
      onPress: () => setActiveButton('friends')
    },
    { 
      title: 'notifications', 
      screen: '',
      onPress: () => setActiveButton('notifications')
    }
  ];

  return (
    <Screen
      iconName="V"
      title="playlists"
      subtitle="sharing 3 playlists"
      activeButtons={activeButtons}
    >
      <ScrollView style={styles.contentSection} showsVerticalScrollIndicator={false}>
        {/* Playlist List */}
        <View style={styles.playlistSection}>
          {[1, 2, 3].map((item, index) => (
            <TouchableOpacity key={index} style={styles.playlistItem} onPress={handlePlaylistPress}>
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
            </TouchableOpacity>
          ))}
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