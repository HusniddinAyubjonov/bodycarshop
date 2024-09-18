let btnInp = document.querySelector('.btn-1')
let inp1 = document.querySelector('.inp-1')
let inp2 = document.querySelector('.inp-2')

btnInp.onclick = () => {
    inp1.value = ''
    inp2.value = ''
    alert("Вы получили подарку")
}