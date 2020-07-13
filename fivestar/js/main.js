import {Rater} from './rater.js'
// DOMContentLoaded means all html components has been loaded , just the HTML connetnt
document.addEventListener('DOMContentLoaded',function(){
   const raters=document.querySelectorAll('[role=rater]');
   raters.forEach(rater=>{
       new Rater(rater);
   })
})