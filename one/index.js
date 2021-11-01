// fetch('sample.json')
// .then((res) => res.json())
// .then(data => {
//     console.log(data)
// })

document.getElementById('boxo')
function getData() {
    fetch('sample.json') 
    .then(response => response.json())
    .then(data => {
         data.hydramember[0].categories.map((el) => {
         console.log(el.name,el.categories)
         })
    })
}
getData()