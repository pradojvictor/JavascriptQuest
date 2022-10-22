import Box from "../Box";
import { Butt2 } from "../Box/style";



export default function QuestionTen() {

    
    function day(e) {
        var value = e.target.value;
    
        if (value == 1) {
            document.querySelector("#textten").innerText = `dia de aula`;
        } else if (value == 2) {
            document.querySelector("#textten").innerText = `não é dia de aula`;
        } else if (value == 3) {
            document.querySelector("#textten").innerText = `dia de aula`;
        } else if (value == 4) {
            document.querySelector("#textten").innerText = `não é dia de aula`;
        } else if (value == 5) {
            document.querySelector("#textten").innerText = `não é dia de aula`;
        } else if (value == 6) {
            document.querySelector("#textten").innerText = `dia de aula`;
        } else if (value == 7) {
            document.querySelector("#textten").innerText = `não é dia de aula`;
        } 
    }

    return(
            <Box 
            name="Questão 10" 
            tipo="É dia de aula?"
            texto="Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar
            // os dias de aula para a nossa turma."
            id="textten"
            >
                <div>
                <Butt2 onClick={day} value={1}>Segunda</Butt2> 
                <Butt2 onClick={day} value={2}>Terça</Butt2>
                <Butt2 onClick={day} value={3}>Quarta</Butt2> 
                <Butt2 onClick={day} value={4}>Quinta</Butt2> 
                <Butt2 onClick={day} value={5}>Sexta</Butt2> 
                <Butt2 onClick={day} value={6}>Sabado</Butt2> 
                <Butt2 onClick={day} value={7}>Domingo</Butt2> 
                </div> 
            </Box>
            
    )
}
