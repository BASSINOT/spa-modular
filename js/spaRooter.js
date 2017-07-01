$(document).ready(function(){
    
    //Vérification de la présence de la page index
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
    
    //gestion des lien quant on clique
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
    //gestion de la side bar
    $('.menuBtn').addClass('menuClose');
    $('.spaSideMenu').addClass('spaMenuHidden');
    $('.menuBtn').click(function(e){
        e.preventDefault();
        $(this).css({
            rotate : '90deg'
        })
        elemMenu = $(this);
        if($('.spaSideMenu').attr('class').replace('spaSideMenu','').replace(' ','')=='spaMenuHidden'){
            $('.spaSideMenu').removeClass('spaMenuHidden');
            $(elemMenu).addClass('menuOpen');
            $(elemMenu).removeClass('menuClose');
        }else{
            $('.spaSideMenu').addClass('spaMenuHidden');
            $(elemMenu).removeClass('menuOpen');
            $(elemMenu).addClass('menuClose');
        }
    });
    
    //Gestion du localStorage
    dataStorage = {}//objet de storage des data de la spi
    dataStorage.spaHttpAdresse = window.location.href;
    localStorage
    
    //vérification de l'existance du localStorage
    if(localStorage['formDatas']){
        $forsDatas = JSON.parse(localStorage['formDatas']);
        if($forsDatas.spaHttpAdresse == dataStorage.spaHttpAdresse){
            console.log($forsDatas);
            $.each($forsDatas,function(n,e){
                if(n!='spaHttpAdresse'){
                    $('input[name='+n+']').val(e);
                    dataStorage[n]=e;
                }
            });
        }
    }
    
    //icrémentation du local storage
    $('.spa-datas-field').keyup(function(){
        dataStorage[$(this).attr('name')] = $(this).val();
        localStorage.setItem('formDatas',JSON.stringify(dataStorage));
        console.log(dataStorage);
    });
    
    //désactivation de la fonction d'envoie native du form
    $('form').submit(function(e){
        e.preventDefault();
    });
    
    
    //nouvelle fonction submit de la SPA
    $('form input[type=submit]').click(function(e){
        e.preventDefault();
        alert('action de submit');
        // VOTRE CODE ICI
    });
    
});
