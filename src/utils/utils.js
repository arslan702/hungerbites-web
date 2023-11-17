import { useSelector } from "react-redux";
import { isEqual } from "lodash";
import moment from "moment";

export const useIsEqualSelector = (selector) => {
  return useSelector(selector, isEqual);
};

// has number
const hasNumber = (number) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed = (number) =>
  new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
const hasSpecial = (number) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// set color based on password strength
export const strengthColor = (count) => {
  if (count < 2) return { label: "Poor", color: "error.main" };
  if (count < 3) return { label: "Weak", color: "warning.main" };
  if (count < 4) return { label: "Normal", color: "warning.dark" };
  if (count < 5) return { label: "Good", color: "success.main" };
  if (count < 6) return { label: "Strong", color: "success.dark" };
  return { label: "Poor", color: "error.main" };
};

// password strength indicator
export const strengthIndicator = (number) => {
  let strengths = 0;
  if (number.length > 5) strengths += 1;
  if (number.length > 7) strengths += 1;
  if (hasNumber(number)) strengths += 1;
  if (hasSpecial(number)) strengths += 1;
  if (hasMixed(number)) strengths += 1;
  return strengths;
};

export const dataURLtoFile = (dataUrl, filename) => {
  let arr = dataUrl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File(
    [u8arr],
    `${filename ? filename : Date.now()}.${mime.split("/").pop()}`,
    { type: mime }
  );
};
