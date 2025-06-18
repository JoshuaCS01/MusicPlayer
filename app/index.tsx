import { useRouter } from "expo-router";
import { useEffect, useRef } from 'react';
import { Animated, Button, Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export const requestAudioPermission = async () => {
  const permission = Platform.select({
    android: Platform.Version >= 33
      ? PERMISSIONS.ANDROID.READ_MEDIA_AUDIO
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ios: PERMISSIONS.IOS.MEDIA_LIBRARY,
  });

  const result = await request(permission);
  console.log('Permission result:', result);

  if (result === RESULTS.GRANTED) {
    console.log('Permission granted!');
  } else {
    console.log('Permission not granted.');
  }
};


export default function Index() {

  useEffect(() => {
    requestAudioPermission();
  }, []);

  let content;
  let bool = true
  if (bool) {
    content =
      <>
        <Text style={{ color: "white", transform: [{ translateY: 250 }] }}>Tap to continue</Text>
      </>;

  } else {
    content =
      <>
        <Button title="request permissions" onPress={requestAudioPermission} />
      </>;
  }

  const insets = useSafeAreaInsets();

  //navigation stuff
  const router = useRouter();
  const goToPlaylists = () => {
    router.push('./tabs/');
  };

  // Slide-in animation
  const slideAnim = useRef(new Animated.Value(-150)).current; // Start off-screen to the left
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,           // End at position 0 (on screen)
      duration: 1000,       // 1 second animation
      useNativeDriver: true,
    }).start();
  }, []);

  // Fade-in animation
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);


  return (
    <Pressable style={styles.container} onPress={goToPlaylists}>
      <View style={styles.container}>
        <Animated.Text style={[styles.baseText, { opacity: fadeAnim, transform: [{ translateX: slideAnim }] }]}>
          Welcome to
        </Animated.Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.image} source={require('../assets/images/MusioLogo.png')} />
          <Text style={{ color: "white", fontSize: 50, marginLeft: 8 }}>Musio</Text>
        </View>
        <Text style={{ color: "white", transform: [{ translateY: 250 }] }}>Tap to continue</Text>
      </View>
    </Pressable >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261b27',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
  },

  baseText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 70,
    height: 100,
  },
});

