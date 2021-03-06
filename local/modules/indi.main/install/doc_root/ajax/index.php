<?
/**
 * Реализует вызов экшена контроллера по шаблону URL
 * /ajax/{controller}/{action}/
 * 
 * @category	Individ
 * @link		http://individ.ru
 * @revision	$Revision$
 * @date		$Date$
 */

require_once $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php';

use Indi\Main;

try {
	if (!\Bitrix\Main\Loader::includeModule('indi.main')) {
		throw new Main\Exception('Can\'t include module "Individ".');
	}
	
	$urlParts = explode('/', $_SERVER['REQUEST_URI']);
	array_shift($urlParts);
	array_shift($urlParts);
	$controller = Main\Mvc\Controller\Prototype::factory(array_shift($urlParts) ?: 'default');
	
	$action = array_shift($urlParts) ?: 'default';
	$controller->setParamsPairs($urlParts);
	$controller->doAction($action);
} catch(Exception $e) {
	print $e->GetMessage();
}

require_once $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/epilog_after.php';