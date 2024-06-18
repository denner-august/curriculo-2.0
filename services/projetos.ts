import { requestProps } from "../types/project";

export function filtraUrlName(request: requestProps[]) {
  const projects = [
    "ignite-fundamentos-next",
    "desafio-warren-web",
    "criador-de-readme",
    "front-end-challenge-coodesh",
  ];

  const findProjects = projects.map((item) => {
    return request.find(
      (data: requestProps) => data.targets.production.name === item
    );
  });

  const filterProjects = findProjects.map((item: any) => {
    const namesProject = item.targets.production.name;

    return {
      name: item.targets.production.name,

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
          : item.targets.production.url,
    };
  });

  return filterProjects;
}
