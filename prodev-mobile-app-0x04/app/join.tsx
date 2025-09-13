import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles as joinStyles } from "@/styles/_joinstyle";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { useRouter } from "expo-router";

export default function Join() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    // placeholder for signup logic
    console.log("sign up", { fullName, email, password });
    router.push("/signin"); // navigate to sign in after joining
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={joinStyles.container}>
        {/* Top bar */}
        <View style={joinStyles.iconsection}>
          <Image
            source={HEROLOGOGREEN}
            style={{ width: 80, height: 40, resizeMode: "contain" }}
          />
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={{ color: "#7B7B7B" }}>Back</Text>
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View style={joinStyles.titleTextGroup}>
          <Text style={joinStyles.titleText}>Create account</Text>
          <Text style={joinStyles.subText}>Sign up to continue</Text>
        </View>

        {/* Form */}
        <View style={joinStyles.formGroup}>
          <View>
            <Text style={joinStyles.formLabel}>Full name</Text>
            <TextInput
              style={joinStyles.formControl}
              placeholder="John Doe"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

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

          <TouchableOpacity style={joinStyles.primaryButton} onPress={handleSignUp}>
            <Text style={joinStyles.buttonText}>Create account</Text>
          </TouchableOpacity>

          {/* Social buttons */}
          <View style={joinStyles.secondaryButtonGroup}>
            <TouchableOpacity
              style={[joinStyles.secondaryButton, { borderColor: "#e6e6e6" }]}
            >
              <Image source={GOOGLELOGO} style={{ width: 18, height: 18 }} />
              <Text style={joinStyles.secondaryButtonText}>
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[joinStyles.secondaryButton, { borderColor: "#e6e6e6" }]}
            >
              <Image source={FACEBOOKLOGO} style={{ width: 18, height: 18 }} />
              <Text style={joinStyles.secondaryButtonText}>
                Continue with Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom link */}
        <View style={joinStyles.signupgroup}>
          <Text style={joinStyles.signupTitleText}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/signin")}>
            <Text style={joinStyles.signupSubTitleText}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
