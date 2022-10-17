import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Container from "react-bootstrap/Container";
import Heading from "../components/common/Heading";

/**
 * Creates the Admin page
 */

export default function Admin() {
  return (
    <Layout>
      <Head title="Admin" />
      <Container className="p-5">
        <Heading content="Admin Page" />
      </Container>
    </Layout>
  );
}
