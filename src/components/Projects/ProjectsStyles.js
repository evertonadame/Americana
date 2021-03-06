import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
padding: 1rem;
place-items: center;
column-gap: 1rem;
row-gap: 1rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width:300px;

  .card-info {
    display: flex;
    justify-content: center;

}
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;

export const SelectDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;

`

export const ItemDiv = styled.button`
  background: #0078ea;
  margin-bottom: 1rem;
  border-radius: 10px;
  padding: 1rem;
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);

`

export const HeaderThree = styled.h3`
  font-weight: 500;
  color: #9cc9e3;
  font-size: ${(props) => props.title ? '2rem' : '1rem'};
`;

export const Hr = styled.hr`
  width: 100px;
  height: 3px;
  margin: 5px auto;
  border: 0;
  background: red;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 30px;
  color: #e4e6e7;
  line-height: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
`;

export const ExternalLinks = styled.a`
color: #000;
font-size: 1.6rem;
padding: 1rem 2.5rem;
background: #fff;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: blue;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: .05rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`