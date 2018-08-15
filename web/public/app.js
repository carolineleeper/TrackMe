$('#navbar').load('navbar.html');
$('#footer').load('footer.html');

const devices = JSON.parse(localStorage.getItem('devices')) || [];

devices.forEach(function(device) 
{
    $('#devices tbody').append(`
        <tr>
            <td>${device.user}</td>
            <td>${device.name}</td>
        </tr>`
    );
});

$('#add-device').on('click', function() 
{
    const user = $('#user').val();
    const name = $('#name').val();
    devices.push({ user, name }); // when variable identifier and object key are the same, only need once
    localStorage.setItem('devices', JSON.stringify(devices));
    location.href = '/';
});

$('#send-command').on('click', function() {
    const command = $('#command').val();
    console.log(`command is: ${command}`);
});


// registration
const users = JSON.parse(localStorage.getItem('users')) || [];

$('#registerButton').on('click', () => {
    const username = $('#username').val();
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();

    const exists = users.find(user => user.username === username);
    const message = $('#errorMessage');

    if (exists) {
        message.html('You already have an account!');
    }
    else {
        if (password === confirmPassword) {
            message.html('Account created!');
            users.push({ username, password, confirmPassword });
            localStorage.setItem('users', JSON.stringify(users));
            location.href = 'login.html';
        }
        else {
            message.html('Passwords do not match, you idiot!');
        }
    };
});

// up to task 10