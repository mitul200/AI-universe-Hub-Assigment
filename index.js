const lodeData =()=>{
    document.getElementById('spinners').classList.remove('d-none')
    const url ='https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        document.getElementById('spinners').classList.add('d-none')
        diaplaylodeData(data.data)
    })
}

const diaplaylodeData =(data)=>{
    console.log(data)
    data.tools.forEach(element => {
        console.log(element)
        const parents =document.getElementById('parents-container')
        const creatDiv = document.createElement('div')
        creatDiv.classList.add('col')
        const {features,image,published_in,id}=element
        creatDiv.innerHTML=`
        <div class="card w-48">
            <img src="${image ? image:'https://youchat.com/assets/images/screenshot-1.png'}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Features</h5>
              <p class=" m-0 p-0 card-text">1.${features[0]}</p>
              <p class=" m-0 p-0 card-text">2.${features[1]}</p>
              <p class=" m-0 p-0 card-text">3.${features[2]}</p>
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
console.log(data.pricing[0].price)

 const parents = document.getElementById('modal-bodys')
 parents.innerHTML='';
 const creatDiv = document.createElement('div')
  
 creatDiv.classList.add('col','d-flex',"gap-2")
 creatDiv.innerHTML=`
    <div class="card">
      <div class="card-body">
        <p class="card-title fw-bold">${data.description}</p>
        <div class="d-flex gap-2">
        <div class="card">
        <p class="text-primary">${data.pricing[0].price} ${data.pricing[0].plan}</p>
        </div>
        <div class="card">
        <p class="text-warning">${data.pricing[0].price} ${data.pricing[0].plan}</p>
        </div>
        <div class="card">
        <p class="text-danger">${data.pricing[0].price} ${data.pricing[0].plan}</p>
        </div>
        </div>
         <div>
         <h5 class="card-title">integrations</h5>
              <p class=" m-0 p-0 card-text">. ${data.integrations[0]} </p>
              <p class=" m-0 p-0 card-text">. ${data.integrations[1]} </p>
              <p class=" m-0 p-0 card-text">. ${data.integrations[2]} </p>
              <hr>
         </div>
      </div>
    </div>
    <div class="card">
      <img src="${data.image_link[0]} " class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-title fw-bold">Hi, how are you doing today?</p>
        <p class="card-text">${data.accuracy.description}</p>
      </div>
    </div>
 `
 parents.appendChild(creatDiv)
}