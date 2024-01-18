import styled from 'styled-components';

export const Box = styled.div`
  padding: 40px 60px;
  background: black;
  left: 0;
  bottom: 0;
  border-top: 1px solid #FFF; 

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  `;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
    `

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 0px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
                        minmax(300px, 1fr));
grid-gap: 40px;

@media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill,
                        minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
cursor: pointer;

&:hover {
    color: green;
    transition: 200ms ease-in;
}
@media (max-width: 1000px) {
  font-size: 14px;
}
`;

export const Text = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
@media (max-width: 1000px) {
  font-size: 14px;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;