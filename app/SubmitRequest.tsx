import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

function SubmitRequest() {
  type SubmitRequestDetails = {
    firstName: string;
    email: string;
    title: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    addressLine1: string;
    addressLine2: string;
    request: string;
  };

  type submitRequestDetailsResult<T> = {
    success: boolean;
    errors?: { [P in keyof T]?: string[] };
  };

  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<SubmitRequestDetails>({
    defaultValues: {
      firstName: "",
      email: "",
      title: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      addressLine1: "",
      addressLine2: "",
      request: "",
    },
  });

  const [country, setCountry] = React.useState("united-states");
  const [currentState, setCurrentState] = React.useState("new-jersey");
  const [currentCity, setCurrentCity] = React.useState("");
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] =
    React.useState(false);

  const postRequestDetails = ({
    firstName,
    email,
    title,
    country,
    state,
    city,
    zipCode,
    addressLine1,
    addressLine2,
    request,
  }: SubmitRequestDetails): Promise<
    submitRequestDetailsResult<SubmitRequestDetails>
  > => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log();
        resolve({ success: true });
      }, 100);
    });
  };

  const onSubmitRequest: SubmitHandler<SubmitRequestDetails> = async (data) => {
    console.log(data);
    const result = await postRequestDetails(data);
    setIsSuccessfullySubmitted(result.success);
    setTimeout(() => {
      router.navigate("./SubmitRequestSuccessConfirmation");
    }, 1200);
  };

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
      <ScrollView>
        {/* Title, Address*/}
        <View className="w-11/12 m-auto mt-8">
          <Text className="text-ccgcBlue text-4xl w-7/12 font-mono">
            Submit a Request for Review
          </Text>
        </View>
        {isSuccessfullySubmitted && (
          <Text className="bg-[#0F612D] w-11/12 m-auto mt-8 p-2 text-commonWhite rounded-md">
            Your Submission Was Successful
          </Text>
        )}
        <View className="bg-commonWhite w-11/12 m-auto mt-8 shadow-xl">
          <Text className="text-xl mt-2 w-11/12 m-auto text-[rgba(74,84,88,1)]">
            First Name:
          </Text>
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
                className="border-2 border-[rgba(74,84,88,1)] w-11/12 m-auto mb-8 p-2"
              />
            )}
            name="firstName"
          />
          {errors.firstName && (
            <Text
              role="alert"
              className="text-[rgba(154,35,35,1)] mb-2 w-11/12 m-auto"
            >
              {errors.firstName.message}
            </Text>
          )}
        </View>

        <View className="bg-commonWhite w-11/12 m-auto mt-8 shadow-xl">
          <Text className="text-xl mt-2 text-[rgba(74,84,88,1)] w-11/12 m-auto">
            Email:
          </Text>
          <Controller
            control={control}
            {...register("email", {
              required: {
                value: true,
                message: "Enter your email.",
              },
            })}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-2 border-[rgba(74,84,88,1)] w-11/12 m-auto mb-8 p-2"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text className="text-[rgba(154,35,35,1)] mb-2 w-11/12 m-auto">
              {errors.email.message}{" "}
            </Text>
          )}
        </View>

        <View className="bg-commonWhite w-11/12 m-auto mt-8 shadow-xl">
          <Text className="text-xl mt-2 text-[rgba(74,84,88,1)] w-11/12 m-auto">
            Title:
          </Text>
          <Controller
            control={control}
            {...register("title", {
              required: {
                value: true,
                message: "Enter a short summary of your request.",
              },
            })}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Title"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-2 border-[rgba(74,84,88,1)] w-11/12 m-auto mb-8 p-2"
              />
            )}
            name="title"
          />
          {errors.title && (
            <Text className="text-[rgba(154,35,35,1)] mb-2 w-11/12 m-auto">
              {errors.title.message}{" "}
            </Text>
          )}
        </View>

        <View className="bg-commonWhite w-11/12 m-auto mt-8 shadow-xl">
          <Text className="text-xl mt-2 text-[rgba(74,84,88,1)] w-11/12 m-auto">
            Address
          </Text>

          <Text className="text-lg mt-2 text-[rgba(74,84,88,1)] w-11/12 m-auto">
            Country:
          </Text>
          <Controller
            control={control}
            {...register("country")}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="border-2 border-[rgba(74,84,88,1)] w-11/12 m-auto mb-8 p-2">
                <Picker
                  selectedValue={"United States"}
                  onValueChange={(itemValue, itemIndex) =>
                    setCountry(itemValue)
                  }
                  enabled={false}
                >
                  <Picker.Item label="United States" value="united-states" />
                </Picker>
              </View>
            )}
            name="country"
          />

          <Text className="text-lg mt-2 text-[rgba(74,84,88,1)] w-11/12 m-auto">
            State:
          </Text>
          <Controller
            control={control}
            {...register("state")}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="border-2 border-[rgba(74,84,88,1)] w-11/12 m-auto mb-8 p-2">
                <Picker
                  selectedValue={"New Jersey"}
                  onValueChange={(itemValue, itemIndex) =>
                    setCountry(itemValue)
                  }
                  enabled={false}
                  className="border-2 border-[rgba(74,84,88,1)] w-11/12 m-auto mb-8 p-2"
                >
                  <Picker.Item label="New Jersey" value="new-jersey" />
                </Picker>
              </View>
            )}
            name="state"
          />

          <Text className="text-lg mt-2 text-[rgba(74,84,88,1)] w-11/12 m-auto">
            City:
          </Text>
          <Controller
            control={control}
            {...(register("city"),
            {
              required: {
                value: true,
                message: "Enter your city.",
              },
            })}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="City"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-2 border-[rgba(74,84,88,1)] w-11/12 m-auto mb-8 p-2"
              />
            )}
            name="city"
          />
          {errors.city && (
            <Text className="text-[rgba(154,35,35,1)] mb-2 w-11/12 m-auto">
              {errors.city.message}{" "}
            </Text>
          )}

          <Text className="text-lg mt-2 text-[rgba(74,84,88,1)] w-11/12 m-auto">
            Zip Code:
          </Text>
          <Controller
            control={control}
            {...register("zipCode")}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Zip Code"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-2 border-[rgba(74,84,88,1)] w-11/12 m-auto mb-8 p-2"
              />
            )}
            name="zipCode"
          />

          <Text className="text-lg mt-2 text-[rgba(74,84,88,1)] w-11/12 m-auto">
            Address Line 1:
          </Text>
          <Controller
            control={control}
            {...register("addressLine1", {
              required: {
                value: true,
                message: "Enter your address.",
              },
            })}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Address Line 1"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-2 border-[rgba(74,84,88,1)] w-11/12 m-auto mb-8 p-2"
              />
            )}
            name="addressLine1"
          />
          {errors.addressLine1 && (
            <Text className="text-[rgba(154,35,35,1)] mb-2 w-11/12 m-auto">
              {errors.addressLine1.message}{" "}
            </Text>
          )}

          <Text className="text-lg mt-2 text-[rgba(74,84,88,1)] w-11/12 m-auto">
            Address Line 2:
          </Text>
          <Controller
            control={control}
            {...register("addressLine2")}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Address Line 2"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-2 border-[rgba(74,84,88,1)] w-11/12 m-auto mb-8 p-2"
              />
            )}
            name="addressLine2"
          />
        </View>

        <View className="bg-commonWhite w-11/12 m-auto mt-8 shadow-xl">
          <Text className="text-xl mt-2 text-[rgba(74,84,88,1)] w-11/12 m-auto">
            Request:
          </Text>
          <Controller
            control={control}
            {...register("request", {
              required: {
                value: true,
                message: "What's your request. Be as detailed as you can be.",
              },
            })}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Request"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline={true}
                numberOfLines={8}
                className="border-2 border-[rgba(74,84,88,1)] h-40 w-11/12 m-auto mb-8 p-2"
              />
            )}
            name="request"
          />
          {errors.request && (
            <Text
              role="alert"
              className="text-[rgba(154,35,35,1)] mb-2 w-11/12 m-auto"
            >
              {errors.request.message}
            </Text>
          )}
        </View>
        <Pressable
          onPress={handleSubmit(onSubmitRequest)}
          className="bg-ccgcBlue h-14 w-11/12 mt-6 m-auto items-center justify-center"
        >
          <Text className="text-commonWhite text-lg">Submit Request</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SubmitRequest;
