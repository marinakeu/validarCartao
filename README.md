# Validador de Cartão de Crédito v.1.0.0

**Esta biblioteca se destina à validação de número de cartão de crédito a partir do dígito verificador.**  Na versão atual é possível verificar a partir de algoritmo de Luhn o último dígito do número do cartão, sem, contudo, verificar a existência deste nas instituições financeiras.

## Como instalar:

$  npm install creditcardvalidator-mk

## Como utilizar:

    > const cardNumber = require("creditcardvalidator-mk");
    > console.log(cardNumber.cardValidator('378282246310005'))
    > // returns true

Obs: inserir o número do cartão como string (com aspas) e apenas números (sem ponto, hífen ou espaços).

## roadmap oficial do projeto

#### versão 2.0.0 

-   implementação da opção de inserir o número do cartão como número (além de string);

#### versão 1.0.0 (released)

-   funcionalidades: validação de número de cartão de crédito a partir do dígito verificador.