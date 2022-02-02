function tabular() {
    let num = document.getElementById('txtv')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Digite um numero para tabular')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            c ++
            tab.appendChild(item)
        }
    }
}