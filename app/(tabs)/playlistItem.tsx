import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';
import Screen, { ActiveButton } from '@/components/Screen';

export default function PlaylistItemScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('han');

  // Sample song data
  const songs = [
    { id: 1, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
    { id: 2, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
    { id: 3, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
    { id: 4, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
    { id: 5, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
    { id: 6, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
    { id: 7, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
    { id: 8, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
    { id: 9, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
    { id: 10, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
    { id: 11, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
    { id: 12, name: 'track name', artist: 'artist name', genre: 'alternative', rating: 4 },
  ];

  const activeButtons: ActiveButton[] = [
    { 
      title: 'han', 
      screen: '',
      onPress: () => setActiveFilter('han')
    },
    { 
      title: 'thea', 
      screen: '',
      onPress: () => setActiveFilter('thea')
    },
    { 
      title: 'unrated', 
      screen: '',
      onPress: () => setActiveFilter('unrated')
    }
  ];

  return (
    <Screen
      iconName="back"
      title="playlistname"
      subtitle="12 songs"
      activeButtons={activeButtons}
    >
      <ScrollView style={styles.contentSection} showsVerticalScrollIndicator={false}>
        {/* Search Button */}
        <View style={styles.searchSection}>
          <TouchableOpacity style={styles.searchButton}>
            <IconSymbol size={20} name="magnifyingglass" color={'#FFFFFF'} />
          </TouchableOpacity>
        </View>

        {/* Song List */}
        <View style={styles.songSection}>
          {songs.map((song, index) => (
            <TouchableOpacity key={song.id} style={styles.songItem}>
              <View style={styles.songIcon}>
                <Text style={styles.songIconText}>{song.rating}</Text>
              </View>
              <View style={styles.songInfo}>
                <ThemedText style={styles.songName}>{song.name}</ThemedText>
                <ThemedText style={styles.songSubtitle}>{song.artist} • {song.genre}</ThemedText>
              </View>
              <TouchableOpacity style={styles.menuButton}>
                <IconSymbol size={20} name="ellipsis" color={'#FFFFFF'} />
              </TouchableOpacity>
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
  searchSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
  searchButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  songSection: {
    paddingHorizontal: 20,
    backgroundColor: '#1E1E1E',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  songIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#5C8B7E', // Match login.tsx green
    borderWidth: 2,
    borderColor: '#7FB069', // Lighter green border
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  songIconText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  songInfo: {
    flex: 1,
  },
  songName: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  songSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.7,
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 