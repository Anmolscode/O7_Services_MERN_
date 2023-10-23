import { Fragment } from "react"

export default function Total(){
    const item=[
        {name:"kurti",price:2000,color:"red"},
        {name:"jeans",price:1500,color:"blue"},
        {name:"suit",price:3000,color:"blue"},
    ]
    var name=""
    // truthy value-> 
    // null, undefined, 0, ""
    var total=0
    const getPrice=(price)=>{
        console.log("Btn is clicked ",price)
    }
    return(
        <>
            <h1>Find total value</h1>
            {
                item.map(
                    (el,index)=>{
                        // console.log(total ,"start")
                        // console.log(el.price)
                        total+=el.price
                        // console.log(total ,"later")
                        return(
                            <div style={{boxShadow:"0px 0px 10px grey"}}key={index}>
                                <p>Item name: {el.name}</p>
                                <p>Price : &#8377;{el.price}</p>
                                <button onClick={
                                    ()=>{
                                        getPrice(el.price)
                                    }
                                }>Get</button>
                            </div>
                        )
                    }
                )
            }
            <h1>Total is : {total}</h1>
            {
                total>0?<button>Buy</button>:""
            }
            {
                total>0 && <button>Buy</button>
            }
            {
              name?"hello":"bye"
            }
            {
                !!name?"hello1":"bye1"
            }
        </>
    )
}
