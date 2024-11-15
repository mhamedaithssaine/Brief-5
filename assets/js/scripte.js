// c'est pour le quill a la place de text aireait
const quill1 = new Quill('#editor', {
    theme: 'snow'
  });
  const quill2 = new Quill('#autreEditor', {
    theme: 'snow'
  });
  
  //les fonction pour gerer Cv

  // Variables pour suivre l'etat du formulaire
let currentStep = 1;  // Etape actuelle, commence à 1
const totalSteps = 9; // Total des étapes

// Selectionner tous les elements d'etape et les boutons necessaires
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

  formContainer.innerHTML=`
     <fieldset class="border border-gray-300 p-4 rounded-md">
    <input type="text" id="hardSkills${counterCompetenceTechniques}" class="competence-technique-input w-full px-4 py-2 border rounded" placeholder="Compétence technique"><br>
    <button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteCompetenceTechniques(this)">Supprimer</button>
    
    </fieldset>
    
  `;
  document.getElementById('parent-compTechniques').appendChild(formContainer);
  counterCompetenceTechniques++;

}

//supprimer conmpetence techniques ajouter

const deleteCompetenceTechniques = (button) =>{
    const formContainer = button.parentElement
    formContainer.remove();
}


// Fonction pour recuperer les donnees des competences techniques ajoutees
const getCompetencesTechniques = () => {
  const competencesTechniques = [];
  const inputs = document.querySelectorAll(".competence-technique-input");

  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      competencesTechniques.push(input.value.trim());
    }

    
  });

  return competencesTechniques;
  
}

//  pour stocker la recuperation des competences techniques
document.getElementById('getValuesButton').addEventListener('click', () => {
  const competencesTechniques = getCompetencesTechniques();
  console.log("Compétences techniques :", competencesTechniques);// hada ghanhto f innerHTML F CV 
});



// ajouter d'autre competences interpersonnelles

let counterCompetenceInterpersonnelles = 1; 
const addCompetenceInterpersonnelles = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`
     <fieldset class="border border-gray-300 p-4 rounded-md">
    <input type="text" id="softSkills${counterCompetenceInterpersonnelles}" class="competence-interpersonnelles-input w-full px-4 py-2 border rounded" placeholder="Compétence interpersonnelle"><br>
    <button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteCompetenceInterpersonnelles(this)">Supprimer</button>
    <fieldset>
    
  `;
  document.getElementById('parent-compInterpersonnelles').appendChild(formContainer);
  counterCompetenceInterpersonnelles++;

}
// supprimer competences interpersonnelles ajouter

const deleteCompetenceInterpersonnelles = (button) =>{
    const formContainer = button.parentElement
    
    formContainer.remove();
}

// Fonction pour recuperer les donnees des competences interpersonnelles ajoutes
const getCompetenceInterpersonnelles= () => {
  const competenceInterpersonnelles = [];
  const inputs = document.querySelectorAll(".competence-interpersonnelles-input");

  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      competenceInterpersonnelles.push(input.value.trim());
    }
  });
  

  return competenceInterpersonnelles;
  
 
    
    
}

//  pour stocker la recuperation des competences interpersonnelles
document.getElementById('getValueInterpersonnelles').addEventListener('click', () => {
  const competenceInterpersonnelles = getCompetenceInterpersonnelles();
  console.log("Compétences techniques :", competenceInterpersonnelles);// hada ghanhto f innerHTML F CV 
});


// ajouter d'autre langues et l'autre niveau

let counterLangues = 2; 

const addLanguesNiveau = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`
     
    <fieldset class="border border-gray-300 p-4 rounded-md">
    <div class="flex space-x-2">
            <input type="text" id="languages${counterLangues}" placeholder="Langue" class="langues-niveau-input w-1/2 px-4 py-2 border rounded">
            <input type="text" id="niveau${counterLangues}" placeholder="Niveau" class="langues-niveau-input w-1/2 px-4 py-2 border rounded">
            </div>
            <br>
<button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteLanguesNiveau(this)">Supprimer</button> 
</fieldset>
 `;
  document.getElementById('parent-langues').appendChild(formContainer);
  counterLangues++;

}
// supprimer langues et niveau ajouter

function deleteLanguesNiveau(button) {
  const formContainer = button.parentElement;
  formContainer.remove();
}

// Fonction pour recuperer les donnees du langue et niveau ajoutes
const getLanguesNiveau= () => {
  const languesNiveau = [];
  const inputs = document.querySelectorAll(".langues-niveau-input");

  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      languesNiveau.push(input.value.trim());
    }
  });
  

  return languesNiveau;
  
 
    
    
}

//  pour stocker la recuperation du langue et niveau
document.getElementById('getLanguesNiveau').addEventListener('click', () => {
  const languesNiveau = getLanguesNiveau();
  console.log("Compétences techniques :", languesNiveau);// hada ghanhto f innerHTML F CV 
});


//ajouter autre loisirs
let counterLoisir = 1; 
const addLoisir = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`
     <fieldset class="border border-gray-300 p-4 rounded-md">
     <div class="space-y-2">
      <input  id="loisir${counterLoisir}" type="text" placeholder="Loisir ou intérêt" class="loisir-input w-full px-4 py-2 border rounded">
     </div><br>
     <button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteLoisir(this)">Supprimer</button>
     </fieldset><br>

    
  `;
  document.getElementById('parent-loisir').appendChild(formContainer);
  counterLoisir++;

}
// supprimer loisirs ajouter

const deleteLoisir = (button) =>{
    const formContainer = button.parentElement
    formContainer.remove();
}

// Fonction pour recuperer les donnees du loisir  ajoute
const getLoisir= () => {
  const loisir = [];
  const inputs = document.querySelectorAll(".loisir-input");

  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      loisir.push(input.value.trim());
    }
  });
  

  return loisir;
  
 
    
    
}

//  pour stocker la recuperation du loisir
document.getElementById('getLoisir').addEventListener('click', () => {
  const loisir = getLoisir();
  console.log("Compétences techniques :", loisir);// hada ghanhto f innerHTML F CV 
});



// ajouter autre formation 
let counterFormation = 1; 
const addFormation = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`
     <fieldset class="border border-gray-300 p-4 rounded-md">
      <div class="space-y-2">
            <input id="etablissements${counterFormation}" type="text" placeholder="Nom de l'établissement" class="formation-input w-full px-4 py-2 border rounded">
            <input id="diplome${counterFormation}" type="text" placeholder="Diplôme" class="formation-input w-full px-4 py-2 border rounded">
            <input id="anneDebut${counterFormation}" type="text" placeholder="Année de début" class="formation-input px-4 py-2 border rounded">
            <input id="anneFin${counterFormation}" type="text" placeholder="Année de fin" class="formation-input w-full px-4 py-2 border rounded">
          </div>
           <br>
    <button  class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteFormation(this)">Supprimer</button>
    </fieldset><br>
  `;
  document.getElementById('parent-education').appendChild(formContainer);
  counterFormation++;

}
// supprimer formation ajouter

const deleteFormation = (button) =>{
    const formContainer = button.parentElement
    formContainer.remove();
}

// Fonction pour recuperer les donnees du formation ajoutes                                  
const getFormation= () => {
  const formation = [];
  const inputs = document.querySelectorAll(".formation-input");

  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      formation.push(input.value.trim());
    }
  });
  

  return formation;
  
 
    
    
}

//  pour stocker la recuperation du formation
document.getElementById('getFormation').addEventListener('click', () => {
  const formation = getFormation();
  console.log("Compétences techniques :", formation);// hada ghanhto f innerHTML F CV 
});


//ajouter autre Experiences professionnelles

let counterExperience = 1; 
const addExperiences = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`
     <fieldset class="border border-gray-300 p-4 rounded-md">
     <div class="space-y-2">
           
            <input id="workExperienceNom${counterExperience}"  type="text" placeholder="Nom de l'entreprise" class="experience-input w-full px-4 py-2 border rounded">
            <input id="workExperiencePoste${counterExperience}" type="text" placeholder="Poste occupé" class="experience-input w-full px-4 py-2 border rounded">
            <input id="workExperienceDateDebut${counterExperience}" type="text" placeholder="Date de début" class="experience-input w-full px-4 py-2 border rounded">
            <input id="workExperienceDateFin${counterExperience}" type="text" placeholder="Date de fin" class="experience-input w-full px-4 py-2 border rounded">
            <div id="autreEditor${counterExperience}"  placeholder="Description du poste" class=" w-full px-4 py-2 border border-gray-300 rounded-lg">
            </div>
           <br>
    <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onclick="deleteExperience(this)">Supprimer</button>
    </fieldset><br>
  `;
   
//   const quillEditorId = `#autreEditor${counterExperiences}`;
//   new Quill(quillEditorId, {
//   theme: 'snow'
// });

  document.getElementById('parent-Experience').appendChild(formContainer);
  counterExperience++;

}
// supprimer Experiences professionnelles ajouter
const deleteExperience = (button) =>{
  const formContainer = button.parentElement
  formContainer.remove();
}

// Fonction pour recuperer les donnees desv Experiences professionnelles ajoutes                                  
const getExperience= () => {
  const experience = [];
  const inputs = document.querySelectorAll(".experience-input");


  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      experience.push(input.value.trim());
    }
  });
  
  const autreEditor = quill2.root.innerHTML;
  experience.push(autreEditor);


  return experience;
  
}

//  pour stocker la recuperation des Experiences professionnelles
document.getElementById('addExperience').addEventListener('click', () => {

  const experience = getExperience();
  console.log("experience :", experience);// hada ghanhto f innerHTML F CV 
});



//ajouter autre certification
let counterCertification = 1; 
const addCertification = () =>{
  
  const formContainer = document.createElement("div");
  formContainer.className= "space-y-2";

  formContainer.innerHTML=`
     <fieldset class="border border-gray-300 p-4 rounded-md"> 
     <div class="space-y-2">
            <input id="certificationsNom${counterCertification}" type="text" placeholder="Nom de la certification" class="certification-input w-full px-4 py-2 border rounded">
            <input id="certificationsLien${counterCertification}" type="url" placeholder="Lien vers la certification" class="certification-input w-full px-4 py-2 border rounded">
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

  // Fonction pour recuperer les donnees des certification ajoutes                                  
const getCertifictaion= () => {
  const certification = [];
  const inputs = document.querySelectorAll(".certification-input");

  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      certification.push(input.value.trim());
    }
  });
  

  return certification;
  
}

//  pour stocker la recuperation des certification
document.getElementById('addCertification1').addEventListener('click', () => {
  
  const certification1 = getCertifictaion();
  console.log("certification :", certification1);// hada ghanhto f innerHTML F CV 
});






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
    return {
        // Informations personnelles
        name: document.getElementById("name").value,
        // photo: document.getElementById("photo").src, // URL de l'image chargée
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        linkedin: document.getElementById("linkedin").value,
        github: document.getElementById("github").value,
        portfolio: document.getElementById("portfolio").value,
        titrePoste: document.getElementById("titrePoste").value,
        resumeProfil: quill1.root.innerHTML, 

        // Competences techniques et interpersonnelles
        competenceHardSkills: getCompetencesTechniques(), 
        competenceSoftSkills: getCompetenceInterpersonnelles(), 

        // Langues
        languages: getLanguesNiveau(), 

        // Loisirs
        loisir: getLoisir(),
        // Formations
        formations: getFormation(), 

        // Experiences professionnelles
        workExperiences: getExperience(), 
        // Certifications
        certifications: getCertifictaion()
        //////////photo
       
}
  }

  

  // Affiche les donnes pour le Modele 1
  function displayModel1Data(data) {
    // Construire les sections dynamiques pour chaque catégorie
    const competenceHardSkillsHTML = data.competenceHardSkills.map(skill => `<li>${skill}</li>`).join("");
    const competenceSoftSkillsHTML = data.competenceSoftSkills.map(skill => `<li>${skill}</li>`).join("");
    const languagesHTML = data.languages.map(lang => `<li>${lang}</li>`).join("");
    const loisirHTML = data.loisir.map(loisir => `<li>${loisir}</li>`).join("");
    const formationsHTML = data.formations.map(formation => `<li>${formation}</li>`).join("");
    const experiencesHTML = data.workExperiences.map(exp => `<li>${exp}</li>`).join("");
    const certificationsHTML = data.certifications.map(cert => `<li>${cert}</li>`).join("");
     // Gestion de l'image de profil
     let inputPhoto = '';
     const fileInput = document.querySelector('.image-upload').files[0];
     if (fileInput) {
         inputPhoto = URL.createObjectURL(fileInput);
     }
    // Afficher les données dans `model1Display`
    model1Display.innerHTML = `
       <body class="bg-gray-100 text-gray-800">
    <div class="max-w-4xl ml-0 bg-white shadow-lg rounded-lg p-6 mt-10">
        <!-- Informations personnelles -->
        <div class="text-center mb-8">
            ${inputPhoto ? `<img src="${inputPhoto}" alt="Profile" class="w-10 h-32 ml-0 rounded-full border-4 border-gray-300 shadow-md object-cover">` : '<p class="text-gray-500">Pas de photo sélectionnée</p>'}
            <h1 class="text-2xl font-bold mt-4">${data.name}</h1>
            <p class="text-sm text-gray-600">${data.titrePoste}</p>
            <div class="mt-4">
            <ul>
                <li><strong>Email :</strong> ${data.email}</li>
                <li><strong>Adresse :</strong> ${data.address}</li>
                <li><strong>LinkedIn :</strong> <a href="${data.linkedin}" target="_blank" class="text-blue-500">${data.linkedin}</a></li>
              <li><strong>Téléphone :</strong> ${data.phone}</li>
                <li><strong>GitHub :</strong> <a href="${data.github}" target="_blank" class="text-blue-500">${data.github}</a></li>
                <li><strong>Portfolio :</strong> <a href="${data.portfolio}" target="_blank" class="text-blue-500">${data.portfolio}</a></li>
                </ul>
            </div>
        </div>

        <!-- Résumé du profil -->
        <div class="mb-6">
            <h2 class="text-lg font-semibold border-b border-gray-300 pb-2">Résumé du profil</h2>
            <p class="mt-2">${data.resumeProfil}</p>
        </div>

        <!-- Compétences -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Compétences techniques -->
            <div>
                <h2 class="text-lg font-semibold border-b border-gray-300 pb-2">Compétences techniques</h2>
                <ul class="list-disc list-inside mt-2">
                    ${competenceHardSkillsHTML}
                </ul>
            </div>

            <!-- Compétences interpersonnelles -->
            <div>
                <h2 class="text-lg font-semibold border-b border-gray-300 pb-2">Compétences interpersonnelles</h2>
                <ul class="list-disc list-inside mt-2">
                    ${competenceSoftSkillsHTML}
                </ul>
            </div>
        </div>

        <!-- Langues et Loisirs -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Langues -->
            <div>
                <h2 class="text-lg font-semibold border-b border-gray-300 pb-2">Langues</h2>
                <ul class="list-disc list-inside mt-2">
                    ${languagesHTML}
                </ul>
            </div>

            <!-- Loisirs -->
            <div>
                <h2 class="text-lg font-semibold border-b border-gray-300 pb-2">Loisirs</h2>
                <ul class="list-disc list-inside mt-2">
                    ${loisirHTML}
                </ul>
            </div>
        </div>

        <!-- Formations -->
        <div class="mb-6">
            <h2 class="text-lg font-semibold border-b border-gray-300 pb-2">Formations</h2>
            <ul class="list-disc list-inside mt-2">
                ${formationsHTML}
            </ul>
        </div>

        <!-- Expériences professionnelles -->
        <div class="mb-6">
            <h2 class="text-lg font-semibold border-b border-gray-300 pb-2">Expériences professionnelles</h2>
            <ul class="list-disc list-inside mt-2">
                ${experiencesHTML}
            </ul>
        </div>

        <!-- Certifications -->
        <div>
            <h2 class="text-lg font-semibold border-b border-gray-300 pb-2">Certifications</h2>
            <ul class="list-disc list-inside mt-2">
                ${certificationsHTML}
            </ul>
        </div>
    </div>
</body>
    `;

    // Gestion de la visibilité
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
 
