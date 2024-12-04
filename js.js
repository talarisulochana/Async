var GetDate=new Promise((resolve, reject) => {
    if(1){
        resolve(" I am Good")
    }else{
        reject(" I not Good")
    }
})
GetDate.then(y=>console.log(y)).catch(x=>console.log(x))



var Data=new Promise((resolve,reject) => {
    fetch("https://fakestoreapi.com/products").then(x=>x.json()).then(res=>console.log(res)).catch(err=>console.log(err))
})
Data.then(x=>console.log(x)).catch(y=>console.log(y))



async function data(){
    let a=await new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Task will be completed")
        },3000)
    })
    console.log(a)
    
}
data()

async function getData(){
    const data=await fetch("https://fakestoreapi.com/products").then(res=>res.json()) 
    for(i=0;i<data.length;i++){
        let img=document.createElement("img");
        img.src=`${data[i].image}`
        document.body.append(img)
    }
    console.log(data)
}
getData()