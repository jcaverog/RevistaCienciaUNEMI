!function(t){"use strict";var e=[0,1,2,3,4,5,6,7,8,9];t.SECOND=1e3,t.MINUTE=60*t.SECOND,t.HOUR=60*t.MINUTE,t.DAY=24*t.HOUR,t.WEEK=7*t.DAY,t.prototype.setLocalDateOnly=function(e,r){if("gregorian"!=e)return"";var a=new t(r);this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate())},t.prototype.setLocalDate=function(t,e){return"gregorian"!=t?"":this.setDate(e)},t.prototype.setLocalMonth=function(t,e,r){return"gregorian"!=t?"":(null==r&&this.getDate(),this.setMonth(e))},t.prototype.setOtherFullYear=function(e,r){if("gregorian"!=e)return"";var a=new t(this);return a.setFullYear(r),a.getMonth()!=this.getMonth()&&this.setDate(28),this.setUTCFullYear(r)},t.prototype.setLocalFullYear=function(e,r){if("gregorian"!=e)return"";var a=new t(this);return a.setFullYear(r),a.getMonth()!=this.getMonth()&&this.setDate(28),this.setFullYear(r)},t.prototype.getLocalWeekDays=function(t,e){return 6},t.prototype.getOtherFullYear=function(t){return"gregorian"!=t?"":this.getFullYear()},t.prototype.getLocalFullYear=function(t){return"gregorian"!=t?"":this.getFullYear()},t.prototype.getLocalMonth=function(t){return"gregorian"!=t?"":this.getMonth()},t.prototype.getLocalDate=function(t){return"gregorian"!=t?"":this.getDate()},t.prototype.getLocalDay=function(t){return"gregorian"!=t?"":this.getDay()},t.prototype.getLocalMonthDays=function(t,e){if("gregorian"!=t)return"";var r=this.getFullYear();return void 0===e&&(e=this.getMonth()),0!=r%4||0==r%100&&0!=r%400||1!=e?[31,28,31,30,31,30,31,31,30,31,30,31][e]:29},t.prototype.getLocalWeekNumber=function(e){if("gregorian"!=e)return"";var r=new t(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0),a=r.getDay();r.setDate(r.getDate()-(a+6)%7+3);var n=r.valueOf();return r.setMonth(0),r.setDate(4),Math.round((n-r.valueOf())/6048e5)+1},t.prototype.getLocalDayOfYear=function(e){if("gregorian"!=e)return"";var r=new t(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0)-new t(this.getFullYear(),0,0,0,0,0);return Math.floor(r/t.DAY)},t.prototype.equalsTo=function(t){return this.getFullYear()==t.getFullYear()&&this.getMonth()==t.getMonth()&&this.getDate()==t.getDate()&&this.getHours()==t.getHours()&&this.getMinutes()==t.getMinutes()},t.localCalToGregorian=function(t,e,r){return""},t.gregorianToLocalCal=function(t,e,r){return""},t.convertNumbers=function(t){t=t.toString();for(var r=0,a=e.length;r<a;r++)t=t.replace(new RegExp(r,"g"),e[r]);return t},t.toEnglish=function(t){t=this.toString();for(var e=[0,1,2,3,4,5,6,7,8,9],r=0;r<10;r++)t=t.replace(new RegExp(e[r],"g"),r);return t},t.monthsToLocalOrder=function(t){return t},t.parseFieldDate=function(e,r,a,n){"gregorian"!=a&&(e=t.toEnglish(e));var o=new t,s=0,i=-1,g=0,u=e.split(/\W+/),l=r.match(/%./g),h=0,c=0,p=0,f=0,D=0;for(h=0;h<u.length;++h)if(u[h])switch(l[h]){case"%d":case"%e":g=parseInt(u[h],10);break;case"%m":i=parseInt(u[h],10)-1;break;case"%Y":case"%y":(s=parseInt(u[h],10))<100&&(s+=s>29?1900:2e3);break;case"%b":case"%B":for(c=0;c<12;++c)if(n.months[c].substr(0,u[h].length).toLowerCase()===u[h].toLowerCase()){i=c;break}break;case"%H":case"%I":case"%k":case"%l":p=parseInt(u[h],10);break;case"%P":case"%p":/pm/i.test(u[h])&&p<12?p+=12:/am/i.test(u[h])&&p>=12&&(p-=12);break;case"%M":f=parseInt(u[h],10);break;case"%S":D=parseInt(u[h],10)}if(isNaN(s)&&(s=o.getFullYear()),isNaN(i)&&(i=o.getMonth()),isNaN(g)&&(g=o.getDate()),isNaN(p)&&(p=o.getHours()),isNaN(f)&&(f=o.getMinutes()),isNaN(D)&&(D=o.getSeconds()),0!=s&&-1!=i&&0!=g)return new t(s,i,g,p,f,D);for(s=0,i=-1,g=0,h=0;h<u.length;++h)if(-1!=u[h].search(/[a-zA-Z]+/)){var M=-1;for(c=0;c<12;++c)if(n.months[c].substr(0,u[h].length).toLowerCase()===u[h].toLowerCase()){M=c;break}-1!=M&&(-1!=i&&(g=i+1),i=M)}else parseInt(u[h],10)<=12&&-1==i?i=u[h]-1:parseInt(u[h],10)>31&&0==s?(s=parseInt(u[h],10))<100&&(s+=s>29?1900:2e3):0==g&&(g=u[h]);return 0==s&&(s=o.getFullYear()),-1!=i&&0!=g?new t(s,i,g,p,f,D):o},t.prototype.print=function(e,r,a,n){if("string"!=typeof r&&(e=""),r||(r="gregorian"),"string"!=typeof e&&(e=""),!e)return"";if("NaN"==this.getLocalDate(r)||!this.getLocalDate(r))return"";var o=this.getLocalMonth(r),s=this.getLocalDate(r),i=this.getLocalFullYear(r),g=this.getLocalWeekNumber(r),u=this.getDay(),l={},h=this.getHours(),c=h>=12,p=c?h-12:h,f=this.getLocalDayOfYear(r);0==p&&(p=12);var D=this.getMinutes(),M=this.getSeconds();l["%a"]=n.shortDays[u],l["%A"]=n.days[u],l["%b"]=n.shortMonths[o],l["%B"]=n.months[o],l["%C"]=1+Math.floor(i/100),l["%d"]=s<10?"0"+s:s,l["%e"]=s,l["%H"]=h<10?"0"+h:h,l["%I"]=p<10?"0"+p:p,l["%j"]=f<100?f<10?"00"+f:"0"+f:f,l["%k"]=h,l["%l"]=p,l["%m"]=o<9?"0"+(1+o):1+o,l["%M"]=D<10?"0"+D:D,l["%n"]="\n",l["%p"]=c?n.pm.toUpperCase():n.am.toUpperCase(),l["%P"]=c?n.pm:n.am,l["%s"]=Math.floor(this.getTime()/1e3),l["%S"]=M<10?"0"+M:M,l["%t"]="\t",l["%U"]=l["%W"]=l["%V"]=g<10?"0"+g:g,l["%u"]=u+1,l["%w"]=u,l["%y"]=(""+i).substr(2,2),l["%Y"]=i,l["%%"]="%";var y=e.replace(/%./g,(function(t){return l[t]||t}));return"gregorian"!=r&&a&&(y=t.convertNumbers(y)),y}}(Date);