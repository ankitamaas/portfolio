import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { INewContact } from "../interfaces/contact_interface";
import { IProjectResponse } from "../interfaces/project_interface";
import { ISkillResponse } from "../interfaces/skill_interface";
import { IQualificationResponse } from "../interfaces/IQualification";
import { IPageInfoResponse } from "../interfaces/page_info_interface";

// Initialize the Sanity client
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "default_project_id", // Optional default for debugging
  dataset: "production",
  useCdn: true,
});

// Check if the project ID is missing
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  console.warn("Sanity project ID is not set! Please check your environment variables.");
}

const builder = imageUrlBuilder(client);

// Function to generate image URLs from Sanity
export function urlFor(source: any) {
  return builder.image(source);
}

// Function to create new contact data in Sanity
export async function createNewContact(contact: INewContact) {
  try {
    const result = await client.create({
      _type: "contact",
      ...contact,
    });
    return result;
  } catch (error) {
    console.error("Error creating new contact:", error);
    throw error;
  }
}

// Function to fetch data from Sanity (projects, skills, qualifications, and personal info)
export async function getData() {
  const projectQuery = `*[_type=="project"] {
    _id,
    demoLink,
    gitHubLink,
    description,
    image,
    tags[]->{name, image},
    title,
    videoLink
  }`;

  const personalInfoQuery = `*[_type=="pageInfo"] {
    about,
    contact,
    hero,
    image,
    name,
    email
  }`;

  const skillsQuery = `*[_type=="skills"] {
    _id,
    image,
    name,
    stack
  }`;

  const qualificationQuery = `*[_type=="qualification"] | order(_createdAt asc) {
    _id,
    title,
    description,
    date,
    isEducation
  }`;

  try {
    const [projects, skills, qualifications, info] = await Promise.all([
      client.fetch<IProjectResponse>(projectQuery),
      client.fetch<ISkillResponse>(skillsQuery),
      client.fetch<IQualificationResponse>(qualificationQuery),
      client.fetch<IPageInfoResponse>(personalInfoQuery),
    ]);
    return { projects, skills, qualifications, info };
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    // Return empty data to avoid breaking the app
    return { projects: [], skills: [], qualifications: [], info: {} };
  }
}

export default client;
