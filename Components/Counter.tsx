import { Pressable, StyleSheet, Text, View } from "react-native";
import SmokeIcon from "../assets/SVGIcons/smoking-svgrepo-com";

type Props = {
  count: number;
  handleChange: (number: number) => void;
  smokeIconStyle: object;
};

const Counter = ({ count, handleChange, smokeIconStyle }: Props) => {
  return (
    <View>
      <View>
        <Text>Today's Count</Text>
      </View>
      <View style={styles.countBtnGrid}>
        <View>
          <Pressable onPress={() => handleChange(count - 1)}>
            <Text style={{ fontSize: 40 }}>-</Text>
          </Pressable>
        </View>
        <View>
          <Text style={smokeIconStyle}>{count}</Text>
        </View>
        <View>
          <Pressable onPress={() => handleChange(count + 1)}>
            <Text style={{ fontSize: 40 }}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  countText: {
    fontSize: 128,
    fontWeight: 800,
  },

  countBtnGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default Counter;
