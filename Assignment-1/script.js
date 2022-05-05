var table, tBody, tHead;
(function() {
    table = document.createElement('table');
    tBody = document.createElement('tbody');
    tHead = document.createElement('thead');
    table.appendChild(tHead);
    table.appendChild(tBody);
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    tHead.setAttribute("class", "text-dark");
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    document.body.append(table);
    table.setAttribute("class", "table table-striped table-bordered text-center")
    document.body.setAttribute("class", "m-5");
    document.getElementsByTagName('tr')[0].style.fontWeight="bold"
})();

function addRow (name, age, dob, email, company) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let nameNode = document.createTextNode(name);
    let ageNode = document.createTextNode(age);
    let dobNode = document.createTextNode(dob);
    let emailNode = document.createTextNode(email);
    let companyNode = document.createTextNode(company);
    td1.appendChild(nameNode);
    td2.appendChild(ageNode);
    td3.appendChild(dobNode);
    td4.appendChild(emailNode);
    td5.appendChild(companyNode);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tBody.appendChild(tr);
}



