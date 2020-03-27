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

<b>/contratos/:id</b> : Obtendra los datos de un solo empleado.
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

<b>/contratos/crear</b> : Registra un nuevo empleado en la base de datos, la estructura de la petición debe ser :

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

#### GET

<b>/empleadosMulti</b> : Obtendrá todos los empleados registrados por multiplex.
Ejemplo de respuesta:

```javascript
 "data": {
        "id": 212341233,
        "fk_empleado": 10,
        "fk_multiplex": 20,
        "f_transferencia": '2020-1-12',
    }
```
#### POST

<b>/empleadosMulti/asignar</b> : asignará un empleado a cierto multiplex, la estructura de la petición debe ser :

```javascript
    {
        id: (INTEGER),
        fk_persona: (INTEGER),
        fk_multiplex: (INTEGER),
        f_transferencia: (DATE)
    }
```

### Funcion_sala

#### GET

<b>/funcion_sala</b> : Obtendrá todas las funciones por sala registrados en multiplex.
Ejemplo de respuesta:

```javascript
    "data": [
        {
            "id": 2,
            "fk_funcion": 1,
            "fk_sala": 2
        },
        {
            "id": 3,
            "fk_funcion": 50,
            "fk_sala": 3
        },
        {
            "id": 4,
            "fk_funcion": 50,
            "fk_sala": 14
        },
        {
            "id": 5,
            "fk_funcion": 50,
            "fk_sala": 23
        },
        {
            "id": 6,
            "fk_funcion": 50,
            "fk_sala": 36
        },
        {
            "id": 7,
            "fk_funcion": 50,
            "fk_sala": 44
        },
        {
            "id": 8,
            "fk_funcion": 52,
            "fk_sala": 43
        }
    ]
```
<b>/funcion_sala/:id</b> : Obtendrá una de las funciones por sala registrados en multiplex.
Ejemplo de respuesta:

```javascript
"data": {
        "id": 33,
        "fk_funcion": 73,
        "fk_sala": 49
    }
```
#### POST

<b>/funcion_sala/crear</b> : asignará una sala cierta funcion. La estructura de la petición debe ser :

```javascript
    {
        id: (INTEGER),
        fk_funcion: (INTEGER),
        fk_sala: (INTEGER)
    }
```
Si todo está correcto aparacerá un mensaje como este:

```javascript
    'creada successfully'
```
Si algo sale mal aparecerá un mensaje como este:

```javascript
    'Something goes wrong crear_funcion'
```

### Funciones

#### GET

<b>/funciones</b> : Obtendrá todas las funciones por sala registrados en multiplex.
Ejemplo de respuesta:

```javascript
    "data": [
        {
            "id": 50,
            "v_estado": "activa",
            "d_proyeccion": "2020-04-01",
            "fk_pelicula": 4,
            "t_inicioproyeccion": "14:00:00",
            "t_finproyeccion": "17:02:00"
        },
        {
            "id": 65,
            "v_estado": "activa",
            "d_proyeccion": "2020-04-02",
            "fk_pelicula": 4,
            "t_inicioproyeccion": "14:00:00",
            "t_finproyeccion": "17:02:00"
        },
        {
            "id": 52,
            "v_estado": "activa",
            "d_proyeccion": "2020-04-01",
            "fk_pelicula": 4,
            "t_inicioproyeccion": "16:00:00",
            "t_finproyeccion": "19:02:00"
        },
        {
            "id": 15,
            "v_estado": "activa",
            "d_proyeccion": "2020-05-01",
            "fk_pelicula": 10,
            "t_inicioproyeccion": "16:00:00",
            "t_finproyeccion": "19:10:00"
        },
        {
            "id": 16,
            "v_estado": "activa",
            "d_proyeccion": "2020-04-16",
            "fk_pelicula": 11,
            "t_inicioproyeccion": "15:00:00",
            "t_finproyeccion": "17:27:00"
        },
        {
            "id": 17,
            "v_estado": "activa",
            "d_proyeccion": "2020-04-17",
            "fk_pelicula": 11,
            "t_inicioproyeccion": "17:00:00",
            "t_finproyeccion": "19:27:00"
        },
        {
            "id": 19,
            "v_estado": "activa",
            "d_proyeccion": "2020-03-20",
            "fk_pelicula": 12,
            "t_inicioproyeccion": "15:00:00",
            "t_finproyeccion": "16:30:00"
        },
        {
            "id": 68,
            "v_estado": "activa",
            "d_proyeccion": "2020-04-02",
            "fk_pelicula": 4,
            "t_inicioproyeccion": "16:00:00",
            "t_finproyeccion": "19:02:00"
        },
        {
            "id": 69,
            "v_estado": "activa",
            "d_proyeccion": "2020-04-03",
            "fk_pelicula": 4,
            "t_inicioproyeccion": "14:00:00",
            "t_finproyeccion": "17:02:00"
        }
    ]
```
<b>/funciones/:id</b> : Obtendrá una de las funciones registradas en multiplex.
Ejemplo de respuesta:

```javascript
    "data": {
        "id": 43,
        "v_estado": "activa",
        "d_proyeccion": "2020-05-01",
        "fk_pelicula": 24,
        "t_inicioproyeccion": "15:00:00",
        "t_finproyeccion": "16:40:00"
    }
```
<b>/funciones/:get_funcion_pelicula</b> : Obtendrá las funciones de la misma película.

```javascript
    "data": {
        "id": 43,
        "v_estado": "activa",
        "d_proyeccion": "2020-05-01",
        "fk_pelicula": 24,
        "t_inicioproyeccion": "15:00:00",
        "t_finproyeccion": "16:40:00"
    }
```

#### POST

<b>/funciones/crear</b> : Este metodo creará una nueva función, la estructura de la petición debe ser :

```javascript
    {
        id: (INTEGER),
        v_estado: (STRING),
        d_proyeccion: (DATE),
        fk_pelicula: (INTEGER),
        t_inicioproyeccion: (TIME),
        t_finproyeccion: (TIME)
    }
```
El atributo v_estado tiene valores predeterminados para que todo funcione correctamente:

```javascript
     values:['activa','Activa','inactiva','Inactiva']
```

### Peliculas

#### GET

<b>/peliculas</b> : Obtendrá todas las peliculas guardadas en la base de datos.
Ejemplo de respuesta:

```javascript
    "data": [
        {
            "id": 4,
            "v_nombre": "Avengers: EndGame",
            "i_duracion": 182,
            "tx_sinapsis": "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.",
            "v_foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYwAAAJxCAYAAABR3YUQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lSURBVHhe1P11lF1Zn"

        }
    ]
```
#### POST

<b>/peliculas/crear</b> : Este metodo creará una nueva pelicula, la estructura de la petición debe ser :

```javascript
    {
        id: (INTEGER),
        v_nombre: (STRING),
        i_duracion: (INTEGER),
        v_foto: (TEXT),
        v_genero: (STRING),
        v_clasificacion: (STRING)
        v_reparto: (STRING)
        v_director: (STRING)
        d_fecha_estreno: (DATE)
        v_pais_origen: (STRING)
    }
```
Si el registro es exitoso aparecerá un mensaje como este:
```javascript
    'Pelicula creada successfully'
```

Si hay algún problema en el registro aparecerá un mensaje así:
```javascript
    'Something goes wrong crear_funcion'
```

### Personas

#### GET

<b>/personas</b> : Obtendrá todos los usuarios registrados en la base de datos.
Ejemplo de respuesta:

```javascript
    "data": [
        {
            "pk_numero_identificacion": 1234,
            "v_primernombre": "Juan",
            "v_segundonombre": "Andres",
            "v_primerapellido": "Carne",
            "v_segundoapellido": "Res",
            "i_telefono": 45345346,
            "v_direccion": "KNLFNBL.DFNB",
            "v_pass": "$2a$10$ybbWChTvP3uMbXInKZIch.JrCTGqvPBorenM3alqE7FWPMELC1CKy",
            "fk_tipo_documento": 1,
            "v_correo_electronico": "wava0324",
            "v_foto": "foto.png"
        },
        {
            "pk_numero_identificacion": 1019121,
            "v_primernombre": "cristian",
            "v_segundonombre": "felipe",
            "v_primerapellido": "Patiño",
            "v_segundoapellido": "Caceres",
            "i_telefono": 31946199,
            "v_direccion": "cll 131 B # 129 - 52",
            "v_pass": "$2a$10$80N30gxP6SCEU3KhVaGlr.wab4QRt50VKu/betkXNdZKMdZVLnNB.",
            "fk_tipo_documento": 1,
            "v_correo_electronico": "cfpatinoc@correo.udistrital.edu.co",
            "v_foto": "data:image/jpeg;base64,/9j/"
        }
    ]
```

<b>/personas/:pk_numero_identificacion</b> : Obtendrá uno de los usuarios registrados en la base de datos.
Ejemplo de respuesta:

```javascript
    "data": {
        "pk_numero_identificacion": 1234,
        "v_primernombre": "Juan",
        "v_segundonombre": "Andres",
        "v_primerapellido": "Carne",
        "v_segundoapellido": "Res",
        "i_telefono": 45345346,
        "v_direccion": "KNLFNBL.DFNB",
        "v_pass": "$2a$10$ybbWChTvP3uMbXInKZIch.JrCTGqvPBorenM3alqE7FWPMELC1CKy",
        "fk_tipo_documento": 1,
        "v_correo_electronico": "wava0324",
        "v_foto": "foto.png"
    }
```