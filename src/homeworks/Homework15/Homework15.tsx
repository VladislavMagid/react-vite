import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Counter from "components/Counter/Counter";

import {Homework15Wrapper, ButtonControl} from "./styles"

function Homework15(){
    return (
    <Homework15Wrapper>
    <Input id="homework15" name="homework15" label="Homework15"/>
    <Counter count={0}/>
    <ButtonControl>
    <Button name="Send"/>
    </ButtonControl>
    </Homework15Wrapper>
    )
}

export default Homework15;