class Animals {
  animalName;
  animalAge;
  owner;
  phoneNumber;
  animalPhoto;
  gender;

  constructor(animalName, animalAge, owner, phoneNumber, animalPhoto, gender) {
    this.animalName = animalName;
    this.animalAge = animalAge;
    this.owner = owner;
    this.phoneNumber = phoneNumber;
    this.animalPhoto = animalPhoto;
    this.gender = gender;
  }
}

class ViewController {
  getAnimalCardHtml(animal) {
    return `<div class="card" style="width: 18rem;">
                      <img src="${animal.animalPhoto}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${animal.animalName}</h5>
                      </div>
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item"><b>Age : </b> ${animal.animalAge}</li>
                          <li class="list-group-item"><b>Gender : </b> ${animal.gender}</li>
                          <li class="list-group-item"><b>Phone Number : </b> ${animal.phoneNumber}</li>
                          <li class="list-group-item"><b>Owner : </b> ${animal.owner}</li>
                      </ul>
                  </div>`;
  }

  insertAnimalOnView(animal) {
    animalCardArea.innerHTML += this.getAnimalCardHtml(animal);
  }
}

const animalName = document.querySelector("#animalName");
const animalAge = document.querySelector("#animalAge");
const owner = document.querySelector("#owner");
const phoneNumber = document.querySelector("#phoneNumber");
const animalPhoto = document.querySelector("#animalPhoto");
const gender = document.querySelector("#gender");
const allInputs = document.querySelectorAll(".form-control");
const showAnimalsBtn = document.querySelector("#showAnimals");
const saveAnimalsBtn = document.querySelector("#saveAnimals");
const animalCardArea = document.querySelector(".animal-cards");
var animalCollection = [];
var viewController = new ViewController();

function clearInputs() {
  allInputs.forEach((inpItem) => (inpItem.value = ""));
}

function validateInputs() {
  var inputsAreValid = true;
  allInputs.forEach((inpItem) => {
    if (inpItem.value == undefined || inpItem.value.length == 0) {
      inpItem.classList.add("error-border");
      inputsAreValid = false;
    } else {
      inpItem.classList.remove("error-border");
    }
  });

  return inputsAreValid;
}

saveAnimalsBtn.addEventListener("click", function () {
  if (validateInputs()) {
    var animal = new Animals(
      animalName.value,
      animalAge.value,
      owner.value,
      phoneNumber.value,
      animalPhoto.value,
      gender.value
    );
  }

  animalCollection.push(animal);
  clearInputs();
});

function viewAnimals() {
  if (animalCollection.length > 0) {
    animalCollection.forEach((item) => {
      viewController.insertAnimalOnView(item);
    });
  }
}

function changeDisplayBtn() {
  showAnimalsBtn.addEventListener("click", function () {
    if (showAnimalsBtn.textContent == "Show") {
      animalCardArea.innerHTML = "";
      showAnimalsBtn.textContent = "Hide";
      viewAnimals();
      animalCardArea.classList.remove("hidden");
    } else if (showAnimalsBtn.textContent == "Hide") {
      showAnimalsBtn.textContent = "Show";
      animalCardArea.classList.add("hidden");
    }
  });
}

changeDisplayBtn();
