// ▣ 실기시험 2 (40점 만점)
// 	작성자 : 이진주 
// 	주제: 유기화학 내용정리,활용 공간틀
// 	목적: 유기화학 내용을 정리,활용하는 틀을 제공한다
// 	기능: 메뉴, 바탕화면색 변경, 작업창 수 변경


/*창갯수를 설정한다*/
function showFrame(value) {
console.log(value)
switch (value) {
	case "0":  /*7개창을 모두 안보이도록 만든다*/
		var x = document.querySelectorAll(".frame");
		x[0].style.display = "none";
		x[1].style.display = "none";
		x[2].style.display = "none";
		x[3].style.display = "none";
		x[4].style.display = "none";
		x[5].style.display = "none";
		x[6].style.display = "none";
		break;
	case "1": /*1번째 창만 보이도록 만든다*/
		var show = document.getElementById('frame1');
		show.style.display = 'inline';
		var x = document.querySelectorAll(".frame");
		x[1].style.display = "none";
		x[2].style.display = "none";
		x[3].style.display = "none";
		x[4].style.display = "none";
		x[5].style.display = "none";
		x[6].style.display = "none";
		break;
	case "2": /*1,2번째 창만 보이도록 만든다*/
		var show = document.getElementById('frame1');
		show.style.display = 'inline';
		var show = document.getElementById('frame2');
		show.style.display = 'inline';
		var x = document.querySelectorAll(".frame");
		x[2].style.display = "none";
		x[3].style.display = "none";
		x[4].style.display = "none";
		x[5].style.display = "none";
		x[6].style.display = "none";
		break;
	case "3":
		var show = document.getElementById('frame1');
		show.style.display = 'inline';
		var show = document.getElementById('frame2');
		show.style.display = 'inline';
		var show = document.getElementById('frame3');
		show.style.display = 'inline';
		var x = document.querySelectorAll(".frame");
		x[3].style.display = "none";
		x[4].style.display = "none";
		x[5].style.display = "none";
		x[6].style.display = "none";
		break;
	case "4":
		var show = document.getElementById('frame1');
		show.style.display = 'inline';
		var show = document.getElementById('frame2');
		show.style.display = 'inline';
		var show = document.getElementById('frame3');
		show.style.display = 'inline';
		var show = document.getElementById('frame4');
		show.style.display = 'inline';
		var x = document.querySelectorAll(".frame");
		x[4].style.display = "none";
		x[5].style.display = "none";
		x[6].style.display = "none";
		break;
	case "5":
		var show = document.getElementById('frame1');
		show.style.display = 'inline';
		var show = document.getElementById('frame2');
		show.style.display = 'inline';
		var show = document.getElementById('frame3');
		show.style.display = 'inline';
		var show = document.getElementById('frame4');
		show.style.display = 'inline';
		var show = document.getElementById('frame5');
		show.style.display = 'inline';
		var x = document.querySelectorAll(".frame");
		x[5].style.display = "none";
		x[6].style.display = "none";
		break;
	case "6":
		var show = document.getElementById('frame1');
		show.style.display = 'inline';
		var show = document.getElementById('frame2');
		show.style.display = 'inline';
		var show = document.getElementById('frame3');
		show.style.display = 'inline';
		var show = document.getElementById('frame4');
		show.style.display = 'inline';
		var show = document.getElementById('frame5');
		show.style.display = 'inline';
		var show = document.getElementById('frame6');
		show.style.display = 'inline';
		var x = document.querySelectorAll(".frame");
		x[6].style.display = "none";

		break;
	case "7":
		var show = document.getElementById('frame1');
		show.style.display = 'inline';
		var show = document.getElementById('frame2');
		show.style.display = 'inline';
		var show = document.getElementById('frame3');
		show.style.display = 'inline';
		var show = document.getElementById('frame4');
		show.style.display = 'inline';
		var show = document.getElementById('frame5');
		show.style.display = 'inline';
		var show = document.getElementById('frame6');
		show.style.display = 'inline';
		var show = document.getElementById('frame7');
		show.style.display = 'inline';
		break;
}
}

	var numm;
	function clicked(num){
	numm=num;	
	console.log("you clicked"+num);	
	}

	function listname(value){
	/*목차 내 제목을 클릭하면 해당내용이 나온다. 해당내용은 html 161 line 부터*/
	console.log("you will read.."+value);
	console.log("on this subframe.."+numm);
	var x = document.getElementById("resource"+value).innerHTML;  
	document.getElementById("subframe"+numm).innerHTML = x;
	}