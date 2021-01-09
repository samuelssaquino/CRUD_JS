
function userValidation(idTitle, idFirstName, idLastName, idEmail, idEmailConfirm, idPassword,
    idPasswordConfirm, idAge, idChildren, idCountry, idPhone) {

    let title = document.getElementById(idTitle).value;
    let firstName = document.getElementById(idFirstName).value;
    let lastName = document.getElementById(idLastName).value;
    let email = document.getElementById(idEmail).value;
    let emailConfirm = document.getElementById(idEmailConfirm).value;
    let password = document.getElementById(idPassword).value;
    let passwordConfirm = document.getElementById(idPasswordConfirm).value;
    let age = document.getElementById(idAge).value;
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
    else if (age == "")
        alert("The field 'Age' is mandatory!");
    else if (country == "")
        alert("The field 'Country' is mandatory!");
    else if (phone == "")
        alert("The field 'Phone' is mandatory!")
    else registerUser(title, firstName, lastName, email, emailConfirm,
        password, passwordConfirm, age, children, country, phone);
}

function registerUser(title, firstName, lastName, email, emailConfirm,
    password, passwordConfirm, age, children, country, phone) {

    let newUser = {
        _title: title, _firstName: firstName, _lastName: lastName, _email: email,
        _emailConfirm: emailConfirm, _password: password, _passwordConfirm: passwordConfirm,
        _age: age, _children: children, _country: country, _phone: phone
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