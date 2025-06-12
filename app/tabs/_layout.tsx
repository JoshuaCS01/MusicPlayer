import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Tabs } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const color = "#261b27";

function LogoTitle() {
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
      <Image style={styles.image} source={require('../../assets/images/MusioLogo.png')} />
      <Text style={{ color: "white", fontSize: 18, marginLeft: 8 }}>Musio</Text>
      <Link href="../settings/" style={{ marginLeft: "auto" }}>
        <Feather name="settings" size={24} color="white" />
      </Link>
    </View>
  );
}

export default function TabLayout() {
    const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        
        tabBarActiveTintColor: '#ffd33d',
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: '#25292e',
          paddingBottom: 50,
          height: 60 + insets.bottom,
        },
        headerShown: true,
        header: () => <LogoTitle />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="songs"
        options={{
          title: 'Songs',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'musical-notes-sharp' : 'musical-notes-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          title: 'Playlists',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'list-circle-sharp' : 'list-circle-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
