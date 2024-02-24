import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useDispatch } from "react-redux";
import { setDateTime } from "../features/testsSlice";

export default function CallendarScreen({ navigation }) {
  const [selected, setSelected] = useState("");
  const [time, setTime] = useState();

  const dispatch = useDispatch();
  console.log("Date >> ", selected);
  console.log("Time >> ", time);

  const confirmBtnFxn = () => {
    console.log("Confirm Btn Clicked");
    dispatch(setDateTime({ date: selected, time: time }));
    navigation.pop();
  };

  return (
    <View style={style.container}>
      <Text style={style.PrimaryTitle}>Select Date</Text>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        // theme={{ selectedDayBackgroundColor: "#00adf5" }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "#10217D",
          },
        }}
      />
      {/* Select Time Section */}
      <View style={{ marginTop: 20 }}>
        <Text style={style.PrimaryTitle}>Select Time</Text>
        {/* First Row */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "8 AM" ? "" : "8 AM"));
            }}
            backgroundColor={time === "8 AM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "8 AM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              08:00 AM
            </Text>
          </Pressable>
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "9 AM" ? "" : "9 AM"));
            }}
            backgroundColor={time === "9 AM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "9 AM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              09:00 AM
            </Text>
          </Pressable>
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "10 AM" ? "" : "10 AM"));
            }}
            backgroundColor={time === "10 AM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "10 AM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              10:00 AM
            </Text>
          </Pressable>
        </View>
        {/* Second Row */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "11 AM" ? "" : "11 AM"));
            }}
            backgroundColor={time === "11 AM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "11 AM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              11:00 AM
            </Text>
          </Pressable>
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "12 PM" ? "" : "12 PM"));
            }}
            backgroundColor={time === "12 PM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "12 PM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              12:00 PM
            </Text>
          </Pressable>
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "1 PM" ? "" : "1 PM"));
            }}
            backgroundColor={time === "1 PM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "1 PM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              01:00 PM
            </Text>
          </Pressable>
        </View>
        {/* Third Row */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "2 AM" ? "" : "2 AM"));
            }}
            backgroundColor={time === "2 AM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "2 AM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              02:00 PM
            </Text>
          </Pressable>
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "3 PM" ? "" : "3 PM"));
            }}
            backgroundColor={time === "3 PM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "3 PM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              03:00 PM
            </Text>
          </Pressable>
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "4 PM" ? "" : "4 PM"));
            }}
            backgroundColor={time === "4 PM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "4 PM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              04:00 PM
            </Text>
          </Pressable>
        </View>
        {/* Fourth Row */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "5 PM" ? "" : "5 PM"));
            }}
            backgroundColor={time === "5 PM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "5 PM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              05:00 PM
            </Text>
          </Pressable>
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "6 PM" ? "" : "6 PM"));
            }}
            backgroundColor={time === "6 PM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "6 PM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              06:00 PM
            </Text>
          </Pressable>
          <Pressable
            style={[
              style.timeBox,
              {
                borderColor: "#10217D",
                borderWidth: 1,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              setTime((res) => (res === "7 PM" ? "" : "7 PM"));
            }}
            backgroundColor={time === "7 PM" ? "#10217D" : "#ffffff"}
          >
            <Text
              style={{
                color: time === "7 PM" ? "#ffffff" : "#000000",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              07:00 PM
            </Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: time !== "" ? "#10217D" : "#B0B0B0",
          marginTop: 50,
          borderRadius: 15,
          paddingVertical: 15,
        }}
        disabled={time === ""}
        onPress={() => confirmBtnFxn()}
      >
        <Text style={{ color: "#ffffff", textAlign: "center", fontSize: 18 }}>
          Confirm
        </Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  PrimaryTitle: {
    color: "#303030",
    //  fontWeight: 700,
    fontSize: 18,
    fontWeight: "700",
  },
  timeBox: {
    borderColor: "#10217D",
    borderWidth: 2,
  },
});
