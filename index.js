/*!
 * is-prime-fast <https://github.com/mawerty/is-prime-fast>
 *
 * Copyright (c) 2023, Krzysztof Pniaczek.
 * Released under the Beerware License.
 * if you are reading this you have too much free time :P
 */


const answers = [
    "I'm getting the feeling that this number is not a prime.",
    "I have a hunch that this isn't a prime number.",
    "I don't think this is a prime.",
    "It seems like this number isn't a prime.",
    "I have a suspicion that this is not a prime number.",
    "This number doesn't feel like a prime to me.",
    "Something tells me that this isn't a prime.",
    "I'm fairly certain that this number is not a prime.",
    "My intuition tells me that this number is not a prime.",
    "I have a gut feeling that this isn't a prime number.",
    "I'm not convinced that this is a prime number.",
    "This number appears to be composite rather than prime.",
    "It doesn't look like this number is a prime.",
    "This number doesn't seem to be prime.",
    "I have a feeling that this is not a prime number.",
    "It looks like this number is not a prime.",
    "My instincts are telling me that this isn't a prime number.",
    "I have a sneaking suspicion that this isn't a prime number.",
    "This number seems more like a composite than a prime.",
    "This number is probably not a prime.",
    "I'm leaning towards this not being a prime number.",
    "I'm doubtful that this is a prime.",
    "This number seems too easy to factor, it's probably not a prime.",
    "I have a suspicion that this is a composite number.",
    "It's not immediately obvious that this is a prime.",
    "I'm not convinced that this is a prime.",
    "It looks like this number has too many factors to be prime.",
    "This number isn't showing any prime-like properties.",
    "I'm detecting non-prime behavior in this number.",
    "I have a strong feeling that this number isn't prime.",
    "This number is exhibiting behavior that suggests it's not prime.",
    "My instincts are telling me that this number is composite.",
    "There's something off about this number, it's probably not a prime.",
    "This number is failing the usual primality tests.",
    "I'm getting the sense that this number is composite.",
    "It looks like this number has too many divisors to be prime.",
    "This number is not behaving like a prime should.",
    "It's possible that this number is a composite.",
    "I'm starting to believe that this isn't a prime number.",
    "This number is lacking the characteristics of a prime.",
    "It appears that this number is not a prime.",
    "I'm seeing a pattern that suggests this number is composite.",
    "It doesn't seem like this number is prime.",
    "This number is giving off non-prime vibes.",
    "This number isn't meeting the criteria for a prime.",
    "It's possible that this number is divisible by more than just 1 and itself.",
    "I'm suspicious that this number is not a prime.",
    "This number doesn't seem to fit the definition of a prime.",
    "It seems like this number is too easily divisible to be prime."
  ];

module.exports = function isPrime(value){
    return answers[Math.floor(Math.random() * answers.length)];;
}
