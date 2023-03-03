fetch('https://vercel-app-backend.vercel.app/')
 .then(response => response.json())
 .then(data => {
    console.log(data)
    const yearElement = document.querySelector("#year")
    yearElement.textContent = data.year
 });