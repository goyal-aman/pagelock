# Etapa 1: Build da aplicação
FROM node:20-alpine as builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto do código
COPY . .

# Faz o build da aplicação para produção
RUN npm run build

# Etapa 2: Servidor web (Nginx) para servir os arquivos estáticos
FROM nginx:alpine

# Copia os arquivos buildados da etapa anterior para a pasta padrão do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Configura o Nginx para roteamento do lado do cliente (React Router)
# Isso garante que ao atualizar uma página (F5) não resulte em um erro 404
RUN echo "server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files \$uri \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
