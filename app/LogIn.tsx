import { router } from "expo-router";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

type LogInDetails = {
  email: string;
  password: string;
};

function LogIn() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<LogInDetails>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInBackgroundImage = require("./../assets/images/ccgc_log_in_background.jpg");

  const onLogInSubmit: SubmitHandler<LogInDetails> = (data) => {
    console.log(data);
    if (data.email !== "user1@email.com" || data.password !== "Password0") {
      setError("root", {
        type: "server",
        message: "There was an error with your username or password",
      });
    } else {
      router.navigate("./dashboard");
    }
  };

  console.log(watch("email"));
  console.log(watch("password"));

  return (
    <View>
      <KeyboardAvoidingView
        behavior="padding"
        // keyboardVerticalOffset={50}
      >
        <ImageBackground
          source={signInBackgroundImage}
          className="bg-gray-700 w-full h-full"
        >
          <View className="w-3/4 bg-[rgba(250,250,250,0.5)] backdrop-filter backdrop-blur-md m-auto flex">
            <ImageBackground
              source={signInBackgroundImage}
              className="bg-gray-700 w-full flex m-auto overflow-hidden"
              imageStyle={{
                width: 820,
                left: -255,
              }}
              blurRadius={10}
            >
              <View className="h-12 bg-commonWhite justify-center items-center">
                <Image
                  source={require("./../assets/images/ccgc_logo.png")}
                  className="w-[110%] h-[200%] scale-[0.3]"
                />
              </View>

              <View className="w-11/12 m-auto">
                <Text className="text-2xl font-bold text-[rgb(118,192,208,1)]">
                  Welcome Back!
                </Text>
                {errors.root && (
                  <Text className="text-[rgba(236,162,162,1)] mb-2">
                    {errors.root.message}{" "}
                  </Text>
                )}

                <Text className="text-xl mt-2 text-commonWhite">Email:</Text>
                <Controller
                  control={control}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Enter your email to log in.",
                    },
                  })}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="user1@email.com"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      className="border-2 border-[rgb(118,192,208,1)]"
                    />
                  )}
                  name="email"
                />
                {errors.email && (
                  <Text className="text-[rgba(236,162,162,1)] mb-2">
                    {errors.email.message}{" "}
                  </Text>
                )}

                <Text className="text-xl mt-2 text-commonWhite">Password:</Text>
                <Controller
                  control={control}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required.",
                    },
                  })}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Password0"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      className="border-2 border-[rgb(118,192,208,1)]"
                    />
                  )}
                  name="password"
                />
                {errors.password && (
                  <Text className="text-[rgba(236,162,162,1)] mb-2">
                    {errors.password.message}{" "}
                  </Text>
                )}
              </View>
              <Pressable
                onPress={handleSubmit(onLogInSubmit)}
                className="bg-commonWhite h-14 w-[100%] mt-6 items-center justify-center rounded"
              >
                <Text className="text-[rgba(33,92,105,1)] text-lg">Log In</Text>
              </Pressable>
            </ImageBackground>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </View>
  );
}

export default LogIn;
