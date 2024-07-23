document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var msgDiv = document.querySelector('.msg');

    msgDiv.style.display = 'none';

    if(username === '') {
        msgDiv.innerHTML = '<li>Username is required</li>';
        msgDiv.style.display = 'block';
        return;
    }

    if(password === '') {
        msgDiv.innerHTML = '<li>Password is required</li>';
        msgDiv.style.display = 'block';
        return;
    }
        
    if(username === 'admin' && password === 'admin') {
        alert('Account login successfully!');
        msgDiv.style.display = 'none'; 
        // this.submit();  
    }
    else{
        msgDiv.innerHTML = '<li>Incorrect Username or Password.</li>';
        msgDiv.style.display = 'block';
        return;
    }

});