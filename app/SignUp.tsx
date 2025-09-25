import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";

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
      address: "",
      password: "",
      confirmPassword: "",
    },
  });

  type SignUpDetails = {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    password: string;
    confirmPassword: string;
  };

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

  const onSubmit: SubmitHandler<SignUpDetails> = (data) => console.log(data);

  console.log(watch("firstName"));
  console.log(watch("lastName"));
  console.log(watch("email"));
  console.log(watch("address"));
  console.log(watch("password"));
  console.log(watch("confirmPassword"));

  return (
    <View className="bg-white-700 h-full w-full">
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
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text role="alert">{errors.firstName.message}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="lastName"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />

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
          />
        )}
        name="email"
      />
      {errors.email && <Text>{errors.email.message} </Text>}

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
          />
        )}
        name="password"
      />
      {errors.password && <Text>{errors.password.message} </Text>}

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
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && <Text>{errors.confirmPassword.message} </Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default SignUp;
