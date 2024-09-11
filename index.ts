type Song = {
    id:number
    title:string
    approved:boolean | null
    link:string
    date:string
    proponent:string | null
    imageurl:string
}

fetch("https://eskuvo-anett.nemestamas.hu/api/youtube/")
    .then(response => {
        
        response.json()
        .then(res=> {
           res.forEach((song : Song) => {
                console.log(song);
           });
        })    
    })
    .catch(error => {
        console.log(error.message)
    });