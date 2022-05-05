var tBody, table, tHead;


(function() {
   
    table = document.createElement('table');
    tBody = document.createElement('tbody');
    tHead = document.createElement('thead');
    table.append(tHead);
    table.append(tBody);
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    table.setAttribute("class", "text-dark");
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    table.setAttribute("class", "table table-striped table-bordered text-center ms-5 mt-5 me-4")
    var body = document.getElementsByTagName("body");
    document.body.append(table);
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
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tBody.append(tr);
}