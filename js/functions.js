window.onload = function () {
    loadTable();
    //document.getElementById('frmCadastro').addEventListener('submit', adicionarOuAlterar);
    //document.getElementById('frmCadastro').addEventListener('submit', listar);
}

function userValidation(idTitle, idFirstName, idLastName, idEmail, idEmailConfirm, idPassword,
    idPasswordConfirm, nameRadio, idDtBirth, idChildren, idCountry, idPhone) {

    let title = document.getElementById(idTitle).value;
    let firstName = document.getElementById(idFirstName).value;
    let lastName = document.getElementById(idLastName).value;
    let email = document.getElementById(idEmail).value;
    let emailConfirm = document.getElementById(idEmailConfirm).value;
    let password = document.getElementById(idPassword).value;
    let passwordConfirm = document.getElementById(idPasswordConfirm).value;
    let sex = validateRadio(nameRadio);
    let dtBirth = document.getElementById(idDtBirth).value;
    let children = document.getElementById(idChildren).value;
    let country = document.getElementById(idCountry).value;
    let phone = document.getElementById(idPhone).value;

    if (title == "")
        alert("The field 'Title' is mandatory!");
    else if (firstName == "")
        alert("The field 'First Name' is mandatory!");
    else if (lastName == "")
        alert("The field 'Last Name' is mandatory!");
    else if (email == "")
        alert("The field 'Email' is mandatory!");
    else if (emailConfirm == "")
        alert("The field 'Email Confirm' is mandatory!");
    else if (email != emailConfirm)
        alert("Emails are different, please enter the same emails!");
    else if (password == "")
        alert("The field 'Password' is mandatory!");
    else if (passwordConfirm == "")
        alert("The field 'Password Confirm' is mandatory!");
    else if (password != passwordConfirm)
        alert("Passwords are different, please enter the same passwords!");
    else if (sex == "")
        alert("The field 'Sex' is mandatory!");
    else if (dtBirth == "")
        alert("The field 'Date of Birth' is mandatory!");
    else if (country == "")
        alert("The field 'Country' is mandatory!");
    else if (phone == "")
        alert("The field 'Phone' is mandatory!")
    else registerUser(title, firstName, lastName, email, emailConfirm,
        password, passwordConfirm, sex, dtBirth, children, country, phone);
}

function validateRadio(gender) {

    var valid = false;
    var x = document.getElementsByName(gender);
    var sex;

    for (var i = 0; i < x.length; i++) {
        if (x[i].checked) {
            valid = true;
            sex = x[i].value;
            return sex;
            break;
        } else {
            sex = "";
            return sex;
        }
    }
}

function registerUser(title, firstName, lastName, email, emailConfirm,
    password, passwordConfirm, sex, dtBirth, children, country, phone) {

    let newUser = {
        _title: title, _firstName: firstName, _lastName: lastName, _email: email,
        _emailConfirm: emailConfirm, _password: password, _passwordConfirm: passwordConfirm,
        _sex: sex, _dtBirth: dtBirth, _children: children, _country: country, _phone: phone
    };

    if (typeof (Storage) !== "undefined") {
        let users = localStorage.getItem("users");
        if (users == null) users = []; //No users have been registered
        else users = JSON.parse(users);
        users.push(newUser); //Add a new user
        localStorage.setItem("users", JSON.stringify(users))
        alert("The user " + firstName + " " + lastName + " has been successfully registered!");
        //atualizarTotalEstoque("totalEstoque");
        location.reload();
    }
    else alert("A versao do seu navegador é muito antiga");
}

function loadTable() {
    //if you don't have any local storage, do nothing
    if (localStorage.getItem('users') === null)
        return;

    //capture the objects
    var reg = JSON.parse(localStorage.getItem('users'));
    var tbody = document.getElementById("tbodyResults");

    //clean the body
    tbody.innerHTML = '';

    for (var i = 0; i < reg.length; i++) {
        var id = reg[i]._Id,
            title = reg[i]._title,
            firstName = reg[i]._firstName,
            lastName = reg[i]._lastName,
            email = reg[i]._email,
            dtBirth = reg[i]._dtBirth,
            sex = reg[i]._sex,
            children = reg[i]._children,
            country = reg[i]._country,
            phone = reg[i]._phone

        tbody.innerHTML += '<tr id="rowTable' + i + '">' +
            '<td>' + title + '</td>' +
            '<td>' + firstName + '</td>' +
            '<td>' + lastName + '</td>' +
            '<td>' + email + '</td>' +
            '<td>' + dtBirth + '</td>' +
            '<td>' + sex + '</td>' +
            '<td>' + children + '</td>' +
            '<td>' + country + '</td>' +
            '<td>' + phone + '</td>' +
            /* '<td><button onclick="excluir(\'' + id + '\')">Delete</button></td>' +
            '<td><button onclick="prepararAlterar(\'' + id + '\')">Edit</button></td>' + */
            '<td><button type="button" class="btn btn-primary"><i class="fa fa-edit" /></button></td>' +
            '<td><button type="button" class="btn btn-danger"><i class="fa fa-trash" /></button></td>' +
            '</tr>';
    }
}