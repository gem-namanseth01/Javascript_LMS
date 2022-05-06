let nameInput, emailInput, mobileNoInput, isNameValid, isEmailValid, isMobileNoValid;
let namePattern = /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/i;
let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let mobnoPattern = /^\d{10}$/;
let count = 1;


function formValidate() {
  if (nameInput.length && namePattern.test(nameInput)) {
    isNameValid = true;
    document.getElementById("name-invalid").style.display = "none";
    document.getElementById("name-valid").style.display = "block";
  } else {
    isNameValid = false;
    document.getElementById("name-invalid").style.display = "block";
    document.getElementById("name-valid").style.display = "none";
  }
  if (emailInput.length && emailPattern.test(emailInput)) {
    isEmailValid = true;
    document.getElementById("email-invalid").style.display = "none";
    document.getElementById("email-valid").style.display = "block";
  } else {
    isEmailValid = false;
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
  }
  if (mobileNoInput.length == 0 || mobnoPattern.test(mobileNoInput)) {
    isMobileNoValid = true;
    document.getElementById("mobileno-invalid").style.display = "none";
    document.getElementById("mobileno-valid").style.display = "block";
  } else {
    isMobileNoValid = false;
    document.getElementById("mobileno-invalid").style.display = "block";
    document.getElementById("mobileno-valid").style.display = "none";
  }
  if (isNameValid && isEmailValid && isMobileNoValid) {
    localStorage.setItem(count + "name", nameInput);
    localStorage.setItem(count + "email", emailInput);
    localStorage.setItem(count + "mobileno", mobileNoInput);
    showTable()
  }
}
function showTable() {
    var tbody = document.getElementById("t-body");
    var tHead = document.getElementById("t-head");
    let row = document.createElement("tr");
    if(count == 1) {
      let head = document.createElement("tr");
      head.innerHTML = `<tr>
      <th scope="col">S No.</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
    </tr>`;
    tHead.append(head);
    }
    console.log(localStorage);
    row.innerHTML = `<tr>
    <th scope="row">${count+"."}</th>
    <td>${localStorage.getItem(count + "name")}</td>
    <td>${localStorage.getItem(count + "email")}</td>
    <td>${localStorage.getItem(count + "mobileno")===null?"":localStorage.getItem(count + "mobileno")}</td>
  </tr>`;
    tbody.append(row);
    count++;
}

function add() {
  isNameValid = false;
  isEmailValid = false;
  isMobileNoValid = false;
  nameInput = document.getElementById("name").value;
  emailInput = document.getElementById("email").value;
  mobileNoInput = document.getElementById("mobileno").value;
  formValidate();
}