var a = 100;
var b = 82;


const c = a + b;


console.log(c);

const btnnn = document.getElementById('btnnn');
btnnn.addEventListener('click', function handleClick(){
    const initalText = 'Add To Cart';
    const backgroundColor = btnnn.style.backgroundColor;

    if (backgroundColor === 'blue'){
        btnnn.style.backgroundColor = 'red';
    }  else{
        btnnn.style.backgroundColor = 'blue';
    };
    





    if (btnnn.textContent.toLowerCase().includes(initalText.toLocaleLowerCase())){
        btnnn.textContent = 'Already In Cart';
    }  else {
        btnnn.textContent = initalText;
    }
});


const btnn = document.getElementById('btnn');
btnn.addEventListener('click', function handleClick(){
    const initalText = 'Add To Cart';
    const backgroundColor = btnn.style.backgroundColor;

    if (backgroundColor === 'blue'){
        btnn.style.backgroundColor = 'red';
    }  else{
        btnn.style.backgroundColor = 'blue';
    };
    





    if (btnn.textContent.toLowerCase().includes(initalText.toLocaleLowerCase())){
        btnn.textContent = 'Already In Cart';
    }  else {
        btnn.textContent = initalText;
    }
});





const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(){
    const initalText = 'Add To Cart';
    const backgroundColor = btn.style.backgroundColor;

    if (backgroundColor === 'blue'){
        btn.style.backgroundColor = 'red';
    }  else{
        btn.style.backgroundColor = 'blue';
    };
    





    if (btn.textContent.toLowerCase().includes(initalText.toLocaleLowerCase())){
        btn.textContent = 'Already In Cart';
    }  else {
        btn.textContent = initalText;
    }
});









