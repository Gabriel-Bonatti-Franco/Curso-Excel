<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso de Excel</title>

    <script src="/src/components/main_menu/main_menu.js" defer></script>
    <script src="/src/components/banner/banner.js" defer></script>
    <script src="/src/components/card_carrossel/card_carrossel.js" defer></script>

    <link rel="stylesheet" href="/src/styles/style.css">

</head>
<body>
    <main-menu></main-menu>
    <div class="content">
        <main-banner>
            <div>
                <h1>Domine o Excel do Básico ao Avançado</h1>
                <p>Aulas praticas em video e artigos para você se tornar um expert em planilhas</p>
            </div>
            <img src="\src\images\excel-icon.png" alt="">
        </main-banner>

        <card-carrossel>
            <div class="card">Aula 1</div>
            <div class="card">Aula 2</div>
            <div class="card">Aula 3</div>
            <div class="card">Aula 4</div>
        </card-carrossel>

        <?php 
            echo "Testando PHP"
        ?>

    </div>
</body>
</html>