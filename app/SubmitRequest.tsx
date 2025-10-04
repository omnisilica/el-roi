import { router } from "expo-router";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

function SubmitRequest() {
  type SubmitRequestDetails = {
    firstName: string;
    email: string;
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
      request: "",
    },
  });

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] =
    React.useState(false);

  const postRequestDetails = ({
    firstName,
    email,
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
    <ScrollView>
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
              message: "Enter your email to log in.",
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
  );
}

export default SubmitRequest;
