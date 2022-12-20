interface ProjectProps {
  targets: { production: { name: string; url: string } };
}

export function filtraUrlName(request: any) {
  const projects = [
    "praticando-meu-front-end-react-js",
    "job-now",
    "front-end-challenge-coodesh",
    "fills-calcuer",
    "capitulo-2-ignite",
    "fale-muito-mais-agora",
    "ignite-fundamentos-next",
    "readme-creator",
    "ignite-blog",
  ];

  const findProjects = projects.map((item) => {
    return request.find(
      (data: { targets: { production: { name: string } } }) =>
        data.targets.production.name === item
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
          : item.targets.production.name === "ignite-blog"
          ? "learning-now-blog.vercel.app/"
          : item.targets.production.name === "job-now"
          ? "job-now-virid.vercel.app/"
          : item.targets.production.url,
    };
  });

  return filterProjects;
}
