const tableBody = document.querySelector(".freelanceContainer")
console.log(tableBody.innerHTML)


const data = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const freelancerData = []

function addFreelancer(idx){
  freelancerData.push(data[idx])
  // render()
}


let average = undefined
const averageText = document.querySelector(".average")
function render() {
  const html = freelancerData.map((freelancer) => {   
        return `<tr><td class="name">${freelancer.name}</td>
          <td class="occupation">${freelancer.occupation}</td>
          <td class="price">${freelancer.price}</td></tr>`
  })
  tableBody.innerHTML = html.join("")
  let total = 0
  for ( let i= 0 ; i < freelancerData.length ; i ++) {
    total += freelancerData[i].price
  }
  average = total / freelancerData.length
  averageText.innerHTML = "$"+ average.toFixed(2)



}

let count = -1
const interval = setInterval((freelancer) => {
  count++
  console.log("count", count)
  addFreelancer(count)
  if(count === data.length-1){
    clearInterval(interval)
  }
  render()  
} ,2000)
// addFreelancer()