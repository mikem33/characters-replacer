<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Characters replace</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicons/favicon-16x16.png">
        <link rel="manifest" href="assets/img/favicons/site.webmanifest">
        <link rel="mask-icon" href="assets/img/favicons/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#ffc40d">
        <meta name="theme-color" content="#ffffff">
        <link rel="stylesheet" href="assets/css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Chivo:400,400i,700,700i&display=swap" rel="stylesheet">
        <script async src="assets/js/picturefill.min.js"></script>
    </head>
    <body>
        <main>
            <div class="warning"><p>Copied!</p></div> <!--  /.warning -->
            <div class="replace__container wrapper space section">
                <header class="replace__header">
                    <h1 class="title">Characters replacer</h1>
                    <h2>A simple tool to replace characters.</h2>
                </header>
                <div class="content">
                    <?php
                        $char_to    = isset($_GET['char-to']) ? $_GET['char-to'] : ' ';
                        $char_by    = isset($_GET['char-by']) ? $_GET['char-by'] : '.';
                        $data       = isset($_GET['input-text']) ? $_GET['input-text'] : 'This is a replace example.';
                    ?>
                    <form action="" method="get" class="replace__form">
                        <fieldset class="replace__char-to">
                            <label for="char-to">Insert the character or characters you want to be replaced <span>(defaults to 'space')</span>.</label>
                            <input type="text" id="char-to" name="char-to" value="<?php echo $char_to; ?>" />
                        </fieldset> <!--  /.replace__char-to -->
                        <fieldset class="replace__char-by">
                            <label for="char-by">Insert the character or characters you want to be placed instead. <span>(defaults to 'dot')</span></label>
                            <input type="text" id="char-by" name="char-by" value="<?php echo $char_by; ?>" />
                        </fieldset> <!--  /.replace__char-by -->
                        <fieldset class="replace__input-string">
                            <label>Insert a regular text with spaces.</label>
                            <textarea id="input-text" name="input-text" placeholder="Insert text here..."><?php echo $data; ?></textarea>
                        </fieldset><!--  /.replace__input-string -->
                        <button class="replace__submit">Replace</button> <!--  /.replace__submit -->
                    </form>
                    <article class="replace__result">
                        <p id="replaced-text"><?php 
                            $result = str_replace($char_to, $char_by, $data);
                            echo $result; 
                        ?></p>
                        <button onclick="copyElementText('replaced-text')">Copy text</button>
                    </article> <!--  /.replace__result -->
                </div> <!--  /.content -->
            </div> <!--  /.wrapper -->
        </main>

        <script src="assets/js/javascript.js"></script>
        
    </body>
</html>
