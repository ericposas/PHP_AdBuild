banner.adEndProps = { openDelay: 2, closeDelay:2 };

banner.adEnd = function(){
  A.impact('btn', 0, B.tOrigin);
  if(B.legalBubble === true){
    A.dCall(B.adEndProps.openDelay, function(){
      A.visible('bubble');
        A.dCall(B.adEndProps.closeDelay, function(){
          B.adState = 'ended';
          A.invisible('bubble');
          B.showReload(1);
        });
      });
  }else{
    B.adState = 'ended';
    A.invisible('bubble');
    B.showReload(1);
  }
}
