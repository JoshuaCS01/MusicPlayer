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
      <Text style={styles.text}>Songs screen</Text>
    </View>
    </Pressable>
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
    color: '#000000',
  },
});
