import App, { Container } from "next/app";
import Layout from "../components/MyLayout";

export default class extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Layout>
          <Component />
        </Layout>
      </Container>
    );
  }
}
