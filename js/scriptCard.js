fetch(`    https://perenual.com/api/species-list?page=1&key=sk-5hvH645e1ac7733df904`).then(response => response.json())
.then(data => {
    let idOfCard=localStorage.getItem(`id`)
    let idOfShop=JSON.parse(idOfCard)
    for(let x = 0 ;x<idOfShop.length;x++){
        idOfShop[x]-=1
        console.log(idOfShop[x]);
    }
    for(let i = 0 ;i<idOfShop.length;i++){
        let nameOfFlawer = data.data[idOfShop[i]].common_name
        let imgOfFlawer=data.data[idOfShop[i]].default_image.medium_url     
        console.log(imgOfFlawer);
        let htmlOfCard=`<div class="cart--of--flower">
        <img class="imgOfFlaw" src="${imgOfFlawer}" alt="">
        <p class="nameOfFlawor">${nameOfFlawer}</p>
        <div class="bottom--of--card">
            <p class="costsFl">5$</p>   
            <div style="display: flex;" class="div">
                <h4 class="addCard" id="16">Pay</h4>
            </div>
        </div>
    </div>`
    const payAll=document.querySelector(`.shop`)
    if(idOfCard!=false){
        payAll.insertAdjacentHTML(`afterbegin`,htmlOfCard)
    }
    }
    console.log(idOfShop);      
    
})
