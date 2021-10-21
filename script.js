const dashboard_button = document.querySelector('.next-btn');
const back_button = document.querySelector('.back-btn');
const add_button = document.querySelector('.add-btn');
const landing_page_box = document.querySelector('.wrapper');
const dashboard_page_box = document.querySelector('.container');
let data = [];


dashboard_button.onclick = () => {
    landing_page_box.classList.add('display_change');
    dashboard_page_box.classList.add('appear');
}

back_button.onclick = () => {
    landing_page_box.classList.remove('display_change');
    dashboard_page_box.classList.remove('appear');
}

add_button.onclick = () => {
    let name = prompt("Please enter name of the property !!");
    let Description = prompt("Please Describe a little about property !!");
    let size = prompt("Please enter size of the property !!");
    let location = prompt("Please enter location !!");
    let contact = prompt("please enter your contact !!");
    let obj = {
        'name': name,
        'Description': Description,
        'size': size,
        'location': location,
        'contact': contact,
    }
    data.push(obj);

    uploadData(data);
}

function uploadData(array) {
    let dataExtracted = document.querySelector('.data');
    if (array.length > 0) {
        let html = "";
        array.forEach((u) => {
            let htmlsegment = `<tr>
            <td> ${u.name}</td>
            <td> ${u.Description}</td>
            <td> ${u.size}</td>
            <td> ${u.location}</td>
            <td> ${u.contact}</td>
           <td><button onclick="deleteRow('${u.name}','${u.Description}','${u.size}','${u.location}',${u.contact})"><i class="fas fa-trash-alt"></i></button></td>
            </tr>`
            html += htmlsegment;
        });
        dataExtracted.innerHTML = html;
    }
    else {
        dataExtracted.innerHTML = "";
    }
};

function deleteRow(name, description, size, location, contact) {
    let Contact_ = contact.toString();
    let obj = {
        'name': name,
        'Description': description,
        'size': size,
        'location': location,
        'contact': Contact_,
    };

    for (let i = 0; i < data.length; i++){
        if (JSON.stringify(obj) === JSON.stringify(data[i])) {
            data.splice(i,1);
            break;
        };
    };
    uploadData(data);
}