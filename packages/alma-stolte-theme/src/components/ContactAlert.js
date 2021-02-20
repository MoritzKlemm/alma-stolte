import { React, useState } from 'react';
import Alert from 'react-bootstrap/Alert'
import { connect, styled, css } from 'frontity';



const ContactAlert = (props) => {

    const [openClose, setOpenClose] = useState(props.showHide)

    console.log("openClose: "+openClose)
    console.log("props show hide: "+ props.showHide)
    if (openClose) {
        return (
            <div>
                <Alert variant="success" onClose={() => setOpenClose(false)} dismissible>
                    <Alert.Heading>Ihre Nachricht wurde abgeschickt!</Alert.Heading>
                    <p>Alma Stolte wird sich in den nächsten Tagen bei Ihnen melden</p>
                </Alert>
            </div>
        )
    } else {
        return null;
    }
}

export default connect(ContactAlert);