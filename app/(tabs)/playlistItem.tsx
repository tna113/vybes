import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';

export default function PlaylistItemScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('han');

  const handleBackPress = () => {
    router.back();
  };

  const handleFilterPress = (filterName: string) => {
    setActiveFilter(filterName);
  };

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

  return (
    <SafeAreaView style={styles.container}>
      {/* Part 1: Fixed Header Section */}
      <View style={styles.headerSection}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <IconSymbol size={24} name="arrow.left" color={'#FFFFFF'} />
        </TouchableOpacity>
        <View style={styles.titleSection}>
          <ThemedText style={styles.title}>playlistname</ThemedText>
          <ThemedText style={styles.subtitle}>12 songs</ThemedText>
        </View>
      </View>

      {/* Part 2: Scrollable Content Section */}
      <ScrollView style={styles.contentSection} showsVerticalScrollIndicator={false}>
        {/* Filter Tags */}
        <View style={styles.filterSection}>
          <TouchableOpacity 
            style={[
              styles.filterButton,
              activeFilter === 'han' && styles.activeFilterButton
            ]}
            onPress={() => handleFilterPress('han')}
          >
            <ThemedText style={activeFilter === 'han' ? styles.activeFilterText : styles.filterText}>han</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.filterButton,
              activeFilter === 'thea' && styles.activeFilterButton
            ]}
            onPress={() => handleFilterPress('thea')}
          >
            <ThemedText style={activeFilter === 'thea' ? styles.activeFilterText : styles.filterText}>thea</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.filterButton,
              activeFilter === 'unrated' && styles.activeFilterButton
            ]}
            onPress={() => handleFilterPress('unrated')}
          >
            <ThemedText style={activeFilter === 'unrated' ? styles.activeFilterText : styles.filterText}>unrated</ThemedText>
          </TouchableOpacity>
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
  backButton: {
    width: 50,
    height: 50,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 1,
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
  contentSection: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  filterSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 10,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
  filterButton: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  activeFilterButton: {
    backgroundColor: '#5C8B7E', // Match login.tsx green
    borderColor: '#5C8B7E',
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  activeFilterText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
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