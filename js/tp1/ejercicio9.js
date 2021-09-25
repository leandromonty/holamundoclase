let frase = prompt('ingrese una frase')
frase = frase.toLocaleLowerCase()

console.log(frase) 
console.log(frase.length)

for(let vocal=0; vocal < frase.length; vocal++){
    console.log(frase.charAt(vocal));
    if(frase.charAt(vocal) == 'a' || frase.charAt(vocal) == 'e' || frase.charAt(vocal) == 'i' || frase.charAt(vocal) == 'o' || frase.charAt(vocal) == 'u' ) {
    document.write(frase.charAt(vocal)) }
}