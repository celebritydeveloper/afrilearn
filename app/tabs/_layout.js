import { Tabs } from "expo-router";
import { Iconify } from 'react-native-iconify';


export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                // Name of the route to hide.
                name="index"
                
                options={{
                // This tab will no longer show up in the tab bar.
                    title: "Home"
                }}
            />

            <Tabs.Screen
                // Name of the route to hide.
                name="Learn"
                options={{
                // This tab will no longer show up in the tab bar.
                    
                }}
            />

            <Tabs.Screen
                // Name of the route to hide.
                name="AskAfri"
                options={{
                // This tab will no longer show up in the tab bar.
                    
                }}
            />

            <Tabs.Screen
                // Name of the route to hide.
                name="AfriTown"
                options={{
                // This tab will no longer show up in the tab bar.
                    
                }}
            />
        </Tabs>
    )
};