import {React} from "react";
import styled from 'styled-components';
import * as c from "../components/Common/CommonStyle";
import logoPath from '../components/intro.gif';
import { useNavigate } from "react-router-dom";

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Page0 = () =>{
    const navigate = useNavigate();

    function Timer () {
        setTimeout(() => {
            navigate('./go_back');
        }, 3000);
    }

    return(
        <c.Totalframe>
            <Center>
                <img src={logoPath}  onload={Timer()}></img>
            </Center>
        </c.Totalframe>
    )
}

export default Page0;