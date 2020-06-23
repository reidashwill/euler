

// const numberFinder = (num, totalArr = []) => {
//   if (num === 0) {
//     return totalArr.reduce(myFunc)
//   } else if (num % 3 === 0 || num % 5 === 0) {
//     totalArr.push(num)
//     return numberFinder(num - 1, totalArr);
//   } else {
//     return (numberFinder(num - 1, totalArr))
//   }
// }
// function myFunc(total, num) {
//   return total + num;
// }

const canPaint = function(color){
  const obj = {
    paints: function() {
      return `paints ${color}.`
    }
  }
  return obj
}


const painter1 = canPaint("Purple");

painter1.paints()

const makeNoise = function(noise){
  const obj = {
    sound: function() {
      return `${noise}`
    }
  }
  return obj
}
const faucet = makeNoise("Drip drip drip.")
faucet.sound()
const oldCar = makeNoise("Grumble grumble.")
oldCar.sound()
const sleepyBear = makeNoise("Grrr...yawn.")
sleepyBear.sound()

const warMachine = function(speed, distance) {
  const obj = {
    throw: function() {
      return `The battle robot throws the spear ${distance} yards at ${speed} miles per hour`
    }
  }
  return obj
}

const battlerobot1 = warMachine(200, 100)
battlerobot1.throw()
