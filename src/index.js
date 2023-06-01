import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerLicense } from '@syncfusion/ej2-base';

import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';

registerLicense('MjI3NTAyMUAzMjMxMmUzMDJlMzBONEFmREY5M0RqcnBHeGxqM1RKQk43dVAwQkc1U08zdFVYUnlXT1FmdWxVPQ==;Mgo+DSMBaFt+QHJqVk1mQ1ZbdF9AXnNAdFF0T2Ndbz4Nf1dGYl9RQXVeQFxhS35XfkdlXQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcEBFQmFJfFBmTGlbfVRwcEUmHVdTRHRcQlhgSHxSdEdjXXdacXA=;Mgo+DSMBPh8sVXJ1S0R+X1pCaVhdX2NLfUN/T2FbdV50ZDU7a15RRnVfR15iS39RdEVnUXpbdA==;MjI3NTAyNUAzMjMxMmUzMDJlMzBtaVhpbTBGZ2p1L2loNDRSaURqbVN3V1Jzbml4RmlmSVEyeDBBcVVNKzFrPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVldWnxLflF1VWpTfVx6dFFWACFaRnZdQV1mSn9Rd0dhWXtXcXJR;ORg4AjUWIQA/Gnt2VFhiQlJPcEBFQmFJfFBmTGlbfVRwcEUmHVdTRHRcQlhgSHxSdEdjXXZbdnA=;MjI3NTAyOEAzMjMxMmUzMDJlMzBYSGN1cE1DVElBaGdSOEpVQTFBaFVteVJLV1hodEhHL2ZFM0poWTFWUlNrPQ==;MjI3NTAyOUAzMjMxMmUzMDJlMzBLM3RtK0JkMjdXZXViV3JEaWF3dXVXRGFiRER0WVZDQjdBeVdDdGpkbTA4PQ==;MjI3NTAzMEAzMjMxMmUzMDJlMzBBZzhjZno0OFB0cHhRbC8yOGZxcUNYcEY5azg5aXZVeXNUSHdLelJxUDE0PQ==;MjI3NTAzMUAzMjMxMmUzMDJlMzBqOUUrRVdtSFhsenp3ODJaelU5eGUvWmRwNTJ1bENWTjB2UGhORkgvNVNNPQ==;MjI3NTAzMkAzMjMxMmUzMDJlMzBONEFmREY5M0RqcnBHeGxqM1RKQk43dVAwQkc1U08zdFVYUnlXT1FmdWxVPQ==');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
