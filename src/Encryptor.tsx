import * as React from "react";
import {useState} from "react";
import {Button, InputGroup, Text, TextArea} from "@blueprintjs/core";
import {Intent} from "@blueprintjs/core/lib/esm/common/intent";
import Axios from "axios";


export const Encryptor = () => {
    const [address, setAddress] = useState();
    const [message, setMessage] = useState();
    const [result, setResult] = useState("");

    const encryptButtonHandler = async () => {

        const url = "http://167.99.255.241:5000/encrypt";
        const data = {
            "recipient":"a6bbc4aedd8019a67c9f9e4267c138062aed491070129faf8b108eacd0a6bb9f1d133b446a6904026680e5bfd6041cc95a4f3310ed1743de6157cc4fed796c66",
            "data":"data"
        };
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin":"*"
            }
        };

        const response = await Axios.post(url, data, axiosConfig);
        console.log(response);
        setResult(response.data);
    };

    return (
        <div>
            <p> Recipient </p>
            <InputGroup placeholder={"address"}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)}
            />
            <br/>
            <p> Message </p>
            <InputGroup placeholder={"enter message"}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
            />
            <br/>
            <Button intent={Intent.PRIMARY}
                    onClick={encryptButtonHandler}>encrypt</Button>
            <br/>
            {result &&(<Text>{result}</Text>)}
        </div>
    );
};