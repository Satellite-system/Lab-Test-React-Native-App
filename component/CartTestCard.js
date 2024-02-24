import { Pressable, StyleSheet, Text, View } from "react-native";
import DeleteComponent from "./svgs/DeleteComponent";
import UploadSVG from "./svgs/Upload";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/testsSlice";

export default function CartTestCard({ finalPrice, price, title }) {
  const dispatch = useDispatch();

  const removeFxn = () => {
    dispatch(removeItem({ title }));
  };

  return (
    <View style={style.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#0F172A", fontWeight: 600, fontSize: 18 }}>
          {title}
        </Text>
        <View style={{}}>
          <Text style={{ fontWeight: 700, color: "#1BA9B5", fontSize: 18 }}>
            ₹ {finalPrice}/-
          </Text>
          <Text
            style={{
              textAlign: "right",
              fontSize: 13,
              color: "#5B5B5B",
              textDecorationLine: "line-through",
            }}
          >
            {price}
          </Text>
        </View>
      </View>
      <Pressable
        style={[style.borderBox, { width: 105, marginTop: 5 }]}
        onPress={() => removeFxn()}
      >
        <DeleteComponent />
        <Text style={{ fontSize: 16, marginStart: 5 }}>Remove</Text>
      </Pressable>
      <Pressable style={[style.borderBox, { width: 255, marginTop: 10 }]}>
        <UploadSVG />
        <Text style={{ fontSize: 16, marginStart: 5 }}>
          Upload prescription (optional)
        </Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  borderBox: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#10217D",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    paddingVertical: 5,
    alignItems: "center",
  },
});
