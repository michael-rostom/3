const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'user1' && password === 'pass1') {
    location.assign('Main Page.html');
  } else {
    alert('Invalid username or password');
  }
});

  function myfunction1(){
    let userinput=document.querySelector("#search-input").value;
    if(userinput=="thelowendtheory"){
        location.assign('vinyl1.html');
    }
    else{
        alert(userinput + "goes nowhere");
    }

  }