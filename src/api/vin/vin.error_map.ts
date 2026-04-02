type Status = "success" | "warning" | "error";

export const ERROR_MAP: Record<number, {
  status: Status;
  message: string;
}> = {
  1: {
    status: "error",
    message: "Check digit (9th character) is incorrect. Please verify the VIN.",
  },

  2: {
    status: "warning",
    message: "The VIN was automatically corrected (1 character adjusted). Results may not be fully accurate.",
  },

  3: {
    status: "warning",
    message: "The VIN was corrected assuming the check digit is valid. Please double-check the VIN.",
  },

  4: {
    status: "warning",
    message: "The VIN was corrected, but multiple possible matches were found. Results may be ambiguous.",
  },

  5: {
    status: "error",
    message: "The VIN contains multiple errors. Please check the entire code.",
  },

  6: {
    status: "error",
    message: "Incomplete VIN. A valid VIN must contain exactly 17 characters.",
  },

  7: {
    status: "error",
    message: "The manufacturer is not registered in the database. Please verify the VIN or contact the manufacturer.",
  },

  8: {
    status: "warning",
    message: "No detailed information is available for this VIN.",
  },

  9: {
    status: "warning",
    message: "This VIN corresponds to a 'glider' vehicle (not a complete motor vehicle).",
  },

  10: {
    status: "warning",
    message: "This VIN belongs to an off-road vehicle and may not comply with standard vehicle regulations.",
  },

  11: {
    status: "warning",
    message: "Invalid model year code in the VIN. The decoded data may be incorrect.",
  },

  12: {
    status: "warning",
    message: "The provided model year does not match the VIN. Please verify the input.",
  },

  14: {
    status: "warning",
    message: "Some parts of the VIN could not be decoded. Partial data is shown.",
  },

  400: {
    status: "error",
    message: "The VIN contains forbidden characters.",
  },
};