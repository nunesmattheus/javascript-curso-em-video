var idade = 22
if(idade < 18){
    console.log("Não vota")
}
else if(idade >= 16 && idade < 18 || idade > 65) {
    console.log("Voto opcional")
}
else{
    console.log("Voto obrigatório")
}