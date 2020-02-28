//grab elements for spans
let nameSpan = document.getElementById("nameSpan")
let ageSpan = document.getElementById("ageSpan")

//grab the value inputted in field
let userName = []
let userNameInput = document.getElementById("typedName")

//function to insert name onto screen
function insertNameToSpan(){
    userName.push(userNameInput.value)
    clearAndShow()
}

//function to clear the name array and display on span
function clearAndShow(){
    nameSpan.innerHTML=`${userName}`
    userName.pop()
}

//need event listener to prevent default of form submit button, call the insertname to span function on submit
document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault()
    insertNameToSpan()
})

//do the above on click event (pass functions into here
// document.getElementById("submit").addEventListener("click", function(e){
//     //chuck users name into span
//     nameSpan.innerHTML=`${usersName}`
// })


// fetch name and age that comes back from API
let stringToSend =  'https://api.agify.io?name=' + userName

async function getApiData() {
    let ageData = await fetch(stringToSend)
    // let nationalityData = fetch('')
    let ageDataResult = ageData.json()
    // let nationalityDataResult = await nationalityData.json()
    console.log(ageDataResult)
}

getApiData()

// let person = {}



//insert what comes back from API into html elements (returned as an object so grab relevant keys)


//pass name into nationalize function
//define functions outside the the async and then call them inside the event listener
//async the event listener 'e' function too to make it work
