var log={
    info:function(info){
        console.log('Info : ${info}');
    },
    warning:function(warning){
        console.log('warning : ${warning}');
    }
}
 module.exports=log

 //the latest module object is taken
 module.exports.display=function(){}
 //added but not overwritten with the the above 