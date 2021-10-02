import { LoadingProps } from "../../interfaces";

const Loading: React.FunctionComponent<LoadingProps> = ({daMostrare}) => {
  if(daMostrare!=="Loading") return null;
	return <h1>Caricamento</h1>;
};

export default Loading;
