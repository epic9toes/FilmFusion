import AsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncKey = "onboarded";

export const setItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error: any) {
    console.log("Error storing value", error.message);
  }
};

export const getItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(`async key value: ${value}`);
      return value;
    } else {
      console.log("No data found");
    }
  } catch (error) {
    console.error("Error retrieving data: ", error);
  }
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Data with key "${key}" removed successfully`);
  } catch (error) {
    console.error(`Error removing data with key "${key}": `, error);
  }
};
