//grab elements for spans
let nameSpan = document.getElementById("nameSpan")
let ageSpan = document.getElementById("ageSpan")

//grab the value inputted in field MIGHT NOT NEED THIS BIT
let userName = []
let userNameInput = document.getElementById("typedName")

//function to insert name onto screen
function insertNameInfoToSpan(nameData){
    //insert what comes back from API into html elements (returned as an object so grab relevant keys)
    nameSpan.innerHTML = nameData.name
    ageSpan.innerHTML = nameData.age
}

//need event listener to prevent default of form submit button, call the insertName function to span function on submit
document.getElementById("submit").addEventListener("click", async function(e){
    e.preventDefault()
    let nameData = await getApiData()
    insertNameInfoToSpan(nameData)
})

// fetch name and age that comes back from API
async function getApiData() {
    let nameStringToSend = document.getElementById("typedName").value
    let ageData = await fetch('https://api.agify.io?name=' + nameStringToSend)
    // let nationalityData = fetch('')
    let ageDataResult = await ageData.json()
    // let nationalityDataResult = await nationalityData.json()
    return ageDataResult
}

async function logApiData(){
    let nameToScreen = await getApiData()
    console.log(nameToScreen)
}

//pass name into nationalize function
//define functions outside the the async and then call them inside the event listener
//async the event listener 'e' function too to make it work

//Add chart.js