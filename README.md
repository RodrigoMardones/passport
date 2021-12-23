## PASSPORT APP

proyecto sencillo ocupando Domain Driven Design como passport, puedes crear usuario, retornarlos y autenticarlos dentro de esta api. Sirve como ejemplo para entender bien la inyección de dependencias y la necesidad de separar la logica de negocio del resto de infraestructura y servicios asociados.

### RUN THIS PROYECY

para correr este proyecto es necesario tener las siguientes dependencias globales

- node >= v16.13.1
- npm >= v8.1.2
- typescript >= v4.5.4

El resto de dependencias se encuentran dentro del package.json, ahora puedes dockerizar el proyecto con _docker-compose_ utilizando el el archivo de docker-compose.yml dentro del proyecto y agregando un archivo _.env_ con las variables de entorno necesarias.

#### scripts

```json
{
  "scripts": {
    // imprime la configuracion de ts
    "ts-conf": "ts-node --show-config",
    // transpilacion
    "build": "tsc -p .",
    // permite correr el proyecto ya con variables de entorno previamente cargadas
    "start": "npm run build && node dist/index",
    // permite correr desde local una vez compilado
    "start:compiled": "npm run build && node -r dotenv/config dist/index",
    // permite correr proyecto desde local solo typescript
    "start:dev": "nodemon -r dotenv/config src/index.ts",
    //permite dockerizar y levantar servicios con las variables de entorno
    "docker:compose": "docker-compose -f 'docker-compose.yml' up -d --build",
    // no implementado aún
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```
