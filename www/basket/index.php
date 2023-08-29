<?php
    $cssAdd = ['/catalog/style.css'];
    include '../layout/header.php';
?>
<div>
        <h2>Корзина</h2>
        <table id="basket" cellspacing="70px" class="table">
        </table>
        <div id="totalText">Итог:    <span id="total"></span></div>
    </div>
    <script src="./script.js"></script>
<?php
    include '../layout/footer.php';
?>