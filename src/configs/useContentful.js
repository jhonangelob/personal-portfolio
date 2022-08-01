import { createClient } from "contentful";
const contentfulConfig = JSON.parse(process.env.REACT_APP_CONTENTFUL_CONFIG);
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
    });
    const sanitizedEntries = entries.items.map((item) => {
      return { ...item.fields };
    });
    return sanitizedEntries;
  } catch (err) {
    console.log(`Error fetching Projects: ${err}`);
  }
};
