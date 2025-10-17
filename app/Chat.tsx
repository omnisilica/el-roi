import Ionicons from "@expo/vector-icons/Ionicons";
import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Chat() {
  const textInputRef = React.useRef<TextInput>(null);
  const [messageContent, setMessageContent] = React.useState("");
  const [dataUserId, setDataUserId] = React.useState(8);
  const height = useHeaderHeight();
  const messages = [
    {
      userId: "user1",
      content:
        "Lorem Ipsum is mot simply dummy text of the printing and typesetting industry.",
    },
    {
      userId: "user2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  type messageItem = { content: string };

  async function handleSendMessage() {
    console.log("Message sent");
    console.log(messageContent);

    const newDataUserId = setDataUserId(1 + dataUserId);

    messages.push({
      userId: "user" + newDataUserId,
      content: messageContent,
    });
  }

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        className="w-[100%] flex-1 absolute bottom-0 border-2 border-black rounded-md"
        behavior="position"
        keyboardVerticalOffset={height - 60}
      >
        <FlatList
          data={messages}
          renderItem={({ item }) => {
            const isCurrentUser = item.userId === "user1";
            return (
              <View
                className={
                  "max-w-[80%] " +
                  (isCurrentUser ? "mr-1 self-end" : "ml-1 self-start")
                }
              >
                <Text
                  className={
                    "p-2 mb-3 rounded-xl " +
                    (isCurrentUser
                      ? "bg-[rgba(0,122,255,1)]"
                      : "bg-[rgba(230,230,230,1)]")
                  }
                >
                  {item.content}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.userId}
        />
        <View className="w-[97%] self-center flex-row bg-commonWhite mb-5 rounded-xl border-[1px] border-black">
          <TextInput
            ref={textInputRef}
            placeholder="Type a message"
            className="flex-shrink flex-grow p-[10]"
            placeholderTextColor={"gray"}
            multiline
            value={messageContent}
            onChangeText={setMessageContent}
          />
          <Pressable onPress={handleSendMessage} className={"self-center"}>
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color={messageContent ? "bg-[rgba(0,122,255,1)]" : "bg-gray-600"}
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Chat;
