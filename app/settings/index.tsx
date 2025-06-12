import { StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View  style={styles.container} >
      <Text style={styles.text}>Settings screen</Text>
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
