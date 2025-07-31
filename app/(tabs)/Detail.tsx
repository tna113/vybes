import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Screen from '@/components/Screen';
import { ActiveButton } from '@/components/ActiveButtons';
import { useLocalSearchParams, useRouter } from 'expo-router';

// StarRating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <View style={styles.starRatingContainer}>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <IconSymbol
          key={starIndex}
          size={48}
          name="star.fill"
          color={starIndex <= rating ? "#5E8D78" : "#1F3D31"}
        />
      ))}
    </View>
  );
};

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

// Comments data
const comments = [
  {
    user: 'thea a.',
    comment: 'yeah i guess it was a good song i think it needed to be a little longer than that'
  },
  {
    user: 'han n.',
    comment: 'short songs are so good tho!!'
  }
];

export default function DetailScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('alternative');

  // Parse the track object from navigation parameters
  const track: Track | null = params.track ? JSON.parse(params.track as string) : null;

  // Parse comments from the track object
  const trackComments = track?.comments ? (track.comments as any) : [];

  const handleBackPress = () => {
    router.push('/(tabs)/playlistItem');
  };

  const activeButtons: ActiveButton[] = [
    { 
      title: 'alternative', 
      screen: '',
      onPress: () => setActiveButton('alternative')
    },
    { 
      title: 'han', 
      screen: '',
      onPress: () => setActiveButton('han')
    }
  ];

  const getFirstLetter = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const getAvatarStyle = (index: number) => {
    const isEven = index % 2 === 0;
    return {
      backgroundColor: isEven ? '#FFFFFF' : '#5E8D78',
      color: isEven ? '#496D5D' : '#FFFFFF',
    };
  };

  return (
    <Screen
      enableEmptySpace={true}
      iconName="back"
      title={track?.track_name || "track name"}
      subtitle={track?.artist_name || "artist name"}
      activeButtons={activeButtons}
      starRating={<StarRating rating={track?.rating || 0} />}
      onBackPress={handleBackPress}
    >
      <View style={styles.container}>
        <ScrollView style={styles.contentSection} showsVerticalScrollIndicator={false}>
          {/* Comments Section */}
          <View style={styles.commentsSection}>
            {trackComments.map((comment: any, index: number) => {
              const avatarStyle = getAvatarStyle(index);
              return (
                <View key={index} style={styles.commentItem}>
                  <View style={[styles.avatarContainer, { backgroundColor: avatarStyle.backgroundColor }]}>
                    <Text style={[styles.avatarText, { color: avatarStyle.color }]}>
                      {getFirstLetter(comment.user)}
                    </Text>
                  </View>
                  <View style={styles.commentContent}>
                    <ThemedText style={styles.commentText}>{comment.comment}</ThemedText>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>

        {/* Message Input Section - Fixed at bottom */}
        <View style={styles.messageSection}>
          <View style={styles.messageInputContainer}>
            <TextInput 
              style={styles.messageInput}
              placeholder="Add a comment..."
              placeholderTextColor="#868686"
            />
            <TouchableOpacity style={styles.sendButton}>
              <IconSymbol size={20} name="paperplane.fill" color={'#868686'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  contentSection: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  commentsSection: {
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 20,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    flex: 1,
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
  },
  commentContent: {
    flex: 1,
  },
  commentText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
    opacity: 0.62,
    paddingHorizontal: 4,
  },
  messageSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#1E1E1E',
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#868686',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'transparent',
  },
  messageInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 8,
    padding: 4,
  },
  starRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
}); 