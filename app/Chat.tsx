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

function Chat() {
  const textInputRef = React.useRef<TextInput>(null);
  const [messageContent, setMessageContent] = React.useState("");
  const [messages, setMessages] = React.useState([
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
  ]);
  const [dataUserId, setDataUserId] = React.useState(8);
  const height = useHeaderHeight();
  /*const messages = [
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
  ];*/

  type messageItem = { content: string };

  async function handleSendMessage() {
    console.log("Message sent");
    console.log(messageContent);

    setDataUserId(1 + dataUserId);

    /*messages.push({
      userId: "user" + dataUserId,
      content: messageContent,
    });*/

    messages.push({
      userId: "user1",
      content: messageContent,
    });

    console.log(messages);

    setMessages(messages);

    setTimeout(() => {
      simulateMessageResponse();
    }, 100);
  }

  function simulateMessageResponse() {
    messages.push({
      userId: "user2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    });

    setMessages(messages);
  }

  return (
    <View className={"bg-commongWhite h-screen justify-end"}>
      <KeyboardAvoidingView
        className="border-2 border-black rounded-md"
        behavior="padding"
        keyboardVerticalOffset={100}
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
                <View
                  className={
                    "p-3 mb-3 rounded-xl " +
                    (isCurrentUser
                      ? "bg-[rgba(0,79,189,1)]"
                      : "bg-[rgba(82,82,86,1)]")
                  }
                >
                  <Text className={"text-commonWhite"}>{item.content}</Text>
                </View>
              </View>
            );
          }}
        />
        <View
          className={
            "w-[97%] mb-14 self-center flex-row bg-commonWhite mb-5 rounded-xl border-[1px] border-black"
          }
        >
          <TextInput
            ref={textInputRef}
            placeholder="Type a message"
            className="flex-shrink flex-grow p-[10]"
            placeholderTextColor={"gray"}
            multiline
            value={messageContent}
            onChangeText={setMessageContent}
          />
          <Pressable
            onPress={handleSendMessage}
            className={"self-center p-1 mr-3"}
          >
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color={messageContent ? "bg-[rgba(0,122,255,1)]" : "bg-gray-600"}
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Chat;
