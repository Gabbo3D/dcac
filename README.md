# Sistema de Gestión de Productos

Este sistema consta de un backend (API REST) y un frontend (cliente web) para la gestión de productos.

## Uso

Para utilizar este sistema, sigue las instrucciones de configuración y ejecución detalladas a continuación.

## Estructura del Proyecto

El proyecto se organiza en dos partes principales:

- `dcac-api`: Contiene el código para el backend (API REST) desarrollado en PHP y MySQL.
- `dcac-app`: Contiene el código para el frontend (cliente web) desarrollado en HTML y JavaScript.

## Funcionalidades

El sistema proporciona las siguientes funcionalidades:

- Crear, Leer y Actualizar productos.
- Interfaz de usuario intuitiva para la gestión de productos.

## Dependencias

### Necesarias en Arch Linux (Donde fue testeado y desarrollado)
Asegúrate de tener las siguientes dependencias instaladas en tu sistema Arch Linux antes de ejecutar el sistema:
sudo pacman -S php
sudo pacman -S xdg-utils

### Necesarias en Windows
Asegúrate de tener las siguientes dependencias instaladas en tu sistema Windows antes de ejecutar el sistema:
PHP - Si aún no tienes PHP instalado, puedes descargar e instalar la última versión de PHP desde el sitio web oficial de PHP:

[Descargar PHP](https://www.php.net/downloads)

Sigue las instrucciones de instalación proporcionadas en el sitio web de PHP para completar la instalación.

## Configuración

1. Clona este repositorio.
2. Configura tu servidor web para apuntar al directorio `dcac-api`.
3. Configura tu servidor MySQL y actualiza las credenciales de conexión en `config.php`.
4. Configura el valor del dolar en `config.php` modificando la variable `USD_EXCHANGE_RATE`.
5. Importa la base de datos utilizando el archivo `DB-script.sql`.

# Backend (API REST)

Este es el backend de la aplicación que proporciona una API REST para manejar productos.

## Tecnologías utilizadas
- PHP 8.3.4
- MySQL 11.3.2-MariaDB

## Ejecución

Puedes ejecutar el backend utilizando un servidor web local como Apache o Nginx. También puedes usar el servidor web incorporado de PHP ejecutando el siguiente comando en el directorio `dcac-api`:

`php -S localhost:8000`

# Frontend (Cliente web)

Este es el frontend de la aplicación que interactúa con el backend para mostrar y manipular productos.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript

## Ejecución

Puedes abrir el cliente web en tu navegador accediendo al archivo `index.html`. Asegúrate de que el backend esté en funcionamiento antes de abrir el cliente web.

`xdg-open index.html`


