import * as FileSystem from 'expo-file-system';
import { Button, NativeModules, StyleSheet, View } from 'react-native';

export default function PlaylistsScreen() {
  // Example button handler
const onPickFilePress = () => {
  pickPlaylistFile('somePlaylistId');
};

  const { PlaylistFilesModule } = NativeModules;

  async function pickPlaylistFile(playlistId) {
  try {
    const uri = await PlaylistFilesModule.getPlaylistFiles(playlistId);
    console.log('Picked file URI:', uri);
    const fileContent = await FileSystem.readAsStringAsync(uri);
    const lines = fileContent.split(/\r?\n/);

    lines.forEach(line => {
      console.log('Line:', line);
      console.log('test');
    });
     
  } catch (error) {
    console.error('Error picking playlist file:', error);
  }


}
  return (
    <View  style={styles.container} >
      <Button onPress={() => { onPickFilePress() } } title={"+ Import playlist"}></Button>
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
