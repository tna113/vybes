/* eslint-disable no-console */
import Screen from '@/components/Screen';
import {createClient} from '@supabase/supabase-js';
import {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Track} from './types';

// Create a single supabase client for interacting with your database
const url = 'https://zwbbzxleomraswznvsnd.supabase.co';
const legacyApiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YmJ6eGxlb21yYXN3em52c25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNDg2OTQsImV4cCI6MjA2MDkyNDY5NH0.CJiKl6OERmD-HoDU6w0gFVjbR_TGyTU7Dl-EF_e64tA';
const supabase = createClient(url, legacyApiKey);

const getTracks = async () => {
  try {
    const {data, error} = await supabase.from('tracks').select(`*`);

    if (data) {
      return data;
    } else {
      return error;
    }
  } catch (error) {
    throw error;
  }
};

export default function DebugScreen() {
  const [data, setData] = useState<Track[]>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const result = await getTracks();

      if (Array.isArray(result)) {
        const arr = result as Track[];
        const tracks: Track[] = [];
        arr.forEach((element) => {
          tracks.push(element ?? {track_name: 'missing'});
        });
        setData(tracks);
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
          <Text style={styles.response}>response</Text>
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
});
