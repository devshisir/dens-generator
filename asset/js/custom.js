$(document).ready(function() {
   
    


    function tabAnimation1 (){
        // tab panel animation slide
        var slidePanel1 = $('.animationPanel').css('width');

        var panelWidth = slidePanel1.replace('px','');
        
        var CountList1 = 0;
        
        $('#resultsTab li').each(function(){
            CountList1++;
        })


        var val1 = panelWidth/CountList1;

        $('.animationPanel').css('width',val1 + 'px');


        $('#resultsTab li:nth-child(1)').on('click',function(){
            $('.animationPanel').animate({
                left: '0px',
            })
        })

        $('#resultsTab li:nth-child(2)').on('click',function(){
            $('.animationPanel').animate({
                left: val1 + 'px',
            })
        })
    };
    tabAnimation1();

    
    function tabAnimation2 (){
        // tab panel animation slide
        var slidePanel1 = $('.animationPanel2').css('width');
        var panelWidth = slidePanel1.replace('px','');
        var CountList1 = 0;
        $('#flowsTab li').each(function(){
            CountList1++;
        })
        var val1 = panelWidth/CountList1;
        $('.animationPanel2').css('width',val1 + 'px');
        $('#flowsTab li:nth-child(1)').on('click',function(){
            $('.animationPanel2').animate({
                left: '0px',
            })
        })
        $('#flowsTab li:nth-child(2)').on('click',function(){
            $('.animationPanel2').animate({
                left: val1 + 'px',
            })
        })
    };

    tabAnimation2();










    
});