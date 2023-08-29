<?php
    $cssAdd = ['/catalog/style.css'];
    include '../layout/header.php';
?>
<div>
        <h2>Каталог</h2>
        <table id="catalog" cellspacing="70px" class="table">
            <tr>
                <th>Наим. товара</th>
                <th>Цена/руб.</th>
                <th>Кол-во</th>
                <th></th>
            </tr>
        </table>
    </div>
    <script src="./script.js"></script>
<?php
    include '../layout/footer.php';
?>