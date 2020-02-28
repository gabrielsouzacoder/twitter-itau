# Twitter API

Responsável por baixar, tratar e disponibilizar dados do Twitter:

- Lista de todos os twitters baseado em hashtags previamente cadastradas
- Retornar a quantidade de twitters por hora
- Quais são os 5 usuários da listagem com mais seguidores
- O número de twitters agrupados por região/idioma do usuário que postou

# Requisitos

- [Docker](https://www.docker.com/products/docker-desktop) 19.03.5 +
- [Docker Compose](https://docs.docker.com/compose/install/) 1.25.4+

# Passo a passo

1 - Instalar os softwares presentes nos requisitos
2 - Baixar o código presente no repositório

```
git clone
```

3 - Executar o docker-compose

```
cd itau
docker-compose up -d --build
```

4 - Aguarde que todos os containers estejam prontos
5 - Para usar a aplicação acesse: [http://localhost:80](http://localhost)

# Acessos do projeto

- FRONT: [http://localhost:80](http://localhost)
- KIBANA: [http://localhost:5601](http://localhost:5601/)
  - Usuário: elastic
  - Senha: changeme
- GRAFANA: [http://localhost:3000](http://localhost:3000/)
  - Usuário: admin
  - Senha: admin
- ELASTICSEARCH: [http://localhost:9200](http://localhost:9200/)
  - Usuário: elastic
  - Senha: changeme
- PROMETHEUS: [http://localhost:9090](http://localhost:9090/)

# Métricas e monitorias

- Grafana
  ![image](https://user-images.githubusercontent.com/9288359/75583086-b68d9300-5a4b-11ea-901c-19ededf389b3.png)

- Kibana
  ![image](https://user-images.githubusercontent.com/9288359/75583176-e6d53180-5a4b-11ea-9a5e-bbfb76ced7f1.png)
