<?php 
$response=$_POST['response'];
$response=json_decode($response);
$city=$response->city;

function test_data($data){
    $data=trim($data);
    $data=htmlspecialchars($data);
    return $data;
}

$file=@get_headers('http://api.openweathermap.org/data/2.5/weather?q='.test_data($city).'&units=metric&mode=json&appid='.$key);

if($file[0]==='HTTP/1.1 200 OK'){
    $get_weather=file_get_contents('http://api.openweathermap.org/data/2.5/weather?q='.test_data($city).'&units=metric&mode=json&appid='.$key);

    $get_weather=json_decode($get_weather);
    
    $result=array("description"=>$get_weather->weather[0]->description,
        'icon'=>$get_weather->weather[0]->icon, 
        'humidity'=>$get_weather->main->humidity, 
        'wind'=>$get_weather->wind->speed, 
        'city'=>$get_weather->name, 
        'temperature'=>$get_weather->main->temp);

        echo json_encode($result);

   
}else{
    $result='<p> No result sorry</p>';
    echo json_encode ($result);

}

