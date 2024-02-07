import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CodeEditor from './LeftPanel/CodeEditor';
import LocalConsole from './RightPanel/LocalConsole';
import { clearLocalConsole } from '../../utility/utility';

const LayoutContainer = () => {

    const handleCodeUpdate = (updatedCode: string) => {
      clearLocalConsole()
      eval(updatedCode);
    }

    return (
      <Container fluid>
        <Row>
          <Col className='LayoutContainer'>
            <CodeEditor evaluateCode={(updatedCode) => handleCodeUpdate(updatedCode)} />
          </Col>
          <Col md="4" className='LayoutContainer'>
            <LocalConsole />
          </Col>
        </Row>
      </Container>
    );
  }

export default LayoutContainer;