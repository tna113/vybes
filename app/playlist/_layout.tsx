import {Stack} from 'expo-router';

export default function PlaylistLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='[id]'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='track/[id]'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
