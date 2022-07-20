const TemplateExpressions = () => {
    
    const name= "Tiago"
    const data={
        age: 23,
        job: "programming",
        city: "Vancouver",
    }
    
    return ( 
        <div className="segundo">
            <h1>Hello, my name is {name}, i'm have {data.age} years old and i work with {data.job}</h1>
        </div>
     );
}
 
export default TemplateExpressions;