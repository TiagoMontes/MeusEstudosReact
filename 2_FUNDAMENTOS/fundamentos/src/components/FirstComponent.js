import Hierarquia from "./Hierarquia";

const FirstComponent = () => {
    //Isto é um comentário
    return (  
        <div className="primeiro">
            <h1>My First Component</h1>
            <Hierarquia />
        </div>
    );

}
 
export default FirstComponent;
//Este é um componente filho de App.js