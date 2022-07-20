const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Clicou!")
    } ;

    const renderThis = (x) => {
        return x ? <h1>Renderizando isso</h1> : <h1>Também posso renderizar isso!</h1>
    }

    return ( 
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("clique aqui")}>Clique aqui também!</button>
            </div>
            {renderThis(true)}
            {renderThis(false)}
        </div>
     );
}
 
export default Events;


//Não colocamos parênteses dentro de onClick pois senão a função será executada no código, e queremos que seja executada apenas no clique