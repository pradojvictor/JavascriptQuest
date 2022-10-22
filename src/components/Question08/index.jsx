import Box from "../Box";
import { Butt2 } from "../Box/style";



export default function QuestionEight() {

    function sinal(e) {
        var value1 = e.target.value;
        if (value1 == 1) {
            document.querySelector("#texteight").innerText = `Atenção`;
        } else if (value1 == 2) {
            document.querySelector("#texteight").innerText = `Siga`;
        } else if (value1 == 3) {
            document.querySelector("#texteight").innerText = `Pare`;
        } 
    }
 

    return(
            <Box 
            name="Questão 8" 
            tipo="Semaforo, sinal ou sinaleira?"
            texto="Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito."
            id="texteight"
            >
                <div>
                    <Butt2 id="anyeight" onClick={sinal} value={1}>amarelo</Butt2>
                    <Butt2 id="anyeight" onClick={sinal} value={2}>verde</Butt2>
                    <Butt2 id="anyeight" onClick={sinal} value={3}>vermelho</Butt2>                  
 
                </div> 
            </Box>
            
    )
}
