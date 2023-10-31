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
            <img src="${image ? image:'http://clipart-library.com/newimages/clip-art-books-15.png'}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Features</h5>
              <p class=" m-0 p-0 card-text">1.${features[0]}</p>
              <p class=" m-0 p-0 card-text">2.${features[1]}</p>
              <p class=" m-0 p-0 card-text">3.${features[3]}</p>
              <hr>
              <div class="d-flex justify-itmes-center">
              <div>
              <h5>Google Bard</h5>
              <div>
              <i class="fa-regular fa-calendar-days"></i>
              <p>${published_in}</p>
              </div>

              </div>
              <div></div>
              <div></div>
              </div>
            </div>
        </div>
        `
        parents.appendChild(creatDiv)

        
    });


}