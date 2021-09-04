// event pada saat link di klik
$('.page-scroll').on('click',function(){

// ambil isi href
var tujuan=$(this).attr('href');


//tangkap element yang bersangkutan

var elementTujuan=$(tujuan);

console.log($('body').scrollTop());



e.preventDefault();


	
});