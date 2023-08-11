export default {
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    {
      name: "downloadFilename",
      type: "string",
      title: "Download Filename",
      description: "Filename to use when downloading the file",
    },
    {
      name: "resumeFile",
      title: "Resume File",
      type: "file",
    },
  ],
};
