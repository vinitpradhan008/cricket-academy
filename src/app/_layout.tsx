import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="login"
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="register"
        options={{
          title: 'Register',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />
    </Stack>
  );
}
