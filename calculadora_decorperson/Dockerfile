# Use a imagem oficial do Node como base
FROM node:latest

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos de configuração do projeto e instale as dependências
COPY package.json yarn.lock ./
RUN yarn install

# Copie o restante dos arquivos do projeto
COPY . .


# Exponha a porta em que a aplicação estará em execução
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["yarn", "dev"]
