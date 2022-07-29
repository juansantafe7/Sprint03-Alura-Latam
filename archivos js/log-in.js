function validate(){

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'Fabio' && password === 'fabio'){


    }else{

        alert('Datos incorrectos');

        return false;

    }

}