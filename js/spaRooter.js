$(document).ready(function(){
    
    if($('.view-name-index').length == 0){
        alert('Attentnion le systeme requiere une vue indexe');
    }else{
        $('.spaRooter-view').css({
            left : '100%'
        });
        $('.view-name-index').css({
            left : '0%'
        });
    }
    
    $('.spaRooter-link').click(function(e){
        e.preventDefault();
        $view = $(this).attr('href');
        $('.spaRooter-link').removeClass('spaActive');
        $(this).addClass('spaActive');
        
        views = $('.view-name-'+$view);
        
        if(views.length==0){
            alert('erreur 404');
        }else{
            $('.spaRooter-view').css({
                left : '100%'
            });
            $('.view-name-'+$view).css({
                left : '0%'
            });
        }
        
        
    });
});