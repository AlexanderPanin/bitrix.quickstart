<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();

//SERVICE_MACROS_SETTINGS
$MESS['SUBJECT_TIP']    = 'Тема сообщения задается для всех почтовых шаблонов единая из этого поля';
$MESS['PAGE_TITLE_TIP'] = 'Заголовок страницы.<br>Подойдет для передачи наименования товара в письмо при заказе в 1 клик из файла element.php комплексного компонента каталога';
$MESS['PAGE_URI_TIP']   = 'Адрес страницы с параметрами.<br>Подойдет для передачи ссылки на товар в письмо при заказе в 1 клик из файла element.php комплексного компонента каталога';
$MESS['PAGE_URL_TIP']   = 'Адрес страницы без параметров.<br>Подойдет для передачи ссылки на товар в письмо при заказе в 1 клик из файла element.php комплексного компонента каталога';
$MESS['DIR_URL_TIP']    = 'Адрес раздела.<br>Подойдет для передачи ссылки в письмо на текущий раздел страницы';
$MESS['DATETIME_TIP']   = 'Дата (строка).<br>Подойдет для передачи даты в письмо из файла element.php комплексного компонента каталога';

//ALL
$MESS['DISPLAY_FIELDS_TIP']             = 'Встроенные поля вполне функциональны, но ограничены в настройках, у полей конструктора больше настроек';
$MESS['REPLACE_FIELD_FROM_TIP']         = 'Возможно письма на ваш адрес будут попадать в папку спам, т.к. e-mail отправителя будет в поле "От"';
$MESS['FORM_TITLE_TIP']                 = 'Введенное название формы будет доступно в теле и теме почтового шаблона(письма) если в нем прописать макрос: #FORM_TITLE#';
$MESS['TITLE_DISPLAY_TIP']              = 'Данная опция просто управляет выводом заголовка формы на странице';
$MESS['FORM_STYLE_TIP']                 = 'Обертка всей формы обратной связи';
$MESS['FORM_STYLE_DIV_TIP']             = 'Обертка для Названия поля и поля ввода текста в строке';
$MESS['FORM_STYLE_LABEL_TIP']           = 'Метка содержащая название поля ввода';
$MESS['FORM_STYLE_TEXTAREA_TIP']        = 'Многострочное текстовое поле';
$MESS['FORM_STYLE_INPUT_TIP']           = 'Однострочное текстовое поле';
$MESS['FORM_STYLE_SELECT_TIP']          = 'Выпадающие/множественные списки';
$MESS['USE_CAPTCHA_TIP']                = 'CAPTCHA сильно раздражает и практически бесполезна, попробуйте невидимую зашиту «CSS-антиспам»';
$MESS['USE_HIDDEN_PROTECTION_TIP']      = 'Отличная замена CAPTCHA, невидимая зашита формы, не усложняйте жизнь посетителям сайта, а упрощайте, рекомендую попробовать!';
$MESS['VALIDTE_REQUIRED_FIELDS_TIP']    = 'Плагин проверяет обязательные поля формы не перезагружая страницу сайта.';
$MESS['UNIQUE_FORM_ID_TIP']             = 'ID каждой формы должен быть уникальным, иначе не будут работать валидаторы форм и несколько форм на одной странице';
$MESS['OK_TEXT_TIP']                    = 'Здесь можете писать текст сообщения даже в HTML';
$MESS['INCLUDE_JQUERY_TIP']             = 'jQuery подключайте если не работают скрипты. Подключается из ядра системы v1.8.3';
$MESS['INCLUDE_CSSMODAL_TIP']           = 'Плагин для работы модального окна.<br>Эта опция включается при использовании шаблона компонента в модальном окне.';
$MESS['INCLUDE_PLACEHOLDER_TIP']        = 'Плагин для кроссбраузерных плейсходеров.';
$MESS['INCLUDE_AUTOSIZE_TIP']           = 'Подключит плагин Autosize, который автоматически изменяет высоту текстовых полей при наборе текста посетителем';
$MESS['INCLUDE_FORM_STYLER_TIP']        = 'Подключит плагин jQuery Form Styler для стилизации флажков / переключа- телей';
$MESS['INCLUDE_ICHECK_TIP']             = 'Подключит плагин jQuery iCheck для стилизации флажков  и переключателей';
$MESS['MAX_FILE_SIZE_TIP']              = '10000 Килобайт = 10 Мегабайт';
$MESS['FILE_EXTENSIONS_TIP']            = 'Обязательно удалите ненужные расширения файлов';
$MESS['UPLOAD_FOLDER_TIP']              = 'Папка для загружаемых фалов должна быть доступна для записи, рекомендуемые права 755, в крайнем случае 777';
$MESS['SEND_ATTACHMENT_TIP']            = 'Файлы будут отправляться в письме вложениями, а не ссылками, т.е. будут видимые в письме, как прикрепленные';
$MESS['SET_ATTACHMENT_REQUIRED_TIP']    = 'Все поля файлов будут обязательными дла заполнения';
$MESS['SHOW_ATTACHMENT_EXTENSIONS_TIP'] = 'В шаблоне появится строка со списком доступных для загрузки расширений';
$MESS['SCROLL_TO_FORM_IF_MESSAGES_TIP'] = 'Прокручивается страница при ошибках и при успешной отправке формы';
$MESS['DELETE_FILES_AFTER_UPLOAD_TIP']  = 'Внимание! После каждой отправки формы будет очищаться указанная в настройках папка загружаемых файлов';
$MESS['INSTALL_IBLOCK_TIP']             = 'Будут установлены необходимые для работы модуля "Тип инфоблока" и "Инфоблок".<br>
Для инфоблока обязательно наличие свойства типа "строка" с кодом "TICKET_ID" и свойства типа "файл" с кодом "FILES".<br>
После создания инфоблока, если он не появился в выпадающем списке, нажмите напротив "Тип инфоблока" или "Инфоблок" кнопку "ОК", информация обновится.<br>
После создания инфоблоков необходимо убрать флажок с этой опции, чтобы при каждом открытии параметров компонента не происходил поиск инфоблока.';
$MESS['UUID_LENGTH_TIP']                = 'Рекомендуется 10, чем меньше, тем больше вероятность совпадений. Максимум 32.';
$MESS['DISABLE_SEND_MAIL_TIP']          = 'Полностью отключает уведомления на почту.';
$MESS['REDIRECT_PAGE_TIP']              = 'Путь к странице/каталогу, куда будет перенаправлен посетитель после отправки формы.<br>Например: /success/ или success.php';
$MESS['FORM_SUBMIT_STYLE_TIP']          = 'Ширина 100% задается так:<br>width:100%;';
$MESS['WRITE_MESS_FILDES_TABLE_TIP']    = 'Поля в виде таблицы будут записываться в почтовый шаблон, а не блоками';
$MESS['FIELD_ERROR_MESS_TIP']           = 'Макрос #FIELD_NAME# будет заменен на имя поля';
$MESS['EMAIL_TO_TIP']                   = 'Несколько e-mail пишите через запятую.';
$MESS['WRITE_MESS_DIV_STYLE_TIP']       = 'Обертка для Названия и Значения поля в почтовом шаблоне';
$MESS['DEFAULT_OPTION_TEXT_TIP']        = 'Для выпадающих списков и переключателей';
$MESS['FORM_CLASS_TIP']                 = 'Перечисленные классы подставятся в атрибут class обертки всей формы.<br>Классы пишутся через пробел.';
$MESS['FORM_AUTOCOMPLETE_TIP']          = 'Можно отключить запоминание формой введеных ранее значений полей';
$MESS['FIELD_BORDER_ACTIVE_TIP']          = '1px solid #2b88f6';
$MESS['FIELD_BOX_SHADOW_ACTIVE_TIP']        = '-webkit-box-shadow:0 0 2px #69adff,  0 2px 2px #EDEDED inset;<br>
-moz-box-shadow:0 0 2px #69adff,  0 2px 2px #EDEDED inset;<br>
box-shadow:0 0 2px #69adff,  0 2px 2px #EDEDED inset;';
$MESS['AGREEMENT_LINK_TIP'] = 'Ссылка откроется в новом окне или в модальном.<br>Модальное окно вы делаете сами.';
$MESS['INCLUDE_TOOLTIPSTER_TIP'] = 'Все настройки плагина<br><a href="http://iamceege.github.io/tooltipster/#options" target="_blank">http://iamceege.github.io/tooltipster/#options</a>';