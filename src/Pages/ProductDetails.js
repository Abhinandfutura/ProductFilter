import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import axios from "axios";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
function ProductDetails() {
  let { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [data1, setData] = useState({ item: [], callSuper: false });

  useEffect(() => {
    setLoading(true);
    fetch();
    if (data1.item != 0) {
      setLoading(false);
    }
  }, [data1.callSuper]);

  let fetch = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data.rating.rate);
      setData((prevState) => {
        return {
          ...prevState,
          item: res.data,
          callSuper: true,
        };
      });
    });
  };

  return (
    <Container>
      <Head>
        <HomeTxt2>{data1.item.title}</HomeTxt2>
      </Head>

      <Card>
        <ImgDiv>
          <Img src={data1.item.image} />
        </ImgDiv>

        <CarDetails>
          <Left>
            <Rating_container>
              <Rating>Price :</Rating>
              <Rating1>{data1.item.price} ₹</Rating1>
            </Rating_container>
          </Left>

          <Right>
            <Rating_container>
              <Rating>Category :</Rating>
              <Rating1>{data1.item.category}</Rating1>
            </Rating_container>
          </Right>
        </CarDetails>
      </Card>
      <p style={{ fontWeight: "bold" }}> Description :</p>
      <span>{data1.item.description} </span>
      <Loader color="secondary" loading={loading} />
    </Container>
  );
}

export default ProductDetails;

const Loader = styled(CircularProgress)`
  && {
    display: ${({ loading }) => (loading ? "" : "none")};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Rating = styled.div`
  color: #000000c2;
  font-weight: bold;
  font-size: 13px;
`;
const Rating1 = styled(Rating)`
  margin-left: 5px;
  color: black;
`;

const Right = styled.div``;

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  object-fit: contain;
`;
const ImgDiv = styled.div`
  height: 200px;
  width: 400px; ;
`;

const Container = styled.div``;
const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 20px;
`;

const HomeTxt = styled.span`
  font-size: 15px;
  color: grey;
`;

const HomeTxt2 = styled(HomeTxt)`
  font-weight: 500;

  color: black;
`;

const Rating_container = styled.div`
  display: flex;
`;

const Left = styled.div``;

const CarDetails = styled.div`
  display: flex;

  flex-direction: column;
  gap: 10px;
`;

const Card = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 2px; ;
`;
