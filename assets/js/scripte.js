const quill1 = new Quill('#editor', {
    theme: 'snow'
  });
  const quill2 = new Quill('#autreEditor', {
    theme: 'snow'
  });
  
  //les fonction pour gerer Cv

  // Variables pour suivre l'état du formulaire
let currentStep = 1;  // Etape actuelle, commence à 1
const totalSteps = 9; // Total des étapes

// Sélectionner tous les éléments d'étape et les boutons nécessaires
const steps = Array.from(document.querySelectorAll("section[id^='step']")); // Les sections d'étapes
const progressBar = document.getElementById("progress-bar"); // Barre de progression

// Fonction pour afficher l'étape actuelle et masquer les autres
function showStep(step) {
  steps.forEach((section, index) => {
    // Affiche uniquement l'étape en cours et masque les autres
    section.style.display = index + 1 === step ? "block" : "none";
  });

  // Mise à jour de la barre de progression
  const progressPercent = ((step - 1) / (totalSteps - 1)) * 100;
  progressBar.style.width = progressPercent + "%";
}

// Fonction pour passer à l'étape suivante
function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    showStep(currentStep);
  }
}

// Fonction pour revenir à l'étape précédente
function previousStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

// Ajouter les evenements aux boutons Suivant et Précédent
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", event => {
    const buttonText = event.target.textContent.toLowerCase();

    // Gérer l'action basée sur le texte du bouton
    if (buttonText === "suivant") {
      nextStep();
    } else if (buttonText === "précédent") {
      previousStep();
    }
  });
});


// ajouter d'autre competences techniques 
let counterCompetenceTechniques = 1; 
const addCompetenceTechniques = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`<br>
     <fieldset class="border border-gray-300 p-4 rounded-md">
    <input type="text" id="hardSkills${counterCompetenceTechniques}" class="w-full px-4 py-2 border rounded" placeholder="Compétence technique">
    <fieldset>
    <button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteCompetenceTechniques(this)">Supprimer</button>
  `;
  document.getElementById('parent-compTechniques').appendChild(formContainer);
  counterCompetenceTechniques++;

}
//supprimer conmpetence techniques ajouter

const deleteCompetenceTechniques = (button) =>{
    const formContainer = button.parentElement
    formContainer.remove();
}
// ajouter d'autre competences interpersonnelles

let counterCompetenceInterpersonnelles = 1; 
const addCompetenceInterpersonnelles = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`<br>
     <fieldset class="border border-gray-300 p-4 rounded-md">
    <input type="text" id="softSkills${counterCompetenceInterpersonnelles}" class="w-full px-4 py-2 border rounded" placeholder="Compétence interpersonnelle">
    <fieldset>
    <button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteCompetenceInterpersonnelles(this)">Supprimer</button>
  `;
  document.getElementById('parent-compInterpersonnelles').appendChild(formContainer);
  counterCompetenceInterpersonnelles++;

}
// supprimer competences interpersonnelles ajouter

const deleteCompetenceInterpersonnelles = (button) =>{
    const formContainer = button.parentElement
    formContainer.remove();
}

// ajouter d'autre langues et l'autre niveau

let counterLangues = 2; 

const addLanguesNiveau = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= " flex space-y-2";

  formContainer.innerHTML=`
     
    
    <div class="flex space-x-2">
            <input type="text" id="languages${counterLangues}" placeholder="Langue" class="w-1/2 px-4 py-2 border rounded">
            <input type="text" id="niveau${counterLangues}" placeholder="Niveau" class="w-1/2 px-4 py-2 border rounded"></<div>
        
   
<button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteLanguesNiveau(this)">Supprimer</button> 
 `;
  document.getElementById('parent-langues').appendChild(formContainer);
  counterLangues++;

}
// supprimer langues et niveau ajouter

function deleteLanguesNiveau(button) {
  const formContainer = button.parentElement;
  formContainer.remove();
}

//ajouter autre loisirs
let counterLoisir = 1; 
const addLoisir = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`<br>
     <fieldset class="border border-gray-300 p-4 rounded-md">
     <div class="space-y-2">
      <input  id="loisir${counterLoisir}" type="text" placeholder="Loisir ou intérêt" class="w-full px-4 py-2 border rounded">
     </div>
     </fieldset><br>

    <button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteLoisir(this)">Supprimer</button>
  `;
  document.getElementById('parent-loisir').appendChild(formContainer);
  counterLoisir++;

}
// supprimer loisirs ajouter

const deleteLoisir = (button) =>{
    const formContainer = button.parentElement
    formContainer.remove();
}


// ajouter autre formation 
let counterFormation = 1; 
const addFormation = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`<br>
     <fieldset class="border border-gray-300 p-4 rounded-md">
      <div class="space-y-2">
            <input id="etablissements${counterFormation}" type="text" placeholder="Nom de l'établissement" class="w-full px-4 py-2 border rounded">
            <input id="diplome${counterFormation}" type="text" placeholder="Diplôme" class="w-full px-4 py-2 border rounded">
            <input id="anneDebut${counterFormation}" type="text" placeholder="Année de début" class="w-full px-4 py-2 border rounded">
            <input id="anneFin${counterFormation}" type="text" placeholder="Année de fin" class="w-full px-4 py-2 border rounded">
          </div>
           <br>
    <button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteFormation (this)">Supprimer</button>
    </fieldset>
  `;
  document.getElementById('parent-education').appendChild(formContainer);
  counterFormation++;

}
// supprimer formation ajouter

const deleteFormation = (button) =>{
    const formContainer = button.parentElement
    formContainer.remove();
}

//ajouter autre Experiences professionnelles
let counterExperiences  = 1; 
const addExperiences = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`<br>
     <fieldset class="border border-gray-300 p-4 rounded-md">
      <div class="space-y-2">
            <input id="workExperienceNom${counterExperiences}"  type="text" placeholder="Nom de l'entreprise" class="w-full px-4 py-2 border rounded">
            <input id="workExperiencePoste${counterExperiences}" type="text" placeholder="Poste occupé" class="w-full px-4 py-2 border rounded">
            <input id="workExperienceDateDebut${counterExperiences}" type="text" placeholder="Date de début" class="w-full px-4 py-2 border rounded">
            <input id="workExperienceDateFin${counterExperiences}" type="text" placeholder="Date de fin" class="w-full px-4 py-2 border rounded">
            <div id="autreEditor${counterExperiences}"  placeholder="Description du poste" class="w-full px-4 py-2 border border-gray-300 rounded-lg">

            </div>
           <br>

    <button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteExperiences(this)">Supprimer</button>
    </fieldset>
  `;
  const quillEditorId = `#autreEditor${counterExperiences}`;
  new Quill(quillEditorId, {
  theme: 'snow'
});

  document.getElementById('parent-Experience').appendChild(formContainer);
  counterExperiences++;

}

// supprimer Experiences professionnelles ajouter

const deleteExperiences = (button) =>{
    const formContainer = button.parentElement
    formContainer.remove();
}


//ajouter autre certification
let counterCertification = 1; 
const addCertification = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`<br>
     <fieldset class="border border-gray-300 p-4 rounded-md"> 
     <div class="space-y-2">
            <input id="certificationsNom${counterCertification}" type="text" placeholder="Nom de la certification" class="w-full px-4 py-2 border rounded">
            <input id="certificationsLien${counterCertification}" type="url" placeholder="Lien vers la certification" class="w-full px-4 py-2 border rounded">
          </div>
    <br>
    <button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteCertification (this)">Supprimer</button>
    </fieldset>
  `;
  document.getElementById('parent-certification').appendChild(formContainer);
  counterCertification++;

}
// supprimer certification ajouter

const deleteCertification = (button) =>{
    const formContainer = button.parentElement
    formContainer.remove();
}

  


// Initialiser le formulaire avec la premiere etape
showStep(currentStep);
 
document.addEventListener("DOMContentLoaded", function () {
  const model1 = document.getElementById("model1");
  const model2 = document.getElementById("model2");
  const model1Display = document.getElementById("model1Display");
  const model2Display = document.getElementById("model2Display");
  const downloadBtn1 = document.getElementById("downloadBtn1");
  const downloadBtn2 = document.getElementById("downloadBtn2");

  // Recuperer les valeurs des champs de chaque etape
  
  function gatherFormData() {
      return  {
          name: document.getElementById("name").value,
          photo: document.getElementById("photo").src,//imageDsp.src = ofEvent.target.result;
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          address: document.getElementById("address").value,
          linkedin: document.getElementById("linkedin").value,
          github: document.getElementById("github").value,
          portfolio: document.getElementById("portfolio").value,
          titrePoste: document.getElementById("titrePoste").value,
          resumeProfil: quill1.root.innerHTML,
          competenceHardSkills: document.getElementById("hardSkills").value,
          competenceSoftSkills: document.getElementById("softSkills").value,
          languages: document.getElementById("languages").value,
          niveau: document.getElementById("niveau").value,
          loisir: document.getElementById("loisir").value,
          etablissements: document.getElementById("etablissements").value,
          diplome: document.getElementById("diplome").value,
          anneDebut: document.getElementById("anneDebut").value,
          anneFin: document.getElementById("anneFin").value,
          workExperienceNom: document.getElementById("workExperienceNom").value,
          workExperiencePoste: document.getElementById("workExperiencePoste").value,
          workExperienceDateDebut: document.getElementById("workExperienceDateDebut").value,
          workExperienceDateFin: document.getElementById("workExperienceDateFin").value,
          workExperienceDescription: quill2.root.innerHTML,
          certificationsNom: document.getElementById("certificationsNom").value,
          certificationsLien: document.getElementById("certificationsLien").value,
          
          
          
      };
  }
  
  // Affiche les donnes pour le Modele 1
  function displayModel1Data(data) {
      model1Display.innerHTML = `
Nom complet: ${data.name}<br>
photo:${data.photo}<br>
Email: ${data.email}<br>
Téléphone: ${data.phone}<br>
Adresse: ${data.address}<br>
LinkedIn: ${data.linkedin}<br>
GitHub: ${data.github}<br>
Portfolio: ${data.portfolio}<br>
titrePoste: ${data.titrePoste}<br>
resumeProfil: ${data.resumeProfil}<br>
competenceHardSkills: ${data.competenceHardSkills}<br>
competenceSoftSkills: ${data.competenceSoftSkills}<br>
languages: ${data.languages}<br>
niveau: ${data.niveau}<br>
loisir: ${data.loisir}<br>
etablissements: ${data.etablissements}<br>
diplome: ${data.diplome}<br>
anneDebut: ${data.anneDebut}<br>
anneFin: ${data.anneFin}<br>
workExperienceNom: ${data.workExperienceNom}<br>
workExperiencePoste: ${data.workExperiencePoste}<br>
workExperienceDateDebut: ${data.workExperienceDateDebut}<br>
workExperienceDateFin: ${data.workExperienceDateFin}<br>
workExperienceDescription: ${data.workExperienceDescription}<br>
certificationsNom: ${data.certificationsNom}<br>
certificationsLien: ${data.certificationsLien}<br>
    

      `;
      model1Display.classList.remove("hidden");
      model2Display.classList.add("hidden");
      downloadBtn1.classList.remove("hidden");
      downloadBtn2.classList.add("hidden");
  }

  // Affiche les données pour le Modèle 2
  function displayModel2Data(data) {
      model2Display.innerHTML = `
<h2>CV de ${data.name}</h2>
<ul>
  <li><strong>Email :</strong> ${data.email}</li>
  <li><strong>Téléphone :</strong> ${data.phone}</li>
  <li><strong>Adresse :</strong> ${data.address}</li>
  <li><strong>LinkedIn :</strong> ${data.linkedin}</li>
  <li><strong>GitHub :</strong> ${data.github}</li>
  <li><strong>Portfolio :</strong> ${data.portfolio}</li>
  <li><strong>Titre du poste :</strong> ${data.jobTitle}</li>
  <li><strong>Résumé de profil :</strong> ${data.profileSummary}</li>
</ul>
      `;
      model2Display.classList.remove("hidden");
      model1Display.classList.add("hidden");
      downloadBtn2.classList.remove("hidden");
      downloadBtn1.classList.add("hidden");
  }

  // Afficher les donnees pour le modele clicker
  model1.addEventListener("change", function () {
      if (model1.checked) {
          const data = gatherFormData();
          displayModel1Data(data);
      }
  });

  model2.addEventListener("change", function () {
      if (model2.checked) {
          const data = gatherFormData();
          displayModel2Data(data);
      }
  });

  // Telechargement en PDF pour Modele 1
  downloadBtn1.addEventListener("click", function () {
      const options = {
          margin: 0.5,
          filename: 'CV_Model1.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().set(options).from(model1Display).save();
  });

  // Telechargement en PDF pour Modele 2
  downloadBtn2.addEventListener("click",   function () {
      const options = {
          margin: 0.5,
          filename: 'CV_Model2.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().set(options).from(model2Display).save();
  });
});
 
