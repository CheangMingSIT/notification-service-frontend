import { createContext, useState } from "react";

const PasswordValidationContext = createContext({
  password: "",
  confirmPassword: "",
  passwordsMatch: true,
  handlePasswordChange: (_event) => {},
  handleConfirmPasswordChange: (_event) => {},
});

const ValidatePasswords = ({ children }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePasswords(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePasswords(password, newConfirmPassword);
  };

  const validatePasswords = (passwordValue, confirmPasswordValue) => {
    setPasswordsMatch(passwordValue === confirmPasswordValue);
  };

  const contextValue = {
    password,
    confirmPassword,
    passwordsMatch,
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
