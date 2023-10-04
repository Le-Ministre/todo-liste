let selecte1 = document.querySelector('#slecte1');
let titre = document.querySelector('#titre');
let description = document.querySelector('#description');
let slecte2 = document.querySelector('#slecte2');
let date = document.querySelector('#date');
let ajouter = document.querySelector('.ajouter');
let lesTr = document.querySelector('.lesTr');
let tableau = [];
let index = 1;
let myNewChart;


const stripes = document.querySelectorAll('.stripe');
stripes.forEach((stripe, intex) =>{
    if (intex % 2 !== 0) {
        stripe.style.backgroundColor = 'green'
    }
})

const upDateChart = () =>{
  let nouveau, enCours, terminer ;
  nouveau = tableau.filter(Objet =>Objet.statut ==='Nouveau').length;
  enCours = tableau.filter(Objet =>Objet.statut ==='En cours').length;
  terminer = tableau.filter(Objet =>Objet.statut ==='Terminer').length;
 

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
  afficheLes();
})
const afficheLes = () =>{
  lesTr.innerHTML = '';

    tableau.forEach(elemt =>{
      lesTr.innerHTML += ` <tr class="stripe"> 
      <td>${elemt.id}</td>
      <td>${elemt.date}</td>
      <td>${elemt.titre}</td>
      <td>${elemt.categorie}</td> 
      <td> <button class="eye"> <i class="fa-solid fa-eye"  style="color: #032662;"></i>  </button>
      <button class="edit"> <i class="fa-regular fa-pen-to-square"  style="color: #011d02;"></i> </button>                     
      <button class="delit"> <i class="fa-solid fa-trash"  style="color: #9c040b;"></i></td> </button>
      </tr>`
    })
   
} 


const letableau = () =>{
  let Objet = {
    id : index,
    date : date.value,
    titre : titre.value,
    categorie : selecte1.value,
    statut : slecte2.value
  }

  tableau.push(Objet)
  index ++
  localStorage.setItem('tableau', JSON.stringify(tableau));
  tableau = JSON.parse(localStorage.getItem('tableau'));
  console.log(lesTr);

}


ajouter.addEventListener('click', (e) =>{
  e.preventDefault();
  letableau();
  afficheLes();
  upDateChart();
})
  
