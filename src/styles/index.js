import { StyleSheet } from "react-native";

const header = StyleSheet.create({
  background: {
    width: "100%",
    height: 80,
    backgroundColor: "#34495E",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#ECF0F1",
    fontSize: 22,
  },

  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

const styles = StyleSheet.create({
  image: {
    width: 199,
    height: 148,
  },
  background: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  mainText: {
    color: "#34495E",
    fontSize: 50,
  },
  backgroundButton: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 40,
  },
  imageIcon: {
    width: 30,
    height: 30,
  },
  btnStyle: {
    backgroundColor: "#34495E",
    width: 60,
    height: 45,
    padding: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnImage: {
    width: 25,
    height: 25,
  },
  btnImage2: {
    width: 15,
    height: 15,
  },
  registroContent: {
    backgroundColor: "#DDE1EC",
    width: "100%",
    height: "auto",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  registroTitle: {
    color: "#34495E",
    fontSize: 22,
    marginBottom: 20,
  },
  registroText: {
    color: "#34495E",
    fontSize: 18,
  },
});

export { header, styles };
