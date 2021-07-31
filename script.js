function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var saudacao = document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${min}`

    if(hora >= 0 && hora < 12 ){
        img.src = 'manha.png'
        document.body.style.background = '#f3c9a9'
        saudacao.innerHTML = `BOM DIA`
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#ed8526'
        saudacao.innerHTML = `BOA TARDE`
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#2b1e1c'
        saudacao.innerHTML = `BOA NOITE`
    }
}