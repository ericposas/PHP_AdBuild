var banner = {}, B = banner;
window.onload = function(){ B.init(); }
//optionally set a different border color
B.borderColor = '#959595';
//hide reload button once user clicks the legal div to open the legal bubble?
B.hideReloadOnBubbleOpen = true;
//sets 'transformOrigin' of CTA button
B.tOrigin = (302/2) + 'px ' + (346/2) + 'px';
//is there a legal bubble in this particular creative?
B.legalBubble = false;
//initialize ad
B.init = function(){
  //%ELEMENTS%
  var b = {x:0, y:0, atlas:true, dimensions:{w:90, h:22}};
  var r = {x:0, y:0, scale:0.5, transformOrigin:"18px 18px", reverse:true, hardRefresh:true};
  Main.init(null, null, e, b, '', r, null, null);
  B.prelim();
  F.HDify(e);
}
//set preliminary steps -- has to do with splitImg functions
B.prelim = function(){
  if(B.prelimDone === false){ B.setUpDivs(); }
  B.prelimDone = true;
}
//animate the banner ad
B.animate = function(){
  A.visible(['back']);
  B.addScrollableLegal(false);
    
  //%FRAMES%
  
  
  //call 'B.adEnd()' at end of animation -- located in adEnd.js
    
}

