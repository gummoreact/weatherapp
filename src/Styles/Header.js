import styled from "styled-components";

const HeaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem;

.NavLinks {
    width: 35%;
    a{
    padding: 2rem;
    text-decoration: none;
    color: black;
    font-size: 1.42rem;
    
    }
}
`;

const Header = () => {
    return ( 
        <HeaderContainer>
            <div className="HeaderSiteName">
                <h1>Weather App</h1>
            </div>
            <div className="NavLinks">
                <a href="/#">Forecast</a>
                <a href="/#">Alerts</a>
                <a href="/#">Indexs</a>
            </div>
        </HeaderContainer>
    );
}

export default Header;