import { StyleSheet } from "react-native";

// Define a centralized styles object
const styles = (isDarkMode) => {
  const textColor = isDarkMode ? "#fff" : "#000";
  const borderColor = isDarkMode ? "#fff" : "#000";

  return StyleSheet.create({
    container: {
      marginBottom: 15,
    },
    menuTitle: {
      fontSize: 18,
      color: "#fff",
      zIndex: 1,
      top: 60,
      textAlign: "center",
      fontWeight: "bold",
    },
    backgroundRec: {
      width: "100%",
      height: 70,
      top: -15,
      justifyContent: "center",
      zIndex: -1,
    },
    avatarContainer: {
      position: "absolute",
      bottom: -80,
      alignSelf: "center",
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 60,
      borderWidth: 1,
      borderColor: "#8c52ff",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      overflow: "hidden",
      top: 30,
    },

    textContainer: {
      position: "absolute",
      bottom: -60,
    },
    nameContainer: {
      bottom: 50, // Adjust this value to position it above the avatar
      alignItems: "center",
      justifyContent: "center", // Center the content horizontally
      top: 45,
      left: -5,
    },
    name: {
      fontSize: 18,
      fontWeight: "bold",
      color: textColor,
      textAlign: "center",
      zIndex: 1,
      top: 160,
    },
    username: {
      fontSize: 14,
      color: textColor,
      textAlign: "center",
      zIndex: 1,
      top: 160,
    },

    joined: {
      fontSize: 14,
      color: "#888888",
      top: 165,
    },

    fcontainer: {
      top: 170,
      padding: 10,
      borderRadius: 90,
      backgroundColor: "#8c52ff",
    },
    followers: {
      color: "#fff",
    },
    statsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 70,
      paddingHorizontal: 10,
      marginLeft: 120,
    },
    statsText: {
      fontSize: 12,
      color: textColor, // Use dynamic text color
    },

    Pcontainer: {
      flex: 1,
    },

    sectionTitle: {
      marginLeft: 25,
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 2,
      top: 240,
      alignSelf: "left",
    },

    iconRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingHorizontal: 0,
      top: 10,
    },
    titleRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 10,
      marginLeft: 1,
      paddingHorizontal: 0,
    },
    iconRowContainer: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      width: 35,
      height: 35,
      marginTop: 50,
      marginHorizontal: 10,
    },
    iconWrapper: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      width: 35,
      height: 35,
    },
    rowIcon: {
      width: 30,
      height: 30,
    },
    iconTitle: {
      fontSize: 12,
      textAlign: "center",
      top: 10,
    },
    optionContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
      top: 200,
      padding: 5,
    },
    iconContainer: {
      width: 30,
      height: 30,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 40,
      backgroundColor: "#fff",
    },
    icon: {
      width: 24,
      height: 24,
    },
    textContainer: {
      flex: 1,
      marginLeft: 10,
    },
    title: {
      fontSize: 15,
    },
    subtitle: {
      fontSize: 14,
      marginTop: 2,
    },
    navContainer: {
      width: 24,
      height: 24,
      borderRadius: 18,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: 40,
      backgroundColor: "#fff",
    },
    navIcon: {
      width: 20,
      height: 20,
    },
  });
};

export default styles;
