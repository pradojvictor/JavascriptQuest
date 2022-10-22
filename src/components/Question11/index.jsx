import Box from "../Box";
import { Input, Butt } from "../Box/style";



export default function QuestionSix() {

    
    function letgo() {
        var value1 = document.querySelector('#anysixV1').value;
        var value2 = document.querySelector('#anysixV2').value;
        

        var discount = (value1 * (100-value2))/100
       
        document.querySelector("#textsix").innerText = `R$${discount} para discontar ${value2}%`;
    }


    return(
            <Box 
            name="Questão 6" 
            tipo="Desapega"
            texto="Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo 
            foi R$3000, por quanto devo vendê-lo descontando 25%?"
            id="textsix"
            >
                <div>
                    <Input id="anysixV1" placeholder="Valor Produto" type="any" />
                    <Input id="anysixV2" placeholder="desconto em %" type="any" />
                    <Butt onClick={letgo}>Go</Butt> 
                </div> 
            </Box>
            
    )
}
