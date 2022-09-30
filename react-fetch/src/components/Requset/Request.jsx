import * as React from "react";

function Request () {
    const [item, setItem] = React.useState([])
    React.useEffect(()=>{
        fetch("https://swapi.dev/api/people/1")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setItem(data)
        
        })
    },[])


    return(
        <div>{item.height}</div>
    )

}

export default Request