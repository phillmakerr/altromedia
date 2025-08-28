import { useEffect } from "react";

const ApplicationForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{position:"fixed",top:"0px",left:"0px",right:"0px",bottom:"0px"}}>
      <div 
        data-fillout-id="hnmPNxgn53us" 
        data-fillout-embed-type="fullscreen" 
        style={{width:"100%",height:"100%"}} 
        data-fillout-inherit-parameters 
      ></div>
    </div>
  );
};

export default ApplicationForm;