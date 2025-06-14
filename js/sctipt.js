//card
//   const Array=[
//         {img:"images/person1.jpg",name:"Susan smith",jop:"lead writer",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam facilis eum labore quae accusamus?"},
//         {img:"images/person2.jpg",name:"smith",jop:"lead writer",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam facilis eum labore quae accusamus?"},
//         {img:"images/person3.jpg",name:"Habib smith",jop:"lead writer",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam facilis eum labore quae accusamus?"},
//         {img:"images/person4.jpg",name:"Smith",jop:"lead writer",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam facilis eum labore quae accusamus?"}
//     ]
//     for (const i = 0; i <= 4; i++) {
//         for (const item of Array) {
//         const col = document.getElementById("Authors");
//         col.innerHTML += `
//           <div class="card mb-2" style="width: 18rem;">
//             <img src="${item.img}" alt="img" class="card-img rounded-circle w-50 m-auto">
//             <div class="card-body text-center">
//               <h2>${item.name}</h2>
//               <p class="lead text-secondary fw-bold">${item.jop}</p>
//               <p>${item.content}</p>
//               <div class="d-flex justify-content-evenly">
//                 <i class="fab fa-facebook"></i>
//                 <i class="fab fa-twitter"></i>
//                 <i class="fab fa-instagram"></i>
//               </div>
//             </div>
//           </div>
//     `;
//   }
// }

 const Array = [
        { img: "images/person1.jpg", name: "Susan smith", jop: "lead writer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam facilis eum labore quae accusamus?" },
        { img: "images/person2.jpg", name: "smith", jop: "lead writer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam facilis eum labore quae accusamus?" },
        { img: "images/person3.jpg", name: "Habib smith", jop: "lead writer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam facilis eum labore quae accusamus?" },
        { img: "images/person4.jpg", name: "Smith", jop: "lead writer", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam facilis eum labore quae accusamus?" }
    ];

    for (const i = 0; i < Array.length; i++) {
        const col = document.getElementById("Authors");
        for (const item of Array){
        col.innerHTML += `
         <div class="row d-flex">
            <div class="col-lg-3" >
                 <div class="card mb-2 mx-1" style="width: 18rem;">
            <img src="${item.img}" alt="img" class="card-img rounded-circle w-50 m-auto">
            <div class="card-body text-center">
              <h2>${item.name}</h2>
              <p class="lead text-secondary fw-bold">${item.jop}</p>
              <p>${item.content}</p>
              <div class="d-flex justify-content-evenly">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          </div>
            </div>
        </div>
        `;
    }
}

//subnit
// const button= document.getElementById("button");
// button.addEventListener("submit",e=>{
//  e.preventDefault();
// })
function btn(){
     const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
     if (name === "" || email === "") {
        alert("please fill all the fields");
    }else if(email.indexOf ("@") === -1 || email.indexOf (".") === -1 || email.length < 6 ){
        const messageemail= document.createElement("div");
        messageemail.className="alert alert-danger mt-1";
        messageemail.textContent="Please check your email address";
        document.getElementById("emaiL").appendChild(messageemail); 
    }else if(name.length < 3){
        const messageName= document.createElement("div");
        messageName.className="alert alert-danger mt-1";
        messageName.textContent="Please fill valid name";
        document.getElementById("namE").appendChild(messageName);
    }else{
      alert("Thanks")
    }
}