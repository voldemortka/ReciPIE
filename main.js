function inizialization(){
    document.head.innerHTML += `
        <meta charset='utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta hettp-equiva='X-UA-Compatible' content='IE-edge.chrome=1' />

        <!--To będzie taka tarta okrągła PIE XD Wpis tam gdzieś liczbę PI XD-->
        <link rel='website icon' href='logo.png' type='png'/>

        <meta name="application-name" content="ReciPIE">
        <meta name="apple-mobile-web-app-title" content="ReciPIE">

        <link rel="icon" type="image/png" sizes="32x32" href="logo.png">
        <link rel="icon" type="image/png" sizes="192x192" href="logo.png">
        <link rel="apple-touch-icon" href="logo.png">

        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="default">
        <meta name="theme-color" content="#EEDDC4"> <!--Coś tu wymyśl wgl-->

        <link rel='stylesheet' href='css/fontello.css' type='text/css'/>
        <link rel='stylesheet' href='style.css' type='text/css'/>

        <script src="main.js"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

        `;

        if(window.matchMedia("(max-width: 768px)").matches){
            //telefon
            $('.main-nav').html(`
                <a href="fridge.html" class="buttons-main-nav-tel" title="Fridge"> <i></i> </a>
                <a href="recipes.html" class="buttons-main-nav-tel" title="Recipes"> <i></i> </a>
                <a href="ideas.html" class="buttons-main-nav-tel" title="Meal ideas"> <i></i> </a>
                <a href="list.html" class="buttons-main-nav-tel" title="Shopping list"> <i></i> </a>
                <a href="settings.html" class="buttons-main-nav-tel" title="Settings"> <i></i> </a>
            `);
            $('.main-head').html(`
                <img src="logo.png" alt="Logo" class="logo-tel">
                <h1>ReciPIE</h1>    
            `);
        } else {
            //komputer
            $('.main-nav').html(`
                <a href="settings.html"></a><i id="settings-comp"></i></a>
                <a href="recipes.html" class="buttons-main-nav-comp"> <i></i> Recipes</a>
                <a href="fridge.html" class="buttons-main-nav-comp"> <i></i> Fridge</a>
                <a href="ideas.html" class="buttons-main-nav-comp"> <i></i> Meal ideas</a>
                <a href="list.html" class="buttons-main-nav-comp"> <i></i> Shopping list</a>
            `);
            $('.main-head').html(`
                <img src="logo.png" alt="Logo" class="logo-comp" title="ReciPIE's logo">
            `);
        }

        
}