handleSubmit=()=>{
    event.preventDefault()
         submitProduct()
}
submitProduct=()=>{
    let myProduct={
        name:document.querySelector('#name').value,
        description:document.querySelector('#description').value,
        brand:document.querySelector('#brand').value,
        imageUrl:document.querySelector('#imageUrl').value,
        price:document.querySelector('#price').value


    }
    console.log('myprod',myProduct)
   
}