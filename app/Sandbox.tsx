import { useHeaderHeight } from "@react-navigation/elements";
import * as React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  children: React.ReactNode;
};

const Sandbox = ({ children }: Props) => {
  const height = useHeaderHeight();
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

  return (
    <View>
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
      />

      <KeyboardAvoidingView
        keyboardVerticalOffset={height + 47}
        behavior="padding"
        style={{ flex: 1 }}
        enabled
      >
        <TextInput
          ref={textInputRef}
          placeholder="Type a message"
          className="min-h-[40] bg-commonWhite flex-shrink flex-grow p-[10] mx-10"
          placeholderTextColor={"gray"}
          multiline
          value={messageContent}
          onChangeText={setMessageContent}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Sandbox;
