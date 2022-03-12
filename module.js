var user = document.querySelector('.in-user')
var pass = document.querySelector('.in-pass')
var btnLog = document.querySelector('.btn-log')

var x = {
    user: 'minhdaide@gmail.com',
    pass: '123456'
}

user.addEventListener('input', (e) => {
    user.setAttribute('value', e.target.value)
})
user.oninput = function(e){
    user.setAttribute('value',e.target.value)
}

pass.addEventListener('input', (e) => {
    pass.setAttribute('value', e.target.value)
})
function check(user, pass){
    if(user === x.user && pass === x.pass){
        alert('Dang nhap thanh cong')
    }else{
        alert('Email hoac mat khau sai')
    }
}
btnLog.addEventListener('click', function () {
    check(user.value, pass.value)
})

