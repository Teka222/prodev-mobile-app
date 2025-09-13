import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { styles as joinStyles } from "@/styles/_joinstyle";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    // placeholder: implement auth
    console.log("signin", { email });
    // navigate to home or other screen after sign in
    router.push("/");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={joinStyles.container}>
        <View style={joinStyles.iconsection}>
          <Image source={HEROLOGOGREEN} style={{ width: 80, height: 40, resizeMode: "contain" }} />
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={{ color: "#7B7B7B" }}>Back</Text>
          </TouchableOpacity>
        </View>

        <View style={joinStyles.titleTextGroup}>
          <Text style={joinStyles.titleText}>Welcome back</Text>
          <Text style={joinStyles.subText}>Sign in to your account</Text>
        </View>

        <View style={joinStyles.formGroup}>
          <View>
            <Text style={joinStyles.formLabel}>Email</Text>
            <TextInput
              style={joinStyles.formControl}
              placeholder="email@example.com"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View>
            <Text style={joinStyles.formLabel}>Password</Text>
            <View style={joinStyles.formPasswordControl}>
              <TextInput
                style={joinStyles.passwordControl}
                placeholder="Enter password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          <TouchableOpacity style={joinStyles.primaryButton} onPress={handleSignIn}>
            <Text style={joinStyles.buttonText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("forgot password")}>
            <Text style={joinStyles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={joinStyles.dividerGroup}>
            <View style={joinStyles.divider} />
            <Text style={joinStyles.dividerText}>or</Text>
            <View style={joinStyles.divider} />
          </View>

          <View style={joinStyles.secondaryButtonGroup}>
            <TouchableOpacity style={[joinStyles.secondaryButton, { borderColor: "#e6e6e6", justifyContent: "center" }]}>
              <Image source={GOOGLELOGO} style={{ width: 18, height: 18 }} />
              <Text style={joinStyles.secondaryButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[joinStyles.secondaryButton, { borderColor: "#e6e6e6", justifyContent: "center" }]}>
              <Image source={FACEBOOKLOGO} style={{ width: 18, height: 18 }} />
              <Text style={joinStyles.secondaryButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={joinStyles.signupgroup}>
          <Text style={joinStyles.signupTitleText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/join")}>
            <Text style={joinStyles.signupSubTitleText}> Create one</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
