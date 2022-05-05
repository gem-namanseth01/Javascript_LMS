var table, tBody, tHead;
(function() {
    table = document.createElement('table');
    tBody = document.createElement('tbody');
    tHead = document.createElement('thead');
    table.appendChild(tHead);
    table.appendChild(tBody);
    addRow("Name", "Age", "DOB", "E-mail", "Company");
    tHead.setAttribute("class", "text-dark");
    addRow("ABC XYZ", 20, "01-Jan-2001", "abc@xyz.com", "POI");
    addRow("DEF UVW", 21, "02-Feb-2002", "def@uvw.com", "UYT");
    addRow("GHI RST", 22, "03-Mar-2003", "ghi@rst.com", "REW");
    addRow("JKL OPQ", 23, "04-Apr-2004", "jkl@opq.com", "QAS");
    addRow("MNO XYZ", 24, "05-May-2005", "mno@xyz.com", "DFG");
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



