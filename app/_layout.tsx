import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { PlaybackProvider } from './tabs/PlaybackContext';



let color = "#261b27"

export default function RootLayout() {

return( 
  <PlaybackProvider>
    <Stack screenOptions={{ headerShown: false }} />
  </PlaybackProvider>
);
}


const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});