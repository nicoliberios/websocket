# Usar una imagen base oficial de Node.js
FROM node:16

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto que la aplicación usa (3000 en tu caso)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

