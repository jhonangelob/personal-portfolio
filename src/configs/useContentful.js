import { createClient } from "contentful";
const { REACT_APP_CONTENTFUL_CONFIG } = process.env;
const contentfulConfig = JSON.parse(REACT_APP_CONTENTFUL_CONFIG);
const client = createClient(contentfulConfig);

export const getResume = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "resume",
      select: "fields",
    });
    const sanitizedEntries = entries.items.map((item) => {
      const download = item.fields.file.fields;
      return { ...item.fields, download };
    });
    return sanitizedEntries;
  } catch (err) {
    console.log(`Error fetching downloadable file: ${err}`);
  }
};

export const getProjects = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "projects",
      select: "fields",
      order: "fields.order",
    });
    const sanitizedEntries = entries.items.map((item) => {
      const image = item.fields.projectImage.fields;
      return { ...item.fields, image };
    });
    return sanitizedEntries;
  } catch (err) {
    console.log(`Error fetching Projects: ${err}`);
  }
};
