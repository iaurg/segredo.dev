<p align="center">
  <a href="https://segredo.dev/">
    <img alt="Segredo.dev" src="https://segredo.dev/content/images/2019/05/segredo-dev-favicon-1.png" width="60" />
  </a>
</p>
<h1 align="center">
  Segredo Dev
</h1>

Atualmente utilizo a plataforma Ghost em meu blog, porém ele exige algumas ferramentas que eu posso descartar, como painel de controle e servidor pago. Este repositório é a migração do blog em Ghost para Gatsby, utilizarei ele como controle de tarefas e comentários.

## Ghost local com api pública 🚫

Eu inicei a migração tentando utilizar o Ghost localmente com a [API pública](https://ghost.org/changelog/jamstack/) que eles disponibilizaram, porém eu teria que ter um servidor local ou um servidor pago (atualmente), ambos um pouco desnecessários. Logo descartei essa ideia após brincar um pouco com o painel local.

## Gatsby + Ghost 🚫

O meu segundo teste foi com o [Gatsby + Ghost](https://github.com/TryGhost/gatsby-source-ghost), mas confesso que achei o projeto inicial com algumas configurações estranhas e ainda iria me limitar na parte de open source, os arquivos de data gerados em json iriam dar um trabalho extra para conversão.

## Gatsby do zero ✔️

Finalmente decidi pela opção de construir o blog em Gatsby do zero, assim tenho um maior controle e entendimento por completo do projeto, apenas com o que preciso. Então este repositório é o inicio desta ideia.

O primeiro passo foi migrar os dados do Ghost para o Gatsby (json to md), utilizei o pacote [ghost-to-md](https://github.com/hswolff/ghost-to-md) que funcionou perfeitamente e terei que fazer apenas incrementos para ter arquivos mais completos.

Depois baixei um backup completo via ssh do site que está no Digital Ocean e guardei as imagens para poder tratá-las.

Já fiz o inicio do projeto e tenho uma funcionalidade básica do blog. Os próximos passos são:

- [x] Baixar backup completo do site atual
- [x] Converter posts em JSON para MD
- [x] Iniciar projeto Gatsby
- [x] Criar repositório
- [ ] Gerar páginas de posts
- [ ] Listar postagens com link próprio
- [ ] Criar componentes estilizados para cada elemento
- [ ] Atrelar imagens do backup aos posts
- [ ] Verificar paginação com lazy loading
- [ ] Checar itens de SEO
- [ ] Checar performance
- [ ] Deploy no Netlify
- [ ] Transferência de DNS


## 💫 Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/iaurg/segredo.dev)

### Posso melhorar em algo?
Se eu puder melhorar em algo ou você souber uma maneira melhor de fazer algum dos itens nesse repositório fique a vontade para [abrir uma issue](https://github.com/iaurg/segredo.dev/issues/new), ficarei grato.