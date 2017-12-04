	var tit=0;
	var notfound=0;
	var film1=0;var film2=0;var film3=0;var film4=0;var film5=0;var film6=0;var film7=0;var film8=0;var film9=0;var film10=0;var film11=0;var film12=0;var film13=0;
	var film14=0;var film15=0;var film16=0;var film17=0;var film18=0;var film19=0;var film20=0;var film21=0;var film22=0;var film23=0;var film24=0;var film25=0;
	var film26=0;var film27=0;var film28=0;var film29=0;var film30=0;var film31=0;var film32=0;var film33=0;var film34=0;var film35=0;var film36=0;var film37=0;
	var film38=0;var film39=0;var film40=0;


submit.onclick = function sear(){
	var text = document.getElementById('TextIn').value;
	var film11="Малыш на драйве";
	var film12="малыш"
	var film13="малыш драйв"
	var pos=0;
	var val = 0;
		var table = document.getElementById('table');
		
		if(tit==0){
					tit=1;
					var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><h2>Вот что я нашёл</h2></td></tr>';
					table.appendChild(tr);}



	if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="baby.html">Малыш на драйве</a></td><td><a href="baby.html"><img width="10%" src = "images/baby.jpg"></a></td></tr>';
					if(film1==0){
					table.appendChild(tr);
					notfound=1;
					film1=1;
				}
	}

	 film11="Твоё имя";
	 film12="имя";
	  film13="имя твоё";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="yourname.html">Твоё имя</a></td><td><a href="yourname.html"><img width="10%" src = "images/yourname.jpg"></a></td></tr>';
if(film2==0){
					table.appendChild(tr);
					notfound=1;
					film2=1;
				}	}

				 film11="Волк с уолл стрит";
				 film12="волк";
				 film13="уолл стрит";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="wolf.html">Волк с Уолл-Стрит</a></td><td><a href="wolf.html"><img width="10%" src = "images/wolf.jpg"></a></td></tr>';
		if(film3==0){
					table.appendChild(tr);
					notfound=1;
					film3=1;
				}	
			}






						 film11="Заклятие";
				 		film12="закл";
				 		film13="заклятье";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="zak.html">Заклятие</a></td><td><a href="zak.html"><img width="10%" src = "images/zak.jpg"></a></td></tr>';
		if(film5==0){
					table.appendChild(tr);
					notfound=1;
					film5=1;
				}	
			}


				 film11="Босс молокосос";
				 film12="босс";
				 film13="молокосос";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="boss.html">Босс молокосос</a></td><td><a href="boss.html"><img width="10%" src = "images/boss.jpg"></a></td></tr>';
		if(film4==0){
					table.appendChild(tr);
					notfound=1;
					film4=1;
				}	
			}



				 film11="Ходячий замок";
				 film12="Ходячий";
				 film13="замок";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="castle.html">Ходячий замок</a></td><td><a href="castle.html"><img width="10%" src = "images/castle.jpg"></a></td></tr>';
		if(film6==0){
					table.appendChild(tr);
					notfound=1;
					film6=1;
				}	
			}



 film11="Стражи галактики";
				 film12="стражи";
				 film13="галактика";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="galaxy.html">Стражи галактики</a></td><td><a href="galaxy.html"><img width="10%" src = "images/galaxy.jpg"></a></td></tr>';
		if(film7==0){
					table.appendChild(tr);
					notfound=1;
					film7=1;
				}	
			}





film11="Игры разума";
				 film12="игра";
				 film13="разум";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="gamerazum.html">Игры разума</a></td><td><a href="gamerazum.html"><img width="10%" src = "images/gamerazum.jpg"></a></td></tr>';
		if(film8==0){
					table.appendChild(tr);
					notfound=1;
					film8=1;
				}	
			}





film11="Холодное сердце";
				 film12="холодное";
				 film13="сердце";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="heart.html">Холодное сердце</a></td><td><a href="heart.html"><img width="10%" src = "images/heart.jpg"></a></td></tr>';
		if(film9==0){
					table.appendChild(tr);
					notfound=1;
					film9=1;
				}	
			}


			film11="Хижина в лесу";
				 film12="хижина";
				 film13="лес";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="house.html">Холодное сердце</a></td><td><a href="house.html"><img width="10%" src = "images/house.jpg"></a></td></tr>';
		if(film10==0){
					table.appendChild(tr);
					notfound=1;
					film10=1;
				}	
			}




film11="Кингсман";
				 film12="кинг";
				 film13="Кингсман";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="kingsman.html">Холодное сердце</a></td><td><a href="kingsman.html"><img width="10%" src = "images/kingsman.jpg"></a></td></tr>';
		if(film11==0){
					table.appendChild(tr);
					notfound=1;
					film11=1;
				}	
			}




film11="оно";
				 film12="он";
				 film13="она";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="itcinema.html">Оно</a></td><td><a href="itcinema.html"><img width="10%" src = "images/it.jpg"></a></td></tr>';
		if(film12==0){
					table.appendChild(tr);
					notfound=1;
					film12=1;
				}	
			}




			film11="Легенда №17";
				 film12="17";
				 film13="легенда";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="legend.html">Легенда №17</a></td><td><a href="legend.html"><img width="10%" src = "images/legend.jpg"></a></td></tr>';
		if(film13==0){
					table.appendChild(tr);
					notfound=1;
					film13=1;
				}	
			}




			film11="Логан";
				 film12="Логон";
				 film13="супергерой";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="logan.html">Логан</a></td><td><a href="logan.html"><img width="10%" src = "images/logan.jpg"></a></td></tr>';
		if(film14==0){
					table.appendChild(tr);
					notfound=1;
					film14=1;
				}	
			}




			film11="Спасатели малибу";
				 film12="Спасатели";
				 film13="малибу";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="malibu.html">Спасатели малибу</a></td><td><a href="malibu.html"><img width="10%" src = "images/malibu.jpg"></a></td></tr>';
		if(film15==0){
					table.appendChild(tr);
					notfound=1;
					film15=1;
				}	
			}



			film11="Сосед по имени Тороро";
				 film12="сосед";
				 film13="Тороро";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="neighbor.html">Сосед по имени Тороро</a></td><td><a href="neighbor.html"><img width="10%" src = "images/neighbor.jpg"></a></td></tr>';
		if(film16==0){
					table.appendChild(tr);
					notfound=1;
					film16=1;
				}	
			}




			film11="Унесённая призраками";
				 film12="Унесенная призраками";
				 film13="Унесённая";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="prizrakami.html">Унесённая призраками</a></td><td><a href="prizrakami.html"><img width="10%" src = "images/prizrakami.jpg"></a></td></tr>';
		if(film17==0){
					table.appendChild(tr);
					notfound=1;
					film17=1;
				}	
			}



			film11="Разум в огне";
				 film12="Разум";
				 film13="в огне";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="razuminfire.html">Разум в огне</a></td><td><a href="razuminfire.html"><img width="10%" src = "images/razuminfire.jpg"></a></td></tr>';
		if(film18==0){
					table.appendChild(tr);
					notfound=1;
					film18=1;
				}	
			}





			film11="Тайна";
				 film12="тайн";
				 film13="тай";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="secret.html">Тайна</a></td><td><a href="secret.html"><img width="10%" src = "images/secret.jpg"></a></td></tr>';
		if(film19==0){
					table.appendChild(tr);
					notfound=1;
					film19=1;
				}	
			}






			film11="Список Шиндлера";
				 film12="Список";
				 film13="Шиндлера";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="spisok.html">Список Шиндлера</a></td><td><a href="spisok.html"><img width="10%" src = "images/spisok.jpg"></a></td></tr>';
		if(film20==0){
					table.appendChild(tr);
					notfound=1;
					film20=1;
				}	
			}







film11="Дух времени";
				 film12="Дух";
				 film13="время";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="soul.html">Дух времени</a></td><td><a href="soul.html"><img width="10%" src = "images/soul.jpg"></a></td></tr>';
		if(film21==0){
					table.appendChild(tr);
					notfound=1;
					film21=1;
				}	
			}





			film11="Путешествие времени";
				 film12="Путешествие";
				 film13="время";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="travel.html">Путешествие времени</a></td><td><a href="travel.html"><img width="10%" src = "images/travel.jpg"></a></td></tr>';
		if(film22==0){
					table.appendChild(tr);
					notfound=1;
					film22=1;
				}	
			}






			film11="Отряд самоубийц";
				 film12="Отряд";
				 film13="самоубийц";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="squade.html">Отряд самоубийц</a></td><td><a href="squade.html"><img width="10%" src = "images/squade.jpg"></a></td></tr>';
		if(film23==0){
					table.appendChild(tr);
					notfound=1;
					film23=1;
				}	
			}






			film11="Титаник";
				 film12="Титан";
				 film13="титаники";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="titanic.html">Титаник</a></td><td><a href="titanic.html"><img width="10%" src = "images/titanic.jpg"></a></td></tr>';
		if(film24==0){
					table.appendChild(tr);
					notfound=1;
					film24=1;
				}	
			}








			film11="Чужой: завет";
				 film12="завет";
				 film13="Чужой";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="alienzavet.html">Чужой: завет</a></td><td><a href="alienzavet.html"><img width="10%" src = "images/alienzavet.jpg"></a></td></tr>';
		if(film25==0){
					table.appendChild(tr);
					notfound=1;
					film25=1;
				}	
			}







			film11="Путешествие на край вселенной";
				 film12="Путешествие";
				 film13="вселенная";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="travelgalaxy.html">Путешествие на край вселенной</a></td><td><a href="travelgalaxy.html"><img width="10%" src = "images/travelgalaxy.jpg"></a></td></tr>';
		if(film26==0){
					table.appendChild(tr);
					notfound=1;
					film26=1;
				}	
			}






			film11="Камера, мотор, убийства";
				 film12="Камера";
				 film13="мотор";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="cameramotor.html">Камера, мотор, убийства</a></td><td><a href="cameramotor.html"><img width="10%" src = "images/cameramotor.jpg"></a></td></tr>';
		if(film27==0){
					table.appendChild(tr);
					notfound=1;
					film27=1;
				}	
			}






			film11="Тёмная башня";
				 film12="Темная башня";
				 film13="башня";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="tower.html">Тёмная башня</a></td><td><a href="tower.html"><img width="10%" src = "images/tower.jpg"></a></td></tr>';
		if(film29==0){
					table.appendChild(tr);
					notfound=1;
					film29=1;
				}	
			}





			film11="Проклятье Аннабель";
				 film12="Проклятье";
				 film13="Аннабель";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="annabel.html">Проклятье Аннабель</a></td><td><a href="annabel.html"><img width="10%" src = "images/annabel.jpg"></a></td></tr>';
		if(film30==0){
					table.appendChild(tr);
					notfound=1;
					film30=1;
				}	
			}






			film11="Лекарство от жизни";
				 film12="Лекарство";
				 film13="жизнь";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="lekarstvo.html">Лекарство от жизни</a></td><td><a href="lekarstvo.html"><img width="10%" src = "images/lekarstvo.jpg"></a></td></tr>';
		if(film31==0){
					table.appendChild(tr);
					notfound=1;
					film31=1;
				}	
			}








			film11="Пила: Игра на выживание";
				 film12="пила";
				 film13="игра";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="pilaigra.html">Пила: Игра на выживание</a></td><td><a href="pilaigra.html"><img width="10%" src = "images/pilagame.jpg"></a></td></tr>';
		if(film32==0){
					table.appendChild(tr);
					notfound=1;
					film32=1;
				}	
			}








			film11="Живое";
				 film12="Жив";
				 film13="живой";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="zhivoe.html">Живое</a></td><td><a href="zhivoe.html"><img width="10%" src = "images/zhivoe.jpg"></a></td></tr>';
		if(film33==0){
					table.appendChild(tr);
					notfound=1;
					film33=1;
				}	
			}







			film11="Культ Чаки";
				 film12="Культ";
				 film13="Чаки";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="cultchaki.html">Культ Чаки</a></td><td><a href="cultchaki.html"><img width="10%" src = "images/cultchaki.jpg"></a></td></tr>';
		if(film34==0){
					table.appendChild(tr);
					notfound=1;
					film34=1;
				}	
			}





film11="Форма голоса";
				 film12="Форма";
				 film13="голос";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="formagolosa.html">Оно</a></td><td><a href="formagolosa.html"><img width="10%" src = "images/formagolosa.jpg"></a></td></tr>';
		if(film35==0){
					table.appendChild(tr);
					notfound=1;
					film35=1;
				}	
			}



			film11="5 сантиметров в секунду";
				 film12="5";
				 film13="5 сантиметров";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="5sm.html">5 сантиметров в секунду</a></td><td><a href="5sm.html"><img width="10%" src = "images/5sm.jpg"></a></td></tr>';
		if(film36==0){
					table.appendChild(tr);
					notfound=1;
					film36=1;
				}	
			}




			film11="Шёпот";
				 film12="Шепот";
				 film13="Шопот";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="shepot.html">Оно</a></td><td><a href="shepot.html"><img width="10%" src = "images/shepot.jpg"></a></td></tr>';
		if(film37==0){
					table.appendChild(tr);
					notfound=1;
					film38=1;
				}	
			}




			film11="Ветер крепчает";
				 film12="ветер";
				 film13="крепчает";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="veter.html">Ветер крепчает</a></td><td><a href="veter.html"><img width="10%" src = "images/veter.jpg"></a></td></tr>';
		if(film39==0){
					table.appendChild(tr);
					notfound=1;
					film39=1;
				}	
			}


if(notfound==0){
						 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><h3>Ничего не найдено</h3></td></tr>';
										table.appendChild(tr);
}


			

}