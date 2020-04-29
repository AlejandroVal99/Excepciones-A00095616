let cuadrados = [];
let circulos = [];
let numeroFig = 1;
let pantalla = 0;
let fuente;
let espacio;
let imagen1;
let imagen2;
let messageExp;
let imagenExp;
let iamgenTam;
let circuloActive = false;
let messageTam = false;



function preload() {
    imagen1 = loadImage("/Elementos graficos/Frame1.png");
    imagen2 = loadImage("/Elementos graficos/Frame2.png");
    imagenExp = loadImage("/Elementos graficos/Frame 3.png");
    iamgenTam = loadImage("/Elementos graficos/Frame 4.png");
    fuente = loadFont("/Elementos graficos/Raleway-Bold.ttf");
}

function setup() {
    createCanvas(600, 600);
}

function draw() {


    switch (pantalla) {
        case 0:

            background(255);
            image(imagen1, 0, 0)
            textSize(160);
            textFont(fuente);
            fill(173, 0, 255);
            if (numeroFig == 10) {
                text(numeroFig, 215, 410);
            } else {

                text(numeroFig, 253, 410);
            }

            if (messageExp == true) {
                image(imagenExp, 0, 0);
            }
            break;

        case 1:
            background(255);
            ellipseMode(CORNER);
            pintarFiguras();
            image(imagen2, 0, 0);
            //numero de elementos
            textSize(28);
            textFont(fuente);
            fill(173, 0, 255);
            //text(numeroFig,285,305);

            if (numeroFig == 10) {
                text(numeroFig, 285, 305);
            } else {

                text(numeroFig, 290, 305);
            }
            if (messageExp == true) {
                image(imagenExp, 0, 0);
            }
            if (messageTam == true) {
                image(iamgenTam, 0, 0);
            }
            break;
    }

}

function mousePressed() {


    switch (pantalla) {
        case 0:
            messageExp = false;
            let botonMenos = (mouseX > 116 && mouseX < 149 && mouseY > 317 && mouseY < 363);

            if (botonMenos) {

                try {
                    if (numeroFig == 1) {
                        numeroFig = 1;
                        throw new numberException("Numero fuera de rango");
                    } else {
                        numeroFig--;
                    }
                } catch (error) {
                    messageExp = true;
                }
            }


            let botonMas = (mouseX > 442 && mouseX < 478 && mouseY > 317 && mouseY < 363);
            if (botonMas) {
                try {
                    if (numeroFig == 10) {
                        numeroFig = 10;
                        throw new numberException("Numero fuera de rango");
                    } else {
                        numeroFig++;
                    }
                } catch (error) {
                    messageExp = true;
                }
            }

            let botonCon = (mouseX > 237 && mouseX < 360 && mouseY > 511 && mouseY < 538);
            if (botonCon) {
                pantalla++;

                for (let i = 0; i < numeroFig; i++) {
                    cuadrados[i] = new Squad();
                }
            }

            break;

        case 1:
            messageExp = false;
            messageTam = false;

            let botonBig = (mouseX > 29 && mouseX < 104 && mouseY > 281 && mouseY < 315);
            if (botonBig) {

                duplicarTam();
                //console.log("Duplico Elemento");

            }

            let botonAdd = (mouseX > 157 && mouseX < 232 && mouseY > 281 && mouseY < 315);
            if (botonAdd) {
                addElemento();
                //console.log("Añado Elemento");
            }
            let botonLess = (mouseX > 365 && mouseX < 441 && mouseY > 281 && mouseY < 315);
            if (botonLess) {
                lessElemento();

                //console.log("Quito Elemento");
            }

            let botonBalls = (mouseX > 491 && mouseX < 568 && mouseY > 281 && mouseY < 315);
            if (botonBalls) {

                crearCirculos();
                //console.log("Circulos Elementos");
            }
            break;
    }
}


function addElemento() {

    //numeroFig++;
    try {

        if (numeroFig == 10) {
            numeroFig = 10;
            throw new numberException("Numero fuera de rango");
        } else {
            numeroFig++;
            cuadrados.push(new Squad());

            if (circuloActive == true) {
                circulos.push(new Ball());
            }
        }
    } catch (error) {
        messageExp = true;
    }

}
function lessElemento() {
    //numeroFig--;
    try {
        if (numeroFig == 1) {
            numeroFig = 1;
            throw new numberException("Numero fuera de rango");
        } else {
            numeroFig--;
            cuadrados.pop();

            if (circuloActive == true) {
                circulos.pop();
            }
        }
    } catch (error) {
        messageExp = true;
    }

}
function crearCirculos() {

    if (circuloActive == false) {

        circulos = cuadrados.map(element => {
            return element = new Ball();
        })

        circuloActive = true;

    }

}
function duplicarTam() {
    try {
        if (cuadrados[cuadrados.length - 1].tam == 40 && circulos[circulos.length - 1].tam == 40) {
            throw new tamException("Ya tienes el tamaño maximo");
        } else {
            cuadrados.forEach(element => {
                element.setTam();
                //console.log(element.tam);
            })
            circulos.forEach(element => {
                element.setTam();
                //console.log(element.tam);
            })
        }
    } catch (error) {
        messageTam = true;
    }
}
function pintarFiguras() {

    for (let j = 0; j < cuadrados.length; j++) {
        cuadrados[j].draw((j * 58) + 20);
        cuadrados[j].movimiento();
    }
    for (let k = 0; k < circulos.length; k++) {
        circulos[k].draw((k * 58) + 20);
        circulos[k].movimiento();
    }

}