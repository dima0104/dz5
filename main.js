let button = document.querySelector('.save');
let inputName = document.getElementById('name');
let inputPhone = document.getElementById('phone');
let delbut = document.querySelector('.delete-all');
let $ul = document.getElementById('ul');
let $li = document.getElementsByTagName('li')

$ul.addEventListener('click' , function(){
    for(let i = 0 ; $li.length > 0 ;i++) {
        $li[i].addEventListener('click', function (){
            localStorage.removeItem('user' +i)
            this.remove(i)
        })        
    }
})

       





delbut.addEventListener('click', function(e) {
    localStorage.clear();
    while ($ul.firstChild) {
        $ul.removeChild($ul.firstChild)
    }
});

button.addEventListener('click', function (event) {
    event.preventDefault();

    let formName = inputName.value;
    let formPhone = inputPhone.value;
    let user = {};
    
    
        

    if (formName !== '' && formPhone !== '') {
        user.name = formName;
        user.phone = formPhone;

        console.log(`${user.name} ${user.phone}`);

        localStorage.setItem(`user${localStorage.length}`, JSON.stringify(user));

        inputName.value = '';
        inputPhone.value = '';
    } else {
        alert('Fill the form');
    }
    let $li = document.createElement('li')

    $li.textContent = `${user.name} ${user.phone}`;
    
    $ul.append($li);
});

for (let i = 0 ;localStorage.length > i ; i++){
    let formName = inputName.value;
    let formPhone = inputPhone.value;
    
    if (formName !== ' ' && formPhone !== ' ') {
        let it = localStorage.getItem(('user'+[i]))
        let item = (it , JSON.parse(it))
        let $li = document.createElement('li')
        $li.textContent = (item.name + ' ' + item.phone);
        console.log($li);
        $ul.append($li);
        console.log(item.name + ' ' + item.phone);
    } else {}
}
