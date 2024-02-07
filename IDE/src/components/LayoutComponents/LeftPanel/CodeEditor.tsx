import Editor from "@monaco-editor/react";
import { useState } from "react";
import { Button } from "react-bootstrap";

interface ICodeEditor {
    evaluateCode(code: string): void;
    language?: string;
    theme?: string;
}

const CodeEditor = (params: ICodeEditor) => {
    const { evaluateCode, language, theme } = params;
    
    const [ code, updateCode] = useState<string>('console.log("intial code")');

    const PanelHeader = () => (
      <div className="PanelHeader">
        <div>Console</div>
        <div><Button onClick={() => evaluateCode(code)} size="sm">Run</Button></div>
      </div>
    );
    
  return (
    <div>
      <PanelHeader />
      <Editor
        height="100px"
        language={language ?? "javascript"}
        theme={theme ?? "vs-dark"}
        value={code}
        className='CodeEditor'
        onChange={(value: string | undefined) => updateCode(value || '')}
      />
    </div>
  );
}
export default CodeEditor;