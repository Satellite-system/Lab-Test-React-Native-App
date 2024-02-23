import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import TickShieldComponent from "./svgs/TickShieldComponent";

export default function TestCard({
  title,
  testNum,
  finalPrice,
  price,
  setOrderList,
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#f0eded",
      }}
    >
      <Text
        style={{
          backgroundColor: "#10217D",
          color: "#ffffff",
          fontSize: 15,
          textAlign: "center",
          paddingVertical: 8,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        {title}
      </Text>

      <View style={{ paddingHorizontal: 8, marginTop: 5 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <Text style={{ fontSize: 14, color: "#10217D" }}>
            Includes {testNum} tests
          </Text>
          <View
            style={{ backgroundColor: "#16C2D5", padding: 5, borderRadius: 5 }}
          >
            <TickShieldComponent />
          </View>
        </View>
        <Text style={{ fontSize: 12, color: "#10217D" }}>
          Get reports in 24 hours
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 14, color: "#10217D", fontWeight: 700 }}>
            ₹ {finalPrice}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: "#10217D",
              fontWeight: 400,
              textDecorationLine: "line-through",
            }}
          >
            {price}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            setClicked(true);
            setOrderList((res) => [
              ...res,
              {
                title: title,
                testNum: testNum,
                finalPrice: finalPrice,
                price: price,
              },
            ]);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: clicked
                ? "#16C2D5"
                : pressed
                ? "#b0b0b0"
                : "#10217D",
            },
            {
              marginTop: 5,
              alignItems: "center",
              paddingVertical: 8,
              borderRadius: 5,
            },
          ]}
        >
          <Text style={{ fontSize: 12, color: "#ffffff", fontWeight: 700 }}>
            {clicked ? "Added" : "Add"} to cart
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginTop: 5,
            borderColor: "#10217D",
            borderWidth: 1,
            alignItems: "center",
            paddingVertical: 8,
            borderRadius: 5,
            marginBottom: 8,
          }}
        >
          <Text style={{ fontSize: 12, color: "#10217D", fontWeight: 700 }}>
            View Details
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
