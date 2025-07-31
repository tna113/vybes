/* eslint-disable no-console */
import Screen from '@/components/Screen';
import {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Network} from '../hooks/network/Network';
import {Track} from '../types';

const getTracks = async () => {
  try {
    // Using the Network class to make a GET request to the Supabase REST API
    const response = await Network.get<Track[]>('/rest/v1/tracks');
    return response;
  } catch (error) {
    console.error('Error fetching tracks:', error);
    throw error;
  }
};

export default function DebugScreen() {
  const [data, setData] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getTracks();

        if (Array.isArray(result)) {
          const tracks: Track[] = [];
          result.forEach((element) => {
            tracks.push(element ?? {track_name: 'missing'});
          });
          setData(tracks);
        } else {
          setError('Invalid response format');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  // parse data
  console.log('hi', data);

  return (
    <SafeAreaView>
      <Screen title='Debug' subtitle='Debug' iconName='back'>
        <View style={styles.responseContainer}>
          {loading && <Text style={styles.response}>Loading...</Text>}
          {error && (
            <Text style={[styles.response, styles.error]}>{error}</Text>
          )}
          {!loading && !error && (
            <Text style={styles.response}>
              {data.length > 0
                ? `Loaded ${data.length} tracks`
                : 'No tracks found'}
            </Text>
          )}
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
});
