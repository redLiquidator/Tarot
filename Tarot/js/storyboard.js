
// ▣ 실기시험 1 (40점 만점)
// 	-작성자 : 이진주 (5강의실)
// 	-주 제  : 타로운세를 보는 페이지
// 	-목 적  : 방문자의 타로운세를 보는 페이지를 제작한다. 
// 	(해석 발췌: 네이버블로거 tarotw님 http://blog.naver.com/tarotw/220017883489)
// 	(카드이미지: http://triple-m-art.deviantart.com/art/The-Rainbow-Tarot-Major-Arcana-473157512)
// 	(바탕화면: https://www.artstation.com/artwork/L3ZA0)
// 	-기 능 : 메뉴, 카드 애니메이션 


/*카드뒷면을 클릭하면 처음 한장만 앞면 그림이 나타나도록*/
	var i=0;
	var cardnum;
	function changeRotate(num){
	cardnum=num;
	
	i++;
	if(i==1){
	var card=document.querySelector('.n'+num);
	card.style.transform="rotateY(180deg)"; 

	var button=document.querySelector('.button'); /*결과보기 버튼이 보이도록 설정*/
	button.style.visibility='visible';
	} 
	else{ }
	} 

	function showCards(){   
		console.log("showCards");
		var cards=document.querySelector('.le'); /*카드22장을 보여준다*/
		cards.style.visibility='visible';
		var line=document.querySelector('h2');  /*숨겨져있던 '카드한장을 선택하세요' 메시지를 보여준다*/
		line.style.display='block';
		var result=document.querySelector('h3');  /*해석이 담겨진 h3를 숨긴다*/
		result.style.display='none'; 
	}		

	function showResult(){
	i--; /*changeRotate함수에서 1증가시켜서 카드회전을 막았으므로, 다시 1감소시킨다*/
	console.log(cardnum) /*카드클릭으로 인해 받은 숫자, 즉 num을 cardnum으로 넘겨받았다. */
	var x = document.getElementById("result"+cardnum).innerHTML;  /*넘겨받은 cardnum번호에 해당하는 해석을 선택한다*/
	document.getElementById("final").innerHTML = x; 
	var result=document.querySelector('h3');  /*해석이 담겨진 h3를 보이도록 만든다*/
	result.style.display='block'; 
	var cards=document.querySelector('.le');  /*카드 22장은 보이지 않도록 만든다.*/
	cards.style.visibility='hidden';
	var line=document.querySelector('h2');   /*'카드한장을 선택하세요' 메시지는 보이지 않도록 만든다.*/
	line.style.display='none';
	
	var card=document.querySelector('.n'+cardnum);
	card.style.transform="rotateY(0deg)";  /*뒤집어진 카드한장은 다시 180도 회전하여 제자리로 돌아온다*/

	var button=document.querySelector('.button'); /*결과보기 버튼을 숨긴다*/
	button.style.visibility='hidden';

	}

	function intoTheFront(){
		/*첫화면으로 돌아가도록 만든다*/
	var result=document.querySelector('h3');  /*해석이 담겨진 h3를 숨긴다*/
	result.style.display='none'; 

	var button=document.querySelector('.button'); /*결과보기 버튼을 숨긴다*/
	button.style.visibility='hidden';
	}

