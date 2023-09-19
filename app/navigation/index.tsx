import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import OnboardingScreen from "../screen/OnboardingScreen";
import { AsyncKey, getItem } from "../helpers/asyncStorage";
import MovieScreen from "../screen/MovieScreen";
import PersonScreen from "../screen/PersonScreen";
import SearchScreen from "../screen/SearchScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, [showOnboarding]);
  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem(AsyncKey);
    if (onboarded === "1") {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onbaording
      setShowOnboarding(true);
    }
  };
  if (showOnboarding === null) {
    return null;
  }

  if (showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Onboarding"
            component={OnboardingScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Movie"
            component={MovieScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Person"
            component={PersonScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Search"
            component={SearchScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Onboarding"
            component={OnboardingScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Movie"
            component={MovieScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Person"
            component={PersonScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Search"
            component={SearchScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigation;
