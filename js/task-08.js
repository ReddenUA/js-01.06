

const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit );

function onFormSubmit(event) {
    event.preventDefault();

  const formData =  new FormData(event.currentTarget);

  console.log(formData);
  
  formData.forEach((value, name) => {
    console.log(`name`, name );
    console.log(`value`, value);
  });

  document.getElementById("login-js").reset();
}
const inputs = document.querySelectorAll('input');

inputs.forEach(function (input) {
  if (input.value.trim() === '') { 
  alert(" Все поля должны быть заполнены")
  }
});
