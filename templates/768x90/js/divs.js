banner.setUpDivs = function(){
    B.div('btn_div',{},{
        mouseover:function(){
            if(B.adState === "ended"){
                A.to('btn', 0.3, {scale:1.1, transformOrigin:B.tOrigin});
            }
        },
        mouseout:function(){
            if(B.adState === "ended"){
                A.to('btn', 0.3, {scale:1.0, transformOrigin:B.tOrigin});
            }
        }
    }, true);
    B.div('legal_div', {},{
        click: function(){
            if(banner.adState === 'ended'){
                A.visible('bubble');
                A.visible('x');
                A.visible('legaltextfade');
                A.set('reload', {alpha:0.5});
                TweenLite.set('#legal_text_image', {display:'block'});
                banner.legalOpen = true;
            }else{
                window.open(clickTag, '_blank');
            }
        }
    }, true);
    
    B.div('x_div', {},{
        click: function(){
            if(banner.adState === 'ended'){
                A.invisible('bubble');
                A.invisible('x');
                A.invisible('legaltextfade');
                A.set('reload', {alpha:1});
                TweenLite.set('#legal_text_image', {display:'none'});
                TweenLite.set('#legal_text_image', {y:0});
                banner.legalPage = 1;
                banner.legalOpen = false;
            }else{
                window.open(clickTag, '_blank');
            }
        }
    }, true);
}