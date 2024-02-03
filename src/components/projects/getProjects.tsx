import { getProject } from "@/../services/requestProject";
import { changeNames } from "./nameProject";

interface ProjectsProps {
  name: string;
  url: string;
}

export async function GetProjects() {
  const getProjects = await getProject();

  return getProjects.map((item: ProjectsProps, index: number) => {
    return (
      <li key={index}>
        <a
          href={`https://${item.url}`}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          {changeNames(item.name)}
        </a>
      </li>
    );
  });
}
