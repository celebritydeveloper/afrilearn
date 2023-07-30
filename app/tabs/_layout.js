import * as React from "react"
import { Tabs } from "expo-router";
import { Iconify } from 'react-native-iconify';
import { ROUTES, COLORS } from "../../constants";
import { AskAfriIcon, AskAfriIconActive } from "../../assets/svgs";

export default () => {
    return (
        <Tabs 
            screenOptions={() => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { bottom: 0, left: 0, right: 0, position: "absolute", borderTopWidth: 2, height: 70, borderTopColor: COLORS.nutralColor, bottom: 0, backgroundColor: COLORS.white, elevation: 1, borderTopLeftRadius: 0, borderTopRightRadius: 0 },
            })}>
            <Tabs.Screen
                name={ROUTES.HOMESCREEN}
                options={{
                    title: "Home",
                    tabBarLabelStyle: { fontSize: 14, fontWeight: "bold", color: COLORS.nutralColor },
                    tabBarIcon: ({ color, focused }) => ( <Iconify icon="solar:home-2-bold" color={ focused ? COLORS.afrigreen : COLORS.black } size={ 38 } /> ),
                    tabBarActiveTintColor: COLORS.black, tabBarShowLabel: true, tabBarLabel: "Home",
                }}
            />

            <Tabs.Screen
                name={ROUTES.LEARNSCREEN}
                options={{
                    title: "Learn",
                    tabBarLabelStyle: { fontSize: 14, fontWeight: "bold", color: COLORS.nutralColor },
                    tabBarIcon: ({ color, focused }) => ( <Iconify icon="mingcute:game-2-line" color={ focused ? COLORS.afrigreen : COLORS.black } size={ 40 } /> ),
                    tabBarActiveTintColor: COLORS.black, tabBarShowLabel: true, tabBarLabel: "Learn",
                }}
            />

            <Tabs.Screen
                name={ROUTES.ASKAFRISCREEN}
                options={{
                    title: "AskAfri",
                    tabBarLabelStyle: { fontSize: 14, fontWeight: "bold", color: COLORS.nutralColor },
                    tabBarIcon: ({ color, focused }) => ( focused ? <AskAfriIconActive /> : <AskAfriIcon />),
                    tabBarActiveTintColor: COLORS.black, tabBarShowLabel: true, tabBarLabel: "AskAfri",
                }}
            />

            <Tabs.Screen
                name={ROUTES.AFRITOWNSCREEN}
                options={{
                    title: "AfriTown",
                    tabBarLabelStyle: { fontSize: 14, fontWeight: "bold", color: COLORS.nutralColor },
                    tabBarIcon: ({ color, focused }) => ( <Iconify icon="fluent:people-12-regular" color={ focused ? COLORS.afrigreen : COLORS.black } size={ 39 } /> ),
                    tabBarActiveTintColor: COLORS.black, tabBarShowLabel: true, tabBarLabel: "AfriTown",
                }}
            />
        </Tabs>
    )
};


