function contador() {
    let ini = document.getElementById('txtin')
    let fim = document.getElementById('txtf')
    let pul = document.getElementById('txtpul')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pul.value.length == 0) {
        window.alert('[Erro] Você tem que digitar todas opçoes!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pul.value)
        if (p <= 0) {
            window.alert('[Erro] passo impossivel! considerando PASSO 1!')
            p = 1
        } if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += ` \u{1f3c1}`
    }
}