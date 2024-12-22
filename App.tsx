import { StyleSheet, Text, View } from "react-native";
import Button from "./Components/Buttons";
import IconMenu from "./assets/SVGIcons/hamburgerIcon";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <IconMenu />
        <Text>Testing App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
