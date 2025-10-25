import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

function Requests() {
  function handleClickChatroom() {
    router.navigate("/request");
  }

  return (
    <ScrollView>
      <View className={"bg-commonWhite"}>
        <Pressable
          className={"flex-row p-4 border-b-[1px] border-black"}
          onPress={handleClickChatroom}
        >
          <View className={"w-1/12"}>
            <FontAwesome name="dot-circle-o" size={20} color="red" />
          </View>
          <View className={"w-11/12"}>
            <View className={"flex-row"}>
              <Text className={"text-xl font-bold self-start"}>Judy Joe</Text>
              <View className={"flex-1 items-end"}>
                <Text className={"text-lg"}>3:27 PM</Text>
              </View>
            </View>
            <Text className={"text-xl"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Requests;
