const students = [
    {
        name: 'Luiz',
        nota1: 9,
        nota2: 10
    },
    {
        name: 'douglas',
        nota1: 4,
        nota2: 8
    },
    {
        name: 'jose',
        nota1: 7,
        nota2: 7
    },
    {
        name: 'mathias',
        nota1: 5,
        nota2: 3
    }
]

function media(number1, number2){
    let result = (number1 + number2) /2
    return result
}

for(let student of students){
    let calculo = media(student.nota1, student.nota2)
    if(calculo > 6){
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${calculo}
        Parabéns, ${student.name}!, você foi aprovado(a) no curso!
    `)
    } else{
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${calculo}
        Não foi dessa vez, ${student.name}!, tente novamente!
        `)
    }
}
