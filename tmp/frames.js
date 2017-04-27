// 'f1', 'f2', and so on, is the array of elements in each frame 
var d = 2.5, st = 0.1;
var f1 = [];
var f2 = [];
var f3 = [];
var f4 = [];
var f5 = [];

frame1(); //start up animation 

// frame 1 animation 
function frame1(){
  A.fadeinfromleft(f1, st, function(){
      A.dCall(d, frame1_out);
    });
  }
function frame1_out(){
  A.fadeouttoright(f1, st, frame2);
}
    
    
// frame 2 animation 
function frame2(){
  A.fadeinfromleft(f2, st, function(){
      A.dCall(d, frame2_out);
    });
  }
function frame2_out(){
  A.fadeouttoright(f2, st, frame3);
}
    
    
// frame 3 animation 
function frame3(){
  A.fadeinfromleft(f3, st, function(){
      A.dCall(d, frame3_out);
    });
  }
function frame3_out(){
  A.fadeouttoright(f3, st, frame4);
}
    
    
// frame 4 animation 
function frame4(){
  A.fadeinfromleft(f4, st, function(){
      A.dCall(d, frame4_out);
    });
  }
function frame4_out(){
  A.fadeouttoright(f4, st, frame5);
}
    
    
// frame 5 animation 
function frame5(){
  A.fadeinfromleft(f5, st, function(){
      A.dCall(d, frame5_out);
    });
  }
function frame5_out(){
  end();
}
    
    
function end(){
  console.log('end.');
}