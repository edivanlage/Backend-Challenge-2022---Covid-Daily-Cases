# Backend-Challenge-2022---Covid-Daily-Cases

Desafio para Backend Developer da Coodesh
Nesse desafio foi desenvolvido uma REST API que utilizará o histórico de casos de Covid, disponível no Kaggle. 
https://www.kaggle.com/yamqwe/omicron-covid19-variant-daily-cases

# Banco de Dados utilizado:

  Mysql
  
  * A aplicação é responsável por criar a tabela e alimenta-la com os dados disponíveis no arquivo '.csv' da Kaggle.
  

# Rotas:

  [GET]/: Retornar um Status: 200 e uma Mensagem "Backend Challenge 2021 🏅 - Covid Daily Cases"

  [GET]/cases/:date/count: Listar todos os registros da base de dados no dia selecionado, agrupados por país e separados por variante.

  [GET]/cases/:date/cumulative: Listar todos os registros da base de dados, retornando a soma dos casos registrados de acordo com a data selecionada, agrupados por país e separados por variante.

  [GET]/dates: Listar as datas disponíveis no dataset
