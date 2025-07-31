import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';
import Screen from '@/components/Screen';
import { ActiveButton } from '@/components/ActiveButtons';

// Track type definition
type Track = {
  spotify_track_id: string;
  track_name: string;
  artist_id: string;
  artist_name: string;
  album_id: string;
  genre: string;
  duration_ms: number;
  spotify_uri: string;
  created_at: string;
  comments: JSON;
  rating: number;
};

export default function PlaylistItemScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('han');

  // Sample track data matching the specified structure
  const tracks: Track[] = [
    { 
      spotify_track_id: 'spotify:track:1', 
      track_name: 'Midnight City', 
      artist_id: 'artist1', 
      artist_name: 'M83',
      album_id: 'album1', 
      genre: 'indie rock', 
      duration_ms: 180000, 
      spotify_uri: 'spotify:track:1', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "thea a.", "comment": "love this vibe!"}, {"user": "han n.", "comment": "perfect for studying"}, {"user": "alex m.", "comment": "reminds me of summer"}]'),
      rating: 5
    },
    { 
      spotify_track_id: 'spotify:track:2', 
      track_name: 'Strobe', 
      artist_id: 'artist2', 
      artist_name: 'Deadmau5',
      album_id: 'album2', 
      genre: 'electronic', 
      duration_ms: 200000, 
      spotify_uri: 'spotify:track:2', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "sam k.", "comment": "this hits different"}]'),
      rating: 4
    },
    { 
      spotify_track_id: 'spotify:track:3', 
      track_name: 'HUMBLE.', 
      artist_id: 'artist3', 
      artist_name: 'Kendrick Lamar',
      album_id: 'album3', 
      genre: 'hip hop', 
      duration_ms: 160000, 
      spotify_uri: 'spotify:track:3', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "jordan l.", "comment": "underrated gem"}, {"user": "maya p.", "comment": "the lyrics are so deep"}, {"user": "chris r.", "comment": "perfect road trip song"}, {"user": "taylor s.", "comment": "can\'t stop listening"}]'),
      rating: 5
    },
    { 
      spotify_track_id: 'spotify:track:4', 
      track_name: 'Blinding Lights', 
      artist_id: 'artist4', 
      artist_name: 'The Weeknd',
      album_id: 'album4', 
      genre: 'pop', 
      duration_ms: 190000, 
      spotify_uri: 'spotify:track:4', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "david w.", "comment": "this is my jam"}, {"user": "emma h.", "comment": "love the production"}]'),
      rating: 4
    },
    { 
      spotify_track_id: 'spotify:track:5', 
      track_name: 'Redbone', 
      artist_id: 'artist5', 
      artist_name: 'Childish Gambino',
      album_id: 'album5', 
      genre: 'r&b', 
      duration_ms: 170000, 
      spotify_uri: 'spotify:track:5', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "sarah m.", "comment": "so nostalgic"}, {"user": "mike t.", "comment": "the bridge is amazing"}, {"user": "lisa c.", "comment": "perfect for rainy days"}, {"user": "jake b.", "comment": "this aged like fine wine"}]'),
      rating: 5
    },
    { 
      spotify_track_id: 'spotify:track:6', 
      track_name: 'The Sound of Silence', 
      artist_id: 'artist6', 
      artist_name: 'Disturbed',
      album_id: 'album6', 
      genre: 'folk', 
      duration_ms: 185000, 
      spotify_uri: 'spotify:track:6', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "anna k.", "comment": "this song gets me every time"}]'),
      rating: 0
    },
    { 
      spotify_track_id: 'spotify:track:7', 
      track_name: 'Take Five', 
      artist_id: 'artist7', 
      artist_name: 'Dave Brubeck',
      album_id: 'album7', 
      genre: 'jazz', 
      duration_ms: 195000, 
      spotify_uri: 'spotify:track:7', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "ryan p.", "comment": "the guitar solo is fire"}, {"user": "zoe l.", "comment": "love the energy"}, {"user": "kevin m.", "comment": "this is going on my playlist"}]'),
      rating: 5
    },
    { 
      spotify_track_id: 'spotify:track:8', 
      track_name: 'Tennessee Whiskey', 
      artist_id: 'artist8', 
      artist_name: 'Chris Stapleton',
      album_id: 'album8', 
      genre: 'country', 
      duration_ms: 175000, 
      spotify_uri: 'spotify:track:8', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "nina s.", "comment": "the vocals are incredible"}, {"user": "tom w.", "comment": "this song has been stuck in my head"}, {"user": "rachel g.", "comment": "perfect for working out"}, {"user": "dan h.", "comment": "the lyrics speak to me"}]'),
      rating: 4
    },
    { 
      spotify_track_id: 'spotify:track:9', 
      track_name: 'The Thrill is Gone', 
      artist_id: 'artist9', 
      artist_name: 'B.B. King',
      album_id: 'album9', 
      genre: 'blues', 
      duration_ms: 165000, 
      spotify_uri: 'spotify:track:9', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "sophie r.", "comment": "this is my comfort song"}]'),
      rating: 0
    },
    { 
      spotify_track_id: 'spotify:track:10', 
      track_name: 'Three Little Birds', 
      artist_id: 'artist10', 
      artist_name: 'Bob Marley',
      album_id: 'album10', 
      genre: 'reggae', 
      duration_ms: 188000, 
      spotify_uri: 'spotify:track:10', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "marcus j.", "comment": "the beat is infectious"}, {"user": "claire b.", "comment": "love the melody"}]'),
      rating: 5
    },
    { 
      spotify_track_id: 'spotify:track:11', 
      track_name: 'American Idiot', 
      artist_id: 'artist11', 
      artist_name: 'Green Day',
      album_id: 'album11', 
      genre: 'punk', 
      duration_ms: 172000, 
      spotify_uri: 'spotify:track:11', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "olivia t.", "comment": "this song is pure magic"}, {"user": "brandon k.", "comment": "the production is top tier"}, {"user": "grace l.", "comment": "can\'t believe I just discovered this"}, {"user": "aaron p.", "comment": "this deserves more recognition"}]'),
      rating: 4
    },
    { 
      spotify_track_id: 'spotify:track:12', 
      track_name: 'Moonlight Sonata', 
      artist_id: 'artist12', 
      artist_name: 'Beethoven',
      album_id: 'album12', 
      genre: 'classical', 
      duration_ms: 182000, 
      spotify_uri: 'spotify:track:12', 
      created_at: '2024-01-01T00:00:00Z',
      comments: JSON.parse('[{"user": "isabella m.", "comment": "this song hits different at night"}, {"user": "lucas c.", "comment": "the lyrics are so relatable"}]'),
      rating: 0
    },
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

  const handleSearchPress = () => {
    // Handle search functionality
    console.log('Search pressed');
  };

  const handleTrackPress = (track: Track) => {
    // Navigate to Detail screen with track object as parameter
    router.push({
      pathname: '/(tabs)/Detail',
      params: { track: JSON.stringify(track) }
    });
  };

  return (
    <Screen
      iconName="back"
      title="playlistname"
      subtitle="12 songs"
      activeButtons={activeButtons}
      onSearchPress={handleSearchPress}
    >
      <ScrollView style={styles.contentSection} showsVerticalScrollIndicator={false}>
        {/* Track List */}
        <View style={styles.songSection}>
          {tracks.map((track, index) => (
            <TouchableOpacity 
              key={track.spotify_track_id} 
              style={styles.songItem}
              onPress={() => handleTrackPress(track)}
            >
              <View style={styles.songIcon}>
                <Text style={styles.songIconText}>{track.rating}</Text>
              </View>
              <View style={styles.songInfo}>
                <ThemedText style={styles.songName}>{track.track_name}</ThemedText>
                <ThemedText style={styles.songSubtitle}>{track.artist_name} • {track.genre}</ThemedText>
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