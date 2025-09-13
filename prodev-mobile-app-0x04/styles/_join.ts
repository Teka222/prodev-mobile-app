import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  iconsection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  titleTextGroup: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  subText: {
    fontSize: 16,
    color: "#7B7B7B",
    marginTop: 5,
  },
  formGroup: {
    marginBottom: 25,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    color: "#000",
  },
  formControl: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 20,
  },
  formPasswordControl: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  passwordControl: {
    flex: 1,
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryButtonGroup: {
    gap: 12,
    marginBottom: 25,
  },
  secondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    gap: 10,
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  signupgroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  signupTitleText: {
    fontSize: 14,
    color: "#7B7B7B",
  },
  signupSubTitleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4CAF50",
  },
});
