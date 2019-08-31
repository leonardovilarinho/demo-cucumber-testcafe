Feature: Pesquisa no Google

    Scenario: Pesquisar no Google e ver primeiro resultado
        Given acesso o site do Google
        When acesso a pagina de pesquisa
        Then devo visualizar o resultado do Github em primeiro