import CurrentlyPlayingCard from '@/components/CurrentlyPlaying';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Tabs } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePlayback } from './PlaybackContext';

const color = "#261b27";

function LogoTitle() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      backgroundColor: "#525252",
      paddingTop: insets.top,
      paddingHorizontal: 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: 60 + insets.top,
    }}>
      <View style={{ flexDirection: "row", alignItems: "center", transform: [{ translateX: 110 }] }}>
        <Image style={styles.image} source={require('../../assets/images/MusioLogo.png')} />
        <Text style={{ color: "white", fontSize: 18, marginLeft: 8 }}>Musio</Text>
      </View>
      <Link href="../settings/" style={{ marginLeft: "auto" }}>
        <Feather name="settings" size={24} color="white" />
      </Link>
    </View>
  );
}

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const { currentSong, isPlaying, onTogglePlay } = usePlayback();

  let content;

  if (isPlaying || currentSong != null) {
    content = <>
      <CurrentlyPlayingCard song={currentSong} isPlaying={undefined} onTogglePlay={null} />
    </>;

  } else {
    content = <></>;
  }

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#ffd33d',
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: '#25292e',
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
      {content}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  test: {
    backgroundColor: "green"
  }
});
