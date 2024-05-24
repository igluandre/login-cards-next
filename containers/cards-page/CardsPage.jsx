'use client'

import { useEffect, useMemo, useState, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";

import { Card, Navbar, Spinner } from "@/components";
import { CardWrapper, Section } from "./style";
import { Container } from "@/components/globals";


export const CardsPage = () => {
  const randomNumber = useMemo(() => {
    return Math.floor(Math.random() * (500 - 200) + 200);
  }, []);

  const url = `https://fakerapi.it/api/v1/companies?_quantity=${randomNumber}`;
  const { data, isLoading } = useFetch(url);
  const { data: results } = !!data && data;
  const [copyListCards, setCopyListCards] = useState([]);

  const dragItem = useRef();
  const dragOverItem = useRef();

  useEffect(() => {
    setCopyListCards(results);
  }, [isLoading]);


  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <CardWrapper>
            {isLoading ? (
              <Spinner />
            ) : (
              copyListCards?.map((card, index) => (
                <Card
                  key={card.id}
                  {...card}
                  index={index}
                  copyListCards={copyListCards}
                  setCopyListCards={setCopyListCards}
                  dragItem={dragItem}
                  dragOverItem={dragOverItem}
                />
              ))
            )}
          </CardWrapper>
        </Container>
      </Section>
    </>
  );
};