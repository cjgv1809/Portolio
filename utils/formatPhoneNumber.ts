import { FormatPhoneNumberProps } from "../typings";

function formatPhoneNumber({ phoneNumber }: FormatPhoneNumberProps) {
  try {
    // Convert the number to a string
    const phoneNumberStr = phoneNumber.toString();

    // Extract the country code, area code, and local number
    const countryCode = phoneNumberStr.slice(0, 3);
    const areaCode = phoneNumberStr.slice(3, 4);
    const localNumberPart1 = phoneNumberStr.slice(4, 8);
    const localNumberPart2 = phoneNumberStr.slice(8);

    // Construct the formatted phone number
    const formattedPhoneNumber = `${countryCode} ${areaCode} ${localNumberPart1}-${localNumberPart2}`;

    return formattedPhoneNumber;
  } catch (error) {
    console.error("Error formatting phone number:", error);
    return phoneNumber.toString(); // Return the original number as a fallback
  }
}

export { formatPhoneNumber };
