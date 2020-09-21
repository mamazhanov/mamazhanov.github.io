<?php

/* https://api.telegram.org/bot1371937115:AAGIniZa8RgOghoeZCoA7Kpt5BSBZrSZcwo/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

$token = "1371937115:AAGIniZa8RgOghoeZCoA7Kpt5BSBZrSZcwo";
$chat_id = "-482540675";
$arr = array(
  'Имя пользователя: ' => $name,
  'WhatsApp: ' => $phone
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