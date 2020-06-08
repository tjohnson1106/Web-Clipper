import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ContainerView from "./src/ContainerView";

export default function App() {
  return (
    <View>
      <ContainerView />
    </View>

    // Test //

    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "dodgerblue"
    //   }}
    // >
    //   <Text> ContainerView -> App </Text>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
