'use client';
import { Box, Button, Flex, Card, Grid, TextField, Text, Skeleton } from "@radix-ui/themes";
import { ArrowLeftIcon, ArrowRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import axios from 'axios';
import University from "./university";

export default function Home() {

  const myStyle = {
    fontFamily: "system-ui,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
    height:"100vh",
    textAlign:"center",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  };

  const [country, setCountry] = useState('');
  const [result, setResult] = useState([]);
  const [currentPageElements, setCurrentPageElements] = useState([]);
  const [initialElement, setInitialElement] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoadding] = useState(false);
  let i = 0;
  const pageSize = 10;
  
  
  function handleSearch () {
    setError('');
    if (country.trim() === '') {
      setError('Type a country.');
    }
    else {
      getUniversitiesApi();
    }
  }

  function getUniversitiesApi() {
    setIsLoadding(true);
    axios.get('http://universities.hipolabs.com/search?country=' +  country.trim())
      .then(response => {
        setResult(response.data);
        setInitialElement(0);
        setCurrentPageElements(response.data.slice(0, pageSize));
        setIsLoadding(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoadding(false);
      });
  }

  function handlePrevious () {
    if (initialElement < 10)
      return;
    else
      setInitialElement(initialElement - pageSize);

    setCurrentPageElements(result.slice(initialElement - pageSize, initialElement));
  }

  function handleNext () {
    if (initialElement + pageSize > result.length)
      return;

    setCurrentPageElements(result.slice(initialElement + pageSize, initialElement + 2*pageSize));

    setInitialElement(initialElement + pageSize);

  }

  return (
        <Box style={myStyle}>
          <Card size="4">
            <Flex direction="column" gap="3" width={"500px"}>
              <Grid gap="1">
                <TextField.Root placeholder="Type country" onChange={(e) => setCountry(e.target.value)}>
                  <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>
              </Grid>
              <Grid columns="1" gap="1">
                <Button variant="surface" onClick={() => { handleSearch() }}>
                  Search
                </Button>
              </Grid>
              <Text>
                <div>
                  {error && <div><Text color='crimson'>{error}</Text></div>}
                </div>
              </Text>
              <Skeleton loading={isLoading}>
                {<Text color="indigo">
                    Total records: {result.length}
                  </Text>
                }
                { result && result.length > 0 && currentPageElements.map( (item) => 
                  <University name={item.name} webpage={item.web_pages[0]} key={i++}/>
                ) }

                { result && result.length > 0 && currentPageElements.length > 0 && 
                <Grid columns="2" gap="1">
                  <Button variant="surface" onClick={() => { handlePrevious() }}>
                    <ArrowLeftIcon/>
                  </Button>
                  <Button variant="surface" onClick={() => { handleNext() }}>
                    <ArrowRightIcon/>
                  </Button>
                </Grid>}
              </Skeleton>
            </Flex>
          </Card>
        </Box>
      );
}
