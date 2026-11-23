export let weekDay: number = 5; // 1 = Lunes, 2 = Martes, 3 = Miércoles

if ( weekDay <= 0 ) {
    // console.log('El día de la semana no permitido');
    throw new Error('El día de la semana no permitido');
}

switch ( weekDay ) {

    // weekDay ===1
    case 1:
        console.log('Lunes');
        break;

    //weekDay ===2
    case 2: 
        console.log('Martes');
        break;

    //weekDay ===3
    case 3:
        console.log('Miércoles');
        break;

    default:
        console.log('No es lunes, martes o miércoles');
}