import * as React from "react"
import { Tabs } from "expo-router";
import { Iconify } from 'react-native-iconify';
import { ROUTES, COLORS } from "../../constants";
import Svg, { G, Path, Mask, Defs, ClipPath } from "react-native-svg"


export default () => {
    return (
        <Tabs 
            screenOptions={({ name }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: { bottom: 0, left: 0, right: 0, position: "absolute", borderTopWidth: 0, height: 60, borderTopColor: COLORS.darkblue,  bottom: 0, backgroundColor: COLORS.white, elevation: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15 },

                // tabBarIcon: ({ color, size, focused}) => {
                //     let iconName = "";
                //     if(name === ROUTES.HOMESCREEN) {
                //         iconName = focused ? "solar:home-2-bold" : "solar:home-2-linear";
                //         color = focused ? COLORS.black : COLORS.black;
                //         size = size ? 35 : 30;

                //     } else if (name === ROUTES.LEARNSCREEN) {
                //         iconName = focused ? "mingcute:game-2-line" : "mingcute:game-2-line";
                //         color = focused ? COLORS.black : COLORS.black;
                //         size = size ? 40 : 38;
                //     } else if (name === ROUTES.ASKAFRISCREEN) {
                //         iconName = focused ? "fluent:people-12-regular" : "fluent:people-12-regular";
                //         color = focused ? COLORS.black : COLORS.black;
                //         size = size ? 28 : 25;
                //     } else if (name === ROUTES.AFRITOWNSCREEN) {
                //         iconName = focused ? "fluent:people-12-regular" : "fluent:people-12-regular";
                //         color = focused ? COLORS.black : COLORS.black;
                //         size = size ? 28 : 25;
                //     }

                //     return (<Iconify icon={ iconName } color={ color } size={ size } />)
                // }
            })}>
            <Tabs.Screen
                // Name of the route to hide.
                name="index"
                options={{
                // This tab will no longer show up in the tab bar.
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => ( <Iconify icon="solar:home-2-bold" color={ focused ? COLORS.afrigreen : COLORS.black } size={ 38 } /> ),
                    tabBarActiveTintColor: COLORS.black, tabBarShowLabel: true, tabBarLabel: "Home",
                }}
            />

            <Tabs.Screen
                // Name of the route to hide.
                name="Learn"
                options={{
                // This tab will no longer show up in the tab bar.
                    title: "Learn",
                    tabBarIcon: ({ color, focused }) => ( <Iconify icon="mingcute:game-2-line" color={ focused ? COLORS.afrigreen : COLORS.black } size={ 38 } /> ),
                    tabBarActiveTintColor: COLORS.black, tabBarShowLabel: true, tabBarLabel: "Learn",
                }}
            />

            <Tabs.Screen
                // Name of the route to hide.
                name="AskAfri"
                options={{
                // This tab will no longer show up in the tab bar.
                    title: "AskAfri",
                    tabBarIcon: ({ color, focused }) => ( focused ? <AskAfriIconActive /> : <AskAfriIcon />),
                    tabBarActiveTintColor: COLORS.black, tabBarShowLabel: true, tabBarLabel: "AskAfri",
                }}
            />

            <Tabs.Screen
                // Name of the route to hide.
                name="AfriTown"
                options={{
                // This tab will no longer show up in the tab bar.
                    title: "AfriTown",
                    tabBarIcon: ({ color, focused }) => ( <Iconify icon="fluent:people-12-regular" color={ focused ? COLORS.afrigreen : COLORS.black } size={ 38 } /> ),
                    tabBarActiveTintColor: COLORS.black, tabBarShowLabel: true, tabBarLabel: "AfriTown",
                }}
            />
        </Tabs>
    )
};



function AskAfriIcon(props) {
    return (
      <Svg
        width={36}
        height={34}
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <G clipPath="url(#clip0_348_1195)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.741 3.375A3.662 3.662 0 004.08 7.037V22.14a3.662 3.662 0 003.662 3.662h20.682l4.012 2.56v-5.81c.015-.135.023-.273.023-.412V7.037a3.662 3.662 0 00-3.662-3.662H7.741z"
            fill="#fff"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.423 25.803H7.741a3.662 3.662 0 01-3.662-3.661V7.037a3.662 3.662 0 013.662-3.662h21.055a3.662 3.662 0 013.662 3.662v15.105c0 .139-.008.276-.023.411v5.81l-4.012-2.56zm6.53-3.128c.015-.176.022-.354.022-.533V7.037a6.18 6.18 0 00-6.179-6.18H7.741a6.18 6.18 0 00-6.179 6.18v15.105a6.18 6.18 0 006.18 6.179h19.946l7.264 4.635v-10.28z"
            fill="#41424F"
          />
          <Mask
            id="a"
            style={{
              maskType: "luminance"
            }}
            maskUnits="userSpaceOnUse"
            x={4}
            y={3}
            width={29}
            height={23}
          >
            <Path d="M32.458 3.375H4.079v22.428h28.379V3.375z" fill="#fff" />
          </Mask>
          <G mask="url(#a)">
            <Mask
              id="b"
              style={{
                maskType: "alpha"
              }}
              maskUnits="userSpaceOnUse"
              x={4}
              y={3}
              width={29}
              height={23}
            >
              <Path
                d="M28.796 3.375H7.741A3.662 3.662 0 004.08 7.037V22.14a3.662 3.662 0 003.662 3.662h21.055a3.662 3.662 0 003.662-3.662V7.037a3.662 3.662 0 00-3.662-3.662z"
                fill="#D9D9D9"
              />
            </Mask>
            <G mask="url(#b)">
              <Path
                d="M2.492 20.127c-.196 1.03 1.133 1.915 2.713 1.823 9.934-.576 16.63-.536 26.48.327 1.65.145 3.058-.784 2.793-1.862-1.978-8.03-3.585-13.34-4.112-21.406-.068-1.043-1.58-1.792-3.135-1.571-6.367.903-10.034.773-17.458-.345-1.483-.223-2.926.457-3.061 1.448-1.14 8.392-2.713 13.681-4.22 21.586z"
                fill="#fff"
              />
              <Path
                d="M6.479 16.366a1.594 1.594 0 001.755 1.727c8.16-.848 13.076-.892 20.047-.047 1.012.122 1.89-.714 1.796-1.729l-1.21-13.152a1.6 1.6 0 00-2-1.39c-7.13 1.861-9.679 1.846-17.193-.029a1.596 1.596 0 00-1.978 1.395L6.479 16.366z"
                fill="#ECEEF5"
              />
              <Path
                d="M24.542 16.463c2.03 0 3.676-1.92 3.676-4.288 0-2.368-1.646-4.288-3.676-4.288-2.03 0-3.675 1.92-3.675 4.288 0 2.369 1.645 4.288 3.675 4.288z"
                fill="#FCFCFB"
              />
              <Path
                d="M24.542 16.463c1.579 0 2.859-1.493 2.859-3.335 0-1.842-1.28-3.335-2.859-3.335s-2.859 1.493-2.859 3.335c0 1.842 1.28 3.335 2.86 3.335z"
                fill="#DADADA"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.899 11.911c-.11.036-.228.055-.35.055-.66 0-1.196-.56-1.196-1.25 0-.092.01-.182.027-.268a2.34 2.34 0 00-.824-.15c-1.468 0-2.658 1.369-2.658 3.057s1.19 3.056 2.658 3.056 2.658-1.368 2.658-3.056c0-.522-.114-1.014-.315-1.444z"
                fill="#1C1040"
              />
              <Path
                d="M12.29 16.804c-2.03 0-3.675-1.92-3.675-4.288 0-2.369 1.646-4.288 3.676-4.288 2.03 0 3.675 1.92 3.675 4.288 0 2.368-1.646 4.288-3.675 4.288z"
                fill="#FCFCFB"
              />
              <Path
                d="M12.29 16.804c-1.578 0-2.858-1.493-2.858-3.335 0-1.842 1.28-3.335 2.859-3.335 1.578 0 2.858 1.493 2.858 3.335 0 1.842-1.28 3.335-2.858 3.335z"
                fill="#DADADA"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.934 12.252c.11.035.228.054.35.054.66 0 1.196-.56 1.196-1.25 0-.092-.01-.18-.028-.267.26-.097.537-.15.825-.15 1.468 0 2.658 1.369 2.658 3.057s-1.19 3.056-2.658 3.056-2.658-1.368-2.658-3.056c0-.522.114-1.014.315-1.444z"
                fill="#1C1040"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.96 6.9s.509-1.26 1.766-1.501c1.352-.259 2.364.922 2.364.922s-.268-2.195-2.236-1.955C9.789 4.618 9.949 6.937 9.96 6.9zM28.23 6.9s-.508-1.26-1.766-1.5c-1.352-.26-2.363.922-2.363.922s.268-2.196 2.236-1.955c2.065.252 1.904 2.57 1.894 2.533z"
                fill="#2B203F"
              />
            </G>
          </G>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.677 21.412c-.25.533.154 1.14 1.413 1.185 1.064.038 1.695-.377 1.72-1.126.015-.428-3.07-.192-3.133-.059z"
            fill="#B02F10"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_348_1195">
            <Path
              fill="#fff"
              transform="translate(.833 .629)"
              d="M0 0H35V32.7419H0z"
            />
          </ClipPath>
        </Defs>
      </Svg>
    )
}



function AskAfriIconActive(props) {
    return (
      <Svg
        width={36}
        height={34}
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <G clipPath="url(#clip0_348_1195)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.741 3.375A3.662 3.662 0 004.08 7.037V22.14a3.662 3.662 0 003.662 3.662h20.682l4.012 2.56v-5.81c.015-.135.023-.273.023-.412V7.037a3.662 3.662 0 00-3.662-3.662H7.741z"
            fill="#fff"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.423 25.803H7.741a3.662 3.662 0 01-3.662-3.661V7.037a3.662 3.662 0 013.662-3.662h21.055a3.662 3.662 0 013.662 3.662v15.105c0 .139-.008.276-.023.411v5.81l-4.012-2.56zm6.53-3.128c.015-.176.022-.354.022-.533V7.037a6.18 6.18 0 00-6.179-6.18H7.741a6.18 6.18 0 00-6.179 6.18v15.105a6.18 6.18 0 006.18 6.179h19.946l7.264 4.635v-10.28z"
            fill="#41424F"
          />
          <Mask
            id="a"
            style={{
              maskType: "luminance"
            }}
            maskUnits="userSpaceOnUse"
            x={4}
            y={3}
            width={29}
            height={23}
          >
            <Path d="M32.458 3.375H4.079v22.428h28.379V3.375z" fill="#fff" />
          </Mask>
          <G mask="url(#a)">
            <Mask
              id="b"
              style={{
                maskType: "alpha"
              }}
              maskUnits="userSpaceOnUse"
              x={4}
              y={3}
              width={29}
              height={23}
            >
              <Path
                d="M28.796 3.375H7.741A3.662 3.662 0 004.08 7.037V22.14a3.662 3.662 0 003.662 3.662h21.055a3.662 3.662 0 003.662-3.662V7.037a3.662 3.662 0 00-3.662-3.662z"
                fill="#D9D9D9"
              />
            </Mask>
            <G mask="url(#b)">
              <Path
                d="M2.492 20.127c-.196 1.03 1.133 1.915 2.713 1.823 9.934-.576 16.63-.536 26.48.327 1.65.145 3.058-.784 2.793-1.862-1.978-8.03-3.585-13.34-4.112-21.406-.068-1.043-1.58-1.792-3.135-1.571-6.367.903-10.034.773-17.458-.345-1.483-.223-2.926.457-3.061 1.448-1.14 8.392-2.713 13.681-4.22 21.586z"
                fill="#fff"
              />
              <Path
                d="M6.479 16.366a1.594 1.594 0 001.755 1.727c8.16-.848 13.076-.892 20.047-.047 1.012.122 1.89-.714 1.796-1.729l-1.21-13.152a1.6 1.6 0 00-2-1.39c-7.13 1.861-9.679 1.846-17.193-.029a1.596 1.596 0 00-1.978 1.395L6.479 16.366z"
                fill="#45CD81"
              />
              <Path
                d="M24.542 16.463c2.03 0 3.676-1.92 3.676-4.288 0-2.368-1.646-4.288-3.676-4.288-2.03 0-3.675 1.92-3.675 4.288 0 2.369 1.645 4.288 3.675 4.288z"
                fill="#FCFCFB"
              />
              <Path
                d="M24.542 16.463c1.579 0 2.859-1.493 2.859-3.335 0-1.842-1.28-3.335-2.859-3.335s-2.859 1.493-2.859 3.335c0 1.842 1.28 3.335 2.86 3.335z"
                fill="#45CD81"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.899 11.911c-.11.036-.228.055-.35.055-.66 0-1.196-.56-1.196-1.25 0-.092.01-.182.027-.268a2.34 2.34 0 00-.824-.15c-1.468 0-2.658 1.369-2.658 3.057s1.19 3.056 2.658 3.056 2.658-1.368 2.658-3.056c0-.522-.114-1.014-.315-1.444z"
                fill="#1C1040"
              />
              <Path
                d="M12.29 16.804c-2.03 0-3.675-1.92-3.675-4.288 0-2.369 1.646-4.288 3.676-4.288 2.03 0 3.675 1.92 3.675 4.288 0 2.368-1.646 4.288-3.675 4.288z"
                fill="#FCFCFB"
              />
              <Path
                d="M12.29 16.804c-1.578 0-2.858-1.493-2.858-3.335 0-1.842 1.28-3.335 2.859-3.335 1.578 0 2.858 1.493 2.858 3.335 0 1.842-1.28 3.335-2.858 3.335z"
                fill="#45CD81"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.934 12.252c.11.035.228.054.35.054.66 0 1.196-.56 1.196-1.25 0-.092-.01-.18-.028-.267.26-.097.537-.15.825-.15 1.468 0 2.658 1.369 2.658 3.057s-1.19 3.056-2.658 3.056-2.658-1.368-2.658-3.056c0-.522.114-1.014.315-1.444z"
                fill="#1C1040"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.96 6.9s.509-1.26 1.766-1.501c1.352-.259 2.364.922 2.364.922s-.268-2.195-2.236-1.955C9.789 4.618 9.949 6.937 9.96 6.9zM28.23 6.9s-.508-1.26-1.766-1.5c-1.352-.26-2.363.922-2.363.922s.268-2.196 2.236-1.955c2.065.252 1.904 2.57 1.894 2.533z"
                fill="#2B203F"
              />
            </G>
          </G>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.677 21.412c-.25.533.154 1.14 1.413 1.185 1.064.038 1.695-.377 1.72-1.126.015-.428-3.07-.192-3.133-.059z"
            fill="#45CD81"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_348_1195">
            <Path
              fill="#fff"
              transform="translate(.833 .629)"
              d="M0 0H35V32.7419H0z"
            />
          </ClipPath>
        </Defs>
      </Svg>
    )
  }