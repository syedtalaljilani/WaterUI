import {useState} from 'react'
import {githubDark} from '@uiw/codemirror-theme-github';
import {javascript} from "@codemirror/lang-javascript";
import CodeMirror from '@uiw/react-codemirror';

const CodeEditor = ({code}) => {
    const [text, setText] = useState(code);
    return(
        <CodeMirror
                        value={text}
                        onChange={(newValue) => setText(newValue)}
                        theme={githubDark}
                        extensions={[javascript({jsx:true})]}
                        basicSetup={{autocompletion: true}}
                        minWidth={'80vw'}
                        minHeight={'90vh'}
                    />
    );
}

export default CodeEditor