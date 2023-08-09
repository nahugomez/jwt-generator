## JWT Generator 💻

API realizada con Node.js y Express, para facilitarle la obtención del JSON Web Token al desarrollador, que le permita autenticarse en Hasura. Además, brinda una abstracción evitando que se comunique directamente con Keycloak para la obtención del token.

Es necesario que se realice una solicitud `POST` a `https://{...}/jwt/generate`, incluyendo en el _body_ de la petición un JSON como el que se muestra a continuación

    {
        "user": "user_example",
        "password": "user_password",
        "client": "client_id"
    }

Especificando el usuario, contraseña, y _client_ al que pertenece el usuario, donde debe tener un _client-role_ asignado.

**Para correr la aplicación en modo desarrollador, ejecutar el siguiente comando**

    $ npm run dev

Con esto, vamos a levantar una [instancia local de la API](http://localhost:1717/), que se encuentra en el puerto 1717.

La aplicación está configurada para ser utilizada con PM2, un administrador de procesos especializado en aplicaciones Node.js. Es posible levantar una instancia de la API ejecutando los siguientes comandos

    $ npm run build

Con este comando, vamos a compilar los archivos `.ts` en archivos `.js` dentro de la carpeta `build`
Luego, una vez compilados y preparados los archivos, ejecutamos

    $ npm run start

Con esto, vamos a levantar una instancia de la API gestionada utilizando PM2

[**IMPORTANTE**: Es necesario contar con el archivo .env, donde se definen variables importantes para la lógica de la API.](https://app.slack.com/client/T05JVJBC0JJ/D05JMSM8WSK)
