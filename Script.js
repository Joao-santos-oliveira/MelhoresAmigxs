function botao(){
    let nome = document.querySelector('#Campeos')
    let oi = document.querySelector('#oi')
    var URL = 'cesar.html';
    
    if(nome.value===""){
     alert ('Campo vazio... Por favor digite seu nome');
    }
    else if (nome.value==='César'){
        oi.innerHTML = 'str.link(cesar.html)'
    }
    else if (nome.value==='Inácio'){
        oi.innerHTML = ' Meu "otaku" preferido. Uma das pessoas mais engraçadas e divertidas que ja conheci, aquele tipo de pessoa que mesmo nos seus piores dias vai se esforçar para te tirar um sorriso. Não consegue ficar mais de um dia com a mesma foto de perfil e eh muito bom de puxar assunto, prazer de ser seu amigo! '
    } 
    else if (nome.value==='Tony'){
        oi.innerHTML = 'Ah, meu apaixonado de platão. Marombeiro nato, ex pegador de sub 12 e muito animado, já não consigo contar quantas vezes, nós desencontramos e encontramos novamente. Efim, com uma personalide forte e extremamente persistente, eh um orgulho para min aprender com você, obrigado! '
    } 
    else if (nome.value==='Beatriz'){
        oi.innerHTML = 'Vamos lá... Marombeira mais divertida que conheço; forte, persistente, focada e muito determinada. Tão anciosa quanto eu, é extremamente dedicada e inteligente, um exemplo para todos. Com uma personalidade inabalavel e com um posicionamento de mundo muito bem determinado, é uma inspiração para todos que te conhecem.'
    } 
    else if (nome.value==='João Heitor'){
        oi.innerHTML = 'Eae meu chará, aquele tipo de pessoa que deixa qualquer ambiente descontraído. Uma das pessoas mais naturalmente engraçadas que já conheci, transforma qualquer climão em uma conversa divertida. Com uma cultura invejável e um humor questionavel (no minimo), eh muito bom dividir a sala com você! '
    }
    else if (nome.value==='Priscila'){
        oi.innerHTML = 'Ta sentido esse cheiro? Acho que eh naftanlina. Com um conhecimento de mundo fora do normal e com uma cultura impressionante, é com certeza a pessoa com queria me encontrar se chegasse na cidade hoje. Muito divertida e uma excelente ouvinte, diria que todo mundo precisa de uma Priscila na vida.'
    } 
    else if (nome.value==='Maria Clara'){
        oi.innerHTML = 'A marvete mais emocionada que eu conheço. Uma caixinha de surpresas, com uma variação de sentimentos e emoções enorme. Meio pessimista e um pouco desacreditada, mas altamente dedicada e comprometida, expressa seus sentimentos como poucas. É muito gratificante conviver com você <3 '
    } 
    else if (nome.value==='Guilherme'){
        oi.innerHTML = 'Vou tentar ser o mais preciso que eu puder, para você entender. Muito inteligente e criativo, sempre da um migué falando que não entendeu e tudo mais, mas tem uma capacidade incrivel de aprender e entender as coisas. As vezes um pouco distraído, mas é isso que forma sua persnalidade leve e divertida. '
    } 
    else if (nome.value==='Helena'){
        oi.innerHTML = 'Correndo sérios riscos de ser agredido, vamos lá... Com uma personalidade realmente impressionante para a própria idade e com um bom humor invejável, é aquele tipo de pessoa que te deixa realmente confortavel em uma conversa, porém, não se enganem, a qualquer momento você pode ser atigido por um objeto na cabeça. Muito talentosa e com um gosto para animais peculiar, foi uma honra te conhecer!'
    } 
    else{
        oi.innerHTML = 'Seu nome ainda não está na lista, perdão! :('
    }
}