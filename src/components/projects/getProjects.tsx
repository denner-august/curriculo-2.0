"use client";
import { getProject } from "@/../services/requestProject";
import { changeNames } from "./nameProject";
import { AlertProjetoDesenvolvimento } from "../../../notification/email";
import { ProjetosDesenvolvendo } from "../../../services/projetoDesenvolvendo";

export async function GetProjects() {
  const getProjects = await getProject();

  if (getProjects.length > 0) {
    return getProjects.map((item, index: number) => {
      if (ProjetosDesenvolvendo.includes(String(item.name))) {
        return (
          <li key={index}>
            <a
              onClick={() => AlertProjetoDesenvolvimento()}
              href={undefined}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              {changeNames(String(item.name))}
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
            {changeNames(String(item.name))}
          </a>
        </li>
      );
    });
  }

  return <h1> Desculpe mas não foi possivel carregar meus projetos</h1>;
}
