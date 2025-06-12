import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';




let color = "#261b27"

export default function RootLayout() {

return( 
  <Stack screenOptions={{ headerShown: false }} />
);
}


const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});