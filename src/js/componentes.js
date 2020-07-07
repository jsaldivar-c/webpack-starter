import '../css/componentes.css';

export const saludar = (nombre) => {

    console.log('Creando H1');
    
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}, bienvenido a Webpack.`;
    document.body.append(h1);
}