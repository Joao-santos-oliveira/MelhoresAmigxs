const senha = 2316
const senhainerit = prompt ("Digite sua senha")

if (senha == senhainerit){
    document.getElementById("index.html").style.display= "none"
}
else if (senha != senhainerit){
    window.location.href = 'erro.html'
}