document.addEventListener("DOMContentLoaded", () => {

  document.getElementById('create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.classList.contains('create-task.form').value)
  })

});

