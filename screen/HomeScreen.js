import * as React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Cart from "../component/svgs/Cart";
import NextArrow from "../component/svgs/NextArrow";
import TestCard from "../component/TestCard";
import LargeCard from "../component/LargeCard";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function HomeScreen({ navigation }) {
  const orderList = useSelector((state) => state.test.list);
  const dispatch = useDispatch();
  console.log("Result >> ", orderList);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Cart")}
        >
          {orderList.length > 0 && (
            <Text
              style={{
                backgroundColor: "#1BA9B5",
                borderRadius: 100,
                padding: 2,
                paddingHorizontal: 8,
              }}
            >
              {orderList.length}
            </Text>
          )}
          <Cart />
        </Pressable>
      ),
    });
  }, [navigation, orderList]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 5,
      }}
    >
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={style.TitleStyle}>Popular lab tests</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text
              style={{
                color: "#10217D",
                fontSize: 14,
                textDecorationLine: "underline",
                fontWeight: 500,
              }}
            >
              View more
            </Text>
            <NextArrow />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            gap: 15,
            flexDirection: "row",
            marginVertical: 5,
            paddingHorizontal: 10,
            marginTop: 15,
          }}
        >
          <TestCard
            title="Thyroid Profile"
            testNum="3"
            finalPrice="1000"
            price="1400"
          />
          <TestCard
            title="Iron Study Test"
            testNum="4"
            finalPrice="600"
            price="1000"
          />
        </View>
        <View
          style={{
            display: "flex",
            gap: 15,
            flexDirection: "row",
            marginVertical: 5,
            paddingHorizontal: 10,
            marginBottom: 10,
          }}
        >
          <TestCard
            title="Iron Study Test"
            testNum="4"
            finalPrice="600"
            price="1000"
          />
          <TestCard
            title="Thyroid Profile"
            testNum="3"
            finalPrice="1000"
            price="1400"
          />
        </View>
        <Text style={style.TitleStyle}>Popular Packages</Text>
        <View
          style={{
            flex: 1,
            marginTop: 15,
            paddingHorizontal: 25,
            marginBottom: 20,
          }}
        >
          <LargeCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  TitleStyle: { color: "#10217D", fontWeight: "500", fontSize: 25 },
});
