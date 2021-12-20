const naam = 
{

    voornaam: 'Anne',
    leeftijd: '21'
}
// const schoolnaam = "REA-------------"

// Store
if (typeof(localStorage) !== "undefined") {
localStorage.setItem("naam", naam.voornaam);
}


