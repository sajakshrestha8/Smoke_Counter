import { Image, StyleSheet, Text, View } from "react-native";
import RewardImg from "../assets/Reward_img.png";

const Reward = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.priceMoney_Wrapper}>
        <View
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <View>
            <Text style={styles.heading}>Reward Point</Text>
          </View>
          <View>
            <Text style={styles.subHeading}>Current Money</Text>
            <Text style={styles.moneyCount}>Rs. 3000</Text>
            <Text style={styles.eval}>1 cigraette = Rs. 20</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              padding: 5,
              backgroundColor: "#e5e5e5",
              borderRadius: 8,
            }}
          >
            Equvalent Prize
          </Text>
          <Image
            source={RewardImg}
            style={{
              height: 50,
              width: 50,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Reward;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 200,
    backgroundColor: "#344CB7",
    borderRadius: 8,
    gap: 10,
    padding: 10,
  },

  heading: {
    fontSize: 18,
    fontWeight: 600,
    color: "white",
  },

  subHeading: {
    fontSize: 16,
    color: "gold",
  },

  moneyCount: {
    fontSize: 36,
    fontWeight: 800,
    color: "gold",
  },

  priceMoney_Wrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 40,
  },

  eval: {
    color: "gold",
  },
});
