function receivesAFunction(cb){
cb();
};

function returnsANamedFunction(){
    function returnFunction(){};
    return returnFunction
}



function returnsAnAnonymousFunction(){
   return function(){}
}
