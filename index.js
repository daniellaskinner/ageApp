async function getApiData() {
    let ageData = fetch('')
    // let nationalityData = fetch('')
    let ageDataResult = await ageData.json()
    // let nationalityDataResult = await nationalityData.json()
    console.log(ageDataResult)
}

getApiData()