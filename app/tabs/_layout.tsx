import { Tabs } from 'expo-router';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#white',
                },
                headerShadowVisible: false,
                headerShown:false,
                tabBarStyle: {
                    backgroundColor: '#25292e',
                },
            }}>
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
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="playlists"
                options={{
                    title: 'Playlists',
                    tabBarIcon: ({ color, focused }) => (
                        <SimpleLineIcons name="playlist" color={color} size={24}/>
                    ),
                }}
            />
        </Tabs>
    );
}
