import { Button, StyleSheet, View } from 'react-native';

export default function PlaylistsScreen() {
  return (
    <View  style={styles.container} >
      <Button onPress={() => { console.log("Test"); } } title={"+ Import playlist"}></Button>
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
