<?php
ini_set("soap.wsdl_cache_enabled", 0);

$wsdl = "http://api.radioreference.com/soap2/?wsdl&v=latest";

    $client = new SoapClient($wsdl, [
        'trace' => true,
        'exceptions' => true,
        'cache_wsdl' => WSDL_CACHE_NONE
    ]);

    $countries = $client->__soapCall("getCountryList", []);
//   var_dump($countries);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Country List</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @media (max-width: 640px) {
            .table-container {
                overflow-x: auto;
            }
        }
    </style>
</head>
<body class="bg-gray-100 font-sans">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Country List</h1>

       
        <?php if (empty($countries)): ?>
            <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded" role="alert">
                <p>No countries available.</p>
            </div>
        <?php else: ?>
            <div class="table-container">
                <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead class="bg-gray-800 text-white">
                        <tr>
                            <th class="py-3 px-6 text-left">Country</th>
                            <th class="py-3 px-6 text-left">Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($countries as $country): ?>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3 px-6"><?php echo htmlspecialchars($country->countryName ?? 'Unknown'); ?></td>
                                <td class="py-3 px-6"><?php echo htmlspecialchars($country->countryCode ?? 'Unknown'); ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        <?php endif; ?>
    </div>
</body>
</html>