"user strict"

const body = document.querySelector("body");



const header =document.querySelector("header");
const h1= document.createElement ('h1')
const texth1= document.createTextNode (" ¡Hola! Bienvendio a su Registro")
h1.appendChild (texth1)
header.appendChild (h1)


const main = document.querySelector("main");

const form = document.createElement('form');

const textform = document.createTextNode("");

form.appendChild(textform)

main.appendChild(form)

const labelname = document.createElement('label');
const textlabelname = document.createTextNode("Nombres");
labelname.appendChild(textlabelname)
form.appendChild(labelname)

const br = document.createElement('br');
form.append(br)

const inputname = document.createElement('input');
inputname.setAttribute("type", "text")
inputname.setAttribute("placeholder", " Ingrese su  Nombre")
const textinputname = document.createTextNode("name");
inputname.appendChild(textinputname)
form.appendChild(inputname)

const br1 = document.createElement('br');
form.append(br1)
const br2 = document.createElement('br');
form.append(br2)


const labelapellido = document.createElement('label');
const textlabelapellido = document.createTextNode("Apellidos");
labelapellido .appendChild(textlabelapellido)
form.appendChild(labelapellido)


const br3 = document.createElement('br');
form.append(br3)


const inputapellido = document.createElement('input');
inputapellido.setAttribute("type", "text")
inputapellido.setAttribute("placeholder", " Ingrese su  Apellido")
const textinputapellido = document.createTextNode("name");
inputapellido.appendChild(textinputapellido)
form.appendChild(inputapellido)

const br4 = document.createElement('br');
form.append(br4)
const br5 = document.createElement('br');
form.append(br5)

const labelidentificacion = document.createElement('label');
const textlabelidentificacion = document.createTextNode("Numero de Identificacion");
labelidentificacion .appendChild(textlabelidentificacion)
form.appendChild(labelidentificacion)

const br6 = document.createElement('br');
form.append(br6)

const inputiden = document.createElement('input');
inputiden.setAttribute("type", "text")
inputiden.setAttribute("placeholder", " Ingrese su  Identificacion")
const textinputiden = document.createTextNode("name");
inputiden.appendChild(textinputiden)
form.appendChild(inputiden)

const br7= document.createElement('br');
form.append(br7)
const br8 = document.createElement('br');
form.append(br8)

const labelcorreo = document.createElement('label');
const textlabelcorreo = document.createTextNode("Correo");
labelcorreo .appendChild(textlabelcorreo)
form.appendChild(labelcorreo)

const br9 = document.createElement('br');
form.append(br9)


const inputcorreo = document.createElement('input');
inputcorreo.setAttribute("type", "text")
inputcorreo.setAttribute("placeholder", " Ingrese su Correo")
const textinputcorreo = document.createTextNode("name");
inputcorreo.appendChild(textinputcorreo)
form.appendChild(inputcorreo)

const br10= document.createElement('br');
form.append(br10)
const br11= document.createElement('br');
form.append(br11)

const labelcontraseña = document.createElement('label');
const textlabelcontraseña = document.createTextNode("Contraseña");
labelcontraseña.appendChild(textlabelcontraseña)
form.appendChild(labelcontraseña)

const br12 = document.createElement('br');
form.append(br12)

const inputcontraseña = document.createElement('input');
inputcontraseña.setAttribute("type", "password")
inputcontraseña.setAttribute("placeholder", "Inserte su contraseña")
const textinputcontraseña = document.createTextNode("password");
inputcontraseña.appendChild(textinputcontraseña)
form.appendChild(inputcontraseña)

const br13= document.createElement('br');
form.append(br13)
const br14= document.createElement('br');
form.append(br14)

const labelconfirmar = document.createElement('label');
const textlabelconfirmar= document.createTextNode("Confirmar Contraseña");
labelconfirmar.appendChild(textlabelconfirmar)
form.appendChild(labelconfirmar)


const br15= document.createElement('br');
form.append(br15)

const inputconfirmar = document.createElement('input');
inputconfirmar.setAttribute("type", "password")
inputconfirmar.setAttribute("placeholder", "Inserte su Contraseña")
const textinputconfirmar = document.createTextNode("password");
inputcontraseña.appendChild(textinputconfirmar)
form.appendChild(inputconfirmar)

const br16= document.createElement('br');
form.append(br16)
const br17= document.createElement('br');
form.append(br17)


const inputcondiciones = document.createElement('input');
inputcondiciones.setAttribute("type", "checkbox")
const textinputcondiciones = document.createTextNode("name");
inputcondiciones.appendChild(textinputcondiciones)
form.appendChild(inputcondiciones)

const labelcondciones = document.createElement('label');

const textlabelcondciones = document.createTextNode("He leido y Acepto los Terminos y Condiciones");

labelcondciones.appendChild(textlabelcondciones)

form.appendChild(labelcondciones)

const br18= document.createElement('br');
form.append(br18)

const br19= document.createElement('br');
form.append(br19)


const inputboton = document.createElement('input');
inputboton.setAttribute("type", "button")
inputboton.setAttribute("value", "REGISTRASE");
inputboton.setAttribute("id", "buttoninit")
form.appendChild(inputboton)





body.style.backgroundColor = 'blueviolet';

h1.style.fontSize = '4vw';


labelname.style.fontSize = '2vw';
labelname.style.webkitTextStroke = '.3px white';
labelname.style.fontWeight = 'bold';

labelapellido.style.fontSize = '2vw';
labelapellido.style.webkitTextStroke = '.3px white';
labelapellido.style.fontWeight = 'bold';

labelidentificacion.style.fontSize = '2vw';
labelidentificacion.style.webkitTextStroke = '.3px white';
labelidentificacion.style.fontWeight = 'bold';

labelcorreo. style.fontSize = '2vw';
labelcorreo.style.webkitTextStroke = '.3px white';
labelcorreo.style.fontWeight = 'bold';



labelcontraseña. style.fontSize = '2vw';
labelcontraseña.style.webkitTextStroke = '.3px white';
labelcontraseña.style.fontWeight = 'bold';



labelconfirmar. style.fontSize = '2vw';
labelconfirmar.style.webkitTextStroke = '.3px white';
labelconfirmar.style.fontWeight = 'bold';




inputboton.style.webkitTextStroke = '.3px white';