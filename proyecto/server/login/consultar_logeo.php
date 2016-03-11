<?php

session_start();
if (isset($_SESSION['conectado']) && $_SESSION['conectado'] == true) {
    echo 'conectado';
} else {
    echo 'desconectado';
} 
