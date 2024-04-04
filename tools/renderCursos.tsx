interface RenderCursosProps {
  nome: string;
  data: string;
}
export const RenderCursos = ({ nome, data }: RenderCursosProps) => {
  return (
    <li>
      {nome} <br />
      termino: {data}
    </li>
  );
};
