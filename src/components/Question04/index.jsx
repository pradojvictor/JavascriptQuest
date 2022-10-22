import Box from "../Box";
import { Input, Butt } from "../Box/style";



export default function QuestionFour() {

    function percentage() {
        var value1 = document.querySelector('#anyfourv1').value;
        var value2 = document.querySelector('#anyfourv2').value;
        var value3 = document.querySelector('#anyfourv3').value;

        var gain = (value1/(value2/100))*((value3/100)+1);
       
        document.querySelector("#textfour").innerText = `R$${gain} para lucro de ${value3}%`;
    }

    return(
            <Box 
            name="Questão 4" 
            tipo="Quero lucrar"
            texto="Crie um programa que me diga como lucrar nesta situação onde quero vender
            uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%."
            id="textfour"
            >
                <div>
                    <Input id="anyfourv1" placeholder="valor" type="any" />
                    <Input id="anyfourv2" placeholder="% do valor" type="any" />
                    <Input id="anyfourv3" placeholder="lucro em %" type="any" />   
                    <Butt onClick={percentage}>Go</Butt> 
                </div> 
            </Box>
            
    )
}
