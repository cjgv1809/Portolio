import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Resume } from "../../typings";

const query = groq`
  *[_type == 'resume'][0] {
    _type,
    resumeFile {
      _type,
      asset->{
        url
      }
    },
    downloadFilename
  }
`;

type Data = {
  resume: Resume;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const resume: Resume = await sanityClient.fetch(query);
  res.status(200).json({ resume });
}
