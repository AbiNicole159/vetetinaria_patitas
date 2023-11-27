function obtenerListaUsuarios (){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarioLs'));

    if (listaUsuarios == null){
        listaUsuarios =
        [
            ['1','Abi','Apaza','bglchq@gmail.com','1Abi9','2003-10-19','1'],
            ['2','Dani','VillaLobos','choquedaniela77@gmail.com','1Dani9','2002-07-05','2']
        ]
    }
    return listaUsuarios;
}

function validarCredenciales(pCorreo , pContrasena){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for (var i=0; i < listaUsuarios.length; i++){
        if (pCorreo == listaUsuarios[i][3]&&pContrasena == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
        }
    }
    return bAcceso;
}
