function justInvoke(arg){
  return arg();}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue,arg)
}  
  
setThisWithApply  
function setThisWithApply(fn, thisValue, arg){
  return fn.apply(thisValue,arg)
}  