import Box from "../Box";
import { Input, Butt } from "../Box/style";



export default function QuestionNine() {

    
    function fizubu() {
        var numero = document.querySelector('#anynine').value;

        if (numero % 5 === 0 && numero % 3 ===0) {
            document.querySelector("#textnine").innerText = `fizzBuzz`;
        } else if (numero % 5 ===0) {
            document.querySelector("#textnine").innerText = `Buzz`;
        } else if (numero % 3 ===0) {
            document.querySelector("#textnine").innerText = `Fizz`;
        } else if (numero != Number){
            document.querySelector("#textnine").innerText = `Numero "${numero}" não é um numero valido`;
        }

    }



    return(
            <Box 
            name="Questão 9" 
            tipo="FizzBuzza"
            texto=" Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'
            para números divisiveis por 3 e 5, para números divisíveis por 3 irá impirmir 'Fizz' e 
            para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos 
            acima imprime o próprio número."
            id="textnine"
            >
                <div>
                    <Input id="anynine" placeholder="escreva um numero" type="number" />
                    <Butt onClick={fizubu}>Go</Butt> 
                </div> 
            </Box>
            
    )
}
