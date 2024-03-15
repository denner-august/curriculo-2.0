import { ProjectProps, requestProps } from "../types/project";

export function filtraUrlName(request: requestProps[]) {
  const projects = [
    "praticando-meu-front-end-react-js",
    "job-now",
    "front-end-challenge-coodesh",
    "fills-calcuer",
    "ignite-fundamentos-next",
    "readme-creator",
    "codelandia-challenge-01",
    "front-end-code-challenge-smartsite",
    "desafio-warren-web",
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
        namesProject === "fills-calcuer"
          ? "fills-calculeitor.vercel.app/"
          : namesProject === "ignite-fundamentos-next"
          ? "ignite-fundamentos-next.vercel.app"
          : namesProject === "job-now"
          ? "job-now-virid.vercel.app/"
          : namesProject === "codelandia-challenge-01"
          ? "codelandia-challenge-01.vercel.app"
          : namesProject === "front-end-code-challenge-smartsite"
          ? "front-end-code-challenge-smartsite-sigma.vercel.app"
          : namesProject === "readme-creator"
          ? "readme-creator.vercel.app/"
          : item.targets.production.url,
    };
  });

  return filterProjects;
}
