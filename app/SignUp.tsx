import { router } from "expo-router";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

{
  /*
  > First name:
   - required
  > Last name:
  > Email:
   - required
   - has to be an email
   - confirm password doesn't exist before form submission
  > Address:
  > Password:
   - required
   - at least 8 chars
   - at least 1 letter
   - at least 1 number
   - at least 1 captial letter
   - at least 1 lower case
  > Confrim Password:
   - required
   - should match password
  */
}
type SignUpDetails = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
  },
  box: {
    width: "25%",
    height: "20%",
  },
  boxEven: {
    backgroundColor: "orangered",
  },
  boxOdd: {
    backgroundColor: "gold",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },
});

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
    /*
  > Password:
   - required
   - at least 8 chars [check]
   - at least 1 letter [check]
   - at least 1 number [check]
   - at least 1 captial letter [check]
   - at least 1 lower case [check]
  */
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

  const onSubmit: SubmitHandler<SignUpDetails> = (data) => {
    console.log(data);
    router.navigate("./Dashboard");
  };

  console.log(watch("firstName"));
  console.log(watch("lastName"));
  console.log(watch("email"));
  console.log(watch("password"));
  console.log(watch("confirmPassword"));

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

            <View className="w-11/12 m-auto">
              <Text className="text-lg text-ccgcBlue">Welcome!</Text>
              <Text className="text-2xl font-bold text-ccgcBlue">Sign up</Text>
              <Text className="text-xl mt-2">First Name:</Text>
              <Controller
                control={control}
                {...register("firstName", {
                  required: { value: true, message: "Enter your first name." },
                })}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="First name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    className="border-2 border-ccgcBlue"
                  />
                )}
                name="firstName"
              />
              {errors.firstName && (
                <Text role="alert" className="mb-2">
                  {errors.firstName.message}
                </Text>
              )}

              <Text className="text-xl mt-2">Last Name:</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="lastName"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    className="border-2 border-ccgcBlue"
                  />
                )}
                name="lastName"
              />

              <Text className="text-xl mt-2">Email:</Text>
              <Controller
                control={control}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Enter your email to use for logging in.",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "The text you entered doesn't look like an email.",
                  },
                })}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    className="border-2 border-ccgcBlue"
                  />
                )}
                name="email"
              />
              {errors.email && (
                <Text className="mb-2">{errors.email.message} </Text>
              )}

              <Text className="text-xl mt-2">Password:</Text>
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
                    placeholder="Password"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    className="border-2 border-ccgcBlue"
                  />
                )}
                name="password"
              />
              {errors.password && (
                <Text className="mb-2">{errors.password.message} </Text>
              )}

              <Text className="text-xl mt-2">Confirm Password:</Text>
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
                    className="border-2 border-ccgcBlue"
                  />
                )}
                name="confirmPassword"
              />
              {errors.confirmPassword && (
                <Text className="mb-2">{errors.confirmPassword.message} </Text>
              )}
            </View>
            <Pressable
              onPress={handleSubmit(onSubmit)}
              className="bg-commonWhite h-14 w-[100%] mt-6 items-center justify-center rounded"
            >
              <Text className=" text-ccgcBlue text-lg">
                Create Your Account
              </Text>
            </Pressable>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SignUp;
