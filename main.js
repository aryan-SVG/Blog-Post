// $(document).ready(function(){


//     $nav=$(".nav");
//     $togglecollapse=$("#togg");

    

//     $togglecollapse.click(function(){
//         $nav.toggleclass("collapse");
//     })
// });


$nav=$(".nav");
document.getElementById("togg").addEventListener("click",abc);


function abc(){
    $nav.toggleClass("collapse")
}


