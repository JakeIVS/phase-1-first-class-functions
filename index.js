function receivesAFunction(cb){
cb();
return `${cb()}`;
};

function returnsANamedFunction(){
    return returnsAnAnonymousFunction();
}



function returnsAnAnonymousFunction(){
 
   return function(){}
}
