// pages/dynamic.tsx

import { GetStaticProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

type ApiResponse = {
  name: string
  timestamp: Date
}

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())
  return {
    props: {
      staticData
    }

  }
}

const Static: NextPage = (props: {
  children?: ReactNode
  staticData?: ApiResponse
}
) => {
  const [clientSideData, setClientSideDAta] = useState<ApiResponse>()

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch("/api/hello").then(res => res.json())
    setClientSideDAta(data)
  }
  return (
    <Container tag="main">
      <h1 className="my-5">
        Como funcionam as renderizações do Next.js
      </h1>

      <Row>
        <Col>
          <h3>
            Gerado estaticamente durante o build:
          </h3>
          <h2>
            {props.staticData?.timestamp.toString()}
          </h2>

        </Col>

        <Col>
          <h3>
            Gerado no Cliente1:
          </h3>
          <h2>
            {clientSideData?.timestamp.toString()}
          </h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Static