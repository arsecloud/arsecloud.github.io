
var category=0;
var country=0;
var year=0;
var div = document.getElementById("info");
var film = document.createElement("p");
	var number=0;
	var oldnumber=0;

		random();


 	button.onclick = function go(){
		random();
	}


	function random(){
	while(number==oldnumber){
	 number = Math.floor(Math.random() * (37 - 1)) + 1;
	}
oldnumber=number;

	if (number==1) {
		
			film.innerHTML='<table><tr><td><h3>Малыш на драйве</h3></td><td><a href="Categories/all/baby.html"></a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/HGGdKX9ByTE" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src =  "Categories/all/images/baby.jpg"    ></td></tr><tr><td colspan="2"><h3>Молодой парень по прозвищу Малыш обожает стильную музыку, быструю езду и адреналин в крови. Вся его жизнь – это сплошные погони и перестрелки, ведь он работает водителем, который помогает бандитам скрыться с места преступления. Однажды он по-настоящему влюбляется и решает выйти из игры, но сначала ему предстоит выполнить еще одно задание, которое вполне может оказаться последним в его жизни.</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);
	}
	else if(number==2){		
			film.innerHTML;
			film.innerHTML='<table><tr><td><h3>Твоё имя</h3></td><td><a href="Categories/all/yourname.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/tT7b5wR0IOM" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/yourname.jpg" ></td></tr><tr><td colspan="2"><h3>История о парне из Токио и девушке из провинции, которые обнаруживают, что между ними существует странная и необъяснимая связь. Во сне они меняются телами и проживают жизни друг друга. Но однажды эта способность исчезает так же внезапно, как появилась. Таки решает во что бы то ни стало отыскать Мицуху, но способны ли они узнать друг друга в реальной жизни? </h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==3){			
			film.innerHTML='<table><tr><td><h3>Волк с уолл стрит</h3></td><td><a href="Categories/all/wolf.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/CHivqmutR0I" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src =  "Categories/all/images/wolf.jpg"   ></td></tr><tr><td colspan="2"><h3>1987 год. Джордан Белфорт становится брокером в успешном инвестиционном банке. Вскоре банк закрывается после внезапного обвала индекса Доу-Джонса. По совету жены Терезы Джордан устраивается в небольшое заведение, занимающееся мелкими акциями. Его настойчивый стиль общения с клиентами и врождённая харизма быстро даёт свои плоды. Он знакомится с соседом по дому Донни, торговцем, который сразу находит общий язык с Джорданом и решает открыть с ним собственную фирму. В качестве сотрудников они нанимают нескольких друзей Белфорта, его отца Макса и называют компанию «Стрэттон Оукмонт»</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==4){		
			film.innerHTML='<table><tr><td><h3>Заклятие</h3></td><td><a href="Categories/all/zak.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/PA5Nl_ietlY" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/zak.jpg"     ></td></tr><tr><td colspan="2"><h3>Фильм основан на реальных событиях из практики Эда и Лоррейн Уоррен. Пугающая история Эда и Лоррейн Уоррен, всемирно известных детективов, занимающихся паранормальными расследованиями. К ним за помощью обратилась семья, терроризируемая темным духом на уединенной ферме. Вынужденные сражаться с могущественной демонической сущностью Уоррены сталкиваются с самым пугающим случаем в своей жизни.</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==5){			
			film.innerHTML='<table><tr><td><h3>Босс молокосос</h3></td><td><a href="Categories/all/boss.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/gbuqAoMi-T8" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%"  src = "Categories/all/images/boss.jpg" ></td></tr><tr><td colspan="2"><h3>Эта актуальная во все времена история для взрослых и детей рассказывается от лица семилетнего брата новорожденного – фантазера Тима, который ревнует его к родителям. Но главный герой – совсем не простой ребенок, он обладает лидерскими задатками, уже носит деловые костюмы и во всем видит бизнес-задачу. Однажды Тим узнает о готовящемся заговоре, целью которого является уничтожение любви, и организовал его директор компании «Puppy Co». Но одному Тиму не по силам его остановить. Мальчику предстоит объединиться со своим «нелюбимым» братом, чтобы спасти родителей и вернуть порядок на Земле.</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==6){			
			film.innerHTML='<table><tr><td><h3>Ходячий замок</h3></td><td><a href="Categories/all/castle.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/llBVPwc09-w" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/castle.jpg"  ></td></tr><tr><td colspan="2"><h3>Злая ведьма заточила 18-летнюю Софи в тело старухи. В поисках того, кто поможет ей вернуться к своему облику, Софи знакомится с могущественным волшебником Хаулом и его демоном Кальцифером. Кальцифер должен служить Хаулу по договору, условия которого он не может разглашать. Девушка и демон решают помочь друг другу избавиться от злых чар…</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==7){		
			film.innerHTML='<table><tr><td><h3>Стражи галактики</h3></td><td><a href="Categories/all/galaxy.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/Ys3mXt3WqMA" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%"  src = "Categories/all/images/galaxy.jpg"  ></td></tr><tr>	<td colspan="2"><h3>Все в сборе: землянин Питер Квилл (Звездный Лорд), молчаливый громила Дракс, зеленокожая наемница Гамора, живое дерево Грут и говорящий енот. Герои не изменяют себе и с завидной регулярностью продолжают попадать в немыслимые ситуации, выпутываясь из них почти без ущерба (а иногда даже с пользой) для окружающих. На этот раз им предстоит раскрыть одну из самых главных тайн во всей Галактике: кто же на самом деле отец Питера Квилла?  </h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==8){			
			film.innerHTML='<table><tr><td><h3>Игры разума</h3></td><td><a href="Categories/all/gamerazum.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/k46eyAPGeLA" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/gamerazum.jpg" ></td></tr><tr><td colspan="2"><h3>От всемирной известности до греховных глубин — все это познал на своей шкуре Джон Форбс Нэш-младший. Математический гений, он на заре своей карьеры сделал титаническую работу в области теории игр, которая перевернула этот раздел математики и практически принесла ему международную известность. Однако буквально в то же время заносчивый и пользующийся успехом у женщин Нэш получает удар судьбы, который переворачивает уже его собственную жизнь. </h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==9){			
			film.innerHTML='<table><tr><td><h3>Холодное сердце</h3></td><td><a href="Categories/all/heart.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/ZgIJDbpFHC4" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%"  src = "Categories/all/images/heart.jpg" ></td></tr><tr><td colspan="2"><h3>Когда древнее предсказание сбывается и королевство погружается в объятия вечной зимы, трое бесстрашных героев - принцесса Анна, отважный Кристофф и его верный олень Свен - отправляются в горы, чтобы найти сестру Анны, Эльзу, которая может снять со страны леденящее заклятие. По пути их ждет множество увлекательных сюрпризов и захватывающих приключений: встреча с мистическими троллями, знакомство с очаровательным снеговиком по имени Олаф, горные вершины покруче Эвереста и магия в каждой снежинке. Анне и Кристоффу предстоит сплотиться и противостоять могучей стихии, чтобы спасти королевство и тех, кто им дорог.</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==10){			film.innerHTML='<table><tr><td><h3>Хижина в лесу</h3></td><td><a href="Categories/all/house.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/zkp15gjB8z4" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%"  src = "Categories/all/images/house.jpg"    ></td></tr><tr></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==11){
					film.innerHTML='<table><tr><td><h3>Кингсман</h3></td><td><a href="Categories/all/kingsman.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/s11cpChJ6JA" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/kingsman.jpg"   ></td></tr><tr><td colspan="2"><h3>Эггси — молодой парень, который прошел службу в морской пехоте и имеет очень высокий уровень интеллекта. Он мог бы добиться многого, но выбрал другой путь и стал мелким преступником. Однажды он знакомится с Гарри Хартом, которому его отец когда-то спас жизнь. Этот человек решил сделать все возможное, чтобы сделать жизнь Эггси лучше и открыть для него новые возможности. Гарри рассказал ему, что является агентом секретной независимой организации, которая стоит на защите всего мира. Он предложил парню пройти обучение и стать новым членом их команды. Эггси принял предложение Харта, но сможет ли он справиться со всеми испытаниями и оправдать его надежды?</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);
	}
	else if(number==12){
					film.innerHTML='<table><tr><td><h3>Оно</h3></td><td><a href="Categories/all/itcinema.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/CA1HY_C9uHo" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/it.jpg"  ></td></tr><tr><td colspan="2"><h3>Когда в городке Дерри, штат Мэн, начинают пропадать дети, несколько ребят сталкиваются со своими величайшими страхами и вынуждены помериться силами со злобным клоуном Пеннивайзом, чьи проявления жестокости и список жертв уходят в глубь веков.</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);
	}
	else if(number==13){			film.innerHTML='<table><tr><td><h3>Легенда №17</h3></td><td><a href="Categories/all/legend.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/BRWyTgdWKZY" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/legend.jpg"  ></td></tr><tr><td colspan="2"><h3>2 сентября 1972 года. Монреаль. Хоккейная сборная СССР с разгромным счетом 7:3 победила канадских профессионалов из НХЛ в стартовом матче эпохальной Суперсерии СССР-Канада. Это была не просто игра, это была битва за свою страну, которая перевернула мировое представление о хоккее. Теперь весь мир знал его просто по номеру «17». Валерий Харламов, забивший в том матче 2 шайбы, мгновенно взлетел на вершину славы. Сбылась его мечта – упорство, спортивный талант и суровые уроки великого тренера Анатолия Тарасова сделали из «номера 17» легенду мирового хоккея.</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==14){			film.innerHTML='<table><tr><td><h3>Логан</h3></td><td><a href="Categories/all/logan.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/AtH0Pf9wVcE" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src =  "Categories/all/images/logan.jpg"    ></td></tr><tr><td colspan="2"><h3>Уволили с работы? Подготовь самое дерзкое ограбление в истории! Джимми Логан молниеносно подбирает команду «специалистов», способных на такую аферу, и надеется выйти сухим из воды. Будь как Логан!</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==15){			film.innerHTML='<table><tr><td><h3>Спасатели малибу</h3></td><td><a href="Categories/all/malibu.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/94G-0L3PKcs" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/malibu.jpg"></td></tr><tr><td colspan="2"><h3>Группа пляжных спасателей работает на побережье Тихого океана. Они всегда находятся на своем посту и охраняют отдыхающих от несчастных случаев на воде. Главный герой, опытный спасатель Митч Бьюкеннон, и его молодой коллега Мэтт Броди случайно узнают, что их пляж находится под угрозой исчезновения. Хозяйка пафосного ночного клуба, по совместительству местный «наркобарон», пытается прибрать побережье к рукам. Дамочка скупает всю недвижимость, не гнушаясь запугиваниями и убийствами владельцев земельных участков.</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==16){			film.innerHTML='<table><tr><td><h3>Сосед по имени Тороро</h3></td><td><a href="Categories/all/neighbor.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/uEy3-RmNMWc" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/neighbor.jpg" ></td></tr><tr><td colspan="2"><h3>.Переехав в деревню, две маленькие сестры, старшая Сацуки и младшая Мэй, знакомятся с лесным духом, которого Мэй называет «Тоторо» (искаженное «тролль»). Подружившись с девочками, Тоторо не только устраивает им воздушную экскурсию по своим владениям, но и помогает повидаться с мамой, которая лежит в больнице. </h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==17){			film.innerHTML='<table><tr><td><h3>Унёсенная призраками</h3></td><td><a href="Categories/all/prizrakami.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/yq0JpNdqTTU" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/prizrakami.jpg"  ></td></tr><tr><td colspan="2"><h3>Маленькая Тихиро вместе с мамой и папой переезжают в новый дом. Заблудившись по дороге, они оказываются в странном пустынном городе, где их ждет великолепный пир. Родители с жадностью набрасываются на еду и к ужасу девочки превращаются в свиней, став пленниками злой колдуньи Юбабы, властительницы таинственного мира древних богов и могущественных духов. Теперь, оказавшись одна среди магических существ и загадочных видений, отважная Тихиро должна придумать, как избавить своих родителей от чар коварной старухи и спастись из пугающего царства призраков.</h3> </td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==18){			film.innerHTML='<table><tr><td><h3>Разум в огне</h3></td><td><a href="Categories/all/razuminfire.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/6LXCX1sPE0Q" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/razuminfire.jpg"  ></td></tr><tr><td colspan="2"><h3>Успешная девушка однажды просыпается в психиатрической больнице. Она абсолютно не помнит, что с ней произошло, и как она сюда попала, ведь до пробуждения она вела довольно обычный образ жизни. У неё была хорошая перспективная работа, жених, и ничто не предвещало беды. Теперь ей ставят различные диагнозы, но ни один не подтверждается.</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==19){			film.innerHTML='<table><tr><td><h3>Тайна</h3></td><td><a href="Categories/all/secret.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/BVRFWK-A1ao" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/secret.jpg"  ></td></tr><tr><td colspan="2"><h3>Эта тайна существовала всегда. Ее раскрывали миру, ее держали в секрете, ее теряли и находили снова. За ней охотились, ее стремились узнать всеми доступными силами и средствами. И вот наступил момент, когда это тайное знание снова раскрывается миру. Многие великие люди прошлого обладали этим знанием: Платон, Леонардо, Галилей, Наполеон, Бетховен, Линкольн, Эйнштейн, Карнеги и многие другие. Части его появлялись в великих учениях, в литературе, в философских трактатах и религиозных текстах. Впервые в истории все разрозненные фрагменты собраны вместе в этом удивительном послании, коренным образом меняющем жизни тех, кто к нему прикасается..</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==20){			film.innerHTML='<table><tr><td><h3>Список Шиндлера</h3></td><td><a href="Categories/all/shindler.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/jW0a8P-uNek" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/shindler.jpg" ></td></tr><tr><td colspan="2"><h3>Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==21){			film.innerHTML='<table><tr><td><h3>Дух времени</h3></td><td><a href="Categories/all/soul.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/SscMRDcmkJc" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="303%" src = "Categories/all/images/soul.jpg"   ></td></tr><tr><td colspan="2"><h3>В фильме поднимается вопрос массового контроля над людьми — религия, политика, масс-медиа, финансы. Все ли, что мы видим, правда, или не хотим ее замечать? Настолько ли светло наше будущее? Вот лишь некоторые вопросы, которые обязательно возникнут в голове после просмотра. </h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==22){			film.innerHTML='<table><tr><td><h3>Отряд самоубийц</h3></td><td><a href="Categories/all/squade.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/NJH-z1Exy9E" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/squade.jpg"   ></td></tr><tr><td colspan="2"><h3>Правительство решает дать команде суперзлодеев шанс на искупление. Подвох в том, что их отправляют на выполнение миссии, где они, вероятнее всего, погибнут.</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==23){			film.innerHTML='<table><tr><td><h3>Путешествие времени</h3></td><td><a href="Categories/all/travel.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/ojQb03Dj7B8" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/travel.jpg"    ></td></tr><tr><td colspan="2"><h3>Невероятное путешествие в прошлое нашей планеты. Фильм, пропитанный энергией самой природы, сочетает в себе новаторские спецэффекты и удивительные кадры, снятые в разных уголках земного шара в попытках зафиксировать то, что живет веками и неподвластно времени. История рождения Земли. Движения звезд и континентов. Древние вулканы. Рождение рыб, лесов, динозавров и человека с его страстным желанием дотянуться до всего. Это подлинный гимн природе, жизни и Вселенной! </h3> </td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==24){			film.innerHTML='<table><tr><td><h3>титаник</h3></td><td><a href="Categories/all/titanic.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/XJH1kuGViI0" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/titanic.jpg" ></td></tr><tr><td colspan="2"><h3>Молодые влюбленные Джек и Роза находят друг друга в первом и последнем плавании «непотопляемого» Титаника. Они не могли знать, что шикарный лайнер столкнется с айсбергом в холодных водах Северной Атлантики, и их страстная любовь превратится в схватку со смертью...</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==25){			film.innerHTML='<table><tr><td><h3>Путешествие на край вселенной</h3></td><td><a href="Categories/all/travelgalaxy.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/ljdPCUv9C8s" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/travelgalaxy.jpeg"  ></td></tr><tr><td colspan="2"><h3>Это путешествие увлекает нас к истокам зарождения жизни, Столпам Мироздания, давая возможность заглянуть далеко за облака космической пыли, туда, где рождаются огромные звезды, даря Вселенной свой свет, а может быть и жизнь..</h3></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==26){			film.innerHTML='<table><tr><td><h3>Камера, мотор, убийства</h3></td><td><a href="Categories/all/cameramotor.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/HGgcgM-zwuE" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/cameramotor.jpg"  ></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==27){			film.innerHTML='<table><tr><td><h3>Тёмная башня</h3></td><td><a href="Categories/all/tower.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/L1PZkSiMcWs" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/tower.jpg"  ></td></tr> </table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==28){			film.innerHTML='<table><tr><td><h3></h3>Проклятье Аннабель</td><td><a href="Categories/all/annabel.html">Подробнее</a></td></tr><tr></tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/k6yHFk1bPZ0" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/annabel.jpg"  ></td></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==29){			film.innerHTML='<table><tr><td><h3>Чужой: завет</h3></td><td><a href="Categories/all/alienzavet.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/a6SnwsyjDbQ" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/alienzavet.jpg"  ></td></tr> </table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==30){			film.innerHTML='<table><tr><td><h3>Лекарство от жизни</h3></td><td><a href="Categories/all/lekarstvo.html">Подробнее</a></td></tr><tr></tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/lCsU08enGkM" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/lekarstvo.jpg"  ></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==31){			film.innerHTML='<table><tr><td><h3>Пила: Игра на выживание</h3></td><td><a href="Categories/all/pilaigra.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/JtVmx1EGXM4" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/pilagame.jpg"  ></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==32){			film.innerHTML='<table><tr><td><h3>Живое</h3></td><td><a href="Categories/all/zhivoe.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/TBQloEzP78I" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/zhivoe.jpg"  ></td></tr> </table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==33){			film.innerHTML='<table><tr><td><h3>Культ Чаки</h3></td><td><a href="Categories/all/cultchaki.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/Z5ofEl5qm1I" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/cultchaki.jpg"  ></td></tr> </table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==34){			film.innerHTML='<table><tr><td><h3>Форма голоса</h3></td><td><a href="Categories/all/formagolosa.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/KHs9l_5Tdng" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/formagolosa.jpg"  ></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==35){			film.innerHTML='<table><tr><td><h3>5 сантиметров в секунду</h3></td><td><a href="Categories/all/5sm.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/Q7wYaVsc61M" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/5sm.jpg"  ></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==36){			film.innerHTML='<table><tr><td><h3>Шёпот</h3></td><td><a href="Categories/all/shepot.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/u7oAjgeCT98" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/shepot.jpg"  ></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==37){			film.innerHTML='<table><tr><td><h3>Ветер крепчает</h3></td><td><a href="Categories/all/veter.html">Подробнее</a></td></tr><tr><td width="60%" align="center"> <iframe 	height="200%" width="90%" src="https://www.youtube.com/embed/u2J7EvnqFH0" frameborder="0" allowfullscreen></iframe></td><td width="40%" align="center"><img height="30%" src = "Categories/all/images/veter.jpg"  ></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==38){			film.innerHTML='<table><tr><td><h3></h3></td><td><a href="Categories/all/.html">Подробнее</a></td></tr><tr></tr><tr><td><a href="Categories/all/.html">Подробнее</a></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==39){			film.innerHTML='<table><tr><td><h3></h3></td><td><a href="Categories/all/.html">Подробнее</a></td></tr><tr></tr><tr><td><a href="Categories/all/.html">Подробнее</a></td></tr></table>';
			div.parentNode.replaceChild(film,div);}
	else if(number==40){			film.innerHTML='<table><tr><td><h3></h3></td><td><a href="Categories/all/.html">Подробнее</a></td></tr><tr></tr><tr><td><a href="Categories/all/.html">Подробнее</a></td></tr></table>';
			div.parentNode.replaceChild(film,div);}



}



	/*if (objSel1.selectedIndex==0&&objSel2.selectedIndex==0&&objSel3.selectedIndex==0) {}
	else if(objSel1.selectedIndex==2&&objSel2.selectedIndex==0&&objSel3.selectedIndex==0){}
	else if(objSel1.selectedIndex==1&&objSel2.selectedIndex==0&&objSel3.selectedIndex==0){}
	else if(objSel1.selectedIndex==1&&objSel2.selectedIndex==1&&objSel3.selectedIndex==0){}
	else if(objSel1.selectedIndex==2&&objSel2.selectedIndex==1&&objSel3.selectedIndex==0){}
	else if(objSel1.selectedIndex==2&&objSel2.selectedIndex==2&&objSel3.selectedIndex==0){}
	else if(objSel1.selectedIndex==2&&objSel2.selectedIndex==1&&objSel3.selectedIndex==0){}
	else if(objSel1.selectedIndex==2&&objSel2.selectedIndex==1&&objSel3.selectedIndex==0){}*/

