const consoleEntryColor = {
    "LOG": "green",
    "ERROR": "red",
    "WARN": "orange"
}

function subscribeToDisplayedConsole() {
    const native = window;
    const originalConsole = native.console; //For access to original console methods

    const getStringifiedMessage = (args) => {
        if (Array.isArray(args)) return args.reduce((message, item) => {
            return (typeof item === 'string') ? `${message} ${item}` : message + JSON.stringify(item);
        }, '')
        return typeof args === 'object' ? JSON.stringify(args) : args;
    }

    const appendConsoleValue = (type: string, message: object | string) => {
        const el = document.createElement('li');
        el.style.color = consoleEntryColor[type.toUpperCase()] || 'white';
        el.innerHTML = getStringifiedMessage(message);
        document?.querySelector('#LocalConsoleContainer')?.appendChild(el);
    }

    native.console = {
        log: (...args) => appendConsoleValue('Log', args),
        error: (...args) => appendConsoleValue('Error', args),
        warn: (...args) => appendConsoleValue('Warn', args),
        debug: originalConsole.debug
    }
}

function clearLocalConsole() {
    try {
        if (document?.querySelector('#LocalConsoleContainer')?.value !== null) {
            document.querySelector('#LocalConsoleContainer').innerHTML = '';
        }
    } catch (e) {
        console.error('Error clearing local console', { error });
    }
}

export { consoleEntryColor, subscribeToDisplayedConsole, clearLocalConsole };