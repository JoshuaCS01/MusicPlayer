import { Stack, Link} from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { Button, Text, Image, StyleSheet, View } from 'react-native';
import { Background } from '@react-navigation/elements';




let color = "#ff459c"


function LogoTitle() {
  return (
    <View style={{
      backgroundColor:color,
      display: "flexbox",
      flexDirection: "row",
      justifyContent:"flex-start",
      gap: "10",
      alignItems: "center"
    }}>
      <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
        <Text>Musio</Text>
        <Link href="./test" style={{marginLeft: "auto", color: "black"}}>
        <Feather name="settings" size={24}/>
        </Link>
    </View>
  );
}

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="tabs"
        options={{
          headerStyle:{
            backgroundColor: color
          },
          title: 'Musio', headerShown: true,
          headerTitle: props => <LogoTitle {...props} />,
        }}/>

    </Stack>
  );
}


const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});