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

$('#registerButton').on('click', () => {
    const username = $('#username').val();
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();

    console.log(username);
    console.log(password);
    console.log(confirmPassword);
});