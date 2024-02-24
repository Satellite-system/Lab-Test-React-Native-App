import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import BubbleComponent from "../component/svgs/BubbleComponent";
import ThreeDotsSVG from "../component/svgs/ThreeDots";

export default function SuccessScreeen({ navigation, route }) {
   const {date, time} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ThreeDotsSVG />
        </View>
      ),
    });
  }, [navigation]);

  console.log("Sucess Screen >> ", route.params);

  return (
    <View style={style.container}>
      <View
        style={{
          alignItems: "center",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#f0eded",
          marginTop: 15,
          paddingVertical: 50,
          width: "85%",
          paddingHorizontal: 45,
        }}
      >
        <BubbleComponent />
        <Text
          style={{
            color: "#0F172A",
            fontWeight: 400,
            fontSize: 19,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Lab tests have been scheduled successfully, You will receive a mail of
          the same.{" "}
        </Text>
        <Text
          style={{
            color: "#667085",
            fontWeight: 400,
            fontSize: 18,
            marginTop: 10,
          }}
        >
          {date} | {time}
        </Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "#10217D",
          width: "85%",
          paddingVertical: 15,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Back to home</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
});
