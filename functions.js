const url='https://striveschool.herokuapp.com/api/product/'
let givenstring='user20:Y2cJZ38UPMmnPdAW'
let encoded=window.btoa(givenstring)
const getProducts=async()=>{
    
    let response = await fetch(url,{
        method:"GET",
        
        headers: new Headers({
            'Content-Type':'application/json',
            'Authorization':'Basic '+encoded
        }),

    })//this is getting response from api fetching 
    return await response.json()//this is returning the result of thr promise in a usable format
}
const getProduct=async(id)=>{
    let response = await fetch(url+id,{
        method:"GET",
        
        headers: new Headers({
            'Content-Type':'application/json',
            'Authorization':'Basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc='
        }),

    })//this is getting response from api fetching 
    return await response.json()

}
handleSubmit=()=>{
    event.preventDefault()
         submitProduct()
}
submitProduct=async ()=>{
    let myProduct={
        name:document.querySelector('#name').value,
        description:document.querySelector('#description').value,
        brand:document.querySelector('#brand').value,
        imageUrl:document.querySelector('#imageUrl').value,
        price:document.querySelector('#price').value


    }
    let response;
    if(id){
        response=await editProduct(id,myProduct)
    }
    else{
        response=await saveProduct(myProduct)
    }
    console.log("RESPONSE FROM THE saveEvent", response);
   
   
}

const saveProduct= async (productObj)=>{
    let response= await fetch(url,{
        method:"POST",
        body:JSON.stringify(productObj),
        headers: new Headers({
            'Content-Type':'application/json',
            'Authorization':'Basic '+encoded
        }),
    })
    return response
}
const editProduct=async (id,productObj)=>{
    let response=await fetch(url+id,{
        method:"PUT",
        body:JSON.stringify(productObj),
        headers: new Headers({
            'Content-Type':'application/json',
            'Authorization':'Basic '+encoded
        })
    })
    return response
}
const deleteProduct = async (id) => {
    let response = await fetch(url + id, {
      method: "DELETE",
      headers: new Headers({
        'Content-Type':'application/json',
        'Authorization':'Basic '+encoded
    })
    });
    return response;
  };
  
