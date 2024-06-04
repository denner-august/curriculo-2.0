export type PrincipalProps = {
  dados: [{ name: string; url: string }];
  post: {
    titulo: string;
    conteudo: { paragrafo1: []; paragrafo2: []; paragrafo3: [] };
  };
};

export type experienciaProps = {
  Name: string;
  Descricao: string;
  "Soft skills": string[];
  "Hard Skills": string[];
  Tecnologias: string[];
};
