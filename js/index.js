var option1 = document.getElementById('head-option-1').children
for(var a=0;a<option1.length;a++){
    option1[a].onclick=function(){
        for(var b=0;b<option1.length;b++){
            option1[b].style.background='#fff'
            option1[b].children[0].style.color='black'
        }
        this.style.background='red'
        this.children[0].style.color='#fff'
    };
}


$('.city-one').hover(function(){
    $('.city-two').css('display','block')

},function(){
    // $('.city-two').css('display','none')
})
$('.city-two').mouseleave(function(){
    $('.city-two').css('display','none')
})
