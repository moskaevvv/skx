<?php
$remote_file_contents = file_get_contents('http://www.aviamordovia.ru/schedule/Schedule.xml');
//Get the contents

$local_file_path = 'skx/public_html/Schedule.xml';

file_put_contents($local_file_path, $remote_file_contents);
//save the contents of the remote file
?>
