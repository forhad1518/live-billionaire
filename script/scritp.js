// Pethc API All Data
const fetchApi = () => {
    fetch('https://forbes400.onrender.com/api/forbes400/')
    .then(res => res.json())
    .then(data => showDataTop3(data))
    .catch(error => console.log(error))

}
fetchApi()

// Display top 3 billinaire
const showDataTop3 = (topData) => {
    const showTop3 = document.getElementById('show-top3');

    topData.forEach(person => {
        console.log(person)
        
        const top3Details = document.createElement('div');
        top3Details.classList = "flex justify-between items-start py-2"
        top3Details.innerHTML = `
        <h4 class="text-base">
            ${person.personName}
        </h4>
        <h4 class="text-base">
            ${person.countryOfCitizenship}
        </h4>
        <h4 class="text-base">
            ${person.industries}
        </h4>
        <h4 class="text-base">
            ${person.rank}
        </h4>
        <h4 class="text-base">
            ${person.finalWorth}
        </h4>
        `
        showTop3.append(top3Details);
    });

}

// {
//     "naturalId": "faris/35/0/14117",
//     "name": "Real-Time Billionaires",
//     "year": 0,
//     "uri": "elon-musk",
//     "rank": 1,
//     "listUri": "rtb",
//     "visible": true,
//     "position": 1,
//     "imageExists": true,
//     "bio": "",
//     "finalWorth": 257590.14,
//     "person": {
//         "name": "Elon Musk",
//         "uri": "elon-musk",
//         "imageExists": true,
//         "squareImage": "https://specials-images.forbesimg.com/imageserve/62d700cd6094d2c180f269b9/416x416.jpg?background=000000&cropX1=0&cropX2=959&cropY1=0&cropY2=959"
//     },
//     "personName": "Elon Musk",
//     "state": "Texas",
//     "city": "Austin",
//     "source": "Tesla, SpaceX",
//     "industries": [
//         "Automotive"
//     ],
//     "countryOfCitizenship": "United States",
//     "timestamp": 1728628802448,
//     "version": 734433,
//     "gender": "M",
//     "birthDate": 46915200000,
//     "lastName": "Musk",
//     "financialAssets": [
//         {
//             "exchange": "NASDAQ",
//             "ticker": "TSLA-US",
//             "companyName": "Tesla",
//             "numberOfShares": 411062000,
//             "sharePrice": 241.05,
//             "currencyCode": "USD",
//             "exchangeRate": 1,
//             "interactive": true,
//             "currentPrice": 238.77
//         },
//         {
//             "exchange": "NASDAQ",
//             "ticker": "TSLA-US",
//             "companyName": "Tesla",
//             "numberOfShares": 152000000,
//             "exerciseOptionPrice": 23.33666666666667,
//             "sharePrice": 241.05,
//             "currencyCode": "USD",
//             "exchangeRate": 1,
//             "interactive": false,
//             "currentPrice": 238.77
//         }
//     ],
//     "date": 725846400000,
//     "wealthList": false,
//     "estWorthPrev": 258873.921767,
//     "privateAssetsWorth": 126695,
//     "familyList": false,
//     "interactive": true,
//     "archivedWorth": 195000,
//     "thumbnail": "http://specials-images.forbesimg.com/imageserve/62d700cd6094d2c180f269b9/280x425.jpg?fit=scale&background=000000",
//     "squareImage": "https://specials-images.forbesimg.com/imageserve/62d700cd6094d2c180f269b9/416x416.jpg?background=000000&cropX1=0&cropX2=959&cropY1=0&cropY2=959",
//     "bioSuppress": false,
//     "csfDisplayFields": [
//         "rank",
//         "age",
//         "source",
//         "finalWorth",
//         "personName",
//         "bios",
//         "bio",
//         "countryOfCitizenship"
//     ],
//     "bios": [
//         "Elon Musk cofounded seven companies, including electric car maker Tesla, rocket producer SpaceX and artificial intelligence startup xAI. ",
//         "He owns about 12% of Tesla excluding options, but has pledged more than half his shares as collateral for personal loans of up to $3.5 billion.",
//         "In early 2024, a Delaware judge voided Musk's 2018 deal to receive options equaling an additional 9% of Tesla. Forbes has discounted the options by 50% pending Musk's appeal. ",
//         "SpaceX, founded in 2002, is worth nearly $210 billion based on a tender offer launched during the second half of 2024. Musk owns an estimated 42% stake.  ",
//         "Musk bought Twitter in a $44 billion (enterprise value) deal during 2022. Forbes estimates that the social media company, which he renamed X, is worth nearly 70% less as of August 2024. ",
//         "Musk owns an estimated 60% of xAI, which he founded in 2023. Private investors valued the company at $24 billion in May 2024. "
//     ],
//     "abouts": [
//         "Musk, who says he's worried about population collapse, has ten children with three women, including triplets and two sets of twins.",
//         "As a kid in South Africa, Musk taught himself to code; he sold his first game, Blastar, for about $500."
//     ]
// }