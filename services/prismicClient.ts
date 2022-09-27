import * as Prismic from "@prismicio/client";

export function getPrismicClient() {
  const prismic = Prismic.createClient(`${process.env.PRIMSMIC_TOKEN_URL}`, {
    accessToken: process.env.PRISMIC_KEY,
  });

  return prismic;
}
