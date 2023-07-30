//CONTROL DE STOCK

/*

Login
Stock actual
Cantidad pedida
Devolucion
Aviso de stock minimo y falta de stock

*/


let usuario = "rosi"
let contrasena = "4321"

const login = () =>{
    let ingresar = false
    for(let i = 0; i < 3; i++){
        let usuarioIngresado = prompt(`Ingresa tu usuario. vas ${i} de 3 intentos`).toLowerCase().trim()
        let contrasenaIngresada = prompt(`Ingresa tu contraseña. vas ${i} de 3 intentos`).toLowerCase().trim()

        if(usuario === usuarioIngresado && contrasena === contrasenaIngresada){
            alert(`Bienvenido/a ${usuario}`)
            ingresar = true 
            break
        }else{
            alert("Contraseña incorrecta")
        }
    }
        return ingresar
    }
            
if(login()){
    let stock = 10
    let qPedida
    

    let opciones = prompt(`Elegir una opcion(en numeros):\n
    1- Stock actual\n
    2- Cantidad pedida\n
    3- Devolucion\n
    4- Cancelar\n`).trim()

    while(opciones != "4"){
        switch(opciones){
            case "1":
                alert(`El stock actual es de ${stock} unidades`)
                break
                case "2":
                    qPedida = +(prompt("Ingresa la cantidad pedida")).trim()
                    if(isNaN(qPedida)){
                        alert("Ingrese un numero")
                    }else{
                        if(qPedida <= stock){
                            stock -= qPedida
                            alert(`Han pedido ${qPedida} unidades`)
                        }else{
                            alert(`No tenemos la cantidad solicitada. Stock actual ${stock}`)
                        }
                    }
                    break
                    case "3":
                        let devolucion = +(prompt("Ingresa unidades a devolver")).trim()
                        
                        if(isNaN(devolucion)){
                            alert("Debe ingresar nuemero")
                        }else{
                            if(devolucion <= qPedida){
                                stock += devolucion
                                alert(`Han devuelto ${devolucion} unidades`)
                            }else{
                                alert("El monto ingresado es incorrecto")
                            }
                        } 
                        break
                        

                        default:
                            alert("Opcion invalida")
                            break
        }
        if(stock === 1 || stock === 2){
            alert(`Stock minimo`)
        }else{
            if(stock === 0){
                alert("ALERTA: TE QUEDASTE SIN STOCK")
            
            }
        }

       
            
        opciones = prompt(`Elegir una opcion(en numeros):\n
    1- Stock actual\n
    2- Cantidad pedida\n
    3- Devolucion\n
    4- Cancelar\n`).trim()
    }
}else{
       alert("Bloqueamos su cuenta por seguridad")
    }