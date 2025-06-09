import Feather from '@expo/vector-icons/Feather';
import { Link, Stack } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';




let color = "#261b27"


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
      <Image style={styles.image} source={require('../assets/images/MusioLogo.png')} />
        <Text style={{color: "white"}}>Musio</Text>
        <Link href="../settings" style={{marginLeft: "auto", color: "white"}}>
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