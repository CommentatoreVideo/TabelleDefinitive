export interface SeparatoreProps {
  
}
 
const Separatore: React.SFC<SeparatoreProps> = ({children}) => {
  return ( 
    <div className="sb-sidenav-menu-heading">{children}</div>
   );
}
 
export default Separatore;