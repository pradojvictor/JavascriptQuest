import Box from "../Box";
import { Input, Butt } from "../Box/style";



export default function QuestionFive() {

    function soma() {
        var value1 = document.querySelector('#anyfiveV1').value;
        var value2 = document.querySelector('#anyfiveV2').value;

        var total = parseFloat(value1) + parseFloat(value2);
         
        document.querySelector("#textfive").innerText = `Soma é ${total}`;
  }

    return(
            <Box 
            name="Questão 5" 
            tipo="Quero somar"
            texto="Faça um programa que peça dois números e imprima no console a soma desses dois números."
            id="textfive"
            >
                <div>
                    <Input id="anyfiveV1" placeholder="escreva seu Nome" type="any" />
                    <Input id="anyfiveV2" placeholder="escreva seu Nome" type="any" />
                    <Butt onClick={soma}>Go</Butt> 
                </div> 
            </Box>
            
    )
}
