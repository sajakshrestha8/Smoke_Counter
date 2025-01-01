import { DrawerLayoutAndroid, StyleSheet, Text, View } from "react-native";
import Button from "./Components/Buttons";
import Svg from "react-native-svg";
import IconComponent from "./assets/SVGIcons/hamburger-menu-svgrepo-com";
import BellIcon from "./assets/SVGIcons/bell-icon-silhouette-svgrepo-com";
import { useRef, useState } from "react";
import HouseIcon from "./assets/SVGIcons/home-icon-silhouette-svgrepo-com";
import AboutApp from "./assets/SVGIcons/information-circle-svgrepo-com";
import AboutUs from "./assets/SVGIcons/about-us-svgrepo-com";
import Setting from "./assets/SVGIcons/settings-svgrepo-com";
import Close from "./assets/SVGIcons/close-ellipse-svgrepo-com";
import Counter from "./Components/Counter";
import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);
  const [count, setCount] = useState<number>(0);
  const drawer = useRef<DrawerLayoutAndroid>(null);

  let warning = count >= 6;

  let danger = count >= 10;

  function handleMenuDrawer() {
    if (drawer.current) {
      drawer.current.openDrawer();
    }
  }

  function handelDarkAndLightMode() {
    setIsDarkMode(!isDarkMode);
  }

  const navigationView = (
    <View
      style={[
        styles.drawerContainer,
        isDarkMode && { backgroundColor: "#212121" },
      ]}
    >
      <Close
        onPress={() => {
          if (drawer.current) {
            drawer.current.closeDrawer();
          }
        }}
        fill={isDarkMode ? "white" : ""}
      />
      <View style={styles.drawerTextContainer}>
        <HouseIcon fill={isDarkMode ? "white" : ""} />
        <Text style={(styles.drawerText, isDarkMode && styles.darkdrawerText)}>
          Home
        </Text>
      </View>
      <View style={styles.drawerTextContainer}>
        <AboutApp fill={isDarkMode ? "white" : "#7e7e7e"} />
        <Text style={(styles.drawerText, isDarkMode && styles.darkdrawerText)}>
          About App
        </Text>
      </View>
      <View style={styles.drawerTextContainer}>
        <AboutUs fill={isDarkMode ? "white" : ""} />
        <Text style={(styles.drawerText, isDarkMode && styles.darkdrawerText)}>
          About Us
        </Text>
      </View>
      <View style={styles.drawerTextContainer}>
        <Setting fill={isDarkMode ? "white" : ""} />
        <Text style={(styles.drawerText, isDarkMode && styles.darkdrawerText)}>
          Settings
        </Text>
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={200}
      drawerPosition="left"
      renderNavigationView={() => navigationView}
    >
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <View
          style={[
            styles.contentContainer,
            isDarkMode && styles.darkcontentContainer,
          ]}
        >
          <View style={styles.hamburger}>
            <IconComponent
              color={isDarkMode ? "white" : ""}
              handleMenuDrawer={handleMenuDrawer}
            />
          </View>

          <View style={styles.headingText}>
            <Text
              style={[
                {
                  fontSize: 16,
                  fontWeight: 700,
                },
                isDarkMode && { color: "white" },
              ]}
            >
              Smoke Counter
            </Text>
          </View>
          <View style={styles.bellIcon}>
            <BellIcon color={isDarkMode ? "white" : ""} />
          </View>
          <View>
            <Button title="Mode" onPress={handelDarkAndLightMode} />
          </View>
        </View>
        <Counter
          count={count}
          handleIncrement={() => {
            setCount(count + 1);
          }}
          smokeIconStyle={{
            color: danger ? "red" : warning ? "brown" : "black",
            fontSize: 128,
            fontWeight: 800,
          }}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#212121",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  darkcontentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
  },
  hamburger: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    flex: 2,
    justifyContent: "center",
  },
  bellIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerContainer: {
    flex: 1,
    height: 200,
    padding: 20,
    gap: 10,
  },
  drawerText: {
    padding: 10,
    fontSize: 16,
    fontWeight: 600,
    color: "#7e7e7e",
  },
  darkdrawerText: {
    padding: 10,
    fontSize: 16,
    fontWeight: 600,
    color: "white",
  },
  drawerTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default App;
