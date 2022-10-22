import Box from "../Box";
import { Input, Butt } from "../Box/style";



export default function QuestionTwo() {

    function print() {
        var information = document.querySelector('#anyTwo').value;
        // var hello = "Olá"  => tambem funciona mais são duas linhas a mais em um codigo simples
        // var junto = `${hello} ${information}`; => tmb pode se substitir o hello por Olá, eliminando a linha anterior
        

        var valo = (information) 
        document.querySelector("#texttwo").innerText = `Olá ${valo}`;
  }

    return(
            <Box 
            name="Questão 2" 
            tipo="Concatenar x interpolar"
            texto="Vamos criar variaveis usando let, const e var, atribuir strings e vamos concatenar e interpolar."
            id="texttwo"
            >
                <div>
                    <Input id="anyTwo" placeholder="escreva seu Nome" type="any" />
                    <Butt onClick={print}>Go</Butt> 
                </div> 
            </Box>
            
    )
}
