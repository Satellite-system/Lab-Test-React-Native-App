import React, { useState, useEffect } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ThreeDotsSVG from "../component/svgs/ThreeDots";
import CartTestCard from "../component/CartTestCard";
import { useSelector, useDispatch } from "react-redux";
import CalendarComponent from "../component/svgs/CalendarComponent";
import Checkbox from "expo-checkbox";
import { removeAll } from "../features/testsSlice";

export default function CartScreen({ navigation }) {
  const orderList = useSelector((state) => state.test.list);
  const StateObj = useSelector((state) => state.test);
  const [isChecked, setChecked] = useState(false);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch()

  console.log(">>> ", orderList);
  console.log("State  >>> ", StateObj);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          // onPress={() => navigation.navigate("Cart", { name: "Jane" })}
        >
          <ThreeDotsSVG />
        </View>
      ),
    });
  }, [navigation]);

  // Formate Date
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Ensure leading zero for day and month if needed
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;

    return formattedDay + "/" + formattedMonth + "/" + year;
  }

  useEffect(() => {
    var sumTotalPrice = 0;
    var sumPrice = 0;

    for (let index = 0; index < orderList.length; index++) {
      const element = orderList[index]; // parseInt(string, radix)
      const totalPrice1 = parseInt(element.price, 10);
      const price1 = parseInt(element.finalPrice, 10);

      sumTotalPrice = totalPrice1 + sumTotalPrice;
      sumPrice = sumPrice + price1;

      console.log(
        "|",
        index,
        "| ",
        totalPrice1,
        " = ",
        sumTotalPrice,
        " ; ",
        price1,
        "=> ",
        sumPrice
      );
    }
    setTotalPrice(sumTotalPrice);
    setPrice(sumPrice);
  }, [orderList, navigation]);

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
        <Text style={style.TitleStyle}>Order review</Text>

        <View
          style={{
            flex: 1,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#f0eded",
            marginTop: 15,
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
              fontWeight: 700,
            }}
          >
            Pathology tests
          </Text>
          <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
            {orderList.map((res, index) => (
              <CartTestCard
                finalPrice={res.finalPrice}
                price={res.price}
                title={res.title}
                key={index + res.title}
              />
            ))}
          </View>
        </View>
        {/* Callendar View */}
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#f0eded",
            marginTop: 15,
            display: "flex",
            flexDirection: "row",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <CalendarComponent />
          <Pressable
            onPress={() => {
              navigation.navigate("Callendar");
            }}
            style={{
              flex: 1,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: "#f0eded",
              marginLeft: 10,
              paddingLeft: 10,
              paddingVertical: 5,
              marginRight: 10,
            }}
          >
            {StateObj.time === "" ? (
              <Text style={{ color: "#667085" }}>Select date</Text>
            ) : (
              <Text style={{ color: "#10217D", fontWeight: 500 }}>
                {formatDate(StateObj.date)}
                {"  "}({StateObj.time})
              </Text>
            )}
          </Pressable>
        </View>
        {/* Amount Container */}
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#f0eded",
            marginTop: 15,
            paddingHorizontal: 25,
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#475569", fontWeight: 400, fontSize: 13 }}>
              M.R.P Total
            </Text>
            <Text style={{ color: "#475569", fontWeight: 400, fontSize: 13 }}>
              {totalPrice}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ color: "#475569", fontWeight: 400, fontSize: 13 }}>
              Discount
            </Text>
            <Text style={{ color: "#475569", fontWeight: 400, fontSize: 13 }}>
              {totalPrice - price}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={style.secondaryHeading}>Amount to be paid</Text>
            <Text style={style.secondaryHeading}>₹ {price}/-</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              width: "70%",
            }}
          >
            <Text style={{ color: "#0F172A", fontSize: 14, fontWeight: 400 }}>
              Total savings{" "}
            </Text>
            <Text style={style.secondaryHeading}>₹ {totalPrice - price}/-</Text>
          </View>
        </View>
        {/* Check Box Container */}
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#f0eded",
            marginTop: 15,
            paddingHorizontal: 25,
            paddingVertical: 20,
            display: "flex",
            flexDirection: "row",
            marginBottom: 10,
            gap: 5,
          }}
        >
          <Checkbox
            style={{ borderRadius: 50 }}
            value={isChecked}
            onValueChange={setChecked}
            color="#10217D"
          />
          <View style={{}}>
            <Text style={{ fontWeight: 600, fontSize: 15 }}>Hard copy of reports</Text>
            <Text style={{fontWeight: 400}}>
              Reports will be delivered within 3-4 working days. Hard copy
              charges are non-refundable once the reports have been dispatched.
              ₹150 per person
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            backgroundColor: StateObj.time === "" ? "#B0B0B0" : "#10217D",
            paddingVertical: 18,
            marginBottom: 20,
            borderRadius: 10,
            marginTop: 10,
          }}
          disabled={StateObj.time === ""}
          onPress={() => {
            console.log("Scheduledd!!");
            dispatch(removeAll());
            navigation.replace("SuccessScr", {
              date: StateObj.date,
              time: StateObj.time,
            });
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: 1.5,
            }}
          >
            Schedule
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  TitleStyle: { color: "#10217D", fontWeight: "500", fontSize: 25 },
  secondaryHeading: {
    color: "#10217D",
    fontSize: 18,
    fontWeight: "700",
  },
});
