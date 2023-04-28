import React, { FC } from "react";

import { Container, PizzaCards, Section } from "../../components";

const PizzaPage: FC = () => (
  <Section>
    <h1 className="visually-hidden">Pizza page</h1>
    <main>
      <Container>
        <PizzaCards />
      </Container>
    </main>
  </Section>
);

export default PizzaPage;
