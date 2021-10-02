import { BenvenutoProps } from "../../interfaces";

 
const Benvenuto: React.FunctionComponent<BenvenutoProps> = ({daMostrare}) => {
  if(daMostrare!=="Benvenuto") return null;
  return ( 
    <div>
      <h1>Benvenuto</h1>
      <p>Scegli una voce dal menu a sinistra per iniziare</p>
    </div>
   );
}
 
export default Benvenuto;