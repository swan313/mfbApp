/**
 * Created by Administrator on 2015/10/15.
 */
function getTag(obj,name){
    return obj.getElementsByTagName(name);
}

var oUl = document.getElementById('problem'),
    aH2 = getTag(oUl,'h2'),
    aSpan = getTag(oUl,'span'),
    aDiv = getTag(oUl,'div');

for(var i=0; i<aH2.length; i++){
    (function(index){
        aH2[index].onclick = function(){
            if(aDiv[index].style.display == 'block'){
                aDiv[index].style.display = 'none';
                aSpan[index].className = 'caret caret_t';
            }else{
                aDiv[index].style.display = 'block';
                aSpan[index].className = 'caret caret_b';
            }
        };
    })(i);
}