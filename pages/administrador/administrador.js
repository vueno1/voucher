
/*///////////////
VARIABLES
//////////////*/

let voucher;

/*///////
VOUCHER 
///////*/

class VoucherCreacion {

    constructor (proveedor, 
        direccion, 
        telefono, 
        reserva, 
        nombrePax, 
        cantidadPax, 
        checkin, 
        checkout, 
        descripcionVoucher1,
        descripcionVoucher2,
        descripcionVoucher3,
        descripcionVoucher4,
        descripcionVoucher5,
        descripcionVoucher6,
        vendedor) {
        
        this.proveedor = proveedor;
        this.direccion = direccion;
        this.telefono = telefono;
        this.reserva = reserva;        
        this.nombrePax = nombrePax;
        this.cantidadPax = cantidadPax;
        this.checkin = checkin;
        this.checkout = checkout;
        this.descripcionVoucher1 = descripcionVoucher1;
        this.descripcionVoucher2 = descripcionVoucher2;
        this.descripcionVoucher3 = descripcionVoucher3;
        this.descripcionVoucher4 = descripcionVoucher4;
        this.descripcionVoucher5 = descripcionVoucher5;
        this.descripcionVoucher6 = descripcionVoucher6;
        this.vendedor = vendedor
    }

}

if (localStorage.getItem ("voucher") == null) {
    voucher = []
} else {
    voucher = JSON.parse (localStorage.getItem ("voucher"))
}

/*////////////////////////
VOUCHER AGREGAR AL LOCALSTORAGE
///////////////////////////*/

const guardarInfoVoucher = () => {

    const infoVoucher = new VoucherCreacion ({

        proveedor:document.getElementById ("voucher_proveedor").value,
        direccion:document.getElementById ("voucher_direccion").value,
        telefono: document.getElementById ("voucher_telefono").value,
        reserva:document.getElementById ("voucher_reserva").value,
        nombrePax: document.getElementById ("voucher_nombre").value,
        cantidadPax: document.getElementById ("voucher_cantidad").value,
        checkin: document.getElementById ("voucher_in").value,
        checkout: document.getElementById ("voucher_out").value,
        descripcionVoucher1: document.getElementById ("voucher_descripcion1").value,
        descripcionVoucher2: document.getElementById ("voucher_descripcion2").value,
        descripcionVoucher3: document.getElementById ("voucher_descripcion3").value,
        descripcionVoucher4: document.getElementById ("voucher_descripcion4").value,
        descripcionVoucher5: document.getElementById ("voucher_descripcion5").value,
        descripcionVoucher6: document.getElementById ("voucher_descripcion6").value,
        vendedor: document.getElementById ("vendedorVoucher").value,

    })

    if (localStorage.getItem ("voucher") == null) {
        voucher.push (infoVoucher)
        localStorage.setItem ("voucher", JSON.stringify (voucher))

    } else {
        const nuevoVoucher = JSON.parse (localStorage.getItem ("voucher"))
        nuevoVoucher.push (infoVoucher)
        localStorage.setItem ("voucher", JSON.stringify (nuevoVoucher))
    }

}

document.getElementById ("btn_voucher").addEventListener ("click", (e) => {
    e.preventDefault ()
    guardarInfoVoucher ()
})

const borrarBaseDatosVoucher = () => {

  localStorage.removeItem ('voucher')
  console.log ("base de datos VOUCHER eliminado")
  document.location.reload()

}

document.getElementsByClassName ("borrarBaseDatos")[0].addEventListener ("click", (e) => {
    e.preventDefault ()
    borrarBaseDatosVoucher ()
})
