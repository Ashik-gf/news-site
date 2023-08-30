const lodePhone = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data =await res.json();
    const newss = data.data.news_category;
   const tabContainer =document.getElementById('tabContainer');
newss.slice(0,3).forEach(news => {
    const div =document.createElement("div")
    console.log(news)
    // onclick function a string pass korte hobe so use " "
    div.innerHTML=`
    
     <a onclick="getNews('${news.category_id}')" 
     class="tab bg-red-600 text-white tab-bordered">${news.category_name}</a>

    `
    console.log(div)

    tabContainer.appendChild(div);
 
});

   
};
const getNews = async (category_id)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    // const res = await fetch("https://openapi.programming-hero.com/api/news/category/");
    const data = await res.json();
    const newsData = data.data;
    const card_container = document.getElementById('card_container')
    card_container.textContent='';
    newsData.forEach(cardNews => {
        console.log(cardNews);
        const div =document.createElement("div")
        
        
        div.innerHTML=`
        <figure><img class="h-40 rounded-lg" src=${cardNews?.image_url
            } alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${cardNews?.title}
            <div class="badge badge-secondary p-5">Excellent</div>
          </h2>
          
          <p>${cardNews.details.slice(0, 100)
          }
          </p>
          <h3>Total Views:${cardNews.total_view}</h3>
          <div class="card-footer my-4">
            <div class="flex">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                      <img class="h-48 w-40" src=${cardNews?.author?.img} />
                    </div>
                  </div>
                  <div class=" p-4 pl-8">
                    <h6>${cardNews?.author?.name}</h6>
                  <small>2022-08-24 17:27:34</small>
                  </div>
            </div>
            <div class="card-actions justify-end">
                <button class="btn btn-primary flex justify-start">DETAILS</button>
              </div>
          </div>
          
        </div>
        `
        card_container.appendChild(div)
        
    });


}

lodePhone()
//  let a =1;
//  console.log(`${a}`)