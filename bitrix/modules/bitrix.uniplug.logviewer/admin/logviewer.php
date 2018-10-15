<?
require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_admin_before.php');
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/iblock/iblock.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/iblock/prolog.php");
IncludeModuleLangFile(__FILE__);
CUtil::InitJSCore(array('jquery'));
/** @global CMain $APPLICATION */
/** @global CDatabase $DB */

$POST_RIGHT = $APPLICATION->GetGroupRight("main");
if ($POST_RIGHT == "D")
	$APPLICATION->AuthForm(GetMessage("ACCESS_DENIED"));

if (!CModule::IncludeModule('uniplug.logviewer')) {
	return;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['type'] == "add_to_log" && check_bitrix_sessid()) {
	AddMessage2Log($_POST['log_message'], "uniplug_logviewer");
}

$file = LOG_FILENAME;
define('MAX_FILESIZE', 1000);

if (defined('LOG_FILENAME')) {

	if (!isset($_SESSION['offset'])) {
		if (MAX_FILESIZE > filesize(LOG_FILENAME)) {
			$_SESSION['offset'] = 0;
		} else {
			$_SESSION['offset'] = filesize(LOG_FILENAME) - MAX_FILESIZE;
		}
	}

	if ($_POST['type'] == 'delete_log') {
		unlink(LOG_FILENAME);
		AddMessage2Log(GetMessage('UNIPLUG_LOGVIEWER_LOG_REMOVED') . ' ' . date('d.m.Y G:i'), 'uniplug_logviewer');
		$_SESSION['offset'] = 0;
	}


	if (in_array($_POST['type'], array('refresh', 'delete_log'))) {

		if (!check_bitrix_sessid()) {
			exit();
		}
		if ($_SESSION['error_flag'] == 1) {
			exit();
		}

		if (fileatime($file) != $_SESSION['access_time']) { //если вдруг оказалось, что кто-то удалил файл, то даты не сойдутся и офсет обнулится
			$_SESSION['offset'] = 0;
		}

		$handle = fopen($file, 'r');
		$data = htmlspecialcharsbx(stream_get_contents($handle, -1, $_SESSION['offset']));
		$data = nl2br($data);
		echo $data;

		$eof_pos = ftell($handle);
		$_SESSION['offset'] = $eof_pos;
		$_SESSION['access_time'] = fileatime($file); // сохраняем в сессию время последнего доступа к файлу - того, который сейчас произошел

		exit();
	}

	$_SESSION['error_flag'] = 0;
}


$aTabs = array(
	array(
		'DIV'   => 'general1',
		'TAB'   => GetMessage('UNIPLUG_LOGVIEWER_TAB_1'),
		'ICON'  => 'iblock_section',
		'TITLE' => GetMessage('UNIPLUG_LOGVIEWER_TAB_1'),
	),
	array(
		'DIV'   => 'general2',
		'TAB'   => GetMessage('UNIPLUG_LOGVIEWER_TAB_2'),
		'ICON'  => 'iblock_section',
		'TITLE' => GetMessage('UNIPLUG_LOGVIEWER_TAB_2'),
	),
);

$tabControl = new CAdminTabControl('tabControl', $aTabs);

require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_admin_after.php');

$APPLICATION->SetTitle('Просмотр логов');
?>
<?
if (!defined('LOG_FILENAME')) {
	$_SESSION['error_flag'] = 1;
	echo \CAdminMessage::ShowMessage(GetMessage('UNIPLUG_LOGVIEWER_ERR_NOT_DEFINED'));
} elseif (!fopen($file, 'r')) {
	$_SESSION['error_flag'] = 1;
	echo \CAdminMessage::ShowMessage(GetMessage('UNIPLUG_LOGVIEWER_ERR_OPEN_LOG'));
} else {
	fclose($handle);
}

?>
	<div class="adm-info-message-wrap adm-info-message-gray">
		<div class="adm-info-message">
			<div class="adm-info-message-title">Как это работает?</div>
			Прочтите <a href="https://dev.1c-bitrix.ru/api_help/main/functions/debug/addmessage2log.php" target="_blank">официальную документацию</a>.
			<div class="adm-info-message-buttons"></div>
		</div>
	</div>

	<div class="adm-info-message-wrap adm-info-message-gray">
		<div class="adm-info-message">
			<div class="adm-info-message-title">Нашли ошибку или нужна помощь?</div>
			<a href="http://uniplug.ru/contacts/" target="_blank">Обратитесь к разработчику</a>.
			<div class="adm-info-message-buttons"></div>
		</div>
	</div>

	<div id="delete_message" style="display:none"><?= \CAdminMessage::ShowNote('Лог-файл удален!') ?></div>
<?if ($_SESSION['error_flag'] == 0):?>

	<?$tabControl->Begin(); ?>

	<?$tabControl->BeginNextTab(); ?>
		<div style="width: 100%; height: 600px; overflow: auto;" id="logs"></div>
	<? $tabControl->EndTab(); ?>

	<?$tabControl->BeginNextTab(); ?>
		<h4>Путь к лог-файлу: <?= LOG_FILENAME ?></h4>
		<form method="POST" id="add_to_log" name="add_to_log" action="<?= $APPLICATION->GetCurPage() ?>">
			<label>Вы можете протестировать работу модуля, отправив произвольный текст в лог:
				<br>
				<textarea id="log_message" cols="66" rows="10" name="log_message"></textarea></label>
			<br>
			<input type="submit" value="Отправить в лог">&nbsp&nbsp<input type="button" id="delete_log" value="Удалить лог-файл">

		</form>
	<? $tabControl->EndTab(); ?>

	<?$tabControl->End(); ?>

<?endif;?>

	<script>
		$(function () {
			i = 0;
			scroll_flag = 1;
			setInterval(function () {
				$.ajax({
					type: "POST",
					url: "<?=$APPLICATION->GetCurPage()?>",
					data: {sessid: BX.bitrix_sessid(), type: 'refresh'},
					success: function (data) {
						$('#logs').append(data);
						if (scroll_flag == 1) {
							$('#logs').scrollTop(99999999999);
							scroll_flag = 0;
						}
					}
				})
			}, 3000);
		});

		$('#add_to_log').on('submit', function (event) {
			event.preventDefault();
			var message = $('#log_message').val();
			$.ajax({
				type: "POST",
				url: "<?=$APPLICATION->GetCurPage()?>",
				data: {sessid: BX.bitrix_sessid(), log_message: message, type: 'add_to_log'},
				success: function () {
					$('#log_message').val('');
					$('#tab_cont_general1').trigger('click');
					scroll_flag = 1;
				}
			});
		});
		$('#delete_log').on('click', function (event) {
			event.preventDefault();
			$.ajax({
				type: "POST",
				url: "<?=$APPLICATION->GetCurPage()?>",
				data: {sessid: BX.bitrix_sessid(), type: 'delete_log'},
				success: function (data) {
					$('#delete_message').show();
					$('#log_message').val('');
					$('#logs').empty();
					$('#logs').append(data);
					$('#tab_cont_general1').trigger('click');
					setTimeout("$('#delete_message').fadeOut()", 5000);
				}
			});
		});
	</script>

<?require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/epilog_admin.php');
