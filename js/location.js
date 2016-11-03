/**
 * Created by Administrator on 2015/10/22.
 */

$(function () {
    var url = window.location.search;
    var loc = url.substring(url.lastIndexOf('=')+1, url.length);
    var tel = '';

    if(typeof eval(loc) == 'number'){
        tel = eval(loc);
    }else{
        tel = '';
    }

    if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
        window.location = "http://119.254.166.158:9090/register/"+ tel;
    }else{
        window.location = "http://www.mandianfu.com.cn/register/"+ tel;
    }
});
