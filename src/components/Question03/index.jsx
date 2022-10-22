import Box from "../Box";
import { Input, Butt } from "../Box/style";



export default function QuestionThree() {

    function media() {
        var value1 = document.querySelector('#anyThreeV1').value;
        var value2 = document.querySelector('#anyThreeV2').value;
        var value3 = document.querySelector('#anyThreeV3').value;
        var value4 = document.querySelector('#anyThreeV4').value;

        var media = (parseFloat(value1) + parseFloat(value2)  + parseFloat(value3)  +  parseFloat(value4))/4;
       
        document.querySelector("#textthree").innerText = media;
        
  }

    return(
            <Box 
            name="Questão 3" 
            tipo="Concatenar x interpolar"
            texto="Crie uma variavel e atribua como valor uma operacao de média entre 4 números."
            id="textthree"
            >
                <div>
                    <Input id="anyThreeV1" placeholder="escreva um valor" type="number" min="0"/>
                    <Input id="anyThreeV2" placeholder="escreva um valor" type="number" />
                    <Input id="anyThreeV3" placeholder="escreva um valor" type="number" />
                    <Input id="anyThreeV4" placeholder="escreva um valor" type="number" />
                    <Butt onClick={media}>Go</Butt> 
                </div> 
            </Box>
            
    )
}
