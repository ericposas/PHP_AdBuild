<?php 

# write code that replaces a any sort of commented token --ex. //%F% 

# we'll need to:
# -save a ref to the file path & file name info of the original file
# -get contents of original file, saved as string
# -get contents of replace file
# -search for the token in the original and replace the token with the contents of the replacement file
# -close the file
# -save the new file over the old one 


# first, let's process some arguments 
# order of arguments: 1:og_file  2:replace_file  3:token 
if(isset($argv[1]) && isset($argv[2]) && isset($argv[3])){
  $token = $argv[3];
  $new_content = "testing...";
  #echo $token."\n";
  replaceToken();
}else{
  echo "Please provide: file.js (with demarked token), replace.js (code to replace token), and token (str).\n";
}

function replaceToken(){
  if(!getPathAndFileName()){
    exit();
  }
  if(!getContentsOfFiles()){
    exit();
  }
  if(!searchForTokenAndReplace()){
    exit();
  }
  if(!writeToFile()){
    exit();
  }else{
    echo "Success!\n";
  }
}

function getPathAndFileName(){
  global $argv, $og_file_path, $og_file, $replace_file_path, $replace_file, $token;
  #capture file name and file path 
  $rgx_fpath = '/(\/.+\/)(\w+\.\w{2,3})/';
  preg_match($rgx_fpath, $argv[1], $matches);
  #set vars to global space
  $og_file_path = $matches[1];
  $og_file = $matches[2];
  #echo $og_file_path.$og_file."\n";
  #replace file
  preg_match($rgx_fpath, $argv[2], $r_matches);
  $replace_file_path = $r_matches[1];
  $replace_file = $r_matches[2];
  #echo $replace_file_path.$replace_file."\n";
  if(!empty($og_file) && !empty($replace_file)){
    return true;
  }
}

function getContentsOfFiles(){
  global $og_file, $replace_file, $og_file_path, $replace_file_path, $og_file_contents, $replace_file_contents;
  #get contents of original file.. 
  if(!$og_file_contents = file_get_contents($og_file_path.$og_file)){
    echo "Couldn't read file contents of the original file.\n";
    exit();
  }
  #get contents of replacement file..
  if(!$replace_file_contents = file_get_contents($replace_file_path.$replace_file)){
    echo "Couldn't read file contents of the replacement file.\n";
    exit();
  }else{
    return true;
  }
}

function searchForTokenAndReplace(){
  global $new_content, $og_file_contents, $replace_file_contents, $token;
  if($new_content = str_replace($token, $replace_file_contents, $og_file_contents, $count)){
    if($count < 1){
      echo "Token replacement failed.\n";
    }else{
      #echo $new_content;
      return true;
    }
  }
}

function writeToFile(){
  global $new_content, $og_file_path, $replace_file_path, $og_file;
  if(!$og_file_handle = fopen($og_file_path.$og_file, "w")){
    echo "Could not open original file for writing new content into.\n";
    exit();
  }
  if(empty($new_content)){
    echo "..no content.\n";
    exit();
  }
  if(!fwrite($og_file_handle, $new_content)){
    echo "Could not overwrite file with new content.\n";
    exit();
  }
  if(!fclose($og_file_handle)){
    echo "Failed to close file after writing.\n";
    exit();
  }else{
    return true;
  }
}


