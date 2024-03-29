import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "2p4vl31t",
  dataset: "production",
  apiVersion: "2022-11-18",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder: any = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
