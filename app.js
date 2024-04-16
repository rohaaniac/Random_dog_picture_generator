let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random "
btn.addEventListener("click", async ()=>{
    let link = await generatedog();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);

});

async function generatedog(){
    try{
        let res = await axios.get(url);
        // res will return only the promise but res.data.image is where the image is stored 
        return res.data.message;
    }
    catch(e){
        console.log("Oops an error has been encountered..",err);
    }
}