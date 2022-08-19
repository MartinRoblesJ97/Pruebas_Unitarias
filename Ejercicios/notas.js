//Ejemplo; promedio
function promedio (calificacion1, calificacion2, calificacion3){
    calificacionFinal = (calificacion1 + calificacion2 + calificacion3)/3;
    if (calificacionFinal => 6){
        console.log("Felicidades, aprobaste :)");
    } else (console.log("Necesitas estudiar más, no aprobaste"));
}

promedio(10,7,10);
