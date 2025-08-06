/* eslint-disable no-console */
import Screen from '@/components/Screen';
import {useGetTracksQuery} from '@/hooks/network';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function DebugScreen() {
  const {data, isLoading, error} = useGetTracksQuery();
  console.log('tracksData', {
    data,
    isLoading,
    error,
  });
  console.log('supabase tracks', data);

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
