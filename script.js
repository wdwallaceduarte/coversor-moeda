const valor = document.querySelector('#valor')
const de = document.querySelector('#de')
const para = document.querySelector('#para')
const resultado = document.querySelector('#resultado')
const conversor = document.querySelector('#conversor')

const taxas = {
    brl: {brl: 1, usd: 0.18, eur: 0.16},
    usd: {brl: 5.47, usd: 1, eur: 0.86},
    eur: {brl: 6.37, usd: 1.16, eur: 1}
}

conversor.addEventListener('click', () => {
    const valorInserido = parseFloat(valor.value)
    const valorDe = de.value
    const valorPara = para.value

    if(isNaN(valorInserido) || valorInserido <= 0){
        resultado.textContent = 'Digite um valor válido!'
        return
    }

    const taxa = taxas[valorDe][valorPara]

    const conversao = valorInserido * taxa

    resultado.textContent = `${valorDe.toUpperCase()} ${valorInserido} = ${valorPara.toUpperCase()} ${conversao}`
})