const target = document.getElementById('target');
let yes = document.getElementById('yes');

yes.addEventListener('click',() => {
    alert("I knew it,Tulin,I love you too my world 💓💓💓");
})

function movetarget(){
    const maxWidth = 400;
    const maxHeight = 400;

    const ranomX = Math.floor(Math.random() * maxWidth);
    const ranomY = Math.floor(Math.random() * maxHeight);

    target.style.left = ranomX + 'px' ;
    target.style.top = ranomY + 'px' ;

}

target.addEventListener('mouseenter', function(){
    movetarget();
})