import Box from "../Box";
import { Input, Butt } from "../Box/style";



export default function QuestionSeven() {

    function convert() {
        var value = document.querySelector('#anyseven').value;
        
        var millimeter = value * 1000

        document.querySelector("#textseven").innerText = `${millimeter} milímetros`;
  }

    return(
            <Box 
            name="Questão 7" 
            tipo="Conversor de medidas"
            texto="Escreva um programa que receba um valor em metros e o exiba no console convertido em milímetros."
            id="textseven"
            >
                <div>
                    <Input id="anyseven" placeholder="escreva em metros" type="any" />
                    <Butt onClick={convert}>Go</Butt> 
                </div> 
            </Box>
            
    )
}
