const ShowUserName = (props) => {
    return ( 
        <div>
            <h2>Estes são os dados do usuário</h2>
            <p>{props.nome} - {props.idade} Anos - {props.profissao}</p>
        </div>
    );
}
 
export {ShowUserName};