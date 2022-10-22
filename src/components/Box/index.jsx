import { Card, Texto } from "./style";

export default function Box(props) {
    return (
        <Card>
            <div>
                <h2>{props.name}</h2>
                <span>TIPO: {props.tipo}</span>
                <p>{props.texto}</p>
            </div>
            <Texto disabled id={props.id}></Texto>
            {props.children}
        </Card>
    )
}