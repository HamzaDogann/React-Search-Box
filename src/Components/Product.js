const products = [
    { title: "Telefon", id: 1 },
    { title: "Tablet", id: 2 },
    { title: "Laptop", id: 3 }
]

export default function Product() {
    
    
 const product = products.map(product=>
    <li 
        key={product.id}
       style={{
         color: "red",
         fontFamily: 'Poppins',
         fontSize:"23px"
       }}        
        >

        <h3>ID : <span style={{color:"Black"}}>{product.id}</span> Urun :{product.title}</h3>
    </li>
        );

    return (
        <>
       <ul>{product}</ul>
        </>
    )
}