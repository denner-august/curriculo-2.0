import { ProjectProps, requestProps } from "../types/project";

export function filtraUrlName(request: any) {
  const projects = [
    "praticando-meu-front-end-react-js",
    "job-now",
    "front-end-challenge-coodesh",
    "fills-calcuer",
    "capitulo-2-ignite",
    "ignite-fundamentos-next",
    "readme-creator",
    "codelandia-challenge-01",
  ];

  const findProjects = projects.map((item) => {
    return request.find(
      (data: requestProps) => data.targets.production.name === item
    );
  });

  const filterProjects = findProjects.map((item: ProjectProps) => {
    return {
      name: item.targets.production.name,

      url:
        item.targets.production.name === "capitulo-2-ignite"
          ? "capitulo-2-ignite.vercel.app/"
          : item.targets.production.name === "fills-calcuer"
          ? "fills-calculeitor.vercel.app/"
          : item.targets.production.name === "ignite-fundamentos-next"
          ? "ignite-fundamentos-next.vercel.app"
          : item.targets.production.name === "job-now"
          ? "job-now-virid.vercel.app/"
          : item.targets.production.name === "codelandia-challenge-01"
          ? "codelandia-challenge-01.vercel.app"
          : item.targets.production.url,
    };
  });

  return filterProjects;
}
