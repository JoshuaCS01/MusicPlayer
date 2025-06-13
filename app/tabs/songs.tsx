import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SongsScreen() {
  const navigation = useNavigation();

  const goToPlaylists = () => {
    navigation.navigate('playlists');
  };

  return (
    <Pressable style={styles.container} onPress={goToPlaylists}>
      <View style={styles.container} >
        <Text style={styles.text}>No Songs  : (</Text>
        <View style={{ transform: [{ translateY: 100 }] }}>
          <Pressable style={styles.button} onPress={goToPlaylists}>
            <Text style={styles.text}>+ Add Songs</Text>
          </Pressable>
        </View>
      </View>



    </Pressable >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525252',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 30
  },
  button: {
    backgroundColor: "#261b27",
    padding:20,
    borderRadius:20
  },
});
