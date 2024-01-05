let selecte1 = document.querySelector('#selecte1');
let titre = document.querySelector('#titre');
let description = document.querySelector('#description');
let selecte2 = document.querySelector('#selecte2');
let date = document.querySelector('#date');
let statut = document.querySelector('.statut')
let ajouter = document.querySelector('.ajouter');
let update = document.querySelector('.update');
let lesTr = document.querySelector('.lesTr');
let delit = document.querySelector('.delit');
let edit = document.querySelector('.edit');
let eye = document.querySelector('.eye');
let diva = document.querySelector('.diva');

let tableau = JSON.parse(localStorage.getItem('tableau')) || [];
let indes = 1;
let myNewChart;


const stripes = document.querySelectorAll('.stripe');
stripes.forEach((stripe, intex) =>{
    if (intex % 2 !== 0) {
        stripe.style.backgroundColor = 'green'
    }
})

const upDateChart = () =>{

  let nouveau, enCours, terminer ;
  nouveau = local.filter(Objet =>Objet.statut ==='Nouveau').length;
  enCours = local.filter(Objet =>Objet.statut ==='En cours').length;
  terminer = local.filter(Objet =>Objet.statut ==='Terminer').length;
 

    const ctx = document.getElementById('myChart');
    myNewChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [{
        data: [nouveau, enCours, terminer], 
        backgroundColor: ['red', 'green', 'blue'], 
        borderWidth: 1
      }]
    },
    options:{
      circumference: 360,
      cutout: 0,
    },
  });

  myNewChart.update();
}



document.addEventListener('DOMContentLoaded', () =>{
  afficheLes()
})
const afficheLes = () =>{
  lesTr.innerHTML = "";
    tableau.forEach((elemt, index) =>{
      lesTr.innerHTML += ` <tr class="stripe"> 
      <td>${elemt.id}</td>
      <td>${elemt.date}</td>
      <td>${elemt.titre}</td>
      <td>${elemt.selecte1}</td> 
      <td> <button class="eye"> <i class="fa-solid fa-eye"  onclick="visualItem()"  style="color: #032662;"></i>  </button>
      <button class="edit" onclick="editeItem(${index})"> <i class="fa-regular fa-pen-to-square"  style="color: #011d02;"></i> </button>                     
      <button class="delit"> <i class="fa-solid fa-trash" onclick="deleteItem(${index})" style="color: #9c040b;"></i></td> </button>
      </tr>`
    })

   
} 

const visualItem = () =>{
  diva.innerHTML +=`
  `

}

// edit.addEventListener('click', ()=>{
  
// })
const editeItem = (index) =>{
  update.style.display = "block"
  ajouter.style.display = "none"
  

  selecte1.value = tableau[index].selecte1;
  titre.value = tableau[index].titre;
  description.value = tableau[index].description;
  date.value = tableau[index].date;
  selecte2.value = tableau[index].statut;



 update.addEventListener('click', () =>{
  update.style.display = "none"
  ajouter.style.display = "block"

  tableau[index].selecte1 = selecte1.value;
  tableau[index].titre = titre.value;
  tableau[index].description = description.value;
  tableau[index].date = date.value;
  tableau[index].statut = selecte2.value;

  let Objet = {
    id : indes,
    date : date.value,
    titre : titre.value,
    selecte1 : selecte1.value,
    statut : selecte2.value,
    description : description.value
  }
  tableau.push(Objet)
  indes ++
  localStorage.setItem('local', JSON.stringify(tableau));
  afficheLes();
  selecte1.value ="";
  titre.value ="";
  description.value ="";
  selecte2.value ="";
  date.value ="";
  selecte1.value ="";
})
 upDateChart();
}
function miseAjour(id) {
 
  // tableau.push(Objet)
  // let index = tableau.findIndex(rec => rec.id === id)
  // tableau[index] = {id, date, titre, selecte1, statut, description}

  // afficheLes();
}  


// const deleteItem = (id) =>{
//   tableau = tableau.filter(rec => rec.id !== id);
//   afficheLes()
// }
const deleteItem = (index) => {
  // 1. Filtrer le tableau en mémoire

 tableau.splice(index, 1)
 localStorage.setItem('tableau', tableau)
 afficheLes()

  // 2. Mettre à jour le tableau en mémoire
 

  // 3. Afficher le tableau mis à jour
  upDateChart();
};

const letableau = () =>{
  
}
function getToLocal() {
  
}


ajouter.addEventListener('click', () =>{
  if (selecte1.value === "" ) {
   alert('categorie is required')
  } else if (titre.value === "") {
    alert('titre is required')
  } else if (description.value === "") {
    alert('description is required')
  } else if (date.value === "") {
    alert('date is required')
  } else if (selecte2.value === "") {
    alert('selecte2 is required')
  } else{

    let Objet = {
      id : indes ++,
      date : date.value,
      titre : titre.value,
      selecte1 : selecte1.value,
      statut : selecte2.value,
      description : description.value
    }
  
    tableau.push(Objet)
    localStorage.setItem('tableau', JSON.stringify(tableau));
    afficheLes();
    upDateChart();
   
  }
  selecte1.value ="";
  titre.value ="";
  description.value ="";
  selecte2.value ="";
  date.value ="";
  selecte1.value ="";
 
})
  

