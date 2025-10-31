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
              <Text className={"text-xl"}>Judy Joe</Text>
              <View className={"flex-1 text-lg items-end"}>
                <Text className={""}>3 days ago</Text>
              </View>
            </View>
            <Text className={"text-xl font-bold my-1"}>
              It&apos;s better to live alone in the desert than with a
              quarrelsome, complaining wife
            </Text>
            <Text className={"text-lg"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Text>
          </View>
        </Pressable>
      </View>
      <View className={"bg-commonWhite"}>
        <Pressable
          className={"flex-row p-4 border-b-[1px] border-black"}
          onPress={handleClickChatroom}
        >
          <View className={"w-1/12"}></View>
          <View className={"w-11/12"}>
            <View className={"flex-row"}>
              <Text className={"text-xl"}>Clem Clementon</Text>
              <View className={"flex-1 text-lg items-end"}>
                <Text className={""}>6 days ago</Text>
              </View>
            </View>
            <Text className={"text-xl font-bold my-1"}>
              It&apos;s better to live alone in the desert than with a
              quarrelsome, complaining wife
            </Text>
            <Text className={"text-lg"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Text>
          </View>
        </Pressable>
      </View>
      <View className={"bg-commonWhite"}>
        <Pressable
          className={"flex-row p-4 border-b-[1px] border-black"}
          onPress={handleClickChatroom}
        >
          <View className={"w-1/12"}></View>
          <View className={"w-11/12"}>
            <View className={"flex-row"}>
              <Text className={"text-xl"}>Jonah Fischer</Text>
              <View className={"flex-1 text-lg items-end"}>
                <Text className={""}>18 days ago</Text>
              </View>
            </View>
            <Text className={"text-xl font-bold my-1"}>
              It&apos;s better to live alone in the desert than with a
              quarrelsome, complaining wife
            </Text>
            <Text className={"text-lg"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Text>
          </View>
        </Pressable>
      </View>
      <View className={"bg-commonWhite"}>
        <Pressable
          className={"flex-row p-4 border-b-[1px] border-black"}
          onPress={handleClickChatroom}
        >
          <View className={"w-1/12"}></View>
          <View className={"w-11/12"}>
            <View className={"flex-row"}>
              <Text className={"text-xl"}>Jonah Fischer</Text>
              <View className={"flex-1 text-lg items-end"}>
                <Text className={""}>19 days ago</Text>
              </View>
            </View>
            <Text className={"text-xl font-bold my-1"}>
              It&apos;s better to live alone in the desert than with a
              quarrelsome, complaining wife
            </Text>
            <Text className={"text-lg"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Text>
          </View>
        </Pressable>
      </View>
      <View className={"bg-commonWhite"}>
        <Pressable
          className={"flex-row p-4 border-b-[1px] border-black"}
          onPress={handleClickChatroom}
        >
          <View className={"w-1/12"}></View>
          <View className={"w-11/12"}>
            <View className={"flex-row"}>
              <Text className={"text-xl"}>Jonah Fischer</Text>
              <View className={"flex-1 text-lg items-end"}>
                <Text className={""}>19 days ago</Text>
              </View>
            </View>
            <Text className={"text-xl font-bold my-1"}>
              It&apos;s better to live alone in the desert than with a
              quarrelsome, complaining wife
            </Text>
            <Text className={"text-lg"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Text>
          </View>
        </Pressable>
      </View>
      <View className={"bg-commonWhite"}>
        <Pressable
          className={"flex-row p-4 border-b-[1px] border-black"}
          onPress={handleClickChatroom}
        >
          <View className={"w-1/12"}></View>
          <View className={"w-11/12"}>
            <View className={"flex-row"}>
              <Text className={"text-xl"}>Jonah Fischer</Text>
              <View className={"flex-1 text-lg items-end"}>
                <Text className={""}>21 days ago</Text>
              </View>
            </View>
            <Text className={"text-xl font-bold my-1"}>
              It&apos;s better to live alone in the desert than with a
              quarrelsome, complaining wife
            </Text>
            <Text className={"text-lg"}>
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
