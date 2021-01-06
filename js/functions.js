
function userValidation(idTitle, idFirstName, idLastName, idEmail, idEmailConfirm, idPassword, idPasswordConfirm, idGender, idAge, idChildren, idCountry, idState, idPhone){
    let title = document.getElementById(idTitle).value;

    if(title == "")
        alert("The field 'Title' is mandatory!");
    else registerUser(title);    
}

function registerUser(title){
    let newUser = {_title:title};

    if(typeof(Storage) !== "undefined"){
        let users = localStorage.getItem("users");
        if (users == null) users = []; //No users have been registered
        else users = JSON.parse(users);
        users.push(newUser); //Add a new user
        localStorage.setItem("users", JSON.stringify(users))
        alert("The user "+ title +" has been successfully registered!");
        //atualizarTotalEstoque("totalEstoque");
        location.reload();
    }
    else alert("A versao do seu navegador é muito antiga");
}