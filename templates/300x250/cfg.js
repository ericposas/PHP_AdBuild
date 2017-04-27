//config
var cfg ={
  t : 'AWC34157-',
  w : 300,
  h : 250
};

function runCfg(){
  var title=document.getElementsByTagName('title')[0];
  var sz=document.getElementById('size');
  title.innerHTML+=cfg.t+cfg.w+'x'+cfg.h;
  document.getElementById('adSizeMeta').setAttribute('content','width='+cfg.w+',height='+cfg.h);
  sz.setAttribute('data-width',cfg.w);
  sz.setAttribute('data-height',cfg.h);
}