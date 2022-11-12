export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "text",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      validation: (Rule) =>
        Rule.custom((endDate, context) => {
          const startDate = context.parent.startDate;
          if (startDate && endDate && startDate > endDate) {
            return "End date must be after start date";
          }
          return true;
        }),
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "Is Currently Working Here",
      type: "boolean",
      validation: (Rule) =>
        Rule.custom((isCurrentlyWorkingHere, context) => {
          const endDate = context.parent.endDate;
          if (isCurrentlyWorkingHere && endDate) {
            return "End date must be empty if currently working here";
          }
          return true;
        }),
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};
