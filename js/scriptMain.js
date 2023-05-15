
fetch(`    https://perenual.com/api/species-list?page=1&key=sk-5hvH645e1ac7733df904`).then(response => response.json())
.then(data => {
    const nameOfFlawerHTML=document.querySelectorAll(`.nameOfFlawor`)
    const imgOfFlawerHTML = document.querySelectorAll(`.imgOfFlaw`)
    const cardShop=document.querySelector(`.sectionShop--flowers`)
    let listOfId=[]
    for(let i = 0 ;i<16;i++){
        const nameOfFlawer = data.data[i].common_name
        const imgOfFlawer=data.data[i].default_image.medium_url
        nameOfFlawerHTML[i].innerHTML=nameOfFlawer
        imgOfFlawerHTML[i].src=imgOfFlawer
        console.log(data.data[i]);
    }
    cardShop.addEventListener(`click`,(e)=>{
        let idOfCard=+e.target.id
        listOfId.push(+e.target.id)
        if(idOfCard != false){
           console.log(idOfCard); 
           console.log(data.data[idOfCard-1]);
        }
        localStorage.setItem(`id`,JSON.stringify(listOfId))
        console.log(listOfId);
        
    })
})
