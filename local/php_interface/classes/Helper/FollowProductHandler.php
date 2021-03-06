<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');

/**
 * Представляет обработчик для команды на добавление товара в избранное.
 */
class FollowProductHandler extends BaseHandler
{
    private $productId;

    public function __construct($request)
    {
        $this->productId = $request->getPost("id");
    }

    public function Execute() {
        require_once __DIR__ . "/FollowService.php";
        $favoritesManager = new FollowService($USER);
        try {
            $favoritesManager->FollowProduct((int)$this->productId);
            return true;
        } catch (Extension $e) {
            return false;
        }
    }
}