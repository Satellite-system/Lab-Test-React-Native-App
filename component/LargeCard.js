import { Pressable, Text, View } from "react-native";
import MedicineSVG from "./svgs/Medicine";
import TickShieldComponent from "./svgs/TickShieldComponent";

export default function LargeCard({}) {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#f0eded",
        padding: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ backgroundColor: "#EBF3FE", borderRadius: 50, padding: 15 }}
        >
          <MedicineSVG />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#16C2D5",
            height: 20,
            alignItems: "center",
            paddingHorizontal: 5,
            borderRadius: 5,
            gap: 5,
          }}
        >
          <TickShieldComponent />
          <Text style={{ color: "#ffffff" }}>Safe</Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 500,
          marginTop: 15,
          marginBottom: 5,
        }}
      >
        Full Body checkup
      </Text>
      <Text style={{ color: "#6C87AE", fontWeight: 400 }}>
        Includes 92 tests
      </Text>
      <Text style={{ color: "#6C87AE", fontWeight: 400 }}>
        {"\u2022"} Blood Glucose Fasting
      </Text>
      <Text style={{ color: "#6C87AE", fontWeight: 400 }}>
        {"\u2022"} Liver Function Test
      </Text>
      <Text
        style={{
          color: "#6C87AE",
          fontWeight: 400,
          textDecorationLine: "underline",
        }}
      >
        View more
      </Text>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
      >
        <Text style={{ color: "#1BA9B5", fontSize: 20, fontWeight: 700 }}>
          ₹ 2000/-
        </Text>
        <Pressable
          style={{
            marginTop: 5,
            borderColor: "#10217D",
            borderWidth: 1,
            alignItems: "center",
            paddingVertical: 8,
            borderRadius: 5,
            marginBottom: 8,
            paddingHorizontal: 10
          }}
        >
          <Text style={{ fontSize: 14, color: "#10217D", fontWeight: 700 }}>
            Add to cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
