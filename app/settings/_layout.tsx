import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const color = "#261b27";

function Title() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      backgroundColor: color,
      paddingTop: insets.top,
      paddingHorizontal: 12,
      flexDirection: "row",
      alignItems: "center",
      height: 60 + insets.top,
    }}>
      <Text style={{ color: "white", fontSize: 18, marginLeft: 8 }}>Settings</Text>
    </View>
  );
}

export default function SettingsLayout() {
    const insets = useSafeAreaInsets();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: 'Settings',
        headerStyle: { backgroundColor: '#261b27' },
        headerTintColor: 'white',
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
