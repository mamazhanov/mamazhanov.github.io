<?php

/* https://api.telegram.org/bot1389973354:AAEtM4jSQiKcvXlP51fkN7EKtiOFWmcW_y0/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_reg_name'];
$surname = $_POST['user_reg_surname'];
$phone = $_POST['user_reg_phone'];
$email = $_POST['user_reg_email'];

$token = "1371937115:AAGIniZa8RgOghoeZCoA7Kpt5BSBZrSZcwo";
$chat_id = "-482540675";
$arr = array(
	
'Регистрация с сайта!',	
  'Имя пользователя: ' => $name,
  'Фамилия: ' => $surname,
  'Телефон: ' => $phone,
  'Email: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: html/thank-you.html');
} else {
  echo "Error";
}
?>