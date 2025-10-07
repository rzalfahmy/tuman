<?php
// CORS (optional, biar bisa diakses dari ESP)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Ambil parameter kota (default Jakarta)
$city = isset($_GET['city']) ? $_GET['city'] : 'Jakarta';
$country = isset($_GET['country']) ? $_GET['country'] : 'Indonesia';

// Tanggal hari ini
$date = date('Y-m-d');

// API Aladhan HTTPS
$api_url = "https://api.aladhan.com/v1/timingsByCity?city=".urlencode($city)."&country=".urlencode($country)."&method=2&date=".$date;

// Gunakan file_get_contents dengan context SSL
$options = [
    "ssl"=>[
        "verify_peer"=>false,
        "verify_peer_name"=>false,
    ]
];
$response = @file_get_contents($api_url, false, stream_context_create($options));

if($response){
    echo $response; // langsung return JSON ke ESP
}else{
    echo json_encode(["error"=>"Failed to fetch API"]);
}
?>
