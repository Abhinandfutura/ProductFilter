import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Pagination from "@mui/material/Pagination";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { UsePagination } from "../Components/UsePagination";

function ProductList({ loading, filterdData, search, setSearch }) {
  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const NumOfpages = Math.ceil(filterdData.length / itemsPerPage);
  const ChangePage = (e, value) => {
    setCurrentPage(value);
  };

  const [finalData, setFinalData] = useState([]);
  useEffect(() => {
    if (filterdData.length) {
      let items = {
        filterdData,
        currentPage,
        itemsPerPage,
      };
      let filter = UsePagination(items);
      console.log("filter", filter);
      if (filter) {
        setFinalData(filter);
      }
    }

    setSearch("");
  }, [currentPage, filterdData.length, search]);

  return (
    <Container>
      <ListContainer>
        {finalData.map((i) => (
          <Card>
            <CardHead>
              <NameTxt>{i.title}</NameTxt>
            </CardHead>

            <ImageContainer>
              <ImgDiv>
                <Img src={i.image} />
              </ImgDiv>
            </ImageContainer>
            <CarDetails>
              <Left>
                <Rating_container>
                  <Rating>Category :</Rating>
                  <Rating1>{i.category}</Rating1>
                </Rating_container>
              </Left>

              <Right>
                <Rating_container>
                  <Rating>Rating :</Rating>
                  <Rating1>{i.rating.rate}</Rating1>
                </Rating_container>
              </Right>
            </CarDetails>

            <BottomContainer>
              <Rupees>{i.price} ₹</Rupees>

              <SyledButton variant="contained">
                <Links to={`/product-detailes/${i.id}`}>
                  View more detailes
                </Links>
              </SyledButton>
            </BottomContainer>
          </Card>
        ))}
      </ListContainer>
      <PagenationContainer>
        <Pagination count={NumOfpages} onChange={ChangePage} />
      </PagenationContainer>

      <Loader color="secondary" loading={loading} />
    </Container>
  );
}

export default ProductList;

const PagenationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SyledButton = styled(Button)`
  && {
    font-family: "poppins", sans-serif;
    text-transform: capitalize;
    font-size: 11px;
    font-weight: 400;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;

  height: 100px;
  flex-direction: row;
`;
const Rating_container = styled.div`
  display: flex;
`;
const Rupees = styled.span`
  font-weight: 700;
  font-size: 16px;
`;
const Rating = styled.div`
  color: #000000b5;
  font-size: 13px;
`;
const Rating1 = styled(Rating)`
  margin-left: 5px;
  color: black;
`;
const CardHead = styled.div``;
const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const Left = styled.div``;
const Right = styled.div`
  margin-left: 20px;
`;
const CarDetails = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 2px;
  object-fit: contain;
`;
const ImgDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const YearTxt = styled.span`
  font-size: 11px;
  display: block;
  color: #000000b5;
`;

const NameTxt = styled.span`
  font-weight: 500;
  font-size: 13px;
`;
const Card = styled.div`
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: #efebe5;
  }
  transition: all 0.3s;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 2px; ;
`;
const ListContainer = styled.div`
  display: grid;
  row-gap: 10px;
  /* margin-top: 30px; */

  column-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Container = styled.div``;

const Loader = styled(CircularProgress)`
  && {
    display: ${({ loading }) => (loading ? "" : "none")};

    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
  }
`;

const Links = styled(Link)`
  text-decoration: none;
  color: white;
`;
