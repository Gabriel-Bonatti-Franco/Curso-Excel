<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso de Excel</title>

    <script src="/src/components/banner/banner.js" defer></script>
    <script src="/src/components/card_carrossel/card_carrossel.js" defer></script>

    <link rel="stylesheet" href="/src/styles/style.css">

</head>
<body>

    <?php
        require 'src/components/main_menu/main_menu.html';
    ?>

    <div class="content">
        <main-banner>
            <div>
                <h1>Domine o Excel do Básico ao Avançado</h1>
                <p>Aulas praticas em video e artigos para você se tornar um expert em planilhas</p>
            </div>
            <img src="/src/images/excel-icon.png" alt="">
        </main-banner>

        <card-carrossel>
            <div class="card">
                <strong>Aula 01</strong>
                <p>Interface do Excel</p>
                <div class="group">Módulo Básico</div>
            </div>
            <div class="card">
                <strong>Aula 02</strong>
                <p>Tipos de Dados</p>
                <div class="group">Módulo Básico</div>
            </div>
            <div class="card">
                <strong>Aula 03</strong>
                <p>Estruturas de Dados</p>
                <div class="group">Módulo Básico</div>
            </div>
            <div class="card">
                <strong>Aula 04</strong>
                <p>Fórmulas Básicas</p>
                <div class="group">Módulo Básico</div>
            </div>
        </card-carrossel>

    </div>
</body>
</html>