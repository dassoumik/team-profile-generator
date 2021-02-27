function generateHtml(data) {
    const HtmlData = `
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    <title>My Team</title>
</head>

<body>
    <div class="container mx-auto">
        <header class="nav navbar bg-danger text-white" style="border-radius: 0 0 100px 100px;">
            <h4 class="mx-auto">My Team</h4>
        </header>
        
    <div class="row m-5 p-5">
        <div class="col-md-12 m-0 p-0 text-center" style="margin: 0 auto;">
            <div class="card-group pl-0 pr-0 m-0 text-center">
                ${data}
            </div>
        </div>
    </div>
    </div>
    </div>
</body>

</html>
    
    `;
return HtmlData;    
}

module.exports = generateHtml;