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

type SignUpDetails = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function SignUp() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpDetails>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signInBackgroundImage = require("./../assets/images/ccgc_sign_up_background.jpg");

  const validatePassword = (value: string) => {
    if (!/[a-z]/.test(value)) {
      return "Password must contain at least one lowercase letter.";
    } else if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter.";
    } else if (!/\d+/.test(value)) {
      return "Password must contain at least one number.";
    }
  };

  const confirmPasswordMatch = (value: string) => {
    if (value !== watch("password")) {
      return "Make sure passwords match.";
    }
  };

  const onSignUpSubmit: SubmitHandler<SignUpDetails> = (data) => {
    console.log(data);
    router.navigate("./dashboard");
  };

  // console.log(watch("firstName"));

  return (
    <View className="bg-gray-700 h-full w-full">
      <ImageBackground source={signInBackgroundImage} className="w-full h-full">
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

            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset={100}
            >
              <View className="w-11/12 m-auto">
                <Text className="text-lg text-[rgb(118,192,208,1)] mt-3.5">
                  Welcome!
                </Text>
                <Text className="text-2xl font-bold text-[rgb(118,192,208,1)]">
                  Sign up
                </Text>
                <Text className="text-xl mt-2 text-commonWhite">
                  First Name:
                </Text>
                <Controller
                  control={control}
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "Enter your first name.",
                    },
                  })}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="First name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      className="border-2 border-[rgb(118,192,208,1)]"
                    />
                  )}
                  name="firstName"
                />
                {errors.firstName && (
                  <Text
                    role="alert"
                    className="text-[rgba(236,162,162,1)] mb-2"
                  >
                    {errors.firstName.message}
                  </Text>
                )}

                <Text className="text-xl mt-2 text-commonWhite">
                  Last Name:
                </Text>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="lastName"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      className="border-2 border-[rgb(118,192,208,1)]"
                    />
                  )}
                  name="lastName"
                />

                <Text className="text-xl mt-2 text-commonWhite">Email:</Text>
                <Controller
                  control={control}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Enter your email to use for logging in.",
                    },
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message:
                        "The text you entered doesn't look like an email.",
                    },
                  })}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="email@example.com"
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
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long.",
                    },
                    validate: validatePassword,
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

                <Text className="text-xl mt-2 text-commonWhite">
                  Confirm Password:
                </Text>
                <Controller
                  control={control}
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                    validate: confirmPasswordMatch,
                  })}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Confirm Password"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      className="border-2 border-[rgb(118,192,208,1)]"
                    />
                  )}
                  name="confirmPassword"
                />
                {errors.confirmPassword && (
                  <Text className="text-[rgba(236,162,162,1)] mb-2">
                    {errors.confirmPassword.message}{" "}
                  </Text>
                )}
              </View>
              <Pressable
                onPress={handleSubmit(onSignUpSubmit)}
                className="bg-commonWhite h-14 w-[100%] mt-6 items-center justify-center rounded"
              >
                <Text className="text-[rgba(33,92,105,1)] text-lg">
                  Create Your Account
                </Text>
              </Pressable>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SignUp;
