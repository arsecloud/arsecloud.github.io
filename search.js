	var tit=0;
	var notfound=0;
	var film1=0;var film2=0;var film3=0;var film4=0;var film5=0;var film6=0;var film7=0;var film8=0;var film9=0;var film10=0;var film11=0;var film12=0;
	var film13=0;var film14=0;var film15=0;var film16=0;var film17=0;var film18=0;var film19;var film20=0;var film21=0;var film22=0;var film23=0;var film24=0;var film25=0;
	var film26=0;var film27=0;var film28=0;var film29=0;var film30=0;var film31=0;var film32=0;var film33=0;var film34=0;var film35=0;var film36=0;var film37=0;
	var film38=0;var film39=0;var film40=0;
			var table = document.getElementById('table');
			var tr2 = document.createElement('tr');var tr19 = document.createElement('tr');var tr37 = document.createElement('tr');
			var tr3 = document.createElement('tr');var tr20 = document.createElement('tr');var tr38 = document.createElement('tr');
			var tr1 = document.createElement('tr');var tr21 = document.createElement('tr');
			var tr4 = document.createElement('tr');var tr22 = document.createElement('tr');
			var tr5 = document.createElement('tr');var tr23 = document.createElement('tr');
			var tr6 = document.createElement('tr');var tr24 = document.createElement('tr');
			var tr7 = document.createElement('tr');var tr25 = document.createElement('tr');
			var tr8 = document.createElement('tr');var tr26 = document.createElement('tr');
			var tr9 = document.createElement('tr');var tr27 = document.createElement('tr');
			var tr10 = document.createElement('tr');var tr28 = document.createElement('tr');
			var tr11 = document.createElement('tr');var tr29 = document.createElement('tr');
			var tr12 = document.createElement('tr');var tr30 = document.createElement('tr');
			var tr13 = document.createElement('tr');var tr31 = document.createElement('tr');
			var tr14 = document.createElement('tr');var tr32 = document.createElement('tr');
			var tr15 = document.createElement('tr');var tr33 = document.createElement('tr');
			var tr16 = document.createElement('tr');var tr34 = document.createElement('tr');
			var tr17 = document.createElement('tr');var tr35 = document.createElement('tr');
			var tr18 = document.createElement('tr');var tr36 = document.createElement('tr');





var Inp= document.getElementById('TextIn');
Inp.oninput=function fgjng(){
		Search();

	
}

function Search(){
	notfound=0;

var text = document.getElementById('TextIn').value;
	var film11="Малыш на драйве";
	var pos=0;
	var val = 0;


		if(tit==0){

					tit=1;
					tr1.innerHTML = '<td><h2>Вот что я нашёл</h2></td>';
					table.appendChild(tr1);}
	

if(text==''){
	text='1111111111111111111111111111111111';
	table.removeChild(tr1);
	tit=0;
	notfound=1;
}

	if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film1==0){


											tr2.innerHTML = '<td><a href="Categories/all/baby.html">Малыш на драйве</a></td><td><a href="baby.html"><img width="10%" src = "Categories/all/images/baby.jpg"></a></td>';

								table.appendChild(tr2);
					notfound=1;
					film1=1;

				}
	}
	else{
		if(film1==1){		
			table.removeChild(tr2);
			film1=0;
}
	}



film11="Твоё имя";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film2==0){
											tr3.innerHTML = '<td><a href="Categories/all/yourname.html">Твоё имя</a></td><td><a href="Categories/all/yourname.html"><img width="10%" src = "Categories/all/images/yourname.jpg"></a></td>';

					table.appendChild(tr3);
					notfound=1;
					film2=1;

				}
	}

	else{
		if(film2==1){		
			table.removeChild(tr3);
				film2=0;
}
	}





	film11="Заклятие";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film3==0){
					tr4.innerHTML = '<tr><td><a href="Categories/all/zak.html">Заклятие</a></td><td><a href="Categories/all/zak.html"><img width="10%" src = "Categories/all/images/zak.jpg"></a></td></tr>';

					table.appendChild(tr4);
					notfound=1;
					film3=1;

				}
	}

	else{
		if(film3==1){		
			table.removeChild(tr4);
				film3=0;
}
	}


film11="Босс молокосос";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film4==0){
					tr5.innerHTML = '<tr><td><a href="Categories/all/boss.html">Босс молокосос</a></td><td><a href="Categories/all/boss.html"><img width="10%" src = "Categories/all/images/boss.jpg"></a></td></tr>';

					table.appendChild(tr5);
					notfound=1;
					film4=1;

				}
	}

	else{
		if(film4==1){		
			table.removeChild(tr5);
				film4=0;
}
	}




film11="Ходячий замок";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film5==0){
					tr6.innerHTML = '<tr><td><a href="Categories/all/castle.html">Ходячий замок</a></td><td><a href="Categories/all/castle.html"><img width="10%" src = "Categories/all/images/castle.jpg"></a></td></tr>';

					table.appendChild(tr6);
					notfound=1;
					film5=1;

				}
	}

	else{
		if(film5==1){		
			table.removeChild(tr6);
				film5=0;
}
	}
		


film11="Стражи галактики";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film7==0){
					tr7.innerHTML = '<tr><td><a href="Categories/all/galaxy.html">Стражи галактики</a></td><td><a href="Categories/all/galaxy.html"><img width="10%" src = "Categories/all/images/galaxy.jpg"></a></td></tr>';

					table.appendChild(tr7);
					notfound=1;
					film7=1;

				}
	}

	else{
		if(film7==1){		
			table.removeChild(tr7);
				film7=0;
}
	}


	film11="Игры разума";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film8==0){
					tr8.innerHTML = '<tr><td><a href="Categories/all/gamerazum.html">Игры разума</a></td><td><a href="Categories/all/gamerazum.html"><img width="10%" src = "Categories/all/images/gamerazum.jpg"></a></td></tr>';

					table.appendChild(tr8);
					notfound=1;
					film8=1;

				}
	}

	else{
		if(film8==1){		
			table.removeChild(tr8);
				film8=0;
}
	}





		film11="Холодное сердце";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film9==0){
					tr9.innerHTML = '<tr><td><a href="Categories/all/heart.html">Холодное сердце</a></td><td><a href="Categories/all/heart.html"><img width="10%" src = "Categories/all/images/heart.jpg"></a></td></tr>';

					table.appendChild(tr9);
					notfound=1;
					film9=1;

				}
	}

	else{
		if(film9==1){		
			table.removeChild(tr9);
				film9=0;
}
	}







film11="Хижина в лесу";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film10==0){

					tr10.innerHTML = '<tr><td><a href="Categories/all/house.html">Хижина в лесу</a></td><td><a href="Categories/all/house.html"><img width="10%" src = "Categories/all/images/house.jpg"></a></td></tr>';

					table.appendChild(tr10);
					notfound=1;
					film10=1;

				}
	}

	else{
		if(film10==1){		
			table.removeChild(tr10);
				film10=0;
}
	}





film11="Кингсман";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film11==0){

					tr11.innerHTML = '<tr><td><a href="Categories/all/kingsman.html">Кингсман</a></td><td><a href="Categories/all/kingsman.html"><img width="10%" src = "Categories/all/images/kingsman.jpg"></a></td></tr>';

					table.appendChild(tr11);
					notfound=1;
					film11=1;

				}
	}

	else{
		if(film11==1){		
			table.removeChild(tr11);
				film11=0;
}
	}




film11="Оно";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film12==0){

					tr12.innerHTML = '<tr><td><a href="Categories/all/itcinema.html">Оно</a></td><td><a href="Categories/all/itcinema.html"><img width="10%" src = "Categories/all/images/it.jpg"></a></td></tr>';

					table.appendChild(tr12);
					notfound=1;
					film12=1;

				}
	}

	else{
		if(film12==1){		
			table.removeChild(tr12);
				film12=0;
}
	}




	film11="Легенда №17";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film13==0){
					tr13.innerHTML = '<tr><td><a href="Categories/all/legend.html">Легенда №17</a></td><td><a href="Categories/all/legend.html"><img width="10%" src = "Categories/all/images/legend.jpg"></a></td></tr>';


					table.appendChild(tr13);
					notfound=1;
					film13=1;

				}
	}

	else{
		if(film13==1){		
			table.removeChild(tr13);
				film13=0;
}
	}




	film11="Логан";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film14==0){
					tr14.innerHTML = '<tr><td><a href="Categories/all/logan.html">Логан</a></td><td><a href="Categories/all/logan.html"><img width="10%" src = "Categories/all/images/logan.jpg"></a></td></tr>';


					table.appendChild(tr14);
					notfound=1;
					film14=1;

				}
	}

	else{
		if(film14==1){		
			table.removeChild(tr14);
				film14=0;
}
	}



	film11="Спасатели малибу";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film15==0){
					tr15.innerHTML = '<tr><td><a href="Categories/all/malibu.html">Спасатели малибу</a></td><td><a href="Categories/all/malibu.html"><img width="10%" src = "Categories/all/images/malibu.jpg"></a></td></tr>';


					table.appendChild(tr15);
					notfound=1;
					film15=1;

				}
	}

	else{
		if(film15==1){		
			table.removeChild(tr15);
				film15=0;
}
	}



	film11="Сосед по имени Тороро";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film16==0){

					tr16.innerHTML = '<tr><td><a href="Categories/all/neighbor.html">Сосед по имени Тороро</a></td><td><a href="Categories/all/neighbor.html"><img width="10%" src = "Categories/all/images/neighbor.jpg"></a></td></tr>';

					table.appendChild(tr16);
					notfound=1;
					film16=1;

				}
	}

	else{
		if(film16==1){		
			table.removeChild(tr16);
				film16=0;
}
	}




	film11="Унесённая призраками";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film17==0){

					tr17.innerHTML = '<tr><td><a href="Categories/all/prizrakami.html">Унесённая призраками</a></td><td><a href="Categories/all/prizrakami.html"><img width="10%" src = "Categories/all/images/prizrakami.jpg"></a></td></tr>';

					table.appendChild(tr17);
					notfound=1;
					film17=1;

				}
	}

	else{
		if(film17==1){		
			table.removeChild(tr17);
				film17=0;
}
	}





	film11="Разум в огне";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film18==0){
					tr18.innerHTML = '<tr><td><a href="Categories/all/razuminfire.html">Разум в огне</a></td><td><a href="Categories/all/razuminfire.html"><img width="10%" src = "Categories/all/images/razuminfire.jpg"></a></td></tr>';


					table.appendChild(tr18);
					notfound=1;
					film18=1;

				}
	}

	else{
		if(film18==1){		
			table.removeChild(tr18);
				film18=0;
}
	}




	film11="Тайна";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film19==0){
					tr19.innerHTML = '<tr><td><a href="Categories/all/secret.html">Тайна</a></td><td><a href="Categories/all/secret.html"><img width="10%" src = "Categories/all/images/secret.jpg"></a></td></tr>';


					table.appendChild(tr19);
					notfound=1;
					film19=1;

				}
	}

	else{
		if(film19==1){		
			table.removeChild(tr19);
				film19=0;
}
	}





	film11="Список Шиндлера";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film20==0){

					tr20.innerHTML = '<tr><td><a href="Categories/all/spisok.html">Список Шиндлера</a></td><td><a href="Categories/all/spisok.html"><img width="10%" src = "Categories/all/images/spisok.jpg"></a></td></tr>';

					table.appendChild(tr20);
					notfound=1;
					film20=1;

				}
	}

	else{
		if(film20==1){		
			table.removeChild(tr20);
				film20=0;
}
	}





	film11="Дух времени";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film21==0){
					tr21.innerHTML = '<tr><td><a href="Categories/all/soul.html">Дух времени</a></td><td><a href="Categories/all/soul.html"><img width="10%" src = "Categories/all/images/soul.jpg"></a></td></tr>';


					table.appendChild(tr21);
					notfound=1;
					film21=1;

				}
	}

	else{
		if(film21==1){		
			table.removeChild(tr21);
				film21=0;
}
	}





	film11="Путешествие времени";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film22==0){
					tr22.innerHTML = '<tr><td><a href="Categories/all/travel.html">Путешествие времени</a></td><td><a href="Categories/all/travel.html"><img width="10%" src = "Categories/all/images/travel.jpg"></a></td></tr>';


					table.appendChild(tr22);
					notfound=1;
					film22=1;

				}
	}

	else{
		if(film22==1){		
			table.removeChild(tr22);
				film22=0;
}
	}




	film11="Отряд самоубийц";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film23==0){
					tr23.innerHTML = '<tr><td><a href="Categories/all/squade.html">Отряд самоубийц</a></td><td><a href="Categories/all/squade.html"><img width="10%" src = "Categories/all/images/squade.jpg"></a></td></tr>';


					table.appendChild(tr23);
					notfound=1;
					film23=1;

				}
	}

	else{
		if(film23==1){		
			table.removeChild(tr23);
				film23=0;
}
	}




	film11="Титаник";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film24==0){
					tr24.innerHTML = '<tr><td><a href="Categories/all/titanic.html">Титаник</a></td><td><a href="Categories/all/titanic.html"><img width="10%" src = "Categories/all/images/titanic.jpg"></a></td></tr>';


					table.appendChild(tr24);
					notfound=1;
					film24=1;

				}
	}

	else{
		if(film24==1){		
			table.removeChild(tr24);
				film24=0;
}
	}





	film11="Чужой: завет";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film25==0){

					tr25.innerHTML = '<tr><td><a href="Categories/all/alienzavet.html">Чужой: завет</a></td><td><a href="Categories/all/alienzavet.html"><img width="10%" src = "Categories/all/images/alienzavet.jpg"></a></td></tr>';

					table.appendChild(tr25);
					notfound=1;
					film25=1;

				}
	}

	else{
		if(film25==1){		
			table.removeChild(tr25);
				film25=0;
}
	}





	film11="Путешествие на край вселенной";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film26==0){

					tr26.innerHTML = '<tr><td><a href="Categories/all/travelgalaxy.html">Путешествие на край вселенной</a></td><td><a href="Categories/all/travelgalaxy.html"><img width="10%" src = "Categories/all/images/travelgalaxy.jpg"></a></td></tr>';

					table.appendChild(tr26);
					notfound=1;
					film26=1;

				}
	}

	else{
		if(film26==1){		
			table.removeChild(tr26);
				film26=0;
}
	}






	film11="Камера, мотор, убийства";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film27==0){

					tr27.innerHTML = '<tr><td><a href="Categories/all/cameramotor.html">Камера, мотор, убийства</a></td><td><a href="Categories/all/cameramotor.html"><img width="10%" src = "Categories/all/images/cameramotor.jpg"></a></td></tr>';

					table.appendChild(tr27);
					notfound=1;
					film27=1;

				}
	}

	else{
		if(film27==1){		
			table.removeChild(tr27);
				film27=0;
}
	}





	film11="Тёмная башня";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film28==0){
					tr28.innerHTML = '<tr><td><a href="Categories/all/tower.html">Тёмная башня</a></td><td><a href="Categories/all/tower.html"><img width="10%" src = "Categories/all/images/tower.jpg"></a></td></tr>';


					table.appendChild(tr28);
					notfound=1;
					film28=1;

				}
	}

	else{
		if(film28==1){		
			table.removeChild(tr28);
				film28=0;
}
	}




	film11="Проклятье Аннабель";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film29==0){
					tr29.innerHTML = '<tr><td><a href="Categories/all/annabel.html">Проклятье Аннабель</a></td><td><a href="Categories/all/annabel.html"><img width="10%" src = "Categories/all/images/annabel.jpg"></a></td></tr>';


					table.appendChild(tr29);
					notfound=1;
					film29=1;

				}
	}

	else{
		if(film29==1){		
			table.removeChild(tr29);
				film29=0;
}
	}




	film11="Лекарство от жизни";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film30==0){

					tr30.innerHTML = '<tr><td><a href="Categories/all/lekarstvo.html">Лекарство от жизни</a></td><td><a href="Categories/all/lekarstvo.html"><img width="10%" src = "Categories/all/images/lekarstvo.jpg"></a></td></tr>';

					table.appendChild(tr30);
					notfound=1;
					film30=1;

				}
	}

	else{
		if(film30==1){		
			table.removeChild(tr30);
				film30=0;
}
	}





	film11="Пила: Игра на выживание";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film31==0){

					tr31.innerHTML = '<tr><td><a href="Categories/all/pilaigra.html">Пила: Игра на выживание</a></td><td><a href="Categories/all/pilaigra.html"><img width="10%" src = "Categories/all/images/pilagame.jpg"></a></td></tr>';

					table.appendChild(tr31);
					notfound=1;
					film31=1;

				}
	}

	else{
		if(film31==1){		
			table.removeChild(tr31);
				film31=0;
}
	}





	film11="Живое";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film32==0){

					tr32.innerHTML = '<tr><td><a href="Categories/all/zhivoe.html">Живое</a></td><td><a href="Categories/all/zhivoe.html"><img width="10%" src = "Categories/all/images/zhivoe.jpg"></a></td></tr>';

					table.appendChild(tr32);
					notfound=1;
					film32=1;

				}
	}

	else{
		if(film32==1){		
			table.removeChild(tr32);
				film32=0;
}
	}





	film11="Культ Чаки";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film33==0){

					tr33.innerHTML = '<tr><td><a href="Categories/all/cultchaki.html">Культ Чаки</a></td><td><a href="Categories/all/cultchaki.html"><img width="10%" src = "Categories/all/images/cultchaki.jpg"></a></td></tr>';

					table.appendChild(tr33);
					notfound=1;
					film33=1;

				}
	}

	else{
		if(film33==1){		
			table.removeChild(tr33);
				film33=0;
}
	}





	film11="Форма голоса";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film34==0){

					tr34.innerHTML = '<tr><td><a href="Categories/all/formagolosa.html">Форма голоса</a></td><td><a href="Categories/all/formagolosa.html"><img width="10%" src = "Categories/all/images/formagolosa.jpg"></a></td></tr>';

					table.appendChild(tr34);
					notfound=1;
					film34=1;

				}
	}

	else{
		if(film34==1){		
			table.removeChild(tr34);
				film34=0;
}
	}





	film11="5 сантиметров в секунду";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film35==0){

					tr35.innerHTML = '<tr><td><a href="Categories/all/5sm.html">5 сантиметров в секунду</a></td><td><a href="Categories/all/5sm.html"><img width="10%" src = "Categories/all/images/5sm.jpg"></a></td></tr>';

					table.appendChild(tr35);
					notfound=1;
					film35=1;

				}
	}

	else{
		if(film35==1){		
			table.removeChild(tr35);
				film35=0;
}
	}





	film11="Шёпот";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film36==0){

					tr36.innerHTML = '<tr><td><a href="Categories/all/shepot.html">Шёпот</a></td><td><a href="Categories/all/shepot.html"><img width="10%" src = "Categories/all/images/shepot.jpg"></a></td></tr>';

					table.appendChild(tr36);
					notfound=1;
					film36=1;

				}
	}

	else{
		if(film36==1){		
			table.removeChild(tr36);
				film36=0;
}
	}




	film11="Ветер крепчает";

		if(film11.toUpperCase().indexOf(text.toUpperCase())!=-1){					notfound=1;

					if(film37==0){
					tr37.innerHTML = '<tr><td><a href="Categories/all/veter.html">Ветер крепчает</a></td><td><a href="Categories/all/veter.html"><img width="10%" src = "Categories/all/images/veter.jpg"></a></td></tr>';


					table.appendChild(tr37);
					notfound=1;
					film37=1;

				}
	}

	else{
		if(film37==1){		
			table.removeChild(tr37);
				film37=0;
}
	}




if(notfound==0){
					tr38.innerHTML = '<tr><td><h3>Ничего не найдено</h3></td></tr>';
										table.appendChild(tr38);
											table.removeChild(tr1);
											tit=0;


}
if(notfound==1){
											table.removeChild(tr38);

}

}

submit.onclick = function sear(){
	Search();
}