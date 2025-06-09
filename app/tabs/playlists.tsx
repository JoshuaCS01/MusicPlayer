import { Text, View, StyleSheet } from 'react-native';

export default function PlaylistsScreen() {
  return (
    <View  style={styles.container} >
      <Text style={styles.text}>Playlists screen</Text>
    </View>
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
