"use client";
import axios from "axios";
import { filtraUrlName } from "./projetos";

export async function getProject() {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_KEY}`,
    },
  };

  const request = await axios
    .get("https://api.vercel.com/v9/projects?limit=28", config)
    .then((response) => response.data.projects);

  return filtraUrlName(request);
}
