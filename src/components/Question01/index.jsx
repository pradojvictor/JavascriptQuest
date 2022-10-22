import Box from "../Box";
import { Input, Butt } from "../Box/style";



export default function QuestionOne() {

    function print() {
        var information = document.querySelector('#any').value;

        var valo = (information) 
        document.querySelector("#texto").innerText = valo;
  }

    return(
            <Box 
            name="Questão 1" 
            tipo="Variavel"
            texto="Vamos criar variaveis usando let, const e var, atribuir valores,
            identificar comportamentos e saídas quando tentarmos recuperar."
            id="texto"
            >
                <div>
                    <Input id="any" placeholder="number/text" type="any" />
                    <Butt onClick={print}>Go</Butt> 
                </div> 
            </Box>
            
    )
}


   