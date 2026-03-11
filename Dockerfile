#Usar imagen local de java 17
FROM node:20-slim

#Definir el directorio de trabajo
WORKDIR /app

#Copiar archivos de dependencias primero (para aprovechar el sistema de capas de Docker)
COPY package*.json ./

#Instalar dependencias
RUN npm install --production

#Copia del archivo .jar
COPY target/*.jar app.jar

#Declarar el puerto que va a utilizar el contenedor
EXPOSE 3000

# Definir el comando principal cuando el contenedor inicie con el proyecto compilado en .jar
ENTRYPOINT ["java", "-jar", "app.jar"]