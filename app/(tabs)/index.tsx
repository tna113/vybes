import {ActiveButton} from '@/components/ActiveButtons';
import Screen from '@/components/Screen';
import {ThemedText} from '@/components/ThemedText';
import {useRouter} from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  const handlePlaylistPress = () => {
    router.push('/playlist/1'); // Navigate to playlist with ID 1
  };

  const playlists = [
    {
      id: 1,
      name: 'Summer Vibes',
      songCount: 15,
      sharedWith: 'han',
      avatars: ['T', 'H'],
    },
    {
      id: 2,
      name: 'Workout Mix',
      songCount: 8,
      sharedWith: 'alex',
      avatars: ['T', 'A'],
    },
    {
      id: 3,
      name: 'Chill Beats',
      songCount: 22,
      sharedWith: 'sam',
      avatars: ['T', 'S'],
    },
  ];

  const activeButtons: ActiveButton[] = [
    {
      title: 'create a playlist',
      screen: '',
    },
    {
      title: 'friends',
      screen: '',
    },
    {
      title: 'notifications',
      screen: '',
    },
  ];

  return (
    <Screen
      iconName='V'
      title='playlists'
      subtitle='sharing 3 playlists'
      activeButtons={activeButtons}>
      <ScrollView
        style={styles.contentSection}
        showsVerticalScrollIndicator={false}>
        {/* Playlist List */}
        <View style={styles.playlistSection}>
          {playlists.map((playlist, index) => (
            <TouchableOpacity
              key={playlist.id}
              style={styles.playlistItem}
              onPress={() => handlePlaylistPress()}>
              <View style={styles.playlistInfo}>
                <ThemedText style={styles.playlistName}>
                  {playlist.name}
                </ThemedText>
                <ThemedText style={styles.playlistSubtitle}>
                  {playlist.songCount} songs shared with {playlist.sharedWith}
                </ThemedText>
              </View>
              <View style={styles.userAvatars}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{playlist.avatars[0]}</Text>
                </View>
                <View style={[styles.avatar, styles.avatarOverlap]}>
                  <Text style={styles.avatarTextGreen}>
                    {playlist.avatars[1]}
                  </Text>
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
