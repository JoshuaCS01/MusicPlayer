import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                tabBarInactiveTintColor: "white",
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
                name="songs"
                options={{
                    title: 'Songs',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'musical-notes-sharp' : 'musical-notes-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="playlists"
                options={{
                    title: 'Playlists',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'list-circle-sharp':'list-circle-outline'} color={color} size={24}/>
                    ),
                }}
            />
        </Tabs>
    );
}
