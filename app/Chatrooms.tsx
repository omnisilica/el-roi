import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

function chatrooms() {
  function handleClickChatroom() {
    router.navigate("/chat");
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
              <Text className={"text-xl font-bold self-start"}>Jon</Text>
              <View className={"flex-1 items-end"}>
                <Text className={"text-lg"}>8:42 AM</Text>
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

export default chatrooms;
