import {ActiveButton} from '@/components/ActiveButtons';
import Screen from '@/components/Screen';
import {ThemedText} from '@/components/ThemedText';
import {IconSymbol} from '@/components/ui/IconSymbol';
import {useLocalSearchParams, useRouter} from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Track} from '../../types';

export default function PlaylistDetailScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const playlistId = params.id as string;

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
      comments: JSON.parse(
        '[{"user": "thea a.", "comment": "love this vibe!"}, {"user": "han n.", "comment": "perfect for studying"}, {"user": "alex m.", "comment": "reminds me of summer"}]',
      ),
      rating: 5,
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
      comments: JSON.parse(
        '[{"user": "sam k.", "comment": "this hits different"}]',
      ),
      rating: 4,
    },
    // ... more tracks
  ];

  const activeButtons: ActiveButton[] = [
    {
      title: 'han',
      screen: '',
    },
    {
      title: 'thea',
      screen: '',
    },
    {
      title: 'unrated',
      screen: '',
    },
  ];

  const handleAddComment = () => {
    //TODO: VYBES-13: handle add comment to a song
  };

  const handleTrackPress = (track: Track) => {
    // Navigate to track detail screen
    router.push({
      pathname:
        `/playlist/${playlistId}/track/${track.spotify_track_id}` as never,
      params: {
        track: JSON.stringify(track),
        playlistId: playlistId,
      },
    });
  };

  return (
    <Screen
      iconName='back'
      title='playlistname'
      subtitle='12 songs'
      activeButtons={activeButtons}
      onSearchPress={handleAddComment}>
      <ScrollView
        style={styles.contentSection}
        showsVerticalScrollIndicator={false}>
        {/* Track List */}
        <View style={styles.songSection}>
          {tracks.map((track, index) => (
            <TouchableOpacity
              key={track.spotify_track_id}
              style={styles.songItem}
              onPress={() => handleTrackPress(track)}>
              <View style={styles.songIcon}>
                <Text style={styles.songIconText}>{track.rating}</Text>
              </View>
              <View style={styles.songInfo}>
                <ThemedText style={styles.songName}>
                  {track.track_name}
                </ThemedText>
                <ThemedText style={styles.songSubtitle}>
                  {track.artist_name} • {track.genre}
                </ThemedText>
              </View>
              <TouchableOpacity style={styles.menuButton}>
                <IconSymbol size={20} name='ellipsis' color={'#FFFFFF'} />
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
    backgroundColor: '#5C8B7E',
    borderWidth: 2,
    borderColor: '#7FB069',
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
