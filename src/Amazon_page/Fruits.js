const Fruits=()=>{
    const fruits = ["apple","banana","mango"]
    return(
        <div className="div">
            <h1>fruits</h1>
            <ul>
                {fruits.map((item)=>(
                   <li>{item}</li> 
                ))}
            </ul>
          
        </div>
    )
}
export default Fruits;