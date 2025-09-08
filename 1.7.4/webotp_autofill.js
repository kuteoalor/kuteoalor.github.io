(function () {
    const prefix = '[WebOTP]';
    const isSupported = 'OTPCredential' in window;
    const hasCredsApi = !!(navigator && navigator.credentials && navigator.credentials.get);
    const isSecure = location.protocol === 'https:' || location.hostname === 'localhost';
    console.log(prefix, 'script loaded', { isSupported, hasCredsApi, isSecure, protocol: location.protocol, host: location.host });

    if (!isSupported) {
        console.log(prefix, 'OTPCredential not supported in this browser');
        return;
    }

    let abortController = null;
    let active = false;

    function safeMask(code) {
        if (!code || typeof code !== 'string') return code;
        if (code.length <= 2) return '*'.repeat(code.length);
        return '*'.repeat(code.length - 2) + code.slice(-2);
    }

    function start() {
        console.log(prefix, 'start() called');
        try {
            if (!hasCredsApi) {
                console.log(prefix, 'navigator.credentials.get is not available');
                return;
            }

            if (active && abortController) {
                console.log(prefix, 'aborting previous active request before starting a new one');
                try { abortController.abort(); } catch (_) { }
            }

            if ('AbortController' in window) {
                abortController = new AbortController();
                console.log(prefix, 'AbortController created');
            } else {
                abortController = null;
                console.log(prefix, 'AbortController not available');
            }

            active = true;
            console.log(prefix, 'calling navigator.credentials.get');
            navigator.credentials.get({
                otp: { transport: ['sms'] },
                signal: abortController ? abortController.signal : undefined,
            }).then(otp => {
                active = false;
                const masked = safeMask(otp && otp.code);
                console.log(prefix, 'OTP received', { code: masked });
                const webOtpAutofillEvent = new CustomEvent('web-otp-autofill', {
                    detail: { otp: otp.code }
                });
                console.log(prefix, 'dispatching web-otp-autofill event');
                window.dispatchEvent(webOtpAutofillEvent);
            }).catch(err => {
                active = false;
                const name = err && err.name;
                const message = err && err.message;
                console.log(prefix, 'credentials.get error', { name, message, err });
            });
        } catch (e) {
            active = false;
            console.log(prefix, 'unexpected exception in start()', e);
        }
    }

    function stop() {
        console.log(prefix, 'stop() called');
        try {
            if (abortController) {
                console.log(prefix, 'aborting current request');
                abortController.abort();
                abortController = null;
            } else {
                console.log(prefix, 'no active controller to abort');
            }
            active = false;
        } catch (e) {
            console.log(prefix, 'unexpected exception in stop()', e);
        }
    }

    window.dzengoStartWebOtp = start;
    window.dzengoStopWebOtp = stop;
    console.log(prefix, 'APIs attached to window: dzengoStartWebOtp, dzengoStopWebOtp');
})();