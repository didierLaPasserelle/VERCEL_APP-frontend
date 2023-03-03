fetch('https://vercel-app-backend.vercel.app/year')
 .then(response => response.json())
 .then(data => {
    const yearElement = document.querySelector("#year")
    yearElement.textContent = data.year
 });