import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: { width: "100%", aspectRatio: 16 / 9, resizeMode: "cover" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  match: {
    color: "#59d467",
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  year: {
    color: "#757575",
  },
  age: {},
  ageContainer: {
    backgroundColor: "#e6e229",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingHorizontal: 3,
    marginHorizontal: 5,
  },
  playButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButton: {
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  playButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;
