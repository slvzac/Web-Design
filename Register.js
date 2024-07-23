document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.querySelector('input[name="username"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var passwordConf = document.querySelector('input[name="passwordConf"]').value;
    var msgDiv = document.querySelector('.msg');

    msgDiv.style.display = 'none'; 

    if(username === '') {
        msgDiv.innerHTML = '<li>Username is required</li>';
        msgDiv.style.display = 'block'; 
        return;
    }

    if(email === '') {
        msgDiv.innerHTML = '<li>Email is required</li>';
        msgDiv.style.display = 'block';
        return;
    }

    if(password === '') {
        msgDiv.innerHTML = '<li>Password is required</li>';
        msgDiv.style.display = 'block';
        return;
    }

    if(passwordConf === '') {
        msgDiv.innerHTML = '<li>Password Confirmation is required</li>';
        msgDiv.style.display = 'block';
        return;
    }

    if(password !== passwordConf) {
        msgDiv.innerHTML = '<li>Passwords do not match</li>';
        msgDiv.style.display = 'block';
        return;
    }

    alert('Account created successfully!');
    msgDiv.style.display = 'none'; 
    // this.submit();
});