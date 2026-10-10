# Ejecutar NestJS con Deno

Para iniciar la aplicación en modo watch con Deno, ejecuta desde la raíz del proyecto:

```sh
deno task start:dev
```

La tarea está definida en `deno.json` y ejecuta:

```sh
deno run --allow-all --unsafe-proto npm:@nestjs/cli@^6.9.0 start --watch
```

Opciones y argumentos:

- `deno run` ejecuta el comando usando Deno.
- `--allow-all` habilita los permisos que necesita la CLI de Nest para acceder al entorno, al sistema de archivos y a otros recursos durante el inicio y la compilación.
- `--unsafe-proto` habilita la compatibilidad con `Object.prototype.__proto__`, que usa la versión de Chalk incluida por Nest CLI. Sin esta opción, la CLI falla al inicializar sus estilos de terminal.
- `npm:@nestjs/cli@^6.9.0` carga Nest CLI desde npm; la versión concreta se resuelve según el lockfile de Deno.
- `start --watch` inicia la aplicación y recompila cuando detecta cambios.

El uso de `--allow-all` concede permisos amplios al proceso. Úsalo solo con este comando de desarrollo y con dependencias en las que confíes.
