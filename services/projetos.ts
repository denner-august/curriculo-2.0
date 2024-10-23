import { requestProps } from "../types/project";

export function filtraUrlName(request: requestProps[]) {
  const projects = [
    "ignite-fundamentos-next",
    "readme-creator",
    "desafio-warren-web",
    "front-end-challenge-coodesh",
  ];

  const findProjects = projects.map((item) => {
    return request
      .map((item: requestProps) => item.targets.production)
      .find((data) => data.name === item);
  });

  const filterProjects = findProjects.map((item: any) => {
    const namesProject = item.name;

    return {
      name: item.name,

      url:
        namesProject === "ignite-fundamentos-next"
          ? "ignite-fundamentos-next.vercel.app"
          : namesProject === "readme-creator"
          ? "readme-creator.vercel.app/"
          : namesProject === "criador-de-readme"
          ? "readme-creator.vercel.app/"
          : namesProject === "front-end-challenge-coodesh"
          ? "conexao-pharma.vercel.app"
          : namesProject === "desafio-warren-web"
          ? "fluxo-de-fundos.vercel.app"
          : item.url,
    };
  });

  return filterProjects;
}
