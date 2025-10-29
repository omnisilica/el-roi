import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function Dashboard() {
  return (
    <View>
      <Text>Dashboard Under Construction</Text>
      <Link href={"./chatrooms.tsx"}>My Messages</Link>
      <Link href={"/submitRequest"}></Link>
    </View>
  );
}

export default Dashboard;
