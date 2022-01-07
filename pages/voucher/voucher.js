let informacionVoucher;

if (localStorage.getItem ("voucher") == null ) {
    informacionVoucher = []
} else {
    informacionVoucher = JSON.parse (localStorage.getItem ("voucher"))
}

informacionVoucher.forEach (e => {

    const divVoucher = document.createElement ("div")
    divVoucher.setAttribute ("class", "divVoucher")

        document.getElementsByClassName ("vendedorNombre")[0].append (`${e.proveedor.vendedor}`)

        document.getElementsByClassName ("reserva")[0].append (`${e.proveedor.reserva}`)

        document.getElementsByClassName ("nombreProveedor")[0].append(`${e.proveedor.proveedor}`)
        document.getElementsByClassName ("direccionProveedor")[0].append (`${e.proveedor.direccion}`)
        document.getElementsByClassName ("telefonoProveedor")[0].append (`${e.proveedor.telefono}`)      

        document.getElementsByClassName ("nombrePax")[0].append (`${e.proveedor.nombrePax}`)
        document.getElementsByClassName ("cantidadPax")[0].append (`${e.proveedor.cantidadPax}`)

        document.getElementsByClassName ("checkin")[0].append (`${e.proveedor.checkin}`)
        document.getElementsByClassName ("checkout")[0].append (`${e.proveedor.checkout}`)

        document.getElementsByClassName ("descripcion1")[0].append (`${e.proveedor.descripcionVoucher1}`)
        document.getElementsByClassName ("descripcion2")[0].append (`${e.proveedor.descripcionVoucher2}`)
        document.getElementsByClassName ("descripcion3")[0].append (`${e.proveedor.descripcionVoucher3}`)
        document.getElementsByClassName ("descripcion4")[0].append (`${e.proveedor.descripcionVoucher4}`)
        document.getElementsByClassName ("descripcion5")[0].append (`${e.proveedor.descripcionVoucher5}`)
        document.getElementsByClassName ("descripcion6")[0].append (`${e.proveedor.descripcionVoucher6}`)


        
    document.getElementsByClassName ("voucherDiv")[0].appendChild (divVoucher)
})