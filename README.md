# Api-Rest Cine distrito

## Seminario de ingeniria de software

Api para la gestion de boleteria, snacks y asignación de empleados de la empresa ficticia CineDistrito.

## Integrantes

* Juan Camilo Guaba
* Cristian Patiño
* Paula Avendaño
* Neider Puentes
* Jose Gonzalez

### Dependencias

```javascript
    "bcryptjs": "^2.4.3",
    "connect-flash": "^0.1.1",
    "cookie-parser": "^1.4.4",
    "express": "^4.17.1",
    "express-session": "^1.17.0",
    "jsonwebtoken": "^8.5.1",
    "morgan": "^1.9.1",
    "pg": "^7.12.1",
    "quick-encrypt": "^1.0.8",
    "sequelize": "^5.21.1"
```

---

## Seguridad

Se implementa jsonwebtoken para las rutas privadas que se descirben más adelante. El TOKEN se genera al hacer una petición POST <b>/login</b> que contenga en su <b>req.BODY</b> lo siguiente:

```javascript
{
    "pk_cedula":INTEGER,
    "pass":STRING(128)
}
```

Tras esta petición sí es exitosa la respuesta contendra en <b>res.HEADER</b> el siguiente campo :

```javascript
'auth-token':TOKEN
```

Este token debe ser enviado en el request <b>HEADER</b> con el mismo nombre para permitir el acceso a las rutas privadas.

## Peticiones

### Cliente

#### GET

<b>/Cliente/:fk_persona</b> : Obtendra los datos de un solo cliente.
Ejemplo de respuesta:

```javascript
 {
    "data": {
        "fk_persona": 1234,
        "i_numpuntos": 0,
        "i_numtarjeta": "0",
        "d_fechapuntos": ""
    }
}
```

#### POST

<b>/cliente/crear</b> : Registra un nuevo cliente en la base de datos, la estructura de la petición debe ser :

```javascript
{ 
    k_numero_identificacion: (INTEGER),
    v_primernombre: (STRING),
    v_segundonombre: (STRING),
    v_primerapellido: (STRING),
    v_segundoapellido: (STRING),
    i_telefono: (INTEGER),
    v_direccion: (STRING),
    pass: (STRING),
    i_numpuntos: (INTEGER),
    i_numtarjeta: (STRING),
    d_fechapuntos: (STRING)
}
```
si hay algun problema enviará un mensaje de error así:

```javascript
    'Something goes wrong in getOneCliente'
```

### Contratos

#### GET

<b>/contratos</b> : Obtendra todos los contratos registrados en la base de datos.
Ejemplo de respuesta:

```javascript

    "data": [
        {
            "id": 20,
            "v_tipocontrato": "prestación de servicios",
            "d_iniciocontrato": "2019-10-24",
            "i_salario": 3000000
        },
        {
            "id": 21,
            "v_tipocontrato": "indefinido",
            "d_iniciocontrato": "2019-10-24",
            "i_salario": 4100000
        },
        {
            "id": 22,
            "v_tipocontrato": "gay",
            "d_iniciocontrato": "2019-12-15",
            "i_salario": 11111111
        }
    ]

```

<b>/constratos/:id</b> : Obtendra los datos de un solo empleado.
Ejemplo de respuesta:

```javascript
    "data": {
        "id": 21,
        "v_tipocontrato": "indefinido",
        "d_iniciocontrato": "2019-10-24",
        "i_salario": 4100000
    }
```

#### POST

<b>/empleados/crear</b> : Registra un nuevo empleado en la base de datos, la estructura de la petición debe ser :

```javascript
{ 
    id: (INTEGER),
    v_tipocontrato: (STRING),
    d_iniciocontrato: (DATE),
    i_salario: (INTEGER)
}
```

Si todo sale bien enviará un mensaje como este:

```javascript
    'Contrato created successfully'
```

Si algo sale mal enviará un mensaje como este:

```javascript
    'Something goes wrong in crear_contrato'
```

### Empleados

#### GET

<b>/empleados</b> : Obtendra todos los empleados registrados en la base de datos.
Ejemplo de respuesta:

```javascript
"data": [
        {
            "fk_persona": 212341233,
            "n_descuento": "10.00",
            "fk_numcontrato": 20
        },
        {
            "fk_persona": 34342351,
            "n_descuento": "34.00",
            "fk_numcontrato": 21
        },
        {
            "fk_persona": 34342352,
            "n_descuento": "34.00",
            "fk_numcontrato": 21
        }
    ]
```

<b>/empleados/:fk_persona</b> : Obtendra los datos de un solo empleado.
Ejemplo de respuesta:
Ejemplo de respuesta:

```javascript
 "data": {
        "fk_persona": 212341233,
        "n_descuento": "10.00",
        "fk_numcontrato": 20
    }
```

#### POST

<b>/empleados/crear</b> : Registra un nuevo empleado en la base de datos, la estructura de la petición debe ser :

```javascript
{ 
    pk_cedula: '34342312',
    v_primernombre: 'ffff',
    v_segundonombre: 'ssss',
    v_primerapellido: 'asafa',
    v_segundoapellido: 'aasdasd',
    i_telefono: '534545',
    v_direccion: 'sdvdvv',
    pass: 'holA',
    n_descuento: '34',
    fk_numcontrato: '21'
}
```

### EmpleMulti
### Funcion_sala
### Funciones
### Index
### Login
### Pagos
### Peliculas

### Personas

#### GET

<b>/personas</b> : Obtendra todos los usuarios registrados en la base de datos

### Reserva
### Salas
### Snacks