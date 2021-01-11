// Register new user
const registerForm = document.querySelector('#modalRegisterForm');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get new user info
  const email = registerForm['inputNewEmail'].value;
  const password = registerForm['inputNewPassword'].value;

  // Register new user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
      const modal = document.querySelector('#modalRegister');
      document.getElementById("modalRegisterForm").reset();
  });
});

// Login

const loginForm = document.querySelector('#modalLoginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['inputEmail'].value;
    const password = loginForm['inputPassword'].value;

    // signin
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)
        document.getElementById("modalLoginForm").reset();
  });

    });
});
