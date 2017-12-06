	var tit=0;
	var notfound=0;
	var film1=0;var film2=0;var film3=0;var film4=0;var film5=0;var film6=0;var film7=0;var film8=0;var film9=0;var film10=0;var film11=0;var film12=0;var film13=0;
	var film14=0;var film15=0;var film16=0;var film17=0;var film18=0;var film19=0;var film20=0;var film21=0;var film22=0;var film23=0;var film24=0;var film25=0;
	var film26=0;var film27=0;var film28=0;var film29=0;var film30=0;var film31=0;var film32=0;var film33=0;var film34=0;var film35=0;var film36=0;var film37=0;
	var film38=0;var film39=0;var film40=0;

	var table = document.getElementById('table');
					var tr1 = document.createElement('tr');
					 var tr2 = document.createElement('tr');
					 var tr3 = document.createElement('tr');

submit.onclick = function sear(){
	var text = document.getElementById('TextIn').value;
	var film11="Малыш на драйве";
	var film12="малыш"
	var film13="малыш драйв"
	var pos=0;
	var val = 0;
		if(tit==0){
					tit=1;
					tr1.innerHTML = '<tr><td><h2>Вот что я нашёл</h2></td></tr>';
					table.appendChild(tr1);}



	if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					tr2.innerHTML = '<tr><td><a href="Categories/all/baby.html">Малыш на драйве</a></td><td><a href="Categories/all/baby.html"><img width="10%" src = "Categories/all/images/baby.jpg"></a></td></tr>';
					if(film1==0){
					table.appendChild(tr2);
					notfound=1;
					film1=1;
				}

	}
				

	 film11="Твоё имя";
	 film12="имя";
	  film13="имя твоё";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					tr3.innerHTML = '<tr><td><a href="Categories/all/yourname.html">Твоё имя</a></td><td><a href="Categories/all/yourname.html"><img width="10%" src = "Categories/all/images/yourname.jpg"></a></td></tr>';
if(film2==0){
					table.appendChild(tr3);
					notfound=1;
					film2=1;
				}							
					}

				 film11="Волк с уолл стрит";
				 film12="волк";
				 film13="уолл стрит";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					tr3.innerHTML = '<tr><td><a href="Categories/all/wolf.html">Волк с Уолл-Стрит</a></td><td><a href="Categories/all/wolf.html"><img width="10%" src = "Categories/all/images/wolf.jpg"></a></td></tr>';
		if(film3==0){
					table.appendChild(tr3);
					notfound=1;
					film3=1;
				}	
			}					else {if(film3==1){table.removeChild(tr3);}}







						 film11="Заклятие";
				 		film12="закл";
				 		film13="заклятье";
if((film11.toUpperCase()==text.toUpperCase())|(film12.toUpperCase()==text.toUpperCase())|(film13.toUpperCase()==text.toUpperCase())){
					 var tr = document.createElement('tr');
					tr.innerHTML = '<tr><td><a href="Categories/all/zak.html">Заклятие</a></td><td><a href="Categories/all/zak.html"><img width="10%" src = "Categories/all/images/zak.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/boss.html">Босс молокосос</a></td><td><a href="Categories/all/boss.html"><img width="10%" src = "Categories/all/images/boss.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/castle.html">Ходячий замок</a></td><td><a href="Categories/all/castle.html"><img width="10%" src = "Categories/all/images/castle.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/galaxy.html">Стражи галактики</a></td><td><a href="Categories/all/galaxy.html"><img width="10%" src = "Categories/all/images/galaxy.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/gamerazum.html">Игры разума</a></td><td><a href="Categories/all/gamerazum.html"><img width="10%" src = "Categories/all/images/gamerazum.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/heart.html">Холодное сердце</a></td><td><a href="Categories/all/heart.html"><img width="10%" src = "Categories/all/images/heart.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/house.html">Холодное сердце</a></td><td><a href="Categories/all/house.html"><img width="10%" src = "Categories/all/images/house.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/kingsman.html">Холодное сердце</a></td><td><a href="Categories/all/kingsman.html"><img width="10%" src = "Categories/all/images/kingsman.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/itcinema.html">Оно</a></td><td><a href="Categories/all/itcinema.html"><img width="10%" src = "Categories/all/images/it.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/legend.html">Легенда №17</a></td><td><a href="Categories/all/legend.html"><img width="10%" src = "Categories/all/images/legend.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/logan.html">Логан</a></td><td><a href="Categories/all/logan.html"><img width="10%" src = "Categories/all/images/logan.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/malibu.html">Спасатели малибу</a></td><td><a href="Categories/all/malibu.html"><img width="10%" src = "Categories/all/images/malibu.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/neighbor.html">Сосед по имени Тороро</a></td><td><a href="Categories/all/neighbor.html"><img width="10%" src = "Categories/all/images/neighbor.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/prizrakami.html">Унесённая призраками</a></td><td><a href="Categories/all/prizrakami.html"><img width="10%" src = "Categories/all/images/prizrakami.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/razuminfire.html">Разум в огне</a></td><td><a href="Categories/all/razuminfire.html"><img width="10%" src = "Categories/all/images/razuminfire.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/secret.html">Тайна</a></td><td><a href="Categories/all/secret.html"><img width="10%" src = "Categories/all/images/secret.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/spisok.html">Список Шиндлера</a></td><td><a href="Categories/all/spisok.html"><img width="10%" src = "Categories/all/images/spisok.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/soul.html">Дух времени</a></td><td><a href="Categories/all/soul.html"><img width="10%" src = "Categories/all/images/soul.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/travel.html">Путешествие времени</a></td><td><a href="Categories/all/travel.html"><img width="10%" src = "Categories/all/images/travel.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/squade.html">Отряд самоубийц</a></td><td><a href="Categories/all/squade.html"><img width="10%" src = "Categories/all/images/squade.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/titanic.html">Титаник</a></td><td><a href="Categories/all/titanic.html"><img width="10%" src = "Categories/all/images/titanic.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/alienzavet.html">Чужой: завет</a></td><td><a href="Categories/all/alienzavet.html"><img width="10%" src = "Categories/all/images/alienzavet.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/travelgalaxy.html">Путешествие на край вселенной</a></td><td><a href="Categories/all/travelgalaxy.html"><img width="10%" src = "Categories/all/images/travelgalaxy.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/cameramotor.html">Камера, мотор, убийства</a></td><td><a href="Categories/all/cameramotor.html"><img width="10%" src = "Categories/all/images/cameramotor.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/tower.html">Тёмная башня</a></td><td><a href="Categories/all/tower.html"><img width="10%" src = "Categories/all/images/tower.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/annabel.html">Проклятье Аннабель</a></td><td><a href="Categories/all/annabel.html"><img width="10%" src = "Categories/all/images/annabel.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/lekarstvo.html">Лекарство от жизни</a></td><td><a href="Categories/all/lekarstvo.html"><img width="10%" src = "Categories/all/images/lekarstvo.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/pilaigra.html">Пила: Игра на выживание</a></td><td><a href="Categories/all/pilaigra.html"><img width="10%" src = "Categories/all/images/pilagame.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/zhivoe.html">Живое</a></td><td><a href="Categories/all/zhivoe.html"><img width="10%" src = "Categories/all/images/zhivoe.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/cultchaki.html">Культ Чаки</a></td><td><a href="Categories/all/cultchaki.html"><img width="10%" src = "Categories/all/images/cultchaki.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/formagolosa.html">Оно</a></td><td><a href="Categories/all/formagolosa.html"><img width="10%" src = "Categories/all/images/formagolosa.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/5sm.html">5 сантиметров в секунду</a></td><td><a href="Categories/all/5sm.html"><img width="10%" src = "Categories/all/images/5sm.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/shepot.html">Оно</a></td><td><a href="Categories/all/shepot.html"><img width="10%" src = "Categories/all/images/shepot.jpg"></a></td></tr>';
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
					tr.innerHTML = '<tr><td><a href="Categories/all/veter.html">Ветер крепчает</a></td><td><a href="Categories/all/veter.html"><img width="10%" src = "Categories/all/images/veter.jpg"></a></td></tr>';
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