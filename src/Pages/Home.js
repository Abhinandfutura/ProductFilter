import React, { useState } from "react";
import styled from "styled-components/macro";
import IconButton from "@mui/material/IconButton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ProductList from "./ProductList";
import { useEffect } from "react";

function Home() {
  const [names, setName] = useState();

  const [state, setState] = useState({
    callSuper: false,
    datas: [],

    checkedItems: [],
  });
  const [search, setSearch] = useState("");
  const [filterdData, setFilterdData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkList, setCheckList] = useState({
    label: [
      {
        category: "women's clothing",
      },
      {
        category: "electronics",
      },
      {
        category: "jewelery",
      },
      {
        category: "men's clothing",
      },
    ],
  });

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    Fetch();
  }, []);

  const Fetch = async () => {
    setLoading(true);
    await axios.get("https://fakestoreapi.com/products/").then((res) => {
      setState((prevState) => {
        return {
          ...prevState,
          datas: res.data,
          callSuper: true,
        };
      });
    });

    setLoading(false);
  };

  // =======================================================
  useEffect(() => {
    let updatedList = state.checkedItems;

    if (state.callSuper) {
      setLoading(true);
      let filterDatas = state.datas;

      if (search) {
        filterDatas = filterDatas.filter((t) =>
          t.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      // ========================================category

      if (updatedList.includes(names)) {
        updatedList = updatedList.filter((i) => i !== names);
      } else {
        updatedList.push(names);
      }
      if (updatedList.length) {
        console.log("uplist", updatedList);
        filterDatas = filterDatas.filter((val) =>
          updatedList.includes(val.category)
        );
      }

      setFilterdData(filterDatas);
    }

    setState((prevState) => {
      return {
        ...prevState,
        callSuper: false,
        checkedItems: updatedList,
      };
    });

    setLoading(false);
  }, [state.callSuper]);

  const checkhandle = (name) => {
    setName(name);
    setState((prevState) => {
      return {
        ...prevState,
        callSuper: true,
      };
    });
  };
  return (
    <Container>
      <Sidebar>
        <SmallContainer>
          <ModalTxt>Search by name </ModalTxt>
          <InputContainer>
            <InputBase1
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={(e) => {
                setSearch(e.target.value);
                setState((prevState) => {
                  return {
                    ...prevState,
                    callSuper: true,
                  };
                });
              }}
            />
            <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </InputContainer>
        </SmallContainer>

        <Accordion1
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <Summary
            expandIcon={
              expanded === "panel3" ? <RemoveButton /> : <AddButton />
            }
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography1 sx={{ width: "100%", flexShrink: 0 }}>
              Brand
            </Typography1>
          </Summary>
          <AccordionDetails>
            <CheckboxGroup>
              {checkList.label.map((i) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      name={i.category}
                      onChange={() => checkhandle(i.category)}
                    />
                  }
                  label={i.category}
                />
              ))}
            </CheckboxGroup>
          </AccordionDetails>
        </Accordion1>
      </Sidebar>

      <Right>
        <ProductList
          loading={loading}
          setLoading={setLoading}
          filterdData={filterdData}
          search={search}
          setSearch={setSearch}
        />
      </Right>
    </Container>
  );
}

export default Home;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-family: "poppins", sans-serif !important;
    font-size: 12px;
    color: black;
  }
  svg {
    font-size: 1rem;
    color: black;
  }
  align-items: flex-start;
`;

const Typography1 = styled(Typography)`
  && {
    font-size: 12px;
    font-family: "poppins", sans-serif;
    font-weight: 600;
  }
`;

const Summary = styled(AccordionSummary)`
  && {
    min-height: 45px;
    .MuiAccordionSummary-content {
      margin: 0;
    }
  }
`;
const RemoveButton = styled(RemoveIcon)`
  && {
    font-size: 1rem;
  }
`;
const AddButton = styled(AddIcon)`
  && {
    font-size: 1rem;
  }
`;
const InputBase1 = styled(InputBase)`
  && {
    width: 80%;
    color: black;
    font-size: 12px;
    ::placeholder {
      font-size: 12px;
    }
  }
`;

const Accordion1 = styled(Accordion)`
  && {
    width: 100%;

    margin: 0.5px 0px !important;
    div[role="button"] {
      min-height: 35px !important;
    }
  }
`;
const InputContainer = styled.div`
  border: 1px solid #0000002e;
  min-width: 242px;
  width: 18vw;
  border-radius: 4px;
`;

const SmallContainer = styled.div`
  margin: 10px auto;
`;

const ModalTxt = styled.label`
  font-size: 13px;
  font-weight: 500;
`;
const Container = styled.div``;

const Right = styled.div`
  width: 79%;
  margin-left: auto;
  height: 100%;
`;
const Sidebar = styled.div`
  width: 20%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: fixed;
  left: 5px;
  top: 66px;
  border-radius: 2px; ;
`;
