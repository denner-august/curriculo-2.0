import { getProject } from "@/../services/requestProject";
import { changeNames } from "./nameProject";
import { AlertProjetoDesenvolvimento } from "../../../notification/email";
import { ProjetosDesenvolvendo } from "../../../services/projetoDesenvolvendo";

interface ProjectsProps {
  name: string;
  url: string;
}

export async function GetProjects() {
  const getProjects = await getProject();

  return getProjects.map((item: ProjectsProps, index: number) => {
    if (ProjetosDesenvolvendo.includes(item.name)) {
      return (
        <li key={index}>
          <a
            onClick={() => AlertProjetoDesenvolvimento()}
            href={undefined}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            {changeNames(item.name)}
          </a>
        </li>
      );
    }

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
