const styles = {
    overlayStyles: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 99,
      backgroundColor: 'rgba(0,0,0,0.3)'
    },
    dialogStyles: {
      width: '90%',
      height: 'auto',
      position: 'fixed',
      top: '25%',
      left: '30%',
      backgroundColor: '#fff',
      borderRadius: '2px',
      zIndex: 1000,
      padding: '15px',
      boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)'
    },
    title: {
      marginTop: '0'
    },
    closeButtonStyle: {
      cursor: 'pointer',
      position: 'absolute',
      fontSize: '1.8em',
      right: '10px',
      top: '0'
    }
  };
  
  export default styles;