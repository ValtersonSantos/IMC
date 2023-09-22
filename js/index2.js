

function calcularIMC(){
    let form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado')

    let pessoas = [];

    function recebeEventoForm(evento){
      evento.preventDefault();

    let nome = form.querySelector('.nome')
    let sobrenome = form.querySelector('.sobrenome');
    let peso = form.querySelector('.peso');
    let altura = form.querySelector('.altura');

    let inputPeso = Number(peso.value)
    let inputAltura = Number(altura.value)

    let imc = getIMC(inputPeso,inputAltura);
    let nivel = getNivel(imc);    
    //acrescentar os objetos ao array
    pessoas.push({
      nome:nome.value,
      sobrenome:sobrenome.value,
      peso:inputPeso,
      altura:inputAltura,
      imc:imc,
      nivel:nivel
    });
    //mostrar o array
    console.log(pessoas)
    //mostrar a mensagem final na div de resultado
    resultado.innerHTML = '<p>'+nome.value+" "+sobrenome.value+'<br>'+"Seu Imc: "+imc+'<br>'+ "Seu Peso:"+nivel+'</p>';
    
  }
form.addEventListener('submit', recebeEventoForm);  
};
function getIMC(peso,altura){
    let imc = peso / (altura**2);
    return imc.toFixed(2);
}
function getNivel(imc){
    let nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0]; 
}
calcularIMC();