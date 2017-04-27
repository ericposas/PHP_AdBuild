<?php

# Frame animation insertion -- run from command line 

if(isset($argv[1])){
  array_shift($argv);
  createFrames();
}else{
  echo "Please supply a number of frames to generate animation sequences.\n";
}

function createFrames(){
  $elems="// 'f1', 'f2', and so on, is the array of elements in each frame \n";  # store elems and add back to $jscode variable 
  $elems.="var d = 2.5, st = 0.1;\n";
  $jscode="frame1(); //start up animation \n";
  global $argv;
  
  for($i = 0; $i < $argv[0]; $i+=1){
    # create animation code based on number in $argv[0]
    $n=$i+1;
    $next=$n+1;
    # add to elems arrays 
    $elems.="var f$n = [];\n";
    # js animation code to generate 
    $jscode .= "
// frame $n animation 
function frame$n(){
  A.fadeinfromleft(f$n, st, function(){
      A.dCall(d, frame${n}_out);
    });
  }
function frame${n}_out(){\n";
    
    if($n < $argv[0]){
      $jscode .= " "." "."A.fadeouttoright(f$n, st, frame$next);\n";
      #$jscode .= " "." "."A.fadeouttoright(f$n, st, end);\n";
    }else{
      $jscode .= " "." "."end();\n";
    }
    
    $jscode .=
    "}
    
    ";
  }
  
  
  # add temp. "end()" function 
  $jscode.="
function end(){
  console.log('end.');
}";
  # rearrange js data
  $js.=$elems."\n".$jscode;
  
  if(!$handle = fopen("frames.js","w")){
    echo "Couldn't create/open new js file.";
  }else{
    fwrite($handle, $js);
    fclose($handle);
  }
  
}
