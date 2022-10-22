import QuestionOne from '../../components/Question01';
import QuestionTwo from '../../components/Question02';
import QuestionThree from '../../components/Question03';
import QuestionFour from '../../components/Question04';
import QuestionFive from '../../components/Question05';
import QuestionSix from '../../components/Question06';
import QuestionSeven from '../../components/Question07';
import QuestionEight from '../../components/Question08';
import QuestionNine from '../../components/Question09';
import QuestionTen from '../../components/Question10';
import { Button, Section, Wrapper } from './style';


export default function Home() {

    function buttScroll() {
        addEventListener('click', () => {
            window.scroll({ top: window.innerHeight, behavior: "smooth" })
        })
    }

    return (
        <>
            <Section>
            <Button onClick={buttScroll}>Get Started</Button>
            </Section>
            <Wrapper>
                <QuestionOne/>
                <QuestionTwo/>
            </Wrapper>
            <Wrapper>
                <QuestionThree/>
                <QuestionFour/>
            </Wrapper>
            <Wrapper>
                <QuestionFive/>
                <QuestionSix/>
            </Wrapper>
            <Wrapper>
                <QuestionSeven/>
                <QuestionEight/>
            </Wrapper>
            <Wrapper>
                <QuestionNine/>
                <QuestionTen/>
            </Wrapper>
        </>
    )
}