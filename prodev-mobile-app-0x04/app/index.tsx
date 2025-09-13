import React from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles as mainStyles } from "@/styles/_mainstyle";
import {
  BACKGROUNDIMAGE,
  HEROLOGO,
  HEROLOGOGREEN,
  GOOGLELOGO,
  FACEBOOKLOGO,
} from "@/constants";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={mainStyles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        resizeMode="cover"
        style={mainStyles.backgroundImageContainer}
      >
        <View style={mainStyles.logoContainer}>
          <Image source={HEROLOGO} style={{ width: 140, height: 80, resizeMode: "contain" }} />
        </View>

        <View style={mainStyles.titleContainer}>
          <Text style={mainStyles.titleText}>Welcome to ProDev</Text>
          <View style={mainStyles.titleSubTextContainer}>
            <Text style={mainStyles.titleSubText}>Build beautiful mobile apps with confidence</Text>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 60 }}>
          <View style={mainStyles.buttonGroup}>
            <TouchableOpacity
              style={mainStyles.buttonPrimary}
              onPress={() => router.push("/join")}
            >
              <Text style={mainStyles.buttonPrimaryText}>Get Started</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={mainStyles.buttonSecondary}
              onPress={() => router.push("/signin")}
            >
              <Text style={mainStyles.buttonSecondaryText}>Sign in</Text>
            </TouchableOpacity>
          </View>

          <View style={mainStyles.buttonGroupSubText}>
            <Text style={{ color: "#fff" }}>Or continue with</Text>
          </View>

          <View style={[mainStyles.buttonGroup, { marginTop: 16 }]}>
            <TouchableOpacity style={[mainStyles.buttonSecondary, { flexDirection: "row", alignItems: "center", justifyContent: "center" }]}>
              <Image source={GOOGLELOGO} style={{ width: 20, height: 20, marginRight: 10 }} />
              <Text style={mainStyles.buttonSecondaryText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[mainStyles.buttonSecondary, { flexDirection: "row", alignItems: "center", justifyContent: "center" }]}>
              <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20, marginRight: 10 }} />
              <Text style={mainStyles.buttonSecondaryText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
