import Nav from 'react-bootstrap/Nav';

const TabMenu = () => {
    return (
        <Nav justify="center" variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link disabled href="/home">Shared IDE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link disabled href="/addNew"> + </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default TabMenu;