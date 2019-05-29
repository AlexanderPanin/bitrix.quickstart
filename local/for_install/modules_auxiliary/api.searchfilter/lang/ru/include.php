<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();

$MESS['STOP_WORDS'] = array(
	'что', 'как', 'все', 'она', 'так', 'его', 'только', 'мне', 'было', 'вот',
	'меня', 'еще', 'нет', 'ему', 'теперь', 'когда', 'даже', 'вдруг', 'если',
	'уже', 'или', 'быть', 'был', 'него', 'вас', 'нибудь', 'опять', 'вам', 'ведь',
	'там', 'потом', 'себя', 'может', 'они', 'тут', 'где', 'есть', 'надо', 'ней',
	'для', 'тебя', 'чем', 'была', 'сам', 'чтоб', 'без', 'будто', 'чего', 'раз',
	'тоже', 'себе', 'под', 'будет', 'тогда', 'кто', 'этот', 'того', 'потому',
	'этого', 'какой', 'ним', 'этом', 'один', 'почти', 'мой', 'тем', 'чтобы',
	'нее', 'были', 'куда', 'зачем', 'всех', 'можно', 'при', 'два', 'другой',
	'хоть', 'после', 'над', 'больше', 'тот', 'через', 'эти', 'нас', 'про', 'них',
	'какая', 'много', 'разве', 'три', 'эту', 'моя', 'свою', 'этой', 'перед',
	'чуть', 'том', 'такой', 'более', 'всю',
);

$MESS['EE']        = array('ё' => 'е');
$MESS['RV_VOWELS'] = array('а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я');

//step1
$MESS['STEP1_A']           = 'а';
$MESS['STEP1_YA']          = 'я';
$MESS['STEP1_PERFECTIVE1'] = array('в', 'вши', 'вшись');
$MESS['STEP1_PERFECTIVE2'] = array('ив', 'ивши', 'ившись', 'ыв', 'ывши', 'ывшись');
$MESS['STEP1_REFLEXIVE']   = array('ся', 'сь');
$MESS['STEP1_ADJECTIVE']   = array('ее', 'ие', 'ые', 'ое', 'ими', 'ыми', 'ей', 'ий', 'ый', 'ой', 'ем', 'им', 'ым', 'ом', 'его', 'ого', 'ему', 'ому', 'их', 'ых', 'ую', 'юю', 'ая', 'яя', 'ою', 'ею');
$MESS['STEP1_PARTICIPLE2'] = array('ем', 'нн', 'вш', 'ющ', 'щ');
$MESS['STEP1_PARTICIPLE1'] = array('ивш', 'ывш', 'ующ');
$MESS['STEP1_VERB1']       = array('ла', 'на', 'ете', 'йте', 'ли', 'й', 'л', 'ем', 'н', 'ло', 'но', 'ет', 'ют', 'ны', 'ть', 'ешь', 'нно');
$MESS['STEP1_VERB2']       = array('ила', 'ыла', 'ена', 'ейте', 'уйте', 'ите', 'или', 'ыли', 'ей', 'уй', 'ил', 'ыл', 'им', 'ым', 'ен', 'ило', 'ыло', 'ено', 'ят', 'ует', 'уют', 'ит', 'ыт', 'ены', 'ить', 'ыть', 'ишь', 'ую', 'ю');
$MESS['STEP1_NOUN']        = array('а', 'ев', 'ов', 'ие', 'ье', 'е', 'иями', 'ями', 'ами', 'еи', 'ии', 'и', 'ией', 'ей', 'ой', 'ий', 'й', 'иям', 'ям', 'ием', 'ем', 'ам', 'ом', 'о', 'у', 'ах', 'иях', 'ях', 'ы', 'ь', 'ию', 'ью', 'ю', 'ия', 'ья', 'я');

//step3
$MESS['STEP3_VOWELS']       = array('а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я');
$MESS['STEP3_DERIVATIONAL'] = array('ост', 'ость');


//step4
$MESS['STEP4_NN']          = 'нн';
$MESS['STEP4_SUPERLATIVE'] = array('ейш', 'ейше');
$MESS['STEP4_SOFT_SIGN']   = 'ь';
