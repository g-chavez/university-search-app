"use client";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import University from "../university/university";
import Search from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import ExitToApp from "@mui/icons-material/ExitToApp";

export default function Home() {
  const [country, setCountry] = useState("");
  const [result, setResult] = useState([]);
  const [currentPageElements, setCurrentPageElements] = useState([]);
  const [initialElement, setInitialElement] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoadding] = useState(false);
  let i = 0;
  const pageSize = 10;

  function handleSearch() {
    setError("");
    if (country.trim() === "") {
      setError("Type a country.");
    } else {
      getUniversitiesApi();
    }
  }

  function getUniversitiesApi() {
    setIsLoadding(true);
    axios
      .get("http://universities.hipolabs.com/search?country=" + country.trim())
      .then((response) => {
        setResult(response.data);
        setInitialElement(0);
        setCurrentPageElements(response.data.slice(0, pageSize));
        setIsLoadding(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoadding(false);
      });
  }

  function handlePrevious() {
    if (initialElement < 10) return;
    else setInitialElement(initialElement - pageSize);

    setCurrentPageElements(
      result.slice(initialElement - pageSize, initialElement)
    );
  }

  function handleNext() {
    if (initialElement + pageSize > result.length) return;

    setCurrentPageElements(
      result.slice(initialElement + pageSize, initialElement + 2 * pageSize)
    );

    setInitialElement(initialElement + pageSize);

  }

  function handleExit () {
    location.reload();
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          placeholder="Type country"
          onChange={(e) => setCountry(e.target.value)}
        >
          <Search />
        </TextField>

        <Button
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </Button>

        <div>
          {error && (
            <div>
              <FormHelperText id="component-error-text" error>
                {error}
              </FormHelperText>
            </div>
          )}
        </div>

        <FormHelperText id="component-error-text">
          Total records: {result.length}
        </FormHelperText>

        {result &&
          result.length > 0 &&
          currentPageElements.map((item) => (
            <University
              name={item.name}
              webpage={item.web_pages[0]}
              domain={item.domains[0]}
              alpha_two_code={item.alpha_two_code}
              key={i++}
            />
          ))}

        {result && result.length > 0 && currentPageElements.length > 0 && (
          <React.Fragment>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowLeftOutlined
                onClick={() => {
                  handlePrevious();
                }}
              />
              <ArrowRightOutlined
                onClick={() => {
                  handleNext();
                }}
              />
            </Stack>
          </React.Fragment>
        )}

        <ExitToApp width={20} height={20} onClick={handleExit} />
      </Stack>
    </Box>
  );
}
