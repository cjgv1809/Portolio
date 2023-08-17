import { Resume } from "../typings";

export const fetchResume = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getResume`
    );
    const data = await res.json();
    const resume: Resume = data.resume;
    return resume;
  } catch (error) {
    console.log(error);
  }
};
