function justInvoke(arg){
  return arg();}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue,arg)
}  
  
function setThisWithApply(fn, thisValue, arg){
  return fn.apply(thisValue,arg)
} 

function returnNewFunctionOf(){}

