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
        const {features,image,name,published_in,id}=element
        creatDiv.innerHTML=`
        <div class="card w-48">
            <img src="${image ? image:'http://clipart-library.com/newimages/clip-art-books-15.png'}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Features</h5>
              <p class=" m-0 p-0 card-text">1.${features[0]}</p>
              <p class=" m-0 p-0 card-text">2.${features[1]}</p>
              <p class=" m-0 p-0 card-text">3.${features[3]}</p>
              <hr>
              <div class="d-flex justify-content-between aling-items- center">
              <div>
              <h5>Google Bard</h5>
              <div class="d-flex aling-items-center ">
              <p><i class="fa-regular fa-calendar-days"></i></p>
              <p class="m-0 p-0">${published_in}</p>
              </div>
              </div>
              <i class="fa-solid fa-arrow-right" onclick="modalLodeByData('${id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
              </div>
            </div>
        </div>
        `
        parents.appendChild(creatDiv)
  
    });
}

const modalLodeByData =(elementId)=>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${elementId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>modalDisplayLodeData(data.data))
    
}

const modalDisplayLodeData=(data)=>{
console.log(data)

 const parents = document.getElementById('modal-bodys')
 const creatDiv = document.createElement('div')
 const {features,image,name,published_in,id}=data
 creatDiv.classList.add('col','d-flex' ,"gap-2")
 creatDiv.innerHTML=`
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
 `
 parents.appendChild(creatDiv)
}