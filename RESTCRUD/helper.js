const url='https://striveschool.herokuapp.com/api/agenda/'

const getEvents=async()=>{
    let response = await fetch(url)//this is getting response from api fetching 
    return await response.json()//this is returning the result of thr promise in a usable format
}
const saveEvent =async (agendaEvent)=>{
    let response= await fetch(url,{
        method:"POST",
        body:JSON.stringify(agendaEvent),
        headers: new Headers({
            'Content-Type':'application/json',

        }),
    })
    return response
}