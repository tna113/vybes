import {Stack} from 'expo-router';

export default function TrackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='[id]'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
