const lodeData =()=>{
    const url ='https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res=>res.json())
    .then(data=>diaplaylodeData(data.data))
}

const diaplaylodeData =(data)=>{
    console.log(data)
    data.tools.forEach(element => {
        console.log(element)
        const parents =document.getElementById('parents-container')
        const creatDiv = document.createElement('div')
        creatDiv.classList.add('col')
        const {features,image,name,published_in}=element
        creatDiv.innerHTML=`
        <div class="card w-48">
            <img src="${image ? image :"https://randomuser.me/api/portraits/thumb/men/75.jpg"}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        parents.appendChild(creatDiv)

        
    });


}