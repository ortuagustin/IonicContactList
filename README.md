# Enfoques de Desarrollo de Aplicaciones Móviles Multiplataforma

## Trabajo Especial – Año 2018

Agenda de Contactos para Android

#### Alumno: Ortu, Agustín

#### Tecnología utilizada: [Ionic](https://ionicframework.com)

---

## Requerimientos funcionales

1. La App debe permitir agendar un nuevo contacto con los siguientes datos:
    * Nombre
    * No Teléfono (Hasta 2)
    * Correo electrónico (no requerido)
    * Tipo de contacto (elegir entre: familiar, amigo/a, comercial, otro)
2. La App debe permitir buscar un nuevo contacto por cualquiera de sus datos.
3. La App debe permitir modificar los datos de un contacto.
4. La App debe permitir dar de baja un contacto, previa confirmación.

## Requerimientos no funcionales

1. La App debe responder al movimiento de giro del teléfono y adaptar su interfaz a la posición vertical u horizontal de la pantalla.
2. La App debe permitir cambiar de modo claro a modo nocturno (y viceversa).

## Preparando el ambiente

### Requisitos previos

* [Node.js](https://nodejs.org/en)
* [npm](https://www.npmjs.com) *viene instalado con Node.js*
* [Cordova](https://cordova.apache.org)

```bash
    npm install -g cordova
```

* [Ionic](https://ionicframework.com)

```bash
    npm install -g ionic
```

* SDKs para desarrollo en plataformas moviles:
    * [Android](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
    * [iOS](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)

1. Clonar el repositorio:

```bash
    git clone https://github.com/ortuagustin/IonicContactList.git
```

2. Ejecutar npm para instalar las dependencias:

```bash
    cd IonicContactList
    npm install
```

3. Para ejecutar la aplicacion en el navegador, en el entorno de desarrollo:

```bash
    ionic serve
```

### Compilando para plataformas móviles

1. Agregar la plataforma deseada al proyecto:

```bash
    ionic cordova platform add android
    ionic cordova platform add ios
```

2. Compilación:

```bash
    ionic cordova build android
    ionic cordova build ios
```

3. Compilación + ejecución en un dispositivo conectado:

```bash
    ionic cordova run android
    ionic cordova run ios
```