import React from "react";
import { View, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

const Task = (props) => {
  const [checked, setChecked] = React.useState("first");

  return (
    <TailwindProvider>
      <View className=" pl-2 pr-6 py-4  flex flex-row items-center justify-between">
        <View className="flex flex-row flex-wrap items-center">
          <View className="">
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
              
            />
          </View>
          <Text className="text-black w-[85%]">{props.text}</Text>
        </View>
   
          <MaterialIcons name="delete-outline" size={24} color="black" />
    
      </View>
      <View className="w-100% h-[1.5px] bg-slate-300 mx-3"></View>
    </TailwindProvider>
  );
};

export default Task;
