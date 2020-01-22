
var username, password;

// to show the login modal
function showModal() {
    document.getElementById('modalId').style.display = 'block';
}

// to hide the login modal
function hideModal() {
    document.getElementById('modalId').style.display = 'none';
}

// to get the values of inputs'
function getValueLogin (event) {
    console.log(event);

    if (event.name === 'username') {
        username = event.value.toLowerCase();

    } else if ( event.name === 'password') {
        password = event.value.toLowerCase();
    }
}

// to submit the form from login
function submitFormLogin () {

    if ( username === 'admin' && password === 'admin') {

        console.log(document.location);
        
        document.location.href = "homePage.html";
    } else {
        alert('Yanlis username veya sifre girdiniz..!');
        document.location.reload(true);
    }
}







// when the user clicks anywhere outside of the modal, close the modal
window.onclick = function (event) {
    this.console.log(event);

    var modal = document.getElementById('modalId');

    if (event.target == modal) {
        modal.style.display = 'none';
    }
}