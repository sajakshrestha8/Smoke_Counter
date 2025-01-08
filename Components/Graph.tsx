import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Graph = () => {
  return (
    <View>
      <LineChart
        withShadow={false}
        data={{
          labels: ["Sun", "Mon", "Tues", "Wednas", "Thurs", "Fri", "Satur"],
          datasets: [
            {
              data: [5, 6, 2, 3, 7, 8, 9, 6, 5, 2],
            },
          ],
        }}
        width={Dimensions.get("window").width}
        height={200}
        chartConfig={{
          //   backgroundColor: "#e26a00",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 2,
          color: () => `black`,
          labelColor: () => `black`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "white",
          },
        }}
      />
    </View>
  );
};

export default Graph;
