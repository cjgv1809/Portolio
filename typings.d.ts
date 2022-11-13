interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface SanityAsset {
  _ref: string;
  _type: "reference";
}

interface SanityImage {
  _type: "image";
  asset: SanityAsset;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  title: string;
  phoneNumber: string;
  profilePicture: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  startDate: date;
  endDate: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "project";
  image: Image;
  deployedUrl: string;
  summary: string;
  title: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
