export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV !== "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-03-25",
};
