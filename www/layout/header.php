<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/style.css">
    <?php
        if (isset($cssAdd)){
            foreach($cssAdd as $link){
                echo "<link rel=\"stylesheet\" href=\"$link\">";
            }
        } 
    ?>
</head>
<body>
    <svg  display="none">
        <symbol viewBox="0 0 512 512" id="burgerIcon">
            <g>
                <path d="M469.333,224h-448C9.551,224,0,233.551,0,245.333c0,11.782,9.551,21.333,21.333,21.333h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,233.551,481.115,224,469.333,224z"/>
                <path d="M21.333,117.333h448c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333h-448C9.551,74.667,0,84.218,0,96   S9.551,117.333,21.333,117.333z"/>
                <path d="M469.333,373.333h-448C9.551,373.333,0,382.885,0,394.667C0,406.449,9.551,416,21.333,416h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,382.885,481.115,373.333,469.333,373.333z"/>
            </g>
        </symbol>
    </svg>
        <svg  display="none">
            <symbol viewBox="0 0 24 24" id="userIcon">
                <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-5,21.797v-.797c0-2.757,2.243-5,5-5s5,2.243,5,5v.797c-1.501.769-3.201,1.203-5,1.203s-3.499-.434-5-1.203Zm11-.582v-.215c0-3.309-2.691-6-6-6s-6,2.691-6,6v.215c-3.008-1.965-5-5.362-5-9.215C1,5.935,5.935,1,12,1s11,4.935,11,11c0,3.853-1.992,7.25-5,9.215ZM12,5c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,7c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z"/>
            </symbol>
        </svg>
    <svg  display="none">
        <symbol viewBox="0 0 24 24" id="searchIcon">
            <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/>
        </symbol>
    </svg>
    <header>
        <div class="left-header">
            <svg class="burger">
                <use xlink:href="#burgerIcon"></use>
            </svg>
        </div>
        <div class="center-header">
            <div class="logo">СайтКрутой</div>
        </div>
        <div class="right-header">
            <div class="search">
                <input type="text" class="search-input">
                <button class="search-button">
                    <svg class="search-button-icon">
                        <use xlink:href="#searchIcon"></use>
                    </svg>
                </button>
            </div>
            <svg class="user">
                <use xlink:href="#userIcon"></use>
            </svg>
        </div>
    </header>
    <div class="menu">
    <ul class="menu-list">
            <li class="menu-list-element"><a href="/">Home</a></li>
            <li class="menu-list-element"><a href="/catalog/">Каталог товаров</a></li>
            <li class="menu-list-element"><a href="/basket/">Корзина</a></li>
        </ul>
    </div>
    <div class="user-menu">
    <ul class="user-menu-list">
            <li class="user-menu-list-element"><a href="/user-page.php">Страничка пользователя</a></li>
            <li class="user-menu-list-element">Сися</li>
        </ul>
    </div>
    <div class="main">
        <aside class="left">left</aside>
        <main>