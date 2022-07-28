import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Task from "./components/Task";
// import { Entypo } from "@expo/vector-icons";  for menu icon --working--
import { Octicons } from "@expo/vector-icons";

// import { useColorScheme } from 'react-native';
// import {
//   NavigationContainer,
//   DefaultTheme,
//   DarkTheme,
// } from '@react-navigation/native';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <TailwindProvider>
      {/* <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}> */}
      <View className="flex-1 bg-white">
        <View className="bg-green-400 h-10"></View>

        {/* Title */}
        <View className="h-14 flex items-center justify-center px-5">
          <View>
            <Image
              source={require("./assets/namelogo.png")}
              style={{ width: 110, height: 40 }}
            />
          </View>
          {/* menu log -- Working-- */}
          {/* <Entypo name="dots-three-vertical" size={24} color="black" /> */}
        </View>

        {/* Add Task */}
        <View className=" flex flex-row  h-16 w-full items-center justify-between px-4 ">
          <TextInput
            className="bg-white rounded-md px-2 w-[85%] h-10 border-2 border-green-500"
            placeholder={"Write a task"}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View className="h-10 w-10 bg-white flex items-center justify-center rounded-md bg-green-500 text-white">
              {/* <Text className="text-white text-5xl">+</Text> */}
              <Octicons name="diff-added" size={30} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="w-100% h-[1.5px] bg-slate-300 mx-3"></View>

        {/* Added this scroll view to enable scrolling when list gets longer than the page */}
        <ScrollView className="flex-grow" keyboardShouldPersistTaps="handled">
          {/* task container */}
          <View className="">
            <View>

              {/* This is where the tasks will go! */}
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}
                  >
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
      {/* </NavigationContainer> */}
    </TailwindProvider>
  );
}
