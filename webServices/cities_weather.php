<?php


 $cities = json_decode(file_get_contents('./city.list.json'),true);
 

$Egypt_Cities = array_filter($cities,function($ciyt){
    return $ciyt['country'] == 'EG';
});
$weather = null;

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['id'])) {
    $city = $_POST['id'];
    $apiKey = 'b82eadcf2a06d5393732b108bd7a66c7';
    $url_base = "https://api.openweathermap.org/data/2.5/weather?id={$city}&appid={$apiKey}&units=metric";
   
    $response =  file_get_contents($url_base);
    //  var_dump($response);
    if ($response !== false) {
        $weather = json_decode($response, true);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Weather App</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container py-5">
    <div class="text-center mb-4">
        <h1 class="display-5 fw-bold">🌤️ City Weather App</h1>
        <p class="lead">Check the current weather in your city</p>
    </div>

    <form method="post" class="row justify-content-center mb-4">
        <div class="col-md-6">
            <div class="input-group">
                 <select name="id" class="form-select">
                    <?php foreach ($Egypt_Cities as $targetCity): ?>
                        <option value="<?= htmlspecialchars($targetCity['id']) ?>" 
                            <?= (isset($city) && $city == $targetCity['id']) ? 'selected' : '' ?>>
                            <?= htmlspecialchars($targetCity['name']) ?>
                        </option>
                    <?php endforeach; ?>
                </select>
                <button class="btn btn-primary" type="submit">Get Weather</button>
            </div>
        </div>
    </form>

    <?php if ($weather && isset($weather['main'])): ?>
        <div class="card mx-auto shadow-lg" style="max-width: 600px;">
            <div class="card-body text-center">
                <h2 class="card-title"><?= $weather['name'] ?> Weather</h2>
                <p class="text-muted mb-1"><?= date('l, jS F Y') ?> at <?= date('g:i A') ?></p>
                <img src="https://openweathermap.org/img/w/<?= $weather["weather"][0]["icon"] ?>.png" alt="icon" class="my-3" style="width: 100px;">
                <h4 class="mb-3"><?= ucfirst($weather['weather'][0]['description']) ?></h4>
                <h3><?= $weather["main"]["temp"] ?>°C</h3>
                <p>
                    <strong>Min:</strong> <?= $weather["main"]["temp_min"] ?>°C |
                    <strong>Max:</strong> <?= $weather["main"]["temp_max"] ?>°C
                </p>
                <p>
                    <strong>Humidity:</strong> <?= $weather["main"]["humidity"] ?>% <br>
                    <strong>Wind Speed:</strong> <?= $weather["wind"]["speed"] ?> km/h
                </p>
            </div>
        </div>
   
    <?php endif; ?>
</div>

</body>
</html>
