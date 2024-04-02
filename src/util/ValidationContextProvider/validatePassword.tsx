import { createContext, useState } from "react";

const PasswordValidationContext = createContext({
  password: "",
  confirmPassword: "",
  passwordsMatch: true,
  passwordStrength: "Weak",
  handlePasswordChange: (_event) => {},
  handleConfirmPasswordChange: (_event) => {},
});

const ValidatePasswords = ({ children }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState("Weak");

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePasswords(newPassword, confirmPassword);
    checkPasswordStrength(newPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePasswords(password, newConfirmPassword);
  };

  const validatePasswords = (passwordValue, confirmPasswordValue) => {
    setPasswordsMatch(passwordValue === confirmPasswordValue);
  };

  const checkPasswordStrength = (passwordValue) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&/?])[\w!@#$%^&/?]{8,}$/;

    if (passwordValue.length < 6) {
      setPasswordStrength("Weak");
    } else if (passwordValue.length < 10) {
      setPasswordStrength("Medium");
    } else if (regex.test(passwordValue)) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const contextValue = {
    password,
    confirmPassword,
    passwordsMatch,
    passwordStrength,
    handlePasswordChange,
    handleConfirmPasswordChange,
  };

  return (
    <PasswordValidationContext.Provider value={contextValue}>
      {children}
    </PasswordValidationContext.Provider>
  );
};

export { PasswordValidationContext, ValidatePasswords };
