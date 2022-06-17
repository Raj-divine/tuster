const nextStep = ({
  setErrors,
  formData,
  active,
  isLoggingIn,
  setActive,
  initialErrorState,
}) => {
  //checking validation
  if (active === 0 && !isLoggingIn) {
    if (formData.firstName.trim() === "")
      setErrors({ firstName: "First name is required" });
    else if (formData.firstName.trim().length < 3)
      setErrors({ firstName: "First name must be at least 3 characters" });
    else if (formData.lastName.trim() === "")
      setErrors({ lastName: "Last name is required" });
    else if (formData.lastName.trim().length < 3)
      setErrors({ lastName: "Last name must be at least 3 characters" });
    else if (formData.email.trim() === "")
      setErrors({ email: "Email is required" });
    else if (!formData.email.includes("@") || !formData.email.includes("."))
      setErrors({ email: "Please enter a valid email" });
    else if (formData.password.trim() === "")
      setErrors({ password: "Password is required" });
    else if (formData.password.trim().length < 6)
      setErrors({ password: "Password must be at least 6 characters" });
    else if (!formData.password.match(/[a-z]+/))
      setErrors({
        password: "Password must contain at least one lowercase letter",
      });
    else if (!formData.password.match(/[0-9]+/))
      setErrors({ password: "Password must contain at least one number" });
    else if (!formData.password.match(/[A-Z]+/))
      setErrors({
        password: "Password must contain at least one uppercase letter",
      });
    else if (!formData.password.match(/[$@#&!%^&*()]+/))
      setErrors({
        password: "Password must contain at least one special character",
      });
    else if (formData.confirmPassword.trim() === "")
      setErrors({ confirmPassword: "Confirm password is required" });
    else if (formData.confirmPassword !== formData.password)
      setErrors({ confirmPassword: "Passwords must match" });
    else {
      setErrors(initialErrorState);
      setActive((current) => (current < 1 ? current + 1 : current));
    }
  }
  if (active === 1 && !isLoggingIn) {
    if (formData.subjects.length < 3)
      setErrors({ subjects: "Please select at least 3 subject" });
    else if (formData.address.trim() === "")
      setErrors({ address: "Please enter your address" });
    else if (formData.phone === undefined)
      setErrors({ phone: "Please enter your phone number" });
    else if (formData.phone.toString().length < 10)
      setErrors({ phone: "Please enter a valid phone number" });
    else if (formData.phone.toString().length > 10)
      setErrors({ phone: "Please enter a valid phone number" });
    else {
      setErrors(initialErrorState);
      setActive((current) => (current < 1 ? current + 1 : current));
    }
  }
  //checking validation when logging in
  if (isLoggingIn) {
    if (formData.email.trim() === "") setErrors({ email: "Email is required" });
    else if (!formData.email.includes("@") || !formData.email.includes("."))
      setErrors({ email: "Please enter a valid email" });
    else if (formData.password.trim() === "")
      setErrors({ password: "Password is required" });
    else if (formData.password.trim().length < 6)
      setErrors({ password: "Password must be at least 6 characters" });
    else if (!formData.password.match(/[a-z]+/))
      setErrors({
        password: "Password must contain at least one lowercase letter",
      });
    else if (!formData.password.match(/[0-9]+/))
      setErrors({ password: "Password must contain at least one number" });
    else if (!formData.password.match(/[A-Z]+/))
      setErrors({
        password: "Password must contain at least one uppercase letter",
      });
    else if (!formData.password.match(/[$@#&!%^&*()]+/))
      setErrors({
        password: "Password must contain at least one special character",
      });
    else setErrors(initialErrorState);
  }
};

export default nextStep;
