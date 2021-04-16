import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderRadius: 3,
  },
  title: {},
  duration: {
    color: "darkgrey",
    fontSize: 10,
  },
  plot: {
    color: "darkgrey",
  },
  titleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },
});

export default styles;
