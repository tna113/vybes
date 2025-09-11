/* eslint-disable no-console */
import Screen from '@/components/Screen';
import {useGetTracksQuery} from '@/hooks/network';
import {useGetSpotifyTokenQuery} from '@/hooks/network/useGetSpotifyTokenQuery';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function DebugScreen() {
  const {data, isLoading, error} = useGetTracksQuery();
  console.log('tracksData', {
    data,
    isLoading,
    error,
  });
  console.log('supabase tracks', data);

  const {
    data: spotifyToken,
    isLoading: tokenIsLoadingSpotify,
    error: spotifyTokenError,
  } = useGetSpotifyTokenQuery();

  return (
    <SafeAreaView>
      <Screen title='Debug' subtitle='Debug' iconName='back'>
        <View style={styles.responseContainer}>
          {isLoading && <Text style={styles.response}>Loading...</Text>}
          {error && <Text style={[styles.response, styles.error]}>error</Text>}
          {!isLoading && !error && (
            <Text style={styles.response}>
              {data && data.length > 0
                ? `Loaded ${data.length} tracks`
                : 'No tracks found'}
            </Text>
          )}

          <View style={styles.spotifySection}>
            <Text style={styles.sectionTitle}>
              Spotify Access Token (valid for 1h):
            </Text>
            {tokenIsLoadingSpotify && (
              <Text style={styles.response}>Requesting token...</Text>
            )}
            {spotifyTokenError && (
              <Text style={[styles.response, styles.error]}>Error</Text>
            )}
            {spotifyToken && (
              <Text style={styles.response}>
                Token: {spotifyToken.substring(0, 20)}...
              </Text>
            )}
          </View>

          {/* <View style={styles.spotifySection}>
            <Text style={styles.sectionTitle}>Spotify Access Token:</Text>
            {artistIsLoadingSpotify && (
              <Text style={styles.response}>Requesting token...</Text>
            )}
            {spotifyArtistError && (
              <Text style={[styles.response, styles.error]}>
                Error: {spotifyArtistError}
              </Text>
            )}
            {spotifyArtistData && (
              <Text style={styles.response}>
                Artist data: {JSON.stringify(spotifyArtistData)}
              </Text>
            )}
          </View> */}
        </View>
      </Screen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  request: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  responseContainer: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  response: {
    fontSize: 14,
    color: 'white',
  },
  error: {
    color: '#ff6b6b',
  },
  spotifySection: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
});
