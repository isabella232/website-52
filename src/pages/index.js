import React from 'react'
import Link from 'gatsby-link'
import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Carousel,
  Button,
  PageHeader,
  Glyphicon
} from 'react-bootstrap'

const IndexPage = ({ data }) => {
  const { description } = data.site.siteMetadata
  return (
    <div>
      <Jumbotron style={{
        background: 'black'
      }}>
        <div className="container">
          <Grid>
            <Row>
              <Col xs={12} sm={12} md={6}>
                <img src="/images/hawtio_logo.svg" style={{ height: 100, margin: 0 }} />
                <h2 style={{ color: 'lightgrey' }}>{description}</h2>
                <div style={{ marginTop: '4rem', marginBottom: '1rem' }}>
                  <Button href="/docs/articles/" style={{ marginRight: '2rem' }}>View Demos</Button>
                  <Button bsStyle="primary" href="/docs/get-started/">Get Started Now</Button>
                </div>
              </Col>
              <Col xsHidden smHidden md={6}>
                <Carousel interval={10000} indicators={false} controls={false} style={{ marginLeft: 50 }}>
                  <Carousel.Item>
                    <img alt="JMX MBeans" src="/images/screenshots/jmx.png" />
                    <Carousel.Caption>
                      <h3 style={{ color: 'black' }}>JMX MBeans</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="Camel Routes" src="/images/screenshots/jmx.png" />
                    <Carousel.Caption>
                      <h3 style={{ color: 'black' }}>Camel Routes</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="Spring Boot" src="/images/screenshots/jmx.png" />
                    <Carousel.Caption>
                      <h3 style={{ color: 'black' }}>Spring Boot</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Grid>
        </div>
      </Jumbotron>
      <div className="container">
        <Grid>
          <Row>
            <Col md={4} style={{ padding: '3rem' }}>
              <h3>
                <Glyphicon glyph="wrench" style={{
                  verticalAlign: 'top', marginRight: '0.5rem'
                }} /> Modular architecture
              </h3>
              <p>
                Hawtio is made up of a collection of plugins at its <a href="https://github.com/hawtio/hawtio-core">core</a>,{' '}
                each of which is an <a href="https://angularjs.org">AngularJS</a> module.
              </p>
              <p>
                It is highly extensible: you can dynamically extend Hawtio with your own plugins or automatically discover plugins inside the JVM.
              </p>
            </Col>
            <Col md={4} style={{ padding: '3rem' }}>
              <h3>
                <Glyphicon glyph="equalizer" style={{
                  verticalAlign: 'top', marginRight: '0.5rem'
                }} /> Built-in plugins
              </h3>
              <p>
                Hawtio has lots of built-in plugins such as:{' '}
                <a href="https://github.com/hawtio/hawtio-jmx/tree/master/plugins/jmx">JMX</a>,{' '}
                <a href="https://github.com/hawtio/hawtio-jmx/tree/master/plugins/jvm">JVM</a>,{' '}
                <a href="https://github.com/hawtio/hawtio-integration/tree/master/plugins/osgi">OSGi</a>,{' '}
                <a href="https://github.com/hawtio/hawtio-integration/tree/master/plugins/activemq">Apache ActiveMQ</a>,{' '}
                <a href="https://github.com/hawtio/hawtio-integration/tree/master/plugins/camel">Apache Camel</a>, and{' '}
                <a href="https://github.com/hawtio/hawtio-integration/tree/master/plugins/spring-boot">Spring Boot</a>.
              </p>
              <p>
                You can get to work right away with Hawtio out of the box.
              </p>
            </Col>
            <Col md={4} style={{ padding: '3rem' }}>
              <h3>
                <Glyphicon glyph="fire" style={{
                  verticalAlign: 'top', marginRight: '0.5rem'
                }} /> Small footprint
              </h3>
              <p>
                The only server side dependency (other than the static HTML/CSS/JS/images) is the
                excellent <a href="https://jolokia.org">Jolokia</a> library which has small footprint (around 300 KB)
                and is available as a JVM agent, or comes embedded as a servlet inside the <code>hawtio-default.war</code> or
                can be deployed as an OSGi bundle.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} style={{ padding: '3rem' }}>
              <h3>
                <Glyphicon glyph="eye-open" style={{
                  verticalAlign: 'top', marginRight: '0.5rem'
                }} /> Look & feel for enterprise
              </h3>
              <p>
                Hawtio skin is baked with <a href="https://getbootstrap.com">Bootstrap</a> and{' '}
                <a href="http://www.patternfly.org">PatternFly</a>, a UI framework for enterprise web applications.
                The stylish UI won't let you get bored!
              </p>
            </Col>
            <Col md={4} style={{ padding: '3rem' }}>
              <h3>
                <Glyphicon glyph="cloud-upload" style={{
                  verticalAlign: 'top', marginRight: '0.5rem'
                }} /> Ready for cloud
              </h3>
              <p>
                Hawtio console can be{' '}
                <a href="https://github.com/hawtio/hawtio/tree/2.x/examples/springboot">attached to a Spring Boot application in a snap</a>.
              </p>
              <p>
                Hawtio is also <a href="https://github.com/hawtio/hawtio-online">ready to run on Kubernetes and OpenShift</a>.
              </p>
            </Col>
            <Col xsHidden md={4} style={{ padding: '3rem' }}>
            </Col>
          </Row>
        </Grid>
      </div>
      <div className="container">
        <PageHeader>
          <h2>What's new?</h2>
        </PageHeader>
        TBD
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
