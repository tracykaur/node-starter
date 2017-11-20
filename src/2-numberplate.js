function formatVanityPlate(string) {
  let words = string.split(' ')
  words = words.map(word => word.toUpperCase())
  let chars = words.join('').split('')
    if(chars.length > 12){
  	for (var i = chars.length - 13; i >= 0; i--) {
   		chars.pop()
  	}
   }
   return chars.join('')

}

function replaceFor(string) {
  return string.replace('for', '4')
}

function replaceTo(string) {
  return string.replace('to', '2')
}



const one = 'I like money'
console.log(`Number plate:  ${ formatVanityPlate(replaceFor(one)) }`)

const two = 'Cats for life'
console.log(`Number plate: ${ formatVanityPlate(replaceFor(two)) }`)

const three = 'Go to skool'
console.log(`Number plate: ${ formatVanityPlate(replaceTo(three)) }`)

const four = 'Life is cool bananas'
console.log(`Number plate: ${ formatVanityPlate((four)) }`)

/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/
