<?if(!defined("B_PROLOG_INCLUDED")||B_PROLOG_INCLUDED!==true)die();COption::SetOptionString("businesscard","siteName",$wizard->GetVar("siteName"),false,WIZARD_SITE_ID);COption::SetOptionString("businesscard","EMAIL",$wizard->GetVar("EMAIL"),false,WIZARD_SITE_ID);COption::SetOptionString("businesscard","PHONE",$wizard->GetVar("PHONE"),false,WIZARD_SITE_ID);COption::SetOptionString("businesscard","SKYPE",$wizard->GetVar("SKYPE"),false,WIZARD_SITE_ID);COption::SetOptionString("businesscard","ADDRESS",$wizard->GetVar("ADDRESS"),false,WIZARD_SITE_ID);COption::SetOptionString("businesscard","LATITUDE",$wizard->GetVar("LATITUDE"),false,WIZARD_SITE_ID);COption::SetOptionString("businesscard","LONGITUDE",$wizard->GetVar("LONGITUDE"),false,WIZARD_SITE_ID);COption::SetOptionString("businesscard","LATITUDE_CENTER",$wizard->GetVar("LATITUDE_CENTER"),false,WIZARD_SITE_ID);COption::SetOptionString("businesscard","LONGITUDE_CENTER",$wizard->GetVar("LONGITUDE_CENTER"),false,WIZARD_SITE_ID);COption::SetOptionString("businesscard","KEYWORDS",$wizard->GetVar("KEYWORDS"),false,WIZARD_SITE_ID);COption::SetOptionString("businesscard","DESCRIPTION",$wizard->GetVar("DESCRIPTION"),false,WIZARD_SITE_ID);$status=($wizard->GetVar("installDemoData")=="Y")?"Y":"N";COption::SetOptionString("businesscard","installDemoData",$status,false,WIZARD_SITE_ID);$obSite=new CSite;$obSite->Update(WIZARD_SITE_ID,Array("EMAIL"=>$wizard->GetVar("EMAIL"),"NAME"=>"[".WIZARD_SITE_ID."] ".GetMessage("wiz_site_name"),"SITE_NAME"=>$wizard->GetVar("siteName"),"SERVER_NAME"=>SERVER_NAME,));COption::SetOptionString("main","site_name",$wizard->GetVar("siteName"));COption::SetOptionString("main","email_from",$wizard->GetVar("EMAIL"));COption::SetOptionString("main","upload_dir","upload");COption::SetOptionString("main","save_original_file_name","Y");COption::SetOptionString("main","translit_original_file_name","Y");COption::SetOptionString("main","convert_original_file_name","Y");COption::SetOptionString("main","optimize_css_files","Y");COption::SetOptionString("main","optimize_js_files","Y");COption::SetOptionString("main","use_minified_assets","Y");COption::SetOptionString("main","move_js_to_body","Y");COption::SetOptionString("main","compres_css_js_files","Y");COption::SetOptionString("main","map_top_menu_type","top, right");COption::SetOptionString("main","map_left_menu_type","podmenu");COption::SetOptionString("main","new_user_registration","Y");COption::SetOptionString("main","captcha_registration","N");COption::SetOptionString("main","CAPTCHA_presets","0");COption::SetOptionString("main","CAPTCHA_transparentTextPercent","0");COption::SetOptionString("main","CAPTCHA_arBGColor_1","FFFFFF");COption::SetOptionString("main","CAPTCHA_arBGColor_2","FFFFFF");COption::SetOptionString("main","CAPTCHA_numEllipses","0");COption::SetOptionString("main","CAPTCHA_arEllipseColor_1","7F7F7F");COption::SetOptionString("main","CAPTCHA_arEllipseColor_2","FFFFFF");COption::SetOptionString("main","CAPTCHA_bLinesOverText","Y");COption::SetOptionString("main","CAPTCHA_numLines","0");COption::SetOptionString("main","CAPTCHA_arLineColor_1","FFFFFF");COption::SetOptionString("main","CAPTCHA_arLineColor_2","FFFFFF");COption::SetOptionString("main","CAPTCHA_textStartX","40");COption::SetOptionString("main","CAPTCHA_textFontSize","26");COption::SetOptionString("main","CAPTCHA_arTextColor_1","000000");COption::SetOptionString("main","CAPTCHA_arTextColor_2","000000");COption::SetOptionString("main","CAPTCHA_textAngel_1","-15");COption::SetOptionString("main","CAPTCHA_textAngel_2","15");COption::SetOptionString("main","CAPTCHA_textDistance_1","-2");COption::SetOptionString("main","CAPTCHA_textDistance_2","-2");COption::SetOptionString("main","CAPTCHA_bWaveTransformation","Y");COption::SetOptionString("main","CAPTCHA_bEmptyText","N");COption::SetOptionString("main","CAPTCHA_arBorderColor","EFEFEF");COption::SetOptionString("main","CAPTCHA_arTTFFiles","bitrix_captcha.ttf");COption::SetOptionString("main","CAPTCHA_letters","ABCDEFGHJKLMNPQRSTWXYZ23456789");COption::SetOptionString("fileman","propstypes",serialize(array("description"=>GetMessage("MAIN_OPT_DESCRIPTION"),"keywords"=>GetMessage("MAIN_OPT_KEYWORDS"),"title"=>GetMessage("MAIN_OPT_TITLE"),"keywords_inner"=>GetMessage("MAIN_OPT_KEYWORDS_INNER"))),false,$siteID);COption::SetOptionInt("search","suggest_save_days",250);COption::SetOptionString("search","use_tf_cache","Y");COption::SetOptionString("search","use_word_distance","Y");COption::SetOptionString("search","use_social_rating","Y");COption::SetOptionString("iblock","use_htmledit","Y");COption::SetOptionString("iblock","show_xml_id","Y");COption::SetOptionString("iblock","combined_list_mode","Y");?>