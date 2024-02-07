import { Button } from "react-bootstrap";
import { clearLocalConsole } from "../../../utility/utility";

const LocalConsole = () => {
    const PanelHeader = () => (
        <div className="PanelHeader">
            <div>Console</div>
            <div><Button variant="link" onClick={() => clearLocalConsole()} size="sm">Clear</Button></div>
        </div>
    );

    return (
        <>
            <PanelHeader />
            <ul style={{ listStyleType: 'none' }} id='LocalConsoleContainer'></ul>
        </>
    );
}
export default LocalConsole;