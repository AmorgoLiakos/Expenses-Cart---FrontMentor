import data from '../data/data.json' assert {type: 'json'}

let max = data[0].amount
data.forEach( x => {
  if(x.amount > max){
    max = x.amount
  }
})

data.forEach( x => {
  document.getElementById(x.day).style.height = (x.amount / max) * 100 + "%"
  document.getElementById(x.day).setAttribute('amount', '$'+x.amount)

  if(x.amount == max){
    document.getElementById(x.day).style.backgroundColor = "var(--cyan)"
  }
})