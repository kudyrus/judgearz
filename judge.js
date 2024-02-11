console.log(1) 
var segodnya = new Date().toLocaleDateString();
 
const buttons = [
// Кнопки с заготовленными ответами.
{
	title: "Взятие искового заявления",
	content:
  	"[CENTER][SIZE=5][FONT=times new roman]Доброго времени суток.<br>"+
"Окружной суд, в лице судьи [B][COLOR=rgb(26, 188, 156)]Sam Twix[/COLOR][/B].<br>"+
"Принялся рассматривать ваше исковое заявление.[/FONT]<br>"+
"<br>"+
"[COLOR=rgb(65, 168, 95)][FONT=tahoma]Ожидайте вердикта.[/FONT][/COLOR]<br>"+
"[FONT=times new roman][IMG]https://i.imgur.com/FIyzI0U.png[/IMG][/FONT][/SIZE]<br>"+
"[FONT=times new roman][SIZE=5]Дата:" + segodnya + '[/SIZE][/FONT]<br>'+
"[SIZE=5][FONT=times new roman]Подпись:  [COLOR=rgb(250, 197, 28)]Twix[/COLOR][/FONT][/SIZE]<br>"+
"<br>"+
"[FONT=times new roman][IMG width=149px]https://i.imgur.com/pEdD7Jc.png[/IMG][/FONT][/CENTER] <br>",
  },
	{
	title: "Вердикт",
	content:
  	"[CENTER][FONT=times new roman][COLOR=rgb(255, 255, 255)][SIZE=6]DISTRICT COURT OF CHRISTMAS[/SIZE][/COLOR][/FONT]<br>"+
"[IMG]https://i.imgur.com/FIyzI0U.png[/IMG]<br>"+
"[FONT=times new roman][COLOR=rgb(84, 172, 210)][SIZE=4]Имя Фамилия[/SIZE][/COLOR]<br>"+
"[COLOR=rgb(255, 255, 255)][SIZE=3]Истец,[/SIZE]<br>"+
"[SIZE=4]v. [/SIZE][/COLOR]<br>"+
"[COLOR=rgb(235, 107, 86)][SIZE=4]Имя Фамилия[/SIZE][/COLOR]<br>"+
"[COLOR=rgb(255, 255, 255)][SIZE=3]Ответчик.[/SIZE][/COLOR]<br>"+
"[IMG]https://i.imgur.com/FIyzI0U.png[/IMG]<br>"+
"[COLOR=rgb(255, 255, 255)] Рассмотрев исковое заявление от гражданина[/COLOR] [FONT=times new roman][COLOR=rgb(84, 172, 210)][SIZE=4]Имя Фамилия[/SIZE][/COLOR][/FONT].<br>"+
"[COLOR=rgb(255, 255, 255)]Окружной суд, в лице судьи[/COLOR] [COLOR=rgb(0, 168, 133)]Sam Twix[/COLOR] [COLOR=rgb(255, 255, 255)]может заключить следующее:<br>"+
"В ходе судебного производства по настоящему иску была установлена личность ответчика:[/COLOR] [FONT=times new roman][COLOR=rgb(235, 107, 86)][SIZE=4]Имя Фамилия[/SIZE][/COLOR][/FONT].<br>"+
"[COLOR=rgb(255, 255, 255)]Окружной суд установил факт наличия следующих нарушений со стороны ответчика:[/COLOR]<br>"+

"[SIZE=4][COLOR=rgb(247, 218, 100)]1. Поясните[/COLOR][/SIZE][/FONT]<br>"+
"[IMG]https://i.imgur.com/FIyzI0U.png[/IMG]<br>"+
"[FONT=times new roman][COLOR=rgb(255, 255, 255)][SIZE=5]ОКРУЖНОЙ СУД ПОСТАНОВЛЯЕТ:[/SIZE][/COLOR][/FONT]<br>"+

"[COLOR=rgb(255, 255, 255)][FONT=times new roman][SIZE=4]1. Вердикт[/SIZE][/FONT][/COLOR]<br>"+

"[FONT=times new roman][SIZE=4][COLOR=rgb(184, 49, 47)]Закрыть судебное производство по данному делу и передать материалы Прокуратуре штата Christmas для исполнения настоящего Решения.[/COLOR][/SIZE]<br>"+

"[IMG width=255px]https://i.imgur.com/pEdD7Jc.png[/IMG]<br>"+

"[SIZE=4][IMG]https://i.imgur.com/FIyzI0U.png[/IMG][/SIZE]<br>"+
"[COLOR=rgb(255, 255, 255)][SIZE=4]Приговор вступает в законную силу с момента его вынесения.[/SIZE][/COLOR][/FONT]<br>"+
"[COLOR=rgb(255, 255, 255)][FONT=times new roman][SIZE=4]Дело по данному исковому делу считать закрытым с момента вынесения приговора.[/SIZE][/FONT][/COLOR]<br>"+
"[FONT=times new roman]Приговор подлежит обжалованию в [URL='https://forum.arizona-rp.com/forums/3183/']Апелляционном суде[/URL] в течение 3 суток.[/FONT]<br>"+
"[COLOR=rgb(255, 255, 255)][FONT=times new roman][SIZE=4]Все судебные издержки по исполнению данного приговора покрываются за счет государства.[/SIZE][/FONT][/COLOR]<br>"+
"[FONT=times new roman][COLOR=rgb(255, 255, 255)][SIZE=4]Судебные издержки по обжалованию приговора покрываются за счет осужденных и их законных представителей.[/SIZE][/COLOR]<br>"+
"[SIZE=4][IMG]https://i.imgur.com/FIyzI0U.png[/IMG][/SIZE]<br>"+
"Дата:" + segodnya + '[/FONT]<br>'+
"[SIZE=4][COLOR=rgb(255, 255, 255)][FONT=times new roman]Подпись: [/FONT][/COLOR][COLOR=rgb(250, 197, 28)][FONT=times new roman]Twix[/FONT][/COLOR][/SIZE][/CENTER]<br>"
  },
   {
	title: "Запрос ответа в иске",
	content:
  "[CENTER][FONT=times new roman][COLOR=rgb(255, 255, 255)][SIZE=6]SUPREME COURT OF CHRISTMAS[/SIZE][/COLOR]<br>"+

"[SIZE=4][COLOR=rgb(255, 255, 255)][FONT=times new roman][IMG]https://i.imgur.com/FIyzI0U.png[/IMG][/FONT][/COLOR][/SIZE]<br>"+

"[COLOR=rgb(255, 255, 255)][FONT=times new roman][SIZE=4]Верховный Суд просит руководство ФБР [/SIZE][/FONT][/COLOR][COLOR=rgb(250, 197, 28)][FONT=times new roman][SIZE=4][B]Имя Фамилия [/B][/SIZE][/FONT][/COLOR][COLOR=rgb(255, 255, 255)][FONT=times new roman][SIZE=4] предоставить объяснения, касающуюся обстоятельств данного искового заявления, в отношении гражданина [/SIZE][/FONT][/COLOR][COLOR=rgb(250, 197, 28)][FONT=times new roman][SIZE=4][B]Имя Фамилия[/B][/SIZE][/FONT][/COLOR]<br>"+

"[COLOR=rgb(226, 80, 65)][SIZE=4][FONT=times new roman]Верховный Суд даёт Вам 24 часа на предоставление доказательств.[/FONT][/SIZE][/COLOR]<br>"+

"[COLOR=rgb(255, 255, 255)][FONT=times new roman][IMG]https://i.imgur.com/FIyzI0U.png[/IMG][/FONT][/COLOR][/FONT]<br>"+

"[IMG width=196px]https://i.imgur.com/i10u2fI.png[/IMG]<br>"+


"[SIZE=4][FONT=times new roman]Дата:" + segodnya + '[/FONT][/SIZE]<br>'+
"[FONT=times new roman][FONT=times new roman][COLOR=rgb(255, 255, 255)][SIZE=4]Подпись:  [/SIZE][/COLOR][COLOR=rgb(209, 72, 65)]Тwix[/COLOR][/FONT][/FONT][/CENTER]<br>"
  },
 {
	title: "Апелл.суд взятие иска",
	content:
  		"[CENTER][SIZE=5][FONT=times new roman]Доброго времени суток.<br>"+
"Апелляционный суд, в лице судьи [B][COLOR=rgb(26, 188, 156)]Sam Twix[/COLOR][/B].<br>"+
"Принялся рассматривать ваше исковое заявление.[/FONT]<br>"+
"<br>"+
"[COLOR=rgb(65, 168, 95)][FONT=tahoma]Ожидайте вердикта.[/FONT][/COLOR]<br>"+
"[FONT=times new roman][IMG]https://i.imgur.com/FIyzI0U.png[/IMG][/FONT][/SIZE]<br>"+
"[FONT=times new roman][SIZE=5]Дата:" + segodnya + '[/SIZE][/FONT]<br>'+
"[SIZE=5][FONT=times new roman]Подпись:  [COLOR=rgb(250, 197, 28)]Twix[/COLOR][/FONT][/SIZE]<br>"+
"<br>"+
"[FONT=times new roman][IMG width=149px]https://i.imgur.com/61254Y4.png[/IMG][/FONT][/CENTER] <br>",
  },
  {
	title: "Апелл.суд вердикт",
    content:
  	"[CENTER][FONT=times new roman][COLOR=rgb(255, 255, 255)][SIZE=6]APPEALS COURT OF CHRISTMAS[/SIZE][/COLOR]<br>"+
"[IMG]https://i.imgur.com/FIyzI0U.png[/IMG]<br>"+
"[COLOR=rgb(255, 255, 255)]Апелляционный суд, в лице судьи[/COLOR] [COLOR=rgb(251, 160, 38)]Sam Twux[/COLOR][COLOR=rgb(255, 255, 255)], рассмотрев иск в первой инстанции от гражданина Имя Фамилия,[/COLOR][COLOR=rgb(0, 168, 133)]  [/COLOR][COLOR=rgb(255, 255, 255)]может заключить следующее: [/COLOR]<br>"+
"[COLOR=rgb(226, 80, 65)]Апелляционный суд не видит каких-либо  существенных причин для изменения Решения суда первой инстанции по настоящему делу.Приказов от Вице-Губернатора никаких не было,хотя вы у него спрашивали. [/COLOR]<br>"+
"[SIZE=4][IMG]https://i.imgur.com/FIyzI0U.png[/IMG][/SIZE]<br>"+
"[COLOR=rgb(255, 255, 255)][SIZE=5]АПЕЛЛЯЦИОННЫЙ СУД ПОСТАНОВЛЯЕТ:[/SIZE][/COLOR][/FONT]<br>"+

"[COLOR=rgb(255, 255, 255)][FONT=times new roman][SIZE=4]1. Оставить в силе Решение Окружного Суда, вынесенное Окружным Судьёй — [/SIZE][/FONT][/COLOR][COLOR=rgb(26, 188, 156)][FONT=times new roman][SIZE=4]Artem Boyko[/SIZE][/FONT][/COLOR][COLOR=rgb(255, 255, 255)][FONT=times new roman][SIZE=4], по настоящему иску. <br>"+
"2. В удовлетворении требований по настоящему иску отказать. [/SIZE][/FONT][/COLOR]<br>"+

"[FONT=times new roman][SIZE=4][COLOR=rgb(184, 49, 47)]Закрыть судебное производство по данному делу.[/COLOR][/SIZE]<br>"+

"[IMG width=255px]https://i.imgur.com/61254Y4.png[/IMG]<br>"+
"[SIZE=4][IMG]https://i.imgur.com/FIyzI0U.png[/IMG][/SIZE][/FONT]<br>"+
"[COLOR=rgb(255, 255, 255)][SIZE=4][FONT=times new roman]Дело по данному исковому делу считать закрытым с момента вынесения приговора.<br>"+
"Приговор не подлежит обжалованию.<br>"+
"Все судебные издержки по исполнению данного приговора покрываются за счет государства.[/FONT][/SIZE][/COLOR]<br>"+
"[FONT=times new roman][SIZE=4][COLOR=rgb(255, 255, 255)]Судебные издержки по обжалованию приговора покрываются за счет осужденных и их законных представителей.[/COLOR] <br>"+
"[IMG]https://i.imgur.com/FIyzI0U.png[/IMG]<br>"+
"Дата:" + segodnya + '[/SIZE][/FONT]<br>'+
"[SIZE=4][COLOR=rgb(255, 255, 255)][FONT=times new roman]Подпись: [/FONT][/COLOR][COLOR=rgb(250, 197, 28)][FONT=times new roman]Twix[/FONT][/COLOR][/SIZE][/CENTER]<br>",
  },
  {
	title: "Верх.суд взятие иска",
	content:
  	"[CENTER][SIZE=5][FONT=times new roman]Доброго времени суток.<br>"+
"Верховный суд, в лице судьи [B][COLOR=rgb(26, 188, 156)]Sam Twix[/COLOR][/B].<br>"+
"Принялся рассматривать ваше исковое заявление.[/FONT]<br>"+
"<br>"+
"[COLOR=rgb(65, 168, 95)][FONT=tahoma]Ожидайте вердикта.[/FONT][/COLOR]<br>"+
"[FONT=times new roman][IMG]https://i.imgur.com/FIyzI0U.png[/IMG][/FONT][/SIZE]<br>"+
"[FONT=times new roman][SIZE=5]Дата:" + segodnya + '[/SIZE][/FONT]<br>'+
"[SIZE=5][FONT=times new roman]Подпись:  [COLOR=rgb(250, 197, 28)]Twix[/COLOR][/FONT][/SIZE]<br>"+
"<br>"+
"[FONT=times new roman][IMG width=149px]https://i.imgur.com/i10u2fI.png[/IMG][/FONT][/CENTER] <br>",
  },
  {
	title: "Верх.суд вердикт",
	content:
	"[CENTER][FONT=times new roman][COLOR=rgb(255, 255, 255)][SIZE=6]SUPREME COURT OF CHRISTMAS[/SIZE][/COLOR]<br>"+
"[IMG]https://i.imgur.com/FIyzI0U.png[/IMG]<br>"+
"[COLOR=rgb(84, 172, 210)][SIZE=4]Имя Фамилия[/SIZE][/COLOR]<br>"+
"[COLOR=rgb(255, 255, 255)][SIZE=3]Истец,[/SIZE]<br>"+
"[SIZE=4]v. [/SIZE][/COLOR]<br>"+
"[COLOR=rgb(235, 107, 86)][SIZE=4]Имя Фамилия[/SIZE][/COLOR]<br>"+
"[COLOR=rgb(255, 255, 255)][SIZE=3]Ответчик.[/SIZE][/COLOR]<br>"+

"[IMG]https://i.imgur.com/FIyzI0U.png[/IMG]<br>"+
"[COLOR=rgb(255, 255, 255)] Рассмотрев исковое заявление от гражданина[/COLOR] [COLOR=rgb(226, 80, 65)]Виола Смит[/COLOR].<br>"+
"[COLOR=rgb(255, 255, 255)]Верховный Суд, в лице судьи[/COLOR] [COLOR=rgb(0, 168, 133)]Sam Twix[/COLOR] [COLOR=rgb(255, 255, 255)]может заключить следующее:<br>"+
"В ходе судебного производства по настоящему иску была установлена личность ответчика:[/COLOR] [COLOR=rgb(226, 80, 65)]Адам Мохмед[/COLOR]<br>"+
"[COLOR=rgb(255, 255, 255)]Верховный суд  не установил факт наличия нарушений со стороны ответчика.[/COLOR]<br>"+

"[COLOR=rgb(250, 197, 28)]Пояснения по иску.[/COLOR]<br>"+


"[SIZE=4][IMG]https://i.imgur.com/FIyzI0U.png[/IMG]<br>"+
"[COLOR=rgb(255, 255, 255)][SIZE=5]ВЕРХОВНЫЙ СУД ПОСТАНОВЛЯЕТ:[/SIZE][/COLOR][/SIZE][/FONT]<br>"+

"[SIZE=4][COLOR=rgb(255, 255, 255)][FONT=times new roman][SIZE=4]1.[/SIZE][/FONT][/COLOR]<br>"+

"[FONT=times new roman][SIZE=4][COLOR=rgb(184, 49, 47)]Закрыть судебное производство по данному делу.[/COLOR][/SIZE]<br>"+

"[IMG width=170px]https://i.imgur.com/i10u2fI.png[/IMG]<br>"+
"[SIZE=4][IMG]https://i.imgur.com/FIyzI0U.png[/IMG][/SIZE][/FONT]<br>"+
"[COLOR=rgb(255, 255, 255)][SIZE=4][FONT=times new roman]Приговор вступает в законную силу с момента его вынесения.<br>"+
"Дело по данному исковому делу считать закрытым с момента вынесения приговора.<br>"+
"Приговор не подлежит обжалованию.<br>"+
"Все судебные издержки по исполнению данного приговора покрываются за счет государства.<br>"+
"Судебные издержки по обжалованию приговора покрываются за счет осужденных и их законных представителей. [/FONT][/SIZE][/COLOR]<br>"+
"[FONT=times new roman][SIZE=4][IMG]https://i.imgur.com/FIyzI0U.png[/IMG][/SIZE][/FONT]<br>"+
"[COLOR=rgb(255, 255, 255)][SIZE=4][FONT=times new roman]Дата:" + segodnya + '<br>'+
"Подпись:  [/FONT][/COLOR][COLOR=rgb(184, 49, 47)][FONT=times new roman]Подпись[/FONT][/COLOR][/SIZE][/SIZE][/CENTER]<br>"
  },
  {
	title: "Академия Суд.Коллегии",
	content:
  	" [CENTER][IMG width=170px]https://i.imgur.com/lMiRblx.png[/IMG][/CENTER] <br>"+
  	"[CENTER][FONT=courier new][SIZE=6]Академия Судейской коллегии штата Christmas[/SIZE] <br>" +
      "[SIZE=5]Уведомление[/SIZE][/FONT][/CENTER] <br>" +
  	"[CENTER][IMG]http://i.imgur.com/vGgCZhi.png[/IMG][/CENTER] <br>" +
  	"[CENTER][SIZE=4]...<br>" +
  	"...[/SIZE][/CENTER] <br>"+
      "[CENTER][IMG]http://i.imgur.com/vGgCZhi.png[/IMG][/CENTER] <br>"+
  	"[RIGHT][SIZE=4]Дата:" + segodnya + '<br>'+
      "Подпись аудитора: [I][FONT=book antiqua][S]A.Carey[/S][/FONT][/I][/SIZE][/RIGHT] <br>",
  },
{
    title: "Заседание",
    content:
      " [CENTER][IMG width=170px]https://i.imgur.com/lMiRblx.png[/IMG][/CENTER] <br>"+
      "[CENTER][FONT=courier new][SIZE=6]Верховный суд штата Christmas[/SIZE] <br>" +
"[SIZE=5]Постановление[/SIZE][/FONT][/CENTER] <br>" +
      "[CENTER][IMG]http://i.imgur.com/vGgCZhi.png[/IMG][/CENTER] <br>" +
      "[CENTER][SIZE=4]Верховный суд штата Christmas, в составе Верховного судьи Альберта Кэри, постановил:<br>" +
      "1. Назначить судебное заседание Верховного суда по делу № на 08.01.2023 в 17:00 по местному времени. <br>" +
      "[IMG]http://i.imgur.com/lZ9U32Y.png[/IMG] <br>" +
"Место проведение <br>" +
"[QUOTE]Зал суда на 4-м этаже Мэрии и в спец. рации «Discord» на волне «Пра-во・Зал суда».[/QUOTE] <br>" +
"Участники судебного процесса <br>" +
"[QUOTE]Судья: Верховный судья - Som Twix <br>" +
"Сторона обвинения: Истец - Fredperry Lacosta, Прокурор - Yamato Crown. <br>" +
"Сторона защиты: Ответчик - Arthur Mercer, Адвокат - Ati Strip.[/QUOTE] <br>" +
"Всем участником судебного процесса в обязательном порядке явиться на Судебное  заседание, в случае отсутствия на судебном заседании без  весомой причины вы будете привлечены к уголовной ответственности. <br>" +
      "[CENTER][IMG]http://i.imgur.com/lZ9U32Y.png[/IMG][/CENTER] <br>" +
      "[CENTER][SIZE=4]Постановление вступает в законную силу с момента подписания его судьей. <br>" +
      "[CENTER][IMG]http://i.imgur.com/vGgCZhi.png[/IMG][/CENTER] <br>"+
"[RIGHT][SIZE=4]Дата: 01.06.2023 <br>"+
"Подпись судьи: [I][FONT=book antiqua][S]A.Carey[/S][/FONT][/I][/SIZE][/RIGHT] <br>"
  },
{
	title: "Заявление в академию открыто",
	content:
  	" [CENTER][IMG width=170px]https://i.imgur.com/lMiRblx.png[/IMG][/CENTER] <br>"+
  	"[CENTER][FONT=courier new][SIZE=6]Академия Судейской коллегии штата Christmas[/SIZE] <br>" +
      "[SIZE=5]Уведомление[/SIZE][/FONT][/CENTER] <br>" +
      "[CENTER][IMG]http://i.imgur.com/vGgCZhi.png[/IMG][/CENTER] <br>" +
  	"[CENTER][SIZE=5]Зачисление в академию судейской коллегии - открыто.[/SIZE]<br>" +
      "[CENTER][IMG]http://i.imgur.com/vGgCZhi.png[/IMG][/CENTER] <br>"+
  	"[RIGHT][SIZE=4]Дата:" + segodnya + '<br>'+
  	"Подпись аудитора: [I][FONT=book antiqua][S]Kiyotaka[/S][/FONT][/I][/SIZE][/RIGHT] <br>",
  },
  {
	title: "Заявление в академию закрыто",
	content:
  	" [CENTER][IMG width=170px]https://i.imgur.com/lMiRblx.png[/IMG][/CENTER] <br>"+
  	"[CENTER][FONT=courier new][SIZE=6]Академия Судейской коллегии штата Christmas[/SIZE] <br>" +
      "[SIZE=5]Уведомление[/SIZE][/FONT][/CENTER] <br>" +
      "[CENTER][IMG]http://i.imgur.com/vGgCZhi.png[/IMG][/CENTER] <br>" +
  	"[CENTER][SIZE=5]Зачисление в академию судейской коллегии - закрыты.<br>" +
  	"[CENTER] Одобрено: [/SIZE]<br>"+
      "[CENTER][IMG]http://i.imgur.com/vGgCZhi.png[/IMG][/CENTER]  <br>"+
  	"[RIGHT][SIZE=4]Дата:" + segodnya + '<br>'+
  	"Подпись аудитора: [I][FONT=book antiqua][S]Kiyotaka[/S][/FONT][/I][/SIZE][/RIGHT] <br>",
  },
];
$(document).ready(() => {
  // Загрузка скрипта для обработки шаблонов
  $("body").append('<script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>');
 
  // Добавление кнопок при загрузке страницы
  addButton("Ответ", "selectAnswer");
 
 
  // Поиск информации о теме
  const threadData = getThreadData();
 
  $("button#close").click(() => editThreadData(17, false, true));
  $("button#pin").click(() => editThreadData(15, true, false));
  $("button#pint").click(() => editThreadData(22, true, false));
  $("button#piny").click(() => editThreadData(18, true, false));
 
  $(`button#selectAnswer`).click(() => {
	XF.alert(buttonsMarkup(buttons), null, "Выберите ответ:");
	buttons.forEach((btn, id) => {
  	$(`button#answers-${id}`).click(() => pasteContent(id, threadData));
	});
  });
});
 
function addButton(name, id) {
  $(".button--icon--reply").after(
	`<button type="button" class="button rippleButton" id="${id}" style="margin: 3px;">${name}</button>`
  );
}
 
function buttonsMarkup(buttons) {
  return `<div class="select_answer">${buttons
	.map(
  	(btn, i) =>
    	`<button id="answers-${i}" class="button--primary button ` +
    	`rippleButton" style="margin:5px"><span class="button-text">${btn.title}</span></button>`
	)
	.join("")}</div>`;
}
 
function pasteContent(id, data = {}) {
  const template = Handlebars.compile(buttons[id].content);
  if ($(".fr-element.fr-view p").text() === "") $(".fr-element.fr-view p").empty();
 
  $("span.fr-placeholder").empty();
  $("div.fr-element.fr-view p").append(template(data));
  $("a.overlay-titleCloser").trigger("click");
}
 
function getThreadData() {
  const authorID = $("a.username")[0].attributes["data-user-id"].nodeValue;
  const authorName = $("a.username").html();
  const hours = new Date().getHours();
  return {
	user: {
  	id: authorID,
  	name: authorName,
  	mention: `[USER=${authorID}]${authorName}[/USER]`,
	},
	greeting: () =>
  	6 < hours && hours <= 12
    	? "Доброе утро"
    	: 12 < hours && hours <= 18
    	? "Добрый день"
    	: 18 < hours && hours <= 24
    	? "Добрый вечер"
    	: "Доброй ночи",
  };
}
 
function editThreadData(prefix, pin = false, close = false) {
  // Получаем заголовок темы, так как он необходим при запросе
  const threadTitle = $(".p-title-value")[0].lastChild.textContent;
 
  fetch(`${document.URL}edit`, {
	method: "POST",
	body: getFormData({
  	prefix_id: prefix,
  	title: threadTitle,
  	"_xfSet[discussion_open]": close ? 0 : 1,
  	discussion_open: close ? 0 : 1,
  	sticky: pin ? 1 : 0,
  	"_xfSet[sticky]": pin ? 1 : 0,
  	_xfToken: XF.config.csrf,
  	_xfRequestUri: document.URL.split(XF.config.url.fullBase)[1],
  	_xfWithData: 1,
  	_xfResponseType: "json",
	}),
  }).then(() => location.reload());
}
 
function getFormData(data) {
  const formData = new FormData();
  Object.entries(data).forEach((i) => formData.append(i[0], i[1]));
  return formData;
}
 
// Помощник по кодам - https://xenforo.com/community/help/bb-codes/
// Есть проблемы? Пиши сюда - vk.com/lavadinov
// Или можно сюда - Dicsord 0920#0920
 
 
 
// Времена суток.
function buttonsh_add(title, text) {
           	var h = new Date().getHours();
           	var bstyle = 'margin-top: 3px;margin-left: 3px;';
	var button_addv = 'value="' + title + '" id="shabs_' + window.button_id + '" style="'+ bstyle +'"';
	var button_add = '<input type="button" class="button shabs_button" ' + button_addv + '>';
	$('#shabscontent').append(button_add);
	var text_nw = text.replace(/\{times_of_day\}/g, (6 < h && h <= 12) ? "Доброе утро" : 0 || (12 < h && h <= 18) ? "Добрый день" : 0 || (18 < h && h <= 0) ? "Добрый вечер" : 0 || "Доброй ночи");
	$("input#shabs_" + window.button_id + ".button").bind('click', function () {
                          	$('div.fr-element.fr-view').append(text_nw);
                          	$('span.fr-placeholder').empty()
                          	$('div.overlay-container').remove()
                          	$('body').attr('class', '')
                          	$("a.overlay-titleCloser").trigger('click')
           	})
	window.button_id++;
}
