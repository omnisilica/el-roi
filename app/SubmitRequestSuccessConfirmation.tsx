import AntDesign from "@expo/vector-icons/AntDesign";
import { Checkbox } from "expo-checkbox";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

function SubmitRequestSuccessConfirmation() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View className="h-screen flex justify-center">
      <View className="bg-commonWhite w-3/4 m-auto rounded-xl">
        <AntDesign
          name="checkcircle"
          size={60}
          color="green"
          className="m-auto mt-3"
        />
        <Text className="my-3 mx-9">
          We received your request. We&lsquo;ll notify you through this app when
          we&lsquo;ve reviewed and approved your request, or we&lsquo;ll send
          you an email to follow up.
        </Text>
        <View className="flex-row items-center">
          <Checkbox
            className="self-start mt-1 ml-9"
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text className="mx-1 mr-24">
            Check the box bto the left of this text before leaving this page if
            you want us to send you an email confirmation also?
          </Text>
        </View>
        <Link href="./Dashboard" asChild>
          <Pressable className="bg-[rgba(0,128,0,1)] h-14 w-3/6 mt-6 mb-3 m-auto items-center justify-center rounded-md">
            <Text className="text-base text-commonWhite">
              Back to Dashboard
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

export default SubmitRequestSuccessConfirmation;
