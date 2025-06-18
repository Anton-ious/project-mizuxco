function btn(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
function btn2(){
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    })
}
//
const ArrAy=[
    {name: "sama jamilla",jop: "lotetrgmdfmf,mv,vm b,.xmbc,./xmzvl;mz;/vlcmv.,/xmzfdmvoclxvmklsklnknkjbbbbbbbbbbbbbbbbbbbbbbbbbbbb"},
    {name: "sama jamilla",jop: "lotetrgmdfmf,mv,vm b,.xmbc,./xmzvl;mz;/vlcmv.,/xmzfdmvoclxvmklsklnknkjbbbbbbbbbbbbbbbbbbbbbbbbbbbb"},
    {name: "sama jamilla",jop: "lotetrgmdfmf,mv,vm b,.xmbc,./xmzvl;mz;/vlcmv.,/xmzfdmvoclxvmklsklnknkjbbbbbbbbbbbbbbbbbbbbbbbbbbbb"},
    {name: "sama jamilla",jop: "lotetrgmdfmf,mv,vm b,.xmbc,./xmzvl;mz;/vlcmv.,/xmzfdmvoclxvmklsklnknkjbbbbbbbbbbbbbbbbbbbbbbbbbbbb"},
]
for (const b=0; b<5; b++){
    const Div = document.getElementById("c");
    for (const Item of ArrAy){
        Div.innerHTML +=`
        <div class="col-lg-3 col-md-6 mt-2">
                <div class="card text-center p-2 ">
                    <h2 class="text-primary">${Item.name}</h2>
                    <p class="text-secondary lead">${Item.jop}</p>
                </div>
            </div>
        `
    }
    
}
//

let a=[
    {name: "sama jamilla",jop: "leader",img: "images/person2.jpg",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut porro impedit nulla quod repellat. Quidem fugiat in deserunt soluta est!"},
    {name: "sama jamilla",jop: "leader",img: "images/person1.jpg",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut porro impedit nulla quod repellat. Quidem fugiat in deserunt soluta est!"},
    {name: "sama jamilla",jop: "leader",img: "images/person4.jpg",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut porro impedit nulla quod repellat. Quidem fugiat in deserunt soluta est!"},
    {name: "sama jamilla",jop: "leader",img: "images/person3.jpg",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut porro impedit nulla quod repellat. Quidem fugiat in deserunt soluta est!"},
]

for (const ic=0; ic<5 ; ic++){
    let s = document.getElementById("card");
    for (let i of a){
        s.innerHTML +=`
        <div class="col-lg-3 col-md-6 mt-2" >
        <div class="card">
        <div class="card-img d-flex justify-content-center">
                        <img src="${i.img}" alt="" class=" rounded-circle img-c w-50">
                    </div>
                    <div class="card-body text-center">
                        <h2 class="card-title">${i.name}</h2>
                        <h1 class="lead">${i.jop}</h1>
                        <p>${i.content}</p>
                        <div class="d-flex justify-content-around">
                        <i class="fab fa-facebook fa-2x"></i>
                        <i class="fab fa-whatsapp fa-2x"></i>
                        <i class="fab fa-twitter fa-2x"></i>
                        </div>
                        </div>
                        </div>
        </div>
        `
    }

}

//
// window.addEventListener('load', () => {
//   const visitor = "visitor count"
//   let visitorcount = parseInt(localStorage.getItem(visitor)) || 0;
//   visitorcount++;
//   localStorage.setItem(visitor, visitorcount)
//   document.getElementById("storage").textContent = `Number of visitor is: ${visitorcount}`
// })

